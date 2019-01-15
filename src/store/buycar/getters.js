export default {
	totalInfo(state){
		let total = {num: 0,price: 0};
		state.cars.filter( item => {
			total.num += item.num
			total.price += item.num * item.price
		})
		return total
	}
}