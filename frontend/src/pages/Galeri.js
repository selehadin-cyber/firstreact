import "../App.css"
import CardItem from "../components/CardItem";
import Cards from "../components/Cards";
import "../components/Cards.css"

export default function Galeri() {
    return (
        <div className='cards'>
        <h1>Galeri</h1>
        <div className="container">
          <div className="project"><img src="images/gp1.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/gp2.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/gp3.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/gp4.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/gp5.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/gp6.jpg" className="project-image" alt="" /></div>
        </div>
      </div>
    );
}
