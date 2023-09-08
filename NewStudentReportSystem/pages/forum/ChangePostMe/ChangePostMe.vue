<template>
	<view>
		<view class="block-up">
			<u-cell-group>
				<u-cell-item title="头像" @click='changeHead'>
					<u-image width='100rpx' height='100rpx' slot="right-icon" :src="account.acc_image" shape="circle">
					</u-image>
				</u-cell-item>
				<view class="name_input">
					<view class="name">
						<text> 昵称</text>
					</view>
					<view class="input">
						<u-input v-model="account.acc_name" input-align="right" />
					</view>

				</view>
				<!-- <u-cell-item title="昵称" :value="account.acc_name"></u-cell-item> -->
				<u-cell-item title="性别" :value="account.gender" @click='selectSex'></u-cell-item>
				<u-cell-item title="出生日期" :value="account.birthday" @click='show=true'></u-cell-item>
				<u-cell-item title="来自" :value="account.zone" @click='showAddr=true'></u-cell-item>
				<view class="name_input">
					<view class="name">
						<text>个人简介</text>
					</view>
					<view class="input">
						<u-input v-model="account.description" input-align="right" />
					</view>

				</view>
			</u-cell-group>
			<u-calendar v-model="show" @change="change"></u-calendar>
			<u-picker mode="region" v-model="showAddr" :area-code='["21", "2101", "210103"]' @confirm='selectAddr'>
			</u-picker>
		</view>
		<view class="block-down">
			<u-button type="primary" @click="ChangePostMe()">确认修改</u-button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: {},
				show: false,
				showAddr: false,
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
			ChangePostMe: function() {
				uni.request({
					url: 'http://192.168.137.142:8888/forum/ChangeAccountMail',
					method: 'PUT',
					data: this.account,
					timeout: 5000,
					success: function(res) {
						//绑定成功跳转到
						console.log("成功");
						if (res.data.code == 200) {
							console.log("妍陌前：", this.account);
							uni.navigateBack({
								delta:2
							})


						}
					},
					fail: function() {
						console.log("修改失败")
					}
				})
			},
			
		},
		onLoad() {
			let getPostMe = uni.getStorageSync("PostMe");
			this.account = getPostMe;
			
			
			

		},
		
	}
</script>

<style>
	.block-up {}

	.block-down {
		margin: 20rpx;
	}

	.name_input {
		display: flex;
		flex-direction: row;
		/* text-align: center; */
		flex: 2;
		justify-content: center;
		align-items: center;
	}

	.name {
		font-size: 15px;
		font-weight: 100;


		flex: 1;
		margin: 23rpx;
	}

	.input {
		text-align: right;

		flex: 1;
		margin: 30rpx;
		font-size: 15px;
		font-weight: 100;
	}
</style>
