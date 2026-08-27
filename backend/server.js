require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = Number(process.env.PORT) || 5500;

app.use(cors({ origin: (process.env.CLIENT_URL || "http://localhost:3000").split(",") }));
app.use(express.json());



const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = uri && new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    if (!client) throw new Error("MONGODB_URI is missing. Copy .env.example to .env and add your connection string.");
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

     const database=client.db(process.env.DB_NAME || "greennest");
     const productcollection=database.collection("products");
     const ordercollection=database.collection("orders");
     const messagecollection=database.collection("messages");

    app.get("/api/health", (_req,res)=>res.json({status:"ok",database:"connected"}));
    app.get("/api/products",async(req,res)=>res.json(await productcollection.find(req.query.category ? {category:req.query.category} : {}).limit(100).toArray()));

    app.post("/api/products",async(req,res)=>{
      const item=req.body;
      if(!item.name || !item.price || !item.category) return res.status(400).json({message:"name, price and category are required"});
      const result= await productcollection.insertOne(item)
      res.status(201).send(result)
    })
    app.post("/api/orders",async(req,res)=>{
      if(!req.body.customer || !Array.isArray(req.body.items) || !req.body.items.length) return res.status(400).json({message:"Customer details and cart items are required"});
      const order={...req.body,status:"placed",createdAt:new Date()};
      const result=await ordercollection.insertOne(order);
      res.status(201).json({orderId:result.insertedId,status:order.status});
    });
    app.get("/api/orders/:id",async(req,res)=>{
      if(!ObjectId.isValid(req.params.id)) return res.status(400).json({message:"Invalid order ID"});
      const order=await ordercollection.findOne({_id:new ObjectId(req.params.id)});
      return order ? res.json(order) : res.status(404).json({message:"Order not found"});
    });
    app.post("/api/contact",async(req,res)=>{
      const {name,email,message}=req.body;
      if(!name || !email || !message) return res.status(400).json({message:"Name, email and message are required"});
      const result=await messagecollection.insertOne({...req.body,status:"new",createdAt:new Date()});
      res.status(201).json({id:result.insertedId,message:"Thanks! We will contact you soon."});
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch((error)=>{ console.error(error.message); process.exit(1); });

app.listen(port, () => {
    console.log("Running on port", port);
}); 
