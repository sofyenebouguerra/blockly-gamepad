function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    const auth = firebase.auth();
    var userinfo = data.push();
    userinfo.set({
        firstname: getid("fname"),
        lastname: getid("lname"),
        email: getid("email"),
        password: getid("password"),
        phone: getid("phone"),
    })
    window.alert("success")

}

function getid(id) {
    return document.getElementById(id).value;
}