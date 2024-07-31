const express=require("express")
const app=express()
const PORT=3001;
app.use(express.json());

app.post('/receive',(req,res)=>{
    const payload=req.body;
    console.log("Payload received",JSON.stringify(payload,null,2));
    res.status(200).send("Payload received");

})

app.listen(PORT,()=>{
    console.log("Server started at 3001");
})
   
