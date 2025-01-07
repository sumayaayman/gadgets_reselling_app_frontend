import Header from "../components/header";
import Drone from "../assets/drone.jpeg";

const Dashboard = () => {
	return (
		<div>
			<Header />
			<div className="p-4 row gy-4">
				<div className="col-3">
					<div className="card" style={{ width: "18rem" }}>
						<img src={Drone} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "18rem" }}>
						<img src={Drone} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "18rem" }}>
						<img src={Drone} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "18rem" }}>
						<img src={Drone} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "18rem" }}>
						<img src={Drone} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card" style={{ width: "18rem" }}>
						<img src={Drone} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
