import {SYNC_UPDATE} from './const'

export default {
	[SYNC_UPDATE](state,newusers){
		//是不是要更新数据
		state.users = newusers
	}
}