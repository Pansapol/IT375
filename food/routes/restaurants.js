const e = require('express');
const express = require('express');
const router = express.Router();

const restaurants = require('../data');

router.get('/',(req,res)=>{
    res.json(restaurants);
});

router.get('/:id',(req,res)=>{
    const restaurantsId = restaurants.find(element =>element.id ===parseInt(req.params.id));
    if(restaurantsId)
        res.json(restaurantsId);
    else
        res.send('Wrong ID');
});

router.post('/',(req,res)=>{
    let currentRestaurantsId = restaurants.slice(-1)[0].id;
    console.log(currentRestaurantsId);
    currentRestaurantsId +=1;
    const newRestaurant ={
        id: currentRestaurantsId,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});

router.put('/:id',(req,res)=>{
    const restaurantsId = req.params.id;
    const restaurantsIndex = restaurants.findIndex(element => element.id === parseInt(restaurantsId));
    if(restaurantsIndex >=0){
        const updatedRestaurant = {
            id: restaurantsId,
            ...req.body
        };
        restaurants[restaurantsIndex] = updatedRestaurant;
        res.json(updatedRestaurant);
    }else{
        res.status(404).send('Wrong ID cannot update the data');
    }
});

router.delete('/:id',(req,res)=>{
    const restaurantsId = req.params.id;
    const restaurantsIndex = restaurants.findIndex(element => element.id === parseInt(restaurantsId));
    if(restaurantsIndex >=0){
        restaurants.splice(restaurantsIndex,1)
        res.json(restaurants);
    }else{
        res.status(404).send('Wrong ID cannot delete the data');
    }
});

module.exports = router;