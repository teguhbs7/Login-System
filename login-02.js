// Login by tbs


var objPeople = [
	{ // Object @ 0 index
		username: "admin-01",
		password: "admin-fs01"
	},
	{ // Object @ 1 index
		username: "admin-02",
		password: "admin-fs02"
	},
	{ // Object @ 2 index
		username: "admin-03",
		password: "admin-fs03"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the  objPeople array

		if(username == objPeople[i].username && password == objPeople [i].password) {

        function btntest_onclick(){
            window.location.href = "https://support-fs.blogspot.com/";
		//alert("Tunggu Sebentar");
        }

        btntest_onclick()


    }else {
            alert("Error Password or Username");
        }
        btntest_onclick()
    
}
		//console.log("incorrect username or password")
}




