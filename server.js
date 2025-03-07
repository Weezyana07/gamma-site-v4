require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Allow local and production domains
const allowedOrigins = [
  "http://localhost:3000",
  "https://gammaspectre.com.ng"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Load environment variables
const env_user = process.env.EMAIL_USER;
const env_pass = process.env.EMAIL_PASS;

if (!env_user || !env_pass) {
  console.error("❌ EMAIL_USER or EMAIL_PASS not set in .env file.");
  process.exit(1);
}

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env_user,
        pass: env_pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${env_user}>`,
      to: "admin@gammaspectre.com.ng",
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({ message: "Failed to send email.", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});