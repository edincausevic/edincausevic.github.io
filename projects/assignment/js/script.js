


// DETECT THE CLICK AND CHECK IF IT WAS CLICKED BEFORE
// IF NOT ADD COTENT TO THAT TAB
var tabs = document.querySelectorAll('.tab-label')

for ( var i = 0; i < tabs.length; i++ ) {
	tabs[i].addEventListener('click', function(e){
		
		var text = this.parentNode.childNodes[5].childNodes[1].childNodes[0].innerHTML;
		var textContainer = this.parentNode.childNodes[5].childNodes[1];
		var tabId = this.parentNode.childNodes;
		
		if (text === undefined) {
			
			xhr('data/'+tabId[1].id+'.html', textContainer)
		}
	});
}

// ADD CONTNET TO CHECKED INPUT ON LOAD
window.onload = function() {

	// select all inputs in accordion
	var inputs = document.querySelectorAll('.acc-inputs');

	// go through tab inputs and look for checked input
	// add the content to that tab
	for ( var i = 0; i < inputs.length; i++ ) {

		if ( inputs[i].checked ) {
			var textContainer = inputs[i].parentNode.childNodes[5].childNodes[1];
			xhr('data/acc-tab1.html', textContainer)
		}
	}

	// GET THE DATA AND PUT IT IN CAONTAINER
	function xhr(link, container) {

		var xhr;

	    if ( XMLHttpRequest ) {
	        xhr =  new XMLHttpRequest;
	        console.log(xhr )
	    }else {
	        xhr = new ActiveXObject('Microsoft.XMLHTTP');
	        console.log(xhr )
	    }

		xhr.open('GET', link, true);
		xhr.onreadystatechange = function() {
	        if ( (xhr.readyState === 4) && (xhr.status === 200 ) ) {
	            container.innerHTML = xhr.response;
	        }
	    }
		xhr.send(null);
	}
}







/*
if(!! window.ActiveXObject) { // same as typeof window.ActiveXObject !== "undefined"
     use MSXML 
}
else if(!! window.XMLHttpRequest) {
     use XMLHttpRequest 
}
else throw Error("Browser does not support XHR.") ;
*/