import { Router } from 'express';
import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
import { loginRequired } from '../middlewares';
import { reviewService } from '../services';

const reviwRouter = Router();

//리뷰한거 저장하는거 
reviwRouter.post('/',loginRequired,async (req,res,next)=>{
  
    try{
    const userId= req.currentUserId;
    //const userId= req.params.userId;
    const reviewText= req.body.reviewText;
    const rating =req.body.rating
    const productId= req.body.productId;

    const addReviews =await reviewService.addReview({
        userId,
        reviewText,
         rating,
         productId
    });
    res.status(201).json(addReviews);
} catch(error){
    next(error);

}    
});

// 상품에 대한 별점의 평균 그리고 전체 리뷰수 
reviwRouter.get('/reviewRating/:productId', async (req,res,next)=>{
    try{
        const productId= req.params.productId;
        const resReviewData= await reviewService.reviewData(productId);
        
         res.status(201).json(resReviewData);

    }catch(error){
        next(error);
    }
});

// 상품에 코멘트한 유저이름,코멘트 내용, 개별 별점 이렇게 보내주는 것
reviwRouter.get('/productReview/:productId',async (req,res,next)=>{
    try{
        const productId =req.params.productId;
        const resProductReviw = await reviewService.prodcutReview(productId);
        
        res.status(201).json(resProductReviw);


    }catch(error){
        next(error);
    }
})




export { reviwRouter };