import jwt from "jsonwebtoken";

export default (req,res,next) =>{
    const token = (req.headers.authorization || '').replace(/Bearer\s?/,'')
    if(token){
        try{   
            const decoded = jwt.verify(token, "sss1234")
            req.userId = decoded._id;
            next()
        }catch(e)
        {
            return res.status(403).json({
                message:'not available'
            })
        }
    }else{
      return res.status(403).json({
            message:'not available'
        })
    }
}