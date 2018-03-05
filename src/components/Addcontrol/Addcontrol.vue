<template>
	<div class="addcontrol">
		<transition name="fadein">
		<div class="yuan reduce" v-show="foods.count>0" @click.stop.prev="reduce">
			<span class="icon-remove_circle_outline"></span>
		</div>
		</transition>

		<div class="num" v-show="foods.count>0">{{foods.count}}</div>
		
			<div class="yuan add" @click.stop.prev="add">
				<span class="icon-add_circle"></span>
			</div>
		
	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		props: {
			foods: {
				type: Object,
				default: {}
			}
		},

		methods: {
			add() {

				var that = this
				//Vue.set( that.foods, 'count', 1 )
				if(!this.foods.count) {

					Vue.set(that.foods, 'count', 1)
				} else {

					this.foods.count++

				}

			},
			reduce() {
				this.foods.count--
			}
		}
	}
</script>

<style lang="less">
	@import url("../../common/css/style.css");
	.addcontrol {
		height: 51px;
		font-size: 51px;
		div {
			display: inline-block;
		}
		.yuan {
			span {}
		}
		.add {
			color: #ffd161;
		}
		.reduce {
			color: #ffd161;
		}
		.num {
			font-size: 41px;
			line-height: 51px;
			vertical-align: top;
		}
	}
.fadein-enter-active,.fadein-leave-active{transition:0.5s;}
.fadein-enter-to,.fadein-leave{opacity:1; transform:translateX(0);}
.fadein-leave-to,.fadein-enter{opacity:0; transform:translateX(100%) rotate(-180deg);}


</style>