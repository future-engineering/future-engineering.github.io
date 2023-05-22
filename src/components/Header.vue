<template>
    <div id="wrap">
        <div id="box">
        <div id="picName">
            <img src="../../public/images/favicon.ico" alt="">
            <h3>Future Engineering</h3>
        </div>
        <ul>
            <li>Research</li>
            <li>People</li>
            <li>Publications</li>
            <li>Teaching</li>
            <li>Code</li>
        </ul>
    </div>
    </div>
    
</template>
<script setup>
</script>
<style scoped lang="scss">
#wrap{
    width: 100%;
    border-bottom: 1px solid #9b9a9a;
}
#box{
    width: 1200px;
    height: 100px;
    // background-color: #fff;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 50px;
    margin: auto;
    ul{
        display: flex;
        width: 50%;
        // background: blue;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        li{
            cursor: pointer;
        }
        li:hover{
            opacity: 0.8;
        }
    }
    #picName{
        // background: blue;
        width: 22%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #e2e8f0;
        img{
            display: block;
            width: 50px;
        }
        h3{
            cursor: pointer;
        }
        h3:hover{
            opacity: 0.8;
        }
    }
}
</style>