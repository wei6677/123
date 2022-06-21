if ($response.statusCode != 200) {
  $done(Null);
}
console.log("haha")
const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
    if (para.length<7) {
      return para
    } else {
      return para.slice(0,6)
    }
  
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}


var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'];
var ip = obj['query'];
var description = "国家" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' + "IP地址" + ":" + obj['query];


                                                                                                                                              
                                                                                                                                              
$done({title, subtitle, ip, description});
