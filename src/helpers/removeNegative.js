export const removeNegativeSign = (money) => {
    console.log(money)
    if(money < 0) {
        money *= -1;
        console.log(money);
    } 

    return money
};