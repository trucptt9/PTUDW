const res = require("express/lib/response")

module.exports = class ContactController{
    create = async (req, res)=>{
        res.send({message:"create handler"});
    };

    findAll = async(req, res) =>{
        res.send({message:"find all handler"});
    };

    findOne = async(req, res) =>{
        res.send({message:"find one handler"});
    };

    deleteAll = async(req, res) =>{
        res.send({message:"delete all handler"});
    };

    delete = async(req, res) =>{
        res.send({message:"delete handler"});
    };

    update = async(req, res) =>{
        res.send({message:"update handler"});
    };

    findAllFavorite = async(req, res) =>{
        res.send({message:"find all favorite handler"});
    };
}