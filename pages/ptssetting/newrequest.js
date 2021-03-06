const app = getApp()

// pages/ptssetting/newrequest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productionLineIdx: 0,
    productionLines: [
      "碳化一号线",
      "碳化二号线",
      "碳化三号线",
      "碳化四号线",
      "碳化五号线",
    ],
    setModel: false,
    setSpeed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  formSubmit: function(){
  },

  formCancel: function(){
    wx.switchTab({
      url: 'requestlist',
    })
  },

  produnctionLinePicked: function(e){
    this.setData({
      productionLineIdx: e.detail.value
    })
  },

  toggleSetModel: function(e){
    this.setData({
      setModel: e.detail.value
    })
  },

  toggleSetSpeed: function (e) {
    this.setData({
      setSpeed: e.detail.value
    })
  }
})