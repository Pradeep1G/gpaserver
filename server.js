
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3005
const BASE_URL = process.env.BASE_URL


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
function(err, db) {
    if(!err){
        console.log("Database connected...");
    }else{
        console.log(err);
    }
    // var d = db.db("SISTCourses");
    // d.collection("csesem1").findOne({}, function(err, result){
    //     if(err) throw err;
    //     console.log(result);
    //     db.close();
    // });
}
);

// const semdata = "";

const dat_schema = new mongoose.Schema(
    {
        Course_Code: String,
        Course_Name: String,
        Course_Credit: String



    });

const dat = mongoose.model("CSESem1", dat_schema);

const newdat = new dat({
    Course_Code: "S1",
    Course_Name: "S1name",
    Course_Credit: "3"
});


// newdat.save();



app.get("/course/semdata", (req, res) => {
    dat.find({})
    .then((items)=> {res.json(items); console.log(items)})
    .catch((error)=> console.log(error));
    console.log(res.statusCode);
    // res.send("Express here");
});

app.listen(PORT, function() {
    console.log("Server is running.....");
});

console.log("guyrfae ra r");

for(var i=1;i<9;i++){
    getsemdata("CSEsem"+i)
}

function getsemdata(semdata){
    const dat = mongoose.model(semdata, dat_schema);
    app.get("/course/"+semdata, (req, res) => {
        dat.find({})
        .then((items)=> {res.json(items); console.log(items)})
        .catch((error)=> console.log(error));
        console.log(res.statusCode);
        // res.send("Express here");
    });
}







// using nongo client - simple method , but don't know how to send this data to react//

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("SISTCourses");
//   dbo.collection("csesem1").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
// }




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://PradeeP1G:Pradeep%402003@cluster0.50omidk.mongodb.net/SISTCourses?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("SISTCourses");
//   dbo.collection("csesem1").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





















