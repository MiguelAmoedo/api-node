const Purchase = require('../models/comprasModels');

// Criar uma nova compra
exports.createPurchase = async (req, res) => {
    const { userId, productId, quantity, totalPaid } = req.body;

    if (!userId || !productId || !quantity || !totalPaid) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const newPurchase = new Purchase({
            userId,
            productId,
            quantity,
            totalPaid
        });

        await newPurchase.save();

        res.status(201).json({
            message: 'Compra criada com sucesso!',
            purchase: newPurchase
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Obter todas as compras
exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find().populate('userId').populate('productId');
        res.status(200).json(purchases);
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Obter uma compra por ID
exports.getPurchaseById = async (req, res) => {
    const { id } = req.params;

    try {
        const purchase = await Purchase.findById(id).populate('userId').populate('productId');
        if (!purchase) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        }

        res.status(200).json(purchase);
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Atualizar uma compra
exports.updatePurchase = async (req, res) => {
    const { id } = req.params;
    const { userId, productId, quantity, totalPaid } = req.body;

    try {
        const purchase = await Purchase.findById(id);
        if (!purchase) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        }

        purchase.userId = userId || purchase.userId;
        purchase.productId = productId || purchase.productId;
        purchase.quantity = quantity || purchase.quantity;
        purchase.totalPaid = totalPaid || purchase.totalPaid;

        await purchase.save();

        res.status(200).json({
            message: 'Compra atualizada com sucesso!',
            purchase
        });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Excluir uma compra
exports.deletePurchase = async (req, res) => {
    const { id } = req.params;

    try {
        const purchase = await Purchase.findByIdAndDelete(id);
        if (!purchase) {
            return res.status(404).json({ message: 'Compra não encontrada' });
        }

        res.status(200).json({ message: 'Compra excluída com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
