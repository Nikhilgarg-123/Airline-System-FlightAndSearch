# Welcome to Flight Service

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env`  file in the root directory and add the following environment variable
     - `port = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": "root",
    "password": <YOUR_DB_PASSWORD>,
    "database": <YOUR_DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## DB Design
 - Airplane Table
 - Flight
 - Airport
 - City


### Airplane Table
 - id
 - model_number
 - capacity
 - created_at
 - updated_at


### Flights
 - id 
 - airplane_id
 - src_airport_id
 - dest_airport_id
 - departure_date
 - arrival_date
 - departure_time
 - arrival_time
 - Flight Number


### City
 - id
 - name


### Airport
 - id
 - name
 - city_id
 - address


- City -> Airport : 1:N
- Airplane -> Flights : 1:N
- Airport -> Flights : 1:N


- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belong to a city
- One airport has many flights but a flight belong to one airport