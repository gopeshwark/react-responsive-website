import React from "react";
import CommonLayout from "../../Components/CommonLayout/CommonLayout";
import main from "../../Assets/images/7.svg";

function About() {
	return (
		<CommonLayout
			title="Welcome to About page"
			link="/contact"
			btnText="Contact Now"
			img={main}
		/>
	);
}

export default About;
