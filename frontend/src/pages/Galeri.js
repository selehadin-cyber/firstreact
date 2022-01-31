import "../App.css"
import "./gallery.css"
import CardItem from "../components/CardItem";
import Cards from "../components/Cards";
import "../components/Cards.css"

export default function Galeri() {
    return (
        <div className='cards'>
        <h1>Galeri</h1>
        <h2>videolar</h2>
        <video width="320px" height="240px" src="videos/video1.mp4" controls>
          <source src="videos/video1.mp4" type="video/mp4"/>
        </video>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/ai6zLXuzvI8">
        </iframe> 
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
