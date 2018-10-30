function promisedemo(data){
    var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;
    setTimeout( () => {
        // console.log(data);
    }, randomDelay);
}
function promises(data) {
    return new Promise(function (resolve, reject) {
        promisedemo(data);
        resolve(data);
    })
}
var p1 = promises("p1");
var p2 = promises("p2");
var p3 = promises("p3");

p1.then( (data)=>{
    console.log(data);
    return p2;
}).then( (data) => {
    console.log(data);
    return p3;
}).then( (data) => {
    console.log(data);
    console.log("completed");
})

