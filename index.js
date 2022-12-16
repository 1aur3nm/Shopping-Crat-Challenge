////Making sure pages are linked
//alert("test");

////Class Name: ShoppingCrat
class ShoppingCrat{

////Constructors
constructor(name, price,count){
this._name = name;
this._price = price;
this._count = count;
}

////Getters
 getName() {
    return this._name;
  }

 getPrice() {
    return this._price;
  }

 getCount() {
    return this._count;
  }

////Setters
  setCount(newCount) {
    this._count = newCount;
  }

////Saving things to crat
function saveToCrat() {
    sessionStorage.setItem('ShoppingCrat', JSON.stringify(cart));
}

////Load cart
function loadCart(){
    cart = JSON.parse(sessionStorage.getItem('ShoppingCrat'));
} 

////Save to local storage

////Below is clossing for class
}