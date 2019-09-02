<template>
  <div>
    <div id="intro">
      <p>
        <code
          >let grd =
          context.createLinearGradient(xstart,ystart,xend,yend);</code
        >
      </p>
      <p>
        <code>let grd = context.createRadialGradient(x0,y0,r0,x1,y1,r1);</code>
      </p>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "template",
  data() {
    return {};
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      const canvas = document.getElementById("canvas");
      canvas.length = 600;
      canvas.width = 800;
      const context = canvas.getContext("2d");
    }
  }
};
</script>
