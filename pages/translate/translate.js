// pages/music/music.js
import {
  translate
} from '../../util/http-t.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curLang: 'en',
    query: '',
    trans_result: null,
    showIcon: true,
    langListEn: ['en', 'zh', 'yue', 'jp', 'kor', 'fra', 'de'],
    langList: ['英文', '中文', '粤语', '日语', '韩语', '法语', '德语'],
    index: 0,
  },

  onConfirm: function() {
    if (!this.data.query) {
      return
    }
    translate(this.data.query, {
      from: 'auto',
      to: this.data.curLang
    }).then((res) => {
      this.setData({
        trans_result: res.trans_result
      })
    })
  },

  input: function(event) {
    this.setData({
      query: event.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({
        showIcon: false
      })
    } else {
      this.setData({
        showIcon: true
      })
    }
  },

  clear: function(event) {
    this.setData({
      showIcon: true,
      query: '',
      trans_result: null,
    })
  },

  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
    })
    this.setData({
      curLang: this.data.langListEn[this.data.index]
    })
  }
})