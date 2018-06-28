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
		/*var logLink = document.createElement("a");
		logLink.setAttribute("href", logUrl);
		logLink.setAttribute("class", "toolbar-trigger issueaction-log-work");
		logLink.setAttribute("title", "Create sub-task for this issue");
		logLink.setAttribute("id", "logger-log-work");
		logLink.setAttribute("onclick", "setTimeout(function(){document.querySelectorAll('textarea#comment')[1].value = 'log work';}, 1000)");*/
		var log15s = document.createElement("span");
		log15s.setAttribute("class", "trigger-label");
		log15s.textContent = "Log 15";
		var log15a = document.createElement("a");
		log15a.setAttribute("id", "action_id_log15");
		log15a.setAttribute("class", "issueaction-log-work");
		log15a.setAttribute("href", logUrl);
		log15a.setAttribute("title", "Log time");
		log15a.setAttribute("onclick", "setTimeout(function(){document.querySelector('input#log-work-time-logged').value='15m';document.querySelectorAll('textarea#comment')[1].focus();}, 1000)");
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
		log30a.setAttribute("href", logUrl);
		log30a.setAttribute("title", "Log time");
		log30a.setAttribute("onclick", "setTimeout(function(){document.querySelector('input#log-work-time-logged').value='30m';document.querySelectorAll('textarea#comment')[1].focus();}, 1000)");
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
		log1ha.setAttribute("href", logUrl);
		log1ha.setAttribute("title", "Log time");
		log1ha.setAttribute("onclick", "setTimeout(function(){document.querySelector('input#log-work-time-logged').value='1h';document.querySelectorAll('textarea#comment')[1].focus();}, 1000)");
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
		log2ha.setAttribute("href", logUrl);
		log2ha.setAttribute("title", "Log time");
		log2ha.setAttribute("onclick", "setTimeout(function(){document.querySelector('input#log-work-time-logged').value='2h';document.querySelectorAll('textarea#comment')[1].focus();}, 1000)");
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
		logDropDiv.setAttribute("class", "aui-dropdown2-section");
		logDropDiv.appendChild(logDropUl);
		logTrans.appendChild(logDropDiv);
		/*var logSpan = document.createElement("span");
		logSpan.setAttribute("class", "trigger-label");
		logSpan.textContent = "Log work";
		logLink.appendChild(logSpan);
		logDiv.appendChild(logLink);
		logButton.appendChild(logDiv);*/
		logDiv.appendChild(logLink);
		logDiv.appendChild(logTrans);
		logButton.appendChild(logDiv);
		timeLogging.appendChild(logButton);
		}

		/*if (!document.getElementById("type-val").textContent.includes("Sub-Task"))
		{
			var subButton = document.createElement("li");
			subButton.setAttribute("class", "toolbar-item);
			var subLink = document.createElement("a");
			subLink.setAttribute("href", subUrl+"&type=");
			subLink.setAttribute("class", "toolbar-trigger issueaction-create-subtask");
			subLink.setAttribute("title", "Create sub-task for this issue");
			subLink.setAttribute("id", "logger-create-subtask");
			var subSpan = document.createElement("span");
			subSpan.setAttribute("class", "trigger-label");
			subSpan.textContent = "Create su-tas";
			subLink.appendChild(subSpan);
			subButton.appendChild(subLink);
			timeLogging.appendChild(subButton);
		}*/

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

			var reqS = document.createElement("span");
			reqS.setAttribute("class", "trigger-label");
			reqS.textContent = "Requirements Review";
			var reqA = document.createElement("a");
			reqA.setAttribute("id", "action_id_req");
			reqA.setAttribute("class", "issueaction-create-subtask");
			reqA.setAttribute("href", subUrl);
			reqA.setAttribute("title", "Create sub-task");
			reqA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Requirements Review Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Requirements Review';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			reqA.appendChild(reqS);
			var reqLi = document.createElement("li");
			reqLi.setAttribute("class", "aui-list-item");
			reqLi.appendChild(reqA);

			var desS = document.createElement("span");
			desS.setAttribute("class", "trigger-label");
			desS.textContent = "Design Review";
			var desA = document.createElement("a");
			desA.setAttribute("id", "action_id_des");
			desA.setAttribute("class", "issueaction-create-subtask");
			desA.setAttribute("href", subUrl);
			desA.setAttribute("title", "Create sub-task");
			desA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Design Review Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Design Review';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			desA.appendChild(desS);
			var desLi = document.createElement("li");
			desLi.setAttribute("class", "aui-list-item");
			desLi.appendChild(desA);

			var devS = document.createElement("span");
			devS.setAttribute("class", "trigger-label");
			devS.textContent = "Development";
			var devA = document.createElement("a");
			devA.setAttribute("id", "action_id_dev");
			devA.setAttribute("class", "issueaction-create-subtask");
			devA.setAttribute("href", subUrl);
			devA.setAttribute("title", "Create sub-task");
			devA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Development Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Development';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			devA.appendChild(devS);
			var devLi = document.createElement("li");
			devLi.setAttribute("class", "aui-list-item");
			devLi.appendChild(devA);

			var cdrS = document.createElement("span");
			cdrS.setAttribute("class", "trigger-label");
			cdrS.textContent = "Code Review";
			var cdrA = document.createElement("a");
			cdrA.setAttribute("id", "action_id_cdr");
			cdrA.setAttribute("class", "issueaction-create-subtask");
			cdrA.setAttribute("href", subUrl);
			cdrA.setAttribute("title", "Create sub-task");
			cdrA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Code Review Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Code Review';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			cdrA.appendChild(cdrS);
			var cdrLi = document.createElement("li");
			cdrLi.setAttribute("class", "aui-list-item");
			cdrLi.appendChild(cdrA);

			var fixS = document.createElement("span");
			fixS.setAttribute("class", "trigger-label");
			fixS.textContent = "Development Fixes";
			var fixA = document.createElement("a");
			fixA.setAttribute("id", "action_id_fix");
			fixA.setAttribute("class", "issueaction-create-subtask");
			fixA.setAttribute("href", subUrl);
			fixA.setAttribute("title", "Create sub-task");
			fixA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Development Fixes Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Development Fixes';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			fixA.appendChild(fixS);
			var fixLi = document.createElement("li");
			fixLi.setAttribute("class", "aui-list-item");
			fixLi.appendChild(fixA);

			var depS = document.createElement("span");
			depS.setAttribute("class", "trigger-label");
			depS.textContent = "Deployment";
			var depA = document.createElement("a");
			depA.setAttribute("id", "action_id_depA");
			depA.setAttribute("class", "issueaction-create-subtask");
			depA.setAttribute("href", subUrl);
			depA.setAttribute("title", "Create sub-task");
			depA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Deployment Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Deployment';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			depA.appendChild(depS);
			var depLi = document.createElement("li");
			depLi.setAttribute("class", "aui-list-item");
			depLi.appendChild(depA);

			var othS = document.createElement("span");
			othS.setAttribute("class", "trigger-label");
			othS.textContent = "Other";
			var othA = document.createElement("a");
			othA.setAttribute("id", "action_id_othA");
			othA.setAttribute("class", "issueaction-create-subtask");
			othA.setAttribute("href", subUrl);
			othA.setAttribute("title", "Create sub-task");
			othA.setAttribute("onclick", "setTimeout(function(){document.getElementById('issuetype-field').value='Other Sub-Task';document.getElementById('assign-to-me-trigger').click();document.getElementById('customfield_11423').value='"+userName+"';document.getElementById('summary').value='Other';document.getElementById('horizontal').children[0].children[1].children[0].click();}, 1000); setTimeout(function(){document.getElementById('timetracking').focus();}, 2000)");
			othA.appendChild(othS);
			var othLi = document.createElement("li");
			othLi.setAttribute("class", "aui-list-item");
			othLi.appendChild(othA);

			var subDropUl = document.createElement("ul");
			subDropUl.appendChild(reqLi);
			subDropUl.appendChild(desLi);
			subDropUl.appendChild(devLi);
			subDropUl.appendChild(cdrLi);
			subDropUl.appendChild(fixLi);
			subDropUl.appendChild(depLi);
			subDropUl.appendChild(othLi);
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

function logAlert() {
	alert("logging");
}

setInterval(function(){
	if (document.getElementById("opsbar-logging") == null)
	{
		addLogger();
	}
}, 500)