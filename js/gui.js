//	create all elements in gui for IDE
(function(){
	//create the basic pane (default right)
	document.body.className += "js-ide-right";
	var pane = document.createElement('div');
	pane.className = "js-ide-pane";
	document.body.appendChild(pane);
	//add address bar input
	var url_input_w = document.createElement('div');
	var url_input = document.createElement('input');
	url_input_w.className = "js-ide-url-input-wrapper";
	url_input.className = "js-ide-url-input";
	url_input_w.appendChild(url_input);
	document.body.appendChild(url_input_w);
})();
