import {
    areaList
} from '@vant/area-data';

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        targetAreaCode: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        customAreaList: {},
        targetAreaValue: 0
    },

    /**
     * 组件生命周期函数
     */
    lifetimes: {
        attached() {
            let customProvinceList = areaList.province_list;
            let customCityList = areaList.city_list;
            let customCountyList = areaList.county_list;

            if (this.properties.targetAreaCode <= 0) {
                customProvinceList = {
                    440000: '广东省'
                };
                customCityList = {
                    441200: '肇庆市'
                };
                this.setData({
                    targetAreaValue: 441200
                });
            }
            else {
                const targetProvincePrefix = parseInt(this.properties.targetAreaCode / 10000);
                for (let provinceProp in customProvinceList) {
                    const tempProvincePrefix = parseInt(provinceProp / 10000);
                    if (tempProvincePrefix !== targetProvincePrefix) {
                        delete customProvinceList[provinceProp]
                    }
                }
                const targetCityPrefix = parseInt(this.properties.targetAreaCode / 100);
                for (let cityProp in customCityList) {
                    const tempCityPrefix = parseInt(cityProp / 100);
                    if (tempCityPrefix !== targetCityPrefix) {
                        delete customCityList[cityProp]
                    }
                }
                this.setData({
                    targetAreaValue: this.properties.targetAreaCode
                });
            }

            const newCustomAreaList = {
                province_list: customProvinceList,
                city_list: customCityList,
                county_list: customCountyList
            };
            this.setData({
                customAreaList: newCustomAreaList
            });
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        confirmArea(e) {
            const eventDetail = {
                selectedArea: e.detail.values
            };
            const eventOption = {};
            this.triggerEvent('confirmArea', eventDetail, eventOption);
        }
    }
})
