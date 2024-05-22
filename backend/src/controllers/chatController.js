const { Chat } = require('../models');

const createChat = async (req, res) => {
    const { ReceiverID, Message } = req.body;
    const SenderID = req.user.id;

    try {
        const chat = new Chat({
            SenderID,
            ReceiverID,
            Message,
        });

        await chat.save();
        res.json(chat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getChats = async (req, res) => {
    try {
        const chats = await Chat.findAll();
        res.json(chats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getChat = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);

        if (!chat) {
            return res.status(404).json({ msg: 'Chat not found' });
        }

        res.json(chat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createChat,
    getChats,
    getChat,
};
