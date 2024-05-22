
require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
        await sequelize.sync();
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
