const User = require('../models/userModels');

// Rota para cadastro de usuário
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    // Simples validação
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        // Verificar se o usuário já existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criar novo usuário
        user = new User({
            name,
            email,
            password // Sem criptografia
        });

        await user.save();

        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Rota para login de usuário
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Simples validação
    if (!email || !password) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    try {
        // Verificar se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        // Verificar se a senha está correta
        if (user.password !== password) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Responder com os dados do usuário logado
        res.status(200).json({
            message: 'Login realizado com sucesso!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                balance: user.balance,
                registrationDate: user.registrationDate
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Rota para atualizar um usuário
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, balance } = req.body;

    try {
        let user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Atualizar os campos fornecidos
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password; // Sem criptografia
        user.balance = balance !== undefined ? balance : user.balance;

        await user.save();

        res.status(200).json({
            message: 'Usuário atualizado com sucesso!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                balance: user.balance,
                registrationDate: user.registrationDate
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};


// Rota para obter um usuário pelo ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            balance: user.balance,
            registrationDate: user.registrationDate
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
