import express from 'express'
import { Sequelize, DataTypes } from 'sequelize';


const app = express();
const port = 3000;

const sequelize = new Sequelize('mysql://root:@localhost:3306/midterm-exam', {
  dialect: 'mysql',
  logging: false 
});


sequelize.authenticate()
  .then(() => {
    console.log('Database Connected!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: false 
});

sequelize.sync({ force: false })


app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Cannot fetch users at this moment...', error);
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});