
var WxParse = require('../../../wxParse/wxParse.js');
Page({
  data: {
    article: {},
    articleimg: '',
    title: '标题一',
    author: '作者一',
    author_url: '',
    time: '2018-4-9'
  },
  onLoad: function (options) {
    var that = this
    // wx.request({
    //   url: `https://job0ami9.qcloud.la/weapp/game-runtime/?type=${options.type}`,
    //   dataType: 'json',
    //   success: function (res) {
    //     let data = res.data.data.msg[0]
    //     that.setData({
    //       article: WxParse.wxParse('article', 'markdown', data.content, that, 16),
    //       articleimg: data.image,
    //       title: data.title,
    //       time: data.release_time,
    //       author:data.author,
    //       author_url:data.author_url
    //     })
    //   }
    // })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  author: function () {
    var that = this
    wx.setClipboardData({
      data: that.data.author_url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '已复制原文地址',
              icon: 'success',
              duration: 3000
            })
          }
        })
      }
    })

  }
})