<template>
	<view class="content">
		<view class="block_show" >
			<view class="block_up" >
				<view class="image">
					<u-avatar src="/static/cqu2.jpg" size="default"></u-avatar>
				</view>
			</view>
			<view class="block_mid">
				<view class="title">
					<text>{{dataArray.things}}</text>
				</view>
				<view class="text">
					<text>{{dataArray.description}}</text>
					<view class = "line" style=" bottom: 285rpx;"></view>
					<view class = "line"style=" bottom: 240rpx;"></view>
					<view class = "line"style=" bottom: 195rpx;"></view>
					<view class = "line"style=" bottom: 150rpx;"></view>
					<view class = "line"style=" bottom: 105rpx;"></view>
					<view class = "line"style=" bottom: 60rpx;"></view>
				</view>
				<view class="time">
					<text>{{dataArray.mydate}}</text>
				</view>
			</view>
			
		</view>
		<view class="button_box"> 
				<u-button type="error" @click="Del()">删除</u-button>	
		</view>
		<view>
			<u-modal v-model="Delete" :content="ensureContent" :show-cancel-button="true"
				@confirm="Delete1()"></u-modal>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					ensureContent: "确认删除？",
				Delete:false,	
			user:{},
				count:0,
				dataArray:{},
			}
		},
		onShow(){//在页面显示的时候调用这个周期函数
			//1.从storage中获取用户信息
			let dataArray = uni.getStorageSync("dataArray")
			//2.判断用户是否不为空，说明用户登录了，如果为空说明用户没有登录
			//如果用户信息不为空，显示个人中心
			this.dataArray = dataArray[this.count]
			this.user=user
			let user = uni.getStorageSync("user")
			if (user) { //如果用户信息不为空，显示个人中心
				this.user = user
			}
		},
		onLoad:function(option) {
				this.count =option.count
			},
		methods: {
			Del:function(){
				this.Delete=true
			},
			
			Delete1:function(){
						uni.request({			
							url: 'http://192.168.137.142:8888/schedule/delete/',
							data:this.dataArray,
							method: 'DELETE',
							Timeout: 5000,
							success: (res) => {
								if (res.data.code == 200) {
							uni.showToast({
								icon:'success',
								title:'删除成功'
							})
					setTimeout(() => {
						uni.redirectTo({
							url:'/pages/serve_function/schedule/index/index?id='+this.user.id
					})
						location.reload();
					},1600);
								} else {
									//删除失败
									this.$u.toast('删除失败！')
								}
						
						
							}
						})				
				}
			}
			
		}
</script>

<style lang="scss" scoped >
	page {
		background:#f3f4f6;
	}
	
.content {
	height: 620px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; //垂直居中
		text-align: center;
		padding:0rpx;
	.block_show {
			/* 
	*/
			/* height: 700rpx; */
			width: 90%;
			height: 450px;
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;
			/* text-align: center; */
			margin: 250rpx;
			background-color: #ececb4;
			border-radius: 20rpx;


		}
	}
	.block_mid {
	  
	  border-radius: 20px;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	  height: 650rpx;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between; /* 垂直方向上标题和时间之间有空间 */
	  align-items: center;
	  padding: 50rpx; /* 添加内边距以增加标题和时间与边框之间的距离 */
	  width: 100%;
	}
	
	.title {
	  border-radius: 30rpx;
	  height: 100rpx;
	  width: 100%;
	  font-size: 27px;
	  font-weight: bold;
	  display: flex;
	  justify-content: center;
	  align-items: flex-start; /* 将标题在边框上居中显示 */
	  text-align: center;
	  margin-bottom: 5px; /* 创建一点空间让文字下移 */
	}
	
	.text {
	  height: 330rpx;
	  width: 100%;
	  font-weight: 500;
	  text-align: left;
	  font-size: 19px;
	  padding-left: 10px; /* 添加左边内边距来让文字从左边开始显示 */
	  position: relative; /* 设置相对定位 */
	 .line{
		 content: "";
		 height: 2px;
		 width: 100%;
		 background-color: #5b5b5b;
		 position: absolute;
		 bottom: 285rpx;
		 left: 0;
	 }
	}

	.time {
		font-size:17px ;
		font-weight: 100;
	  height: 10rpx;
	  width: 100%;
	  text-align: right;
	  align-self: flex-end; /* 时间在右下角对齐 */
	}
	.button_box{
		 position: fixed;
		  bottom: 90px;
		  display: flex;
	}
</style>
