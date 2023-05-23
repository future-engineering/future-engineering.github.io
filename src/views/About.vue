<template>
  <div id="box">
    <div>
      <h1>About</h1>
      <span
        >Our goal is to build the smart and connected water systems of the
        future ...</span
      >
    </div>
    <threejs />
    <news />
  </div>
</template>
<script setup>
import threejs from "../components/about/threejs.vue";
import news from "../components/about/new.vue";
</script>
<style scoped lang="scss">
#box {
  box-sizing: border-box;
  width: 1100px;
  padding: 30px 50px;
  margin-bottom: 50px;
  div {
    color: #fff;
    span {
      display: block;
      margin-top: 20px;
      font-size: 18px;
    }
  }
}
</style>
