// rem等比适配配置文件
const baseSize = 37.5 // 基准大小, 要与postcss.config.js文件中的rootValue保持一致

function setToRem () {
  const scale = document.documentElement.clientWidth / 375;
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

// 初始化
setToRem()

// 监听窗口大小重新设置rem
window.onresize = function () {
  console.log('我执行了')
  setToRem()
}
