# Fibonacci NodeJS Generator and Caching API

The API has 2 endpoints for generating a Fibonacci multiplication table and caching
the data in a DB.

By default it uses MariaDB, but it can be configured to use another DB dialect.

## Requirements
`nodejs >= 10.12`

`npm >= 6.4.1`

In order to run the tests, you need to have at least `nodejs` __v10.12__ or higher.
If you're not interested in running tests, you can safely use `nodejs` __v8+__

## How to use

### Clone this repository

```sh
git clone https://github.com/Kaukov/fibonacci_app_backapp.git
```

### Copy .env.example to .env

```sh
cp .env.example .env
```

__Edit the values inside appropriately!__

### Run the app
```sh
npm run dev
```

## API Endpoints

- **GET** `/fibonacci?n=<number>` - Returns a Fibonacci table for the provided
**\<number\>** as JSON
- **POST** `/fibonacci?n=<number>` - Caches the generated Fibonacci table for the provided **\<number\>** and returns it as JSON
