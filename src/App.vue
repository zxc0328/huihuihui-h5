<template>
  <div id="app">
    <transition name="fade">
      <
    </transition>
  </div>
</template>

<script>
import First from './components/Hello'
import First from './components/Hello'
import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return {
      showFrist: true,
      showSecond: true
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
  },
  components: {
    First,
    Second
  }
}
</script>

<style>
#app {
  height: 100%;
  overflow: hidden;
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  display: block;
}

svg{
  fill: none;
}

.main {
  height: 300px;
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
