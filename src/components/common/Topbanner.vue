<template>
	<div class="topbanner">
		<span><i class="fa fa-times-circle"></i></span>
		<img src="https://img02.hua.com/m/icon/mobile_banner02.jpg">
	</div>
</template>
<script>
	export default {
		name: 'topbanner'
	}
</script>
<style scoped  lang="scss">
	.topbanner{
		height: 0.96rem;
		span{
			position: absolute;
			top: 0;left: 0;
			height: 0.96rem;
			width: 0.96rem;
			display: block;
			i{
				position: absolute;
				top: 0;left: 0;right: 0;bottom: 0;
				margin: auto;
				height: 0.32rem;
				width: 0.32rem;
				display: block;
				font-size: 0.32rem;
			}
		}
		img{
			height: 0.96rem;
		}
	}
</style>