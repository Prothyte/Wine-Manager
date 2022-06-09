import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  hamburgerClick() {
    const hamburger = document.getElementById("hamburger");
    const navul = document.getElementById("nav-ul");
    const login = document.getElementById("login")

    hamburger?.addEventListener("click", () =>{
      navul?.classList.toggle("show")
      login?.classList.toggle("show")
    });
   
  }


}
