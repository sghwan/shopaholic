import { Router } from "express";
import is from '@sindresorhus/is';// DLRJ S

import { loginRequired } from '../middlewares';
import { orderService } from "../services";


const orderRouter = Router();


orderRouter.post('/',loginRequired, async function(req, res, next)  {
   
    // 데이터 가지고옴 
    const userId = req.currentUserId;
    const name=req.body.name;
    const phoneNumber= req.body.phoneNumber;
    const cartItems= req.body.cartItems;
    const total= req.body.total;
    const address= req.body.address;
    const orderRequest=req.body.orderRequest;
    // 시간 저장하기 
    const today= new Date();
   

    //데이터를 넣음
    const newOrder= await orderService.addOrder({
        userId,
        name,
        phoneNumber,
        cartItems,
        address,
        total,
        orderRequest,
        orderTime
    });

    res.status(201).json(newOrder);
   
});

// 상품조회하기 ㅜㅜ...
orderRouter.get('/:userId',async function(req,res,next){
    //const userId = req.currentUserId;// 유저 아이디 찾음 
   
    const userId = req.params.userId;
    const  userOrder =await orderService.getUserOrder(userId);


    res.status(200).json(userOrder);
   
})



orderRouter.delete('/', async (req, res, next) => {

})

export { orderRouter }