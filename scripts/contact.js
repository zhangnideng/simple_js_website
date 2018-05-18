﻿function focusLabels(){
	if(!document.getElementsByTagName) return false;
	
	var labels = document.getElementById("label");
	for(var i = 0; i < labels.length; i++){
		if(!labels[i].getAttribute("for")) continue;
		
		labels[i].onclick = function(){
			var id = this.getAttribute("for");
			if(!document.getElementById(id)) return false;
			var element = document.getElementById(id);
			element.focus();
		}
	}
}

function resetFields(whichform){
	for(var i = 0; i < whichform.elements.length; i++){
		var element = whichform.elements[i];
		if(element.type == "submit") continue;
		if(!element.defaultValue) continue;
		
		element.onfocus = function(){
			if(this.value == this.defaultValue)
				this.value = "";
		}
		element.onblur = function(){
			if(this.value == "")
				this.value = this.defaultValue;
		}
	}
}

function prepareForms(){
	for(var i = 0;  i < document.forms.length; i++){
		var thisform = document.forms[i];
		resetFields(thisform);
	}
}

addLoadEvent(prepareForms);
addLoadEvent(focusLabels);