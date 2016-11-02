// const creds = require('./fireCreds'); // grab our firebase credentials

function getTodos() {
    // pass url, and http method
    return fetch(urlBranch + fAuth, {
        method: 'GET'
    }).then(function(response) {
        // Convert to JSON
        console.log(response);
        return response.json();
    })
}

function postTodo(todoText) {
    fetch(urlBranch + fAuth, {
        method: 'POST',
        body: JSON.stringify({
            title: todoText,
            visible: true
        })
    }).then(function(data) {
        console.log('Request success: ', data);
    }).catch(function(error) {
        console.log('Request failure: ', error);
    });
}

function deleteTodo(todoId) {
    fetch(urlTarget + todoId + '.json' + fAuth, {
        method: 'DELETE'
    }).then(function(data) {
        console.log('Request success: ', data);
    }).catch(function(error) {
        console.log('Request failure: ', error);
    });
}
