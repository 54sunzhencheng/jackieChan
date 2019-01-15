<template>
	<div class="list-box">
		<div class="head">
			<mt-header title="爱情鲜花">
				<mt-button slot="left">
					<i class="fa fa-angle-left fa-2x" @click = 'goback'></i>
				</mt-button>
				<mt-button slot="right">
					<i class="fa fa-whatsapp fa-2x"></i> <i class="fa fa-navicon fa-2x"></i>
				</mt-button>
			</mt-header>
		</div>
		<div class="filter">
			<a>综合</a>
			<a>销量</a>
			<a>
				价格
				<i class="fa fa-sort"></i>
			</a>
			<a>新品</a>
		</div>
		<div class="purpose">
			<div class="purpose-nav">
				<a>送女友</a>
				<a>送男友</a>
				<a>送朋友</a>
				<a>送长辈</a>
				<a>筛选 <i class="fa fa-caret-down"></i></a>
			</div>
		</div>
		<ul class="produce">
			<li class="produce-item"
			v-for = "pro in pros"
			:key = 'pro.id'
			@click = 'goInto(pro)'
			>
			<router-link
				:to = "{name: 'detail'}"
			>
				<div class="pic">
					<img :src="pro.url"/>
				</div>
				<div class="info">
					<p class="title">{{pro.title}}</p>
					<p class="price">￥{{pro.price}}</p>
				</div>
			</router-link>
				
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapActions} from 'vuex'
	export default {
		name: 'list',
		data(){
			return {
				pros: []
			}
		},
		created(){
			this.getPros();
		},
		methods: {
			...mapActions(['goInto']),
			goback(){
				this.$router.go(-1)
			},
			getPros(){
				this.$http.get('../../../static/pro.json')
				.then(res => {
					this.pros = res.data;
				})
				.catch(err => console.log(err))
			},
		},
	}
</script>
<style scoped lang="scss">
	.list-box{
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
		.filter{
			background: #fff;
			height: 0.9rem;
			display: flex;
			justify-content: space-between;
			border-bottom: 0.01rem solid #E9ECF0;
			a{
				display: block;
				width: 1.84rem;
				height: 0.88rem;
				text-align: center;
				font: 0.28rem/0.88rem "";
			}
			
		}
		.purpose{
			background: #fff;
			height: 0.48rem;
			padding: 0.2rem 0;
			display: flex;
			justify-content: space-around;
			a{
				display: inline-block;
				width: 1.3rem;
				height: 0.48rem;
				text-align: center;
				font: 0.24rem/0.48rem "";
				border: 0.01rem solid #F7F9FA;
				background: #F7F9FA;
			}
		}
		.produce{
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			.produce-item{
				margin-top: 0.2rem;
				background: #fff;
				width: 3.5rem;
				height: 5.4rem;
				.pic{
					height: 3.74rem;
					img{
						height: 3.74rem;
					}
				}
				.info{
					height: 1.44rem;
					padding: 0.2rem;
					p{
						font: 0.32rem/0.72rem "";
					}
					.price{
						color: #FF734C;
					}
				}
			}
		}
	}
</style>