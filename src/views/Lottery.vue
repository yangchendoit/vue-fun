<template>
  <div class="section-lottery">
    <div class="lottery">
      <h2 id="J-nav-lottery">幸运大转盘</h2>
      <h3>抽奖赢取iPhone 8，海量礼品送给您</h3>
      <div class="lottery-content">
        <lottery-area></lottery-area>
      </div>
      <!--几个圆的彩球-->
    </div>
  </div>
</template>
<script>
import lotteryArea from "@/components/lottery/lottery-area.vue";

export default {
  data() {
    return {
      cmsInfo: {
        name: "最高直降1000元更有现金奖励!",
        description: "2018.7.15 - 8.8"
      },
      ruleVisible: false
    };
  },
  head() {
    return {
      title: "russian turntable",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "俄罗斯转盘抽奖"
        },
        { hid: "keywords", name: "keywords", content: "lottery" }
      ]
    };
  },
  components: {
    lotteryArea
  }
};
</script>
<style lang="less" type="text/less">
@grey: #d8dce5;
@blue: #5a2dba;

.rule-dialog {
  height: 500px;
  width: 486px;
  .el-dialog__body {
    height: 460px;
    overflow-y: scroll;
    padding: 0 28px 20px;
    &::-webkit-scrollbar {
      width: 10px;
    }
    /* 滚动槽 */
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #e0e3eb;
      -webkit-box-shadow: none;
    }
  }
}

.section-lottery {
  width: 100%;
  background-color: @blue;
  padding-top: 10vh;
}

.lottery {
  width: 930px;
  margin: auto;
  height: 100vh;
  h2 {
    height: 0;
    width: 0;
  }
  h3 {
    height: 0;
    width: 0;
  }
  .lottery-content {
    height: 531px;
    display: flex;
    .lottery-cms {
      display: flex;
      position: relative;
      width: 395px;
      height: 449px;
      margin-top: 50px;
      padding: 5px 0 0 10px;
      border-left: 1px solid #8354ea;
      .rule {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-top: 20px;
        margin-bottom: 15px;
        height: 25px;
        width: 92px;
        background-color: #ff8346;
        box-shadow: -2px 2px 1px #ffd9c6;
        text-align: center;
        color: #ffffff;
        border-radius: 12px;
        top: 207px;
        left: 95px;
        transform: rotate(-19deg);
        &:hover {
          background-color: #ff9072;
        }
        i {
          display: inline-block;
          font-size: 18px;
        }
      }
      .hand {
        height: 446px;
        width: 218px;
        margin-right: -5px;
      }
      .activity {
        height: 449px;
        .word {
          margin-left: -7px;
        }
        .shadow-box {
          height: 53px;
          width: 163px;
          box-shadow: 2px -2px #20a890;
          background-color: #75f6d9;
          border-radius: 5px;
          font-size: 17px;
          font-weight: bold;
          color: #5a2dba;
          text-align: left;
          padding: 2px 10px 0 8px;
          margin-top: -2px;
        }
        .time {
          margin-top: 10px;
          margin-left: 2px;
          color: #ffffff;
          font-size: 19px;
        }
        .line {
          margin: 10px 0 10px 2px;
          width: 22px;
          height: 0;
          border-bottom: 2px solid #ffffff;
        }
        .rule-word {
          font-size: 13px;
          color: #c7b1f6;
          margin-bottom: 10px;
          margin-top: 45px;
        }
      }
    }
  }
}
</style>
