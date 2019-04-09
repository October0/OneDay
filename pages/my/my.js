// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null
  },
  onShow(options){
    this.userAuthorized()
  },
  userAuthorized() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    if(userInfo){
      this.setData({
        authorized: true,
        userInfo
      })
    }
  }
})