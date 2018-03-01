
const Sequelize = require('sequelize');
const config = require('../config')

const inMemory = require('./inMemoryDb')


const sequelize = new Sequelize( config.get('db').connectionString );

const Disc = sequelize.define('disc', {
    name: {
      type: Sequelize.STRING
    }
  });

const Collection = sequelize.define('collection', {
  name: {
    type: Sequelize.STRING
  }
});

Disc.belongsToMany(Collection, {through: 'DiscCollection'});
Collection.belongsToMany(Disc, {through: 'DiscCollection'});

exports.authenticate = function(){
    sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
}

exports.createDb = function(force){
    return sequelize.sync({force: force}).then(() => {

        return Promise.all(inMemory.discs.map(d => {
            return Disc.create({ name: d.name }).then(sD => { d.idDb=sD.id; return sD; })
        }))
        .then(() => {
            return Promise.all(inMemory.collections.map( c => {
                return Collection.create( { name: c.name} ).then( sC => sC.setDiscs(c.discs.map( cD => cD.idDb )))
            }))
        })
    })
}

exports.openTransaction = function( fn ){
  return sequelize.transaction(fn);
}

exports.Disc = Disc;
exports.Collection = Collection;







