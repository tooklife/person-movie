<template>
  <div class="movie_body">
    <div class="movie_content"
         ref="movie_content">
      <Loading v-if="isLoading" />
      <Scroller v-else
                :handleToScroll="handleToScroll"
                :handleToTouchEnd="handleToTouchEnd">
        <ul>
          <li>{{pullDown}}</li>
          <li v-for="item in movieList"
              :key="item.id">
            <div class="pic_show"
                 @tap="handleToDetail(item.id)">
              <img :src="item.img | setWH('128.180')"
                   alt>
            </div>
            <div class="info_list">
              <h2 @tap="handleToDetail(item.id)">{{ item.nm }}</h2>
              <p>
                喵喵评分:
                <span class="grade">{{ item.sc }}</span>
              </p>
              <p>主演:{{ item.star }}</p>
              <p>{{ item.showInfo }}</p>
            </div>
            <div class="btn_mall">购票</div>
          </li>
        </ul>
      </Scroller>
    </div>
  </div>

</template>

<script>
export default {
  name: "NowPlaying",
  data () {
    return {
      movieList: [],
      pullDown: "",
      isLoading: true
    };
  },
  mounted () {
    this.$ajax
      .get("/api/movieOnInfoList?cityId=" + this.$store.state.city.id)
      .then(res => {
        this.movieList = res.data.data.movieList;
        this.isLoading = false;
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {
    handleToDetail (movieId) {
      this.$router.push({
        path: `detail/${movieId}`
      });
    },
    handleToScroll (pos) {
      if (pos.y > 30) {
        this.pullDown = "正在更新";
      }
    },
    handleToTouchEnd (pos) {
      if (pos.y > 30) {
        this.$ajax.get("/api/movieOnInfoList?cityId=" + this.$store.state.city.id).then(res => {
          this.pullDown = "更新成功";
          setTimeout(() => {
            this.movieList = res.data.data.movieList;
            this.pullDown = "";
          }, 1000);
        });
      }
    }
  }
};
</script>

<style scoped>
.movie_body {
  -webkit-box-flex: 1;
  flex: 1;
  overflow: auto;
}
.movie_body .movie_content {
  display: flex;
  position: absolute;
  top: 86px;
  left: 6px;
  overflow: hidden;
  bottom: 50px;
  width: 100%;
}
.movie_body ul li {
  width: 100%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 15px;
  padding-left: 10px;
}
.movie_body ul li:nth-of-type(1) {
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 12px;
  color: #666;
  text-align: center;
}
.movie_body .pic_show {
  width: 80px;
  height: 90px;
  overflow: hidden;
}
.movie_body .pic_show img {
  width: 100%;
  border-radius: 3px;
}
.movie_body .info_list {
  margin-left: 10px;
  padding-right: 20px;
  flex: 1;
}
.movie_body .info_list h2 {
  font-size: 15px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 12px;
  color: #666;
  line-height: 20px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0;
}
.movie_body .info_list .grade {
  font-weight: 700px;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  float: right;
  margin-right: 30px;
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  border-radius: 4px;
  font-size: 2px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>
