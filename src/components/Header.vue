<template>
  <div id="wrap">
    <div id="box">
      <div id="picName">
        <img src="../../public/images/favicon.ico" alt="" />
        <h4 @click="$router.push('/')">Future Engineering</h4>
      </div>
      <ul>
        <li @click="$router.push('/research')">Research</li>
        <li @click="$router.push('/people')">People</li>
        <li @click="$router.push('/publications')">Publications</li>
        <li @click="$router.push('/teaching')">Teaching</li>
        <li @click="$router.push('/code')">Code</li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
#wrap {
  width: 100%;
  border-bottom: 1px solid #9b9a9a;
}
#box {
  width: 1100px;
  height: 95px;
  // background-color: #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
  margin: auto;
  ul {
    display: flex;
    width: 50%;
    // background: blue;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    li {
      cursor: pointer;
    }
    li:hover {
      opacity: 0.8;
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
