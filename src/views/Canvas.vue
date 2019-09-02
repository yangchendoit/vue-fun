<template>
  <div>
    <h1 id="draw-title">canvas practice</h1>
    <img id="draw-img" src="@/assets/guitar.gif" />
    <div id="draw-box">
      <el-tabs v-model="activePane" type="card">
        <el-tab-pane label="base" name="first">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in cans" :key="item.id">
              <h1>{{ item.name }}</h1>
              <canvas :id="'canvas' + item.id"></canvas>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="personal" name="second" id="pane-p">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="selectMenu"
            :collapse="false"
          >
            <el-menu-item index="1">
              <i class="el-icon-loading"></i>
              <span slot="title">are u ok</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-loading"></i>
              <span slot="title">what the fuck</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-loading"></i>
              <span slot="title">gali geigei</span>
            </el-menu-item>
          </el-menu>
          <div id="canvas-p-box" @mousemove="track_mouse">
            <canvas id="canvas-p"></canvas>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "canvas",
  data() {
    return {
      activePane: "first",
      cans: [{ id: 1, name: "rectangles" }, { id: 2, name: "line" }],
      track_mouse: "",
      timeInterval: ""
    };
  },
  head() {
    return {
      title: "canvas",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "使用canvas实现的一些有趣的效果"
        },
        { hid: "keywords", name: "keywords", content: "canvas" }
      ]
    };
  },
  mounted() {
    this.initCanvasBac();
    this.initCanvasCon();
    this.initCanvasP();
  },
  methods: {
    initCanvasBac() {
      let c = document.getElementById("canvas"),
        x = c.getContext("2d"),
        pr = window.devicePixelRatio || 1,
        w = window.innerWidth,
        h = window.innerHeight,
        f = 90,
        q,
        m = Math,
        r = 0,
        u = m.PI * 2,
        v = m.cos,
        z = m.random;
      c.width = w * pr;
      c.height = h * pr;
      x.scale(pr, pr);
      x.globalAlpha = 0.6;

      function i() {
        x.clearRect(0, 0, w, h);
        q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
        while (q[1].x < w + f) d(q[0], q[1]);
      }

      function d(i, j) {
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        let k = j.x + (z() * 2 - 0.25) * f,
          n = y(j.y);
        x.lineTo(k, n);
        x.closePath();
        r -= u / -50;
        x.fillStyle = `#${(
          ((v(r) * 127 + 128) << 16) |
          ((v(r + u / 3) * 127 + 128) << 8) |
          (v(r + (u / 3) * 2) * 127 + 128)
        ).toString(16)}`;
        x.fill();
        q[0] = q[1];
        q[1] = { x: k, y: n };
      }

      function y(p) {
        const t = p + (z() * 2 - 1.1) * f;
        return t > h || t < 0 ? y(p) : t;
      }

      i();
      setInterval(() => {
        i();
      }, 1000);
    },
    initCanvasCon() {
      this.initCanvasRec();
      this.initCanvasLine();
    },
    initCanvasRec() {
      const canvas = document.getElementById("canvas1");
      canvas.height = 600;
      canvas.width = 800;
      const context = canvas.getContext("2d");
      for (let i = 0; i <= 20; i++) {
        drawRect(
          context,
          200 + 10 * i,
          100 + 10 * i,
          400 - 20 * i,
          400 - 20 * i,
          5,
          "#fff"
        );
        drawRect(
          context,
          205 + 10 * i,
          105 + 10 * i,
          390 - 20 * i,
          390 - 20 * i,
          5,
          "#000"
        );
      }

      function drawRect(
        ctx,
        x,
        y,
        height,
        width,
        lineWidth,
        strokeColor,
        fillColor
      ) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.closePath();

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
        if (fillColor) {
          ctx.fillStyle = fillColor;
          ctx.fill();
        }
      }
    },
    initCanvasLine() {
      const canvas = document.getElementById("canvas2");
      canvas.height = 600;
      canvas.width = 800;
      const context = canvas.getContext("2d");
      context.beginPath();
      context.moveTo(100, 100);
      context.lineTo(400, 100);
      context.lineTo(400, 400);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineWidth = 5;
      context.strokeStyle = "#000";
      context.stroke();
    },
    initCanvasP() {
      this.drawOne();
    },
    cleanCanvasP() {
      if (this.timeInterval) {
        clearInterval(this.timeInterval);
      }
      const cp = document.getElementById("canvas-p");
      const ct = cp.getContext("2d");
      // 保存当前渲染上下文进行的变换
      ct.save();
      // 重置渲染上下文并清空画布
      ct.setTransform(1, 0, 0, 1, 0, 0);
      ct.clearRect(0, 0, cp.width, cp.height);
      // 恢复先前渲染上下文所进行的变换
      ct.restore();
    },
    selectMenu(index) {
      const that = this;
      that.cleanCanvasP();
      switch (index) {
        case "1":
          that.drawOne();
          break;
        default:
          that.drawOne();
          break;
      }
    },
    drawOne() {
      const cp = document.getElementById("canvas-p");
      const particlesNum = 18; // 粒子数
      let mouse = {},
        particles = [],
        H = 600,
        W = 800;
      const box = document.getElementById("canvas-p-box");
      cp.height = H;
      cp.width = W;
      const ctx = cp.getContext("2d");
      //  鼠标监听
      if (!this.track_mouse) {
        this.track_mouse = function(e) {
          e = e || window.event;
          mouse.x = e.pageX || 1;
          mouse.y = e.pageY || 1;
        };
      }

      //  随机方法
      const randSpeed = function(speed) {
        return Math.round(Math.random())
          ? Math.round(Math.random() * 5 + 1)
          : -Math.round(Math.random() * 5 + 1);
      };

      //  粒子构造器
      const Particle = function() {
        this.x = Math.round(Math.random() * W); // 粒子初始x坐标
        this.y = Math.round(Math.random() * H); // 粒子初始y坐标
        this.r = Math.round(Math.random() * 10 + 5); // 粒子半径
        this.clr = this.r * 5.5; // 绕鼠标转动半径
        this.rgb = {}; // 随机产生颜色
        this.rgb.r = Math.round(Math.random() * 255);
        this.rgb.g = Math.round(Math.random() * 255);
        this.rgb.b = Math.round(Math.random() * 255);
        this.speed_x = randSpeed(); // x方向速度
        this.speed_y = randSpeed(); // y方向速度
        this.speed_z = Math.random() + 0.3; // 转动速度
        this.beginDeg = 0;
        //    默认移动方式
        this.move = function() {
          if (this.x < 0) {
            this.x = 0;
            this.speed_x = -this.speed_x;
          }
          if (this.x > W) {
            this.x = W;
            this.speed_x = -this.speed_x;
          }
          if (this.y < 0) {
            this.y = 0;
            this.speed_y = -this.speed_y;
          }
          if (this.y > H) {
            this.y = H;
            this.speed_y = -this.speed_y;
          }
          this.x += this.speed_x;
          this.y += this.speed_y;
          this.beginDeg = 0;
        };

        //    绕鼠标转动
        this.moveWithMouse = function(dt, x) {
          const rad = Math.PI / 180;
          this.x = mouse.x + dt * Math.cos(this.beginDeg * rad);

          this.y = mouse.y + dt * Math.sin(this.beginDeg * rad);
          if (this.beginDeg > 360 || this.beginDeg < -360) {
            this.beginDeg = 0.5;
          }
          if (x < 0 && this.speed_z > 0) {
            this.speed_z = -this.speed_z;
          }
          this.beginDeg += this.speed_z;
        };
      };

      for (let i = 0; i < particlesNum; i++) {
        particles.push(new Particle());
      }

      const draw = function(mouseX, mouseY, r, rgb) {
        const rgbcolor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
        ctx.fillStyle = rgbcolor;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
      };

      function particlemotion() {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < particlesNum; i++) {
          draw(
            particles[i].x,
            particles[i].y,
            particles[i].r,
            particles[i].rgb
          );
          let x = particles[i].x - mouse.x,
            dx = Math.abs(x),
            y = particles[i].y - mouse.y,
            dy = Math.abs(y),
            dt = Math.sqrt(dx * dx + dy * dy);
          if (dt < particles[i].clr) {
            if (particles[i].beginDeg === 0) {
              particles[i].beginDeg = Math.acos(x / particles[i].clr);
            }
            particles[i].moveWithMouse(dt, x);
          } else {
            particles[i].move();
          }
        }
      }
      this.timeInterval = setInterval(() => {
        particlemotion();
      }, 5);
    }
  }
};
</script>

<style>
#draw-title {
  margin-top: 40px;
  font-size: 40px;
  color: #e4cf8e;
}

#draw-img {
  position: absolute;
  left: 650px;
  top: 10px;
  width: 114px;
}

#draw-box {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 1000px;
  height: 800px;
  background-color: #fff;
  margin-left: -500px;
  border-radius: 10px;
  opacity: 0.8;
}

#pane-p {
  display: flex;
}

#canvas-p-box {
  height: 600px;
  width: 800px;
  background-color: #000;
  z-index: 10;
}

.el-carousel .el-carousel__container {
  height: 700px;
}

.el-tabs__item.is-active {
  color: #e4cf8e;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
