<template>
	<view class="wrap" style="background-color:#e6e6e6;">
		<view class="title_box">
			菜品列表
		</view>
		
	<view class="canteen_item" v-for="(canteen,index) in canteenlist" :item="canteen" :index="index" :key="canteen.fname"
				style="display: flex;flex-direction: row;flex: 3;padding: 3rpx;background-color:#f8f8f8;border-radius: 15rpx;margin:30rpx">
				
				<view class="image_box" style="flex: 1;border-radius: 5rpx;">
					<u-image width="100%" border-radius="5rpx" height="300rpx" :src="canteen.fimage"></u-image>
				</view>
				
				<view class="film_content" style="flex: 2;padding: 5rpx;">
					<view class="title" style="line-height: 50rpx;">
					{{canteen.fname}}
					</view>
					<view class="sy_time1" style="line-height: 50rpx;">
						使用食材:{{canteen.material}}
					</view>
					<view class="sy_time2" style="line-height: 50rpx;">
						价格:{{canteen.price}}元
					</view>
				</view>
			</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				canteenlist: [],
				id: '',
				word: ''
			}
		},
		onLoad: function(options) {
			console.log("options:", options)
			console.log("搜索id:", options.id)
			this.$u.get('http://192.168.137.142:8888/canteen/getMailByIdWord', {
				id: options.id,
				word: options.word
			}).then(res => { //请求成功执行的函数
				console.log("res:", res)
				this.fid = options.id
				this.keyword = options.word
				if (res.code == 200) {
					this.canteenlist = res.data
				}
				else{
					this.$u.toast("未查询到相关内容")
				}

			}).catch(err => { //请求失败执行的函数
				
			})
		},
		methods: {

		}
	}
</script>
<style>
	page {
		background: #f3f4f6;
	}
	.swiper_box {
		margin: 5rpx;
	}

	.title_box {
		
		margin: 10rpx;
		/* 		border: 1px solid red; */
		padding: 30rpx 30rpx;
		line-height: 60rpx;
		font-size: 50rpx;
		text-align: center;
		font-weight: 700;
		border-radius:15rpx ;
		background-color: #ffffff;
	}

	.film_content {
		/*  	border: 1px solid green; */
		margin: 5px;
		border-radius: 5rpx;
		font-size: 32rpx;
	}
	.title{
				margin-top: 30rpx;
		font-size: 37rpx;
		font-weight: 700;
		text-align: center;
		color:#00a1e1;
	}
	.sy_time1{
		margin-top: 40rpx;
		font-size: 30rpx;
		font-weight: 700;
		text-align: center;
		color:#8f5f47;
	}
	.sy_time2{
			margin-top: 20rpx;
		font-size: 28rpx;
		font-weight: 700;
		text-align: center;
		padding:10rpx;
			color:#df0000;
	}
	.image_box{
			box-shadow: 0 1upx 10upx 0upx rgba(0, 0, 150, .2);
		border: 2px solid #7f7f7f; 
	}
</style>
