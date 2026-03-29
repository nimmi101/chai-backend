class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data=null; //null kiya taki agar error aata hai to data me null rahe aur agar error nahi aata hai to data me response ka data rahe, jisse frontend me pata chale ki error aaya hai ya nahi
        this.message=message;
        this.success=false; //success false kiya taki agar error aata hai to success false rahe aur agar error nahi aata hai to success true rahe, jisse frontend me pata chale ki error aaya hai ya nahi
        this.errors=errors

        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}    

export { ApiError }