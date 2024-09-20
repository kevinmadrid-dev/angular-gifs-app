import { Component, ElementRef, ViewChild } from "@angular/core"

import { GifsService } from "../../services/gifs.service"

@Component({
  selector: "gifs-search-box",
  templateUrl: "./search-box.component.html"
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild("txtSearchInput")
  tagInput!: ElementRef<HTMLInputElement>

  searchItem(): void {
    const item = this.tagInput.nativeElement.value

    this.gifsService.searchItem(item)

    this.tagInput.nativeElement.value = ""
  }
}
