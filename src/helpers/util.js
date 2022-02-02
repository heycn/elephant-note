// 格式化日期
export function friendlyDate(dateStr) {
  let dateObj = typeof dateStr === 'object'
    ? dateStr
    : new Date(dateStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let space = now - time // 时间差
  let str = ''

  switch (true) {
    case space < 60000:
      str = '刚刚'
      break
    case space < 1000 * 3600:
      str = Math.floor(space / 60000) + '分钟前'
      break
    case space < 1000 * 3600 * 24:
      str = Math.floor(space / (1000 * 3600)) + '小时前'
      break
    default:
      str = Math.floor(space / (1000 * 3600 * 24)) + '天前'
      break
  }
  return str
}