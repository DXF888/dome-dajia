<template>
	<div class="top">
		<div class="logo">
			<a href="#">
				<img src="../../assets/imges/logo.png"/>
			</a>
		</div>
		<div class="welcome">
			<span>您好，用户名！</span>
			<span>大嫁网后台管理系统欢迎您！</span>
			<a href="#" class="quit">退出</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'top',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
.top{
	margin-bottom: 10px;
	position: relative;
	padding-top: 15px;
	padding-bottom: 15px;
	width: 100%;
	height: 80px;
	background: url(../../assets/imges/bg.png) no-repeat;
	background-size: cover;
	border-bottom: 1px solid #f77e83;
}
.top .logo{
	float: left;
	height: 100%;
}	
.top .logo img{
	width: 75%;
	height: 100%;
}
.top .welcome{
	float: right;
	padding:0 23px;
	border-radius: 10px;
	height: 44px;
	line-height: 44px;
	background: rgba(255,255,255,.5);
	color: #f05053;
	font-size: 18px;
	position: absolute;
	bottom: 0;
	right: 10px;
}
.top .welcome .quit{
	text-decoration: none;
	display: inline-block;
	font-size: 18px;
	border: none;
	color: #f05053;
	cursor:pointer;
	outline: none;
	background-image: url(../../assets/imges/tuichu.png);
	background-position: center left; 
	background-repeat: no-repeat;
	padding-left: 23px;
	background-color: transparent;
}
</style>