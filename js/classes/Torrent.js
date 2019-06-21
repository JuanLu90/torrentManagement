function Torrent (id, title, completed, size, fileType) {

	// if(jTorrent){
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.size = size;
		this.fileType = fileType; 
	// }else{
	// 	//variables de clase
	// 	this.id = id;
	// 	this.title = title;


	// 	this.completed = 0;
	// 	if (completed && completed >= 0 && completed <= 100){
	// 		this.completed = completed;
	// 	}
		

	// 	this.size = 0; //bytes	
	// 	if (size && size > 0){
	// 		this.size = size;
	// 	}
		
		
		this.fileType = Torrent.DEFAULT;
		if (fileType) {
			let aux = parseInt(fileType);
			if (aux == Torrent.UNKNOWN || 
					aux == Torrent.BD_ERROR || 
					aux == Torrent.JPG ||  
					aux == Torrent.AVI || 
					aux == Torrent.MP4){
					
			this.fileType = aux;
			}
		}
	// }

	
	
	//métodos
	Torrent.prototype.toString = function(){
		return this.id + " - " + this.title + " - " + this.completed + " - " + this.size + " - " + this.typeToText();
	}

	Torrent.prototype.getId = function(){
		return this.id;
	}

	Torrent.prototype.getTitle = function(){
		return this.title;
	}
	
	Torrent.prototype.getPercentage = function(){
		return this.completed;
	}
	
	Torrent.prototype.getTitle = function(){
		return this.title;
	}

	Torrent.prototype.getSize = function(){
		return this.size;
	}
	
	Torrent.prototype.typeToText = function(){
		let texto = "";
		switch(this.fileType){			
			case Torrent.JPG:
				// texto = ".JPG";

				let butt = document.createElement("img");
				butt.setAttribute("src", "http://youthvoicescount.org/application/extension/portfolio-gallery/images/icon-img.png");
				butt.setAttribute("width", "25");
				butt.setAttribute("style", "margin-top: -8px");
				let texto2 = document.createElement("p");
				let div6 = document.getElementById("fileType");
				div6.appendChild(texto2);
				texto2.appendChild(butt);

				break;
						
			case Torrent.AVI:
				// texto = ".AVI";

				let butt2 = document.createElement("img");
				butt2.setAttribute("src", "https://image.flaticon.com/icons/svg/55/55956.svg");
				butt2.setAttribute("width", "25");
				butt2.setAttribute("style", "margin-top: -8px");
				let texto3 = document.createElement("p");
				let div7 = document.getElementById("fileType");
				div7.appendChild(texto3);
				texto3.appendChild(butt2);
				break;
						
			case Torrent.MP4:
				// texto = ".MP4";

				let butt3 = document.createElement("img");
				butt3.setAttribute("src", "https://image.flaticon.com/icons/svg/55/55905.svg");
				butt3.setAttribute("width", "26");
				butt3.setAttribute("style", "margin-top: -8px");
				let texto4 = document.createElement("p");
				let div8 = document.getElementById("fileType");
				div8.appendChild(texto4);
				texto4.appendChild(butt3);
				break;

				break;			
			
			case Torrent.DEFAULT:
			case Torrent.UNKNOWN:
			case Torrent.BD_ERROR:
			default:
				texto = "Desconocido";
				break;
			
		}
		
		return texto;
	}


	// Torrent.prototype.toJSONObject = function(){
	// 	let jTorrent = {};

	// 		jTorrent.id = this.id;
	// 		jTorrent.title = this.title;
	// 		jTorrent.size = this.size; 	
	// 		jTorrent.completed = this.completed;	
	// 		jTorrent.fileType = this.fileType;
	// 	return jTorrent;
		
	// }
		
}

Torrent.DEFAULT = -2;
Torrent.UNKNOWN = -1;
Torrent.BD_ERROR = 0;
Torrent.JPG = 1;
Torrent.AVI = 2;
Torrent.MP4 = 3;

