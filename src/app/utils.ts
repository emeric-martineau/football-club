export default class Utils {
  static formatNumber(num: number) {
    // console.info(formatNumber(900)) // 9h00
    return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1h')
  }

  static classCssName(categoryName: string | undefined): string {
    switch (categoryName) {
      case 'U12/U13': return 'bg-warning';
      case 'U11': return 'bg-primary';
      default: return 'bg-success';
    }
  }
}
