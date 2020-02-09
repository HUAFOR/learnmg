// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"哈哈哈",
    firstname:"kobe",
    lastname:"brant",
    age:20,
    nowtime:new Date().toLocaleString(),
    // 获取当地时间
    isactive:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 定时器
    setInterval(()=>{
      this.setData({
        nowtime:new Date().toLocaleString()      })
    },1000)
  },
  handleswitchcolor(){
    // 小程序不允许dom操作
this.setData({
  isactive:!this.data.isactive
})
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