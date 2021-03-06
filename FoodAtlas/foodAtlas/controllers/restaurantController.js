const Restaurant = require('./../models/restaurantModel');
exports.getAllRestaurants = async(req,res) => {
    try{
        const restaurants = await Restaurant.find();
        res.status(200).render("main",
            {
                status: 'success',
                results: restaurants.length,
                data:{restaurants}
            }
        );
    }catch(err){
        res.status(404).json(
            {
                status: 'fail',
                message: err
            }
        );
    }
};
exports.getRestaurant = async(req, res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const restaurant = await Restaurant.findOne({id: restaurantId});
        if(restaurant){
            res.status(200).json(
                {
                    status: 'success',
                    data:{restaurants}
                }
            );
        }else{
            res.status(404).json(
                {
                    status: 'fail',
                    message: 'id not found'
                }
            );
        }

    }catch(err){
        res.status(404).json(
            {
                status: 'fail',
                message: err
            }
        );
    }
};
exports.createRestaurant = async(req,res) => {
    try{
        //const newRestaurant = await Restaurant.create(req.body);
        //res.status(201).json(
        //    {
        //    status: 'success',
        //    data: {restaurant: newRestaurant}
        //   }
        //);

        let currentRestaurantId = await Restaurant.find({}).sort({id:-1}).limit(1).then((lastRestaurant)=>{
            return lastRestaurant[0].id
        });
        currentRestaurantId +=1;
        const createRestaurant = {
            id: currentRestaurantId,
            ...req.body
        };
        const newRestaurant = await Restaurant.create(createRestaurant);
        res.status(200).json(
            {
                status: 'success',
                data: {restaurant: newRestaurant}
            }
        );
    }catch(err){
        res.status(404).json(
            {
                status: 'fail',
                message: err
            }
        );
    }
};
exports.updateRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const restaurant = await Restaurant.findOneAndUpdate({id:restaurantId},req.body,{
            new: true,
            runValidator: true
        });
        if(restaurant){
            res.status(200).json(
                {
                    status: 'success',
                    data: {restaurant}
                }
            );
        }else{
            res.status(404).json(
                {
                    status: 'fail',
                    message: 'id not found'
                }
            );
        }
    }catch(err){
        res.status(404).json(
            {
                status: 'fail',
                message: err
            }
        );
    }
};
exports.deleteRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const restaurant = await Restaurant.findOneAndDelete({id:restaurantId});
        if(restaurant){
            res.status(200).json(
                {
                    status: 'success',
                    data: null
                }
            );
        }else{
            res.status(404).json(
                {
                    status: 'fail',
                    message: 'id not found'
                }
            );
        }
    }catch(err){
        res.status(404).json(
            {
                status: 'fail',
                message: err
            }
        );
    }
};
