<template>
  <div id="box">
    <h2>Peblications</h2>
    <p>See <span>Google Scholar</span> for a full list of publications.</p>

    <ul v-for="item in publications.first" class="firstBox">
      <h2 class="title">{{ item.category }}</h2>
      <li v-for="mes in item.mes" class="mes">
        <div class="img">
          <img :src="mes.img" alt="" />
        </div>

        <div>
          <div>{{ mes.identity }}</div>
          <p v-html="mes.name"></p>
          <i>{{ mes.introduce }}</i>
        </div>
      </li>
    </ul>

    <ul class="secondBox" v-for="item in publications.second">
      <h2>{{ item.category }}</h2>
      <li v-for="(mes, index) in item.mes">
        <div>{{ index + 1 + "." }}</div>
        <span>
          {{ mes }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import publications from "../../public/publications/publications.json";

console.log(publications.first);
</script>
<style scoped lang="scss">
#box {
  // background: red;
  box-sizing: border-box;
  width: 1100px;
  color: #fff;
  padding: 50px;
  h2 {
    font-weight: 500;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 40px;
    span {
      cursor: pointer;
      border-bottom: 2px solid #dedeed;
    }
  }

  .firstBox {
    h2 {
      font-weight: 500;
      padding-bottom: 10px;
      border-bottom: 1px solid #cecece;
    }
    .mes {
      margin-top: 20px;
      display: flex;
      .img {
        width: 290px;
        height: 290px;
        box-sizing: border-box;
        padding: 5px;
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
      div {
        font-size: 20px;
        div {
          margin-bottom: 20px;
        }
        div:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
  .secondBox {
    h2 {
      font-weight: 500;
      padding-bottom: 10px;
      border-bottom: 1px solid #dedede;
      margin: 20px 0;
    }
    li {
      margin-top: 10px;
      line-height: 30px;
      font-size: 18px;
      display: flex;
      margin-left: 20px;
      div {
        // background: red;
        width: 3%;
        height: 10px;
      }
      span {
        display: block;
        width: 97%;
      }
    }
    span:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
