<template>
  <div id="app">
     <component :is="layout">
         <router-view></router-view>
       </component>
  </div>
</template>

<script>
const default_layout = "default";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import WhiteLogoLayout from "./layouts/WhiteLogoLayout.vue";

export default {
  name: 'app',
  components: {
    "default-layout":DefaultLayout,
    "white-logo-layout":WhiteLogoLayout,
   
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    layout(){
       // document.title =this.$route.meta.title
        return (this.$route.meta.layout || default_layout) + '-layout'
    },
    
  }
}
</script>

