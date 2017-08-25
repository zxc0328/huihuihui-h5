<template>
  <div class="page page1 scene">
    <div>
      <img src="../assets/word.png" alt="word">
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

      <img v-img="addCount" src="../assets/story1.png"/>
      <img v-img="addCount" src="../assets/story2-1.png"/>
      <img v-img="addCount" src="../assets/story2-2.png"/>

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
      lineDraw: [1, 0]
    }
  },
  methods: {
    onBtnClicked() {
      this.$emit("next")
    },
    addCount() {
      count = count + 1;
      console.log(count/total)
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

.page1 {
  background-image: url("../assets/bg_first.png");
}

.preload {
  visibility: hidden;
  position: absolute;
  left: -999em;
}

</style>