    var username = "jaspinder0029";
    var Password = "Harry@29"

    function disp() {
        var enteredusername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("Password").value;
    
        if (enteredusername === username && enteredPassword === Password) {
            alert("login succesfull")
            window.open("resumehtml.html")
        } else {
            alert("login failed")
        }
    }
     
    function disp2() {
        var usernameInput = document.getElementById("Username");
        var passwordInput = document.getElementById("password");
    
        var Username = usernameInput.value;
        var password = passwordInput.value;
    
        var regex = /^[a-z0-9]+$/;
        var regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    
        if (regex.test(Username)) {
            if (regex2.test(password)) {
                alert("CONGRATULATIONS! You Successfully Registered Your Account");
                window.open("resumehtml.html")
            } else {
                alert("Password should have at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8 to 16 characters long.");
            }
        } else {
            alert("Username is not valid");
        }
    }
    

function disp3(){
    alert("Please check your email and follow the directions provided to retrieve your password.")
}


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("Password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

function toogglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eyye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

 

