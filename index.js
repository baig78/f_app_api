


const express = require('express');
const con = require("./config");
const app = express();
app.use(express.json())
const cors = require('cors')
app.use(cors({
    origin: "http://localhost:4200"
}))


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`....5000`));

// app.unsubscribe(express.json);

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/users", (req, resp) => {
    con.query("select * from tbl_users", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})
app.get("/mfr", (req, resp) => {
    con.query("select * from tbl_manufacturers", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})
app.get("/rtr", (req, resp) => {
    con.query("select * from tbl_retailers", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})
app.get("/pmodels", (req, resp) => {
    con.query("select * from tbl_product_models", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})
app.get("/pbatch", (req, resp) => {
    con.query("select * from tbl_products_batch", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})
app.get("/payments", (req, resp) => {
    con.query("select * from tbl_payments", (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
})



//post
app.post("/insert_users", async(req, resp) => {
    const data = req.body;
    // console.log('----------------------------------------1',req.body);
    // con.query('INSERT INTO tbl_users SET ?', data, (error, result, fields))
    // var sql = "INSERT INTO tbl_users (name, password,role) VALUES ('"+data.name+"','"+data.password+"','"+data.role+"')";
    con.query('INSERT INTO tbl_users SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})

app.post("/insert_retailers", async(req, resp) => {
    const data = req.body;
    con.query('INSERT INTO tbl_retailers SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})

app.post("/insert_manufacturers", async(req, resp) => {
    const data = req.body;
    con.query('INSERT INTO tbl_manufacturers SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})

app.post("/insert_product_models", async(req, resp) => {
    const data = req.body;
    con.query('INSERT INTO tbl_product_models SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})


app.post("/insert_products_batch", async(req, resp) => {
    const data = req.body;
    con.query('INSERT INTO tbl_products_batch SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})



app.post("/insert_payments", async(req, resp) => {
    const data = req.body;
    con.query('INSERT INTO tbl_payments SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})


app.post("/insert_bill", async(req, resp) => {
    const data = req.body;
    con.query('INSERT INTO tbl_bill SET ?', data, (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record inserted");
    });
})


// {   
//     "payload":{
//         "action":"insert"
//     },
//     "domainName":"qa",
//     "atributes":[{"name":"mobApp", "value":"Bill-Generate"}]
// }


app.post("/edit_user", (req, resp) => {
    const data=req.body;
    con.query("INSERT INTO tbl_users SET?",data, (err, results, fields) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})

app.get("/get_user/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_users WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})



app.delete("/delete_user/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_users WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})



app.listen(1234)