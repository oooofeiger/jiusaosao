//app.js
App({
  globalData: {
    userInfo: null,
    themeArr: [{
      id:0,
      path: 'http://qiniu.feiger.com.cn/danlan.jpg',
      buttonColor: '#1aad19',
      textColor: 'cadetblue'
    }, {
      id:1,
      path: 'http://qiniu.feiger.com.cn/dengta.jpg',
      buttonColor: '#1aad19',
      textColor: 'cadetblue'
    }, {
      id:2,
      path: 'http://qiniu.feiger.com.cn/fangwu.jpg',
        buttonColor: '#fff',
        buttonBgr: 'rgba(224, 174, 108, 0.714)',
        textColor: '#c97911',
        plain: false
    }, {
      id:3,
      path: 'http://qiniu.feiger.com.cn/heimao.jpg',
      buttonColor: '#fff',
      buttonBgr: 'rgb(201, 179, 139)',
      textColor: 'cadetblue',
      plain: false,
    }, {
      id:4,
      path: 'http://qiniu.feiger.com.cn/hong.jpg',
      buttonColor: '#7595c4',
      textColor: 'cadetblue'
    }, {
      id:5,
      path: 'http://qiniu.feiger.com.cn/lan.jpg',
      buttonColor: '#1aad19',
      textColor: 'cadetblue'
    }, {
      id:6,
      path: 'http://qiniu.feiger.com.cn/liuxing.jpg',
      buttonColor: '#1aad19',
        textColor: '#fca330'
    }, {
      id:7,
      path: 'http://qiniu.feiger.com.cn/shiren.jpg',
      buttonColor: '#1aad19',
        textColor: '#7c4c03'
    }, {
      id:8,
      path: 'http://qiniu.feiger.com.cn/xinye.jpg',
      buttonColor: '#1aad19',
      textColor: 'cadetblue'
    }, {
      id:9,
      path: 'http://qiniu.feiger.com.cn/yekong.jpg',
        buttonColor: '#fff',
        textColor: '#fff'
    }, {
      id:10,
      path: 'http://qiniu.feiger.com.cn/yunyu.jpg',
        buttonColor: '#d17e01',
        textColor: '#d17e01'
    }],
  },
  onLaunch: function ({shareTicket}) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //打开分享功能
    wx.showShareMenu({
      withShareTicket: true,
      success: res => {
        console.log(res)
      }
    })
    //获取分享的信息
    // console.log(shareTicket)
    shareTicket && wx.getShareInfo({
      shareTicket: shareTicket,
      success: res => {
        console.log(res);
      }
    })

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res)
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  
})