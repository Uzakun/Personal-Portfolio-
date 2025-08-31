import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Debug logging
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS length:", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'undefined');
console.log("EMAIL_PASS (masked):", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.substring(0, 4) + '****' : 'undefined');

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Add debug options
  debug: true,
  logger: true
});

contactEmail.verify((error) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
    console.error("Error code:", error.code);
    console.error("Error response:", error.response);
  } else {
    console.log("✅ Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  console.log("📧 Received contact request:", req.body);
  
  const name = req.body.firstName + " " + req.body.lastName; // Added space
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  
  const mail = {
    from: process.env.EMAIL_USER, // Use your authenticated email
    to: "chandrenium@gmail.com",
    replyTo: email, // So you can reply to the user directly
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  
  console.log("📤 Attempting to send email...");
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("💥 Email Error:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error response:", error.response);
      
      // Send detailed error to frontend for debugging
      res.status(500).json({ 
        code: 500, 
        error: "Email sending failed",
        errorCode: error.code,
        errorMessage: error.message
      });
    } else {
      console.log("✅ Email sent successfully!");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});