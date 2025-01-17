const http = require("http");
const data = require("./emp.js")

http.createServer((req,res)=>{
    res.write("<h1>Employee Details</h1>")
    res.write(data.empDetails());
    res.write(data.empSalary());
    res.write(data.workExp());
    res.end();
}).listen(5000);