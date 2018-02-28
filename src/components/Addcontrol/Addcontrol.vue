<template>
	<div class="addcontrol">
		<div class="yuan add" v-show="foods.count>0" @click="reduce">
			<span class="icon-remove_circle_outline"></span>
		</div>

		<div class="num" v-show="foods.count>0">{{foods.count}}</div>
		<div class="yuan reduce" @click="add">
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
</style>