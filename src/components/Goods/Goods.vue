<template>
	<div class="goodswrap">
		<div class="wrapper-menus" ref="menuscroll">
			<ul>
				<li class="menusitem" :class="{act:returnindex==0}" @click="gotowhere(0)">
					<img :src="container.tag_icon"  /> {{container.tag_name}}
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
						<li class="goods-item" v-for="(item,index) in item.spus">
							<div class="logo">
								<img height="180" :src="item.picture" />
							</div>
							<div class="goods-detail">
								<h4>{{item.name}}</h4>
								<img v-if="item.product_label_picture" class="tj" :src="item.product_label_picture" />
								<p class="detailp1">{{item.month_saled_content}} {{item.praise_content}}</p>
								<p :a=returnindex class="price"><span>¥{{item.praise_num}}</span>/{{item.unit}}</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import bscroll from 'better-scroll'
	export default {
		props: {},
		data() {
			return {
				foodtag: [],
				container: [],
				menuscoll: {},
				goodsscroll: {},
				scrollY: 0,
				listheight: []
			}
		},
		created() {
			var that = this;
			this.$axios.get('/api/goods')
				.then(function(data) {
					if(data.data.code == 0) {

						that.foodtag = data.data.data.food_spu_tags
						that.container = data.data.data.container_operation_source
						console.log(that.container)
						that.$nextTick(() => {
							that.initbscroll()

						})

					}
				}).catch(function() {

				})
		},
		methods: {
			initbscroll() {
				this.menuscoll = new bscroll(this.$refs.menuscroll, {
					click: true
				})
				this.goodsscroll = new bscroll(this.$refs.goodsscroll, {
					probeType: 3
				})
				this.calqujian()
				this.goodsscroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(pos.y)
				})
			},
			calqujian() {
				var ofood = this.$refs.goodsscroll.getElementsByClassName('sort-item');
				console.log(ofood)
				var sumheight = 0
				var arr = [0]
				for(let i = 0; i < ofood.length; i++) {
					sumheight += ofood[i].clientHeight
					arr.push(sumheight)
				}
				this.listheight = arr

			},
			gotowhere(arg) {
				console.log(arg)

				this.goodsscroll.scrollToElement(this.$refs.goodsscroll.getElementsByClassName('sort-item')[arg], 200)
			}

		},
		computed: {
			returnindex() {
				for(var i = 0; i < this.listheight.length; i++) {

					var h1 = this.listheight[i]
					var h2 = this.listheight[i + 1]
					console.log(h1, h2, this.scrollY)
					if(this.scrollY >= h1 && this.scrollY < h2) {
						return i
					}
				}

			}
		}
	}
</script>

<style lang="less">
	@import url("goods.less");
</style>