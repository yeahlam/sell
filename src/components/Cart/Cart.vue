<template>
	<div class="cart">
		<div class="bottomcar">
			<div class="left-wrap">
				<div class="carlogo" @click="clickshowpop" :class="{have:totalseleceNum>0}">
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

			<div class="cartcover" v-show="showpop">
				<div class="cover" @click="clickshowpop"></div>
				<div class="popupitembox">
					<div v-if="poiinfo.discounts2" class="newurser">{{poiinfo.discounts2[0].info}}</div>
					<div class="pocket">
						<div class="pocket-left">1号口袋</div>
						<div class="deleteall" @click="cleanselect"><span class=" icon-shopping_cart"></span>清空购物车</div>
						
					</div>
					<div class="mainitem" ref="cartscroll">
							<ul>
								<li v-for="item in selectgoods">
									<div class="left-item">
										<p class="leftname">{{item.name}}</p>
										<p class="leftdesc">{{item.unit}}</p>
									</div>
									<div class="right-item">
										<div class="price">￥{{item.min_price}}</div>
										<div class="ctrbox">
											<Addcontrol class="ctrinner"  :foods="item"></Addcontrol>
										</div>
									</div>
								</li>
							</ul>
					</div>
				</div>
			</div>

		</div>
		
		
	</div>
</template>

<script>
import Addcontrol from "@components/Addcontrol/Addcontrol";
import bscroll from "better-scroll";
export default {
  props: {
    selectgoods: {
      type: Array,
      default: []
    },
    poiinfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      totalseleceNum: 0,
      cshowpop: false,
      cartscroll: null
    };
  },
  components: {
    Addcontrol,
    bscroll
  },
  methods: {
    clickshowpop() {
      this.cshowpop = !this.cshowpop;
    },
    cleanselect() {
      this.selectgoods.forEach(item => {
        item.count = 0;
      });
    }
  },
  computed: {
    showpop() {
      if (this.cshowpop && this.totalseleceNum > 0) {
        this.$nextTick(() => {
          if (!this.cartscroll) {
            this.cartscroll = new bscroll(this.$refs.cartscroll, {
              click: true
            });
          } else {
			this.cartscroll.refresh();
		
          }
        });

        return true;
      } else {
        this.cshowpop = false;
        return false;
      }
    },
    totalprice() {
      var price = 0;
      var selectfood = 0;
      this.selectgoods.forEach(item => {
        price += item.count * item.min_price;
        selectfood += item.count;
      });

      this.totalseleceNum = selectfood;

      return price;
    },
    rightbtn() {
      if (this.totalprice) {
        return "去结算";
      } else {
        return this.poiinfo.min_price_tip;
      }
    }
  }
};
</script>

<style lang="less">
@import url("../../common/css/style.css");
@import url("cart.less");
</style>