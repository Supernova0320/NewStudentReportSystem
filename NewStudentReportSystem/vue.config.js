module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: "http://192.168.137.142:8888",
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
	}
}