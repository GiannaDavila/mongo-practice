import { MongoClient, ObjectId } from "mongodb";
import {uri} from "./mongo-practice.js";
const client = new MongoClient (uri);
const db= client.db("sample_airbnb");
const airbnbCollection = db.collection("Puerto Rico");

const PuertoRico = {
    capital:"San Juan",
    rainforest: "El Yunque",
    animal: "Coqui",
    city: " Manati",
};

const results = await airbnbCollection.insertOne(PuertoRico)
// console.log("Results of insert", results)

const updateQuery = { _id: new ObjectId("63498c5f47cad74b57a41dd4")};
const update = {$set: {tittle: "San Juan" }}
const result = await airbnbCollection.findOneAndUpdate(updateQuery,update);
console.log(result)