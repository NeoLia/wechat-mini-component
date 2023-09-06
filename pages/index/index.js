const imageUrls = [
    'https://img1.baidu.com/it/u=2488875768,1454762303&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://img2.baidu.com/it/u=1142997926,45054688&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    'https://img0.baidu.com/it/u=3266114238,3321840150&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
    'https://img1.baidu.com/it/u=1264115082,660479506&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    'https://img2.baidu.com/it/u=2763268370,3380605355&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
];

Page({
    data: {
        ifShowAreaSelector: false,
        targetAreaCode: 0,
        imageUrls
    },

    // 小程序生命周期方法
    onLoad() {
        // this.setData({
        //     targetAreaCode: 440000
        // });
    },

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
        // save area info
        console.log("result: ", JSON.stringify(result.detail.selectedArea));
        this.hideAreaSelector();
    }
})
