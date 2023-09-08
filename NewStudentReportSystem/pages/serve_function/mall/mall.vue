<template>
	<view class="wrap">
		<!--登录后-->
		<!--登录后-->
		<!--登录后-->
		<view v-if="isLogin">
			<view class="swiper_box">
				<u-swiper :list="list" height="400" :title="title"></u-swiper>
			</view>
			<view class="title_box">
				商品列表
			</view> 
			<!--商品展示页面-->
			<view class="goods_box">
				<view class="goods_item">
					<u-image class="img_box" border-radius="15" height="300rpx" :src="Yijia_image"></u-image>
					<view class="goods_content">
						<view class="goods_name">
							商品名 衣架
						</view>
						<view class="price">
							价格 10元
						</view>
						<u-number-box class="goods_num_box" v-model="initValue.Yijia" @change="valYijia"></u-number-box>
					</view>
				</view>
				<view class="goods_item">
					<u-image class="img_box" border-radius="15" height="300rpx" :src="Tong_image"></u-image>
					<view class="goods_content">
						<view class="goods_name">
							商品名 塑料桶
						</view>
						<view class="price">
							价格 10元
						</view>
						<u-number-box class="goods_num_box" v-model="initValue.Tong" @change="valTong"></u-number-box>
					</view>
				</view>
				<view class="goods_item">
					<u-image class="img_box" border-radius="15" height="300rpx" :src="Chuang_image"></u-image>
					<view class="goods_content">
						<view class="goods_name">
							商品名 床上三件套
						</view>
						<view class="price">
							价格 100元
						</view>
						<u-number-box class="goods_num_box" v-model="initValue.Chuang"
							@change="valChuang"></u-number-box>
					</view>
				</view>
				<view class="goods_item">
					<u-image class="img_box" border-radius="15" height="300rpx" :src="Muyu_image"></u-image>
					<view class="goods_content">
						<view class="goods_name">
							商品名 沐浴露套装
						</view>
						<view class="price">
							价格 70元
						</view>
						<u-number-box class="goods_num_box" v-model="initValue.Muyu" @change="valMuyu"></u-number-box>
					</view>
				</view>
				<view class="goods_item">
					<u-image class="img_box" border-radius="15" height="300rpx" :src="Zhi_image"></u-image>
					<view class="goods_content">
						<view class="goods_name">
							商品名 卷纸
						</view>
						<view class="price">
							价格 30元
						</view>
						<u-number-box class="goods_num_box" v-model="initValue.Zhi" @change="valZhi"></u-number-box>
					</view>
				</view>
			</view>

			<!--点击购物车查看已购商品-->
			<u-popup v-model="showPop" mode="bottom" width="500rpx" height="600px" :closeable="true">
				<view class="goods_title">
					已预订商品列表
				</view>
				<view class="goods_box">
					<view class="goods_item" v-if="isHanger">
						<u-image class="img_box" height="300rpx" width="200rpx" border-radius="15"
							:src="Yijia_image"></u-image>
						<view class="goods_content">
							<view class="goods_name">
								商品 衣架
							</view>
							<view class="number">
								数量 {{stuGoods.hangernumChange}}
							</view>
							<view class="price">
								小计 ￥{{stuGoods.hangernumChange*10}}
							</view>
						</view>
					</view>
					<view class="goods_item" v-if="isTong">
						<u-image class="img_box" height="300rpx" width="200rpx" border-radius="15"
							:src="Tong_image"></u-image>
						<view class="goods_content">
							<view class="goods_name">
								商品 塑料桶
							</view>
							<view class="number">
								数量 {{stuGoods.bucketnumChange}}
							</view>
							<view class="price">
								小计 ￥{{stuGoods.bucketnumChange*10}}
							</view>
						</view>
					</view>
					<view class="goods_item" v-if="isChuang">
						<u-image class="img_box" height="300rpx" width="200rpx" border-radius="15"
							:src="Chuang_image"></u-image>
						<view class="goods_content">
							<view class="goods_name">
								商品 床上三件套
							</view>
							<view class="number">
								数量 {{stuGoods.bednumChange}}
							</view>
							<view class="price">
								小计 ￥{{stuGoods.bednumChange*100}}
							</view>
						</view>
					</view>
					<view class="goods_item" v-if="isMuyu">
						<u-image class="img_box" height="300rpx" width="200rpx" border-radius="15"
							:src="Muyu_image"></u-image>
						<view class="goods_content">
							<view class="goods_name">
								商品 沐浴露套装
							</view>
							<view class="number">
								数量 {{stuGoods.showernumChange}}
							</view>
							<view class="price">
								小计 ￥{{stuGoods.showernumChange*70}}
							</view>
						</view>
					</view>
					<view class="goods_item" v-if="isZhi">
						<u-image class="img_box" height="300rpx" width="200rpx" border-radius="15"
							:src="Zhi_image"></u-image>
						<view class="goods_content">
							<view class="goods_name">
								商品 卷纸
							</view>
							<view class="number">
								数量 {{stuGoods.papernumChange}}
							</view>
							<view class="price">
								小计 ￥{{stuGoods.papernumChange*30}}
							</view>
						</view>
					</view>
					<view class="sum">
						总计 ￥{{this.sumPrice}}
					</view>
				</view>
			</u-popup>

			<!--点击预订后弹窗确认信息-->
			<u-modal v-model="show" :show-cancel-button="true" :mask-close-able="true" title="确认信息" @confirm="submit()">
				<view class="confirmInform">
					总计： {{this.sumPrice}}元
				</view>
				<view class="confirmInform">
					你预订的商品将于开学送至 竹四{{this.user.room}}寝室
				</view>
			</u-modal>
			<view>
				<u-toast ref="uToast" />
			</view>

			<!--底部-->
			<view class="navigation">
				<view class="left">
					<view class="item car" @click="cart()">
						<u-badge class="car-num" :count="numGoods" type="error" :offset="[-3, -6]"></u-badge>
						<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">购物车</view>
					</view>
				</view>
				<view class="sum">
					总计 ￥{{this.sumPrice}}
				</view>
				<view class="right">
					<view class="buy btn u-line-1" @click="confirm()">立即预订</view>
				</view>
			</view>
		</view>

		<!--登录前-->
		<!--登录前-->
		<!--登录前-->
		<view v-else>
			<view class="top"></view>
			<view class="content">
				<view class="title">欢迎登录商城</view>
				<u-form ref="validateFormRef" :model="user">
					<u-form-item label="学号" prop="id" :border-bottom="false">
						<u-input class="u-border-bottom" v-model="user.id" placeholder="请输入学号" />
					</u-form-item>
					<u-form-item label="密码" prop="password" :border-bottom="false">
						<u-input type="password" class="u-border-bottom" v-model="user.password" placeholder="请输入密码" />
					</u-form-item>
				</u-form>
				<u-button type="success" :ripple="true" ripple-bg-color="#eef2f9" class="loginBtn" @click="login()">
					<view class="btn_text">登录</view>
				</u-button>
				<view class="text">
					如果你是第一次登录，请先注册！
				</view>
				<view class="alternative">
					<view class="password" @click="toRegister()">注册</view>
					<view class="issue" @click="forgetpassword()">忘记密码</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				user: {
					id: '', //user对象的属性
					password: ''
				},
				list: [{
						image: "/static/mall_image/kaixue.png",
						title: "校园商城提供开学送货到寝服务"
					},
					{
						image: "/static/mall_image/dazhe.png",
						title: "校园商城提供开学送货到寝服务"
					}
				],
				student: {
					id: '',
					tele: '',
					addr: ''
				},
				stuGoods: {
					id: '',
					hangernumChange: 0,
					bucketnumChange: 0,
					bednumChange: 0,
					showernumChange: 0,
					papernumChange: 0
				},
				isHanger: false,
				isTong: false,
				isChuang: false,
				isMuyu: false,
				isZhi: false,
				title: true,
				width: "50rpx",
				Yijia_image: "/static/mall_image/Yijia.jpg",
				Tong_image: "/static/mall_image/Tong.jpg",
				Chuang_image: "/static/mall_image/Chuang.jpg",
				Muyu_image: "/static/mall_image/Muyu.jpg",
				Zhi_image: "/static/mall_image/Zhi.jpg",
				initValue: {
					Yijia: 0,
					Tong: 0,
					Chuang: 0,
					Muyu: 0,
					Zhi: 0
				},
				title: true,
				show: false,
				showPop: false,
				numGoods: 0,
				sumPrice: 0,
				width: "50rpx"
			}
		},
		onShow() {
			//1.从storage中获取用户信息
			let user = uni.getStorageSync("user")
			//2.判断用户是否不为空，说明用户登录了，如果为空说明用户没有登录
			if (user) { //如果用户信息不为空，显示个人中心
				this.isLogin = true
				this.user = user
			}
		},
		methods: { 
			submit() {
				this.stuGoods.id = this.user.id
				uni.request({
					url: '/api/market/updateGoodsNum',
					method: 'PUT',
					data: this.stuGoods,
					timeout: 5000,
				})
				this.$refs.uToast.show({
					title: '下单成功，商品将送至宿舍，请届时付款',
					isTab: 'true',
					url: '/pages/serve/serve'
				})
			},
			confirm: function() {
				this.show = true
			},
			cart() {
				this.showPop = true
			},
			valYijia(e) {
				if (e.value == 0) {
					this.isHanger = false
				} else {
					this.isHanger = true
				}
				this.numGoods = this.numGoods + e.value - this.stuGoods.hangernumChange
				this.sumPrice = this.sumPrice + 10 * (e.value - this.stuGoods.hangernumChange)
				this.stuGoods.hangernumChange = e.value

			},
			valTong(e) {
				if (e.value == 0) {
					this.isTong = false
				} else {
					this.isTong = true
				}
				this.numGoods = this.numGoods + e.value - this.stuGoods.bucketnumChange
				this.sumPrice = this.sumPrice + 10 * (e.value - this.stuGoods.bucketnumChange)
				this.stuGoods.bucketnumChange = e.value
			},
			valChuang(e) {
				if (e.value == 0) {
					this.isChuang = false
				} else {
					this.isChuang = true
				}
				this.numGoods = this.numGoods + e.value - this.stuGoods.bednumChange
				this.sumPrice = this.sumPrice + 100 * (e.value - this.stuGoods.bednumChange)
				this.stuGoods.bednumChange = e.value
			},
			valMuyu(e) {
				if (e.value == 0) {
					this.isMuyu = false
				} else {
					this.isMuyu = true
				}
				this.numGoods = this.numGoods + e.value - this.stuGoods.showernumChange
				this.sumPrice = this.sumPrice + 70 * (e.value - this.stuGoods.showernumChange)
				this.stuGoods.showernumChange = e.value
			},
			valZhi(e) {
				if (e.value == 0) {
					this.isZhi = false
				} else {
					this.isZhi = true
				}
				this.numGoods = this.numGoods + e.value - this.stuGoods.papernumChange
				this.sumPrice = this.sumPrice + 30 * (e.value - this.stuGoods.papernumChange)
				this.stuGoods.papernumChange = e.value
			},
			forgetpassword: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/RetrievePassword/RetrievePassword1/RetrievePassword1'
				})
			},
			toRegister: function() {
				uni.navigateTo({
					url: '/pages/PersonalCenter_function/register/register'
				})
			},
			//登录的方法
			login: function() {
				//1.验证表单是否通过了验证
				this.$refs.validateFormRef.validate(valid => {
					if (valid) {
						//2.向后端发起请求，实现登录，如果登录成功跳转到个人中心页面，显示信息
						uni.request({
							url: 'http://192.168.137.142:8888/student/login',
							data: this.user,
							method: 'GET',
							Timeout: 5000,
							success: (res) => {
								//3.将用户的数据储存到storeage中
								if (res.data.code == 200 && res.data.message == '学生登录成功') {
									uni.setStorageSync("user", res.data.data)
									//4.返回到个人页面中心
									this.isLogin = true
								} else if (res.data.code == 300) {
									//未注册
									uni.showModal({
										title: '登录失败',
										content: '你还未注册，请先注册！\n（点击确定跳转到注册界面）',
										success: function(res) {
											if (res.confirm) {
												uni.navigateTo({
													url: '/pages/PersonalCenter_function/register/register'
												})
											}
										}
									});
								} else {
									//登录失败
									this.$u.toast('用户名或密码错误')
								}
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f3f4f6;
	}

	@import "./login.scss";
	@import "./mall.scss";
</style>