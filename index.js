const giaquadem = 200;
let giovao = new Date("2022-04-06 10:00:00");
let giora = new Date("2022-04-07 11:00:00");

function tinhtienphong(giovao, giora) {
    var sogio;
    sogio = (giora.getTime() - giovao.getTime()) / 1000;
    sogio /= (60 * 60);
    sogio = Math.abs(Math.round(sogio));
    if (sogio > 30) {
        return 400;
    } else {
        if (giovao.getHours() < 12) {
            if (sogio > 24) {
                sogio -= 24;
                return (200 + sogio * 30);
            } else {
                return (giaquadem);
            }
        } else {
            if (giora.getHours() > 12) {
                sogio = giora.getHours() - 12;
                return (200 + sogio * 30);
            } else {
                return (giaquadem);
            }
        }
    }
}
console.log(tinhtienphong(giovao, giora));