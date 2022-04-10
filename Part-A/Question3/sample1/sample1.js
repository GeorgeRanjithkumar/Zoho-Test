var reverser  = function(str){
    let string = str.split('');
    
        for(i=0;i<string.length;i++){
            debugger;
            string.splice(i,0,string.pop());
        
        } 
        console.log(string.join())
    }
    reverser('abdf')