<template>
	<div class="carousel-imgs">
		<!--搜索栏-->
		<search carousetitle="轮播图片管理"></search>
		
		<!--图片管理详情-->
		<imgsManage></imgsManage>
	</div>
</template>

<script>
	import search from '../common/search'
	import imgsManage from '../common/imgsManage'
	export default {
		name: 'carouselImgs',
		data() {
			return {
				
			}
		},
		components: {
			search,
			imgsManage
		}

	}
</script>

<style scoped>
	
</style>