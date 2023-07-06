<template>
  <div id="box">
    <top />
    <div id="mid">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['publications']" :exclude="[]">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
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
  // height: 100%;
  min-height: 100vh;
  max-width: 1100px;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-content: space-between;
  padding: 0 50px;
}

</style>
