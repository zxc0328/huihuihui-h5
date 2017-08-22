<template>
  <div id="app">
    <transition name="fade">
      <First v-on:next="onShowSecond" v-show="showFirst"/>
    </transition>
    <transition name="fade">
      <Second v-show="showSecond"/>
    </transition>
  </div>
</template>

<script>
import First from './components/First'
import Second from './components/Second'
import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return {
      showFirst: true,
      showSecond: false
    }
  },
  mounted() {

  },
  methods: {
    onShowSecond(evt, col, row) {
      this.showFirst = false
      this.showSecond = true
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
