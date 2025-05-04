 function validate() {
        let name = document.getElementById('name').value;;
        let udob = document.getElementById('birth').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;
        let conpass = document.getElementById('conpass').value;

        
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex =  /^[\w.-]+@(gmail|hotmail|yahoo)\.com$/;
        const passwordRegex =  /^(?=.*[a-zA-Z])(?=.*\d).+$/;
        

        const dobDate = new Date(udob);
        const age = new Date().getFullYear() - dobDate.getFullYear();
        const isValidAge = age > 18;
    

    
    if (name == "" || email == "" || pass == "" || conpass == "") {
        document.getElementById('errormessage').innerHTML = "Please fill out all fields.";
        
        return false;
    }
    if(!isValidAge){
        document.getElementById('errormessage').innerHTML = "Age must be above 18.";
        
        return false;
    }
    if (!nameRegex.test(name)) {
        document.getElementById('errormessage').innerHTML = "Name should only contain letters ,dots and spaces.";
        
        return false;
    }
    if (!emailRegex.test(email)) {
        document.getElementById('errormessage').innerHTML = "Email must be in the format: name@gmail/hotmail/yahoo.com";
        
        return false;
    }
    if (!passwordRegex.test(pass)) {
        document.getElementById('errormessage').innerHTML = "Password should contain letters and numbers.";
        
        return false;
    }
    
    if (pass != conpass) {
        document.getElementById('errormessage').innerHTML = "Passwords do not match.";
       
        return false;
    }
    
    alert("Submitted successfully!");
    

    return true;

    }