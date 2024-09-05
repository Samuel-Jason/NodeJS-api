const validateBody = (request, response, next) => {
   const { body } = request;

   if(body.title === undefined) {
        return response.status(404).json({message: 'The field is required'});
   }

   if(body.title === '') {
        return response.status(404).json({message: 'Title cannot be empty'});
   }

   next();
};

module.exports = {
    validateBody,
};