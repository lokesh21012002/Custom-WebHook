// I have to create a server a runs on 3000 have to create a post 
// request and then payload I have to send to server B 30001 and tin server B it will print the payload





const express=require("express")
const axios=require("axios")
const app=express();
const PORT=3000

app.listen(PORT,()=>{
    console.log("Server started at 3000");
})

app.use(express.json())

app.post('/forward',async (req,res)=>{
    try{
    const payload=req.body;
    const response=await axios.post("http://localhost:3001/receive",payload);
    res.status(200).send(response.data);
    }

    catch(error){
        console.log("Error forwarding",error);
            res.status(500).send("Error forwarding the payload");

    

    }





})









// const express=require("express")
// const app=express()
// const PORT=5000;

// app.listen(PORT,()=>{
//     console.log("Server started");
// })

// app.use(express.json());


// const sumMiddleware=(req,res,next)=>{
//     const {num1,num2}=req.body;

//     const sum=num1+num2;
//     res.sum=sum;
//     next();



    


// }

// app.post("/calculate-sum",sumMiddleware,(req,res)=>{
//     res.json({sum:res.sum});


// });

// const num1=12
// const s=`the value is ${num1}`
// console.log(s);
// // write a promise that wiill resolve after 3 scond


// // setTimeout(()=>{

// // },3000);

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved after 3 second")
//     },3000);
    
// })

// promise.then((message)=>{
//     console.log(message)
// }).catch(err=> console.log(err))



// let a={"b":1};
// let c=new Object(a);
// c.b=5

// console.log(a);










// // create a middleware that accpets two number for request object and returncaluclate the SubmitEvent
// // and forward the sum to next event event\\\

// I have to create a server a runs on 3000 have to create a post 
// request and then payload I have to send to server B 30001 and tin server B it will print the payload

