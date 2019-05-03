<template>
    <div id="content">
            <div class="movie_menu">
                <router-link to="/movie/city" tag="div" class="city_name">
                    <span>广州</span>
                    <i class="iconfont icon-xiala"></i>
                </router-link>
                <div class="hot_switch">
                    <router-link to="/movie/nowPlaying" tag="div" class="hot_item">正在热映</router-link>
                    <router-link to="/movie/comingSoon" tag="div" class="hot_item">即将上映</router-link>
                    
                </div>
                <router-link to="/movie/search" tag="div" class="search_entry">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Movie'
}
</script>

<style scoped>
#content{
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
}
#content .movie_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
}
.movie_menu .city_name{
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
    font-size: 13px;
}
.movie_menu .city_name.router-link-exact-active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name i{
    font-size: 12px;
}
.movie_menu .hot_switch{
    display: flex;
    height: 100%;
    line-height: 45px;
}
.movie_menu .hot_item{
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
}
.movie_menu .hot_item.router-link-exact-active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry{
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
}
.movie_menu .search_entry.router-link-exact-active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i{
    font-size: 24px;
    color: red;
}
</style>
