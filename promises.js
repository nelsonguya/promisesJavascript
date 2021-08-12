

const inventory = {
    sunglasses: 410010,
    pants: 1088,
    bags: 1344
  };
  
  // Promise 
  
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve ('Sunglasses order processed.');
    } else {
      reject ('That item is sold out.');
    }
  };
  
  const orderSunglasses = () => {
    return new 
  Promise (myExecutor)
  };
  
  let orderPromise = orderSunglasses();
  console.log(orderPromise);
  