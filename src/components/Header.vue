<template>
  <div id="wrap">
    <div class="move">
      <div id="box">
        <div id="picName">
          <img src="../../public/images/favicon.ico" alt="" />
          <h4 @click="$router.push('/')">Future Engineering</h4>
        </div>
        <ul>
          <li @click="$router.push('/research')" class="button">Research</li>
          <li @click="$router.push('/people')" class="button">People</li>
          <li @click="$router.push('/publications')" class="button">
            Publications
          </li>
          <li @click="$router.push('/teaching')" class="button">Teaching</li>
          <li @click="$router.push('/code')" class="button">Code</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
#wrap {
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #9b9a9a;

  // padding: 25px 50px 0 50px;
  overflow: hidden;
  position: relative;
}
.move {
  width: 1100px;
  height: 95px;
  // background: red;
  position: relative;

  animation: move 1s linear;
  animation-fill-mode: forwards;
  margin: auto;
}
@keyframes move {
  0% {
    top: -60px;
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    top: 25px;
    opacity: 1;
  }
}

#box {
  // width: 100%;
  // background-color: #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    width: 50%;
    // background: blue;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    .button {
      z-index: 1;
      font-size: inherit;
      font-family: inherit;
      color: white;
      padding: 0.5em 1em;
      outline: none;
      border: none;
      // background-color: hsl(236, 32%, 26%);
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
    width: 25%;
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
