// PLEASE DON'T change function name
module.exports = function makeExchange(a) {
    var new_list = {};
    var money = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    };
  if (a > 10000) {
        new_list.error = "You are rich, my friend! We don't have so much coins for exchange";
        return new_list;
    } else if (a == 0) {
	return {};
	}
    for (var key in money) {
        var val = Math.floor(a / money[key]);
      if ( val >= 1 ) {
          new_list[key] = val;
          a = a - ( money[key] * val);
      } else {
          continue;
      }
    }
    return new_list;

}
