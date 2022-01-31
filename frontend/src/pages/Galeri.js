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
        <h1>teknofest</h1>
        <div className="container">
          <div className="project"><img src="images/img-t1.JPG" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-t2.JPG" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-t3.JPG" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-t4.JPG" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-t5.JPG" className="project-image" alt="" /></div>
        </div>
        <h1>uçuş</h1>
        <div className="container">
          <div className="project"><img src="images/img-u1.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-u2.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-u3.jpg" className="project-image" alt="" /></div>
          <div className="project"><img src="images/img-u4.jpg" className="project-image" alt="" /></div>
        </div> 
        <div id="konus">
          <h1>konuşmalarımız</h1>
          <div className="container">
            <div className="project"><img src="images/img-k1.jpg" className="project-image" alt="" /></div>
            <div className="project"><img src="images/img-k2.jpg" className="project-image" alt="" /></div>
            <div className="project"><img src="images/img-k3.jpg" className="project-image" alt="" /></div>
            <div className="project"><img src="images/img-k4.jpg" className="project-image" alt="" /></div>
          </div>
        </div>
      </div>
    );
}
