const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('note',{
        ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        archived: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        hour: {
            type: DataTypes.STRING,
            defaultValue: `${new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()}`                    
          },
          date:{
            type: DataTypes.STRING,
            defaultValue: `${new Date(Date.now()).getFullYear() + "-" + new Date(Date.now()).getMonth() + "-" + new Date(Date.now()).getDate()}`      
          }  
    },
    {timestamps: false}
    )
}
