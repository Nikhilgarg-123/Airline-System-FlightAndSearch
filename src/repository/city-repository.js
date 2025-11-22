const { City } = require('../models/index');

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

    async updateCity(id, name) {
        try{
            const city = await City.update({ name }, { where: { id: id } });
            return city;
        } catch (error) {
            console.log("Something went wrong at repositiory layer")
            throw error;
        }
    }
}

module.exports = CityRepository;