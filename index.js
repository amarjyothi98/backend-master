import express from 'express'; 
import path from "path"; 

const app = express();  

// setting up view engine
app.set("view engine", "ejs")

const users = [] ;

// using middlewares
// app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    // res.json({
    //     success: true, 
    //     products: []
    // })

    // console.log(path.resolve())
    // const pathlocation = path.resolve(); 

    // console.log(path.join(pathlocation, "./index.html"));

    // res.sendFile(path.join(pathlocation, "./index.html")); 

    res.render("index", { name: "Amar" })

})

app.post("/", (req, res) => {
    console.log(req.body); 
    
    users.push({username:req.body.name, email:req.body.email}); 

    res.render("success")
})

app.get("/users", (req, res) => {
    res.json({
        users,
    })
})

app.listen(5000, () => {
    console.log("server is working");
})