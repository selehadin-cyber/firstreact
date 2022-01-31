import "../App.css"

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
            <img class="img-1" src="images/gp2.jpg"></img>
            </label>
            <div class="content content-1">
            <span> Eylül 2020</span>
            <div class="title">Uçağımızı uçurduk</div>
            <div class="text">Bursanın Yunuseli havalimanında uçağımızı uçurduk.</div>
            
            </div>
        </div>
        <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="img-2" src="images/gp1.jpg"></img>
            </label>
            <div class="content content-2">
            <span>Ağustos 2021</span>
            <div class="title">Finale kalmaya hak kazandık</div>
            <div class="text">Gökpusu Takımı olarak Uluslararası Serbest Görev İHA kategorisinde finale kalmaya hak kazanmıştır. Bize inanan, destek veren herkese teşekkür ederiz.</div>
            
            </div>
        </div>
        <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="img-3" src="images/gp3.jpg"></img>
            </label>
            <div class="content content-3">
            <span>Aralık 2020</span>
            <div class="title">Gökpusu kuruldu</div>
            <div class="text">12 Aralık günü gökpusu kuruldu böylelikle uzun bir hikayeninin başlangıcına ılk adım atıldı</div>
            
            </div>
        </div>
    </section>
</div>
    );
}
