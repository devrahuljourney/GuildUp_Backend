const cron = require('node-cron');
const moment = require('moment-timezone');
const mailSender = require('./mailSender');

let scheduledEmails = [];

const scheduler = ({ subject, message, recipients, attachments, scheduleTime, timezone }) => {
  const cronTime = moment.tz(scheduleTime, timezone);
  const now = moment.tz(timezone);

  if (cronTime.isBefore(now)) {
    throw new Error("Scheduled time must be in the future");
  }

  const taskId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  scheduledEmails.push({ taskId, scheduleTime, recipients });

  const cronFormat = cronTime.format('m H D M *'); 

  cron.schedule(cronFormat, async () => {
    try {
      for (let email of recipients) {
        await mailSender(email, subject, message, attachments);
        console.log(`✅ Email sent to ${email} at ${cronTime.format()} [${timezone}]`);
      }
    } catch (err) {
      console.error('❌ Failed to send scheduled email:', err.message);
    }
  }, {
    scheduled: true,
    timezone
  });

  return scheduledEmails;
};

module.exports = scheduler;
