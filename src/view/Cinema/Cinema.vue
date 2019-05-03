<template>
    <div>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城<i class="iconfont icon-xiala"></i>
                </div>
                <div class="brand_switch">
                    品牌<i class="iconfont icon-xiala"></i>
                </div>
                <div class="feature_switch">
                    特色<i class="iconfont icon-xiala"></i>
                </div>
            </div>
        </div>
        <CiList/>
    </div>
</template>

<script>
import CiList from '../../components/CiList/CiList.vue'
export default {
    name:'Cinema',
    components:{
        CiList
    }
}
</script>

<style>
.cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
}
</style>
