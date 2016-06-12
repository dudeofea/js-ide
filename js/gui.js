//	create all elements in gui for IDE
(function(){
	//load an html file and append into element
	var loadHTML = function(url, elem, callback){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr);
				//create wrapper, then extract
				var wrapper = document.createElement('div');
				wrapper.innerHTML= xhr.responseText;
				var html = wrapper.firstChild;
				elem.appendChild(html);
			}
		}
		xhr.open("GET", url, true);
		xhr.setRequestHeader('Content-type', 'text/html');
		xhr.send();
	};
	//load views
	loadHTML('html/side-pane.html', document.body);
	loadHTML('html/empty-window.html', document.body);
	//add style to body
	document.body.className = "js-ide-right";
})();
