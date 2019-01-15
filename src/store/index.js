//这里开始使用vuex
//vuex的目的是为了统一管理我们项目中涉及到的数据和状态

import Vue from 'vue'
import Vuex from 'vuex'
import buycar from './buycar'
import loginReg from './loginReg'


Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		buycar,loginReg
	}
})

export default store