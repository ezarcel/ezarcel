function importJS(url) {
	fetch('https://raw.githubusercontent.com/ezarcel/ezarcel/master/safasp/' + url, fetchOptions).then(r => r.text())
		.then(r => {
			const script = document.createElement('script')
			script.textContent = r
			document.body.appendChild(script)
		})
}
importJS('all.js')
importJS(location.href.slice(location.href.indexOf('/students/') + ('/students/').length) + '.js')