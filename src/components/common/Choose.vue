<template>
	<div class="choose-box">
		<p class="title"> 
		<span></span>
		一秒选花
		</p>
		<ul class="list1">
			<li 
			v-for = 'type1 in type1s'
			:key = 'type1.id'
			>
				<router-link
					:to = "{name: 'list'}"
				>
					<img :src="type1.url">
					<p>{{type1.title}}</p>
				</router-link>
			</li>
		</ul>
		<ul class="list2">
			<li 
			v-for = 'type2 in type2s'
			:key = 'type2.id'
			>
				<img :src="type2.url">
				<p>{{type2.title}}</p>
			</li>
		</ul>
		<ul class="list3">
			<li 
			v-for = 'type3 in type3s'
			:key = 'type3.id'
			>
				<img :src="type3.url">
				<p>{{type3.title}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'choose',
		data(){
			return {
				type1s: [
					{
						id: 1,
						url: 'https://img02.hua.com/m/home/img/m_home_use_love.png',
						title: '送恋人',
					},
					{
						id: 2,
						url: 'https://img02.hua.com/m/home/img/m_home_use_parent.png',
						title: '送长辈',
					},
					{
						id: 3,
						url: 'https://img02.hua.com/m/home/img/m_home_use_friend.png',
						title: '送朋友',
					},
				],
				type2s: [
					{
						id: 1,
						url: 'https://img02.hua.com/m/home/img/m_home_use_birthday.png',
						title: '生日祝福',
					},
					{
						id: 2,
						url: 'https://img02.hua.com/m/home/img/m_home_use_profess.png',
						title: '表白求婚',
					},
					{
						id: 3,
						url: 'https://img02.hua.com/m/home/img/m_home_use_business.png',
						title: '开业商务',
					},
					{
						id: 4,
						url: 'https://img02.hua.com/m/home/img/m_home_use_anniversary.png',
						title: '周年纪念',
					}
				],
				type3s: [
					{
						id: 1,
						url: 'https://img02.hua.com/m/home/img/m_home_category_new.png',
						title: '新品来袭',
					},
					{
						id: 2,
						url: 'https://img02.hua.com/m/home/img/m_home_category_quality.png',
						title: '品味之选',
					},
					{
						id: 3,
						url: 'https://img02.hua.com/m/home/img/m_home_category_you.png',
						title: '设计师甄选',
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	.choose-box{
		background: #fff;
		overflow: hidden;
		.title{
			font-size: 0.32rem;
			height: 0.32rem;
			padding: 0.24rem;
			color: #232628;
			span{
				display: inline-block;
				width: 0.06rem;
				height: 0.32rem;
				background: #000;
				margin-right: 0.24rem;
				vertical-align: middle;
			}
		}
		.list1{
			display: flex;
			justify-content: space-around;
			height: 2.6rem;
			li{
				position: relative;
				width: 2.3rem;
				height: 2.6rem;
				img{
					diaplay:block;
					width: 2.3rem;
					height: 2.6rem;
					position: absolute;
				}
				p{
					width: 2.3rem;
					height: 0.38rem;
					position: absolute;
					top: 0.2rem;
					z-index: 999;
					font: 0.28rem/0.38rem "";
					text-align: center;
				}
			}
		}
		.list2{
			display: flex;
			justify-content: space-around;
			height: 1.96rem;
			margin-top: 0.2rem;
			li{
				position: relative;
				width: 1.7rem;
				height: 1.96rem;
				img{
					diaplay:block;
					width: 1.7rem;
					height: 1.96rem;
					position: absolute;
				}
				p{
					width: 1.7rem;
					height: 0.38rem;
					position: absolute;
					top: 0.2rem;
					z-index: 999;
					font: 0.28rem/0.38rem "";
					text-align: center;
				}
			}
		}
		.list3{
			display: flex;
			justify-content: space-around;
			height: 2.6rem;
			margin-top: 0.2rem;
			li{
				position: relative;
				width: 2.3rem;
				height: 2.6rem;
				img{
					diaplay:block;
					width: 2.3rem;
					height: 2.6rem;
					position: absolute;
				}
				p{	
					background: rgba(0,0,0,0.5);
					width: 2.3rem;
					height: 0.38rem;
					position: absolute;
					bottom: 0;
					z-index: 999;
					font: 0.28rem/0.38rem "";
					text-align: center;
					color: #fff;
				}
			}
		}
	}
</style>