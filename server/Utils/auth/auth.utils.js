export function checkOtherCollegeEmail(email) {
  // check that other college do not contain the @mnnit.ac.in
  if (checkEmail(email)) {
    return false;
  }
  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function checkEmail(email) {
  const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@mnnit\.ac\.in$/;
  return emailRegex.test(email);
}

export function checkPassword(password) {
  if (password.length < 8) {
    return {
      state: "invalid",
      message: "Password must be at least 8 characters long",
    };
  }
  if (password.length > 20) {
    return {
      state: "invalid",
      message: "Password must be at most 20 characters long",
    };
  }
  if (!/[a-z]/.test(password)) {
    return {
      state: "invalid",
      message: "Password must contain at least one lowercase letter",
    };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      state: "invalid",
      message: "Password must contain at least one uppercase letter",
    };
  }
  return {
    state: "valid",
    message: "Password is valid",
  };
}

export function checkName(name) {
  const nameRegex = /^[a-zA-Z]+$/;
  const nameArray = name.split(" ");
  for (let i = 0; i < nameArray.length; i++) {
    if (!nameRegex.test(nameArray[i])) {
      return false;
    }
  }
  return true;
}

export function checkPhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

export function generateVerificationEmail(verificationToken, subject) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #dddddd;
            }
            .header h1 {
                margin: 0;
                color: #333333;
            }
            .content {
                padding: 20px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.6;
                color: #555555;
            }
            .verification-code {
                display: block;
                margin: 20px 0;
                padding: 10px;
                background-color: #f4f4f4;
                border: 1px solid #dddddd;
                text-align: center;
                font-size: 20px;
                color: #333333;
                font-weight: bold;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                border-top: 1px solid #dddddd;
                color: #777777;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Email Verification</h1>
            </div>
            <div class="content">
                <p>Please enter the code below on the web page to verify your email for <strong>${subject}</strong>:</p>
                <div class="verification-code">${verificationToken}</div>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Culrav-Avishkar. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

export function sendPasswordEmail(password) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Information</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid #dddddd;
            }
            .header h1 {
                margin: 0;
                color: #333333;
            }
            .content {
                padding: 20px;
            }
            .content p {
                font-size: 16px;
                line-height: 1.6;
                color: #555555;
            }
            .password {
                display: block;
                margin: 20px 0;
                padding: 10px;
                background-color: #f4f4f4;
                border: 1px solid #dddddd;
                text-align: center;
                font-size: 20px;
                color: #333333;
                font-weight: bold;
            }
            .footer {
                text-align: center;
                padding: 10px 0;
                border-top: 1px solid #dddddd;
                color: #777777;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Password Information</h1>
            </div>
            <div class="content">
                <p>Your password is:</p>
                <div class="password">${password}</div>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Culrav-Avishkar. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

export function generateVerificationToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }
  return token;
}
