
// ADD CONTNET TO CHECKED INPUT ON LOAD

// DETECT THE CLICK AND CHECK IF IT WAS CLICKED BEFORE
// IF NOT ADD COTENT TO THAT TAB


// select all inputs in accordion
var inputs = document.querySelectorAll('.acc-inputs');

// go through tab inputs and look for checked input
// add the content to that tab
for ( var i = 0; i < inputs.length; i++ ) {

	if ( inputs[i].checked ) {
		var textContainer = inputs[i].parentNode.childNodes[5].childNodes[1];
		textContainer.innerHTML = 'test';
	}
}



var xhr;
if ( XMLHttpRequest ) {
    xhr = new XMLHttpRequest;
}else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP"); 
}

xhr.open('GET', 'data/acc-tab.txt', true);
xhr.onreadystatechange = function() {
	if ( (xhr.readyState == 4) && (xhr.status == 200) ) {
		console.log(xhr.responseText);
	}
}
xhr.send();



/*
if(!! window.ActiveXObject) { // same as typeof window.ActiveXObject !== "undefined"
     use MSXML 
}
else if(!! window.XMLHttpRequest) {
     use XMLHttpRequest 
}
else throw Error("Browser does not support XHR.") ;
*/