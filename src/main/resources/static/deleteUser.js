function deleteUser(id) {

    fetch('http://localhost:8090/deleteUser/' + id, {
        method: 'DELETE',
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => {
            homePage();
        });
}