module.exports = {
    port: 8081,
    db: {
        database: 'lifearray',
        user: 'lifearray',
        password: 'pass',
        options: {
            dialect: 'sqlite',
            host: 'localhost',
            storage: './lifearray.sqlite'
        }
    }
}

/*
  port: 8081,
    db: {
        database: process.env.DB_NAME || 'lifearray',
        user: process.env.DB_USER || 'lifearray',
        password: process.env.DB_PASSWORD || 'pass',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './lifearray.sqlite'
        }
    }
*/
