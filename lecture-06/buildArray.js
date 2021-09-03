var buildArray = function(target, n) {
    let result = [];
    let current = 1;
    
    for(let index=0; index < n; index++){
        let item = target[index];
        
        while(current < item){
            result.push("Push");
            result.push("Pop");
            current += 1;
        }
        
        result.push("Push");
        current += 1;
    }
    
    return result;
};


buildArray([1,3], 4)