<template>
	<div class="goodswrap">
		<div class="wrapper-menus" ref="menuscroll">
			<ul>
				<li class="menusitem" :class="{act:returnindex==0}" @click="gotowhere(0)">
					<img :src="container.tag_icon" /> {{container.tag_name}}
				</li>
				<li class="menusitem" v-for="(item,index) in foodtag" :class="{act:returnindex==index+1}" @click="gotowhere(index+1)">

					<div class="text">
						<img :src="item.icon" /> {{item.name}}
					</div>
				</li>
			</ul>
		</div>
		<div class="wrapper-goods" ref="goodsscroll">
			<ul>
				<li class="sort-item containeritem">
					<img height="180" v-for="item in container.operation_source_list" :src="item.pic_url" />
				</li>
				<li class="sort-item" v-for="item in foodtag">
					<h3>{{item.name}}</h3>
					<ul>
						<li class="goods-item" v-for="(item,index) in item.spus" @click="tapitem(item)">
							<div class="logo">
								<img height="180" :src="item.picture" />
							</div>
							<div class="goods-detail">
								<h4>{{item.name}}</h4>
								<img v-if="item.product_label_picture" class="tj" :src="item.product_label_picture" />
								<p class="detailp1">{{item.month_saled_content}} {{item.praise_content}}</p>
								<p :a=returnindex class="price"><span>¥{{item.min_price}}</span>/{{item.unit}}</p>
								<div class="addcontrol">
									<Addcontrol :foods="item"></Addcontrol>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<Cart :selectgoods="selectgoods" :poiinfo="poiinfo"></Cart>
		<Food :Food="thetapitem" ref="foodview">123</Food>
	</div>
</template>

<script>
	import bscroll from 'better-scroll'
	import Cart from '@components/Cart/Cart'
	import Addcontrol from '@components/Addcontrol/Addcontrol'
	import Food from '@components/Food/Food'
	import Vue from 'vue'
	export default {
		props: {},
		components: {
			Cart,
			Addcontrol,
			bscroll,
			Food
		},
		data() {
			return {
				foodtag: [],
				container: [],
				menuscoll: {},
				goodsscroll: {},
				scrollY: 0,
				listheight: [],
				poiinfo: {},
				thetapitem: {}
			}
		},
		created() {
			var that = this;
			this.$axios.get('/api/goods')
				.then(function(data) {
					if(data.data.code == 0) {

						that.foodtag = data.data.data.food_spu_tags
						that.container = data.data.data.container_operation_source
						that.poiinfo = data.data.data.poi_info
						that.$nextTick(() => {
							that.initbscroll()

						})

					}
				}).catch(function() {

				})
		},
		methods: {
			tapitem(arg) {
				this.thetapitem = arg;
				this.$refs.foodview.openview()
			},
			initbscroll() {
				this.menuscoll = new bscroll(this.$refs.menuscroll, {
					click: true
				})
				this.goodsscroll = new bscroll(this.$refs.goodsscroll, {
					probeType: 3,
					click: true
				})
				this.$store.state.recordScrollY1 = this.goodsscroll

				this.goodsscroll.scrollTo(0, -this.$store.state.scrollY)
				this.scrollY = this.$store.state.scrollY
				this.calqujian()
				this.goodsscroll.on('scroll', (pos) => {
					this.$store.state.scrollY = this.scrollY = Math.abs(pos.y)
				})

			},
			calqujian() {
				var ofood = this.$refs.goodsscroll.getElementsByClassName('sort-item');
				var sumheight = 0
				var arr = [0]
				for(let i = 0; i < ofood.length; i++) {
					sumheight += ofood[i].clientHeight
					arr.push(sumheight)
				}
				this.listheight = arr

			},
			gotowhere(arg) {

				this.goodsscroll.scrollToElement(this.$refs.goodsscroll.getElementsByClassName('sort-item')[arg], 200)
			}

		},
		computed: {
			returnindex() {
				for(var i = 0; i < this.listheight.length; i++) {

					var h1 = this.listheight[i]
					var h2 = this.listheight[i + 1]

					if(this.scrollY >= h1 && this.scrollY < h2) {
						return i
					}
				}

			},
			selectgoods() {
				var arr = []
				this.foodtag.forEach((item) => {
					item.spus.forEach((item) => {
						if(item.count > 0) { //
							arr.push(item)
						}

					})
				})

				return arr
			}
		}
	}
</script>

<style lang="less">
	@import url("goods.less");
</style>