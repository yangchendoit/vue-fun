<template>
  <div class="lottery-wheel">
    <div class="wheel-table">
      <div class="wheel-pointer">
        <div @click="lotteryStart" class="lottery-button">
          <span>Go</span><span>剩余{{ restCount }}次</span>
        </div>
      </div>
      <div
        class="wheel-dial"
        :style="{ transform: rotateAngle, transition: rotateTransition }"
      ></div>
    </div>
    <el-dialog
      title=""
      :visible.sync="successDialogVisible"
      :append-to-body="true"
      top="40vh"
      custom-class="lottery-success-dialog"
      width="410px"
    >
      <div class="lottery-success">
        <div class="lottery-success-content">
          <i class="icon-smile"></i>
          <div>
            <p>{{ successWord }}</p>
            <p>
              工作人员将在1个工作日内联系您，并在次日（工作日）安排发送礼品。
            </p>
          </div>
        </div>
        <div class="lottery-success-btn">
          <el-button
            size="small"
            type="primary"
            @click="successDialogVisible = false"
            >确 定</el-button
          >
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      successWord: "抽奖活动暂未开始",
      successDialogVisible: false,
      hasPrize: false, // 是否中奖
      startRotatingDegree: 0, // 初始旋转角度
      rotateAngle: 0, // 将要旋转的角度
      rotateTransition: "transform 6s ease-in-out", // 初始化选中的过度属性控制
      clickFlag: true, // 是否可以旋转抽奖
      prizeList: [
        {
          id: 1,
          name: "苹果8", // 奖品名称
          angle: 45,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 2,
          name: "京东2000元购物卡", // 奖品名称
          angle: 15,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 3,
          name: "京东1000元购物卡", // 奖品名称
          angle: 315,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 4,
          name: "京东500元购物卡", // 奖品名称
          angle: 285,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 5,
          name: "500G定制LOGO移动硬盘", // 奖品名称
          angle: 225,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 6,
          name: "八戒财税定制背包", // 奖品名称
          angle: 165,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 7,
          name: "16G猪猪U盘", // 奖品名称
          angle: 135,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 8,
          name: "财税猪钥匙扣", // 奖品名称
          angle: 345,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 9,
          name: "防紫外线自动加大雨伞", // 奖品名称
          angle: 255,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 10,
          name: "猪公仔", // 奖品名称
          angle: 75,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 11,
          name: "搪瓷杯", // 奖品名称
          angle: 105,
          isPrize: 1 // 该奖项是否为奖品
        },
        {
          id: 12,
          name: "A5创意笔记本", // 奖品名称
          angle: 195,
          isPrize: 1 // 该奖项是否为奖品
        }
      ],
      currentHref: "",
      restCount: 10
    };
  },
  mounted() {
    this.currentHref = window.location.href;
  },
  methods: {
    lotteryStart() {
      this.lotteryByApi();
    },
    lotteryByApi() {
      // 未登录或仍在抽奖中 则不请求
      if (!this.clickFlag) {
        return;
      }
      // 抽奖机会已抽完 则不请求
      if (this.restCount <= 0) {
        const _this = this;
        this.$confirm("抱歉，您的抽奖机会已用完！", "", {
          confirmButtonText: "下单再次抽奖",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            _this.$scrollTo(document.getElementById("J-nav-csgj"), 500, {
              offset: -100
            });
          })
          .catch(() => {});
        return;
      }

      const _this = this;
      this.mockLotteryApi()
        .then(res => {
          if (res.success) {
            const data = res.data;
            const type = data.resultType;
            if (type === 1) {
              _this.$alert("抱歉，活动未开始！", "", {
                type: "warning"
              });
            } else if (type === 2) {
              // 中奖滚动
              _this.rotating(data);
              _this.restCount--;
            } else if (type === 3) {
              _this.$alert("抱歉，您的抽奖机会已用完！", "", {
                type: "warning"
              });
            } else if (type === 4) {
              _this.$alert("抱歉，奖品已全部抽完！", "", {
                type: "warning"
              });
            } else {
              _this.$alert("抱歉，活动已结束！", "", {
                type: "warning"
              });
            }
          } else {
            _this.$alert("Sorry，网络出现故障，请刷新再试！", "", {
              type: "warning"
            });
          }
        })
        .catch(() => {
          _this.$alert("Sorry，网络出现故障，请刷新再试！", "", {
            type: "warning"
          });
        });
    },
    /**
     * 转盘滚动
     * @param currentPrize//奖品
     */
    rotating(currentPrize) {
      const duringTime = 5; // 默认为1s
      const resultIndex = currentPrize.rewardId; // 最终要旋转到哪一块，对应prizeList的id
      const randCircle = 8; // 附加多转几圈，2-3
      this.clickFlag = false; // 旋转结束前，不允许再次触发
      const prize = this.prizeList.find(prize => prize.id === resultIndex);
      const rotateAngle =
        this.startRotatingDegree +
        randCircle * 360 +
        prize.angle -
        (this.startRotatingDegree % 360);
      this.startRotatingDegree = rotateAngle;
      this.rotateAngle = `rotate(${rotateAngle}deg)`;
      const _this = this;
      // 旋转结束后，允许再次触发
      setTimeout(() => {
        _this.clickFlag = true;
        _this.gameOver(prize);
      }, duringTime * 1000 + 1500); // 延时，保证转盘转完
    },
    gameOver(prize) {
      if (prize) {
        this.successWord = `恭喜您，抽中${prize.name}`;
        this.successDialogVisible = true;
      } else {
        this.$alert("可惜了");
      }
    },
    mockLotteryApi() {
      return Promise.resolve({
        success: true,
        data: {
          resultType: 2,
          rewardId: Math.floor(Math.random() * 13)
        }
      });
    }
  }
};
</script>
<style lang="less" type="text/less">
.lottery-success-dialog {
  border-radius: 5px;
  .el-dialog__body {
    padding: 10px 15px;
    .lottery-success {
      .lottery-success-content {
        margin-bottom: 35px;
        margin-top: 30px;
        display: flex;
        i {
          display: inline-block;
          font-size: 26px;
          color: #ff8563;
          width: 40px;
          background-color: rgb(255, 231, 225);
          height: 40px;
          border-radius: 20px;
          line-height: 42px;
          padding-left: 8px;
          margin-top: -10px;
        }
        div {
          width: 320px;
          padding-left: 10px;
          p {
            font-size: 18px;
            color: #2e2f33;
            &:nth-child(2) {
              color: #878d99;
              padding-top: 10px;
              font-size: 13px;
            }
          }
        }
      }
      .lottery-success-btn {
        text-align: right;
      }
    }
  }
}

.lottery-wheel {
  width: 430px;
  height: 470px;
  position: absolute;
  z-index: 50;
  top: 30px;
  left: 20px;
  display: flex;
  justify-content: center;
  .wheel-table {
    width: 430px;
    height: 470px;
    margin: auto;
    background: url(./img/shell.png) no-repeat;
    background-size: cover;
    padding: 10px 10px;
    position: relative;
    .wheel-pointer {
      position: absolute;
      width: 100px;
      height: 120px;
      background: url(./img/pointer.png) no-repeat;
      background-size: cover;
      z-index: 7;
      top: 148px;
      left: 165px;
      display: flex;
      justify-content: center;
      .login {
        display: block;
        font-size: 17px;
        color: #fff;
        height: 100px;
        margin: 0 5px;
        font-weight: bolder;
        width: 90px;
        padding: 39px 0 0 9px;
        letter-spacing: 5px;
        text-align: center;
        line-height: 24px;
      }
      .lottery-button {
        cursor: pointer;
        font-size: 34px;
        color: #ffffff;
        height: 100px;
        margin-left: 6px;
        margin-top: 18px;
        font-weight: bolder;
        width: 100px;
        padding: 20px;
        text-align: center;
        span {
          display: block;
          &:nth-child(2) {
            margin-top: -5px;
            font-size: 12px;
          }
        }
      }
    }
    .wheel-dial {
      position: absolute;
      width: 332px;
      height: 332px;
      top: 45px;
      left: 48px;
      background: url(./img/dial.png) no-repeat;
      background-size: cover;
      z-index: 6;
    }
  }
}
</style>
