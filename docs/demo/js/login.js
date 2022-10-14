function login() {
    var user = document.getElementById("email.field").value;
    var pass = document.getElementById("password.field").value;
    firebase.auth().signInWithEmailAndPassword(user, pass)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            if (user) {
                openLink();
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("user or pass invalid")
        });


}

function openLink() {
    window.location.replace("index.html");
}