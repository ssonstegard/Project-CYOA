module.exports = function(sequelize, DataTypes) {
    var Adventure = sequelize.define("Adventure", {
      place: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },  
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      route1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      route2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },

      route3: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },

      route4: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },

    });
  
    
    
    Adventure.sync();
  
    return Adventure;
  };