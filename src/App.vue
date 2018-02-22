<template>
	<div id="app">
		<myHeader :poiinfo="poiinfo" />
		<myNav/>
		<router-view></router-view>
	</div>
</template>

<script>
	import myHeader from './components/Header/Header'
	import myNav from './components/Nav/Nav'

	export default {
		name: 'App',
		components: {
			myHeader,
			myNav
		},
		data() {
			return {
				poiinfo: {}
			}
		},
		created() {
			var that = this;
			this.$axios.get('/api/goods')
				.then(function(data) {
					if(data.data.code == 0) {
						that.poiinfo = data.data.data.poi_info
						console.log(that.poiinfo)
					}
				}).catch(function() {

				})
		}
	}
</script>

<style>

</style>