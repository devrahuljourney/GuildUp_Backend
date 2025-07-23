
exports.emailSchedular = async (req,res) => {
    try {
        const {subject,message,recipients,attachements,scheduleTime,timezone = "Asia/Kolkata"} =req.body
    } catch (error) {
        
    }
}