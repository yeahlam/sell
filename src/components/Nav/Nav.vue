<template>
  <div class="nav">
      <router-link to='/goods' class="goods nav-item">点菜</router-link>
      <router-link to='/ratings' class="ratings nav-item">评价</router-link>
      <router-link to='/seller' class="seller nav-item">商家</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
}
.nav-item {
  flex: 1;
  font-size: 13px;
}
</style>