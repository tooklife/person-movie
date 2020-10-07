<template>
  <div class="content">
    <div class="movie_menu">
      <router-link to="/movie/city"
                   tag="div"
                   class="city_name">
        <span>{{this.$store.state.city.nm}}</span>
        <i class="iconfont icon-xiala"></i>
      </router-link>
      <div class="hot_switch">
        <router-link to="/movie/nowPlaying"
                     tag="div"
                     class="hot_item">正在热映</router-link>
        <router-link to="/movie/comingSoon"
                     tag="div"
                     class="hot_item">即将出演</router-link>
      </div>
      <router-link to="/movie/search"
                   tag="div"
                   class="search_entry">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import { messageBox } from "../../components/JS";

export default {
  name: "Movie",
  data () {
    return {
      city_nm: ''
    }
  },
  mounted () {
    var that = this;
    let id = this.$store.state.city.id;

    // 此处需要获取状态进行判断
    if (window.localStorage.getItem('cityId') == id) {
        return;
    }else{
        setTimeout(() => {
          this.$ajax.get("/api/getLocation").then(res => {
            var msg = res.data.msg;
            if (msg === "ok") {
              var nm = res.data.data.nm;
              id = res.data.data.id;
              // if (window.localStorage.getItem('cityId') == id) {
              //   return;
              // } else {
              messageBox({
                title: "定位",
                content: nm,
                cancel: "取消",
                ok: "切换",
                handleOk () {

                  that.$store.commit("city/CITY_INFO", { nm, id });

                  // 此处需要修改状态  而不是修改本地存储
                  window.localStorage.setItem('cityId', id);
                  window.localStorage.setItem('cityNm', nm);

                  // window.location.reload();

                }
              });
              // }
            }
          });
        }, 2000);
    }
  }
};
</script>

<style scoped>
.content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}
.content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  position: fixed;
  margin-top: 0px;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
  background-color: #f1f1f1;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
  font-size: 13px;
}
.movie_menu .city_name.router-link-exact-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name i {
  font-size: 12px;
}
.movie_menu .hot_switch {
  display: flex;
  height: 100%;
  line-height: 45px;
  background-color: #f1f1f1;
}
.movie_menu .hot_item {
  font-size: 14px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
}
.movie_menu .hot_item.router-link-exact-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.router-link-exact-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
