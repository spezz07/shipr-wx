//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activityMes:'1111111',
    activity:[
      { title: '我是标题一', link:'../actvity/activty?type=1'},
      { title: '我是标题二', link: '../actvity/activty?type=2' },
      { title: '我是标题三', link: '../actvity/activty?type=3' }
    ]
  },
  onLoad: function () {
    var that = this
    //  wx.request({
    //    url: `https://gitee.com/sentsin/layui/raw/master/bower.json`,
    //    dataType:'json',
    //    success: function(res){
    //      console.log(res)
    //      that.setData({
    //        activity: res.data.authors
    //      })
    //    }
    //  })
  },
  onReady: function () {
   
  },
  prviewimg:function(e){
    wx.previewImage({
      urls: ['http://www.jianniang.com/h000/h35/3.7.0%E5%85%AC%E5%91%8A.jpg'],
    })
  }
})
