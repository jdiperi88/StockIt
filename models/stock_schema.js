const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StockSchema = new Schema({
    stock: String,
    stockSymble: String
})

module.exports = StockSchema;