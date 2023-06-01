<template>
  <div id="box">
    <h2>News</h2>
    <div id="title" v-for="item in ulNum" @click="item.flag = !item.flag">
      <span v-show="!item.flag"></span>
      <span v-show="item.flag"></span>
      <dl>
        <span class="button">{{ item.title }}</span>
        <li v-for="mes in item.mesage" v-show="item.flag" class="span">
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
      .span {
        position: relative;
        cursor: pointer;
      }

      .span::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #3cefff;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.5s ease;
      }

      .span:hover::before {
        transform-origin: bottom left;
        transform: scaleX(1);
      }

      .button {
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 5px;
        outline: none;
        border: none;
      }

      .button::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fc2f70;
        transform-origin: center top;
        transform: scaleY(0);
        transition: transform 0.25s ease-in-out;
        border-radius: 10px;
      }

      .button:hover {
        cursor: pointer;
      }

      .button:hover::before {
        transform-origin: center bottom;
        transform: scaleY(1);
      }
    }
  }
}
</style>
