const User = require("../models/User");



module.exports.addUser = async (req, res) => {
	let newUser = new User({
		userName: req.body.userName,
		password: req.body.password
	})

	try {
		await newUser.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding new User:", error);
    return res.status(500).send("Error adding new User: " + error.message);
	}

}



module.exports.showUsers = async (req, res) => {
	try{
		const users = await User.find({});
		return res.status(200).send(users)
	} catch (error) {
	    console.error("Error retrieving users:", error);
    	return res.status(500).send("Error retrieving users: " + error.message);
	}
}



module.exports.deleteUser = async (req, res) => {
	const userId = req.params.userId;

	try {
		await User.findByIdAndDelete(userId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error deleting users:", error);
    	return res.status(500).send("Error deleting users: " + error.message);
	}
}


module.exports.updateUser = async (req, res) => {
	const userId = req.params.userId;
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).send("Empty input fields");
        }

        const userInfo = await User.findById({ _id: userId });

        // Update fields if they're not empty
        userInfo.username = username.trim() || userInfo.username;
        userInfo.password = password.trim() || userInfo.password;

        console.log('User Data Updated');
        await userInfo.save();
        
        return res.status(200).send(true);
    } catch (error) {
        console.error("Error updating data to Home:", error);
        return res.status(500).send("Error updating data to Home: " + error.message);
    }
};


