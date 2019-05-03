<template>
  <div id="box">
    <Header/>
      <router-view></router-view>
    <Tabbar/>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Tabbar from './components/Tabbar/Tabbar'
export default {
  name: 'App',
  components:{
    Header,
    Tabbar
  }
}
</script>

<style scoped>
  #box{
    padding-top: 40px;
  }
</style>

