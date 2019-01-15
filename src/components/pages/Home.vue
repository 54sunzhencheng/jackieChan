<template>
	<div class="home-box">
		<Topbanner></Topbanner>
		<Header></Header>
		<Swiper></Swiper>
		<Conpany></Conpany>
		<Procate></Procate>
		<Choose></Choose>
		<Recommend></Recommend>
		<Foot></Foot>		
	</div>
</template>
<script>
	import Topbanner from '../common/Topbanner'
	import Header from '../common/Header'
	import Swiper from '../common/Swiper'
	import Conpany from '../common/Conpany'
	import Procate from '../common/Procate'
	import Choose from '../common/Choose'
	import Recommend from '../common/Recommend'
	import Foot from '../common/Foot'
	export default {
		name: 'Home',
		components: {
			// Head,Home
			Topbanner,Header,Swiper,Conpany,Procate,Choose,Recommend,Foot
		}
	}
</script>
<style scoped>
	.home-box{
		background: #E9ECF0;
	}
	
</style>