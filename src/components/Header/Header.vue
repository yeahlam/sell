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
					<img :src="poiinfo.pic_url"/>
				</div>
				<div class="showname">{{poiinfo.name}}</div>
				<div class="fav" @click="favtap">
					<div class="favlogo"><span class="icon-favorite"></span></div>
					<div class="favfont">收藏</div>
				</div>
			</div>
			<div class="bottom-wrapper">
				<div class="logo">
					<img v-if="poiinfo.discounts2" :src="poiinfo.discounts2[0].icon_url"/>
				</div>
				<div v-if="poiinfo.discounts2" class="detail">{{poiinfo.discounts2[0].info}}</div>
				<div v-if="poiinfo.discounts2" class="activenum">{{poiinfo.discounts2.length}}个活动<span class="icon-keyboard_arrow_right"></span></div>
			</div>
			<div class="bg-wrapper">
				<img :src="poiinfo.head_pic_url"/>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: {
			poiinfo: {
				type: Object,
				defaule: {}
			}
		},
		methods:{
			favtap:function(){
				alert(12)
			}
		}
	}
</script>

<style lang="less">
	/*加载图标字体*/
	
	@import url("../../common/css/style.css");
	@import url("./header.less");
</style>