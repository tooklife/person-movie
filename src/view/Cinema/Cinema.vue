<template>
    <div>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城222<i class="iconfont icon-xiala"></i>
                </div>
                <div class="brand_switch">
                    品牌<i class="iconfont icon-xiala"></i>
                </div>
                <div class="feature_switch">
                    热卖<i class="iconfont icon-xiala"></i>
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
    font-size: 15px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #f1f1f1;
    position: fixed;
    margin-top: 0px;
}
.iconfont{
    font-size: 11px;
}
</style>
