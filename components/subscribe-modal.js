
export default function SubscribeModal(){
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
							<div id="mc_embed_signup">
								<form action="https://app.us2.list-manage.com/subscribe/post?u=1f7c48c812ea5de5f89ea5e77&id=4042104668" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
									<label htmlFor="name">Name</label>
									<input type="text" defaultValue="" name="FNAME" className="form-control form-control-lg mb-3" id="mce-FNAME" placeholder="First Name" required />
									<label htmlFor="email">Email</label>
									<input type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" className="form-control form-control-lg mb-4" placeholder="Enter your email" required />
									<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_1f7c48c812ea5de5f89ea5e77_4042104668" tabIndex={-1} defaultValue /></div>
									<button id="mc-embedded-subscribe" className="btn btn-primary btn-lg btn-block" type="submit">Notify Me!</button>
								</form>
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