// var async = require('async');
// var stack = {};
// stack.getUserName = function(callback){
//     var UserName = 'Bob';
//     callback(null,UserName);
// }
// stack.getAge = function(callback){
//     var UserAge = 20;
//     callback(null,UserAge);
// }
// stack.getGender = function(callback){
//     var UserGender = 'Bob';
//     callback(null,UserGender);
// }

// async.parallel(stack, function(err,result){
//     console.log(result);
// })

function demo(data, callback){
    console.log(data);
    callback(data);
}
function callback(data){
    console.log(`Data here is: '${data}'`);
}
demo('partial', callback);