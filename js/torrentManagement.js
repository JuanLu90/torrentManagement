// function getPreviousSessionData(){
// 	let torrentsAnteriorSesion = retrieveTorrents();

// 	if(torrentsAnteriorSesion){
// 		client = torrentsAnteriorSesion;
// 		parseTorrentList();
// 	}
// }

function addTorrent(){
	let title = document.getElementById("title").value;
	let completed = document.getElementById("completed").value;
	let size = document.getElementById("size").value;
	let fileType = document.querySelector('input[name="FileOptions"]:checked').value;
	
	let torrent = new Torrent(new Date().getTime(), title, completed, size, fileType);

	client.addTorrent(torrent);
	// saveTorrents(client);

	parseTorrentList();
	// ver();
}

function parseTorrentList(){
	//recorro la lista de torrents y le voy diciendo que los pinte	
	document.getElementById("id-show").innerHTML = "";	
	document.getElementById("title-show").innerHTML = "";	
	document.getElementById("complete").innerHTML = "";	
	document.getElementById("size-show").innerHTML = "";	
	document.getElementById("fileType").innerHTML = "";
	document.getElementById("delete").innerHTML = "";
	
	let torrents = client.getTorrents();
	for (let torrent of torrents){
		addToTorrentList(torrent);
	}
	
}

function addToTorrentList(torrent){	
	//Add ID to table
	let z = document.createElement("p");
	z.innerHTML = torrent.id;
	let div = document.getElementById("id-show");
	div.appendChild(z);

	//Add title to table
	let y = document.createElement("p");
	y.innerHTML = torrent.title;
	let div2 = document.getElementById("title-show");
	div2.appendChild(y);

	//Add download percent to table
	let x = document.createElement("p");
	x.innerHTML = torrent.completed + "% completed";
	let div3 = document.getElementById("complete");
	div3.appendChild(x);


	//Add size to table and convert size to KB/MB/GB
	if(torrent.size >= 0 && torrent.size <= 999){
		let w = document.createElement("p");
		w.innerHTML = torrent.size + " Bytes";
		let div4 = document.getElementById("size-show");
		div4.appendChild(w);
	}
	else if(torrent.size > 999 && torrent.size <= 999999){
		let w = document.createElement("p");
		w.innerHTML = torrent.size/1000 + " KBs";
		let div4 = document.getElementById("size-show");
		div4.appendChild(w);
	}
	else if(torrent.size > 999999 && torrent.size < 1000000000){
		let w = document.createElement("p");
		w.innerHTML = torrent.size/1000000 + " MBs";
		let div4 = document.getElementById("size-show");
		div4.appendChild(w);
	}else{
		let w = document.createElement("p");
		w.innerHTML = torrent.size/1000000000 + " GBs";
		let div4 = document.getElementById("size-show");
		div4.appendChild(w);
	}
	
	//Add file extension to table
	let v = document.createElement("p");
	v.innerHTML = torrent.typeToText();
	let div5 = document.getElementById("fileType");
	div5.appendChild(v);

	//Delete torrent Button
	let butt = document.createElement("img");
	butt.setAttribute("src", "https://image.flaticon.com/icons/svg/94/94552.svg");
	butt.setAttribute("width", "20");
	butt.setAttribute("style", "cursor:pointer; margin-top: -6px");
	butt.setAttribute("onclick", "deleteTorrent(" + torrent.id + ");");
	let u = document.createElement("p");
	let div6 = document.getElementById("delete");
	div6.appendChild(u);
	u.appendChild(butt);
	
	
}


function orderById(){
	client.orderById();
	parseTorrentList();
}


function orderByPercentage(){
	client.orderByPercentage();
	parseTorrentList();
}

function orderByName(){
	client.orderByName();
	parseTorrentList();
}

function orderBySize(){
	client.orderBySize();
	parseTorrentList();
}


function deleteTorrent(id){
	client.deleteTorrent(id);
	// saveTorrents(client);
	parseTorrentList();
}

// function ver(){
// 	let jTorrentClient = client.toJSONObject();
// 	let pString = document.createElement("p");
// 	let div7 = document.getElementById("string-show");

// 	console.log(jTorrentClient);

// 	document.getElementById("string-show").innerHTML = "";
// 	jTorrentClient = JSON.stringify(jTorrentClient);
// 	pString.innerHTML = jTorrentClient;
// 	div7.appendChild(pString);

// 	console.log(jTorrentClient);
	
// }
