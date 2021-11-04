import Script from 'next/script'

export default function GetButtonWidget(){
	return (
		<>
			<Script strategy="lazyOnload">
				{
					(function () {
						var options = {
								whatsapp: "+1(302)3140099", // WhatsApp number
								telegram: "TulixApp", // Telegram bot username
								call_to_action: "Ask A Question.", // Call to action
								button_color: "#8CC63F", // Color of button
								position: "right", // Position may be 'right' or 'left'
								order: "whatsapp,telegram", // Order of buttons
								pre_filled_message: "Hi there, welcome to Tulix chat. How may we help?", // WhatsApp pre-filled message
						};
						var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
						var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
						s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
						var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
					})()
				}
			</Script>
		</>
	)
}
