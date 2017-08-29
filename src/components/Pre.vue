<template>
  <div class="page page0 scene">
     <div class="content">
       <div class="word">
         <img src="../assets/pre_word.png" alt="word">
       </div>
       <div class="loading">
         <img src="../assets/loading.png" alt="loading">
         <div class="bar" v-bind:style="'width:' + barRadio*100 + '%'"></div>
       </div>
     </div>
      
    <div class="preload">
      <img v-img="addCount" src="../assets/card.png"/>
      <img v-img="addCount" src="../assets/words.png"/>
      <img v-img="addCount" src="../assets/btn_go.png"/>

      <img v-img="addCount" src="../assets/meishu_pressed.png"/>
      <img v-img="addCount" src="../assets/meishu_normal.png"/>
      <img v-img="addCount" src="../assets/cehua_pressed.png"/>
      <img v-img="addCount" src="../assets/cehua_normal.png"/>
      <img v-img="addCount" src="../assets/chengxu_pressed.png"/>
      <img v-img="addCount" src="../assets/chengxu_normal.png"/>
      <img v-img="addCount" src="../assets/title.png"/>
      <img v-img="addCount" src="../assets/cardbg.png"/>
      <img v-img="addCount" src="../assets/bangongshi_pressed.png"/>
      <img v-img="addCount" src="../assets/bangongshi_normal.png"/>
      <img v-img="addCount" src="../assets/shitang_pressed.png"/>
      <img v-img="addCount" src="../assets/shitang_normal.png"/>

      <img v-img="addCount" src="../assets/scene01.png"/>
      <img v-img="addCount" src="../assets/scene02.png"/>
      <img v-img="addCount" src="../assets/scene04.png"/>

      <img v-img="addCount" src="../assets/btn_again.png"/>
      <img v-img="addCount" src="../assets/btn_share.png"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

let count = 0;
let total = 20;

export default {
  name: 'page-first',
  data() {
    return {
      selected: [0, -1, -1],
      lineDraw: [1, 0],
      barRadio:0
    }
  },
  methods: {
    addCount() {
      count = count + 1;
      this.barRadio = count/total;
      console.log(count/total)
      if (count === total) {
        this.$emit("next")
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

.page0 img{
  width: 100%;
  height: auto;
}

.preload {
  visibility: hidden;
  position: absolute;
  left: -999em;
}

.content{
  padding-top: 108px;
  width: 317px;
  margin: 0 auto; 
}

.word{
  width: 100%;
}

.loading{
  position: relative;
  width: 170px;
  margin:0 auto;
  height:40px;
}

.loading img{
  position: absolute;
  top: 0;
  left: 0;
}

.loading .bar{
  position: relative;
  top: 4px;
  width: 100%;
  height:12px;
  background-color: #0b63ff;
  transition: .5s all;
}

</style>