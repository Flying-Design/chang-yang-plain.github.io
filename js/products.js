let categoryList = [
    {id: 'general-stickers', name: '一般貼紙'},
    {id: 'synthetic-stickers', name: '合成貼紙'},
    {id: 'transparent-sticker', name: '透明貼紙'},
    {id: 'special-stickers', name: '特殊貼紙'}
];

let productList = [
    {id: 'coated-paper', name: '銅版紙', category: 'general-stickers', attr: '■ 銅<br>■ 銅<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '銅'},
    {id: 'molded-paper', name: '模造紙', category: 'general-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'kraft-paper', name: '牛皮紙', category: 'general-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'bright-silver-foil', name: '亮銀箔', category: 'general-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'anti-silver-foil', name: '反銀箔', category: 'general-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'bright-gold-leaf', name: '亮金箔', category: 'general-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'anti-gold-foil', name: '反金箔', category: 'general-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'pearl-paper', name: '珠光紙', category: 'synthetic-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'pp-synthesis', name: 'ＰＰ合成', category: 'synthetic-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'tetoron', name: '特多龍', category: 'synthetic-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'transparent-dragon', name: '透明龍', category: 'transparent-sticker', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'lilong', name: '麗龍', category: 'transparent-sticker', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'transparent-electrostatic-stickers', name: '透明靜電貼', category: 'transparent-sticker', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'bright-silver-dragon', name: '亮銀龍', category: 'special-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'anti-silver-dragon', name: '反銀龍', category: 'special-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'fragile-sticker', name: '易碎貼紙', category: 'special-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'tavik-paper', name: '泰維克紙', category: 'special-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'laser-stickers', name: '雷射貼紙', category: 'special-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'},
    {id: 'anti-counterfeiting-stickers', name: '防偽貼紙', category: 'special-stickers', attr: '■ 成分<br>■ 成分<br><b>適合標籤類型：</b>商<br><b>適用產品：</b>產', note: '註記'}
];


function getProduct(id) {
    let filter =  productList.filter(obj => obj.id === id);
    return filter.length > 0 ? filter[0] : undefined;
}

function generateSideNav() {
    return "test";
}
