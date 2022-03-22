export const addSign = (money) => {
    if(money < 0) {
        return '-';
    } else {
        return '';
    }
    // return money < 0? '-' : '';
}