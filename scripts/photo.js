function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	
	placeholder.setAttribute("src", source);
	
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}