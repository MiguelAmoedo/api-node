const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_ACCESS = "mongodb+srv://sdti:sdti@suporte.ktkybui.mongodb.net/?retryWrites=true&w=majority&appName=suporte"
console.log(MONGO_ACCESS)
mongoose.connect(MONGO_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
