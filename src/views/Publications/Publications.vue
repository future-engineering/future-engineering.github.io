<template>
  <div id="box">
    <div id="wrap">
      <ul id="left">
        <li
          v-for="(item, index) in list"
          :class="{ active: index == ind }"
          @click="(ind = index), (right = [])"
        >
          {{ item }}
        </li>
      </ul>
      <div id="right">
        <ul>
          <li
            v-for="item in right"
            @click="
              (tid = item.tid),
                $router.push('/article?ind=' + ind + '&tid=' + tid)
            "
          >
            <p>{{ item.title }}</p>
            <div class="img">
              <img :src="item.pic" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import mesage from "../../../public/publications/publicationsList/list.json";

let list = ref(["论文速递", "理论算法", "最新动态"]);

let ind = ref(0);
let right = ref([]);
watchEffect(() => {
  mesage.list[ind.value].text.forEach((item) => {
    let obj = {};
    obj.title = item.title;
    obj.pic = item.pic;
    obj.tid = item.tid;
    right.value.push(obj);
  });
  console.log(right.value);
});

let tid = ref("");
</script>

<script>
export default {
  name: "publications",
};
</script>
<style scoped lang="scss">
#box {
  // background: red;
  box-sizing: border-box;
  width: 1100px;
  color: #fff;
  padding: 50px;
  #wrap {
    width: 100%;
    min-height: 400px;
    border: 1px solid #ceceec;
    display: flex;
    #left {
      width: 20%;
      border-right: 1px solid #cecece;
      box-sizing: border-box;
      padding: 30px 0;
      li {
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 20px;
        cursor: pointer;
      }
      .active {
        color: red;
      }
    }
    #right {
      padding: 30px;
      width: 80%;
      // background-color: red;
      box-sizing: border-box;
      li {
        width: 90%;
        height: 60px;
        // background: blue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #cecece;
        padding: 10px 0;
        cursor: pointer;
        p {
          max-width: 80%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .img {
          width: 20%;
          height: 100%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
