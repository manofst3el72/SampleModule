/*




 */
Module.register("MMM-Rhino2", {
	defaults: {},
	start: function () {},
	getDom: function() {},
	notificationReceived: function() {},
	socketNotificationReceived: function() {},
  })

//   getDom: function() {
// 	var element = document.createElement("div")
// 	element.className = "myContent"
// 	element.innerHTML = "Hello, World!"
// 	return element
//   },
  
	const Rhino = require("@picovoice/rhino-node");


  	const contextPath = "Page-Selector.rhn";
  	const accessKey = "SKEY+1QX0RJ+yHD3or4+fY4C/Odg2kKiCfRkD2q9XHmCuU8IyUfpFA=="
  	const rhino = new Rhino(accessKey, contextPath);


	  function getNextAudioFrame() {
		// ...
		return audioFrame;
	  }
	  
	  
	  let isFinalized = false;
	  
	  
	  while (!isFinalized) {
		const audioFrame = getNextAudioFrame();
		isFinalized = rhino.process(audioFrame);
	  
	  
		if (isFinalized) {
		  const inference = rhino.getInference();
		  if (inference.isUnderstood) {
			  const intent = inference.intent;
			  const slots = inference.slots;
			  if (slots =  "weather") { 
			  this.sendNotification("SHOW_HIDDEN_PAGE","Dweather")}



		  } else {
			this.sendNotification('PLAY_SOUND', 'buzz.wav')
		  }
		}
	  }
	  rhino.release()
  

  