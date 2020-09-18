console.log('main.js');
function importJS(url) {
	fetch('https://raw.githubusercontent.com/ezarcel/ezarcel/master/safasp/' + url).then(r => r.text())
		.then(r => {
			console.log(r);
			const script = document.createElement('script');
			script.innerText = r;
			document.body.appendChild(script);
		})
};
importJS('all.js');
importJS(location.href.slice(location.href.indexOf('/students/')) + '.js');
if (location.href.includes('/students/index.php')) importJS('index.php.js');