<template>
  <div class="css-practice-content">
    <div class="section">
      <h4>type 文字效果</h4>
      <div class="content">
        <div id="typed"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "css",
  data() {
    return {};
  },
  mounted() {
    const typed = new Typed("#typed", {
      strings: [
        ` <p>Typed.js is a <strong>JavaScript</strong> library.</p>
          <p>It types out sentences.</p>
          <p>Do you have fun?</p>`
      ],
      typeSpeed: 50,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: true,
      shuffle: false,
      backDelay: 0,
      fadeOut: true,
      showCursor: false,
      loop: false,
      contentType: "html"
    });
  },
  methods: {}
};
</script>

<style scoped lang="less" type="text/less">
.css-practice-content {
  h4 {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  }
  .section {
    width: 1200px;
    position: relative;
    font-weight: bold;
    margin: auto;
    .content {
      /*display: flex;*/
    }
  }
}
</style>
