<template>
  <div class="city_body">
    <div class="city_content">
      <Loading v-if="isLoading" />
      <Scroller v-else>
        <div class="city_list">
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="item in hotCity"
                  :key="item.id"
                  @tap="handleToCity(item.nm,item.id)">{{item.nm}}</li>
            </ul>
          </div>
          <div class="city_sort">
            <div v-for="item in cityList"
                 :key="item.index">
              <h2>{{item.index}}</h2>
              <ul>
                <li v-for="itemList in item.list"
                    :key="itemList.id"
                    @tap="handleToCity(itemList.nm,itemList.id)">{{itemList.nm}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="city_index">
          <ul v-for="item in cityList"
              :key="item.index">
            <li>{{item.index}}</li>
          </ul>
        </div>

      </Scroller>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      cityList: [],
      hotCity: [],
      isLoading: true
    }
  },
  mounted () {

    var cityList = window.localStorage.getItem('cityList');
    var hotCity = window.localStorage.getItem('hotCity');

    if (cityList && hotCity) {
      this.cityList = JSON.parse(cityList);
      this.hotCity = JSON.parse(hotCity);
      this.isLoading = false;
    }
    else {
      this.$ajax.get('/api/cityList').then(res => {
        this.isLoading = false;
        var cities = res.data.data.cities;
        var { cityList, hotCity } = this.formatCityList(cities);

        this.cityList = cityList;
        this.hotCity = hotCity;

        window.localStorage.setItem('cityList', JSON.stringify(cityList));
        window.localStorage.setItem('hotCity', JSON.stringify(hotCity));
      }).catch(res => {
        console.log(res);
      })
    }

  },
  methods: {
    formatCityList (cities) {
      var cityList = [];
      var hotCity = [];


      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotCity.push(cities[i])
        }
      }

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          cityList.push({ index: firstLetter, list: [{ nm: cities[i].nm, id: cities[i].id }] });
        }
        else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id })
            }
          }

        }

      }


      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        }
        else if (n1.index < n2.index) {
          return -1;
        }
        else {
          return 0;
        }
      })

      function toCom (firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      return {
        cityList,
        hotCity
      }
    },
    handleToCity (nm, id) {
      this.$store.commit('city/CITY_INFO', { nm, id });
      console.log(this);
      this.$router.push('/movie/nowPlaying');
    }
  }
}
</script>

<style scoped>
#content .city_body {
  display: flex;
  margin-top: 44px;
  width: 100%;
  overflow: hidden;
}
.city_content {
  display: flex;
  position: absolute;
  top: 86px;
  left: 0;
  overflow: hidden;
  bottom: 50px;
  width: 100%;
  background: #fff5f0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
  font-size: 15px;
  margin-right: 20px;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot .clearfix {
  overflow: hidden;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
  border-top: 1px #e6e6e6 solid;
  position: fixed;
  top: 85px;
  right: 0;
  background-color: #f0f0f0;
}
</style>
