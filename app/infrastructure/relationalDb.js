
const Sequelize = require('sequelize');
const config = require('../config')

const inMemory = require('./inMemoryDb')

const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};


const sequelize = new Sequelize( config.get('db').connectionString, { operatorsAliases  } );

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







