<template>
	<div class="login-box">
		<div class="header-bar">
			<i @click = 'goback'> < </i>
		</div>
		<div class="contain">
			<div class="logo">
				<p>手机号注册</p>
			</div>
			<div class="form user">
				<input type="text" class="username" placeholder="请输入手机号" v-model="info.username" />
			</div>
			<div class="form msg">
				<input type="text" class="msg" placeholder="请输入短信验证码"/>
				<div class="get">获取验证码</div>
			</div>
			<div class="form psw">
				<input type="text" class="password" placeholder="请设置密码" v-model="info.password" />
			</div>
			<div class="form sub">
				<input type="text" class="submit" value="注册" @click = 'register(getInfo)'/>
			</div>
			<div class="flex">
				<div class="flex-c">邮箱注册></div>
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
			...mapActions(['register']),
			goback(){
				this.$router.go(-1)
			},
			
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
				font-weight: 600;
			}
		}
		.contain{
			overflow: hidden;
			padding: 0 0.32rem;
			.logo{
				p{
					width: 3.8rem;
					height: 0.5rem;
					margin: 0.24rem auto 0.88rem;
					font-size: 0.44rem;
					text-align: center;
					font-weight: 600;
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
			
			.user,.psw{
				border-bottom: 0.02rem solid #e9ecf0;
			}
			.msg{
				border-bottom: 0.02rem solid #e9ecf0;
				.msg{
					width: 5.42rem;
					float: left;
				}
				.get{
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
				justify-content:center;
				margin-top: 0.32rem;
				font: 0.28rem/0.72rem "";
				color: #71797f;
			}
		}
	}
</style>