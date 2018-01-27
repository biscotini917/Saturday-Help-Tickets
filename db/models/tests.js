const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');

const Test = db.define('test', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Test.passing = function() {
  return Test.findAll({
    where: {
      grade: {
        [Op.gt]: 70
      }
    }
  })
}

Test.findByType = function(type){
  return Test.findAll({
    where: {
      type: type
    }
  })
}

module.exports = Test;
