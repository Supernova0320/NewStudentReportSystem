<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录</view>

			<u-form ref="validateFormRef" :model="user">
				<u-form-item label="学号" prop="id" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="user.id" placeholder="请输入学号" />
				</u-form-item>
				<u-form-item label="密码" prop="password" :border-bottom="false">
					<u-input type="password" class="u-border-bottom" v-model="user.password" placeholder="请输入密码" />
				</u-form-item>
			</u-form>
			<u-button type="success" :ripple="true" ripple-bg-color="#eef2f9" class="loginBtn" :disabled="islogin"
				@click="login()">
				<view class="btn_text">登录</view>
			</u-button>
			<view class="text">
				如果你是第一次登录，请先注册！
			</view>
			<view class="alternative">
				<view class="password" @click="toRegister()">注册</view>
				<view class="issue" @click="forgetpassword()">忘记密码</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				islogin: false,
				user: {
					id: '', //user对象的属性
					password: ''
				},
			}
		},
		computed: {

		},
		onReady() {
			this.$refs.validateFormRef.setRules(this.rules);
		},
		onShow() {},
		methods: {
			forgetpassword: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/RetrievePassword/RetrievePassword1/RetrievePassword1'
				})
			},
			toRegister: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/register/register'
				})
			},
			//登录的方法
			login: function() {
				//1.验证表单是否通过了验证
				this.$refs.validateFormRef.validate(valid => {
					if (valid) {
						//2.向后端发起请求，实现登录，如果登录成功跳转到个人中心页面，显示信息
						uni.request({
							url: 'http://192.168.137.142:8888/student/login',
							data: this.user,
							method: 'GET',
							Timeout: 5000,
							success: (res) => {
								//3.将用户的数据储存到storeage中
								if (res.data.code == 200 && res.data.message == '学生登录成功') {
									uni.setStorageSync("user", res.data.data)
									
								uni.showToast({
									icon:'success',
									title:'登录成功！'
								})
										setTimeout(() => {
									uni.reLaunch({
										//返回上一个页面
										url: '/pages/PersonalCenter/PersonalCenter'
									})
									},1700);
								} else if (res.data.code == 300) {
									//未注册
									uni.showModal({
										title: '登录失败',
										content: '你还未注册，请先注册！\n（点击确定跳转到注册界面）',
										success: function(res) {
											if (res.confirm) {
												uni.navigateTo({
													url: '/pages/PersonalCenter_function/register/register'
												})
											}
										}
									});

								} else {
									//登录失败
									this.$u.toast('用户名或密码错误')
								}


							}
						})
					}

				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./login.scss";
</style>