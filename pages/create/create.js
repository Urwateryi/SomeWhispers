Page({
  data: {
    count: 1
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})