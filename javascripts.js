import con from "./database";

// JavaScript code
function search_event() {
	let input = document.getElementById('searchQueryInput').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('card-title');
    let xcard = document.getElementsByClassName('eventCards');

	for (i = 0; i < x.length; i++) {
		if (!xcard[i].innerHTML.toLowerCase().includes(input)) {
			xcard[i].style.display="none";
		}
		else {
			xcard[i].style.display="list-item";
		}
	}
}


function createAccount() {
	const input_name = document.getElementById('fname').value
	const input_lastname = document.getElementById('lname').value
	const email = document.getElementById('email').value
	const pp = document.getElementById('pword').value
	var sql = `INSERT INTO users (first_name,last_name,email,password) VALUES (${input_name},${input_lastname},${email},${pp})`;
	con.query(sql,function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	  });
	}