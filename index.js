const a =10
const b=20



console.log("a is equal to :%s and b is equal to : %s", a,b)


const { reject } = require("lodash")
const os = require ("os")

console.log(os.type())
console.log(os.platform())
console.log(os.version())

const bar =()=>{console.log('bar')}
const baz =()=>{console.log('baz')}

const foo =()=>{

    console.log('foo')
    setTimeout(bar,2000)
    baz()
}

foo()

function getMessage(msg,callback){

    setTimeout(()=>{        
        console.log(msg)
        callback()
    },1000)
}

function displayMessage(){
    console.log('Display Message')
}

getMessage('GetMessage',displayMessage)

// let promise =new Promise((reslove,reject)=>{})
let promise = new Promise((reslove,reject)=>{

    const condtion = true;
    if(condtion){
      setTimeout(()=>{
        reslove('Promise Resloved!');
        
    },1000);
       
    }else{
        reject('Promise Rejected!');
    }

})

// const callpromise = ()=>{promise.then(()=>{}).catch(()=>){}}
const callPromise= ()=>{
    
    promise.then((sussessMsg)=>{
        console.log(sussessMsg);
    }).catch((errorMsg)=>{
        console.log(errorMsg);
    });
        
}
callPromise()

const helloPromise= ()=>{

    return new Promise(function(reslove,reject){

        const msg ='Hi how are you'
        reslove(msg)
    })

}


function myfunction (){

    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove('I can write it') 
        }, 2000);
    })
}

async function msg(callback){

    const msg= await myfunction()
    console.log(msg)
    callback()
}

msg(myfun)

function myfun(){
    console.log("Exucete after")
}







