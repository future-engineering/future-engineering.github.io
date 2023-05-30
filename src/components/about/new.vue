<template>
  <div id="box">
    <h2>News</h2>
    <div id="title" v-for="item in ulNum" @click="item.flag = !item.flag">
      <span v-show="!item.flag">→</span>
      <span v-show="item.flag">↓</span>
      <dl>
        <span>{{ item.title }}</span>
        <li v-for="mes in item.mesage" v-show="item.flag">
          {{ mes }}
        </li>
      </dl>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

let ulNum = ref([
  {
    title: "Recent",
    mesage: ["1", "2", "3", "4", "5"],
    flag: false,
  },
  {
    title: "Older",
    mesage: ["1", "2", "3", "4", "5"],
    flag: false,
  },
]);
</script>
<style scoped lang="scss">
#box {
  h2 {
    font-weight: 500;
  }
  #title {
    margin-top: 10px;
    // align-items: center;
    display: flex;
    // background: red;
    overflow: hidden;
    span {
      display: block;
      margin-top: 5px;
      cursor: pointer;
      // background-color: #fff;
      margin-right: 10px;
    }
    dl {
      font-size: 20px;
      li {
        list-style: disc;
      }
      span {
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>
