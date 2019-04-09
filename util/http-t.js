import md5 from './md5.min.js'

const appid = "20190315000277495"
const key = "QOQ4ON4yzg31vyHQx4dr"
const url = "https://api.fanyi.baidu.com/api/trans/vip/translate"

function translate(q,{ from = "auto", to = "en" } = { from: 'auto', to: 'en'}){
  return new Promise((resolve, reject)=> {
    let salt = Date.now()
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url,
      data: {
        q, from, to, appid, salt, sign
      },
      success(res) {
        let data = res.data
        if (data && data.trans_result){
          resolve(data)
        }else{
          reject({
            status: 'error',
            message: '翻译失败'
          })
          wx.showToast({
            title: '翻译失败',
            duration: '3000'
          })
        }
      },
      fail(res){
        reject({
          status: 'error',
          message: '翻译失败'
        })
        wx.showToast({
          title: '网络异常',
          duration: '3000'
        })
      }
    })
  })
}

module.exports = {
  translate: translate
}
