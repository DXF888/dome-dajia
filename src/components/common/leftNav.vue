<template>
	<div class="leftNav">
		<template v-for="item in items">
			<el-menu unique-opened router>
				<el-submenu unique-opened :index="item.index">
					<template slot="title">{{item.title}}</template>
					<el-submenu unique-opened v-for="menu in item.subMenu" :index="menu.index">
						<template slot="title">{{menu.title}}</template>
						<el-menu-item v-for="subNav in menu.subNavs" :index="subNav.index">{{subNav.title}}</el-menu-item>
					</el-submenu>
				</el-submenu>
			</el-menu>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'leftNav',
		data() {
			return {
				items: [{
						icon: '',
						index: '1',
						title: '首页内容',
						subMenu: [{
								index: '1-1',
								title: '图片管理',
								subNavs: [{
										index: '1-1-1',
										title: '轮播图片管理'
									},
									{
										index: '1-1-2',
										title: '推荐图片管理'
									},
									{
										index: '1-1-3',
										title: '广告图片管理'
									},
								]
							},
							{
								index: '1-2',
								title: '推荐管理',
								subNavs: [{
										index: '1-2-1',
										title: '精品推荐'
									},
									{
										index: '1-2-2',
										title: '婚宴酒店推荐'
									},
									{
										index: '1-2-3',
										title: '婚纱摄影推荐'
									},
									{
										index: '1-2-4',
										title: '四大金刚推荐'
									},
									{
										index: '1-2-5',
										title: '婚庆公司推荐'
									},
									{
										index: '1-2-6',
										title: '婚庆甜点推荐'
									},
									{
										index: '1-2-7',
										title: '婚车预定推荐'
									},
								]
							},
							{
								index: '1-3',
								title: '其它管理',
								subNavs: [{
										index: '1-3-1',
										title: '限时优惠'
									},
									{
										index: '1-3-2',
										title: '优惠券'
									},
									{
										index: '1-3-3',
										title: '婚礼贴士'
									},
								]
							}
						]
					},
					{
						icon: '',
						index: '2',
						title: '关于我们',
						subMenu: [{
								index: '2-1',
								title: '大嫁网简介'
							},
							{
								index: '2-2',
								title: '大事件'
							},
							{
								index: '2-3',
								title: '加入我们'
							}
						]
					},
					{
						icon: '',
						index: '3',
						title: '幸福咨询',
						subMenu: [{
								index: '3-1',
								title: '婚宴酒店'
							},
							{
								index: '3-2',
								title: '婚纱摄影'
							},
							{
								index: '3-3',
								title: '婚纱礼服'
							},
							{
								index: '3-4',
								title: '司仪'
							},
							{
								index: '3-5',
								title: '摄像'
							},
							{
								index: '3-6',
								title: '化妆'
							},
							{
								index: '3-7',
								title: '婚庆公司'
							},
							{
								index: '3-8',
								title: '婚庆甜点'
							},
							{
								index: '3-9',
								title: '婚车预定'
							}
						]
					},
					{
						icon: '',
						index: '4',
						title: '时尚新闻',
						subMenu: [{
							index: '4-1',
							title: '婚宴酒店'
						}]
					},
					{
						icon: '',
						index: '5',
						title: '客户说',
						subMenu: [{
							index: '5-1',
							title: '婚礼圈'
						}]
					},
					{
						icon: '',
						index: '6',
						title: '帮助中心',
						subMenu: [{
							index: '6-1',
							title: '婚礼圈'
						}]
					},
					{
						icon: '',
						index: '7',
						title: '婚礼学堂',
						subMenu: [{
								index: '7-1',
								title: '婚礼攻略'
							},
							{
								index: '7-2',
								title: '签到领奖'
							}
						]
					},
					{
						icon: '',
						index: '8',
						title: '用户管理',
						subMenu: [{
								index: '8-1',
								title: '买家管理'
							},
							{
								index: '8-2',
								title: '卖家管理'
							}
						]
					},
					{
						icon: '',
						index: '9',
						title: '商铺信息',
						subMenu: [{
								index: '9-1',
								title: '商铺管理',
								subNavs: [{
										index: '9-1-1',
										title: '酒店'
									},
									{
										index: '9-1-2',
										title: '婚纱摄影'
									},
									{
										index: '9-1-3',
										title: '婚纱礼服'
									},
									{
										index: '9-1-4',
										title: '司仪'
									},
									{
										index: '9-1-5',
										title: '摄影'
									},
									{
										index: '9-1-6',
										title: '化妆'
									},
									{
										index: '9-1-7',
										title: '演员'
									},
									{
										index: '9-1-8',
										title: '婚车'
									},
								]
							},
							{
								index: '9-2',
								title: '信息管理',
								subNavs: [{
										index: '9-2-1',
										title: '评价管理'
									},
									{
										index: '9-2-2',
										title: '预约管理'
									},
									{
										index: '9-2-3',
										title: '海外婚礼订单'
									},
									{
										index: '9-2-4',
										title: '蜜月订单'
									},
									{
										index: '9-2-5',
										title: '佣金申请'
									}
								]
							}
						]
					},
					{
						icon: '',
						index: '10',
						title: '返金管理',
						subMenu: [{
							index: '10-1',
							title: '返金管理'
						}]
					},
					{
						icon: '',
						index: '11',
						title: '购物车',
						subMenu: [{
							index: '11-1',
							title: '购物车管理'
						}]
					},
					{
						icon: '',
						index: '12',
						title: '收藏夹',
						subMenu: [{
							index: '12-1',
							title: '收藏夹管理'
						}]
					},
					{
						icon: '',
						index: '13',
						title: '订单管理',
						subMenu: [{
							index: '13-1',
							title: '订单管理'
						}]
					},
					{
						icon: '',
						index: '14',
						title: '账号管理',
						subMenu: [{
							index: '14-1',
							title: '账号管理'
						}]
					}
				]
			}
		},
		computed: {

		}
	}
</script>

<style>
	.leftNav {
		float: left;
		width: 15%;
	}
	.leftNav .el-menu{
		background-color: #FB9F86;
		border-right: 1px solid #F05053;
	}
	.leftNav .el-menu .el-submenu{
		background-color:#FB9F86;
	}
	.leftNav .el-menu .el-submenu__title{
		color: #FFFFFF;
		font-size: 16px;
		border-bottom: 1px solid #F05053;
		background-color: #FB9F86;
	}
	.leftNav .el-menu .el-submenu__title:hover{
		background-color: #F05053;
	}
	.leftNav .el-menu .el-submenu__title .el-menu{
		
	}
	.leftNav .el-menu .el-menu-item{
		color: #F77E83;
		background: #FFFFFF;
		border-bottom: 1px solid #EEEEEE;
	}
	.leftNav .el-menu .el-menu-item:hover{
		background-color: #F77E83;
		color: #FFFFFF;
	}
</style>