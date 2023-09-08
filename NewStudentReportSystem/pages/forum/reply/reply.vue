<template>
	<view>
		<view class="uni-padding-wrap">
			<!-- 评论区 start -->
			<view class="uni-comment">
				<view class="uni-comment-list">
					<view class="uni-comment-face">
						<image :src="PostOwner.acc_image" mode="widthFix"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text>{{PostOwner.acc_name}}</text>
						</view>
						<view class="uni-comment-date">
							<text>{{PostOwner.createtime}}</text>
						</view>
						<view class="uni-comment-content">{{PostOwner.content}}</view>
						<view class="uni-comment-date">
							<view class="uni-comment-replay-btn-add">楼主</view>
							<view class="uni-comment-replay-btn" @click="replyOwner()"style="border: 1px solid black">回复</view>
						</view>
						
					</view>
				</view>
			</view> 
			<view>
				<u-line color="black" length="100%"/>
			</view>
			<view class="uni-comment" v-for="(it_reply,index) in replyList" :item="it_reply" :index="index"
				:key="it_reply.id">
				<view class="uni-comment-list">
					<view class="uni-comment-face">
						<image :src="it_reply.acc_image" mode="widthFix"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text>{{it_reply.acc_name}}</text>
						</view>
						<view class="uni-comment-date">
							
						</view>
						<view class="uni-comment-content">{{it_reply.content}}</view>
						<view class="uni-comment-date">
							<view class="uni-comment-replay-btn-add">第{{index+1}}楼</view>
							<view class="uni-comment-replay-btn"><text>{{it_reply.createtime}}</text></view>

						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "评论界面",
				Post_id: "",
				Post_type: '',
				/* Reply:{
						"acc_name": "阿尼亚",
						"acc_image": "https://img2.baidu.com/it/u=2341538683,4210600910&fm=253&fmt=auto&app=138&f=JPEG?w=535&h=500",
						"id": "1",
						"post_id": "3",
						"reply_id": "",
						"acc_id": "4",
						"content": "我也想要一段sweet的恋爱",
						"likecount": 0,
						"createtime": "2023-08-21T09:38:38.000+00:00"
					}, */
				replyList: [],
				PostOwner:{},
			}
		},
		methods: {
			replyOwner:function(){
				uni.navigateTo({
					url:'/pages/forum/addReply/addReply?Post_id='+ this.Post_id,
				})
			}

		},
		/* onLoad: function(option) {
			console.log("option:", option);
			this.Post_id = option.post_id;
			this.Post_type = option.post_type;
			console.log("Post_id:", this.Post_id);
			this.$u.get('http://192.168.137.142:8888/forum/getAllReply?id=' + this.Post_id).then(res_reply => {
				
				//console.log("Post_id:",this.Post_id);
				//请求成功执行的函数
				console.log("replyres:", res_reply);
				console.log("replyPostid", this.Post_id);
				if (res_reply.code == 200) {
					this.replyList = res_reply.data;
					console.log("replyList:", this.replyList);
				}
			}).catch(err_reply => {
				//请求失败执行的函数
				console.log(err_reply)
			})
			this.$u.get('http://192.168.137.142:8888/forum/getPostMail?id=' + this.Post_id).then(res_owner => {
				//console.log("Post_id:",this.Post_id);
				//请求成功执行的函数
				console.log("ownerPostid", this.Post_id);
				console.log("PostOwnerRES", res_owner);
				if (res_owner.code == 200) {
					this.PostOwner = res_owner.data;
					console.log("PostOwner", this.PostOwner);
				}
			}).catch(err_owner => {
				//请求失败执行的函数
				console.log(err_owner)
			})
		} */
		onLoad: function(option) {
			console.log("option:", option);
			this.Post_id = option.post_id;
			this.Post_type = option.post_type;
			console.log("Post_id:", this.Post_id);
		},
		onShow(){
			this.$u.get('http://192.168.137.142:8888/forum/getAllReply?id=' + this.Post_id).then(res_reply => {
				
				//console.log("Post_id:",this.Post_id);
				//请求成功执行的函数
				console.log("replyres:", res_reply);
				console.log("replyPostid", this.Post_id);
				if (res_reply.code == 200) {
					this.replyList = res_reply.data;
					console.log("replyList:", this.replyList);
				}
			}).catch(err_reply => {
				//请求失败执行的函数
				console.log(err_reply)
			})
			this.$u.get('http://192.168.137.142:8888/forum/getPostMail?id=' + this.Post_id).then(res_owner => {
				//console.log("Post_id:",this.Post_id);
				//请求成功执行的函数
				console.log("ownerPostid", this.Post_id);
				console.log("PostOwnerRES", res_owner);
				if (res_owner.code == 200) {
					this.PostOwner = res_owner.data;
					console.log("PostOwner", this.PostOwner);
				}
			}).catch(err_owner => {
				//请求失败执行的函数
				console.log(err_owner)
			})
		}
		

	}
</script>

<style>
	/* comment */
	page {
		background:#f3f4f6;
	}

	.uni-padding-wrap {
		padding: 10upx;
	}

	view {
		font-size: 28upx;
	}

	.uni-comment {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		background-color: #ffffff;
		margin: 6rpx;
		border-radius: 10rpx;
	}

	.uni-comment-list {
		flex-wrap: nowrap;
		padding: 10rpx 0;
		margin: 10rpx 0;
		width: 100%;
		display: flex;
	}

	.uni-comment-face {
		/* border: 1px solid red; */
		padding-left: 10rpx;
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
		overflow: hidden;
	}

	.uni-comment-face image {
		width: 100%;
		border-radius: 100%;
	}

	.uni-comment-body {
		/* border: 1px solid red; */
		width: 100%;
	}

	.uni-comment-top {
		/* border: 1px solid red; */
		line-height: 2em;
		justify-content: space-between;
	}

	.uni-comment-top text {
		font-weight: 700;
		color: #4284c6;
		font-size: 30upx;
	}

	.uni-comment-date {
		/* 
		border: 1px solid blue;; */
		line-height: 40upx;
		flex-direction: row;
		justify-content: space-between;
		display: flex !important;
		flex-grow: 1;
	}

	.uni-comment-date view {
				
		color: #666666;
		font-size: 24upx;
		line-height: 38upx;
	}

	.uni-comment-content {
		line-height: 1.6em;
		font-size: 26upx;
		padding: 8rpx 0;
	}

	.uni-comment-replay-btn {
		background: #FFF;
		font-size: 24upx;
		line-height: 28upx;
		padding: 5rpx 20upx;
		border-radius: 30upx;
		color: #333 !important;
		margin: 0 10upx;
	}
	.uni-comment-replay-btn1 {
		background: #FFF;
		font-size: 22upx;
		line-height: 28upx;
		padding: 5rpx 20upx;
		border-radius: 30upx;
		color: #333 !important;
		margin: 0 10upx;
	}
	

	.uni-comment-replay-btn-add {		
		background: #FFF;
		font-size: 24upx;
		line-height: 28upx;
		padding: 5rpx 20upx;
		border-radius: 30upx;
		color: #af0057 !important;
	}
</style>
