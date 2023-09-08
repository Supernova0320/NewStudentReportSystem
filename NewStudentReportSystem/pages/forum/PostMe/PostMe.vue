<template>
	<view>
		<view class="block-up">
			<u-cell-group>
				<u-cell-item title="头像">
					<u-image width='100rpx' height='100rpx' slot="right-icon" :src="account.acc_image" shape="circle">
					</u-image>
				</u-cell-item>
				<u-cell-item title="昵称" :value="account.acc_name"></u-cell-item>
				<u-cell-item title="性别" :value="account.gender"></u-cell-item>
				<u-cell-item title="出生日期" :value="account.birthday"></u-cell-item>
				<u-cell-item title="来自" :value="account.zone"></u-cell-item>
				<u-cell-item title="个人简介">
					<view class="u-line-1 u-p-l-30">
						{{account.description}}
					</view>
				</u-cell-item>
			</u-cell-group>
			<u-calendar v-model="show" @change="change"></u-calendar>
			<u-picker mode="region" v-model="showAddr" :area-code='["21", "2101", "210103"]' @confirm='selectAddr'>
			</u-picker>
		</view>
		<view class="block-down">
			<u-button type="primary" @click="changePostMe()">修改个人信息</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/* acc_name:'初始名',
				headImg:'/static/logo.png',
				sex: '男',
				birthday: '2023-08-22',
				show: false,
				address:'辽宁省-沈阳市-沈河区',
				profile:'此用户还未设置留言', */
				show: false,
				showAddr: false,
				account: {
					/* "acc_image": "",
					"acc_name": "",
					"gender": "",
					"birthday": "",
					"zone": "",
					"description": "" */
				},
			}
		},
		methods: {
			changeHead() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.headImg = res.tempFilePaths[0]
					}
				});
			},
			selectSex() {
				const arr = ['男', '女', '保密']
				uni.showActionSheet({
					itemList: arr,
					success: (res) => {
						this.sex = arr[res.tapIndex]
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			change(e) {
				this.birthday = e.result
			},
			selectAddr(e) {
				console.log(e)
				this.address = `${e.province.label}-${e.city.label}-${e.area.label}`
			},
			changePostMe:function(){
				uni.navigateTo({
					url:'/pages/forum/ChangePostMe/ChangePostMe'
				})
			}
			
		},
		/* onLoad() {
			let getPostMe = uni.getStorageSync("PostMe");
			this.account = getPostMe;
		} */
		onShow() {
			let user = uni.getStorageSync("user");
			this.$u.get('http://192.168.137.142:8888/forum/getAccountMail?id=' + user.id).then(
				res => {
					//请求成功执行的函数
					console.log(res);
					if (res.code == 200) {
						console.log("indexres:", res);
						uni.setStorageSync('PostMe',res.data);
						let getPostMe = uni.getStorageSync("PostMe");
						this.account = getPostMe; 
					} 
				}).catch(err => {
				//请求失败执行的函数
				console.log("失败");
				console.log(err);
			})
		}
	}
</script>

<style>
	.block-up {}

	.block-down {
		margin: 20rpx;
	}
</style>
