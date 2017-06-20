<template>
	<div id="app">
		<!--顶部内容-->
		<top></top>

		<!--左边导航-->
		<leftNav></leftNav>

		<!--操作区域-->
		<div class="main">
			<!--内容头部导航条-->
			<div class="header-nav--bar"></div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import top from '@/components/common/top'
	import leftNav from '@/components/common/leftNav'
	export default {
		name: 'app',
		components: {
			top,
			leftNav
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
	
	.main {
		float: left;
		width: 85%;
		overflow: hidden;
	}
	
	.header-nav--bar {
		height: 50px;
		background-color: #EEEEEE;
	}
</style>