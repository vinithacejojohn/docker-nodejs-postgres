var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var pg = require('pg');



var productPage = fs.readFileSync('./form.html');
var server = http.createServer(function (req, resp) {
if (req.method === "GET") {
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.end(productPage);
    }

if (req.method === "POST") {
        var productData = '';
req.on('data', function (prd) {
            productData += prd;
        }).on('end', function () {
             
//	console.log('The received data is ' + productData);

            var post = qs.parse(productData);
            console.log('The received data is ' + post.pid);
            //resp.end('Data received  from you is ' + post.pid + ' and ' +  post.pname );
            global.name = post.pname
	    global.pid = post.pid



var connectionString = process.env.DATABASE_URL || 'postgres://pgrole:pgrole@pg:5432/pgdb';
var client = new pg.Client(connectionString);

client.connect();

 client.query("CREATE TABLE IF NOT EXISTS users(name text, id integer)");
 client.query("INSERT INTO users(name, id) values($1, $2)", [global.name, global.pid]);


 var query = client.query("SELECT name from  users where id=$1 ;", [global.pid]);
query.on("row", function (row, result) {
    result.addRow(row);
   });
  query.on("end", function (result) {
//        console.log(JSON.stringify(result.rows, null, " ") );
            resp.end('Data received  from you in JSON, directly from PostgreSQL DB: ' + JSON.stringify(result.rows, null, " ") );

             client.end();
            });


       });         
    }
});
server.listen(5050);
console.log('Server started on  5050');
