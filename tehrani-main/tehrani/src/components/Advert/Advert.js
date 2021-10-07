import  React  from "react";
import "./Advert.css";
// import  "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';


class  Advert extends React.Component
{
	 render()
	 {
		 // console.log(this.props.top);
	 	 return (
			<>
	 	 		<div className="back-pic w-100 " style={
	 	 			 {
	 	 			 	  backgroundImage: "url(" + this.props.backgroundPic + ")",
						  padding: "5%"
	 	 			 }
	 	 		}>
					<div className="d-inline-block text-center w-100">
						<button style={{marginRight: "2%"}} type="button" className="btn-success btn-lg" >پیوستن</button>
						<h2 className="text-center text-white d-inline-block" >به خبرنامه ی ما بپیوندید.</h2>
					</div>
				</div>
			</>
			
		 );
	 }
}

export default  Advert
