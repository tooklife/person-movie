<template>
  <div id="detailContainer">
    <mt-header fixed
               title="影片详情">
      <router-link to=""
                   slot="left">
        <mt-button icon="back"
                   @click="handleClose">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"
             :style="{'background-image':'url('+detailMovie.img.replace(/w\.h/,'140.208')+')'}"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.img | setWH('148.208')"
                 alt="加载中...">
          </div>
          <div class="detail_list_info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{detailMovie.sc}}</p>
            <p>{{detailMovie.cat}}</p>
            <p>{{detailMovie.src}}/{{detailMovie.dur}}</p>
            <p>{{detailMovie.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{detailMovie.dra}}</p>
      </div>
      <div class="detail_player swiper-container"
           ref="detail_player">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"
              v-for="(item,index) in detailMovie.photos"
              :key="index">
            <div>
              <img :src="item | setWH('140.127')"
                   alt="加载中">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
export default {
  name: "Detail",
  data () {
    return {
      detailMovie: {}
    }
  },
  components: {
    Header
  },
  methods: {
    handleClose () {
      this.$router.back();
    }
  },
  mounted () {
    let movieid = this.$route.params.movieId
    this.$ajax.get(`/api/detailmovie?movieId=${movieid}`).then((res) => {
      var msg = res.data.msg;
      if (msg === 'ok') {
        this.detailMovie = res.data.data.detailMovie;
        this.$nextTick(() => {
          new Swiper(this.$refs.detail_player, {
            slidesperView: 'auto',
            freeMode: true,
            freeModeSticky: true
          });
        });
      }
    })
  }
};
</script>

<style scoped>
#detailContainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
.mint-header {
  background-color: #f03d37;
  /* position: static; */
}
.contentDetail {
  margin-top: 40px;
  display: block;
  margin-bottom: 0;
}
.detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list_bg {
  width: 100%;
  height: 100%;
  background: 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
}
.detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list_img {
  width: 122px;
  height: 175px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list_info {
  margin-top: 8px;
}
.detail_list_info h2 {
  font-size: 20px;
  /* color: white; */
  font-weight: normal;
  line-height: 40px;
}
.detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
.detail_intro {
  padding: 10px;
}
.detail_player {
  margin: 20px;
}
.detail_player .swiper-slide {
  width: 70px !important;
  margin-right: 20px;
  text-align: center;
  font-size: 14px;
}
.detail_player .swiper-slide img {
  width: 100%;
  margin-bottom: 5px;
}
.detail_player .swiper-slide p:nth-of-type(2) {
  color: #999;
}
</style>
