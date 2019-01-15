<template>
	<div class="mine-box">
		<div class="head">
			<mt-header title="个人中心">
				<mt-button slot="left">
					<i class="fa fa-angle-left fa-2x" @click = 'goback'></i>
				</mt-button>
			</mt-header>
		</div>
		<div class="main">
			<div class="userinfo">
				<div class="info">
					<p>Hi,欢迎来到花礼网</p>
					<router-link
						:to = "{name: 'login'}"
					>
					<span>登录/注册</span>
					</router-link>
				</div>
			</div>
			<div class="panel">
				<div class="panel-head">
					<a>我的订单</a>
					<a>全部订单 <i class="fa fa-angle-right"></i></a>
				</div>
				<div class="panel-body">
					<a><i class="fa fa-credit-card-alt"></i><span>待付款</span></a>
					<a><i class="fa fa-truck"></i><span>今日配送</span></a>
					<a><i class="fa fa-comments"></i><span>待评价</span></a>
				</div>
			</div>
			<div class="link">
				<div class="linkbox">
					<a><i class="fa fa-credit-card"></i><span>优惠券</span></a>
					<a><i class="fa fa-diamond"></i><span>会员积分</span></a>
					<a><i class="fa fa-birthday-cake"></i><span>生日纪念提醒</span></a>
					<a><i class="fa fa-star-o"></i><span>我的收藏</span></a>
				</div>
				<div class="linkbox">
					<a><i class="fa fa-credit-card-alt"></i><span>待付款</span></a>
					<a><i class="fa fa-yen"></i><span>余额</span></a>		
				</div>
			</div>
			<div class="link">
				<div class="linkbox">
					<a><i class="fa fa-volume-control-phone"></i><span>联系客服</span></a>
					<a><i class="fa fa-question-circle-o"></i><span>帮助中心</span></a>
					<a><i class="fa fa-exclamation-circle"></i><span>关于花礼</span></a>
					<a><i class="fa fa-gear"></i><span>设置</span></a>
				</div>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>
<script>
	import Foot from '../common/Foot'
	export default {
		name: 'mine',
		methods: {
			goback(){
				this.$router.go(-1)
			}
		},
		components: {
			Foot
		}
	}
</script>
<style scoped lang="scss">
	.mine-box{
		background: #E9ECF0;
		.head{
			height: 0.88rem;
			header{
				height: 0.88rem;
				background: #fff;
				color: #000;
				font: 600 0.32rem/0.88rem "";
			}
			
		}
		.main{
			height: 11.5rem;
			background: url('https://img02.hua.com/m/member/center/backgroundv3.png') no-repeat top center;
			background-size: 100% 2.5rem;
			.userinfo{
				position: relative;
				height: 2.24rem;
				.info{
					position: absolute;
					height: 1.26rem;
					width: 2.52rem;
					margin: auto;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					text-align: center;
					p{
						color: #fff;
						font: 0.28rem/0.32rem "";
					}
					span{
						margin-top: 0.2rem;
						display: block;
						height: 0.72rem;
						font: 0.32rem/0.72rem "";
						background: #fff;
						border-radius: 0.8rem;
					}
				}
			}
			.panel{
				width: 7.18rem;
				height: 2.34rem;
				background: #fff;
				margin: 0.1rem auto;
				border-radius: 0.1rem;
				.panel-head{
					padding: 0 0.32rem;
					display: flex;
					justify-content: space-between;
					border-bottom: 0.01rem solid #E9ECF0;
					a{
						display: inline-block;
						height: 0.88rem;
						font: 0.38rem/0.88rem "";
					}
				}
				.panel-body{
					height: 1.46rem;
					display: flex;
					justify-content: space-around;
					a{
						display: inline-block;
						height: 0.88rem;
						padding: 0.2rem 0;
						text-align: center;
						i{
							display: block;
							font-size: 0.6rem;
						}
						span{
							padding-top: 0.1rem;
							display: block;
							font: 0.28rem/0.34rem "";
						}
					}
				}
			}
			.link{
				width: 7.18rem;
				background: #fff;
				margin: 0.1rem auto;
				border-radius: 0.1rem;
				overflow: hidden;
				.linkbox{
					display: flex;
					height: 1.6rem;
					a{
						width: 1.8rem;
						display: inline-block;
						height: 1.6rem;
						text-align: center;
						i{
							margin-top: 0.2rem;
							display: block;
							font-size: 0.4rem;
						}
						span{
							padding-top: 0.1rem;
							display: block;
							font: 0.24rem/0.32rem "";
						}
					}
				}
			}
		}
	}
</style>