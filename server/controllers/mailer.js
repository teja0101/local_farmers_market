import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import ENV from "../config.js";

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: ENV.EMAIL,
    pass: ENV.PASSWORD,
  },
});

// Mailgen configuration
const MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

// Send registration email
export const registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;

  // Basic validation
  if (!username || !userEmail) {
    return res
      .status(400)
      .send({ error: "Username and userEmail are required." });
  }

  // Create email body using Mailgen
  const email = {
    body: {
      name: username,
      intro: text || "Welcome to Our App! We're excited to have you on board.",
      outro: "Need help? Just reply to this email, we're happy to assist.",
    },
  };

  const emailBody = MailGenerator.generate(email);

  console.log(ENV.EMAIL);
  // Construct email message
  const message = {
    from: ENV.EMAIL,
    to: userEmail,
    subject: subject || "Signup Successful",
    html: emailBody,
  };

  try {
    await transporter.sendMail(message);
    console.log("Email sent successfully to", userEmail);
    return res
      .status(200)
      .send({ msg: "You should receive an email from us." });
  } catch (error) {
    console.error("Email sending error:", error);
    return res
      .status(500)
      .send({ error: error.message || "Internal Server Error" });
  }
};
