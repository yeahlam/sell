<template>
	<div class="nav">
		<router-link to='/goods' class="goods nav-item">点菜<i></i></router-link>
		<router-link to='/ratings' class="ratings nav-item">评价<i></i></router-link>
		<router-link to='/seller' class="seller nav-item">商家<i></i></router-link>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="less">
	.nav {
		height: 80px;
		line-height: 80px;
		text-align: center;
		display: flex;
		width: 100%;
		border-bottom:1px solid #e4e4e4;
	}
	
	.nav-item {
		flex: 1;
		font-size: 26px;
		color: #666666;
		text-decoration: none;
		position: relative;
		i {
			position: absolute;
			width: 40px;
			height: 3px;
			bottom: 0;
			left: 50%;
			margin-left: -20px;
			display: none;
		}
	}
	
	.nav-item.router-link-active {
		color: #ffbb22;
		i {
			background: #ffbb22;
			display: block;
		}
	}
</style>