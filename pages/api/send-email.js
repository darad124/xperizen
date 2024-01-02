// pages/api/send-email.js
const brevo = require('sib-api-v3-sdk'); // changed from '@getbrevo/brevo'

export default async function handler(req, res) {
  try {
    let defaultClient = brevo.ApiClient.instance;
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY; // replace with your actual API key

    let apiInstance = new brevo.TransactionalEmailsApi();
    let sendSmtpEmail = new brevo.SendSmtpEmail();

    // Set the properties of sendSmtpEmail based on req.body
    sendSmtpEmail.subject = req.body.subject;
    sendSmtpEmail.htmlContent = req.body.htmlContent;
    sendSmtpEmail.sender = req.body.sender;
    sendSmtpEmail.to = req.body.to;

    let data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
