import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "shared-lazy-image",
  templateUrl: "./lazy-image.component.html"
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) throw new Error("Url property is required")
  }

  @Input()
  url!: string

  @Input()
  alt: string = ""

  hasLoaded: boolean = false

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true
    }, 1000)
  }
}
