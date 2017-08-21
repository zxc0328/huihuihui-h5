import Vue from 'vue'
import App from './App'
import Parallax from 'parallax-js'

Vue.config.productionTip = false
Vue.directive('parallax', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {

    var parallax = new Parallax(el.parentNode)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
