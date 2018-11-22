//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    info:null,
    loadingHidden: true,
    currentTheme:null,
  },
  longTap: function(){
    let itemList = ['固定当前主题'];
    let themeId = wx.getStorageSync('themeId')
    console.log(themeId);
    if(themeId){
      itemList.push('取消固定当前主题')
    }
    console.log(itemList)
    wx.showActionSheet({
      itemList: itemList,
      success: res=>{
        if(res.tapIndex === 0){
          wx.setStorageSync('themeId', this.data.currentTheme.id);
          wx.showToast({
            title: '设置成功',
          })
          console.log(wx.getStorageSync('themeId'))
        }else if(res.tapIndex === 1){
          wx.removeStorageSync('themeId');
          wx.showToast({
            title: '取消成功',
          })
          console.log(wx.getStorageSync('themeId'))
        }
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    this.setData({
      loadingHidden: false
    })
    wx.scanCode({
      success: res => {
        console.log(res);
        this.setData({
          info: res.result,
          loadingHidden: true
        })
      },
      fail: res => {
        console.log(res);
        this.setData({
          info: "扫描失败请重试",
          loadingHidden: true
        })
      }
    })
  },
  onLoad: function () {
    const menu = wx.getMenuButtonBoundingClientRect()
    console.log(menu)   

    //随机主题
    this.getCurrentTheme(wx.getStorageSync('themeId'));

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getCurrentTheme: function(id){
    const num = id ? id : Math.floor(Math.random() * app.globalData.themeArr.length);//随机数
    console.log(num);
    this.setData({
      currentTheme: app.globalData.themeArr[num]
    })
  },
  handleImageLoad: function(e) {
    console.log(e.detail);
    // wx.downloadFile({
    //   url: this.data.currentTheme.path,
    //   success: res => {
    //     var downloadUrl = res.tempFilePath;
    //     wx.saveFile({
    //       tempFilePath: downloadUrl,
    //       success: res => {
    //         var savePath = res.savedFilePath;
    //         wx.setStorage({
    //           key: 'themeImg'+this.data.currentTheme.id,
    //           data: savePath,
    //           success: res => {
    //             console.log(wx.getStorage({
    //               key: 'themeImg' + this.data.currentTheme.id,
    //             }))
    //           }
    //         })
    //       }
    //     })
    //   }
    // })
  },
  handleImageErr: function(e){
    console.log(e.detail);
    this.setData({
      currentTheme: null
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
