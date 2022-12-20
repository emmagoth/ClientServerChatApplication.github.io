var mobileNumber = sessionStorage.getItem('User');

var pendingRequestDatabaseRef = db.ref("UserInformation/" + mobileNumber + "/PendingFriendRequestList/");

pendingRequestDatabaseRef.on("value", function (snapshot) {
    var data = snapshot.val();
    var parentul = document.getElementById('displayPendingRequestList');
    for (let i in data) {
        var dbmobile = document.createElement('li');
        dbmobile.innerHTML = data[i].FullName;
        parentul.append(dbmobile);
        dbmobile.id = data[i].MobileNumber;

        var childul = document.createElement('ul');
        dbmobile.appendChild(childul);

        var dbname = document.createElement('li');
        dbname.innerHTML = data[i].MobileNumber
        childul.append(dbname);

        var button = document.createElement('input');
        button.type = 'button';
        button.id = data[i].MobileNumber;
        button.value = 'Accept';
        button.className = 'buttons';
        button.setAttribute("onclick", "acceptRequest(this.id)");
        childul.append(button);

        var button = document.createElement('input');
        button.type = 'button';
        button.id = data[i].MobileNumber;
        button.value = 'Reject';
        button.className = 'buttons';
        button.setAttribute("onclick", "rejectRequest(this.id)");
        childul.append(button);
    }
})