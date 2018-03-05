<template>
	<transition  name="foodfadein">
	<div class="food" v-show="ifshowfoodview" >
		<div class="fooddetail">
			<div class="imgbox">
				
				<img :src="Food.picture" />
				<div class="closebtn" @click="closeview">
					<span class="icon-close"></span>
				</div>
				<div class="more">
					<span>
						<i></i>
						<i></i>
						<i></i>
					</span>
				</div>
			</div>
			<div class="foodinfobox">
				<div class="foodname">{{Food.name}}</div>
				<div class="foodsell">{{Food.month_saled_content}}</div>
				<img class="logo" v-if="Food.product_label_picture" :src="Food.product_label_picture" />
				<p class="foodprice">{{Food.min_price}}/<span>{{Food.unit}}</span>
				</p>
			</div>

		</div>
		<div class="ratingbox"></div>
	</div>
	</transition>
</template>

<script>
	import Addcontrol from '@components/Addcontrol/Addcontrol'
	export default {
		props: {
			Food: {
				type: Object
			}
		},
		components: {
			Addcontrol
		},
		data() {
			return {
				ifshowfoodview: false
			}
		},
		methods: {
			closeview() {
				this.ifshowfoodview = false
			},
			openview() {
				this.ifshowfoodview = true
			}
		}
	}
</script>

<style lang="less">
	@import url("../../common/css/style.css");
	@import url("Food.less");
</style>