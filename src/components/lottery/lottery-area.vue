<template>
  <div class="lottery-area">
    <lottery-wheel></lottery-wheel>
    <img class="wheel-title" src="./img/wheelTitle.png" />
    <div class="wheel-icons">
      <el-popover
        ref="giftPopover"
        placement="left-start"
        popper-class="gift-pop"
        width="270"
        trigger="hover"
      >
        <h4>奖项设置</h4>
        <p><span>特等奖</span><span>iPhone 8</span></p>
        <p><span>一等奖</span><span>京东购物卡2000元</span></p>
        <p><span>二等奖</span><span>京东购物卡1000元</span></p>
        <p><span>三等奖</span><span>京东购物卡500元</span></p>
        <p><span>四等奖</span><span>500G移动硬盘</span></p>
        <p>
          <span>安慰奖</span
          ><span
            >定制背包、16G猪猪U盘、猪猪公仔、定制搪瓷杯、创意笔记本、定制钥匙扣、防紫外线晴雨伞</span
          >
        </p>
        <div class="tips">奖品数量有限，抽完为止</div>
      </el-popover>
      <div class="common-icon-box" v-popover:giftPopover>
        <i class="icon-jiangpinpeizhi"></i>
      </div>
      <el-popover
        ref="qrPopover"
        placement="bottom-end"
        popper-class="qr-pop"
        width="200"
        trigger="hover"
      >
        <span>扫一扫，手机便捷抽奖</span>
      </el-popover>
      <div class="common-icon-box" v-popover:qrPopover>
        <i class="icon-QRcode"></i>
      </div>
    </div>
    <div class="lottery-explain">
      <div class="rule">
        <h4>参与方式</h4>
        <p>
          在8月1日—8月31日期间，用户<span style="color:#ffe45e;"
            >每成功付款一笔订单即可获取1次抽奖资格</span
          >，以此类推，抽奖次数不限；登录后即可进行抽奖。
        </p>
      </div>
      <div class="accept-prize">
        <h4>领奖方式</h4>
        <p>
          工作人员将在1个工作日内联系中奖用户，并在次日（工作日）安排发送礼品。
        </p>
        <p>
          如订单发生退款，用户则需要退回对应礼品；若礼品已经使用或遗失，则需扣除相应费用。
        </p>
      </div>
      <div class="dynamic-draw-info">
        <h4>抽奖动态</h4>
        <div class="draw-info-box" id="J-draw-info-box">
          <div v-if="!isStart" class="draw-no-start">
            <img src="./img/clock.png" />
            <div class="no-start-word">
              <p class="top-word">抽奖暂未开始</p>
              <p>开始时间：2018.8.1 - 8.31</p>
            </div>
          </div>
          <template v-else>
            <div class="table" id="J-draw-info-table">
              <div class="tr" v-for="(item, index) in renderData" :key="index">
                <div>
                  恭喜用户<span>{{
                    (item.userPhone + "") | phoneNumberHidden
                  }}</span>
                </div>
                <div>
                  获得<span>{{ item.rewardName }}</span>
                </div>
              </div>
            </div>
            <div class="table">
              <div class="tr" v-for="(item, index) in renderData" :key="index">
                <div>
                  恭喜用户<span>{{
                    (item.userPhone + "") | phoneNumberHidden
                  }}</span>
                </div>
                <div>
                  获得<span>{{ item.rewardName }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import lotteryWheel from "./lottery-wheel.vue";

export default {
  data() {
    return {
      tableData: [
        {
          userPhone: "18902112753",
          rewardName: "定制背包"
        },
        {
          userPhone: "18904602194",
          rewardName: "京东购物卡1000元"
        },
        {
          userPhone: "18140598386",
          rewardName: "16G猪猪U盘"
        },
        {
          userPhone: "18750190342",
          rewardName: "定制钥匙扣"
        },
        {
          userPhone: "18797598633",
          rewardName: "定制背包"
        },
        {
          userPhone: "18443238039",
          rewardName: "16G猪猪U盘"
        },
        {
          userPhone: "18810714661",
          rewardName: "防紫外线晴雨伞"
        },
        {
          userPhone: "18575612209",
          rewardName: "防紫外线晴雨伞"
        },
        {
          userPhone: "18482796369",
          rewardName: "防紫外线晴雨伞"
        },
        {
          userPhone: "18996954032",
          rewardName: "500G移动硬盘"
        },
        {
          userPhone: "18221479951",
          rewardName: "猪猪公仔"
        },
        {
          userPhone: "18660322800",
          rewardName: "猪猪公仔"
        },
        {
          userPhone: "18186228519",
          rewardName: "定制搪瓷杯"
        },
        {
          userPhone: "18845859646",
          rewardName: "京东购物卡500元"
        },
        {
          userPhone: "18271423593",
          rewardName: "创意笔记本"
        },
        {
          userPhone: "18244328003",
          rewardName: "定制搪瓷杯"
        },
        {
          userPhone: "18998787566",
          rewardName: "创意笔记本"
        },
        {
          userPhone: "18295858690",
          rewardName: "定制搪瓷杯"
        },
        {
          userPhone: "18210338992",
          rewardName: "创意笔记本"
        },
        {
          userPhone: "18730635031",
          rewardName: "定制搪瓷杯"
        }
      ],
      timerId: 0,
      renderStartIndex: 0,
      renderLength: 3,
      dis: 0
    };
  },
  mounted() {
    if (this.isStart) {
      this.dynamicShowInfo();
    }
  },
  computed: {
    renderData() {
      return this.tableData;
    },
    // 抽奖活动是否开始
    isStart() {
      return true;
    }
  },
  methods: {
    dynamicShowInfo() {
      const _this = this;
      const allDiv = document.getElementById("J-draw-info-box");
      const listDiv = document.getElementById("J-draw-info-table");
      clearInterval(_this.timerId);
      _this.timerId = setInterval(() => {
        allDiv.scrollTop = _this.dis++;
        if (allDiv.scrollTop >= listDiv.clientHeight) {
          _this.dis = 0;
          allDiv.scrollTop = _this.dis;
        }
      }, 50);
    }
  },
  components: {
    lotteryWheel
  }
};
</script>
<style lang="less" type="text/less">
@grey: #d8dce5;
@orange: #ff8500;
@grey1: #ebeef4;
@blue: #5a2dba;
@blue1: #8354ea;
@blue2: #6b3bd3;
@blue3: #5732a9;

.qr-pop {
  flex-direction: column;
  display: flex;
  text-align: center;
  color: @orange;
}
.gift-pop {
  padding: 0 0 12px 0;
  border: none;
  .popper__arrow {
    border-left-color: #ff8969 !important;
    border-right-color: #ff8969 !important;
    &:after {
      border-left-color: #ff8969 !important;
      border-right-color: #ff8969 !important;
    }
  }
  h4 {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 12px;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
    background-color: #ff8969;
    border-radius: 5px 5px 0 0;
  }
  p {
    display: flex;
    font-size: 13px;
    line-height: 20px;
    span {
      display: inline-block;
      text-align: left;
      &:nth-child(1) {
        padding-left: 12px;
        flex: auto;
        color: #ff7954;
      }
      &:nth-child(2) {
        width: 211px;
        padding-right: 10px;
      }
    }
  }
  .tips {
    padding-left: 12px;
    margin-top: 20px;
    font-size: 12px;
    color: #b4bbcb;
  }
}

.lottery-area {
  height: 100%;
  flex: auto;
  margin-right: 15px;
  margin-left: -50px;
  background-color: @blue;
  position: relative;
  .wheel-title {
    position: absolute;
    top: 37px;
    right: 50px;
  }
  .wheel-icons {
    position: absolute;
    top: 49px;
    right: 0;
    .common-icon-box {
      height: 40px;
      width: 40px;
      line-height: 48px;
      border-radius: 5px;
      box-shadow: 0 0 4px 1px rgba(30, 11, 69, 0.16);
      background-color: @blue1;
      text-align: center;
      color: #ffe45e;
      i {
        font-size: 25px;
      }
      &:nth-child(2) {
        margin-bottom: 5px;
      }
      &:hover {
        color: #4f25ab;
      }
    }
  }
  .lottery-explain {
    padding-left: 410px;
    position: relative;
    flex: auto;
    height: 328px;
    margin: 172px 0 0 47px;
    background: @blue1;
    border-radius: 10px;
    font-size: 12px;
    box-shadow: 0 0 4px 1px rgba(30, 11, 69, 0.16);
    padding-top: 8px;
    .prize {
      position: absolute;
      right: 40px;
      top: 1px;
    }
    .mobile-qr {
      position: absolute;
      right: 20px;
      top: 1px;
    }
    .rule {
      height: 72px;
    }
    .accept-prize {
      height: 109px;
    }
    & > div {
      width: 500px;
      border-radius: 10px;
      background-color: @blue2;
      color: white;
      margin-bottom: 10px;
      text-align: center;
      h4 {
        width: 90px;
        height: 30px;
        line-height: 30px;
        background-color: @blue3;
        border-radius: 10px 0 10px 0;
        font-size: 14px;
      }
      p {
        text-align: left;
        padding: 5px 10px;
        &:nth-child(3) {
          padding-top: 0;
        }
      }
    }
    .dynamic-draw-info {
      height: 110px;
      h4 {
        width: 100%;
        background-color: @blue2;
        border-radius: 10px 10px 0 0;
      }
    }
    .draw-info-box {
      height: 80px;
      border-radius: 0 0 10px 10px;
      overflow: hidden;
      .draw-no-start {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fffcee;
        border-radius: 0 0 10px 10px;
        img {
          height: 52px;
          width: 55px;
        }
        .no-start-word {
          height: 50px;
          margin-left: 15px;
          p {
            color: #544d63;
            font-size: 12px;
            font-weight: bold;
            padding: 0;
          }
          .top-word {
            font-size: 15px;
            padding-bottom: 0;
            padding-top: 7px;
          }
        }
      }
      .table {
        border-radius: 0 0 10px 10px;
        .tr {
          display: flex;
          height: 27px;
          line-height: 27px;
          border: none;
          div {
            color: black;
            font-weight: bold;
            text-align: left;
            span {
              margin-left: 5px;
            }
            &:nth-child(1) {
              padding-left: 20px;
              flex: 1;
            }
            &:nth-child(2) {
              flex: 1;
            }
          }
          &:nth-child(odd) {
            background-color: #fffcee;
          }
          &:nth-child(even) {
            background-color: #feefce;
          }
        }
      }
    }
  }
}
</style>
