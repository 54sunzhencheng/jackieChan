import {SYNC_UPDATE} from './const'

export default {
	[SYNC_UPDATE](state,newcars){
		//是不是要更新数据
		state.cars = newcars
	}
}