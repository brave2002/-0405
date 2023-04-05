// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist:['全部','人文关顾','体育精神','职业发展','道德品质','传统文化'],
    //添加active开关
    flag:0
  },
  //点击nav，改变页面内容
  getCon:function(e){
    //获取每个点击元素
    // console.log(e.currentTarget.dataset);
    const index = e.currentTarget.dataset.index
    this.setData({
      flag:index
    })
    //改变内容
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})