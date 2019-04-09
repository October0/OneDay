App({
  onLaunch: function() {
    this.globalData.curLang = wx.getStorageSync("curLang") || this.globalData.langList[0]
  },
  globalData:{
    curLang: {},
    langList: [
      {
        'lang': 'en',
        'index': 0,
        'chinese': '英文'
      },
      {
        'lang': 'zh',
        'index': 1,
        'chinese': '中文'
      }, {
        'lang': 'yue',
        'index': 2,
        'chinese': '粤语'
      }, {
        'lang': 'jp',
        'index': 3,
        'chinese': '日语'
      }, {
        'lang': 'kor',
        'index': 4,
        'chinese': '韩语'
      }, {
        'lang': 'fra',
        'index': 5,
        'chinese': '法语'
      }, {
        'lang': 'de',
        'index': 6,
        'chinese': '德语'
      }
    ]
  }
})