<template>
	<view class="'cont">
		<u-navbar :is-back="false" title="服务中心" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
		<view class="content">
			<view class="function_box">
				<view class="function" @click="toStudy()">
					<image class="serve_icon" src="/static/serve_center/xuexi.png"></image>
					<view class="serve_text">
						学 习
					</view>
				</view>
				<view class="function" @click="toForum()">
					<image class="serve_icon" src="/static/serve_center/luntan.png"></image>
					<view class="serve_text">
						论 坛
					</view>
				</view>
				<view class="function" @click="toSchedule()">
					<image class="serve_icon" src="/static/serve_center/richeng.png"></image>
					<view class="serve_text">
						日 程
					</view>
				</view>
				<view class="function" @click="toMall()">
					<image class="serve_icon" src="/static/serve_center/chaoshi.png"></image>
					<view class="serve_text">
						超 市
					</view>
				</view>
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
				}
			}
		},
		onShow() { //在页面显示的时候调用这个周期函数
			//1.从storage中获取用户信息
			let user = uni.getStorageSync("user")
			//2.判断用户是否不为空，说明用户登录了，如果为空说明用户没有登录
			this.user = user
		},
		methods: {
			toStudy: function() {
				if (this.user.id == undefined) {
					uni.showToast({
						icon: 'none',
						title: '你还未登录，请先登录！'
					})
				} else {
					uni.navigateTo({
						url: '/pages/serve_function/study/study'
					})
					}
				},
			toSchedule: function() {
				if (this.user.id == undefined) {
					uni.showToast({
						icon: 'none',
						title: '你还未登录，请先登录！'
					})
				} else {
					uni.navigateTo({
						url: '/pages/serve_function/schedule/index/index?id=' + this.user.id
					})
				}

			},
			toForum: function() {
				if (this.user.id == undefined) {
					uni.showToast({
						icon: 'none',
						title: '你还未登录，请先登录！'
					})
				} else {
					uni.navigateTo({
						url: '/pages/forum/index/index'
					})
				}

			},
			toMall:function(){
				if(this.user.id==undefined){
					uni.showToast({
						icon:'none',
						title:'你还未登录，请先登录！'
					})
				}else{
					uni.navigateTo({
						url:'/pages/serve_function/mall/mall'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./serve.scss";
</style>