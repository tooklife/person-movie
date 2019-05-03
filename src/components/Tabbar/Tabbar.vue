<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
			<router-link to="movie" tag="a" class="mui-tab-item">
				<span class="mui-icon iconfont icon-dianying"></span>
				<span class="mui-tab-label">电影</span>
			</router-link>
			<router-link to="cinema" tag="a" class="mui-tab-item">
				<span class="mui-icon iconfont icon-yingyuana"></span>
				<span class="mui-tab-label">影院</span>
			</router-link>
			<router-link to="mine" tag="a" class="mui-tab-item">
				<span class="mui-icon iconfont icon-wode"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
	name:'Tabbar'
}
</script>

<style>

</style>
