function addLogger() {
	var alreadyAdded = document.getElementById("opsbar-logging");
	if (alreadyAdded == null)
	{
		var issueID = document.getElementById("assign-issue").href.split('=')[1];
		var userName = document.getElementById('header-details-user-fullname').getAttribute('data-username');

		var timeLogging = document.createElement("ul");
		timeLogging.setAttribute("id", "opsbar-logging");
		timeLogging.setAttribute("class", "toolbar-group pluggable-ops");
		var logButton = document.createElement("li");
		logButton.setAttribute("class", "toolbar-item");
		var logDiv = document.createElement("div");
		var logLink = document.createElement("a");
		logLink.setAttribute("href", "/secure/CreateWorklog!default.jspa?id="+issueID);
		logLink.setAttribute("id", "opsbar-logging");
		logLink.setAttribute("aria-haspopup", "true");
		logLink.setAttribute("class", "toolbar-trigger aui-button aui-style-default aui-dropdown2-trigger");
		logLink.setAttribute("resolved", "");
		logLink.setAttribute("aria-controls", "opsbar-logging-drop");
		logLink.setAttribute("aria-expanded", "false");
		/*var logLink = document.createElement("a");
		logLink.setAttribute("href", "/secure/CreateWorklog!default.jspa?id="+issueID);
		logLink.setAttribute("class", "toolbar-trigger issueaction-log-work");
		logLink.setAttribute("title", "Create sub-task for this issue");
		logLink.setAttribute("id", "logger-log-work");
		logLink.setAttribute("onclick", "setTimeout(function(){document.querySelectorAll('textarea#comment')[1].value = 'log work';}, 1000)");*/
		var log15s = document.createElement("span");
		log15s.setAttribute("class", "dropdown-text");
		log15s.textContent = "Log 15";
		var log15a = document.createElement("a");
		log15a.setAttribute("id", "action_id_log15");
		log15a.setAttribute("class", "issueaction-log-work");
		log15a.setAttribute("title", "Log time");
		log15a.setAttribute("onclick", "setTimeout(function(){document.querySelectorAll('textarea#comment')[1].value='15';}, 1000)");
		var log15li = document.createElement("li");
		log15li.setAttribute("class", "aui-list-item");
		log15a.appendChild(log15s);
		log15li.appendChild(log15a);
		var log30s = document.createElement("span");
		log30s.setAttribute("class", "trigger-label");
		log30s.textContent = "Log 30";
		var log30a = document.createElement("a");
		log30a.setAttribute("id", "action_id_log30");
		log30a.setAttribute("class", "issueaction-log-work");
		log30a.setAttribute("title", "Log time");
		log30a.setAttribute("onclick", "setTimeout(function(){document.querySelectorAll('textarea#comment')[1].value='30';}, 1000)");
		var log30li = document.createElement("li");
		log30li.setAttribute("class", "aui-list-item");
		log30a.appendChild(log30s);
		log30li.appendChild(log30a);
		var log1hs = document.createElement("span");
		log1hs.setAttribute("class", "trigger-label");
		log1hs.textContent = "Log 1h";
		var log1ha = document.createElement("a");
		log1ha.setAttribute("id", "action_id_log1h");
		log1ha.setAttribute("class", "issueaction-log-work");
		log1ha.setAttribute("title", "Log time");
		log1ha.setAttribute("onclick", "setTimeout(function(){document.querySelectorAll('textarea#comment')[1].value='1h';}, 1000)");
		var log1hli = document.createElement("li");
		log1hli.setAttribute("class", "aui-list-item");
		log1ha.appendChild(log1hs);
		log1hli.appendChild(log1ha);
		var log2hs = document.createElement("span");
		log2hs.setAttribute("class", "trigger-label");
		log2hs.textContent = "Log 2h";
		var log2ha = document.createElement("a");
		log2ha.setAttribute("id", "action_id_log2h");
		log2ha.setAttribute("class", "issueaction-log-work");
		log2ha.setAttribute("title", "Log time");
		log2ha.setAttribute("onclick", "setTimeout(function(){document.querySelectorAll('textarea#comment')[1].value='2h';}, 1000)");
		var log2hli = document.createElement("li");
		log2hli.setAttribute("class", "aui-list-item");
		log2ha.appendChild(log2hs);
		log2hli.appendChild(log2ha);
		var logDropUl = document.createElement("ul");
		logDropUl.appendChild(log15li);
		logDropUl.appendChild(log30li);
		logDropUl.appendChild(log1hli);
		logDropUl.appendChild(log2hli);
		var logDropDiv = document.createElement("div");
		log
		logDropDiv.setAttribute("class", "aui-dropdown2-section");
		logDropDiv.appendChild(logDropUl);
		/*var logSpan = document.createElement("span");
		logSpan.setAttribute("class", "trigger-label");
		logSpan.textContent = "Log work";
		logLink.appendChild(logSpan);
		logDiv.appendChild(logLink);
		logButton.appendChild(logDiv);*/
		logButton.appendChild(logDropDiv);
		timeLogging.appendChild(logButton);

		if (!document.getElementById("type-val").textContent.includes("Sub-Task"))
		{
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
		}

		var opsButtons = document.getElementById("opsbar-opsbar-operations");
		opsButtons.parentNode.insertBefore(timeLogging, opsButtons.nextSibling);
	}
}

function logAlert() {
	alert("logging");
}

setInterval(function(){
	if (document.getElementById("opsbar-logging") == null)
	{
		addLogger();
	}
}, 500)