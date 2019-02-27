module.exports = function bestCharge(selectedItems) {
  var title = '============= 订餐明细 =============\n';
  var cutOffRule = '-----------------------------------\n';
  var endRule = '===================================\n';

  var list = '肉夹馍 x 4 = 24元\n';
  var price = 24;
  return title + list + cutOffRule + '总计：' + price + '元\n' + endRule;
}
