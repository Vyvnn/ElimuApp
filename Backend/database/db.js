const productSchema = new mongoose.Schema({});
const product = mongoose.model("products", productSchema);
const db = mongoose.connection;
  
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log('Connected');
});

module.exports = connectDB;