homePage()

function homePage(){
    let body = document.getElementById("tableBody");
    body.innerHTML = "";

    fetch('http://localhost:8090/homePage')
        .then(response => response.json())
        .then(users => {
            users.forEach(function (user){
                let row = body.insertRow();

                row.insertCell().innerHTML = user.id
                row.insertCell().innerHTML = user.name
                row.insertCell().innerHTML = user.lastName
                row.insertCell().innerHTML = user.age
                row.insertCell().innerHTML = user.email
                row.insertCell().innerHTML = getUserRoles(user)
                row.insertCell().innerHTML = '<button type="button" onclick="showEditModal(' + user.id +')" class="btn btn-info btn-sm"> Edit</button>'
                row.insertCell().innerHTML = '<button type="button" onclick="showDeleteModal(' + user.id +')" class="btn btn-danger btn-sm"> Delete</button>'
            })
        });
}