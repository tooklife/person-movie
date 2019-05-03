<template>
     <div class="movie_body">
        <ul>
            <li v-for="item in comingList" :key="item.id">
                <div class="pic_show">
                    <img :src="item.img | setWH('128.180')" alt="">
                </div>
                <div class="info_list">
                    <h2>{{ item.nm }}</h2>
                    <p>
                        观众评:
                        <span class="grade">{{ item.sc }}</span>
                    </p>
                    <p>主演:{{ item.star }}</p>
                    <p>{{ item.showInfo }}</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ComingSoon',
    data() {
        return {
            comingList:[]
        }
    },
    mounted() {
        this.$ajax.get('/api/movieComingList?cityId=10').then(res=>{
            this.comingList=res.data.data.comingList;
        }).catch(res=>{
            console.log(res);
        })
    },
}
</script>

<style scoped>
.movie_body{
    flex: 1;
    overflow: auto;
}
.movie_body ul{
    margin: 0px 10px;
    overflow: hidden;
}
.movie_body ul li{
    margin-top: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 15px;
}
.movie_body .pic_show{
    width: 80px;
    height: 100px;
}
.movie_body .pic_show img{
    width: 100%;
}
.movie_body .info_list{
    margin-left: 10px;
    padding-right: 20px;
    flex: 1;
    position: relative;
}
.movie_body .info_list h2{
    font-size: 15px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .info_list p{
    font-size: 13px;
    color: #666;
    line-height: 13px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie_body .info_list .grade{
    font-weight: 700px;
    color:#faaf00;
    font-size: 15px;
}
.movie_body .info_list img{
    width: 50px;
    position: absolute;
    right: 10px;
    top: 5px;
}
.movie_body .btn_mall,.movie_body .btn_pre{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    border-radius: 4px;
    font-size: 2px;
    cursor: pointer;
}
.movie_body .btn_pre{
    background-color: #3c9fe6
}
</style>
