function curriedAdd(total) {
   if(total === undefined) return 0
    
   return function addNum(x){
    
    if(x === undefined) return total;
    total += x;
    return addNum
   };
    
}

module.exports = { curriedAdd };
