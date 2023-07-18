require('dotenv').config()//solo queremos que se ejecute el config

const config = {
    port: process.env.PORT || 9000, //9000 si no existe 
    nodeEnv: process.env.NODE_ENV || 'development', //desarrollo, testing, produccion
    db: {
        host: process.env.PGHOST|| 'localhost',
        username: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || 'root',
        dbName: process.env.PGDATABASE,
        dbPort: process.env.PGPORT || '5432'
    }


}

module.exports = config