export const currencyFormatter = (money) => {
    const numberFormatter = new Intl.NumberFormat()
   return parseInt(numberFormatter.format(money)).toFixed(2);
} 