const { City } = require('../models/index');
const { Op, where } = require('sequelize');

class CityRepository {
    async createCity({name}) {
        try{
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong at repositiory layer")
            throw error;
        }
    }

    async deleteCity(id) {
        try{
            const city = await City.destroy({ where: { id: id } });
            return true;
        } catch (error) {
            console.log("Something went wrong at repositiory layer")
            throw error;
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;

        }catch (error) {
            console.log("Something went wrong at repositiory layer")
            throw error;
        }
    }

    async updateCity(id, {name}) {
        try{
            const city = await City.findByPk(id);
            city.name = name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong at repositiory layer")
            throw error;
        }
    }

    async getAllCities(filter){
        try{
            console.log(filter.name);
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong at repositiory layer")
            throw error;
        }
    }
}

module.exports = CityRepository;