<template>
	<div class="search">
		<h3>{{carousetitle}}</h3>
		<div class="search-content">
			<el-input size="small" placeholder="点击搜索图片" icon="search">
			</el-input>
			<el-checkbox>全选</el-checkbox>
			<el-button type="danger">批量删除</el-button>
			<el-button size="small" type="success">增加</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'search',
		data() {
			return {
			}
		},
		props:['carousetitle']
	}
</script>

<style scoped>
	.search h3 {
		text-align: left;
		margin-top: 33px;
		font-size: 24px;
		color: #fb9f86;
		padding-left: 36px;
	}
	.search-content {
		text-align: right;
		margin-right: 5%;
	}
	.search .search-content .el-input{
		width: 26%;
	}
	.search .el-input .el-input__icon{
		border-left: #bfcbd9;
	}
</style>