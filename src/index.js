// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var change = {};

    if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};


    while (currency > 0) {
        if(currency - 50 >= 0) {
            currency -= 50;
            if (change['H']){
                change['H']++;
            }
            else change['H'] = 1;
            continue;
        }

        if(currency - 25 >= 0) {
            currency -= 25;
            if (change['Q']){
                change['Q']++;
            }
            else change['Q'] = 1;
            continue;
        }

        if(currency - 10 >= 0) {
            currency -= 10;
            if (change['D']){
                change['D']++;
            }
            else change['D'] = 1;
            continue;
        }

        if(currency - 5 >= 0) {
            currency -= 5;
            if (change['N']){
                change['N']++;
            }
            else change['N'] = 1;
            continue;
        }else{
            change['P'] = currency;
            break;
        }

    }


    return change;
}
