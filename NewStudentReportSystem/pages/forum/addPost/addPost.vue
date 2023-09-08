<template>
	<view class="wrap">
		<view class="title">
			<u-input v-model="Post.title" :type="type" :border="border" :height="height_title" :auto-height="autoHeight" :placeholder="placeholder_title"/>
		</view>
		<view class="content">
			<u-input v-model="Post.content" :type="type" :border="border" :height="height_content" :auto-height="autoHeight" :placeholder="placeholder_content"/>
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
				placeholder_title: '请输入标题(最少5个字)',
				placeholder_content:'请输入内容',
				Post:{
					"type":"",
					/* "acc_id":getApp().globalData.PostMe.acc_id, */
					"acc_id":"",
					"title":"",
					"content":"",
					"likecount":0,
				}
			}
		},
		onLoad:function(option) {
			this.Post.type=option.post_type;
			let getPostMe = uni.getStorageSync("PostMe");
			this.Post.acc_id = getPostMe.acc_id;
		},
		
		

		methods: {
			addpost: function(){
				if(this.Post.title.length==0||this.Post.content.length==0)
				{
					uni.showToast({
						icon:'none',
						title:'请输入标题或内容！'
					})
				}
				
				else if(this.Post.title.length<5)
				{
					uni.showToast({
						icon:'none',
						title:'标题太短，请重新输入！'
					})
				}
				else{
					uni.request({
						url:'http://192.168.137.142:8888/forum/createpost',
						method:'POST',
						data:this.Post,
						timeout: 5000,
						success:function(res){
							//注册成功跳转到登录
						
							if(res.data.code == 200){
								uni.showToast({
									title:'发布成功！'
								})
									setTimeout(() => {
								uni.navigateBack({
									url:'/pages/forum/index/index'
								}) 
								},1700);
							}
						},fail:function(){
							console.log("注册失败")
						}
					}) 
					
				}
		
				
				
				
				
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
