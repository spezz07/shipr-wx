// pages/actvity/activty.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    articleimg: '',
    title: '标题一',
    author: '作者一',
    author_url: '',
    time: '2018-4-9'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    if (options.type == 1) {   
      _this.setData({
        title: '标题一',
        author: '作者一',
        time:'2018-4-9'
      })
    }else if (options.type == 2) {    
      _this.setData({
        title: '标题二',
        author: '作者二',
        time:'2018-4-10'
      })
    }
    else if (options.type == 3) { 
      _this.setData({
        title: '标题三',
        author: '作者三',
        time: '2018-4-11'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})