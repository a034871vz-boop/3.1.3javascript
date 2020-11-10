fillUserInfo();

function fillUserInfo(){

    let body = document.getElementById("userInfoBody")
    body.innerHTML =""

    fetch('http://localhost:8090/fillHeader')
        .then(response => response.json())
        .then(authUser => {

            let row = body.insertRow();

            row.insertCell().innerHTML = authUser.id
            row.insertCell().innerHTML = authUser.name
            row.insertCell().innerHTML = authUser.lastName
            row.insertCell().innerHTML = authUser.age
            row.insertCell().innerHTML = authUser.email
            row.insertCell().innerHTML = getUserRoles(authUser)
        })
}