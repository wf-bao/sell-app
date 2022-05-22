/* 商铺接口模块 */
import request from '@/utils/request';

//获取商铺数据
export const getShopSellerReq = () => {
    return request({
        method: 'get',
        url: '/shop/seller'
    })
}

//获取商品数据
export const getGoodsListReq = () => {
    return request({
        method: 'get',
        url: '/goods/goods_list'
    })
}

//获取评价数据
export const getShopRateReq = () => {
    return request({
        method: 'get',
        url: '/shop/ratings'
    })
}