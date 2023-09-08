<template>
	<view class="wrap">
		<u-navbar back-icon-color="#ffffff" title="谨防诈骗" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
		<image class="pic1" style=" width: 400px; " src="/static/chongqingUniversity.jpeg" mode="scaleToFill"></image>
		<view class="content">
			<view class="title">
				开学季：提高预防电信诈骗意识
			</view>
			<view class="para">
				随着互联网科技快速发展，依托互联网手段进行诈骗的现象层出不穷。诈骗黑手频频伸向防诈骗意识薄弱的老年人和青少年学生群体，给这些群体造成财产损失。开学季将至，大学生群体往往因为手握学费、生活费，但是又缺乏生活经验，辨识力低，这个时候更容易成为诈骗分子重点瞄准的对象。因此，大学生应主动了解学习预防网络电信诈骗常识，提高防诈骗意识。
			</view>
			<view class="para">
				面对花样繁多的网络电信诈骗，大学生该如何应对呢？一是沉着冷静，遇事不慌。不要被花言巧语和“同情心”所迷惑，收到借钱的消息之后要联系本人进行核实，任何短信和社交软件发来的借钱信息都不可轻信；二是避免好奇，巧识伪装。当收到各式各样的网页链接和安装包时谨慎点击，防止个人信息泄露和手机被植入病毒从而造成财产损失；三是抵制诱惑，勿贪便宜。对于意外飞来的“横财”、“好运”一定不要心动，克服贪占便宜的心理，就不会被诈骗分子所利用，自己的财产也才有保障。要时刻牢记没有免费的午餐，贪小便宜吃大亏；四是信息保密，勿信生人。做好个人及家庭信息保密工作，尤其对网上需要完整了解个人及家庭联系方式的信息要格外留心。对于来历不明、未经证实的虚假信息不要轻信，不要盲目，不要慌乱。收到非专业客服电话发送的有关银行卡消费短信，不要回复和向其询问。如果不幸被骗子得逞，要尽快采取应对措施，避免损失进一步扩散。确认被骗后，及时向学校保卫处和公安机关报告。消除顾虑，不要产生自己受骗后丢人的思想。不去报案就会使得骗子更加猖獗，继续危害他人。注意收集相关信息和相关证据，积极协助破案，最大限度挽回损失。
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
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "./jinfangzhapian.scss";
</style>