import React from "react";
import "./CommonLayout.css";
import { NavLink } from "react-router-dom";

function CommonLayout(props) {
	return (
		<section id="header" className="d-flex align-items-center header">
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
								<h1>
									{props.title}
									<strong className="brand-name"> Gopeshwar Kumawat</strong>
								</h1>
								<h2 className="my-3">
									We are a team of talented developers and designers making web
									and mobile apps
								</h2>
								<div className="mt-3">
									<NavLink to={props.link} className="btn-get-started">
										{props.btnText}
									</NavLink>
								</div>
							</div>
							<div className="col-lg-6 order-1 order-lg-2 header-img">
								<img
									src={props.img}
									alt="home img"
									className="img-fluid animated"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CommonLayout;
