

let inventory;

inventory = {
    sunglasses: 41000,
    pants: 1088,
    bags: 1344
  };

// Promise 

const myExecutor = (resolve, reject) => {
    inventory.sunglasses > 0 ? resolve ('Sunglasses order processed.') : reject ('That item is sold out.');
};

const orderSunglasses = () => {
  return new 
Promise (myExecutor)
};

let orderPromise = orderSunglasses();
console.log(orderPromise);
  