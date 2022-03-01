// const res = require("express/lib/response")

// module.exports = class ContactController{
//     create = async (req, res)=>{
//         res.send({message:"create handler"});
//     };

//     findAll = async(req, res) =>{
//         res.send({message:"find all handler"});
//     };

//     findOne = async(req, res) =>{
//         res.send({message:"find one handler"});
//     };

//     deleteAll = async(req, res) =>{
//         res.send({message:"delete all handler"});
//     };

//     delete = async(req, res) =>{
//         res.send({message:"delete handler"});
//     };

//     update = async(req, res) =>{
//         res.send({message:"update handler"});
//     };

//     findAllFavorite = async(req, res) =>{
//         res.send({message:"find all favorite handler"});
//     };
// }

exports.create = (req, res) =>{
    res.send({message: "create handler"});
};

exports.findAll = (req, res) =>{
    res.send({message: "findAll handler"});
};

exports.findOne = (req, res) =>{
    res.send({message: "findOne handler"});
};

exports.update = (req, res) =>{
    res.send({message: "update handler"});
};

exports.delete = (req, res) =>{
    res.send({message: "delete handler"});
};

exports.deleteAll = (req, res) =>{
    res.send({message: "deleteAll handler"});
};

exports.findAllFavorite = (req, res) =>{
    res.send({message: "find All Favorite handler"});
};

