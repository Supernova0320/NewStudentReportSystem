<template>
	<view>
		<view class="block-up">
			<u-cell-group>
				<u-cell-item title="头像" @click='changeHead'>
					<u-image width='100rpx' height='100rpx' slot="right-icon" :src="account.acc_image" shape="circle">
					</u-image>
				</u-cell-item>
				<view class="name_input">
					<view class="input">
						<u-form ref="validateFormRef" :model="form">
							<u-form-item label="昵称" prop="pp_name" :border-bottom="true">
								<u-input v-model="account.acc_name" input-align="right" placeholder="请输入昵称"/>
							</u-form-item>
						</u-form>
					</view>

				</view>
				<!-- <u-cell-item title="昵称" :value="account.acc_name"></u-cell-item> -->
				<u-cell-item title="性别" :value="account.gender" @click='selectSex'></u-cell-item>
				<u-cell-item title="出生日期" :value="account.birthday" @click='show=true'></u-cell-item>
				<u-cell-item title="来自" :value="account.zone" @click='showAddr=true'></u-cell-item>
				<view class="name_input">
					<view class="input">
						<u-form-item label="个人简介" prop="description" :border-bottom="true" label-width="180rpx">
							<u-input v-model="account.description" input-align="right" />
						</u-form-item>
					</view>


				</view>
			</u-cell-group>
			<u-calendar v-model="show" @change="change"></u-calendar>
			<u-picker mode="region" v-model="showAddr" :area-code='["21", "2101", "210103"]' @confirm='selectAddr'>
			</u-picker>
		</view>
		<view class="block-down">
			<u-button type="primary" @click="bound()">绑定</u-button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					pp_name: '',
				},
				account: {
					"id": "",
					"acc_image": "",
					"acc_name": "初始名",
					"gender": "保密",
					"birthday": "2023-08-22",
					"zone": "重庆市-市辖区-沙坪坝区",
					"description": "该用户还未设置简介"
				},
				show: false,
				showAddr: false,
				rules: {
					pp_name: [{
						required: true,
						message: '请输入昵称',
						trigger: 'blur,change'
					}],
					pp_name: [{
						required: true,
						message: '请输入昵称',
						trigger: 'blur,change'
					}],

				}
			}
		},
		methods: {
			changeHead() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.account.acc_image = res.tempFilePaths[0]
					}
				});
			},
			selectSex() {
				const arr = ['男', '女', '保密']
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this.account.gender = arr[res.tapIndex]
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			change(e) {
				this.account.birthday = e.result
			},
			selectAddr(e) {
				console.log(e)
				this.account.zone = `${e.province.label}-${e.city.label}-${e.area.label}`
			},
			bound: function() {
				uni.request({
					url: 'http://192.168.137.142:8888/forum/createaccount',
					method: 'POST',
					data: this.account,
					timeout: 5000,
					success: function(res) {
						//绑定成功跳转到
						if (res.data.code == 200) {

							uni.navigateBack({
								delta: 2
							})
						}
					},
					fail: function() {
						console.log("发布失败")
					}
				})
			}
		},
		onLoad() {
			let user = uni.getStorageSync("user");
			this.account.id = user.id;
			this.account.acc_image = user.image;
		},
		onReady() {
			this.$refs.validateFormRef.setRules(this.rules);
		},
	}
</script>

<style>
	.block-up {}

	.block-down {
		margin: 20rpx;
	}

	.name_input {
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		/* text-align: center; */
		/* flex: 2; */
		justify-content: center;
		align-items: center;
	}

	/* .name {
		font-size: 15px;
		font-weight: 100;


		flex: 1;
		margin: 23rpx;
	} */

	.input {
		/* border: 1px solid red; */
		text-align: right;
		/* flex: 1; */
		margin: 30rpx;
		font-size: 30px;
		font-weight: 250;
		width: 100%;
	}
</style>
