<template>
  <div id="app">	
		<!-- <Head></Head>
		<Home></Home> -->
		<router-view></router-view>
  </div>
</template>
<script>
	import {mapActions} from 'vuex'
export default {
  name: 'App',
	created(){
		this.initCar();
	},
	methods: {
		...mapActions(['initCar'])
	}
}
</script>

<style lang="scss" scoped>
	#app{
		
	}

</style>
