<template>
	<div class="header">
		<div class="wraper">
			<div class="top-wrapper">
				<div class="leftbtn-wrapper">
					<span class="icon-arrow_lift"></span>
				</div>
				<form class="search-wrapper">
					<div class="searchlogo"></div>
					<input type="text" />
				</form>
				<div class="rightbtn-wrapper">
					<span class="pdbtn">拼单</span>
					<span class="morebtn">
						<i></i>
						<i></i>
						<i></i>
					</span>
				</div>
			</div>
			<div class="mid-wrapper">
				<div class="showicon">
					<img :src="poiinfo.pic_url" />
				</div>
				<div class="showname">{{poiinfo.name}}</div>
				<div class="fav" @click="favtap">
					<div class="favlogo"><span :class="{act:ifav}" class="icon-favorite"></span></div>
					<div class="favfont">收藏</div>
				</div>
			</div>
			<div class="bottom-wrapper">
				<div class="logo">
					<img v-if="poiinfo.discounts2" :src="poiinfo.discounts2[0].icon_url" />
				</div>
				<div v-if="poiinfo.discounts2" class="detail">{{poiinfo.discounts2[0].info}}</div>
				<div v-if="poiinfo.discounts2" class="activenum">{{poiinfo.discounts2.length}} <b @click="details"> 个活动<span class="icon-keyboard_arrow_right"></span></b></div>
			</div>
			<div class="bg-wrapper">
				<img :src="poiinfo.head_pic_url" />
			</div>
			<transition name="hfadein">
				<div class="detail-wrapper" v-if="detailshow">
					<div class="box">
						<div class="logo">
							<img :src="poiinfo.pic_url" />
						</div>
						<h3>{{poiinfo.name}}</h3>
						<Star :score="poiinfo.wm_poi_score"></Star><span class="scoretext">{{poiinfo.wm_poi_score}}</span>
						<p class="desc">{{poiinfo.min_price_tip}} <i>|</i> {{poiinfo.min_price_tip}} <i>|</i> {{poiinfo.delivery_time_tip}}</p>
						<p class="desc">配送时间 {{poiinfo.shipping_time}}</p>
						<div class="bottom">
							<p class="bdesc" v-for="item in poiinfo.discounts2"><img :src="item.icon_url" />{{item.info}}</p>
						</div>
					</div>
					<div @click="detailc" class="close"></div>
				</div>
			</transition>
		</div>

	</div>
</template>

<script>
	import Star from '@components/Star/Star';
	export default {
		props: {
			poiinfo: {
				type: Object,
				defaule: {}
			}
		},
		components: {
			Star
		},
		data() {
			return {
				detailshow: false,
				ifav:false
			}
		},
		methods: {
			favtap() {
				this.ifav=!this.ifav
			},
			detailc() {
				this.detailshow = false
			},
			details() {
				this.detailshow = true
			}

		}
	}
</script>

<style lang="less">
	/*加载图标字体*/
	
	@import url("../../common/css/style.css");
	@import url("./header.less");
</style>