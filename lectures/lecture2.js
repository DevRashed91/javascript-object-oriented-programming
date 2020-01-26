function Person(name, time = 'Today') {
    return 'Hello ' + name + ' | Your acount is: ' + this.notice + ' till ' + time;
}

var active = {
    notice: 'actived'
}

var deactive = {
    notice: 'deactivated'
}

var res = Person.bind(active);
var binded = res('rashed');
binded


var res2 = Person.bind(deactive);
var binded2 = res2('hasib')
binded2


var res3 = Person.call(active, 'rashed');
res3

var res4 = Person.call(deactive, 'hasib', 'tomorow')
res4

var res5 = Person.apply(active, ['rashed', '20/01/25'])
res5

var res6 = Person.apply(deactive, ['hasib', 'Now'])
res6