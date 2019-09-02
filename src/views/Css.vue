<template>
  <div class="css-practice">
    <h3>css practice</h3>
    <css-content></css-content>
    <nav-tools :showNav="showNav" :screenWidth="screenWidth"></nav-tools>
  </div>
</template>

<script>
import navTools from "@/components/css/nav-tools.vue";
import cssContent from "@/components/css/content.vue";

export default {
  name: "css",
  components: {
    navTools,
    cssContent
  },
  data() {
    return {
      showNavByScreen: true,
      showNavByScroll: true,
      screenWidth: 0,
      mixWidth: 1440
    };
  },
  head() {
    return {
      title: "css",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "一些好玩的css效果"
        },
        { hid: "keywords", name: "keywords", content: "css" }
      ]
    };
  },
  mounted() {
    const _this = this;
    _this.initNav();
    window.onresize = () =>
      (() => {
        _this.showNavByScreen = _this.screenWidth >= _this.mixWidth;
        _this.screenWidth = document.body.clientWidth;
      })();
    window.addEventListener("scroll", _this.dealShowNavByScroll);
  },
  computed: {
    showNav() {
      console.log(`${this.showNavByScreen} ${this.showNavByScroll}`);
      return this.showNavByScreen && this.showNavByScroll;
    }
  },
  methods: {
    initNav() {
      const _this = this;
      if (window.screen.width < _this.mixWidth) {
        _this.showNavByScreen = false;
      }
      _this.screenWidth = document.body.clientWidth;
    },
    dealShowNavByScroll() {
      const scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.showNavByScroll = scroll >= 150;
    }
  }
};
</script>

<style scoped lang="less" type="text/less">
@darkPrimaryColor: #00796b;
@primaryColor: #009688;
@lightPrimaryColor: #b2dfdb;
@textPrimaryColor: #ffffff;
@accentColor: #9e9e9e;
@primaryTextColor: #212121;
@secondaryTextColor: #757575;
@dividerColor: #bdbdbd;

.css-practice {
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    0deg,
    @darkPrimaryColor 0%,
    @darkPrimaryColor 100%
  );
  color: @textPrimaryColor;
  h3 {
    padding-top: 40px;
    font-size: 40px;
    color: transparent;
    text-shadow: 0 0 0.1em @textPrimaryColor, 0 0 0.3em @textPrimaryColor;
  }
}
</style>
