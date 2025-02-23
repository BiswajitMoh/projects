const express=require("express");
const https=require("https");

const app=express();

app.get("/",function(req,res){
    const url="api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}"
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
           const weatherData = JSON.parse(data)
           const temp=weatherData.main.feels_like
           console.log(temp);
        })
    })

    res.send("Server is up and running");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});