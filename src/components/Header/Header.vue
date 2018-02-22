<template>
  <div class="header">
      <div class="">{{poiinfo.name}}</div>
      <span class="icon-arrow_lift"></span>
  </div>
</template>

<script>


export default {
  props:{
    poiinfo:{
      type:Object,
      defaule:{}
    }
  }
}
</script>

<style>
	/*加载图标字体*/
@import url("../../common/css/style.css");

</style>