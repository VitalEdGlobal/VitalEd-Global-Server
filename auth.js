
const jwt = require('jsonwebtoken');
const secret = "VitalEdAdmin";
// [SECTION] Token Creation
module.exports.createAccessToken = (user) => {
	const data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin
	};

	return jwt.sign(data, secret, {});
};
// [SECTION] Token Verification
module.exports.verify = (req, res, next) => {
			console.log(req.headers.authorization); // We should be expecting the JWT
		// req.headers.authorization contains sensitive data and especially our token
	let token = req.headers.authorization;

	if(typeof token == 'undefined'){
		return res.send({ auth: "Failed. No Token!" });
	} else {
		token = token.slice(7, token.length);
		jwt.verify(token, secret, function(err, decodedToken){
				
			if(err){
				return res.send({
					auth: "Failed",
					message: err.message
				});
			} else {
				req.user = decodedToken
				next()
			}
		})
	}
}

module.exports.verifyAdmin = (req, res, next) => {

	if(req.user.isAdmin){
	next()
	} else {
		return res.send({
			auth: "Failed",
			message: "Action Forbidden!"
		})
	}
}