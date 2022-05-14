export default class Utils {
  static formatNumber(num: number) {
    // console.info(formatNumber(900)) // 9h00
    return num.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1h')
  }
}
