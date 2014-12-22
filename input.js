//(function(){
    function getKey(event) {
	var code = event.keyCode;
        var key;

        switch(code) {
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        }

       	//pressedKeys[key] = status;
	return key;
}
/*
    document.addEventListener('keydown', function(e) {
        setKey(e, true);
	console.log("Works");
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
*/
//})();