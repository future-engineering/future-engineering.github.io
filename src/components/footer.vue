<template>
    <div id="wrap">
        <div id="box">
            <p id="first">Sitemap</p>
            <div id="second">
                <h6>FOLLOW:</h6>
                <div>
                    <img src="../../public/images/favicon.ico" alt="">
                    <h6>GITHUB</h6> 
                </div>
                <div>
                    <img src="../../public/images/favicon.ico" alt="">
                    <h6>FEED</h6>
                </div>
            </div>
            <span>© 2023 Future Water Systems Lab. Powered by Jekyll & AcademicPages, a fork of Minimal Mistakes.</span>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
#wrap{
    border-top: 1px solid #9b9a9a;
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    padding: 40px 30px 30px 30px;
    color: rgb(155, 161, 166);
    #box{
        // background: red;
        width:1200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
            margin: auto;
        #first{
            width: 63px;
            cursor: pointer;
            border-bottom: 2px solid #9b9a9a00;
        }
        #first:hover{
            border-bottom: 2px solid #9b9a9a;
        }
        #second{
            // background: white;
            display: flex;
            align-items: center;
            div{
                display: flex;
                align-items: center;
                margin-right: 10px;
                margin-left: 10px;
                cursor: pointer;
                h6{
                    border-bottom: 2px solid #9b9a9a00;
                }
                h6:hover{
                    border-bottom: 2px solid #9b9a9a;
                }
                
                img{
                    width: 20px;
                }
            }
            
        }
        span{
            font-size: 10px;
            cursor: pointer;
        }
    }
}
</style>