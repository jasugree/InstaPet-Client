let APIURL = "";
switch (window.location.hostname) {
	//this is the local hgost name of your react app
	case "localhost":
	case "127.0.0.01":
		APIURL = "http://localhost:3001";
		break;
	case "jsg-jsg-instapet.herokuapp.com":
		APIURL = "https://jsg-jsg-front-InstaPet.herokuapp.com";
}

export default APIRUL;
