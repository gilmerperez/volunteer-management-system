import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Volunteer } from './volunteer.js';

interface WorkAttributes {
  id: number;
  name: string;
  status: string;
  description: string;
  assignedVolunteerId?: number;
}

interface WorkCreationAttributes extends Optional<WorkAttributes, 'id'> {}

export class Work extends Model<WorkAttributes, WorkCreationAttributes> implements WorkAttributes {
  /* TODO: 
    Create properties of Work:
    id: public & number
    name: public & string
    status: public & string
    description: public & string
    assignedVolunteerId: public & number
    assignedVolunteer: public, readonly, Volunteer object as associated Volunteer mode;
  */
    public id!: number;
    public name!: string;
    public status!: string;
    public description!: string;
    public assignedVolunteerId!: number;
  
    // associated Volunteer model
    public readonly assignedVolunteer?: Volunteer;
}

export function WorkFactory(sequelize: Sequelize): typeof Work {
  // TODO: Initialize the Work Model
  Work.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assignedVolunteerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'work',
      sequelize,
    }
  );
  return Work;
}
