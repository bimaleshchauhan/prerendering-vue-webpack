<template>
  <div class="mainContainer" :class="mainClass">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/GlobalComponents/header";
import Footer from "../components/GlobalComponents/footer";

export default {
  components: {
    Header, Footer
  },
  computed:{
      mainClass(){
          if(this.$route.meta && this.$route.meta.class){
            return this.$route.meta.class;
          }
          else return "";
      }
  }
  // computed:{
  //     renderLayout(){

  //         if(this.$route.fullPath == '/terminsurance'){
  //             return true
  //         }
  //         else{
  //             return false;
  //         }
  //     }
  // }
};
</script>
