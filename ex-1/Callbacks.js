var placeOrder = function(orderNumber,seconds){
  console.log('Taking up orderNumber : ' ,orderNumber);
  processOrder(orderNumber,seconds,function(){
    console.log('Processed Order : ' , orderNumber);
    console.log('delivering order : ' , orderNumber);
  });

}

var processOrder = function(orderNumber,seconds,callback){
  console.log('Procesing Order : ' , orderNumber);
  setTimeout(callback,seconds);

}


placeOrder(2,5000);
placeOrder(3,4000);
placeOrder(4,3000);
placeOrder(5,2000);
placeOrder(6,1000);



#This explains callbacks
