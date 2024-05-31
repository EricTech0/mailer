const nodemailer = require("nodemailer");
const EMAIL = "eric30303@outlook.com";

const sendMail = (to, subject, message, index) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: EMAIL,
      pass: "---",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const options = {
    from: EMAIL,
    to,
    subject,
    text: message,
  };

  transporter.sendMail(options, (error) => {
    console.log("error", error);
    if (error) console.log(`Failed Sent ❌: ${to}`);
    else console.log(`Email Sent ✅: ${to} ${index}`);
  });
};

const data = [];

let index = 0;

const myInterval = setInterval(myTimer, 5000);

function myTimer() {
  if (index === data.length || index === 100) {
    myStop();
  } else {
    const { Name, Email } = data[index++];
    sendMail(
      Email,
      `Regarding Converting Existing Property into Small-Scale or Multi-Unit Dwellings - ${Name}`,
      `Hello ${Name},
      \nI currently live near South Surrey (Cresent Park area).
      \nI'd like to inquire, if I want to convert my current property in South Surrey into multi-unit townhomes or two small-scale homes, do you provide related services? If you don't provide such services, could you give me some recommendations?

      \nIf you do provide these services, please respond to the following questions:

      \n1. Can you show me your past work related to converting properties into multi-unit properties? Do you have any related design images and planning processes that I can reference?
      \n2. Do you have any licenses in this field?
      \n3. When are you available to come over for measurements? What information do I need to provide?

      \nThank you!
      \nEric`,
      index
    );
  }
}

function myStop() {
  clearInterval(myInterval);
}
