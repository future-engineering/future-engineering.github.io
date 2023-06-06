<template>
  <div id="box">
    <div class="box">
      <p v-html="mesage.list[ind].text[tid].title"></p>
      <span v-html="mesage.list[ind].text[tid].name"></span>
      <div v-html="mesage.list[ind].text[tid].top" class="top"></div>
      <div v-html="mesage.list[ind].text[tid].main"></div>
    </div>
  </div>
</template>
<script setup>
import mesage from "../../public/publications/publicationsList/list.json";
import { useRoute } from "vue-router";
let route = useRoute();
console.log(route.query);
let ind = route.query.ind;
let tid = route.query.tid;
</script>
<style scoped lang="scss">
#box {
  width: 1100px;
  box-sizing: border-box;
  padding: 50px;
  color: #fff;
  font-size: 20px !important;
  .box {
    .top {
      margin-bottom: 20px;
    }
    p {
      text-align: center;
      font-size: 25px;
      margin-bottom: 10px;
    }
    span {
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 60px;
    }
    div {
      :deep(img) {
        display: block !important;
        position: relative !important;
        left: 50% !important;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
