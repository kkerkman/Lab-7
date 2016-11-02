var groceryList=[
  {
    name: "cheerios",
    price: 3.00
  },
  {
    name: "bread",
    price: 2.00
  },
  {
    name: "milk",
    price: 2.50
  },
  {
    name: "eggs",
    price: 1.50
  }
];

/*for ( var i =0; i < groceryList.length; i++ ){
  console.log(groceryList[i].name +  " $"  +  groceryList[i].price);
}*/
var total= 0;
groceryList.forEach(function(item){
  total += item.price;
})
console.log("Total: $" + total);

