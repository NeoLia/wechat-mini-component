Page({
    data: {
        ifShowAreaSelector: false
    },

    // 小程序生命周期方法
    onLoad() {},

    // 事件监听方法
    showAreaSelector() {
        this.setData({
            ifShowAreaSelector: true
        });
    },
    hideAreaSelector() {
        this.setData({
            ifShowAreaSelector: false
        });
    },
    confirmArea(result) {
        console.log('result: ', JSON.stringify(result.detail.selectedArea));
        this.hideAreaSelector();
    }
})
