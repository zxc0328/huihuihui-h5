<template>
  <div class="page page1 scene">
    <div class="logo layer" data-depth="0.30">
      <img src="../assets/card.png"/>
    </div>
    <div class="text layer" data-depth="0.40">
       <img src="../assets/words.png"/>
    </div>
    <div v-on:click="onBtnClicked" class="btn layer" v-parallax data-depth="0.50">
      <img src="../assets/btn_go.png"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

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

.layer {
  width: 100%;
  height: 100%;
}

.page1 .logo img{
  animation: bounceIn 1s linear;
  width: 100%;
  height: auto;
  display: block;
  max-width: 375px;
  margin: 0 auto;
}

/* .page1 .logo img, .page1 .text img, .page1 .btn img{
  
} */

.page1 .btn img{
  width:209px;
  margin: 540px auto 0 auto;
  animation: easeIn 2s ease-in;
  height: auto;
  display: block;
  pointer-events: all
}

.page1 .text img{
  width:293px;
  margin: 470px auto 0 auto;
  animation: easeIn 2s ease-in;
  height: auto;
  display: block;
}


@keyframes bounceIn{
  0% {transform: translateY(-100%);}
  50%, 80%, 100% {transform: translateY(0);} 
            70% {transform: translateY(-10%);} 
            90% {transform: translateY(-5%);} 
}

@keyframes easeIn{
  0% {opacity: 0;}
  100% {opacity: 1;} 
}

.page1 .btn img {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>