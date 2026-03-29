const asyncHandler =(requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
    };
};

export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {} 
// const asyncHandler = (fn) => {async() => {} }


// const asyncHandler = (fn) => async(req,res,next) => {
//     try{
//         await fn(req,res,next);

//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message || "Internal Server Error"
//         })
//     }
// }  
//higher order function hai jo ki ek function ko argument ke roop me leta hai aur ek naya function return krta hai, jisme hum try catch block use krke error handling kr skte h, aur agar error aata hai to usko next middleware ko pass kr skte h, jisse ki express error handling middleware usko handle kr sake

