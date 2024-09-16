import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})
export class GifsService {
  private itemHistory: string[] = []

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
  }
}
