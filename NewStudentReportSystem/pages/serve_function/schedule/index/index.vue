<template>
	<view class="content">
			<view class="top"></view>
			<view class="topp">
		<view class="title1">
		我的日程
				</view>
				</view>
		<view class="toppp">
			<view>
			<view class="box-top"  v-for="(item,index) in dataArray" :key="index" v-model='index'>
				<view class="left-box-top">{{item.mydate}}</view> <!-- 左边 -->
				
				<view class="line" :class="{active:true,none:index==(dataArray.length-1)}"><!-- 中线 -->
					<view class="dot" :class="{active:true}"></view> <!-- 圆点 -->
				</view>
				<view class="right-box-top"> <!-- 右边 -->
					<view class="title" @click="description(index)">{{item.things}}</view>
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
				dataArray:[],
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
							text: '添加',
							active: false
						}
					]
			}
		},
		onLoad:function(option) {
			
	this.$u.get('http://192.168.137.142:8888//schedule/getschedule/'+option.id).then(res=>{
		if(res.code==200){
			this.dataArray=res.data
				uni.setStorageSync("dataArray",res.data)
		}
	}).catch(err=>{
		console.log(err)
	})
		},
		methods: {
description:function(index){

	console.log("index",index)
	uni.navigateTo({
		url:'/pages/serve_function/schedule/description/description?count='+index
	})
},
trigger() {
					uni.navigateTo({
						url: '/pages/serve_function/calender/calender'
					})
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	page {
	background: #f3f4f6;
	}
.content{

		position: relative;
		height: 100vh;
}
.top {
		height: 12%;
		background-color: #3ac4ff;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}
	.topp {
	top: 3%;
	position: absolute;
	width: 90%;
	left: 5%;
	right: 5%;
	padding: 10rpx;
		}
		.toppp{
			top: 22%;
			position: absolute;
			width: 90%;
			left: 5%;
			right: 5%;
			padding: 30rpx;
			background-color: white;
			border-radius: 30rpx;
			box-shadow: 9px 9px 6px #e3e3e3;
		}
	.title1{
		color:#000000;
		text-align: center;//字体居中
		font-size: 60rpx;//字体大小
		font-weight: 700;//字体颜色深浅
		display: flex;
		flex-direction: row;
		border-radius: 35rpx;
		margin:30rpx;
		padding:35rpx 180rpx;
		background:#ffffff;
		box-shadow: 0 1upx 10upx 0upx rgba(0, 0, 150, .2);
	}
.box-top{
	
	width: 100%;
	min-height: 120rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	.left-box-top{
		width: 180rpx;
		text-align: center;
		color: rgba(198,198,198,1);
		font-size: 20rpx;
	}
	.line{
		width: 4rpx;	
		background-color: rgba(228,231,237,1);
		margin: 12rpx 35rpx -12rpx 30rpx;
		.dot{
			width: 20rpx;
			height: 20rpx;
			background-color: rgba(228,231,237,1);
			border-radius: 50%;
			position: relative;
			left: -10rpx;
	
		}
	}
	.right-box-top{
		font-size: 17px;
		font-weight: 700;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		flex: 1;
		padding: -10rpx 0 20rpx 0;
	}
}
//激活元素
.active{
	background-color: rgba(44,143,233,1) !important;
}
// 隐藏元素
.none{
	background-color: rgba(0,0,0,0) !important;
}
</style>