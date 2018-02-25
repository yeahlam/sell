<template>
	<div class="Star">
		<span v-for="item in listarr" :class="item" class="star-item"></span>
	</div>
</template>

<script>
	export default {
		props: {
			score: {
				type: Number
			}
		},

		computed: {
			scorea() {
				return Math.floor(this.score * 2) / 2
			},
			listarr() {
				const len = 5;
				var starlist = []
				for(var i = 0; i < Math.floor(this.scorea); i++) {
					starlist.push('on')
				}
				if(this.scorea % 1) {
					starlist.push('half')
				}
				while(starlist.length < len) {
					starlist.push('off')
				}

				return starlist
			}
		}
	}
</script>

<style lang="less">
	.star-item {
		width: 20px;
		height: 20px;
		display: inline-block;
		margin-right: 6px;
	}
	
	.star-item.on {
		background: url(star24_on@2x.png) 0 0/cover;
	}
	
	.star-item.half {
		background: url(star24_half@2x.png) 0 0/cover;
	}
	
	.star-item.off {
		background: url(star24_off@2x.png) 0 0/cover;
	}
</style>