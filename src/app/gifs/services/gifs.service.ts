import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})
export class GifsService {
  private itemHistory: string[] = []
  private serviceUrl: string = "https://api.giphy.com/v1/gifs"
  private apiKey: string = "7LAt1FMlC1RUP2wn73O4MKl1axPi0Wcv"

  constructor(private http: HttpClient) {}

  get getItemHistory(): string[] {
    return [...this.itemHistory]
  }

  private oranizeHistory(item: string) {
    item = item.toLowerCase()

    if (this.itemHistory.includes(item)) {
      this.itemHistory = this.itemHistory.filter((oldItem) => oldItem !== item)
    }

    this.itemHistory.unshift(item)
    this.itemHistory = this.getItemHistory.splice(0, 10)
  }

  searchItem(item: string): void {
    if (item.length === 0) return
    this.oranizeHistory(item)

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("limit", "10")
      .set("q", item)

    this.http
      .get(`${this.serviceUrl}/search`, { params })
      .subscribe((response) => console.log(response))
  }
}
