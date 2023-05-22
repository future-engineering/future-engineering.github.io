<template>
  <div id="box">
    <h1>NEWS</h1>
    <ul v-for="item in ulNum">
      {{
        item.title
      }}
      {{
        item.flag
      }}
      <li
        v-for="mes in item.mesage"
        v-show="item.flag"
        @click="item.flag = true"
      >
        {{ mes }}
      </li>
    </ul>
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
<style scoped lang="scss"></style>
