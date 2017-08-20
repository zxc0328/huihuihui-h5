<template>
  <div class="page">
    first
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
    onSelect() {

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
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>