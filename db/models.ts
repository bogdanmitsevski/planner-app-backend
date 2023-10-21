import { DataTypes } from 'sequelize';
import sequelize from './connection';

const Task = sequelize.define('task', {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false},
    title: { type: DataTypes.STRING, allowNull: false},
    description: { type: DataTypes.STRING, allowNull: false},
    label: { type: DataTypes.STRING, allowNull: false},
    day: { type: DataTypes.STRING, allowNull: false}
});

export {
    sequelize,
    Task
}