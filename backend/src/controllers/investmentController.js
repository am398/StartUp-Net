const { Investment } = require('../models');

const createInvestment = async (req, res) => {
    const { InvestorID, StartupID, Amount, InvestmentDate, EquityPercentage } = req.body;

    try {
        const investment = new Investment({
            InvestorID,
            StartupID,
            Amount,
            InvestmentDate,
            EquityPercentage,
        });

        await investment.save();
        res.json(investment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getInvestments = async (req, res) => {
    try {
        const investments = await Investment.findAll();
        res.json(investments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getInvestment = async (req, res) => {
    try {
        const investment = await Investment.findByPk(req.params.id);

        if (!investment) {
            return res.status(404).json({ msg: 'Investment not found' });
        }

        res.json(investment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const updateInvestment = async (req, res) => {
    const { Amount, InvestmentDate, EquityPercentage } = req.body;

    try {
        const investment = await Investment.findByPk(req.params.id);

        if (!investment) {
            return res.status(404).json({ msg: 'Investment not found' });
        }

        investment.Amount = Amount || investment.Amount;
        investment.InvestmentDate = InvestmentDate || investment.InvestmentDate;
        investment.EquityPercentage = EquityPercentage || investment.EquityPercentage;

        await investment.save();

        res.json(investment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteInvestment = async (req, res) => {
    try {
        const investment = await Investment.findByPk(req.params.id);

        if (!investment) {
            return res.status(404).json({ msg: 'Investment not found' });
        }

        await investment.destroy();
        res.json({ msg: 'Investment removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createInvestment,
    getInvestments,
    getInvestment,
    updateInvestment,
    deleteInvestment,
};
