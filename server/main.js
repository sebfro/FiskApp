import '../imports/api/tasks.js';

var userDir = {};

var person = {
    userName : "sebfro",
    userPass : "123"
}

var userName = function(obj){
    return obj.userName;
}

function addNewUser(name, pass){
    if(checkIfExist(name, pass)){
        var p = {
            userName : name,
            userPass : pass
        }
        userDir[name] = p;
    }
}

function checkIfExist(name, pass){
    let added = true;
    if(userDir[name] == null){
        for(var user in userDir){
            if(user.userPass == pass){
                added = false;
            }
        }
    } else {
        added = false;
    }

    return added;
}