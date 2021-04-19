module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置vant自动按需引入
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }]
  ]
}
