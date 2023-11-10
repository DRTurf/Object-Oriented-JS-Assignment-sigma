class BankAccount{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
    }
    checkBalance(){
        console.log(`Account balance for ${this.name}: Rs.${this.balance}`);
    }

    deposit(money){
        if(money>=0){
            this.balance +=money;
            console.log(`Deposited Rs.${money}. New balance: Rs.${this.balance}`);
        }
        else{
            console.log("Invalid deposit amount. Please enter a positive amount.");
        }
    }

    withDraw(money){
        if(money>=0 && money<this.balance){
            this.balance -= money;
            console.log(`Withdrawn Rs.${money}. New balance: Rs.${this.balance}`);
        }
        else if(money>this.balance){
            console.log(`Insufficeient funds for withdrawal`);
        }
        else{
            console.log("Invalid withdrawal amount. Please enter a positive amount.");
        }
    }
}

const myAccount = new BankAccount("Mithun S",1000);

myAccount.checkBalance();

myAccount.deposit(500);
myAccount.deposit(-50);

myAccount.withDraw(200);
myAccount.withDraw(1500);
myAccount.withDraw(-500);

myAccount.checkBalance();
