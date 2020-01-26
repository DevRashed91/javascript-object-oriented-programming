function Person(name, email) {
    this.name = name,
    this.email = email
}
Person.prototype.Print = function () {
    console.log('hellow ' + this.name + ' your email is: ' + this.email);
}

Person.prototype.age = '26';


var mySelf1 = new Person('rashed', 'rashed@email.com');
var mySelf2 = new Person('robin', 'robin@email.com');

console.log(mySelf1);
console.log(mySelf2);


