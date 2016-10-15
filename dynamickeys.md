Setting Dynanic keys for objects:
Setting the new key and value to object is straight forward
ex: var obj = {};
//setting key1 
obj.key1 = "key1";
What if the key is there in some variable or not a valid token
Ex: obj = {
    "full name"  : "full name"
   } // valid
   obj.full name = "full name" thorws error 
   key = "full name"
   obj[ key ] = "full name" // valid

/**
* create a function which takes key and value and return new object
*/
var temp = function temp(key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
}

The same function can be write in below way which looks good;
var temp = function temp(key, value) {
   return {
    [key]: value
   };
};




little more details:
creating object with properties is faster then, creating object and assign ( ofcourse it is in milliseconds difference )
var temp1 = function(count){
    var obj, i;
    console.time( 'temp1' );
    for(var i=0;i<count;i++){
        obj = {
            key: 'value'
        }
    }
    console.timeEnd( 'temp1' );
}

var temp2 = function(count){
    var obj, i;
    console.time( 'temp2' );
    for(var i=0;i<count;i++){
        obj = {};
        obj.key = "value";
    }
    console.timeEnd( 'temp2' );
}

var test = function(c){
    console.log('temp1 and temp2');
    temp1(c);
    temp2(c);
    console.log('temp2 and temp1');
    temp2(c);
    temp1(c);
}
test(1000000);
refer: https://jsfiddle.net/uidev547/fe2qyxky/
In the above example most of the times temp2 function will take more time compare to temp1. 





Consider the same senario with dynamic keys then the result will be opposite.
var temp1 = function(count){
    var obj, i, key = 'key';
    console.time( 'temp1' );
    for(var i=0;i<count;i++){
        obj = {
            [key]: 'value'
        }
    }
    console.timeEnd( 'temp1' );
}

var temp2 = function(count){
    var obj, i, key = 'key';
    console.time( 'temp2' );
    for(var i=0;i<count;i++){
        obj = {};
        obj[key] = "value";
    }
    console.timeEnd( 'temp2' );
}

var test = function(c){
    console.log('temp1 and temp2');
    temp1(c);
    temp2(c);
    console.log('temp2 and temp1');
    temp2(c);
    temp1(c);
}
test(1000000);

the above case temp1 will take more time compare to temp2.
Why: 
obj = {
   key: 'value'
}

is a single statement.

But 
obj = {
  [key]: 'value'
}
is not a single statement, before instantiating object it will *calculate* the key of the object (i.e [key].toString())
refer: https://jsfiddle.net/uidev547/szncg34u





