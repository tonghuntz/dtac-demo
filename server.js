import express from 'express';
import data from './data';

var oracledb = require("oracledb");

 
const app = express();

app.get("/api/oracle", (req, res) => {
    oracledb.getConnection({
    user : "system",
    password : "cfpxY5xNYjs=1",
    connectString : "192.168.226.200/orcltest"
	 },
	 (err, connection) => {
	 if (err) { 
		console.error(err); return; }
		connection.execute("SELECT * from TABLE1",
	 (err, result) => {
	 if (err) { 
		console.error(err); return; 
	 }
		console.log(result.rows);
		res.send(result);
	 });
	 });
});

app.get("/api/packages", (req, res) => {
    res.send(data.packageList);
});
app.listen(5500, () => {console.log("Backend Server started at http://localhost:5500")});