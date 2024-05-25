const asyncHandler =(requestHandler)=>{

(req, res, next)=>{
    Promise.resolve(requestHandler(req, res, next))
    .catch(err => next(err))
}


}

export default asyncHandler;


//with try catch

// const asyncHandler =(fn)=> async(req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500).json({message: err.message})
//     }
// }