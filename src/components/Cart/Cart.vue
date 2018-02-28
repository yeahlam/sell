<template>
	<div class="cart">
		<div class="bottomcar">
			<div class="left-wrap">
				<div class="carlogo" :class="{have:totalseleceNum>0}">
					<span class="icon-shopping_cart">
						<i class="icon-num" v-if="totalseleceNum">{{totalseleceNum}}</i>
					</span>
				</div>
				<div class="pricedetail" :class="{have:totalseleceNum>0}"> 
					<p v-if="totalseleceNum" class="totalprice">¥{{totalprice}}</p>
					<p class="psprice">另需配送费¥9</p>
				</div>
				
			</div>
			<div class="right-wrap" :class="{have:totalseleceNum>0}" >{{rightbtn}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			selectgoods:{
				type:Array,
				default:[]
			},
			poiinfo:{
				type:Object,
				default:{}
			}
		},
		data(){
			return {
				totalseleceNum:0
	
			}
		},
		computed:{
			totalprice(){
				var price=0
				var selectfood=0
				this.selectgoods.forEach((item)=>{
					price+=item.count*item.min_price
					selectfood+=item.count
				})
				this.totalseleceNum=selectfood
				return price
			},
			rightbtn(){
				if(this.totalprice){
					return '去结算'
				}else{
					return this.poiinfo.min_price_tip
				}
			}
			
		}
	}
</script>

<style lang="less">
	@import url("../../common/css/style.css");
	@import url("cart.less");
	
</style>