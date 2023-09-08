<template>
	<view class>
		<!-- v-for="(Post,index) in PostList" :item="Post" :index="index" :key="Post.post_id" -->
		<view class="block">

			<view class="block_show" v-for="(Post,index) in PostList" :item="Post" :index="index" :key="Post.id" @click="toPostDetail(Post.id)">

				<view class="block_up" >
					<view class="image">
						<u-avatar :src="Post.acc_image" size="default"></u-avatar>
					</view>
					<view class="name_time">
						<view class="name">
							{{Post.acc_name}}
						</view>
						<view class="time">
							<text>&nbsp;{{Post.createtime}}</text>
						</view>
					</view>
					
				</view>
				<view class="block_mid">
					<view class="title">
						<text>{{Post.title}}</text>
					</view>
				<u-line color="#ebebeb" style="border-width: 9rpx;"></u-line>
					<view class="content">
						<text>{{Post.content}}</text>
					</view>
				</view>
				<view class="block_down">
					<view class="like">
						<!-- <uni-icons type="heart" color="#cf2a0d"  size="20"></uni-icons>
						<text>{{Post.likecount}}</text> -->
					</view>
					<view class="reply">
						<uni-icons type="chatbubble" color="#cf2a0d"  size="20"></uni-icons>
						<text>{{Post.num}}</text>
					</view>
					
				</view>
			</view>
		</view>
		<view class="container">
			<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
				:direction="direction" @trigger="trigger"  />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type_name: '',
				PostList: [],
				src: 'https://img2.baidu.com/it/u=2341538683,4210600910&fm=253&fmt=auto&app=138&f=JPEG?w=535&h=500',
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
				content: [{
						iconPath: '/static/PostImg.png',
						selectedIconPath: '/static/PostImg.png',
						text: '发帖',
						active: false
					},
					{
						iconPath: '/static/PostMe.png',
						selectedIconPath: '/static/PostMe.png',
						text: '个人中心',
						active: false
					},
				],
				
				
			}
		},
		methods: {
			toPostDetail: function(post_id){
				uni.navigateTo({
					url:'/pages/forum/reply/reply?post_id='+ post_id + '&post_type='+ this.type_name,
				})
			},
			trigger(e) {
				console.log("e:",e);
				if (e.index == 0) {
					uni.navigateTo({
						url: '/pages/forum/addPost/addPost?post_type='+this.type_name,
					})
				}else if(e.index == 1){
					uni.navigateTo({
						url: '/pages/forum/PostMe/PostMe',
					})
				}
				
			
			},
			
			
			
			
		},
		onLoad: function(option) {
			this.type_name = option.type_name;
			console.log("type_name",this.type_name);
		},
		onShow(){
			this.$u.get('http://192.168.137.142:8888/forum/getForumMail?type=' + this.type_name).then(res => {
				//请求成功执行的函数
				console.log("res:",res);
				if (res.code == 200) {
					this.PostList = res.data;
					console.log("replyList:", this.PostList);
				}
			}).catch(err => {
				//请求失败执行的函数
				console.log(err)
			})
		}
		
		
	}
</script>
<style>
	page {
		background:#f3f4f6;
	}
</style>
<style lang="scss" scoped>
	.block {
	
		/* border: 1rpx solid black; */
		
		/* height: 1500rpx; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; //垂直居中
		text-align: center;
		

		/* margin: 30rpx; */
		.block_show {
	
			/* border: 1rpx solid red; */
			/* height: 700rpx; */
			width: 96%;
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;
			/* text-align: center; */
			margin: 10rpx;
			background-color: #f9f9f9;
			border-radius: 18rpx;
			
			box-shadow: 0 1upx 10upx 0upx rgba(22, 22, 10, 0.3);


		}
	}

	.block_up {
		
		box-shadow: 0 1upx 10upx 0upx rgba(22, 22, 10, 0.2);
			background-color: #feffff;	
			border-radius:10px ;
		/* border: 1rpx solid blue; */
		/* height: 150rpx; */
		width: 100%;
		display: flex;
		flex-direction: row;
		flex: 6;
		margin: 10rpx;

		.image {
			/* border: 1rpx solid #42cf2c; */
			/* height: 150rpx; */
			width: 100%;
			flex: 1;
			display: flex;
			/* justify-content: center; */
			//align-items: center; 垂直居中
			text-align: left;
			margin: 12rpx;

		}
		.name_time{
		
			/* border: 1rpx solid #42cf2c; */
			flex: 5;
			.name {
				margin: 10rpx;
				/* border: 1rpx solid #42cf2c; */
				/* height: 150rpx; */
				width: 100%;
				color:#006699;
				display: flex;
				/* justify-content: center; */
				align-items: center;
				text-align: left;
				font-size: 20px;
				font-weight: 700;
			}
			
			.time{
				/* border: 1rpx solid #42cf2c; */ 
				display: flex;
				/* justify-content: center; */
				align-items: center;
				text-align: left;
				font-size: 13px;
				font-weight: 500;
				font-family: 'Times New Roman', Times, serif;
			}
		}

		

	}

	.block_mid {
		background-color: #f9fafa;	
		border-radius: 0px;
		/* border: 1rpx solid #3940cf; */
		height: 255rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* margin: 10rpx; */
		width: 100%;
	box-shadow: 0 1upx 10upx 0upx rgba(0, 0, 56, 0.3);
		.title {
			/* border: 1rpx solid #cf916e; */
			height: 80rpx;
			width: 100%;
			font-size: 22px;
			font-weight: bold;
			display: flex;
			text-align: left;
			padding-left: 30rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow:ellipsis;
		}

		.content {
			/* border: 1rpx solid #cf916e; */
			height: 100rpx;
			width: 100%;
			text-align: left;
			padding-left: 30rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow:ellipsis;
			font-size: 16px;
			font-weight: 500;
			
		}
	}

	.block_down {
		/* border: 1rpx solid #41d926; */
		height: 55rpx;
		width: 100%;
		margin: 15rpx;
		display: flex;
		flex-direction: row;
		text-align: center;
		flex:2;
		.like{
			flex:1;
		}
		.reply{
			flex:1;
		}
	}
	.line{
		/* 
		 border: 1px solid red;*/
		width: 100%;
	}
</style>
