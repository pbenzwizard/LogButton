function addLogger() {
	var alreadyAdded = document.getElementById("opsbar-logging");
	if (alreadyAdded == null)
	{
		var issueID = document.getElementById("assign-issue").href.split('=')[1];

		var timeLogging = document.createElement("ul");
		timeLogging.setAttribute("id", "opsbar-logging");
		timeLogging.setAttribute("class", "toolbar-group pluggable-ops");
		var logButton = document.createElement("li");
		logButton.setAttribute("class", "toolbar-item");
		var logLink = document.createElement("a");
		logLink.setAttribute("href", "/secure/CreateWorklog!default.jspa?id="+issueID);
		logLink.setAttribute("class", "toolbar-trigger issueaction-log-work");
		logLink.setAttribute("title", "Create sub-task for this issue");
		logLink.setAttribute("id", "logger-log-work");
		var logSpan = document.createElement("span");
		logSpan.setAttribute("class", "trigger-label");
		logSpan.textContent = "Log work";
		logLink.appendChild(logSpan);
		logButton.appendChild(logLink);
		timeLogging.appendChild(logButton);

		var subButton = document.createElement("li");
		subButton.setAttribute("class", "toolbar-item");
		var subLink = document.createElement("a");
		subLink.setAttribute("href", "/secure/CreateSubTaskIssue!default.jspa?parentIssueId="+issueID+"&type=");
		subLink.setAttribute("class", "toolbar-trigger issueaction-create-subtask");
		subLink.setAttribute("title", "Create sub-task for this issue");
		subLink.setAttribute("id", "logger-create-subtask");
		var subSpan = document.createElement("span");
		subSpan.setAttribute("class", "trigger-label");
		subSpan.textContent = "Create sub-task";
		subLink.appendChild(subSpan);
		subButton.appendChild(subLink);
		timeLogging.appendChild(subButton);

		var opsButtons = document.getElementById("opsbar-opsbar-operations");
		opsButtons.parentNode.insertBefore(timeLogging, opsButtons.nextSibling);
	}
}

setInterval(function(){
	if (document.getElementById("opsbar-logging") == null)
	{
		addLogger();
	}
}, 500)