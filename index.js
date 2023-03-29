const http = require("http")

// console.log(http)

const server = http.createServer(() => {
    console.log('served');
})

server.listen(5000, () => { 
    console.log("server is working");
})