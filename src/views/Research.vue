<template>
  <div id="box">
    <div id="title">
      <h2>Research</h2>
      <p>
        Our goal is to build intelligent water systems that use real-time
        sensing and control to solve modern water challenges.
      </p>
    </div>

    <div id="main">
      <div class="box" v-for="item in mainMes.mainMes">
        <div class="image">
          <img :src="item.url" alt="" />
        </div>
        <div class="text">
          <span class="title">{{ item.title }}</span>
          <div class="mes">{{ item.mes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import mainMes from "../../public/research/mainMes.json";
</script>
<style scoped lang="scss">
#box {
  box-sizing: border-box;
  width: 1100px;
  padding: 50px;
  #title {
    color: rgb(246, 246, 246);
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-weight: 500;
    }
    p {
      //   font-size: 14px;
      color: #dedede;
    }
  }
  #main {
    width: 100%;
    color: #dedede;
    margin-top: 50px;
    .box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      .image {
        margin-right: 35px;
        img {
          display: block;
          width: 280px;
        }
      }
      .title {
        font-size: 20px;
        border-bottom: 2px solid #dedede00;
        cursor: pointer;
      }
      .title:hover {
        border-bottom: 2px solid #dedede;
      }
      .mes {
        margin-top: 15px;
        line-height: 30px;
        font-size: 18px;
      }
    }
  }
}
</style>
