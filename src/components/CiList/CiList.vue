<template>
  <div class="cinema_body">
    <div class="cinema_content"
         ref="cinema_content">
      <Loading v-if="isLoading" />
      <Scroller v-else
                :handleToScroll="handleToScroll"
                :handleToTouchEnd="handleToTouchEnd">
        <ul>
          <li>{{pullDown}}</li>
          <li v-for="item in cinemaList"
              :key="item.id">
            <div class="firstLine">
              <span class="title">
                {{item.nm}}
              </span>
              <span class="distance">
                {{item.distance}}
              </span>
            </div>

            <span class="q">
              ￥
              <span class="price">{{item.sellPrice}}</span>
              起
            </span>

            <div class="card">
              <div v-for="(num,key) in item.tag "
                   v-if="num===1"
                   :key="key"
                   :class="key|classStyle">
                {{key | formateCard}}
              </div>
            </div>
            <div class="address">
              <span class="addr">
                {{item.addr}}
              </span>

            </div>
          </li>
        </ul>
      </Scroller>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: 'CiList',
  data () {
    return {
      cinemaList: [],
      pullDown: '',
      isLoading: true
    }
  },
  methods: {
    handleToScroll (pos) {
      if (pos.y > 30) {
        this.pullDown = "正在更新";
      }
    },
    handleToTouchEnd (pos) {
      if (pos.y > 30) {
        this.$ajax.get("/api/cinemaList?cityId=" + this.$store.state.city.id).then(res => {
          this.pullDown = "更新成功";
          setTimeout(() => {
            this.movieList = res.data.data.movieList;
            this.pullDown = "";
          }, 1000);
        });
      }
    }
  },
  mounted () {
    this.$ajax.get('/api/cinemaList?cityId=' + this.$store.state.city.id).then(res => {
      this.$nextTick(() => {
        this.isLoading = false;
        var scroll = new BScroll(this.$refs.cinema_content, {
          tap: true,
          probeType: 1
        });
      })
      this.cinemaList = res.data.data.cinemas;
    })
  },
  filters: {
    formateCard (key) {
      var card = [
        { key: 'allowRefund', value: '退' },
        { key: 'cityCardTag', value: '城' },
        { key: 'deal', value: '售' },
        { key: 'endorse', value: '改签' },
        { key: 'hallTypeVOList', value: '3D' },
        { key: 'sell', value: '卖' },
        { key: 'snack', value: '小吃' },
        { key: 'vipTag', value: '折扣卡' }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return '';
    },
    classStyle (key) {
      var card = [
        { key: 'allowRefund', value: 'bl' },
        { key: 'buyout', value: 'bl' },
        { key: 'cityCardTag', value: 'or' },
        { key: 'deal', value: 'bl' },
        { key: 'endorse', value: 'bl' },
        { key: 'hallTypeVOList', value: 'bl' },
        { key: 'sell', value: 'or' },
        { key: 'snack', value: 'or' },
        { key: 'vipTag', value: 'bl' }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return '';
    }
  }
}
</script>

<style scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body .cinema_content {
  width: 100%;
  display: flex;
  position: absolute;
  top: 105px;
  left: 0;
  overflow: hidden;
  bottom: 50px;
}
.cinema_body ul {
  width: 100%;
}
.cinema_body ul li:nth-of-type(1) {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 13px;
  color: #666;
  text-align: center;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
  padding-left: 20px;
}
.cinema_body div {
  margin-bottom: 3px;
}
.cinema_body .firstLine {
  overflow: hidden;
}
.cinema_body .title {
  display: inline-block;
  margin-right: 70px;
  font-size: 14px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cinema_body .distance {
  font-size: 12px;
  float: right;
  margin-right: 40px;
}
.cinema_body .q {
  font-size: 11px;
  color: #666;
  margin-right: 5px;
  color: green;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 12px;
  color: #666;
}
.cinema_body .address .addr {
  display: inline-block;
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: inline-flex;
}
.cinema_body .card div {
  font-size: 12px;
  padding: 0 3px;
  margin-right: 5px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>
