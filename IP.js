if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'];
var ip = obj['query'];
var description = "国家" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' + "IP地址" + ":" + obj['org'] + '\n' + "定位" + ":" +[' +obj["latitude"]+","+obj["longitude"]+"]";



$done({title, subtitle, ip, description});
