function addLogger() {
	var alreadyAdded = document.getElementById("opsbar-logging");
	if (alreadyAdded == null)
	{
		var issueID = document.getElementById("assign-issue").href.split('=')[1];
		var displayName = document.getElementById('header-details-user-fullname').getAttribute('data-displayname');
		var userName = document.getElementById('header-details-user-fullname').getAttribute('data-username');
		var logUrl = "/secure/CreateWorklog!default.jspa?id="+issueID;
		var subUrl = '/secure/CreateSubTaskIssue!default.jspa?parentIssueId='+issueID;

		var timeLogging = document.createElement("ul");
		timeLogging.setAttribute("id", "opsbar-logging");
		timeLogging.setAttribute("class", "toolbar-group pluggable-ops");
		timeLogging.setAttribute("style", "z-index: 2999;");
		
		if (document.getElementById("type-val").textContent.includes("Sub-Task"))
		{
			var logButton = document.createElement("li");
			logButton.setAttribute("class", "toolbar-item");
			var logDiv = document.createElement("div");
			var logLink = document.createElement("a");
			logLink.setAttribute("href", "#");
			logLink.setAttribute("id", "opsbar-logging");
			logLink.setAttribute("aria-haspopup", "true");
			logLink.setAttribute("class", "toolbar-trigger aui-button aui-style-default aui-dropdown2-trigger");
			logLink.setAttribute("resolved", "");
			logLink.setAttribute("aria-controls", "opsbar-logging-drop");
			logLink.setAttribute("aria-expanded", "false");
			var logLbl = document.createElement("span");
			logLbl.setAttribute("class", "dropdown-text");
			logLbl.textContent = "Log Work";
			logLink.appendChild(logLbl);
			var logTrans = document.createElement("div");
			logTrans.setAttribute("id", "opsbar-logging-drop");
			logTrans.setAttribute("class", "aui-style-default aui-dropdown2 aui-layer");
			logTrans.setAttribute("resolved", "");
			logTrans.setAttribute("aria-hidden", "true");

			var logDropUl = document.createElement("ul");
			var times = ["15m", "30m", "1h", "2h"];
			times.forEach(function(entry) {
				var log_s = document.createElement("span");
				log_s.setAttribute("class", "trigger-label");
				log_s.textContent = "Log "+entry;
				var log_a = document.createElement("a");
				log_a.setAttribute("id", "action_id_log"+entry);
				log_a.setAttribute("class", "issueaction-log-work");
				log_a.setAttribute("href", logUrl);
				log_a.setAttribute("title", "Log time");
				log_a.setAttribute("onclick", "setTimeout(function(){document.querySelector('input#log-work-time-logged').value='"+entry+"';document.querySelectorAll('textarea#comment')[1].focus();}, 1000)");
				var log_li = document.createElement("li");
				log_li.setAttribute("class", "aui-list-item");
				log_a.appendChild(log_s);
				log_li.appendChild(log_a);
				logDropUl.appendChild(log_li);
			})
			var logDropDiv = document.createElement("div");
			logDropDiv.setAttribute("class", "aui-dropdown2-section");
			logDropDiv.appendChild(logDropUl);
			logTrans.appendChild(logDropDiv);
			logDiv.appendChild(logLink);
			logDiv.appendChild(logTrans);
			logButton.appendChild(logDiv);
			timeLogging.appendChild(logButton);
		}

		if (!document.getElementById("type-val").textContent.includes("Sub-Task"))
		{
			var subButton = document.createElement("li");
			subButton.setAttribute("class", "toolbar-item");
			var subDiv = document.createElement("div");
			var subLink = document.createElement("a");
			subLink.setAttribute("href", "#");
			subLink.setAttribute("id", "opsbar-sub");
			subLink.setAttribute("aria-haspopup", "true");
			subLink.setAttribute("class", "toolbar-trigger aui-button aui-style-default aui-dropdown2-trigger");
			subLink.setAttribute("resolved", "");
			subLink.setAttribute("aria-controls", "opsbar-sub-drop");
			subLink.setAttribute("aria-expanded", "false");
			var subLbl = document.createElement("span");
			subLbl.setAttribute("class", "dropdown-text");
			subLbl.textContent = "Create Sub-Task";
			subLink.appendChild(subLbl);
			subDiv.appendChild(subLink);
			
			var subTrans = document.createElement("div");
			subTrans.setAttribute("id", "opsbar-sub-drop");
			subTrans.setAttribute("class", "aui-style-default aui-dropdown2 aui-layer");
			subTrans.setAttribute("resolved", "");
			subTrans.setAttribute("aria-hidden", "true");

			var subDropUl = document.createElement("ul");
			var issues = { req : "Requirements Review",
						   des : "Design Review",
						   dev : "Development",
						   cdr : "Code Review",
						   fix : "Development Fixes",
						   dep : "Deployment",
						   oth : "Other" };

			for (var k in issues) {
				if (issues.hasOwnProperty(k)) {
					var span = document.createElement("span");
					span.setAttribute("class", "trigger-label");
					span.textContent = issues[k];
					var alink = document.createElement("a");
					alink.setAttribute("id", "action_id_"+k);
					alink.setAttribute("class", "issueaction-create-subtask");
					alink.setAttribute("href", subUrl);
					alink.setAttribute("title", "Create sub-task");
					alink.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='"+issues[k]+" Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='"+issues[k]+"';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
					alink.appendChild(span);
					var list = document.createElement("li");
					list.setAttribute("class", "aui-list-item");
					list.appendChild(alink);
					subDropUl.appendChild(list);
				}
			}

			var subDropDiv  = document.createElement("div");
			subDropDiv.setAttribute("class", "aui-dropdown2-section");
			subDropDiv.appendChild(subDropUl);
			subTrans.appendChild(subDropDiv);
			subDiv.appendChild(subTrans);
			subButton.appendChild(subDiv);
			timeLogging.appendChild(subButton);
		}

		var opsButtons = document.getElementById("opsbar-jira.issue.tools");
		opsButtons.parentNode.insertBefore(timeLogging, opsButtons);
	}
}

setInterval(function(){
	if (document.getElementById("opsbar-logging") == null)
	{
		addLogger();
	}
}, 500)