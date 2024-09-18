import { Component } from "@angular/core"

import { GifsService } from "../../services/gifs.service"
import { Gif } from "../../components/interfaces/gifs.interfaces"

@Component({
  selector: "gifs-home-page",
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css"
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get listItem(): Gif[] {
    return this.gifsService.gifList
  }
}
