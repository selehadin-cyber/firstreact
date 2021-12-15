import "../App.css"
import CardItem from "../components/CardItem";
import Cards from "../components/Cards";
import "../components/Cards.css"

export default function Duyuru() {
    return (
<div className="fit" id="fit">
    <section class="blog-card">
        <input type="radio" name="select" id="tap-1" checked></input>
        <input type="radio" name="select" id="tap-2"></input>
        <input type="radio" name="select" id="tap-3"/>
        <input type="checkbox" id="imgTap"/>
        <div class="sliders">
            <label for="tap-1" class="tap tap-1"></label>
            <label for="tap-2" class="tap tap-2"></label>
            <label for="tap-3" class="tap tap-3"></label>
        </div>
        <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="img-1" src="profile-1.png"></img>
            </label>
            <div class="content content-1">
            <span>21 auğustos 2021</span>
            <div class="title">Finale kalmaya hak kazandık</div>
            <div class="text">Gökpusu Takımı olarak Uluslararası Serbest Görev İHA kategorisinde finale kalmaya hak kazanmıştır. Bize inanan, destek veren herkese teşekkür ederiz.</div>
            
            </div>
        </div>
        <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="img-2" src="profile-1.png"></img>
            </label>
            <div class="content content-2">
            <span>26 December 2018</span>
            <div class="title">Lorem Ipsum Dolor</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.</div>
            
            </div>
        </div>
        <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="img-3" src="https://png.pngtree.com/png-vector/20200922/ourlarge/pngtree-islamic-calligraphy-allahu-akbar-with-tight-line-art-png-image_2349509.jpg"></img>
            </label>
            <div class="content content-3">
            <span>26 December 2019</span>
            <div class="title">Lorem Ipsum Dolor</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi nemo commodi sint eum ipsam odit atque aliquam officia impedit.</div>
            
            </div>
        </div>
    </section>
</div>
    );
}
