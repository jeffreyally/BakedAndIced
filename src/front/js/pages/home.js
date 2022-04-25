import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import springURL from "../../img/spring.jpeg";
import springFlowers from "../../img/springflowers.jpeg"
import BabyShower from "../../img/babyshower.jpeg"
import wedding1 from "../../img/wedding1.jpeg"
import wedding2 from "../../img/wedding2.jpeg"
import logo from "../../img/Logo.png"

import {HomePageCookieCarousel} from '../component/homePageCookieCarousel.js'


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center" style={{ backgroundColor: 'ghostwhite' }}>
			<br></br>
			<p class="text-center" style={{fontFamily:'Bubblegum Sans, cursive',
            fontSize:'3rem'}}><i>CHECK OUT OUR DESIGNS</i></p>
			<br></br>
			<HomePageCookieCarousel/>


			
			
			<h3><span style={{ color: '#B388EB' }}>B388EB floral lavender</span>,
				<span style={{ color: '#F7AEF8' }}>F7AEF8 plum something</span>,
				<span style={{ color: '#FDC5F5' }}> FDC5F5cotton candy</span>,
			</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			{/* <p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p> */}
		</div>

	);
};


let carouselcode = `<div id="carouselExampleInterval" class=" carousel slide carousel carousel-dark" data-bs-ride="carousel" >
<div class="carousel-inner">
	<div class="carousel-item active" data-bs-interval="90000" style={{ position: 'relative' }}>

		<div class="container">
			<div class="row">

				<div class="col-12 d-flex justify-content-center ">
					<img src={springFlowers}class="d-block" alt="..."
						style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
				</div>

			</div>
		</div>

	</div>
	<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
		<div class="container">
			<div class="row">
			

				<div class="col-12 d-flex justify-content-center on your column div">
					<img src= {springURL} class="d-block" alt="..."
						style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
				</div>

			</div>
		</div>

	</div>
	<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
		<div class="container">
			<div class="row">
			

				<div class="col-12 d-flex justify-content-center on your column div">
					<img src= {BabyShower} class="d-block" alt="..."
						style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
				</div>

			</div>
		</div>

	</div>
	<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
		<div class="container">
			<div class="row">
			

				<div class="col-12 d-flex justify-content-center on your column div">
					<img src= {wedding1} class="d-block" alt="..."
						style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
				</div>

			</div>
		</div>

	</div>
	<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
		<div class="container">
			<div class="row">
			

				<div class="col-12 d-flex justify-content-center on your column div">
					<img src= {wedding2} class="d-block" alt="..."
						style={{ maxWidth: '100%', height: '65vh', borderStyle:'solid', borderColor:'black' }} />
				</div>

			</div>
		</div>

	</div>

</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
					<span class="visually-hidden">Previous</span>
				</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="visually-hidden">Next</span>
</button>
</div>`