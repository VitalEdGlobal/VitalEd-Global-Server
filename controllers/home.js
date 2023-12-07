const Home = require("../models/Home");





module.exports.addHome = async (req, res) => {
	let newHome = new Home({
		homeHead: req.body.homeHead,
		missionSubHead: req.body.missionSubHead,
		isActive: true
	})

	try {
		await newHome.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding data to Home:", error);
    return res.status(500).send("Error adding data to Home: " + error.message);
	}

}

module.exports.updateHome = async (req, res) => {
    const { homeHead, missionSubHead } = req.body;

    try {
        if (!homeHead.trim() || !missionSubHead.trim()) {
            return res.status(400).send("Empty input fields");
        }

        const defaultId = '65709200f6b19656b193c03d';
        const homeInfo = await Home.findById({ _id: defaultId });

        // Update fields if they're not empty
        homeInfo.homeHead = homeHead.trim() || homeInfo.homeHead;
        homeInfo.missionSubHead = missionSubHead.trim() || homeInfo.missionSubHead;

        console.log('Home Data Updated');
        await homeInfo.save();
        
        return res.status(200).send(true);
    } catch (error) {
        console.error("Error updating data to Home:", error);
        return res.status(500).send("Error updating data to Home: " + error.message);
    }
};

module.exports.showHome = async (req, res) => {
	const defaultId = '65709200f6b19656b193c03d';

	try{
		const homeInfo = await Home.findById({ _id: defaultId });
		return res.status(200).send(homeInfo);
	} catch (error) {
	 	console.error("Error retrieving active products:", error);
    	return res.status(500).send("Error retrieving active products: " + error.message);
	}
}


module.exports.deleteHome = async (req, res) => {
	const defaultId = '657089e593647f4516338258';

	try {
		await Home.findByIdAndDelete(defaultId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error retrieving active products:", error);
    	return res.status(500).send("Error retrieving active products: " + error.message);
	}
}