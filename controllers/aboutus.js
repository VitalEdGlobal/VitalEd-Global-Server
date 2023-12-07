const AboutUs = require("../models/AboutUs");


module.exports.addAboutUs = async (req, res) => {
	let newAboutUs = new AboutUs({
		auSubHead: req.body.auSubHead,
		auForTeachers: req.body.auForTeachers,
		auForSchool: req.body.auForSchool
	})

	try {
		await newAboutUs.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding data to About Us:", error);
    return res.status(500).send("Error adding data to About Us: " + error.message);
	}
}






module.exports.showAboutUs = async (req, res) => {
	try{
		const allAboutUs = await AboutUs.find({});
		return res.status(200).send(allAboutUs);
 	} catch (error) {
    	console.error("Error showing data to About Us:", error);
    	return res.status(500).send("Error showing data to About Us: " + error.message);
	}
}


module.exports.updateAboutUs = async (req, res) => {
    const { auSubHead, auForTeachers, auForSchool } = req.body;
     const aboutUsId = req.params.aboutUsId;

    try {
        if (!auSubHead.trim() || !auForTeachers.trim() || !auForSchool.trim()) {
            return res.status(400).send("Empty input fields");
        }

       
        const aboutUsInfo = await AboutUs.findById({ _id: aboutUsId });

        // Update fields if they're not empty
        aboutUsInfo.auSubHead = auSubHead.trim() || aboutUsInfo.auSubHead;
        aboutUsInfo.auForTeachers = auForTeachers.trim() || aboutUsInfo.auForTeachers;
        aboutUsInfo.auForSchool = auForSchool.trim() || aboutUsInfo.auForSchool;
        


        console.log('About Us Data Updated');
        await aboutUsInfo.save();
        
        return res.status(200).send(true);
    } catch (error) {
        console.error("Error updating data to About Us:", error);
        return res.status(500).send("Error updating data to About Us: " + error.message);
    }
};



module.exports.deleteAboutUs = async (req, res) => {
	 const aboutUsId = req.params.aboutUsId;

	try {
		await AboutUs.findByIdAndDelete(aboutUsId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error deleting about us data:", error);
    	return res.status(500).send("Error deleting about us data: " + error.message);
	}
}