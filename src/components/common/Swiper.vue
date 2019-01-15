<template>
	<div class='swiper-box'>
		<mt-swipe :auto="4000">
			<mt-swipe-item><img src="https://img02.hua.com/slider/17_sheshou_m.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="https://img02.hua.com/slider/18_xmas_m.png"></mt-swipe-item>
			<mt-swipe-item><img src="https://img02.hua.com/slider/18_birthday_m.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="https://img02.hua.com/slider/17_sheshou_m.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="https://img02.hua.com/slider/18_xmas_m.png"></mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
	export default {
		
	}
</script>
<style lang="scss" scoped="">
	.swiper-box{
		height: 3.6rem;
		img{
			hieght: 3.6rem;
			width: 7.5rem;
		}
	}
</style>
