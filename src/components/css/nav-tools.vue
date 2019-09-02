<template>
  <transition name="fade">
    <div class="nav-tools" v-if="showNav" :style="{ left: fixedLeft }">
      <div class="nav-tools-content">
        <div class="tools-box tool-content-title">导航条</div>
        <ul>
          <li
            v-for="(tool, index) in tools"
            :key="index"
            class="tools-box"
            :class="activeToolId === tool.id ? 'active' : ''"
          >
            <a v-scroll-to="{ el: '#' + tool.id, offset: -100 }">{{
              tool.title
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>
<script>
import jquery from "jquery";
import _ from "lodash";

export default {
  name: "css-nav",
  props: ["showNav", "screenWidth"],
  data() {
    return {
      tools: [
        { title: "1", id: "J-nav-lottery" },
        { title: "2", id: "J-nav-csgj" }
      ],
      activeToolId: ""
    };
  },
  mounted() {
    const _this = this;
    window.$ = jquery;
    window.addEventListener("scroll", _this.onScroll);
  },
  computed: {
    scrollTools() {
      let scrollTools = _.cloneDeep(this.tools);
      scrollTools = scrollTools.map(tool => {
        const ele = $(`#${tool.id}`);
        tool.top = ele.offset() ? ele.offset().top - 190 : 99999;
        return tool;
      });
      return scrollTools;
    },
    fixedLeft() {
      let left = (this.screenWidth - 1200) / 2 + 1200 + 40;
      if (left + 88 + 35 > this.screenWidth) {
        left = this.screenWidth - 72 - 35;
      }
      return `${left}px`;
    }
  },
  methods: {
    onScroll() {
      const scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const scrollTools = this.scrollTools;
      const currentTool = scrollTools.find((tool, index) => {
        const nextTool = scrollTools[index + 1];
        return scroll > tool.top && scroll < (nextTool ? nextTool.top : 99999);
      });
      this.activeToolId = currentTool ? currentTool.id : "";
    }
  }
};
</script>
<style lang="less" type="text/less" scoped>
@darkPrimaryColor: #00796b;
@primaryColor: #009688;
@lightPrimaryColor: #b2dfdb;
@textPrimaryColor: #ffffff;
@accentColor: #9e9e9e;
@primaryTextColor: #212121;
@secondaryTextColor: #757575;
@dividerColor: #bdbdbd;
@orange: #ffa000;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav-tools {
  position: fixed;
  top: 100px;
  left: 1777px;
  z-index: 99;
  .tools-box {
    height: 30px;
    width: 72px;
    line-height: 30px;
    text-align: center;
    background-color: @lightPrimaryColor;
    color: @textPrimaryColor;
    font-size: 12px;
    &:nth-child(odd) {
      background-color: @primaryColor;
    }
  }
  .tool-content-title {
    font-weight: bold;
    background-color: @textPrimaryColor !important;
    font-style: italic;
    color: @primaryColor;
  }
  ul {
    .active {
      color: @orange;
    }
    li {
      cursor: pointer;
      &:hover {
        color: @orange;
      }
    }
  }
}
</style>
