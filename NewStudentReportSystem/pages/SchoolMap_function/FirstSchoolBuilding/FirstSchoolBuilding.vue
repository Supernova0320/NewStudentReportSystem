<template>
	<view class="container">
		<u-navbar title="教学楼" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
			<image class="first_building" src="/static/school_map/jiaoxuelou.png"></image>
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
	.first_building{
		width: 800rpx;
		height:18600rpx;
	}
</style>