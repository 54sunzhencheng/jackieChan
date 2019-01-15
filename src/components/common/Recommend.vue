<template>
	<div class="recommend-box">
		<h3>爱情鲜花推荐</h3>
		<ul class="recommend-list">
			<li
			v-for = "pro in pros"
			:key = 'pro.id'
			>
				<div class="pic">
					<img :src="pro.url"/>
				</div>
				<div class="info">
					<p class="title">{{pro.title}}</p>
					<p class="describe">{{pro.describe}}</p>
					<div class="desc">
						<span>{{pro.desc}}</span>
					</div>
					<div class="promo">{{pro.promo}}</div>
					<div class="bottom">
						<div class="bottom-l">
							<p class="price">
								<span>{{pro.price}}</span>
								<s>{{pro.des}}</s>
							</p>
							<p class="sale">已销售{{pro.sale}}万件</p>
						</div>
						<div class="bottom-r">
							<i class="fa fa-cart-plus"></i>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'recommend',
		data(){
			return {
				pros: [
					{
						id: 1,
						url: 'https://img01.hua.com/uploadpic/newpic/9012177.jpg',
						title: '不变的承诺',
						decsribe: '99枝红玫瑰',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥520',
						des: '￥599',
						sale: '6.9'
					},
					{
						id: 2,
						url: 'https://img01.hua.com/uploadpic/newpic/9010966.jpg',
						title: '一往情深',
						decsribe: '99枝红玫瑰',
						desc: '畅销',
						promo: '经典爆款，年度销售冠军!',
						price: '￥245',
						des: '￥315',
						sale: '8.1'
					},
					{
						id: 3,
						url: 'https://img01.hua.com/uploadpic/newpic/9010011.jpg',
						title: '一心一意',
						decsribe: '玫瑰11枝',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥378',
						des: '￥485',
						sale: '6.6'
					},
					{
						id: 4,
						url: 'https://img01.hua.com/uploadpic/newpic/9012154.jpg',
						title: '甜美公主',
						decsribe: '99枝红玫瑰',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥520',
						des: '￥599',
						sale: '6.9'
					},
					{
						id: 5,
						url: 'https://img01.hua.com/uploadpic/newpic/9012060.jpg',
						title: '眷念',
						decsribe: '99枝红玫瑰',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥520',
						des: '￥599',
						sale: '6.9'
					},
					{
						id: 6,
						url: 'https://img01.hua.com/uploadpic/newpic/9012243.jpg',
						title: '恋恋情深',
						decsribe: '99枝红玫瑰',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥520',
						des: '￥599',
						sale: '6.9'
					},
					{
						id: 7,
						url: 'https://img01.hua.com/uploadpic/newpic/9092112.jpg',
						title: '不变的承诺',
						decsribe: '99枝红玫瑰',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥520',
						des: '￥599',
						sale: '6.9'
					},
					{
						id: 8,
						url: 'https://img01.hua.com/uploadpic/newpic/9010969.jpg',
						title: '你最珍贵',
						decsribe: '99枝红玫瑰',
						desc: '特价',
						promo: '经典99枝，鼎力推荐!',
						price: '￥520',
						des: '￥599',
						sale: '6.9'
					},
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	.recommend-box{
		padding-bottom: 0.7rem;
		background: #fff;
		h3{
			font: 0.32rem/1.12rem "";
			text-align: center;
		}
		.recommend-list{
			overflow: hidden;
			li{
				display: flex;
				justify-content: space-around;
				width: 7.2rem;
				height: 3.84rem;
				margin: 0.14rem auto;
				box-shadow: 0 0.5rem 1.6rem 0 #e9ecf0;
				.pic{
					width: 3.52rem;
					height: 3.84rem;
					img{
						width: 3.52rem;
						height: 3.84rem;
					}
					
				}
				.info{
					padding: 0 0.2rem;
					width: 3.26rem;
					height: 3.84rem;
					.title{
						height: 0.32rem;
						padding-top: 0.4rem;
						font: 0.28rem/0.32rem "";
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.describe{
						font: 0.24rem/0.32rem "";
					}
					.desc{
						padding-top: 0.2rem;
						font: 0.24rem/0.32rem "";	
						span{
							padding: 0 0.1rem;
							border-radius: 0.2rem;
							border: 0.01rem solid #FF734C;
							color: #FF734C;
						}
					}
					.promo{
						margin-top: 0.2rem;
						font: 0.24rem/0.56rem "";	
						border-top: 0.01rem solid #E9ECF0;
						border-bottom: 0.01rem solid #E9ECF0;

					}
					.bottom{
						display: flex;
						justify-content: space-around;
						margin-top: 0.05rem;
						.bottom-l{
							width: 2.46rem;
							height: 0.76rem;
							.price{
								height: 0.44rem;
								position: relative;
								span{
									position: absolute;
									font: 600 0.38rem/0.44rem "";
									color: #FF734C;
									left: 0;
								}
								s{
									position: absolute;
									font: 0.24rem/0.3rem "";
									color: #71797F;
									left: 1.1rem;
									bottom: 0;
								}
							}
							.sale{
								font: 0.28rem/0.32rem "";
								color: #71797F;
							}
						}
						.bottom-r{
							position: relative;
							height: 0.76rem;
							i{
								position: absolute;
								width: 0.4rem;
								height: 0.4rem;
								display: inline-block;
								font-size: 0.4rem;
								bottom: 0.1rem;
								right: 0.1rem;
							}
						}
					}
				}
			}
		}
	}
</style>