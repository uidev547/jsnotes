Objects:
Objects can be created in one of 3 ways
1. Literal notation
2. By using new operator
3. By Object.create

1. Literal Notation:
   var obj = {
    key: "value"
   }
   obj is the instance of the Object, every object will in
   obj instanceof Object = true
   
2. new operator
  var obj = new Person();
  new object will created by using Person contructor function
  obj instanceof Person = true
  obj instanceof Object = true
  
3. By using Object.create
   var obj1 = Object.create( obj1 )
   will create a new object obj2 by extending the obj1
   
new Object() vs Object.create()
new Object will create a new object by using constructor function.
Object.create will create a new object by inheriting the passed object and parameter is mandatory.

Ex: var obj = { a: 10 }
obj1 = new Object(); will create a new object obj1.
obj2 = new Object(obj)  statement is nothing but obj2 = obj; 

For extending object properties from another object use
obj3 = Object.create(obj)
obj3.a will display 10;
obj3.hasOwnProperty('a') -> returns true.

