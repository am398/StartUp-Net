const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./User');
const Startup = require('./Startup');
const Resource = require('./Resource');
const Mentorship = require('./Mentorship');
const Investment = require('./Investment');
const Chat = require('./Chat');
const VideoConference = require('./VideoConference');

User.hasMany(Startup, { foreignKey: 'FounderID' });
Startup.belongsTo(User, { foreignKey: 'FounderID' });

User.hasMany(Resource, { foreignKey: 'UploadedBy' });
Resource.belongsTo(User, { foreignKey: 'UploadedBy' });

User.belongsToMany(User, { through: Mentorship, as: 'Mentor', foreignKey: 'MentorID' });
User.belongsToMany(User, { through: Mentorship, as: 'Mentee', foreignKey: 'MenteeID' });

User.belongsToMany(Startup, { through: Investment, as: 'Investor', foreignKey: 'InvestorID' });
Startup.belongsToMany(User, { through: Investment, as: 'StartupInvestment', foreignKey: 'StartupID' });

User.hasMany(Chat, { foreignKey: 'SenderID' });
User.hasMany(Chat, { foreignKey: 'ReceiverID' });

User.hasMany(VideoConference, { foreignKey: 'HostID' });
User.hasMany(VideoConference, { foreignKey: 'ParticipantID' });

module.exports = {
    sequelize,
    User,
    Startup,
    Resource,
    Mentorship,
    Investment,
    Chat,
    VideoConference
};
