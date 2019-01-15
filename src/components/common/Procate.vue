<template>
	<ul class="procate-box">
		<li 
		v-for = 'pro in pros'
		:key = pro.id
		>
			<img :src="pro.url">
			<p>{{pro.title}}</p>
		</li>
		
	</ul>
</template>

<script>
	export default {
		name: 'procate',
		data(){
			return {
				pros: [
					{
						id: 1,
						url: 'https://img02.hua.com/m/home/img/m_home_category_flower.png',
						title: '鲜花'
					},
					{
						id: 2,
						url: 'https://img02.hua.com/m/home/img/m_home_category_ppf.png',
						title: '永生花'
					},
					{
						id: 3,
						url: 'https://img02.hua.com/m/home/img/m_home_category_cake.png',
						title: '蛋糕'
					},
					{
						id: 4,
						url: 'https://img02.hua.com/m/home/img/m_home_category_gift.png',
						title: '礼品'
					},
					{
						id: 5,
						url: 'https://img02.hua.com/m/home/img/m_home_category_chocolate.png',
						title: '巧克力'
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	.procate-box{
		background: #fff;
		padding: 0.16rem 0;
		height: 1.04rem;
		display: flex;
		justify-content:space-around;
		li{
			height: 1.04rem;
			width: 1.5rem;
			text-align: center;
			img{
				display: block;
				width: 0.72rem;
				height: 0.72rem;
				margin: 0 auto;
			}
			p{
				font: 0.14rem/0.32rem ""
			}
		}
	}
</style>