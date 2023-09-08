<template>
	<view class="wrap">
		<u-navbar back-icon-color="#ffffff" title="报到流程" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
		<image class="pic1" style=" width: 400px; " src="/static/chongqingUniversity.jpeg" mode="scaleToFill"></image>
		<view class="content">
			<view class="title">
				学生报到流程
			</view>
			<image class="baodao" src="../../../static/index/baodaoliucheng.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				naviBackground: {
					backgroundImage: 'linear-gradient(45deg, rgb(58, 174, 255), rgb(50,233,255))'
				},
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
    @import "./baodaoliucheng.scss";
</style>
