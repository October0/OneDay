// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: '/images/icon/heart-r.png',
    noSrc: '/images/icon/heart.png',
    like: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      this.setData({
        like: !this.data.like
      })
    }
  }
})
