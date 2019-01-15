
/*
	actions中处理的都是异步请求的方法，说白了，我们将来的数据请求，数据处理等方法全部写在这里


*/
import {SYNC_UPDATE} from './const'
export default {
	initCar({commit}){
		//当数据之后我们执行一个初始化，直接出现一个cars
		console.log('success data inited');
		let cars = getCars(); //要初始化就要去获取数据
		commit(SYNC_UPDATE,cars)
	},
	
	goInto({commit},pro){
		localStorage.content = JSON.stringify(pro);
	},
	//1.添加购物车	2.数量的加减
	addCar({commit},msg){
		//这里我们拿到数据之后是不是就是后端存储数据，我们暂时没有后端，我们可以使用localStorage/Cookie
		//以下操作都是属于后台的
		setTimeout(() => {
			let cars = getCars();//获取本地存储的数据
			/*some(callback) 这个给我们返回的是一个true /false*/ 
			let isHas = cars.some(item=> {
				if(item.id === msg.id){
					//成立 说明cars里面已经存在这条数据了
					item.num ++;
					return true;
				}
			})
			// 如果没有这条数据
			if(!isHas){
				msg.num = 1;
				cars.push(msg);
			}
			localStorage.cars = JSON.stringify(cars);
			commit(SYNC_UPDATE,cars)
		},50)
	},
	reduceCar({commit},msg){
		setTimeout(() => {
			let cars = getCars();
			cars = cars.filter((item) => {
				if(item.id === msg.id){
					item.num --;
					if(item.num <= 0){
						return false;
					}
					return true;
				}
				return true;
			})
			localStorage.cars = JSON.stringify(cars);
			commit(SYNC_UPDATE,cars)
		},50)
	},
	removeCar({commit},msg){
		setTimeout(() => {
			let cars = getCars();
			cars = cars.filter((item) => {
				if(item.id === msg.id){
					item.num = 0;
					
				}
			})
			localStorage.cars = JSON.stringify(cars);
			commit(SYNC_UPDATE,cars)
		},50)
	}
	
}

function getCars(){
	return JSON.parse(localStorage.cars?localStorage.cars : '[]')
}
