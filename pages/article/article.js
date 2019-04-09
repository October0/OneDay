// pages/article/article.js
import {
  HTTP
} from '../../util/http.js'
const http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: null,
    text: '',
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    http.request({
      url: 'today?dev=1',
      success: (res) => {
        this.setData({
          article: res.data,
          text: res.data.content
        })
      }
    })
  },

  random: function(event) {
    http.request({
      url: 'random?dev=1',
      success: (res) => {
        this.setData({
          article: res.data,
          text: res.data.content
        })
      }
    })
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },

  hidden: function(event) {
    this.setData({
      show: true
    })
  }
})