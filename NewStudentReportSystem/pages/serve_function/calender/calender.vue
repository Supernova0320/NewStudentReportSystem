<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<u-form ref="validateFormRef" :model="data" :label-width="150">

				<u-form-item label="事项" prop="things" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="data.things" placeholder="请输入备注事项" :border="border" />
				</u-form-item>

				<u-form-item label="日期" prop="mydate" :border-bottom="false">
					<u-calendar v-model="show" :mode="mode" max-date="2050-12-31" @change="change">
						<view slot="tooltip">
							<view class="title1">
								请选择事项待办日期
							</view>
						</view>
					</u-calendar>
					<u-button class="picker-button" @click="show=true">{{data.mydate}}</u-button>
				</u-form-item> 

				<u-form-item label="事项详情" prop="description" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="data.description" placeholder="请输入事项详情备注" :type="type"
						:border="border" :height="height" :auto-height="autoHeight" />
				</u-form-item>
  

			</u-form>

		<u-button type="success" :ripple="true" ripple-bg-color="#eef2f9" class="loginBtn"
			@click="update()">
			<view class="btn_text">添加日程</view>
		</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'textarea',
				border: true,
				height: 350,
				autoHeight: true,
				isUpdate: false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false
				},
				show: false,
				mode: 'date',
				user: {},
				data: {
					id: 'this.user.id',
					things: '', //备注事项					
					mydate: '请选择日期', // 选择的日期整体值
					description: ''
				},
				rules: {
					things: [
						//required表示是否需要填写 message表示提示的信息 trigger表示触发验证的事件(blur表示失去焦点 focus表示获得焦点)
						{
							required: true,
							message: '请输入备注事项!',
							trigger: 'blur'
						},
					],
					result: [{
						required: true,
						message: '请输入日期!',
						trigger: 'blur'
					}, ],
					description: [{
						required: true,
						message: '请输入事项详情备注!',
						trigger: 'blur'
					}, ],
				}
			}
		},
		onReady() {
			this.$refs.validateFormRef.setRules(this.rules);
		},
		onShow() {
			let user = uni.getStorageSync("user")
			if (user) { //如果用户信息不为空，显示个人中心
				this.user = user
				this.data.id = user.id
			}
		},
		methods: {
			change(e) {
				console.log(e);
				this.data.mydate = e.result
			},
			update: function() {
				//1.验证表单是否都通过了验证
				this.$refs.validateFormRef.validate(valid => {
					if (valid) {
						console.log('验证通过');
						//2.向后端发起请求
						uni.request({
							url: '/api/schedule/createschedule', //仅为示例，并非真实接口地址。
							data: this.data,
							method: 'POST',
							timeout: 5000,
							success: (res) => { //请求成功执行的回调函数
								console.log("res:", res);
								//3.如果登录成功将用户的数据存储在storeage中,以便做验证
								if (res.data.code == 200) {
									console.log("添加成功")
									uni.showToast({
										icon: 'success',
										title: '添加成功'
									})
									setTimeout(() => {
										uni.redirectTo({
											url: '/pages/serve_function/schedule/index/index?id=' +
												this.user.id
										})
										location.reload();
									}, 1700);

								} else { //添加失败的情况

								}
							},
							fail: (err) => {
								console.log(err)
							}
						});
					} else {
						this.$u.toast("请输入完整信息")
					}

				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.title1 {
		color: $u-type-primary;
		text-align: center;
		padding: 20rpx 0 0 0;
	}

	@import'index.scss'
</style>