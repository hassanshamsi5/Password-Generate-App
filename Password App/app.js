
function generatePassword() {
    var passwordLength = 14;
    var specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,./?";
    let password = "";
    let specialCharsCount = 0;

    for (let i = 0; i < passwordLength; i++) {
        password += Math.floor(Math.random() * specialChars.length).toString(36);
        specialCharsCount += specialChars.includes(password[i]) ? 1 : 0;
    }
    if (specialCharsCount > 0) {
        password += specialChars.includes(password[passwordLength - 1]) ? specialChars[passwordLength - 1] : "";
    }
    return password;
}


document.write(generatePassword());
