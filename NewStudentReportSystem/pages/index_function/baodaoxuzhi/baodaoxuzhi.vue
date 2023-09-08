<template>
	<view class="wrap">
		<u-navbar back-icon-color="#ffffff" title="报到须知" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
		<image class="pic1" style=" width: 400px; " src="/static/chongqingUniversity.jpeg" mode="scaleToFill"></image>
		<view class="content">
			<view class="title">
				2023重庆大学大一新生入学须知
			</view>
			<view class="para" style="word-wrap:break-word;">
				重庆大学已建成数据中心、通信交换中心、万兆双栈网络、网上服务大厅、统一移动校园平台、统一认证平台、统一数据库等软硬件基础平台，实现了学校人、财、物等基础性数据的交互。
			</view>
			<view class="para" style="word-wrap:break-word;">
				重庆大学移动校园APP“今日校园”是一款集校内外多种应用及精选资讯集合的平台，安卓系统手机请在手机应用市场下载，IOS系统手机在App Store下载。登陆今日校园的账号与统一身份认证号一致。
				首次登录后需要绑定手机号码，绑定后可以通过手机号码登录；也可以完善个人资料绑定QQ、微信，然后就可以通过QQ、微信登录。
			</view>
			<view class="para" style="word-wrap:break-word;">
				重庆大学电子学生证在学校管理和服务活动中与纸质学生证等效，并具有食堂消费、数字签名等额外功能。
				
				电子学生证使用前需申领，在“今日校园”APP中，找到“电子证件”服务，按提示操作申领。
				
				申领完成即可使用，如食堂消费，打开“电子证件”服务，出示身份二维码，就近对准读卡器的扫码口进行扣费。
			</view>
			<view class="para" style="word-wrap:break-word;">
				校园一卡通可用于食堂就餐、宿舍热水消费、图书借阅、缴纳网费电费、乘坐校车等。
				
				新生在入学报到时，直接在各学院报到处领取一卡通卡片。一卡通消费二维码与电子证件“身份二维码”融合，可直接使用“电子证件”里的“身份二维码”在消费机上扫码消费。
				
				一卡通以学生学号为标识，初始密码为你身份证号后6位（有X的向前顺移一位），一卡通可以通过电子服务平台、微信公众号“重大财小通”自助充值，也可在服务点现金充值。
				
				在网上服务大厅搜索栏搜索“一卡通电子服务平台”可进入一卡通电子服务平台。
				
				一卡通服务点：A区信息化办公室一楼服务大厅、虎溪松园六栋。
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				naviBackground: {
					backgroundImage: 'linear-gradient(45deg, rgb(58, 174, 255), rgb(50,233,255))'
				},
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "./baodaoxuzhi.scss";
</style>