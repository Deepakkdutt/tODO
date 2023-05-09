const express = require("express");
const bodyparser = require("body-parser");
const { renderFile } = require("ejs");
// increase scope of item local to global
var items = []
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

//Set views to ejs

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
    var today = new Date();
    
    var options = {
        weekday : "long",
        day: "numeric",
        month : "long"
    };
     
 var day = today.toLocaleDateString("hi-IN",options)
res.render("list",{kindofday : day,Newlistitems : items}); 
})

app.post("/",function(req,res){
    var item = req.body.NewItem;    
    items.push(item);
    res.redirect("/");

})

app.listen(3000,function(){
    console.log("Server Running at Port 3000 Successfully");
})