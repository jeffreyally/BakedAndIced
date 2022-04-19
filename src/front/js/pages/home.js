import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import springURL from "../../img/spring.jpeg";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center" style={{ backgroundColor: 'ghostwhite' }}>

			<h3><span style={{ color: '#B388EB' }}>B388EB floral lavender</span>,
				<span style={{ color: '#F7AEF8' }}>F7AEF8 plum something</span>,
				<span style={{ color: '#FDC5F5' }}> FDC5F5cotton candy</span>,
			</h3>

			<div id="carouselExampleInterval" class=" carousel slide" data-bs-ride="carousel" >
				<div class="carousel-inner">
					<div class="carousel-item active" data-bs-interval="90000" style={{ position: 'relative' }}>

						<div class="container">
							<div class="row">

								<div class="col-12 d-flex justify-content-center ">
									<img src="https://lh3.googleusercontent.com/ZWakc4zAWgaTl0sKilWnwWecGMBRTUADABjF0Lvmue1oRkRukR6KbG2hCQ1qSaid81AnAQBT9U5P3sqS5A8UOOCVHHuKT-X-wXmN53jERfmzzqP-v9C7fIeCw8gUc75VEbYCtviqgX1RCYpSNKJafqiuRrVhxrFRvkxwIrEDhKL3tZCwgNBby7lVrmWq-iT54N6TSlIEV59_m9AerL17biLVVS9-bwmZPSw8XHwU42UzERwhW6uW_Lo_aDPlm9pXAt6grDOv7IjOloeqpwdGuWovVm9266xIQez2YqfJ4U9n_kua75Gvx5dieA-cZUxn-eFZBs2dKS25H6XlTPH5EBFkr6QLMX3PibHragBL68lrNXSOS6o6qTG6DQn_EkjbJ36JO9i-U5YsxT4D_Cdgres1CvTBrokEYKwqGOisGL5jLKD6pEVzbf84_b_D016RBKDU9h2bNHBKsGF8Mv-o8pkVBgVJJ8hb1hz1NqYWH1uERA-Wb_pbqUcNVRmES-XUARzNV5V7WyXEKsT0ZQ1l6rccZRBZLcEemhZFfgBPm6NQwYBcvQCb3GTbzYaqLcXTZQtv2aUxMONRC7m5hSoIfML_Xig54skm-5RsMgTZ806DJsLjtBW_E-RAVCZI0IKecM69ZA0_B5oAPpFgrgb7v0TZW3ZD4LHxgFAd8ys6J7ubPzyLW1BHh5ZPG7HZdywxiCe5L44uao3LNrS_h6k0PfHjJk7g5AaSBKp82yRB1515FeAN7PZgtgzFjntqMQ=w687-h625-no?authuser=0" class="d-block" alt="..."
									style={{maxWidth:'100%', height:'65vh'}}/>
								</div>

							</div>
						</div>

					</div>
					<div class="carousel-item" data-bs-interval="90000" style={{ position: 'relative' }}>
					<div class="container">
							<div class="row">

								<div class="col-12 d-flex justify-content-center on your column div">
									<img src="https://lh3.googleusercontent.com/ZWakc4zAWgaTl0sKilWnwWecGMBRTUADABjF0Lvmue1oRkRukR6KbG2hCQ1qSaid81AnAQBT9U5P3sqS5A8UOOCVHHuKT-X-wXmN53jERfmzzqP-v9C7fIeCw8gUc75VEbYCtviqgX1RCYpSNKJafqiuRrVhxrFRvkxwIrEDhKL3tZCwgNBby7lVrmWq-iT54N6TSlIEV59_m9AerL17biLVVS9-bwmZPSw8XHwU42UzERwhW6uW_Lo_aDPlm9pXAt6grDOv7IjOloeqpwdGuWovVm9266xIQez2YqfJ4U9n_kua75Gvx5dieA-cZUxn-eFZBs2dKS25H6XlTPH5EBFkr6QLMX3PibHragBL68lrNXSOS6o6qTG6DQn_EkjbJ36JO9i-U5YsxT4D_Cdgres1CvTBrokEYKwqGOisGL5jLKD6pEVzbf84_b_D016RBKDU9h2bNHBKsGF8Mv-o8pkVBgVJJ8hb1hz1NqYWH1uERA-Wb_pbqUcNVRmES-XUARzNV5V7WyXEKsT0ZQ1l6rccZRBZLcEemhZFfgBPm6NQwYBcvQCb3GTbzYaqLcXTZQtv2aUxMONRC7m5hSoIfML_Xig54skm-5RsMgTZ806DJsLjtBW_E-RAVCZI0IKecM69ZA0_B5oAPpFgrgb7v0TZW3ZD4LHxgFAd8ys6J7ubPzyLW1BHh5ZPG7HZdywxiCe5L44uao3LNrS_h6k0PfHjJk7g5AaSBKp82yRB1515FeAN7PZgtgzFjntqMQ=w687-h625-no?authuser=0" class="d-block" alt="..."
									style={{maxWidth:'100%', height:'65vh'}}/>
								</div>

							</div>
						</div>

					</div>

				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
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

			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>

	);
};
