// Remove 'sponsored' div
$('#pagelet_ego_pane').remove();

// Some fun word replacements (not quite working properly)
$("*").contents().each(function() {
	if (this.nodeType === 3) {
		this.nodeValue = this.nodeValue.replace("friends", "enemies");
		this.nodeValue = this.nodeValue.replace("Friends", "Enemies");
		this.nodeValue = this.nodeValue.replace("likes", "hates");
		this.nodeValue = this.nodeValue.replace("like", "hate");
		this.nodeValue = this.nodeValue.replace("Like", "Hate");
	};
	
});