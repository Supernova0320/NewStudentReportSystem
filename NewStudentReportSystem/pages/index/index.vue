<template>
	<view class="page">
		<u-navbar :is-back="false" title="重庆大学" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
		<view class="swiper_box">
			<u-swiper :list="list" height="350" :title="title" :effect3d="effect3d" :indicator-pos="indicatorPos"
				:mode="mode" :interval="3000"></u-swiper>
		</view>
		<view class="content">
			<view class="cont">
				<view class="function_box">
					<view class="function" @click="baodaoxuzhi()">
						<image class="serve_icon" src="/static/baodaoxuzhi.png"></image>
						<view class="serve_text">
							报道须知
						</view>
					</view>
					<view class="function" @click="baodaoliucheng()">
						<image class="serve_icon" src="/static/liucheng.png"></image>
						<view class="serve_text">
							报道流程
						</view>
					</view>
					<view class="function" @click="jinfangzhapian()">
						<image class="serve_icon" src="/static/tishi.png"></image>
						<view class="serve_text">
							谨防诈骗
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
				naviBackground: {
					backgroundImage: 'linear-gradient(45deg, rgb(58, 174, 255), rgb(50,233,255))'
				},
				list: [{
						image: 'https://img0.baidu.com/it/u=3469194442,2734417023&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
						title: '耐劳苦、尚俭朴'
					},
					{
						image: 'https://img1.baidu.com/it/u=2954443709,3456870179&fm=253&fmt=auto&app=120&f=JPEG?w=1026&h=684',
						title: '勤学业、爱国家'
					},
					{
						image: 'https://img2.baidu.com/it/u=2199260322,3015006530&fm=253&fmt=auto&app=120&f=JPEG?w=751&h=500',
						title: '重庆大学'
					}
				],
				title: true,
				mode: 'round',
				indicatorPos: 'bottomCenter',
				effect3d: true,
				//轮播图结束,

			}
		},
		onLoad() {

		},
		methods: {
			baodaoxuzhi: function() {
				uni.navigateTo({
					url: "/pages/index_function/baodaoxuzhi/baodaoxuzhi"
				})
			},
			jinfangzhapian: function() {
				uni.navigateTo({
					url: "/pages/index_function/jinfangzhapian/jinfangzhapian"
				})
			},
			baodaoliucheng: function() {
				uni.navigateTo({
					url: "/pages/index_function/baodaoliucheng/baodaoliucheng"
				})
			}
		}

	}
</script>
<style>
	page {
		background: #f3f4f6;
	}
</style>

<style lang="scss" scoped>
	@import "./index.scss";
</style>