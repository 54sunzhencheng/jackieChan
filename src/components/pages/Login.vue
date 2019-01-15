<template>
	<div class="login-box">
		<div class="header-bar">
			<i class="fa fa-close" @click = 'goback'></i>
		</div>
		<div class="contain">
			<div class="logo">
				<img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" />
			</div>
			<div class="form user">
				<input type="text" class="username" placeholder="请输入邮箱或手机号" v-model="info.username"/>
			</div>
			<div class="form psw">
				<input type="text" class="password" placeholder="请输入登录密码" v-model="info.password"/>
				<div class="forget">忘记密码？</div>
			</div>
			<div class="form sub">
				<input type="text" class="submit" value="登录" @click = 'login(getInfo)'/>
			</div>
			<div class="flex">
				<div class="flex-l">手机短信登录></div>
				<div class="flex-r">
					<router-link
					:to = "{name: 'register' }"
					>注册></router-link>
				</div>
			</div>
			<div class="other">
				<a><i class="fa fa-qq"></i> <span>QQ</span></a>
				|
				<a><i class="fa fa-weixin"></i> <span>微信</span></a>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default {
		name: 'login',
		data(){	
			return {
				info: [
					{
						username: '',
						password: '',
					}
				],
				getInfo: ''
			}
		},
		methods: {
			...mapActions(['login']),
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped lang="scss">
	.login-box{
		.header-bar{
			position: relative;
			height: 0.88rem;
			i{
				position: absolute;
				display: block;
				width: 0.4rem;
				height: 0.4rem;
				font-size: 0.4rem;
				left: 0.2rem;
				top: 0.2rem;
			}
		}
		.contain{
			overflow: hidden;
			padding: 0 0.32rem;
			.logo{
				img{
					display: block;
					width: 3.8rem;
					height: 0.5rem;
					margin: 0.24rem auto 0.88rem;
				}
			}
			.form{
				height: 0.9rem;
				input{
					width: 100%;
					height: 100%;
					border: 0;
				}
			}
			
			.user{
				border-bottom: 0.02rem solid #e9ecf0;
			}
			.psw{
				border-bottom: 0.02rem solid #e9ecf0;
				.password{
					width: 5.42rem;
					float: left;
				}
				.forget{
					width: 1.44rem;
					float: left;
					font: 0.24rem/0.9rem "";
					color: #71797f;
				}
			}
			.sub{
				margin-top: 0.9rem;
				.submit{
					background: #ff734c;
					border-radius: 1rem;
					color: #fff;
					font: 0.32rem/0.92rem "";
					text-align: center;
					box-shadow: 0 0.08rem 0.16rem 0 #ffb6a2;
				}
			}
			.flex{
				display: flex;
				justify-content: space-between;
				margin-top: 0.32rem;
				font: 0.28rem/0.72rem "";
				color: #71797f;
			}
			.other{
				display: flex;
				justify-content: space-around;
				margin-top: 1.6rem;
				font: 0.24rem/0.88rem "";
				a{
					display: block;
					width: 3.75rem;
					color: #71797f;
					text-align: center;
				}
			}
		}
	}
</style>