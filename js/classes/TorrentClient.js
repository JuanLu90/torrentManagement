function TorrentClient(jTorrentClient){
	this.torrents = new Array();
	
	if (jTorrentClient){
		for (let jTorrent of jTorrentClient.torrent){
			let torrent = new Torrent(jTorrent);
			this.torrents.push(torrent);
		}
	}

	//Add Torrent
	TorrentClient.prototype.addTorrent = function(torrent){
		this.torrents.push(torrent);
	}

	
	//Delete Torrent
	TorrentClient.prototype.deleteTorrent = function(id){
		let index = null;
		let found = false;
        for (let i = 0;i < this.torrents.length && !found;i++) {
            if (this.torrents[i].id == id) {
                index = i;
                found = true;
            }
        }
        if (found) {
            this.torrents.splice(index,1);
        }
 
	}

	// Get Torrents 
	TorrentClient.prototype.getTorrents = function(){
		return this.torrents;
	}


	//Orders By ID
	TorrentClient.prototype.orderById = function(){
		//descendente!
		this.torrents.sort(
			function (a,b){
				return b.getId() - a.getId();
			}
		);
	}

	//Orders By Name
	TorrentClient.prototype.orderByName = function(){
		//descendente!
		this.torrents.sort(
			function (a,b){
				if (a.getTitle() > b.getTitle()){
					return 1;
				}
				else if (a.getTitle() < b.getTitle()){
					return -1;
				}
				else {
					return 0;
				}				
			}
		);
	}

	//Orders By %
	TorrentClient.prototype.orderByPercentage = function(){
		//descendente!
		this.torrents.sort(
			function (a,b){
				return b.getPercentage() - a.getPercentage();
			}
		);
	}

	//Orders By Size
	TorrentClient.prototype.orderBySize = function(){
		//descendente!
		this.torrents.sort(
			function (a,b){
				return b.getSize() - a.getSize();
			}
		);
	}
	
	
	//Convert to JSON
	// TorrentClient.prototype.toJSONObject = function(){
	// 	let jTorrentClient = {};

	// 	let jTorrents = new Array();
	// 	for (let torrent of this.torrents){
	// 		let jTorrent = torrent.toJSONObject();
	// 		jTorrents.push(jTorrent);
	// 	}
	// 	jTorrentClient.torrent = jTorrents;

	// 	return jTorrentClient;
	// }






	
}