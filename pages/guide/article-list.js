

Page({
  data: {
    urlconfig: [{ url: './article-list/content?type=dd', title: '游戏机制科普-驱逐舰', ab: '然而小学生最棒了...' },
    { url: './article-list/content?type=cl', title: '游戏机制科普-轻巡洋舰', ab: '等待，并心怀希望吧...' },
    { url: './article-list/content?type=ca', title: '游戏机制科普-重巡洋舰', ab: '哦，在这里停顿' },
    { url: './article-list/content?type=cv', title: '轻型航空母舰/航空母舰', ab: '哦' }]

  },
  onLoad: function (options) {
    console.log(options)
    var _this = this
    if (options.type == 'list' && options.content == 'guide') {
      _this.setData({
        urlconfig: [{ url: './article-list/content?type=dd', title: '萌新常用知识', ab: '这里是描述...' },
          { url: './article-list/content?type=cl', title: 'SL、炸鱼、偷资源', ab: '这里是描述...' },
          { url: './article-list/content?type=ca', title: '个人的新手攻略', ab: '这里是描述...' },
          { url: './article-list/content?type=cv', title: '舰R百科新人入门', ab: '这里是描述...' }]
      })
    }
  }
})