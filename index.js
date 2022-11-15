


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
app.get("/bills", (req, resp) => {
    con.query("select * from tbl_bill", (err, result) => {
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

// ----------------Update API--------------------

app.put("/edit_user", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.name, data.email, data.user_name, data.phone, data.role, data.id];
    con.query("UPDATE tbl_users SET name = ?, email = ?, user_name = ?, phone = ?, role = ? where id = ?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})


app.put("/edit_rtr", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.address, data.alt_phone, data.city, data.email, data.gst_no, data.name, data.phone, data.shop_name, data.id];
    con.query("UPDATE tbl_retailers SET name = ?, alt_phone = ?, city = ?, email = ?, gst_no = ?, name = ?, phone = ?, shop_name = ? where id = ?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})

app.put("/edit_mfr", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.name, data.email, data.phone, data.al_phone, data.company_name, data.city, data.address, data.gst_no, data.id];
    con.query("UPDATE tbl_manufacturers SET name = ?, email = ?, phone = ?, alt_phone = ?, company_name = ?, city = ?, address = ?, gst_no = ?  where id = ?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})

app.put("/edit_bill", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.invoice_no, data.prd_batch_uid, data.rtr_id, data.qty, data.description, data.advance, data.balance, data.total, data.balance_due_date, data.insert_date, data.updated_date, data.gen_otp, data.otp_status, data.insert_user_id, data.update_user_id, data.id];
    con.query("UPDATE tbl_bill SET invoice_no=?, prd_batch_uid=?, rtr_id=?, qty=?, description=?, advance=?, balance=?, total=?, balance_due_date=?, insert_date=?, updated_date=?, gen_otp=?, otp_status=?, insert_user_id=?, update_user_id=?  where id=?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})
app.put("/edit_pbatch", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.uid, data.mfr_id, data.batch, data.model_uid, data.color, data.size, data.mfr_price, data.per_comm, data.mfr_gst, data.rtr_gst, data.available, data.sold,  data.id];
    con.query("UPDATE tbl_products_batch SET uid = ?, mfr_id = ?, batch = ?, model_uid = ?, color = ?, size = ?, mfr_price = ?, per_comm = ?, mfr_gst = ?, rtr_gst = ?, available = ?, sold = ? where id = ?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})

app.put("/edit_pmodels", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.uid, data.name,  data.id];
    con.query("UPDATE tbl_product_models SET uid = ?, name = ?  where id = ?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})
app.put("/edit_payment", (req, resp) => {
    const data=req.body;
    console.log(data)
    let insertData = [data.invoice_no, data.payment_type, data.insert_date, data.updated_date, data.insert_user_id, data.update_user_id,  data.id];
    con.query("UPDATE tbl_payments SET invoice_no = ?, payment_type = ?, insert_date = ?, updated_date = ?, insert_user_id = ?, update_user_id = ?  where id = ?",insertData, 
    (err, results) => {
        if (err) throw err;
        
            resp.send(results)
        
    })
})


// ----------------Update API--------------------






// ----------------get API--------------------


app.get("/get_user/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_users WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})
app.get("/get_rtr/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_retailers WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})

app.get("/get_mfr/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_manufacturers WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})
app.get("/get_rtr/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_retailers WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})
app.get("/get_product_models/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_product_models WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})
app.get("/get_product_batch/:id", async(req, resp) => {

    con.query('SELECT * FROM tbl_products_batch WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send(result)
        console.log("1 record deleted");
    });
})

// ----------------get API--------------------



// ----------------delete API--------------------
app.delete("/delete_user/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_users WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

app.delete("/delete_mfr/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_manufacturers WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

app.delete("/delete_bill/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_bill WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

app.delete("/delete_rtr/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_retailers WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

app.delete("/delete_product_model/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_product_models WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

app.delete("/delete_product_batch/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_products_batch WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

app.delete("/delete_payment/:id", async(req, resp) => {

    con.query('DELETE FROM tbl_payments WHERE id ='+req.params.id,  (err, result)=> {
        if (err) throw err;
        resp.send({'message':'success'})
        console.log("1 record deleted");
    });
})

// ----------------delete API--------------------



app.listen(1234)