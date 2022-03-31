import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuth= false;
  i=0
  publication={"id":0,"contenu":""}
  
  addPub(event:Event)
  {
    var text=<HTMLInputElement> document.getElementById("zoneText")
    this.publication.id=this.i
    this.publication.contenu=text.value;

    var div=<HTMLDivElement>document.getElementById("zoneAffichage")
    div.innerHTML=div.innerHTML+` <br><div style="padding-left:130px;">
    <div class="card" style="width: 70rem;">
      <div class="card-body">
        <h5 class="card-title">${this.publication.id}</h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text" id="pub"> ${this.publication.contenu}</p>
      </div>
    </div>
  </div> <br>`

  this.i++;
  text.value=""
  }

  constructor() { }
  ngOnInit(): void {}

 
}

