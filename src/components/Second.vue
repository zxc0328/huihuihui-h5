<template>
  <div class="page page2 scene">
    <div class="title layer" data-depth="0.50">
       <img src="../assets/title.png" class="title">
    </div>
    <div class="main layer" data-depth="0.70">
      <img src="../assets/cardbg.png" class="cardbg"/>
      <div class="grid">
        <div class="col first">
          
          <div class="lineWarpper lineBox1" v-if="lineDraw[0] == 0" key="0">
            <svg class="lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line1 line" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
         
         
          <div class="lineWarpper lineBox2" v-else-if="lineDraw[0] == 1" key="1">
            <svg class="lineBox" x="0px" y="0px"  viewBox="0 0 48 1">
              <line class="line2 line" x1="0" y1="0.5" x2="48" y2="0.5" />
            </svg>
            
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 48 1">
               <line class="lineOver" x1="0" y1="0.5" x2="48" y2="0.5" />              
            </svg>
            
          </div>
          

          <div class="lineWarpper lineBox3" v-else-if="lineDraw[0] == 2" key="2">
            <svg class="lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line3 line" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
           
        </div>
        

        <div class="col">
          <div class="lineWarpper lineBoxRow1" v-if="lineDraw[1] == 0" key="r1">
            <svg  class="lineBox1-0 lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line1 line" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
          <div class="lineWarpper lineBoxRow2" v-else-if="lineDraw[1] == 1" key="r2">
            <svg  class="lineBox1-1 lineBox" x="0px" y="0px"  viewBox="0 0 30 1">
              <line class="line2 line" x1="0" y1="0.5" x2="30" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 30 1">
              <line class="lineOver" x1="0" y1="0.5" x2="30" y2="0.5" />
            </svg>
          </div>
          <div class="lineWarpper lineBoxRow3" v-else-if="lineDraw[1] == 2" key="r3">
            <svg  class="lineBox1-2 lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line3 line" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
          <div v-else-if="lineDraw[1] == 3" class="lineWarpper lineBoxRow4" key="r4"> 
            <svg  class="lineBox1-3 lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line4 line" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
          <div v-else-if="lineDraw[1] == 4" class="lineWarpper lineBoxRow5" key="r5">
            <svg  class="lineBox1-4 lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line5 line" x1="0"o y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
          <div v-else-if="lineDraw[1] == 5" class="lineWarpper lineBoxRow6" key="r6">
            <svg  class="lineBox1-5 lineBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="line6 line" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
            <svg class="lineBox lineOverBox" x="0px" y="0px"  viewBox="0 0 70 1">
              <line class="lineOver" x1="0" y1="0.5" x2="70" y2="0.5" />
            </svg>
          </div>
          <img v-if="selected[1] === 0" src="../assets/meishu_pressed.png" class="avatar" v-on:click="onSelect($event, 1, 0)">
          <img v-else src="../assets/meishu_normal.png" class="avatar" v-on:click="onSelect($event, 1, 0)">
          <img v-if="selected[1] === 1" src="../assets/cehua_pressed.png" class="avatar" v-on:click="onSelect($event, 1, 1)">
          <img v-else src="../assets/cehua_normal.png" class="avatar" v-on:click="onSelect($event, 1, 1)">
          <img v-if="selected[1] === 2" src="../assets/chengxu_pressed.png" class="avatar" v-on:click="onSelect($event, 1, 2)">
          <img v-else src="../assets/chengxu_normal.png" class="avatar" v-on:click="onSelect($event, 1, 2)">
        </div>
        <div class="col lastCol">
          <img v-if="selected[2] === 0" src="../assets/bangongshi_pressed.png" class="avatar" v-on:click="onSelect($event, 2, 0)">
          <img v-else src="../assets/bangongshi_normal.png" class="avatar" v-on:click="onSelect($event, 2, 0)">
          <img v-if="selected[2] === 1" src="../assets/shitang_pressed.png" class="avatar" v-on:click="onSelect($event, 2, 1)">
          <img src="../assets/shitang_normal.png" class="avatar" v-on:click="onSelect($event, 2, 1)">
        </div>
      </div>
    </div>
    <div v-on:click="onBtnClicked" v-bind:class="'button layer ' + (ready ? 'shake':'')" data-depth="0.90" v-parallax>
       <img src="../assets/btn_enter.png" v-show="ready"  alt="btn_enter">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'page-second',
  data() {
    return {
      selected: [0, 1, -10],
      lineDraw: [1, -1],
      ready: false
    }
  },
  methods: {
    reset() {
      this.selected = [0, 1, -10]
      this.lineDraw = [1, -1]
      this.ready = false
    },
    onSelect(evt, col, row) {
      // line Draw!!
      console.log(col, row, col == 1)
      if (col == 1) {
        Vue.set(this.lineDraw, col - 1, row)
        this.selected[col] = row
        if (this.selected[2] >= 0) {
          let rowSum = this.selected[1] + this.selected[2]
          if (this.selected[2] == 1) {
            rowSum += 2
          }
          Vue.set(this.lineDraw, 1, rowSum)
          this.ready = true
        } 
      }
      if (col == 2) {
        if (this.lineDraw[0] < 0) {
          return
        }else {
          this.selected[col] = row
          let rowSum = this.lineDraw[0] + row
          if (row == 1) {
            rowSum += 2
          }
          Vue.set(this.lineDraw, col - 1, rowSum)
          console.log(rowSum)
          this.ready = true
        }
      }
    },
    onBtnClicked() {
      console.log(this.lineDraw[1])
      if (this.lineDraw[1] >= 0) {
        this.$emit("next",this.lineDraw[1])
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
    display: block;
   pointer-events: all
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
  margin: 510px auto 0 auto; 
  pointer-events: all
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

.line2 {
  stroke-dashoffset: 30;
}

.lineBox1 .line1 {
   stroke-dasharray: 6;
}

.lineBox3 .line3 {
  stroke-dasharray: 6;
}

.line1, .line3{
  stroke-dashoffset: 70;
}


.lineOverBox {
  position: absolute;
  top:0;
  left: 0;  
  transform: rotate(180deg);
}

.lineOver {
  stroke: #fff;
  stroke-width: 6;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBox2 .lineOver {
  stroke-dasharray: 48;
  animation: dash48 0.7s linear;
}

.lineBox1 .lineOver, .lineBox3 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
}

.lineBox3 {
  transform: rotate(65deg);
  transform-origin: left center;
  width:100px;
  top:60%;
  left:89%;
}

.lineBox1 {
  transform: rotate(-65deg);
  transform-origin: left center;
  width:100px;
  top:60%;
  left:89%;
}

.lineBox2 {
  transform: rotate(0deg);
  transform-origin: left center;
  width:48px;
  top:60%;
  left:89%;
}

.lineBox1-0 {
  
}

.lineBox1-1 {

}

.lineBox1-2 {

}

.lineBox1-3 {

}

.lineBox1-4 {

}

.lineBox1-5 {

}

/* row1  */
.lineBoxRow1{
    left: 69%;
    transform: rotate(35deg);
    transform-origin: left center;
    width: 70px;
    top: 30%;
}

.lineBoxRow1 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBoxRow1 .line{
    stroke-dasharray: 6;
}

/* row1 end  */

/* row2  */
.lineBoxRow2{
    left: 115%;
    transform: rotate(145deg);
    transform-origin: left center;
    width: 70px;
    top: 44%;
}

.lineBoxRow2 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBoxRow2 .line{
    stroke-dasharray: 5;
}

.lineBoxRow2 .lineOverBox{
  transform: rotate(0deg);
}

/* row2 end  */

/* row3  */
.lineBoxRow3{
        left: 117%;
    transform: rotate(114deg);
    transform-origin: left center;
    width: 145px;
    top: 48%;
}

.lineBoxRow3 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBoxRow3 .line{
    stroke-dasharray: 5;
}

.lineBoxRow3 .lineOverBox{
  transform: rotate(0deg);
}

/* row3 end  */

/* row4 */
.lineBoxRow4{
        left: 115%;
    transform: rotate(-115deg);
    transform-origin: left center;
    width: 145px;
    top: 74%;
}

.lineBoxRow4 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBoxRow4 .line{
    stroke-dasharray: 5;
}

.lineBoxRow4 .lineOverBox{
  transform: rotate(0deg);
}

/* row4 end  */

/* row5 */
.lineBoxRow5{
    left: 115%;
    transform: rotate(-145deg);
    transform-origin: left center;
    width: 80px;
    top: 77%;
}

.lineBoxRow5 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBoxRow5 .line{
    stroke-dasharray: 5;
}

.lineBoxRow5 .lineOverBox{
  transform: rotate(0deg);
}

/* row5 end  */

/* row6  */
.lineBoxRow6{
    left: 115%;
    transform: rotate(145deg);
    transform-origin: left center;
    width: 70px;
    top: 79%;
}

.lineBoxRow6 .lineOver {
  stroke-dasharray: 70;
  animation: dash70 0.7s linear;
  stroke-dashoffset: 0;
  opacity: 0;
}

.lineBoxRow6 .line{
    stroke-dasharray: 5;
}

.lineBoxRow6 .lineOverBox{
  transform: rotate(0deg);
}

/* row6 end  */

.lineWarpper {
   position: absolute;
   height: 4px;
   /* height: 4px;
   width: 70px; */
}

.lineBox{
  width: 100%;
  height: 100%;
  display: block;
}

.line {
  stroke: #09d;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 8;
}

@keyframes dash48 {
  from {
   opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 48;
  }
}

@keyframes dash70 {
  from {
   opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 70;
  }
}

.lastCol {
  padding: 60px 25px 60px 0px;
}

.shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite;
}

</style>