<template>
  <div id="box">
    <div id="sbox">
      <h1>关于我们</h1>
      <span
        >我们的目标是通过对图形和仿真技术的持续的研究创新，服务现代数字孪生与智能建造…</span
      ><span id="point" v-show="pointShow"></span>
    </div>
    <threejs />
    <news />
  </div>
</template>
<script setup>
import threejs from "../components/about/threejs.vue";
import news from "../components/about/new.vue";
import { ref } from "vue";

let pointShow = ref(false);

setInterval(() => {
  pointShow.value = !pointShow.value;
}, 500);
</script>
<style scoped lang="scss">
#box {
  box-sizing: border-box;
  min-width: 1100px;
  padding: 30px 50px;
  margin-bottom: 50px;
  // background-color: red;
  overflow: hidden;
  #sbox {
    color: #fff;
    position: relative;
    // background: blue;
    animation: showbox 1s ease-in;
    span {
      display: inline-block;
      margin-top: 20px;
      font-size: 18px;
    }
    #point {
      display: inline-block;
      position: relative;
      top: 3px;
      width: 8px;
      height: 20px;
      background-color: #fff;
      margin-top: 0;
    }
  }
  @keyframes showbox {
    0% {
      // top: -120px;
      opacity: 0;
    }
    100% {
      // top: 0;
      opacity: 1;
    }
  }
}
</style>
