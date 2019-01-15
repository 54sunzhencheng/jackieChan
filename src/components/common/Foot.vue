<template>
	<ul class="foot-box">
			<li
			v-for = 'nav in navs'
			:key = 'nav.id'
			>
			<router-link
				:to = "{name: nav.skip}"
			>
			<i :class="nav.icon"></i>
			<p>{{nav.title}}</p>
			</router-link>
			</li>
		
	</ul>
</template>
<script>
	export default {
		name: 'foot',
		data(){
			return {
				navs: [
					{
						id: 1,
						icon: 'fa fa-home',
						title: '首页',
						skip: 'home'
					},
					{
						id: 2,
						icon: 'fa fa-reorder ',
						title: '分类',
						skip: ''
					},
					{
						id: 3,
						icon: 'fa fa-shopping-cart ',
						title: '购物车',
						skip: 'shopcar'
					},
					{
						id: 4,
						icon: 'fa fa-user-circle ',
						title: '我的',
						skip: 'mine'
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	.foot-box{
		z-index: 9999;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom:0;
		width: 7.5rem;
		height: 0.66rem;
		background: #F7F9FA;
		padding: 0.16rem 0  0.1rem 0;
		li{
			width: 1.8rem;
			height: 0.66rem;
			i{
				display: block;
				width: 0.4rem;
				height: 0.4rem;
				margin: 0 auto;
				font-size: 0.4rem;
			}
			p{
				height: 0.26rem;
				text-align: center;
				font: 0.18rem/0.26rem "";
			}
		}
	}
</style>