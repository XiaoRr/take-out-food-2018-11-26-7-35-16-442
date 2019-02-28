
function bestCharge(selectedItems) {
  var info = inputParser(selectedItems);
  var title = '============= 订餐明细 =============\n';
  var cutOffRule = '-----------------------------------\n';
  var endRule = '===================================\n';
  var list = FormatItemList(info);
  var price = 24;
  return title + list + cutOffRule + '总计：' + price + '元\n' + endRule;
}

function FormatItemList(info){
  let list = '';
  for(let item of info){
    list+=item.name+' x '+item.num + ' = '+item.num*item.price+'元\n';
  }
  
  return list;
}

function getItemInfoById(id){
  let items = loadAllItems();
  console.log('find',id);
  for( let i of items){
    if(i.id == id){
      console.log('find');
        return {
          name:i.name,
          price:i.price
        }
    }
  }
}
//获取打五折的物品列表
function LoadFiftyOffItemId(){
  return loadPromotions[1].items;
}
//指定菜品半价
function saleOne(info,fiftyOffItemList){
  let saveValue = 0;  //节约的数值
  let total = 0;  //总价
  for(let item of info){
    total+=item.price * item.num;
    if(fiftyOffItemList.indexOf(item) > -1 ){
      saveValue += item.price*item.num/2;
    }
  }
  total-=saveValue;
}
function inputParser(selectedItems){
  //console.log(selectedItems);
  var ParsedselectedItems = [];
  selectedItems.forEach(element => {
    //console.log(element);
    var item = new Object();
    var info = element.match(/(ITEM\d+)\s*[xX]\s*(\d+)/);
    //console.log(info);
    item.id = info[1];
    item.num = info[2];
    item.name = getItemInfoById(item.id).name;
    item.price = getItemInfoById(item.id).price;
    ParsedselectedItems.push(item);
  })
  return ParsedselectedItems;
}
/*
module.exports = {
  bestCharge
 }
 */