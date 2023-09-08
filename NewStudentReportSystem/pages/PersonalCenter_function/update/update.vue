<template>

	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="list">
				<u-form ref="validateFormRef" :model="student" :label-width="120">
					<u-form-item label="电话" style="font-size: 16px;" prop="phone" :border-bottom="false">
						<u-input class="u-border-bottom" v-model="student.phone" placeholder="请输入电话" />
					</u-form-item>

					<u-form-item label="爱好"style="font-size: 16px;" prop="like" :border-bottom="false">
						
						    <u-select v-model="showLikePicker" :list="likeList" @confirm="confirm" class="custom-select"></u-select>
						<u-button class="picker-button" @click="showLikePicker=true">{{student.hobby}}</u-button>
					</u-form-item>
				</u-form>
			</view>
			<u-button type="primary" @click="update()">
				<view class="btn_text">
					确认修改
				</view>
			</u-button>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				isUpdate: false,
				likeList: [{
						value: '音乐',
						label: '音乐'
					},
					{
						value: '摄影',
						label: '摄影'
					},
					{
						value: '运动',
						label: '运动'
					},
					{
						value: '绘画',
						label: '绘画'
					},
					{
						value: '游戏',
						label: '游戏'
					},
					{
						value: '睡觉',
						label: '睡觉'
					}
				],
				student: {
					id: 'this.user.id',
					// image: '',
					phone: '',
					hobby: '请选择爱好'
				},
				user: {},
				fileList: [],
				showLikePicker: false,
				rules: {
					phone: [
						//required表示是否需要填写 message表示提示的信息 trigger表示触发验证的事件(blur表示失去焦点 focus表示获得焦点)
						{
							required: true,
							message: '请输入电话号码!',
							trigger: 'blur'
						},
					],
					hobby: [{
						required: true,
						message: '请输入爱好!',
						trigger: 'blur'
					}, ]
				}
			}
		},
		onShow() {
			let user = uni.getStorageSync("user")
			if (user) { //如果用户信息不为空，显示个人中心
				this.user = user
				this.student.id = user.id
			}
		},
		onReady() {
			this.$refs.validateFormRef.setRules(this.rules);
		},
		onLoad() {
			// console.log("id:",this.user.id)
		},
		methods: { // 删除图片
			// deletePic(event) {
			// 	this[`fileList${event.name}`].splice(event.index, 1)
			// },
			// // 新增图片
			// async afterRead(event) {
			// 	// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
			// 	let lists = [].concat(event.file)
			// 	let fileListLen = this[`fileList${event.name}`].length
			// 	lists.map((item) => {
			// 		this[`fileList${event.name}`].push({
			// 			...item,
			// 			status: 'uploading',
			// 			message: '上传中'
			// 		})
			// 	})
			// 	for (let i = 0; i < lists.length; i++) {
			// 		const result = await this.uploadFilePromise(lists[i].url)
			// 		let item = this[`fileList${event.name}`][fileListLen]
			// 		this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
			// 			status: 'success',
			// 			message: '',
			// 			url: result
			// 		}))
			// 		fileListLen++
			// 	}
			// },
			// uploadFilePromise(url) {
			// 	return new Promise((resolve, reject) => {
			// 		let a = uni.uploadFile({
			// 			url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
			// 			filePath: url,
			// 			name: 'file',
			// 			formData: {
			// 				user: 'test'
			// 			},
			// 			success: (res) => {
			// 				setTimeout(() => {
			// 					resolve(res.data.data)
			// 				}, 1000)
			// 			}
			// 		});
			// 	})
			// },
			update: function() {
				//1.验证表单是否都通过了验证
				this.$refs.validateFormRef.validate(valid => {
					if (valid) {
						console.log('验证通过');
						if (this.student.phone.length < 6) {
							uni.showToast({
								icon: 'none',
								title: '密码格式错误!'
							})
						}
						//2.向后端发起请求
						uni.request({
							url: '/api/student/ChangeHobTel', //仅为示例，并非真实接口地址。
							data: this.student,
							method: 'PUT',
							timeout: 5000,
							success: (res) => { //请求成功执行的回调函数
								console.log("res:", res);
								//3.如果登录成功将用户的数据存储在storeage中,以便做验证
								if (res.data.code == 200 ) {
									uni.showToast({
										icon:'success',
										title:'修改成功！',
										
									})
									setTimeout(() => {
										uni.navigateBack({
											delta:1
										})
									}, 1700);	
									
									console.log("修改成功")
							} else { //登录失败的情况

								}
							},
							fail: (err) => {
								console.log(err)
							}
						});
					}

				});
			},



			confirm(e) {
				this.student.hobby = e[0].label
				console.log("hobby:", e[0].label)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import'index.scss';
</style>