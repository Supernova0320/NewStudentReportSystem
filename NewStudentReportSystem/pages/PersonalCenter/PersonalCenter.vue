<template>
	<view>
		<!--登录后-->
		<view v-if="isLogin">
			<view class="header">
				<view class="bg">
					<view class="box">
						<view class="box-hd">
							<view class="avator" @click="selectAvatar()">
								<u-image :src="user.image" height="220rpx"></u-image>
							</view>
							<view class="user_name">{{user.name}}</view>
							<u-divider half-width="300"></u-divider>
							<view class="hallo">
								<view>
									你好，{{user.name}}! 今天是美好的一天，希望你天天开心！</view>
							</view>
						</view>
						<view class="box-bd">
						</view>
					</view>
				</view>
			</view>
			<u-popup v-model="showPop" mode="bottom" height="900rpx" :closeable="true">
				<view class="select_title">请在下方选择头像</view>
				<view class="ava_box">
					<image class="avatar_img" @click="setAva1()" :src="avatarImg[0]"></image>
					<image class="avatar_img" @click="setAva2()" :src="avatarImg[1]"></image>
				</view>
				<view class="ava_box">
					<image class="avatar_img" @click="setAva3()" :src="avatarImg[2]"></image>
					<image class="avatar_img" @click="setAva4()" :src="avatarImg[3]"></image>
				</view>
			</u-popup>
			<view class="list-content">
				<view class="list">
					<view class="li noborder">
						<view class="icon">
							<image src="../../static/user/card.png"></image>
						</view>
						<view class="text" @click="mymessage()">我的信息</view>
						<image class="to" src="../../static/user/to.png"></image>
					</view>
				</view>
				<view class="list">
					<view class="li ">
						<view class="icon">
							<image src="../../static/user/help.png"></image>
						</view>
						<view class="text" @click="toupdate()">修改信息</view>
						<image class="to" src="../../static/user/to.png"></image>
					</view>
					<view class="li ">
						<view class="icon">
							<image src="../../static/user/about.png"></image>
						</view>
						<view class="text" @click="changepassword()">修改密码</view>
						<image class="to" src="../../static/user/to.png"></image>
					</view>
					<view class="li ">
						<view class="icon">
							<image src="/static/search.png"></image>
						</view>
						<view class="text" @click="searchroommate()">查询室友</view>
						<image class="to" src="../../static/user/to.png"></image>
					</view>
					<view class="li ">
						<view class="icon">
							<image src="../../static/user/order.png"></image>
						</view>
						<view class="text" @click="vieworder()">我的订单</view>
						<image class="to" src="../../static/user/to.png"></image>
					</view>
				</view>
				<view class="list">
					<view class="li noborder">
						<view class="icon">
							<image src="../../static/user/set.png"></image>
						</view>
						<view class="text" @click="ensureExit()">退出登录</view>
						<image class="to" src="../../static/user/to.png"></image>
					</view>
				</view>
				<view>
					<u-modal v-model="exitLogin" :content="ensureContent" :show-cancel-button="true"
						@confirm="exit()"></u-modal>
				</view>
			</view>
		</view>
		<!--没有登录时-->
		<!--没有登录时-->
		<!--没有登录时-->
		<view v-else>
			<view class="header">
				<view class="bg2">
					<view class="box">
						<view class="box-hd">
							<view class="avator">
								<u-image src="/static/cqu2.jpg" height="215rpx"></u-image>
							</view>
							<view class="text_box">
								<view class="user_name2">未登录</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="loginbtn">
				<u-button type="success" class="loginBtn" @click="toLogin()">
					<view class="btn_text">登录</view>
				</u-button>
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				showPop: false,
				exitLogin: false,
				isLogin: false,
				ensureContent: "确认退出登录？",
				defaultImg: '/static/defaultAvatar.png',
				avatarImg: ['/static/avatar/1.png', '/static/avatar/2.png', '/static/avatar/3.png',
					'/static/avatar/4.png'
				],
				changeAva: {
					id: '',
					image: ''
				},
			}
		},
		onShow() { //在页面显示的时候调用这个周期函数
			//1.从storage中获取用户信息
			let user = uni.getStorageSync("user")
			//2.判断用户是否不为空，说明用户登录了，如果为空说明用户没有登录
			if (user) { //如果用户信息不为空，显示个人中心
				this.isLogin = true
				this.user = user
			}
		},
		onLoad() {},
		methods: {
			setAva1: function() {
				this.showPop = false
				this.user.image = this.avatarImg[0]
				this.changeAva.id = this.user.id
				this.changeAva.image = this.user.image
				uni.request({
					url: '/api/student/ChangeImage',
					method: 'PUT',
					data: this.changeAva,
					timeout: 5000,
				})
			},
			setAva2: function() {
				this.showPop = false
				this.user.image = this.avatarImg[1]
				this.changeAva.id = this.user.id
				this.changeAva.image = this.user.image
				uni.request({
					url: '/api/student/ChangeImage',
					method: 'PUT',
					data: this.changeAva,
					timeout: 5000,
				})
			},
			setAva3: function() {
				this.showPop = false
				this.user.image = this.avatarImg[2]
				this.changeAva.id = this.user.id
				this.changeAva.image = this.user.image
				uni.request({
					url: '/api/student/ChangeImage',
					method: 'PUT',
					data: this.changeAva,
					timeout: 5000,
				})
			},
			setAva4: function() {
				this.showPop = false
				this.user.image = this.avatarImg[3]
				this.changeAva.id = this.user.id
				this.changeAva.image = this.user.image
				uni.request({
					url: '/api/student/ChangeImage',
					method: 'PUT',
					data: this.changeAva,
					timeout: 5000,
				})
			},
			selectAvatar: function() {
				this.showPop = true
			},
			ensureExit: function() {
				this.exitLogin = true
			},
			toLogin: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/login/login'
				})
			}, //退出登录函数
			exit: function() {
				//清空storage的用户数据
				uni.clearStorageSync("user")
				//刷新当前界面
				uni.reLaunch({
					url: '/pages/PersonalCenter/PersonalCenter'
				})
			},
			mymessage: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/MyMessage/MyMessage'
				})
			},
			changepassword: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/ChangePassword/ChangePassword?id=' + this.user.id
				})
			},
			//更新个人信息函数
			toupdate: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/update/update'
				})
			},
			searchroommate: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/dormitory/SearchRoommate?DorNum=' + this.user.room
				})
			},
			vieworder: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/myOrder/myOrder'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './PersonalCenter.scss';
</style>