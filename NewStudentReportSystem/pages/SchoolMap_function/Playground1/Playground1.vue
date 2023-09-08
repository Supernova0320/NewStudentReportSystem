<template>
	<view class="container">
		<u-navbar title="第一运动场" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
			<image class="first_building" src="/static/school_map/yundongchang.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				naviBackground: {
					backgroundImage: 'linear-gradient(45deg, rgb(58, 174, 255), rgb(50,233,255))'
				},
			};
		}
	};
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
	}
	.first_building{
		width: 800rpx;
		height: 16100rpx;
	}
</style>