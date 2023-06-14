<template>
  <div id="wrap">

      <div id="box">
        <div id="picName">
          <img
            src="/public/images/95ffa6eb626def05cd6be795e164301.png"
            alt=""
          />
          <h4 @click="$router.push('/')">Future Engineering</h4>
        </div>
        <ul>
          <li @click="$router.push('/research')" class="button">研究方向</li>
          <li @click="$router.push('/members')" class="button">课题组成员</li>
          <li @click="$router.push('/publications')" class="button">
            科学研究
          </li>
          <li @click="$router.push('/news')" class="button">新闻中心</li>
          <li @click="$router.push('/links')" class="button">联系我们</li>
        </ul>
      </div>

  </div>
</template>
<script setup></script>
<style scoped lang="scss">
#wrap {
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #9b9a9a;
  padding: 25px 0 20px 50px;
  margin: auto;
  margin-bottom: 50px;
}

#box {
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    width: 60%;
    // background: blue;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    .button {
      text-align: center;
      font-size: inherit;
      font-family: inherit;
      color: white;
      padding: 0.5em 1em;
      outline: none;
      border: none;
    }

    .button:hover {
      cursor: pointer;
      animation: jelly 0.5s;
    }

    @keyframes jelly {
      0%,
      100% {
        transform: scale(1, 1);
      }
      25% {
        transform: scale(0.9, 1.1);
      }
      50% {
        transform: scale(1.1, 0.9);
      }
      75% {
        transform: scale(0.95, 1.05);
      }
    }
  }
  #picName {
    // background: blue;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #e2e8f0;
    img {
      display: block;
      width: 50px;
    }
    h4 {
      cursor: pointer;
    }
    h4:hover {
      opacity: 0.8;
    }
  }
}
</style>
