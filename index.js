const http = require("http")

// console.log(http)

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end("<h1>This is Amar hehe</h1>"); 


    // navigation of the pages
    if(req.url==="/about") {
        res.end("<h1>About page</h1>")
    }
    else if(req.url==="/profile") {
        res.end("<h1>Profile page</h1>")
    }
    else if(req.url==="/") {
        res.end("<h1>Home page</h1>")
    }
    else if(req.url==="/else") {
        res.end("<h1>Else hehe page</h1>")
    }
    else {
        res.end("<h1>page not found</h1>")
    }
})

server.listen(5000, () => { 
    console.log("server is working");
})