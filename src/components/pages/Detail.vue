<template>
	<div class="detail-box">
		<div class="head">
			<mt-header>
				<mt-button slot="left">
					<i class="fa fa-angle-left fa-2x " @click='goback'></i>
				</mt-button>
				<mt-button slot="right"><i class="fa fa-navicon fa-2x"></i></mt-button>
			</mt-header>
		</div>
		<div class="probanner">
			<mt-swipe :show-indicators="false" :auto='0' :continuous='false'>
				<mt-swipe-item
					
				>
					<img :src="msg.url">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="proinfo">
			<div class="pro-t">
				<div class="pro-t-title">
					{{msg.title}}
					<span>浪漫唯美 女神挚爱</span>
				</div>
				<div class="pro-t-collect">
					<i class="fa fa-star-o"></i>
				</div>
			</div>
			<div class="pro-c">
				<div class="pro-c-price">
					<span>{{msg.price}}</span>
					<s>￥383</s>
				</div>
				<div class="pro-c-sale">
					已售7.55万件
				</div>
			</div>
			<div class="pro-b">
				<a>平均配送：￥298</a>
				<a>12.23~25配送：￥343</a>
			</div>
		</div>
		<div class="media">
			<i class="fa fa-mobile-phone "></i>
			<span>下单立减6元</span>
			<i class="fa fa-angle-right "></i>
		</div>
		<div class="details-info">
			<div class="details-items">
				<div class="items-l">花语</div>
				<div class="items-r">只想和你忘掉一切烦恼，尽情沉醉在最浪漫的气氛中。</div>
			</div>
			<div class="details-items">
				<div class="items-l">材料</div>
				<div class="items-r">33枝红玫瑰</div>
			</div>
			<div class="details-items">
				<div class="items-l">配送</div>
				<div class="items-r">全国</div>
			</div>
			<div class="details-items">
				<div class="items-l">附送</div>
				<div class="items-r">下单填写留言，即免费赠送精美贺卡！</div>
			</div>
		</div>
		<div class="select">
			<div class="select-t">
				<div class="box-l">已选</div>
				<div class="box-c">忘情巴黎</div>
				<div class="box-r"><i class="fa fa-ellipsis-h"></i></div>
			</div>
			<div class="select-t">
				<div class="box-l">配送至</div>
				<div class="box-c"><i class="fa fa-map-marker"></i>请选择配送地区</div>
				<div class="box-r"><i class="fa fa-ellipsis-h"></i></div>
			</div>
		</div>
		<div class="foot-nav">
			<a class="kefu">
				<i class="fa fa-whatsapp"></i>
				<span>客服</span>
			</a>
			<a class="car">
				<i class="fa fa-shopping-cart"></i>
				<span>购物车</span>
			</a>
			<a class="add" href="#/shopcar" 
			@click = 'addCar(msg)'
			>加入购物车</a>
			<a class="buy">立即购买</a>
		</div>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	
	export default {
		name: 'detail',
		data(){
			return {
				msg: []
			}
		},
		created(){
			this.msg = JSON.parse(localStorage.content);
		},
		methods: {
			...mapActions(['addCar']),
			goback() {
				this.$router.go(-1);
			},
		}
	}
</script>
<style scoped lang="scss">
	.detail-box {
		padding-bottom: 0.98rem;
		.head {
			height: 0.88rem;
			header {
				height: 0.88rem;
				background: #fff url(https://m.hua.com/content/vue/login/static/img/m_hualogo.png) no-repeat center;
				background-size: 3rem 0.4rem;
				i {
					color: #000;
				}
			}
		}
		.probanner{
			height: 8.18rem;
			img{
				display: block;
				height: 8.18rem;
			}
		}
		.proinfo{
			background: #fff;
			height: 2.14rem;
			padding: 0.2rem 0.2rem;
			.pro-t{
				height: 0.46rem;
				display: flex;
				justify-content: space-between;
				font: 0.28rem/0.46rem "";
				.pro-t-title{
					width: 6rem;
					span{
						color: #FF734C;
					}
				}
				.pro-t-collect{
					width: 0.8rem;
					
				}
			}
			.pro-c{
				margin-top: 0.2rem;
				height: 0.48rem;
				display: flex;
				justify-content: space-between;
				font: 0.36rem/0.48rem "";
				.pro-c-price{
					width: 4.8rem;
					span{
						color: #FF734C;
						font-weight: 600;
					}
					s{
						font: 0.24rem/0.34rem "";
					}
				}
				.pro-c-sale{
					width: 1.92rem;
					font: 0.24rem/0.48rem "";
					
				}
			}
			.pro-b{
				width: 6.86rem;
				height: 0.64rem;
				margin: 0.2rem auto;
				a{
					display: inline-block;
					font: 0.24rem/0.64rem "";
					padding: 0 0.1rem;
					border: 0.01rem solid #232628;
				}
			}
		}
		.media{
			background: #fff;
			margin-top: 0.01rem;
			height: 1rem;
			font: 0.32rem/1rem "";
			i{
				width: 0.8rem;
				font-size: 0.4rem;
				text-align: center;
			}
			span{
				display: inline-block;
				width: 5.6rem;
			}
		}
		.details-info{
			margin-top: 0.2rem;
			background: #fff;
			overflow: hidden;
			.details-items{
				display: flex;
				justify-content: space-around;
				font: 0.24rem/0.8rem "";
				.items-l{
					width: 0.8rem;
				}
				.items-r{
					font: 0.24rem/0.79rem "";
					width: 6rem;
					border-bottom: 0.01rem solid #E9ECF0;
				}
			}
		}
		.select{
			overflow: hidden;
			background: #fff;
			margin-top: 0.2rem;
			.select-t{
				display: flex;
				justify-content: space-around;
				font: 0.24rem/0.8rem "";
				.box-l{
					width: 0.8rem;
				}
				.box-c{
					width: 5.6rem;
				}
				.box-r{
					width: 0.4rem;
				}
			}
		}
		.foot-nav{
			display: flex;
			justify-content: space-around;
			background: #fff;
			width: 7.5rem;
			height: 0.98rem;
			position: fixed;
			bottom: 0;
			.kefu,.car{
				text-align: center;
				width: 1.5rem;
				i{
					margin-top: 0.2rem;
					display: block;
					font-size: 0.4rem;
				}
				span{
					display: block;
					font: 0.24rem/0.32rem "";
				}
			}
			.add{
				font: 0.32rem/0.98rem "";
				text-align: center;
				width: 2.24rem;
				color: #fff;
				background: #3d4d42;
			}
			.buy{
				font: 0.32rem/0.98rem "";
				text-align: center;
				width: 2.24rem;
				color: #fff;
				background: #FF734C;
			}
		}
	}
</style>
