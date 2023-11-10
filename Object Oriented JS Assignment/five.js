function Product(name,category,price,stock){
     this.name = name;
     this.category = category;
     this.price = price;
     this.stock = stock;
}

function Inventory(){
    this.inventoryArray = [];
}

Inventory.prototype.addProduct = function(product){
    this.inventoryArray.push(product.name);
    console.log(`Added ${product.name} to the inventory.`);
    
}

Inventory.prototype.deleteProduct = function(product){
    this.inventoryArray= this.inventoryArray.filter((ele)=>{
        return ele !== product
    });
    console.log(`Deleted ${product} from the inventory.`);
    
}

const inventory = new Inventory();

const product1 = new Product("Laptop","Electronics", 899,10)
const product2 = new Product("Book","Books",20,50)

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct('Laptop')