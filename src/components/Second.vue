<template>
  <div class="page page2 scene">
    <div class="title layer" data-depth="0.50">
       <img src="../assets/title.png" class="title">
    </div>
    <div class="main layer" data-depth="0.70">
      <img src="../assets/cardbg.png" class="cardbg"/>
      <div class="grid">
        <div class="col first">
          <svg v-if="lineDraw[0] == 0" class="lineBox lineBox1" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line1 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[0] == 1" class="lineBox lineBox2" x="0px" y="0px"  viewBox="0 0 30 1">
            <line class="line2 line" x1="0" y1="0.5" x2="30" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[0] == 2" class="lineBox lineBox3" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line3 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
        </div>
        <div class="col">
          <svg v-if="lineDraw[1] == 0" class="lineBoxRow1 lineBox1-0" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line1 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[1] == 1" class="lineBoxRow1 lineBox1-1" x="0px" y="0px"  viewBox="0 0 30 1">
            <line class="line2 line" x1="0" y1="0.5" x2="30" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[1] == 2" class="lineBoxRow1 lineBox1-2" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line3 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[1] == 3" class="lineBoxRow1 lineBox1-3" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line4 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[1] == 4" class="lineBoxRow1 lineBox1-4" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line5 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
          <svg v-else-if="lineDraw[1] == 5" class="lineBoxRow1 lineBox1-5" x="0px" y="0px"  viewBox="0 0 70 1">
            <line class="line6 line" x1="0" y1="0.5" x2="70" y2="0.5" />
          </svg>
          <img src="../assets/meishu_normal.png" class="avatar" v-on:click="onSelect($event, 1, 0)">
          <img src="../assets/cehua_normal.png" class="avatar" v-on:click="onSelect($event, 1, 1)">
          <img src="../assets/chengxu_normal.png" class="avatar" v-on:click="onSelect($event, 1, 2)">
        </div>
        <div class="col">
          <img src="../assets/bangongshi_normal.png" class="avatar" v-on:click="onSelect($event, 2, 0)">
          <img src="../assets/shitang_normal.png" class="avatar" v-on:click="onSelect($event, 2, 1)">
        </div>
      </div>
    </div>
    <div class="button layer" data-depth="0.90" v-parallax>
       <img src="../assets/btn_enter.png" alt="btn_enter">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'page-second',
  data() {
    return {
      selected: [0, -1, -1],
      lineDraw: [1, 0]
    }
  },
  methods: {
    onSelect(evt, col, row) {
      // line Draw!!
      console.log(col, row, col == 1)
      if (col == 1) {
        Vue.set(this.lineDraw, col - 1, row)
        this.selected[col] = row
      }
      if (col == 2) {
        if (this.lineDraw[0] < 0) {
          return
        }else {
          let rowSum = this.lineDraw[0] + row
          if (row == 1) {
            rowSum += 2
          }
          Vue.set(this.lineDraw, col - 1, rowSum)
          console.log(rowSum)
        }

      }
    }
  }
}
</script>

<style>
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}

.page2 {
  background-image: url("../assets/bg_second.png");
}

.page2 .layer{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.page2 img{
   width: 100%;
   height: auto; 
   margin: 0 auto;
}

.page2 img {
  display: block;
}

svg{
  fill: none;
}

.page2 .main {
  height:463px;
  margin-top: 120px;
  animation: easeIn 2s ease-in;
}

.page2 .title {
   animation: bounceIn 1s linear;
}

.page2 .main .cardbg{
   width: 350px;
   margin: 0 auto;
}

.page2 .main .grid {
  width: 350px;
  height: 280px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 0);
}

.page2 .button img{
  width: 223px;
  margin: 490px auto 0 auto; 
}

.col {
  width: 33.3%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
}

.first {}

.avatar {
  width: 100%;
  height: auto;
  transition: all 0.5s;
}

.avatar:active {
  transform: scale(1.2);
}

.line1 {

}

.lineBox3 {
  transform: rotate(65deg);
  transform-origin: left center;
  width:70px;
  top:50%;
  left:89%;
}

.lineBox1 {
  transform: rotate(-65deg);
  transform-origin: left center;
  width:70px;
  top:50%;
  left:89%;
}

.lineBox2 {
  transform: rotate(0deg);
  transform-origin: left center;
  width:30px;
  top:50%;
  left:89%;
}

.lineBox1-0 {
  transform: rotate(65deg);
  transform-origin: left center;
  width:70px;
  top:20%;
}

.lineBox1-1 {
  transform: rotate(65deg);
  transform-origin: left center;
  width:70px;
  top:20%;

}

.lineBox1-2 {

}

.lineBox1-3 {

}

.lineBox1-4 {

}

.lineBox1-5 {

}

.lineBoxRow1{
  height: 4px;
  left:89%;
  position: absolute;
}

.lineBox{
  position: absolute;
  height: 4px;
}

.line {
  stroke: #09d;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 8;
  stroke-dashoffset: 35;
}

@keyframes dash {
  from {
    stroke-dashoffset: 35;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>