import React from "react";
import Card from "../../Components/Card/Card";
import ServicesData from "../../data";
import "./Services.css";

function Services() {
	return (
		<div className="services">
			<div className="my-5">
				<h1 className="text-center"> Our Services </h1>
			</div>
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row gy-4">
							{ServicesData.map((data, index) => (
								<Card key={index} img={data.img} title={data.title} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
