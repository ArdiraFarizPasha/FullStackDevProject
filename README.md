## How to run the project

Install dependencies :

```
npm install
```

Edit `config/config.json` :

```
{
    "development": {
        "username": "root",
        "password": null,
        "database": "sequelize-example",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        ...
    },
    "production": {
        ...
    }
}
```

Init database :

```
sequelize db:migrate

```

Run the project :

```
npm start 

or

nodemon app.js
```