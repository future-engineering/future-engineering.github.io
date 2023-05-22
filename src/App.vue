<template>
  <div id="box">
    <top/>

    <router-view/>

    <bottom/>
  </div>
  
  
</template>
<script setup>
import top from './components/Header.vue'
import bottom from './components/footer.vue'

</script>
<style scoped lang="scss">
#box{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
