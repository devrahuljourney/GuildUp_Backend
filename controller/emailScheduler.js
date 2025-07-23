const schedular = require("../utils/schedular");

exports.emailSchedular = async (req, res) => {
    try {
      const { subject, message, recipients, attachements, scheduleTime, timezone = "Asia/Kolkata" } = req.body;
      console.log("Files received:", req.files); // or req.file / req.files['attachments']


      console.log(req.body)
  
      if (!subject || !message || !recipients ||  !scheduleTime || !timezone) {
        return res.status(400).json({
          message: "All fields are required",
          success: false
        });
      }

      console.log("Checking task schedular")
  
      const task = await schedular({
        subject,
        message,
        recipients,
        attachments: attachements,
        scheduleTime,
        timezone
      });
  
      return res.status(200).json({
        message: "Email scheduled successfully",
        success: true,
        task
      });
  
    } catch (error) {
      return res.status(400).json({
        message: "Email scheduling failed",
        success: false,
        error: error.message
      });
    }
  };
  