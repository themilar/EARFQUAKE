const { fromUnixTime, format } = require("date-fns");
let time = fromUnixTime(1650746106);
console.log(time.getTime());
console.log(new Date());
// 1650847461
// 1650746106080
