import React from "react";
import "./Home.css";
import CommonLayout from "../../Components/CommonLayout/CommonLayout";
import main from "../../Assets/images/8.svg";

function Home() {
	return (
		<CommonLayout
			title="Automate your business needs with"
			link="/services"
			btnText="Get Started"
			img={main}
		/>
	);
}

export default Home;
