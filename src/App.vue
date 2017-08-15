<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="main">
      <div class="col first">
        <img src="./assets/me_n.png" class="avatar">
        <svg class="lineBox" x="0px" y="0px"  viewBox="0 0 30 1">
          <line class="line1 line" x1="0" y1="0.5" x2="30" y2="0.5" />
        </svg>
      </div>
      <div class="col">
        <img src="./assets/person1_n.png" class="avatar">
        <img src="./assets/person2_n.png" class="avatar">
        <img src="./assets/person3_n.png" class="avatar">
      </div>
      <div class="col">
        <img src="./assets/scene1_n.png" class="avatar">
        <img src="./assets/scene2_n.png" class="avatar">
      </div>
    </div>
    <div class="button">
  
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data() {
    return {
      selected: [0, -1, -1],
      lineDraw: [-1, -1]
    }
  },
  methods: {
    onSelect(col, row) {
      // line Draw!!
    }
  },
  components: {
    Hello
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

.lineBox{
  position: absolute;
  top:50%;
  left:89%;
  width:30px;
  height: 4px;
}

.line {
  stroke: #09d;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 2, 7;
  stroke-dashoffset: 35;
  animation: dash 2s linear alternate infinite;
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
