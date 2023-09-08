<template>
	<view>
		<view class="box-top"  v-for="(item,index) in dataArray" :key="index">
			<view class="left-box-top">{{item.mydate}}</view> <!-- 左边 -->
			
			<view class="line" :class="{active:true,none:index==(dataArray.length-1)}"><!-- 中线 -->
				<view class="dot" :class="{active:true}"></view> <!-- 圆点 -->
			</view>
			
			<view class="right-box-top"> <!-- 右边 -->
				<view>{{item.things}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataArray:{
				type:Array
			}
		},
		data() {
			return {
			}
		},
		mounted(){
		},
		methods: {
		}
	}
</script>

<style scoped="scoped" lang="less">
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
		margin: 0 20rpx 0 20rpx;
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
		flex: 1;
		padding: 0 0 20rpx 0;
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
 
