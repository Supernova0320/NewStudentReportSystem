<template>
	<view class="container">
		<u-navbar title="图书馆" title-color="#ffffff" title-size="37" :background="naviBackground"></u-navbar>
		<image class="library" src="/static/school_map/tushuguan.png"></image>
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
	
		page {
			background: #f3f4f6;
		}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
	}

	.library {
		width: 100%;
		height: 18000rpx;
	}
</style>