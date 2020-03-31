/**
 * @swagger
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      first_name:
 *        type: string
 *      last_name:
 *        type: string
 *      email:
 *        type: string
 *      password:
 *        type: string
 * 
 */

module.exports = (sequelize, Sequilize) => {
  const User = sequelize.define('User', {
    id : {
      type: Sequilize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: Sequilize.STRING,
    last_name: Sequilize.STRING,
    email: Sequilize.STRING,
    password: Sequilize.STRING
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};