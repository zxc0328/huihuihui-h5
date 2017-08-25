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

Vue.directive('img',{
  inserted: function (el, binding) {
    let url = el.src;
    var img = new Image();
    img.onload = function() {
      binding.value.call();
    }.bind(this);
    img.src = url;
  }
  
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
