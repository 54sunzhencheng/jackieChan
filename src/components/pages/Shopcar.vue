<template>
	<div class="shop-box">
		<div class="head">
			<mt-header title="购物车">
				<mt-button slot="left">
					<i class="fa fa-angle-left fa-2x" @click = 'goback'></i>
				</mt-button>
				<mt-button slot="right">
					<i class="fa fa-navicon fa-2x"></i>
				</mt-button>
			</mt-header>
		</div>
		<div class="main">
			<ul class="product">
				<li class="product-list"
					v-for = 'car in cars'
					:key = 'car.id'
				>
					<div class="check">
						<span class="fa fa-check-circle"></span>
					</div>
					<a><img :src="car.url"></a>
					<div class="pro-info">
						<div class="name">{{car.title}}</div>
						<div class="panel">
							<span class="pro-price">{{car.price}}</span>
							<div class="setnum">
								<span
									@click = 'reduceCar(car)'
								>-</span>
								<input type="text" class="num" :value="car.num"/>
								<span
									@click = 'addCar(car)'
								>+</span>
							</div>
							<span class="delete"
								@click = 'removeCar(car)'
							>删除</span>
						</div>
						
					</div>
				</li>
			</ul>
			<ul class="pay-tips">
				<li class="tip">
					<span>温馨提醒：</span>
					如果选择12.23-12.25配送，鲜花将按圣诞节价，合计：<a>￥343</a>
				</li>
			</ul>
		</div>
		<div class="foot">
			<a class="total">合计:<span>￥{{totalInfo.price}}</span></a>
			<a class="pay">去结算<span>{{totalInfo.num}}</span></a>
		</div>
	</div>
</template>
<script>
	import {mapState,mapActions,mapGetters} from 'vuex'
	export default {
		name: 'shopcar',
		methods: {
			...mapActions(['addCar','reduceCar','removeCar']),
			goback() {
				this.$router.go(-1);
			}
		},
		components: {
		},
		created(){
			console.log(this.cars)
		},
		computed: {
			...mapGetters(['totalInfo']),
			...mapState({
				cars: state => state.buycar.cars
			})
		}
	}
</script>
<style scoped lang="scss">
	.shop-box{
		padding-bottom: 0.98rem;
		.head{
			height: 0.88rem;
			border-bottom: 0.01rem solid #E4E4E4;
			header{
				height: 0.88rem;
				background: #F0EFED;
				color: #000;
				font: 600 0.32rem/0.88rem "";
			}	
			
		}
		.main{
			background: #fff;
			overflow: hidden;
			.product{
				overflow: hidden;
				.product-list{
					height: 1.76rem;
					padding: 0.24rem 0.32rem 0.24rem 0.2rem;
					border-bottom: 0.01rem solid #e4e4e4;
					display: flex;
					justify-content: space-between;
					.check{
						display: block;
						height: 1.7rem;
						width: 0.7rem;
						position: relative;
						span{
							display: inlin-block;
							width: 0.48rem;
							height: 0.48rem;
							position: absolute;
							top: 50%;
							left: 50%;
							margin: -0.24rem 0 0 -0.24rem;
							font-size: 0.48rem;
							color: #FE6600;
						}
						
					}
					a{
						img{
							display: block;
							width: 1.6rem;
							height: 1.7rem;
						}
					}
					.pro-info{
						width: 4.36rem;
						.name{
							font: 0.24rem/0.38rem "";
						}
						.panel{
							display: flex;
							justify-content: space-between;
							margin-top: 0.1rem;
							height: 0.48rem;
							.pro-price{
								font: 600 0.28rem/0.44rem "";
								display: block;
								width: 0.8rem;
								color: #FE6600
							}
							.setnum{
								width: 1.6rem;
								text-align: center;
								border: 0.01rem solid #ccc;
								height: 0.44rem;
								font: 600 0.28rem/0.44rem "";
								.num{
									float: left;
									text-align: center;
									margin-top: 0.01rem;
									width: 0.6rem;
									height: 0.42rem;
									border: 0;
								}
								span{
									float: left;
									display: inline-block;
									text-align: center;
									width: 0.48rem;
									height: 0.44rem;
									
								}
							}
							.delete{
								font: 600 0.28rem/0.44rem "";
							}
						}
					}
				}
				
			}
			.pay-tips{
				overflow: hidden;
				padding: 0.2rem 0.32rem 0.2rem 0.2rem;
				.tip{
					background: #FFE9DA;
					border-radius: 0.08rem;
					padding: 0.12rem;
					font: 0.24rem/0.32rem ""
					span{
						font-weight: 600;
						color: #666;
					}
					a{
						color: #f00;
					}
				}
			}
		}
		.foot{
			width: 7.5rem;
			height: 0.98rem;
			background: #fff;
			position: fixed;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			text-align: center;
			font: 0.32rem/0.98rem "";
			.total{
				display: block;
				width: 2rem;
				span{
					color: #FE6600;
					font-weight: 600;
				}
			}
			.pay{
				display: block;
				width: 2.46rem;
				color: #fff;
				background: #FE6600;
				
				
			}
		}
	}
	
</style>