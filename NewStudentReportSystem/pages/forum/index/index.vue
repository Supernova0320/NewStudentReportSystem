<template>
	<view>
		<view class="content">
			<view class="function_box" v-for="(type,index) in typeList" :item="type" :index="index" :key="type.id">
				<view class="function" @click="toPost(type.name)">
					<image class="serve_icon" src="/static//postType.png"></image>
					<view class="serve_text">
						{{type.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="container">
			<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
				:direction="direction" @trigger="trigger"  />
		</view>
		
		
		
		<!-- <view class="block">
			<view class="block-show" v-for="(type,index) in typeList" :item="type" :index="index" :key="type.id">
				<view calss="type_content">
					<u-button class="type_name" type="primary" :plain="true" text="镂空" @click="toPost(type.name)">
						{{type.name}}</u-button>
				</view>
			</view>
		</view>
		<view class="container">
			<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
				:direction="direction" @trigger="trigger"  />
		</view> -->
	</view>

</template>

<script>
	export default {
		data() {
			return {
				typeList: [],
				directionStr: '',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'vertical',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
				is_color_type: false,
				content: [
					{
						iconPath: '/static/PostMe.png',
						selectedIconPath: '/static/PostMe.png',
						text: '个人中心',
						active: false
					},
				],
			}
		},
		onLoad() {
			let user = uni.getStorageSync("user");
			this.$u.get('http://192.168.137.142:8888/forum/getAccountMail?id=' + user.id).then(
				res => {
					//请求成功执行的函数
					console.log(res);
					if (res.code == 200) {
						console.log("indexres:", res);
						uni.setStorageSync('PostMe',res.data);
						this.$u.get('http://192.168.137.142:8888/forum/getTypeName').then(res_get => {
							//请求成功执行的函数
							if (res.code == 200) {
								
								this.typeList = res_get.data;
								let getPostMe = uni.getStorageSync("PostMe");
			
								console.log("cache", getPostMe);
							}
						}).catch(err_get => {
							//请求失败执行的函数
							console.log(err_get)
						})
					} else if (res.code == 400) {
						uni.navigateTo({
							url: '/pages/forum/InitialPostMe/InitialPostMe'
						})
					}
				}).catch(err => {
				//请求失败执行的函数
				console.log("失败");
				console.log(err);
			})
		},
		methods: {
			toPost: function(type_name) {
				uni.navigateTo({
					url: '/pages/forum/Post/Post?type_name=' + type_name
				})
			},
			trigger(e) {
				console.log("e:",e);
				if (e.index == 0) {
					uni.navigateTo({
						url: '/pages/forum/PostMe/PostMe',
						
					})
				}
			
			},
			
		},
	}
</script>

<style lang="scss" scoped>
	.type_name {
		margin: 10rpx;
		height: 200rpx;
	}
	page{
		background: #d1eceb;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.function_box{
			padding-top: 40rpx;
			margin: 10rpx 10rpx;
			/* border: 1px solid blue; */
			width: 85%;
			.function{
				/* border: 1px solid red; */
				display: flex;
				flex-direction: row;
				border-radius: 35rpx;
				margin:10rpx;
				padding:20rpx 70rpx;
				background:#ffffff;
				box-shadow: 0 1upx 10upx 0upx rgba(0, 0, 150, .2);
				.serve_icon{
					height: 90rpx;
					width: 90rpx;
					margin: 30rpx 17rpx;
				}
				.serve_text{
					font-size: 40rpx;
					margin:50rpx 50rpx
				}
			}
		}
	}
	
</style>
