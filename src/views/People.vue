<template>
  <div id="box">
    <ul class="box" v-for="item in people.people">
      <h2>{{ item.category }}</h2>
      <li v-for="mes in item.mes" class="mesageBox">
        <div class="img">
          <img :src="mes.img" alt="" />
        </div>
        <div class="right">
          <h2>{{ mes.name }}</h2>
          <div>{{ mes.identity }}</div>
          <p v-for="int in mes.introduce">{{ int }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import people from "../../public/people/people.json";

console.log(people.people);
</script>
<style scoped lang="scss">
#box {
  box-sizing: border-box;
  width: 1100px;
  padding: 50px;
  .box {
    width: 100%;
    color: #fff;
    h2 {
      font-weight: 500;
      margin-bottom: 30px;
    }
    .mesageBox {
      width: 100%;
      margin-bottom: 50px;
      display: flex;
      align-items: flex-start;
      box-sizing: border-box;
      padding-top: 5px;
      .img {
        // box-sizing: border-box;
        margin-right: 40px;
        border-radius: 50%;
        padding: 5px;
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
        img {
          display: block;
          width: 230px;
          border-radius: 50%;
        }
      }
      .right {
        h2 {
          font-weight: 500;
          margin-bottom: 15px;
        }
        div {
          font-weight: 800;
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 30px;
        }
        p {
          font-size: 18px;
          color: #dedede;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
