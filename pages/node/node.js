import $ from '../tools/api.js';
Page({
  data:{
    nodes:[]
  },
  onLoad(){
    $.getAllNodes(res=>{
      this.setData({
        nodes:res.data
      })
    })
  },
  navTo(e) {
    wx.navigateTo({
      url: '../nodeinfo/nodeinfo?nodeid=' + e.currentTarget.dataset.id,
    })
  }
})