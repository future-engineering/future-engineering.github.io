<template>
  <div id="box">
    <h2>Teaching</h2>
    <div class="mesBox" v-for="item in teaching.teaching">
      <div class="img">
        <img :src="item.img" alt="" />
      </div>
      <span>
        <h2>{{ item.name }}</h2>
        <p>{{ item.introduce }}</p>
      </span>
    </div>
  </div>
</template>
<script setup>
import teaching from "../../public/teaching/teaching.json";

console.log(teaching.teaching);
</script>
<style scoped lang="scss">
#box {
  box-sizing: border-box;
  width: 1100px;
  color: #fff;
  padding: 50px;

  h2 {
    font-weight: 500;
  }
  .mesBox {
    width: 100%;
    display: flex;
    margin: 50px 0 20px 0;
    .img {
      margin-right: 30px;
      img {
        display: block;
        width: 280px;
      }
      img:hover {
        cursor: pointer;
        box-shadow: 0 0 10px #302f2f;
      }
    }
    span {
      color: #dedede;
      h2 {
        margin-bottom: 20px;
      }
      h2:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      p {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style>
