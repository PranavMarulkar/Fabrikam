var express = require ('express');
var app = express();

app.get("/",(req,resp)=>{
    resp.send(
"Fabrikam is a multinational company has their 24 Offices all over world. Company wanted to build and host Information Management Solutions in web.Company also wants to host internet public web site for their potential customers to know about products services provided.They required to build and host intranet application for all employees to access Human Resource, Accounting and Project Management related information.Fabrikam has public Cloud subscription to use it as Infrastructure as a Service ( I-a-a-S) and Platform As A Service"
);
});

var server = app.listen(9000);
console.log("running");