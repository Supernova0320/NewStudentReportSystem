<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">已预订商品</view>
			<view class="goods_box">
				<view class="goods_item" v-if="isHanger">
					<view class="img_box">
						<u-image border-radius="15" height="150rpx" :src="Yijia_image"></u-image>
					</view>
					<view class="goods_content">
						<view class="goods_name">
							商品 衣架
						</view>
						<view class="number">
							数量 {{stuGoods.hangernum}}
						</view>
						<view class="price">
							小计 ￥{{stuGoods.hangernum*10}}
						</view>
					</view>
				</view>
				<view class="goods_item" v-if="isTong">
					<view class="img_box">
						<u-image border-radius="15" height="150rpx" :src="Tong_image"></u-image>
					</view>
					<view class="goods_content">
						<view class="goods_name">
							商品 塑料桶
						</view>
						<view class="number">
							数量 {{stuGoods.bucketnum}}
						</view>
						<view class="price">
							小计 ￥{{stuGoods.bucketnum*10}}
						</view>
					</view>
				</view>
				<view class="goods_item" v-if="isChuang">
					<view class="img_box">
						<u-image border-radius="15" height="150rpx" :src="Chuang_image"></u-image>
					</view>
					<view class="goods_content">
						<view class="goods_name">
							商品 床上三件套
						</view>
						<view class="number">
							数量 {{stuGoods.bednum}}
						</view>
						<view class="price">
							小计 ￥{{stuGoods.bednum*100}}
						</view>
					</view>
				</view>
				<view class="goods_item" v-if="isMuyu">
					<view class="img_box">
						<u-image border-radius="15" height="150rpx" :src="Muyu_image"></u-image>
					</view>
					<view class="goods_content">
						<view class="goods_name">
							商品 沐浴露套装
						</view>
						<view class="number">
							数量 {{stuGoods.showernum}}
						</view>
						<view class="price">
							小计 ￥{{stuGoods.showernum*70}}
						</view>
					</view>
				</view>
				<view class="goods_item" v-if="isZhi">
					<view class="img_box">
						<u-image border-radius="15" height="150rpx" :src="Zhi_image"></u-image>
					</view>
					<view class="goods_content">
						<view class="goods_name">
							商品 卷纸
						</view>
						<view class="number">
							数量 {{stuGoods.papernum}}
						</view>
						<view class="price">
							小计 ￥{{stuGoods.papernum*30}}
						</view>
					</view>
				</view>
				<view class="sum">
					总计 ￥{{this.sumPrice}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Yijia_image: "/static/mall_image/Yijia.jpg",
				Tong_image: "/static/mall_image/Tong.jpg",
				Chuang_image: "/static/mall_image/Chuang.jpg",
				Muyu_image: "/static/mall_image/Muyu.jpg",
				Zhi_image: "/static/mall_image/Zhi.jpg",
				isHanger: false,
				isTong: false,
				isChuang: false,
				isMuyu: false,
				isZhi: false,
				stuGoods: {},
				stuMes: {},
				sumPrice: 0,
			}
		},
		onShow() {
			let user = uni.getStorageSync("user")
			uni.request({
				url: '/api/market/getGoodsNum',
				method: 'GET',
				data: user,
				timeout: 5000,
				success: (res) => {
					this.stuGoods = res.data.data[0]
					if (this.stuGoods.hangernum != 0) {
						this.isHanger = true
						this.sumPrice += 10 * this.stuGoods.hangernum
					}
					if (this.stuGoods.bucketnum != 0) {
						this.isTong = true
						this.sumPrice += 10 * this.stuGoods.bucketnum
					}
					if (this.stuGoods.bednum != 0) {
						this.isChuang = true
						this.sumPrice += 100 * this.stuGoods.bednum
					}
					if (this.stuGoods.showernum != 0) {
						this.isMuyu = true
						this.sumPrice += 70 * this.stuGoods.showernum
					}
					if (this.stuGoods.papernum != 0) {
						this.isZhi = true
						this.sumPrice += 30 * this.stuGoods.papernum
					}
				}
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import './myOrder.scss';
</style>