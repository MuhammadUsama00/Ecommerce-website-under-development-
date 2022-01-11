export const notFound=(req,res,) =>{
    res.statusCode=404
    throw new Error(`Api with this url ${req.originalUrl} does not exsist`)
}

export const errorHandler = (error, req, res, ) => {
    let statusCode=res.statusCode===200 ? 500: res.statusCode
    res.statusCode=statusCode
    res.json({
        message:error.message,
        stack: process.env.NODE_ENV === "production" ? null : error.stack,
    })
}