<template>
  <div id="box">
    <top />
    <div id="mid">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['publications']" :exclude="[]">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
      <!-- <router-view /> -->
    </div>

    <bottom />
  </div>
</template>
<script setup>
import top from "./components/Header.vue";
import bottom from "./components/footer.vue";
</script>
<style scoped lang="scss">
#box {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#mid {
  min-height: 500px;
}
</style>
