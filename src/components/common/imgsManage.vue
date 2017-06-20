<template>
	<div class="imgs">
		<el-row v-for="imgmessage in imgmessages">
			<el-col :span="1">
				<div class="grid-content bg-purple">
					<el-checkbox></el-checkbox>
				</div>
			</el-col>
			<el-col :span="10">
				<div class="grid-content bg-purple">
					<img src="../../assets/imges/tupian.png" />
					<span class="imgs--imgName">{{imgmessage.imgName}}</span>
					<span class="imgs--imgSize">{{imgmessage.imgSize}}</span>
					<el-input placeholder="图片路径"></el-input>
				</div>
			</el-col>
			<el-col :span="4">
				<div class="grid-content bg-purple">
					<el-upload class="upload-demo">
						<el-button class="uploading" size="large" type="primary">点击上传</el-button>
					</el-upload>
				</div>
			</el-col>
			<el-col :span="9">
				<div class="grid-content bg-purple">
					<span class="imgs--imgTime">{{imgmessage.imgtime}}</span>
					<el-button class="imgs--delete" type="danger" icon="delete"></el-button>
					<el-input class="imgs--location" placeholder="链接地址"></el-input>
				</div>
			</el-col>
		</el-row>
		<el-button class="save" type="success">保存</el-button>
	</div>
</template>

<script>
	export default {
		name: 'imgsManage',
		data() {
			return {
				imgmessages: [{
					imgName: '图片名称',
					imgSize: '图片大小',
					imgtime: '上传时间'
				}, {
					imgName: '图片名称',
					imgSize: '图片大小',
					imgtime: '上传时间'
				}, {
					imgName: '图片名称',
					imgSize: '图片大小',
					imgtime: '上传时间'
				}]
			}
		}
	}
</script>

<style>
	.imgs {
		margin: 0 30px;
		padding: 0;
	}
	
	.imgs .el-input__icon {
		cursor: pointer;
	}
	
	.imgs .el-row {
		padding: 10px 0;
		border-bottom: 1px solid #FB9F86;
	}
	
	.imgs .grid-content {
		position: relative;
		padding: 0;
	}
	
	.imgs .grid-content span {
		font-size: 18px;
		position: absolute;
		right: 42%;
	}
	
	.imgs .grid-content .imgs--imgName {
		top: 5%;
	}
	
	.imgs .grid-content .imgs--imgSize {
		top: 30%;
	}
	
	.imgs .grid-content .imgs--imgTime {
		position: static;
		margin-top: 10px;
	}
	
	.imgs .grid-content .imgs--location {
		position: absolute;
		left: 0;
		top: 128px;
		vertical-align: bottom;
	}
	
	.imgs .grid-content img {
		vertical-align: bottom;
	}
	
	.imgs .el-input {
		width: 50%;
		vertical-align: bottom;
	}
	
	.imgs .upload-demo {
		width: 100%;
		position: relative;
		top: 126px;
	}
	.imgs .upload-demo .uploading span{
		position: static;
	}
	.imgs .el-upload {
		width: 100%;
	}
	
	.imgs .el-button--small {
		width: 100px;
		height: 40px;
		font-size: 18px;
	}
	
	.imgs .el-button--primary {
		width: 60%;
		background-color: #FB9F86;
		border: 1px solid #FB9F86;
	}
	
	.imgs .el-button--primary:hover {
		background-color: #F05053;
	}
	
	.imgs .bg-purple {
		text-align: left;
	}
	
	.imgs .imgs--delete {
		position: absolute;
		right: 28%;
		top: 128px;
	}
	
	.imgs .save {
		margin-top: 10px;
		color: #FFFFFF;
		background-color: #FB9F86;
		border: 1px solid #FB9F86;
	}
	
	.imgs .save:hover {
		background-color: #F05053;
	}
</style>