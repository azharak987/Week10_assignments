function carMaintenance1(cb) {
    console.log("I am leaving a car to you");
    setTimeout(() => {
        console.log("car is ready");
        cb("Your car is ready");
    }, 2000);
}
function carMaintCallBack(text) {
    console.log("car maintenance callback: ", text);
    pickDress1(dressCallBack);
}
function pickDress1(callback) {
    setTimeout(() => {
        console.log("your dress is ready");
        callback("pick your dress");
    }, 100);
}
function dressCallBack(text) {
    console.log("This is Dress Callback   ", text);
    attendEvent1();
}
function attendEvent1() {
    console.log("Now you can attend the event");
}
carMaintenance1(carMaintCallBack);
export {};
// console.log("\n\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n\n")
//=======================================================================================
// console.log("Promise Example")
// //Promises
// //Inversion of Control
// function carMaintenance(){
//     console.log("I am leaving a car to you")
//     let result: Promise<string> = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             // console.log( "car is ready")
//             resolve("your car is ready")
//             //reject("Your car is not ready")
//         }, 2000);
//     })
//     return result;
// }
// function pickDress(){
//     let promise: Promise<string> = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("your dress is ready")
//             resolve("pick your dress")
//         }, 100);
//     })
//     return promise;
// }
// function attendEvent(){
//     let promise: Promise<string> = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Attending Event");
//             resolve("Attending Event")
//         },2000);
//     })
//     return promise;
// }
// function goHome(){
//     setTimeout(()=>{
//         console.log("Going Home");
//     },2000);
// }
// let mechanicResponse = carMaintenance();
// mechanicResponse.then((text: string)=>{  //Then for Resolve value
//     console.log("Mechanics Response: ", text)
//     return pickDress();
// })
// .then((text: string)=>{
//     console.log("Laundary Response: ",text);
//     return attendEvent()
// })
// .then((text: string)=>{
//     console.log("Event: ", text);
//     return goHome();
// })
// .catch((err:any)=>{   //Catch for Reject value
//     console.log("Error", err);
// })
// //console.log("Mechanics Response: ")
