function generatePassword() {
    const length = document.getElementById("pass-length").value;
    const uppercase = document.getElementById("upper-case").checked;
    const numbers = document.getElementById("include-numbers").checked;
    const symbols = document.getElementById("include-symbols").checked;
  
    // The let keyword was introduced in ES6 (2015).
    // Variables defined with let cannot be Redeclared. Variables defined with let must be Declared before use.
    let charSet = "";
    let password = "";
  
    if (uppercase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      charSet += "0123456789";
    }
    if (symbols) {
      charSet += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }
  
    for (let i = 0; i < length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
  
    document.getElementById("password").value = password;
  }

