import {request} from './require'


export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}




export class Goods{
  constructor(itemInfo,columns,services){
  this.title=itemInfo.title;
  this.desc=itemInfo.desc;
  this.oldPrice=itemInfo.oldPrice;
  this.lowNowPrice=itemInfo.lowNowPrice;
  this.price=itemInfo.price;
  this.discountBgColor=itemInfo.discountBgColor;
  this.discountDesc=itemInfo.discountDesc;
  this.realPrice= itemInfo.lowNowPrice;

  this.columns=columns;

  this.services=services;
  }
}

export class Shop {
  constructor(shopInfo){
   this.logo= shopInfo.shopLogo;
   this.score=shopInfo.score;
   this.goods=shopInfo.cGoods;
   this.sells=shopInfo.cSells;
   this.name=shopInfo.name;
  }
}

export class ParamInfo {
  constructor(info,rule){
    this.img = info.images ? info.images[0] : '';
    this.info=info.set;
    this.sizes=rule.tables[0];

  }

}
