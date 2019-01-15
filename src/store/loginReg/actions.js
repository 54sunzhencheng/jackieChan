
/*
	actions中处理的都是异步请求的方法，说白了，我们将来的数据请求，数据处理等方法全部写在这里


*/
import {SYNC_UPDATE} from './const'
export default {
	initUesrs({commit}){
		//当数据之后我们执行一个初始化，直接出现一个cars
		console.log('success data users');
		let users = getUsers(); //要初始化就要去获取数据
		commit(SYNC_UPDATE,users)
	},
	
	//1.添加购物车	2.数量的加减
	register({commit},getInfo){
		this.getInfo = this.info
		//这里我们拿到数据之后是不是就是后端存储数据，我们暂时没有后端，我们可以使用localStorage/Cookie
		//以下操作都是属于后台的
		setTimeout(() => {
			let users = getUsers();//获取本地存储的数据
			/*some(callback) 这个给我们返回的是一个true /false*/ 
			let isHas = users.some(item=> {
				if(item.username === getInfo.username ){
					//成立 说明cars里面已经存在这条数据了
					alert('已经注册，请登录！')
					location.href = '#/login'
					return true
				}
			})
			// 如果没有这条数据
			if(!isHas){
				alert('注册成功！')
				users.push(getInfo)
				location.href = '#/login'
			}
			localStorage.users = JSON.stringify(users);
			commit(SYNC_UPDATE,users)
		},50)
	},
	
	login({commit},getInfo){
		this.getInfo = this.info
		//这里我们拿到数据之后是不是就是后端存储数据，我们暂时没有后端，我们可以使用localStorage/Cookie
		//以下操作都是属于后台的
		setTimeout(() => {
			let users = getUsers();//获取本地存储的数据
			/*some(callback) 这个给我们返回的是一个true /false*/ 
			let isHas = users.some(item=> {
				if(item.username === getInfo.username && item.password === getInfo.password){
					//成立 说明cars里面已经存在这条数据了
					alert('登录成功！')
					location.href = '#/home'
					return true
				}
			})
			// 如果没有这条数据
			if(!isHas){
				alert('用户名或密码错误！')
			}
		},50)
	}
	
}

function getUsers(){
	return JSON.parse(localStorage.users?localStorage.users : '[]')
}
