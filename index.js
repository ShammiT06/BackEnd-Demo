const data=require("express")

const song=data()
port=4000


song.get('/',function(req,res)
{
    console.log("This is Home Page")
    res.send("Hello.... Welcome to Our Page")
})

song.get("/add",function(req,res){
    res.send("This page is for addition")
})


song.listen(port,function(){
    console.log("My Own Server......")
})