//to avoid leaking globals
(function(){
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
		//load some utilities and the actual IDE
		loadScript(base+'/gui.js')
	});
	//get our script path
	var scripts = document.getElementsByTagName("script"),
		script_src = scripts[scripts.length-1].src,
		base = script_src.split('/');
	base.pop(); base = base.join('/');
})();
