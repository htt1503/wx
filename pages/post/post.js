import $ from "../tools/api.js"
Page({
  data:{
    post:{},
    comments:[]
  },
  onLoad(options){
    wx.showToast({
      title: '加载中',
      icon: "loading",
      duration: 3000
    });
    $.getTopicById(options.postid,res=>{
      console.log(res.data[0]);
      res.data[0].created=new Date(res.data[0].created*1000);
      this.setData({
        post:res.data[0]
      });
      wx.hideToast();
    });
    $.getRepliesByTopicId(options.postid,res=>{
        this.setData({
          comments:res.data
        })
    })
  },
  navTo(e) {
    wx.navigateTo({
      url: '../userinfo/userinfo?username=' + e.currentTarget.dataset.username
    })
  }
})