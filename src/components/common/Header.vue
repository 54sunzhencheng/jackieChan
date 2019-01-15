<template>
	<div class="header-box">
		<mt-header>
			<mt-button slot="left"><i class="fa fa-list"></i></mt-button>
			<mt-button slot="right">
				<router-link
				:to = "{name: 'login' }"
				>登录</router-link>
			</mt-button>
		</mt-header>

	</div>
</template>
<script>
	export default {

	}
</script>
<style lang="scss" scoped>
	.header-box {
		height: 0.96rem; 
		header {
			height: 0.96rem;
			background: #435448 url(https://m.hua.com/content/vue/login/static/img/m_hualogo.png) no-repeat center;
			background-size: 3rem 0.4rem;
			a{
				color: #fff;
			}
		}
		
	}
</style>
