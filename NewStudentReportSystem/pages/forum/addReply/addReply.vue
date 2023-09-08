<template>
	<view class="wrap">
		<view class="content">
			<u-input v-model="ReplyOwner.content" :type="type" :border="border" :height="height_content" :auto-height="autoHeight" :placeholder="placeholder_content"/>
		</view>
		<view class="addPost">
			<u-button type="primary" @click="addpost()">发布</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value: '',
				type: 'textarea',
				border: true,
				height_title: 100,
				height_content: 400,
				autoHeight: true,
				placeholder_content:'请友善回复',
				ReplyOwner:{
					/* "acc_id": getApp().globalData.PostMe.acc_id, */
					"acc_id":"",
					"content": "",
					"post_id": "",
					"reply_id": "0"
				}
			}
		},
		onLoad:function(option) {
			this.ReplyOwner.post_id=option.Post_id;
			let getPostMe = uni.getStorageSync("PostMe");
			this.ReplyOwner.acc_id = getPostMe.acc_id;
		},
		
		

		methods: {
			addpost: function(){
				console.log("post:",this.ReplyOwner);
				uni.request({
					url:'http://192.168.137.142:8888/forum/createreply',
					method:'POST',
					data:this.ReplyOwner,
					timeout: 5000,
					success:function(res){
						//发布成功跳转到
						if(res.data.code == 200){
							uni.showToast({
								title:'发布成功！'
							})
							setTimeout(() => {
							uni.navigateBack({
								delta:1
							}) 
						},1700);
						}
					},fail:function(){
						console.log("发布失败")
					}
				}) 
				
				
				
				
			},
			

		}
	}
</script>

<style lang="scss">
	.title{
		
		margin: 10rpx;
	}
	.content{
		
		margin: 10rpx;
		height:410rpx;
	}
	.addPost{
		
		margin: 30rpx; 
	}
</style>
