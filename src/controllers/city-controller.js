const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            success: true,
            data: city,
            message: "City created successfully",
            err: {}
        });
    }catch(error){
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong at controller layer",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            message: "City deleted successfully",
            err: {}
        });
    }catch(error){
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong at controller layer",
            err: error
        });
    }
}
const update = async (req, res) => {
    try{
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            success: true,
            data: city,
            message: "City updated successfully",
            err: {}
        });
    }catch(error){
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong at controller layer",
            err: error
        });
    }
}

const get = async (req, res) => {
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            success: true,
            data: city,
            message: "City fetched successfully",
            err: {}
        });
    }catch(error){
        console.log("Something went wrong at controller layer");
        return res.status(500).json({
            success: false,
            data: {},
            message: "Something went wrong at controller layer, Not able to get city",
            err: error
        });
    }
}

module.exports = { create, destroy, update, get };