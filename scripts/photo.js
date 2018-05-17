function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return true;
	placeholder.setAttribute("src", source);
	
	if(document.getElementById("description")){
		if(whichpic.getAttribute("title")){
			var text = whichpic.getAttribute("title");
		}else{
			var text = "";
		}
		
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}
	}
	
	return false;
}

function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			return showPic(this);
		}
	}
}

addLoadEvent(prepareGallery);