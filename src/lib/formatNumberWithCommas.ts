export function formatNumberWithCommas(x: number) {
    if (isNaN(x)) {
      return "0.00";
    }
    return parseFloat(x.toString())
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  