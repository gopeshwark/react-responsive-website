import React, { useState } from "react";
import "./Contact.css";

function Contact() {
	const [data, setData] = useState({
		fullName: "",
		phone: "",
		email: "",
		message: "",
	});

	const InputChange = (e) => {
		const { name, value } = e.target;

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		alert(`${data.fullName}`);
	};

	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Contact Us</h1>
			</div>
			<div className="container contact-_div">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<form onSubmit={formSubmit}>
							<div className="mb-3">
								<label className="form-label">Full Name</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									name="fullName"
									value={data.fullName}
									onChange={InputChange}
									placeholder="Enter your name..."
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Phone</label>
								<input
									type="number"
									className="form-control"
									id="exampleFormControlInput1"
									name="phone"
									value={data.phone}
									onChange={InputChange}
									placeholder="Mobile number"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									name="email"
									value={data.email}
									onChange={InputChange}
									placeholder="name@example.com"
								/>
							</div>
							<div class="mb-3">
								<label className="form-label">Message</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name="message"
									value={data.message}
									onChange={InputChange}
								></textarea>
							</div>
							<div className="col-12">
								<button className="btn btn-outline-primary" type="submit">
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
