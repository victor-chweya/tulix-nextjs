import React, { useRef, useState } from 'react';
export default function SubscribeModal(){
	// 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
	const [state, setState] = useState('idle')

  const subscribe = async (e) => {
    e.preventDefault();
		setState('Loading')
		

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(`${error} : There was an error adding you to the list. Shoot us an email at [info@tulix.app] and we'll add you.`);
			setState('Error');

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You\'re now on the list, thank you!.');
		setState('Success');
  };
	return (
		<>
			<div className="modal fade" id="subscribeModal" tabIndex={-1} role="dialog" aria-labelledby="subscribeModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content p-2 p-lg-4">
						<div className="modal-header border-0">
							<h5 className="modal-title">Get Early Access</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							{/* <div id="mc_embed_signup">
								<form action="https://app.us2.list-manage.com/subscribe/post?u=1f7c48c812ea5de5f89ea5e77&id=4042104668" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
									<label htmlFor="name">Name</label>
									<input type="text" defaultValue="" name="FNAME" className="form-control form-control-lg mb-3" id="mce-FNAME" placeholder="First Name" required />
									<label htmlFor="email">Email</label>
									<input type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" className="form-control form-control-lg mb-4" placeholder="Enter your email" required />
									<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1f7c48c812ea5de5f89ea5e77_4042104668" tabIndex={-1} defaultValue /></div>
									<button id="mc-embedded-subscribe" className="btn btn-primary btn-lg btn-block" type="submit">Get!</button>
								</form>
							</div> */}
							<form onSubmit={subscribe} id="form-modal" >
							<label htmlFor="email">Email</label>      
								<input
									id="email-input"
									name="email"
									placeholder="Enter Email Address"
									ref={inputEl}
									required
									type="email"
									className="form-control form-control-lg mb-4"
								/>
								<button type="submit" disabled={state === 'Loading'} className="btn btn-primary btn-lg mb-2 col">Get Early Access</button>
							</form>
							{/* {state === 'Error' && (
								<div className="alert alert-danger alert-dismissible fade show" role="alert">
									<strong>{message}:</strong> Something Went Wrong
									<button type="button" className="close" data-dismiss="alert" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
							)}
									{state === 'Success' && (
										<div className="alert alert-success alert-dismissible fade show" role="alert">
											<strong>{message}</strong> 
											<button type="button" className="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
									)} */}
							
								<div className="m-1 text-muted text-center">
									<p className={`small ${state === 'Error' && ('text-danger')}  ${state === 'Success' && ('text-success')}`}>{message ? message : 'Limited availability. Register your interest now.'}</p>	
								</div>
							
						</div>
						{/* <div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}