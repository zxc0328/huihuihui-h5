<template>
  <div ref="scrollView" class="page page3">
    <div  class="result">
      <img v-if="num === 0" src="../assets/scene01.png"/>
      <img v-else-if="num === 1" src="../assets/scene02.png"/>
      <img v-else-if="num === 2" src="../assets/scene03.png"/>
      <img v-else-if="num === 3" src="../assets/scene04.png"/>
      <img v-else-if="num === 4" src="../assets/scene05.png"/>
      <img v-else-if="num === 5" src="../assets/scene06.png"/>
      <img v-else src="../assets/scene01.png"/>
    </div>
    <div class="btns">
      <img v-on:click="onBtnClicked" src="../assets/btn_again.png" class="btn"/>
      <img v-on:click="onBtnClicked" src="../assets/btn_share.png" class="btn"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'page-thrid',
  props: ['num'],
  methods: {
    onBtnClicked() {
      this.$emit("prev");
    },
    reset(){
      console.log('called')
      this.$refs.scrollView.scrollTop = 0;
    }
  }
}
</script>

<style>
.page3 {
  overflow-y:scroll;
  background-image: url("../assets/bg_repeat.png");
  background-size: contain;
  background-repeat: repeat-y;
}

.page3 .result {
  width: 100%;
  display: block;
  padding: 30px 0 0 0;
  background-image: url("../assets/bg_repeat.png");
  background-size: contain;
  background-repeat: repeat-y;
}

.page3 .result img{
  width: 100%;
  height: auto;
  display: block;
}

.page3 .btns{
  text-align: center;
  margin-top: 30px;
}

.page3 .btns .btn{
  display: inline-block;
  width: 181px;
}

</style>