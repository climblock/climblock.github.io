<!--
	function openHRef(obj)
	{
		return openLink(obj.getAttribute('href'), obj.getAttribute('c:target'));
	}

	function openLink(url, target)
	{
		if (!(target))
			target = '';
		if (!(url) || url.length == 0) return false;
		
		// Controllo se c'è un anchor
		var a = url.indexOf("#");
		var anchor = "";
		if (a > 0)
		{
			anchor = url.substring(a);
			url = url.substring(0, a);
		}
		
		// Controllo che ci sia il ?
		if (url.indexOf("?") < 1)
			url += "?";
		else
			url += "&";
		// Unisco l'url con la query string di auth
		if (auth != null)
		    url += 'auth=' + auth;
		
		if (a > 0)
			url += anchor;
		
		// Se non c'è un target apro nella stessa pagina
		if (target.length == 0)
			target = "_self";

		window.open(url, target);
		
		return false;
	}
-->