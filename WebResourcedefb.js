<!--
function expandNode(nodeId, visible)
{
	var node = document.getElementById(nodeId);
	if (typeof(visible) == 'undefined')
	{
		node.expanded = (!node.expanded);
		node.visible = node.expanded;
	}
	else
		node.visible = visible;
	var styleControls = eval(nodeId);
	
	// Cambio il suo css
	for (var x = 0; x < styleControls.length; x++)
	{
		var styleControl = document.getElementById(styleControls[x]);
		var cssList = eval(styleControls[x])[0];
		var css;
		if (node.expanded)
			css = cssList[2];
		else
			css = cssList[0];
		setTimeout("document.getElementById('" + styleControls[x] + "').className = '" + css + "';", 10);
	}

	// Nascondo o mostro i figli
	var divList = document.getElementsByTagName('div');
	for (var x = 0; x < divList.length; x++)
	{
		var childNode = divList[x];
		if (childNode.parentId && childNode.parentId == node.id)
		{
			childNode.style.display = (node.visible)?'inline':'none';
			if (!node.visible)
				childNode.visible = node.visible;
			expandNode(childNode.id, node.expanded && childNode.expanded);
		}
	}

	return false;
}

-->