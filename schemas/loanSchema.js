//Student name: Sai Mrunaal Chatlapally
//Student ID: 1222235300
//Date Created: 10/08/2022
//Short Description: In this project we had learnt
//                  -mongoose and how to create schemas.
//                  -MongoDB Atlas and how to add and query data

import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
  Id:  String, 
  customerName: String,
  phoneNumber: String,
  address: String,
  loanAmount: String,
  interest: String,
  loanTermYears : String,
  loanType: String,
  description: String,
  createdDate: Date,
  insertedDate: Date
});


