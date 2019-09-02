<template>
  <div>
    <h2>just have fun</h2>
    <h2 @click="navigateTo('css')">css</h2>
    <h2 @click="navigateTo('canvas')">canvas</h2>
    <h2 @click="navigateTo('lottery')">lottery</h2>
    <div class="frame">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="caps"></div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "hello",
  head() {
    return {
      title: "just have fun",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "一个有趣的项目"
        },
        { hid: "keywords", name: "keywords", content: "css,canvas,lottery" }
      ]
    };
  },
  data() {
    return {};
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const Application = (function() {
        let canvas;
        let ctx;
        let imgData;
        let pix;
        const width = 700;
        const height = 500;
        let flickerInterval;

        const init = () => {
          canvas = document.getElementById("canvas");
          ctx = canvas.getContext("2d");
          canvas.width = width;
          canvas.height = height;
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, width, height);
          ctx.fill();
          imgData = ctx.getImageData(0, 0, width, height);
          pix = imgData.data;
          flickerInterval = setInterval(flickering, 30);
        };

        let flickering = () => {
          for (let i = 0; i < pix.length; i += 4) {
            const color = Math.random() * 255 + 50;
            pix[i] = color;
            pix[i + 1] = color;
            pix[i + 2] = color;
          }
          ctx.putImageData(imgData, 0, 0);
        };

        return {
          init
        };
      })();
      Application.init();
    },
    navigateTo(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<style scoped lang="less" type="text/less">
canvas {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.caps {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: as 8s linear infinite;
}

.caps img {
  display: block;
  width: 100%;
  height: 100%;
}

@keyframes as {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  20% {
    opacity: 0.1;
  }
  30% {
    opacity: 0.5;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  55% {
    opacity: 0;
  }
  55% {
    opacity: 0;
  }
}

.frame {
  z-index: 3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(19%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.9))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 19%,
    rgba(0, 0, 0, 0.9) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#e6000000', GradientType=1); /* IE6-9 fallback on horizontal gradient */
}

.frame div {
  position: absolute;
  left: 0;
  top: -20%;
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: asd 12s linear infinite;
}

.frame div:nth-child(1) {
  animation-delay: 0;
}

.frame div:nth-child(2) {
  animation-delay: 4s;
}

.frame div:nth-child(3) {
  animation-delay: 8s;
}

@keyframes asd {
  0% {
    top: -20%;
  }
  100% {
    top: 100%;
  }
}

h2 {
  z-index: 4;
  position: absolute;
  font: bold 200px/200px Arial, sans-serif;
  left: 50%;
  top: 10%;
  margin-top: -100px;
  width: 100%;
  margin-left: -50%;
  height: 200px;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  animation: asdd 2s linear infinite;
  cursor: pointer;
  &:nth-child(2) {
    top: 40%;
  }
  &:nth-child(3) {
    top: 60%;
  }
  &:nth-child(4) {
    top: 80%;
  }
}

@keyframes asdd {
  0% {
    text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }
  33% {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  66% {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  100% {
    text-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
  }
}
</style>
