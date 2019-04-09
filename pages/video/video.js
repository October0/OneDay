// pages/video/video.js
import {
  HTTP
} from '../../util/http-v.js'
const http = new HTTP()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res:null,
    itemList: null,
    video: [],
    playIndex: null,
    hidden: false,
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    http.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/tabs/selected',
      success: (res) => {
        this.setData({
          itemList: res.itemList,
          res: res
        })
        this.filter()
      },
    })
  },
  filter: function() {
    const items = this.data.itemList
    const video = this.data.video
    for (var i = 0; i < items.length; i++) {
      if (items[i].type == 'video') {
        video.push(items[i])
      }
    }
    this.setData({
      video: video
    })
  },

  videoPlay: function(e) {
    const curIdx = e.currentTarget.dataset.index;
    if (this.data.playIndex == null) {
      this.setData({
        playIndex: curIdx
      })
      const videoContext = wx.createVideoContext('video' + curIdx)
      videoContext.play()
    } else {
      const videoContextPrev = wx.createVideoContext('video' + this.data.playIndex)
      if (this.data.playIndex != curIdx){
        videoContextPrev.stop()
      }
      this.setData({
        playIndex: curIdx
      })
      const videoContextCurrent = wx.createVideoContext('video' + curIdx)
      videoContextCurrent.play()
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._showLoading()
    const url = this.data.res.nextPageUrl
    if(url != null){
      http.request({
        url: url,
        success: (res) => {
          this.setData({
            itemList: res.itemList,
            res: res
          })
          this.filter()
        },
      })
      this._hiddenLoading()
    }else{
      this.setData({
        hidden:true
      })
    }
  },
  _showLoading(){
    this.setData({
      loading: false
    })
  },
  _hiddenLoading(){
    this.setData({
      loading: true
    })
  }
})