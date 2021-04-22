/**
 * 将给定的array中的k、v键转化为这里执行的kv，key、label
 * @param item
 * @param kName
 * @param vName
 * @returns {[]}
 */
export const kvMap = (item, kName, vName) => {
  const arr = []
  for (const o of item) {
    arr.push({ key: o[kName], label: o[vName] })
  }
  return arr
}

/**
 * 如果给的参数是字符串，会转化成json对象
 * @param str
 * @returns {any}
 */
export const toJson = (str) => {
  if (str && typeof str === 'string') {
    try {
      return JSON.parse(str)
    } catch (err) {
      return str
    }
  }
  return str
}

/*
  格式化时间
*/
export function parseTime (time, dateFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = dateFormat || '{y}-{m}-{d} {h}:{i}:{s}'

  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }

  // str.replace()方法返回一个由替换值替换部分或所有的模式（pattern）匹配项后的新字符串。
  // 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
  // result（必须的） 是通过正则匹配到的字符串，key是匹配到的正则的数据，offset是匹配到的子字符串在原字符串中的偏移量，source代表源数据(即format)
  const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key, offset, source) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return timeStr
}
