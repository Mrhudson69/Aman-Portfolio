import nodemailer from 'nodemailer';

// Define an async function to send an email
async function sendEmail() {
  try {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Replace with your SMTP server
      port: 587, // Typically 587 or 465 for secure connections
      secure: false, // Set true if port is 465
      auth: {
        user: "amankumar322230@gmail.com", // Your email
        pass: "mhjioweyiyecleqs", // Your email password or app password
      },
    });

    // Define email options
    const mailOptions = {
      from: '"Your Name" <your-email@example.com>', // Sender address
      to: "recipient@example.com", // List of recipients
      subject: "Test Email from TypeScript", // Subject line
      text: "Hello, this is a test email sent using TypeScript!", // Plain text body
      html: "<b>Hello, this is a test email sent using TypeScript!</b>", // HTML body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
