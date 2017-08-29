<template>
  <div id="app">
    <transition name="fade">
      <Preload v-on:next="onShowFirst" v-show="showPre"/>
    </transition>
    <transition name="fade">
      <First v-on:next="onShowSecond" v-show="showFirst"/>
    </transition>
    <transition name="fade">
      <Second ref="second" v-on:next="onShowThird" v-show="showSecond"/>
    </transition>
    <transition name="fade">
      <Third ref="third" v-on:prev="onShowSecond" v-show="showThird" v-bind:num="result"/>
    </transition>
  </div>
</template>

<script>
import Pre from './components/Pre'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Thrid'
import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return {
      showPre: true,
      showFirst: false,
      showSecond: false,
      showThird: false,
      result: 0
    }
  },
  mounted() {

  },
  methods: {
    onShowFirst() {
      this.showPre = false
      this.showFirst = true
    },
    onShowSecond(evt, col, row) {
      this.$refs.second.reset()
      this.showFirst = false
      this.showSecond = true 
      this.showThird = false
    },
    onShowThird(result) {
      this.result = result
      this.showFirst = false
      this.showSecond = false
      this.showThird = true
      Vue.nextTick(() => {
         this.$refs.third.reset()
      })
    }
  },
  components: {
    Preload: Pre,
    First:First,
    Second: Second,
    Third: Third
  }
}
</script>

<style>
#app {
  width:100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: all 2s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
 opacity: 0;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
