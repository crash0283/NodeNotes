var person = {
    name: 'Chris'
};

person.age = 33;
person.name = 'John';

//debugger;

person.name = 'Mike';

console.log(person);

var myFunc = function(element,index,array) {
    if(index == 0) {
        element = 'Joe';
    }
    console.log(`${element} ${index}`);
}

var myArray = ['Chris','Suz','Anabel','Caden'];

myArray.forEach(myFunc);

