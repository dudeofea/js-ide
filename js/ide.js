//to avoid leaking globals
(function(){
	//on page load
	document.addEventListener("DOMContentLoaded", function(event) {
		//thanks to http://stackoverflow.com/a/950146
		var loadScript = function(url, callback){
			// Adding the script tag to the head as suggested before
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;
			// Then bind the event to the callback function.
			// There are several events for cross browser compatibility.
			script.onreadystatechange = callback;
			script.onload = callback;
			// Fire the loading
			head.appendChild(script);
		};
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
					//callback
					if(callback != null){ callback(); }
				}
			}
			xhr.open("GET", url, true);
			xhr.setRequestHeader('Content-type', 'text/html');
			xhr.send();
		};
		//load views
		loadHTML('html/side-pane.html', document.body);
		loadHTML('html/empty-window.html', document.body, function(){
			//when picking a new url
			var url_button = document.getElementsByClassName('ji-url-input-wrapper')[0].getElementsByClassName('ji-button')[0];
			url_button.addEventListener('click', function(){
				var url = document.getElementsByClassName('ji-url-input')[0].value;
				//get requested page's html
				loadHTML('http://'+url, document.getElementsByClassName('ji-body')[0]);
			});
		});
		//add style to body
		document.body.className = "ji-right";
	});
	//get our script path
	var scripts = document.getElementsByTagName("script"),
		script_src = scripts[scripts.length-1].src,
		base = script_src.split('/');
	base.pop(); base = base.join('/');
})();
