const mongoose = require('mongoose');
const { Schema } = mongoose;


require('dotenv').config();

const MONGO_ACCESS = "mongodb+srv://sdti:sdti@suporte.ktkybui.mongodb.net/?retryWrites=true&w=majority&appName=suporte"
console.log(MONGO_ACCESS)
mongoose.connect(MONGO_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));



const purchaseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    totalPaid: {
        type: Number,
        required: true,
        min: 0
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
