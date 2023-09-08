<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎注册</view>
			<u-form ref="validateFormRef" :model="student" :label-width="150">
				<u-form-item label="学号" prop="id" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="student.id" placeholder="请输入学号" />
				</u-form-item>
				<u-form-item label="姓名" prop="name" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="student.name" placeholder="请输入姓名" />
				</u-form-item>
				<u-form-item label="电话" prop="phone" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="student.phone" placeholder="请输入电话" />
				</u-form-item>
				<u-form-item label="密码" prop="password" :border-bottom="false">
					<u-input type="password" class="u-border-bottom" v-model="student.password"
						placeholder="密码为6-12位数字或字母" />
				</u-form-item>
				<u-form-item label="确认密码" prop="passwordConfirm" :border-bottom="false">
					<u-input type="password" class="u-border-bottom" v-model="student.passwordConfirm"
						placeholder="请确认密码" />
				</u-form-item>
				<u-form-item label="性别">
					<u-radio-group>
						<u-radio v-for="(item, index) in genderList" @change="radioChange" :key="index"
							:name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</u-form-item>
				<!-- 				<u-form-item label="宿舍" prop="room" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="student.room" placeholder="请输入宿舍号" />
				</u-form-item> -->
				<u-form-item label="地区" prop="zone" :border-bottom="false">
					<u-picker v-model="showzonePicker" @confirm="setzone" mode="region" :params="params"></u-picker>
					<u-button class="picker-button" :ripple="true" ripple-bg-color="#eef2f9" type="zoneType"
						@click="showzonePicker = true">{{zone}}</u-button>
				</u-form-item>
				<u-form-item label="民族" prop="nation" :border-bottom="false">
					<u-select v-model="showNationPicker" @confirm="setNation" :list="nationList"></u-select>
					<u-button class="picker-button" :ripple="true" ripple-bg-color="#eef2f9" type="nationType"
						@click="showNationPicker = true">{{nation}}</u-button>
				</u-form-item>
				<u-form-item label="爱好" prop="hobby" :border-bottom="false">
					<u-select v-model="showhobbyPicker" @confirm="sethobby" :list="hobbyList"></u-select>
					<u-button class="picker-button" :ripple="true" ripple-bg-color="#eef2f9" type="hobbyType"
						@click="showhobbyPicker = true">{{hobby}}</u-button>
				</u-form-item>
				<!-- 				<u-form-item label="照片" prop="image" :border-bottom="false">
					<u-upload :action="action" :file-list="fileList"></u-upload>
				</u-form-item> -->
			</u-form>
			<u-button class="loginBtn" type="success" :ripple="true" ripple-bg-color="#eef2f9" @click="register()">
				<view class="btn_text">提交信息</view>
			</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				student: {
					id: '',
					name: '',
					img: '',
					password: '',
					passwordConfirm: '',
					gender: '',
					// room: '',
					zone: '',
					hobby: '',
					nation: '',
					phone: '',
					report: 1
				},
				rules: {
					id: [{
						required: true,
						message: '请输入学号',
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '请输入电话',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							pattern: /^[0-9a-zA-Z]*$/g,
							transform(value) {
								return String(value);
							},
							message: "密码只能为数字或字母",
							trigger: 'blur'
						},
						{
							min: 6,
							max: 12,
							message: "密码只能为6-12个字符",
							trigger: 'blur'
						}
					],
					passwordConfirm: [{
						validator: (rule, value, callback) => {
							if (value === this.student.password) {
								return true
							} else {
								return false
							}
						},
						message: "两次输入密码不一致",
						trigger: 'blur'
					}]
				},
				nationList: [{
						value: '汉族',
						label: '汉族'
					},
					{
						value: '壮族',
						label: '壮族'
					},
					{
						value: '维吾尔族',
						label: '维吾尔族'
					},
					{
						value: '回族',
						label: '回族'
					},
					{
						value: '苗族',
						label: '苗族'
					},
					{
						value: '满族',
						label: '满族'
					}
				],
				genderList: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
				hobbyList: [{
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
				showzonePicker: false,
				showNationPicker: false,
				showhobbyPicker: false,
				zone: "请选择地区",
				nation: "请选择民族",
				hobby: "请选择爱好",
				params: {
					province: true,
					city: false,
					zone: false
				}
			}
		},
		computed: {},
		onShow() {},
		onReady() {
			this.$refs.validateFormRef.setRules(this.rules);
		},
		methods: {
			radioChange(e) {
				if (e == '男') {
					this.student.gender = '男'
				} else {
					this.student.gender = '女'
				}
			},
			setzone(e) {
				this.student.zone = e.province.label
				this.zone = this.student.zone
			},
			setNation(e) {
				this.student.nation = e[0].label
				this.nation = this.student.nation
			},
			sethobby(e) {
				this.student.hobby = e[0].label
				this.hobby = this.student.hobby
			},
			register: function() {
				uni.request({
					url: '/api/student/WhetherReport',
					method: 'GET',
					data: this.student,
					timeout: 5000,
					success: (resYes) => {
						console.log("this ",this.student)
						console.log("res ",resYes)
						if (resYes.data.data.name == this.student.name) {
							if (resYes.data.code = 300) {
								if (resYes.data.data.report == 0) {
									this.$refs.validateFormRef.validate(valid => {
										if (valid) {
											uni.request({
												url: '/api/student/studentregister',
												method: 'PUT',
												data: this.student,
												timeout: 5000,
												success: (res) => {
													this.$u.toast("注册成功")
													uni.navigateTo({
														url: '/pages/PersonalCenter_function/login/login'
													})
												},
												fail: (err) => {
													console.log("err, ", err)
												}
											})
										} else {
											this.$u.toast("请输入正确、完整信息")
										}
									})
								} else {
									this.$u.toast("学生已注册")
								}

							} else {
								this.$u.toast("学生已报道")
							}
						} else {
							this.$u.toast("学生学号、姓名不对应")
						}
					},
					fail: (errReq) => {
						console.log(errReq)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>