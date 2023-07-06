<template>
  <div id="box">
    <ul class="box" v-for="item in peopleObj.people0">
      <h2>{{ item.category }}</h2>
      <div class="flexBox">
        <li v-for="mes in item.mes" class="mesageBox">
          <div class="img" ref="imgs">
            <div class="imgBox">
              <img :src="mes.img" alt="" />
            </div>
          </div>
          <div class="right" ref="rights">
            <h2>{{ mes.name }}</h2>
            <div>{{ mes.identity }}</div>
            <p v-for="int in mes.introduce">邮箱：{{ int }}</p>
          </div>
        </li>
      </div>
    </ul>

    <!-- =================================== -->
    <ul class="box1" v-for="item in peopleObj.student" ref="uls">
      <h2>{{ item.category }}</h2>
      <div class="flexBox">
        <li v-for="mes in item.mes" class="mesageBox" ref="lis">
          <div class="img" ref="imgs">
            <div class="imgBox">
              <img :src="mes.img" alt="" />
            </div>
          </div>
          <div class="right" ref="rights">
            <h2>{{ mes.name }}</h2>
            <div>{{ mes.identity }}</div>
            <p v-for="int in mes.introduce">邮箱：{{ int }}</p>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>
<script setup>
import people from "../../public/people/people.json";
import { ref, onMounted } from "vue";

let peopleObj = ref({
  people0: [],
  student: [],
});

people.people.forEach((item, index) => {
  if (item.cid == 0) {
    peopleObj.value.people0.push(item);
  } else {
    peopleObj.value.student.push(item);
  }
});

onMounted(() => {});
</script>
<style scoped lang="scss">
#box {
  .box {
    width: 100%;
    color: #fff;
    margin-bottom: 50px;
    h2 {
      font-weight: 500;
      margin-bottom: 30px;
    }
    .mesageBox {
      width: 100%;
      margin-bottom: 50px;
      justify-content: center;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-top: 5px;
      animation: show 1.5s linear;
      animation-fill-mode: forwards;
      .img {
        // box-sizing: border-box;
        width: 230px;
        height: 230px;
        margin-right: 40px;
        border-radius: 50%;
        padding: 5px;
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
        position: relative;
        // animation: move 1s ease-in;
        overflow: hidden;
        .imgBox {
          width: 230px;
          height: 230px;
          overflow: hidden;
          border-radius: 50%;
          img {
            display: block;
            width: 230px;
            // border-radius: 50%;
          }
        }
      }
      .right {
        box-sizing: border-box;
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
    @keyframes show {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .box1 {
    width: 100%;
    color: #fff;
    h2 {
      font-weight: 500;
      margin-bottom: 30px;
    }
    .flexBox {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      // justify-content: space-between;
    }
    .mesageBox {
      width: 50%;
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      padding-top: 5px;
      // background-color: red;
      .img {
        // box-sizing: border-box;
        width: 170px;
        height: 170px;
        margin-right: 20px;
        border-radius: 50%;
        padding: 5px;
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
        position: relative;
        animation: move 1s ease-in;
        overflow: hidden;
        .imgBox {
          width: 170px;
          height: 170px;
          overflow: hidden;
          // background-color: red;
          border-radius: 50%;
          img {
            display: block;
            width: 180px;
            // border-radius: 50%;
          }
        }
      }
      @keyframes move {
        0% {
          left: 45%;
        }

        100% {
          left: 0;
        }
      }
      .right {
        opacity: 0;
        animation: show 1s linear;
        animation-delay: 1s;
        animation-fill-mode: forwards;
        box-sizing: border-box;
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
      @keyframes show {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
}
</style>
