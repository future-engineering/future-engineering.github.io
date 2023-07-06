<template>
  <div id="wrap">
    <div id="box">
      <div id="second">
        <h6>FOLLOW:</h6>
        <div>
          <img src="../../public/images/logo.png" alt="" />
          <h6>
            <a
              href="https://github.com/future-engineering/future-engineering.github.io"
              target="blank"
              >GITHUB</a
            >
          </h6>
        </div>
      </div>
      <div>
        <h6>公众号：数字孪生与工程技术</h6>
      </div>
    </div>

    <div id="image">
      <img src="../../public/images/erweima.jpg" alt="" />
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
#wrap {
  border-top: 1px solid #9b9a9a;
  width: 1100px;
  // height: 150px;
  box-sizing: border-box;
  padding: 20px 50px 20px 50px;
  color: rgb(155, 161, 166);
  display: flex;
  #box {
    // display: flex;
    padding-top: 5px;
    flex-direction: column;
    justify-content: space-between;
    // margin: auto;
    #first {
      width: 63px;
      cursor: pointer;
      border-bottom: 2px solid #9b9a9a00;
    }
    #first:hover {
      border-bottom: 2px solid #9b9a9a;
    }
    #second {
      // background: white;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      div {
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        h6 {
          border-bottom: 2px solid #9b9a9a00;
        }
        h6:hover {
          border-bottom: 2px solid #9b9a9a;
        }

        img {
          display: block;
          width: 20px;
          margin-right: 10px;
        }
      }
    }
    span {
      font-size: 10px;
      cursor: pointer;
    }
  }
  #image {
    padding-left: 10px;
    margin-bottom: 10px;
    img {
      display: block;
      width: 50px;
    }
  }
}
</style>
