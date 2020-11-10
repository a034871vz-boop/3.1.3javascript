fillHeader();

function fillHeader(){
    fetch('http://localhost:8090/fillHeader')
        .then(response => response.json())
        .then(authUser => {

            document.getElementById("header_email").innerHTML = authUser.email
            document.getElementById("header_roles").innerHTML = "with roles: " + getUserRoles(authUser)
        })
}
