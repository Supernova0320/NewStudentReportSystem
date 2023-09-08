<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">重庆大学</view>
			<view class="list-content">
				<view class="list">
					<view class="li">
						<view class="head">姓名</view>
						<view class="text">{{this.user.name}}</view>
					</view>
					<view class="li">
						<view class="head">学号</view>
						<view class="text">{{this.user.id}}</view>
					</view>
					<view class="li">
						<view class="head">专业</view>
						<view class="text">{{this.user.major}}</view>
					</view>
					<view class="li">
						<view class="head">班级</view>
						<view class="text">{{this.user.grade}}</view>
					</view>
					<view class="li">
						<view class="head">宿舍</view>
						<view class="text">竹四{{this.user.room}}</view>
					</view>
					<view class="li">
						<view class="head">入学年份</view>
						<view class="text">2021年</view>
					</view>
					<view class="li">
						<view class="head">电话</view>
						<view class="text">{{this.user.phone}}</view>
					</view>
					<view class="li">
						<view class="head">地区</view>
						<view class="text">{{this.user.zone}}</view>
					</view>
					<view class="li">
						<view class="head">民族</view>
						<view class="text">{{this.user.nation}}</view>
					</view>
					<view class="li">
						<view class="head">兴趣爱好</view>
						<view class="text">{{this.user.hobby}}</view>
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
				user:{}
			}
		},
		onShow() { //在页面显示的时候调用这个周期函数
			//1.从storage中获取用户信息
			let user = uni.getStorageSync("user")
		
			//2.判断用户是否不为空，说明用户登录了，如果为空说明用户没有登录
			uni.request({
				url: 'http://192.168.137.142:8888/student/login',
				data: {
					id:user.id,
				password:user.password},
				method: 'GET',
				timeout: 5000,
				success: (res) => {
				
					//3.将用户的数据储存到storeage中
					if (res.data.code == 200 ) {
							console.log("成功",res)
						uni.setStorageSync("user", res.data.data)	
						this.user=res.data.data
					}  else {
						//登录失败
						this.$u.toast('查询失败！')
					}				
				}
			})
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import './MyMessage.scss';
</style>