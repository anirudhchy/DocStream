const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req,res,next) => {

    var token = ''
    var UrlToken = null    
    const paramsArray = req.url.split('/')


    if(paramsArray[1] && paramsArray[1] === 'stream'){
        UrlToken = paramsArray[3]
    }

    
    if(UrlToken) {
        token = UrlToken
    }else {

        // check header
        const authHeader = req.headers.authorization
        
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            throw new UnauthenticatedError('Authentication Invalid')
        }
        
        // [1] -> turn into array and return the second element
         token = authHeader.split(' ')[1]
    }

    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET)

        // attach the user to the job routes

                // // Alternate way, fetch user data from db
                // // .select('-password') to remove password 
                // const user = User.findById(payload.userId).select('-password')
                // req.user = user

        req.user = {userId:payload.userId, name:payload.name}
        next()

    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid')
    }


}

module.exports = auth