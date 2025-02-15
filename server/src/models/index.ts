import sequelize from '../config/connection.js';
import { VolunteerFactory } from './volunteer.js';
import { WorkFactory } from './work.js';

// TODO: Create a One-to-Many relationship (Volunteer can have numerous volunteer works)

const Volunteer = VolunteerFactory(sequelize);
const Work = WorkFactory(sequelize);

Volunteer.hasMany(Work, { foreignKey: 'assignedVolunteerId' });
Work.belongsTo(Volunteer, { foreignKey: 'assignedVolunteerId', as: 'assignedVolunteer' });

export { Volunteer, Work };
