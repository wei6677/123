if ($response.statusCode != 200) {
  $done(null);
}

console.log("haha")
const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']

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





var flags = new Map([  [ "巴基斯坦" , "🇵🇰" ] ,[ "乌克兰" , "🇺🇦" ] ,[ "新西兰" , "🇳🇿" ] ,[ "南非" , "🇦🇫" ] , [ "安吉拉" , "🇦🇮" ] , [ "阿尔巴尼亚" , "🇦🇱" ] , [ "亚美尼亚" , "🇦🇲" ] , [ "南极洲" , "🇦🇶" ] , [ "阿根廷" , "🇦🇷" ] , [ "美属萨尼亚" , "🇦🇸" ] , [ "奥地利" , "🇦🇹" ] , [ "澳大利亚" , "🇦🇺" ] , [ "阿鲁巴" , "🇦🇼" ] , [ "奥兰" , "🇦🇽" ] , [ "阿塞拜疆" , "🇦🇿" ] , [ "巴巴多斯" , "🇧🇧" ] , [ "孟加拉" , "🇧🇩" ] , [ "比利时" , "🇧🇪" ] , [ "布基纳法索" , "🇧🇫" ] , [ "保加利亚" , "🇧🇬" ] , [ "巴林" , "🇧🇭" ] , [ "布隆迪" , "🇧🇮" ] , [ "贝宁" , "🇧🇯" ] , [ "百慕大" , "🇧🇲" ] , [ "文莱" , "🇧🇳" ] , [ "玻利维亚" , "🇧🇴" ] , [ "巴西" , "🇧🇷" ] , [ "巴哈马" , "🇧🇸" ] , [ "不丹" , "🇧🇹" ] , [ "挪威" , "🇧🇻" ] , [ "博茨瓦纳" , "🇧🇼" ] , [ "白俄罗斯" , "🇧🇾" ] , [ "伯利兹" , "🇧🇿" ] , [ "加拿大" , "🇨🇦" ] , [ "中非共和国" , "🇨🇫" ] , [ "瑞士" , "🇨🇭" ] , [ "库克群岛" , "🇨🇰" ] , [ "智利" , "🇨🇱" ] , [ "喀麦隆" , "🇨🇲" ] , [ "中国" , "🇨🇳" ] , [ "哥伦比亚" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "哥斯达黎加" , "🇨🇷" ] , [ "古巴" , "🇨🇺" ] , [ "佛得角" , "🇨🇻" ] , [ "库拉索" , "🇨🇼" ] , [ "圣诞岛" , "🇨🇽" ] , [ "塞浦路斯" , "🇨🇾" ] , [ "捷克" , "🇨🇿" ] , [ "德国" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "吉布提" , "🇩🇯" ] , [ "丹麦" , "🇩🇰" ] , [ "多米尼克" , "🇩🇲" ] , [ "多米尼加" , "🇩🇴" ] , [ "阿尔及利亚" , "🇩🇿" ] , [ "西班牙" , "🇪🇦" ] , [ "厄瓜多尔" , "🇪🇨" ] , [ "爱沙尼亚" , "🇪🇪" ] , [ "埃及" , "🇪🇬" ] , [ "西撒哈拉" , "🇪🇭" ] , [ "厄立特里亚" , "🇪🇷" ] , [ "西班牙" , "🇪🇸" ] , [ "埃塞俄比亚" , "🇪🇹" ] , [ "欧盟" , "🇪🇺" ] , [ "芬兰" , "🇫🇮" ] , [ "斐济" , "🇫🇯" ] , [ "福克兰群岛" , "🇫🇰" ] , [ "密克罗尼西亚联邦" , "🇫🇲" ] , [ "法罗群岛" , "🇫🇴" ] , [ "法国" , "🇫🇷" ] , [ "加蓬" , "🇬🇦" ] , [ "英国" , "🇬🇧" ] , [ "香港" , "🇭🇰" ] ,["匈牙利","🇭🇺"], [ "印度尼西亚" , "🇮🇩" ] , [ "爱尔兰" , "🇮🇪" ] , [ "以色列" , "🇮🇱" ] , [ "曼岛" , "🇮🇲" ] , [ "印度" , "🇮🇳" ] , [ "冰岛" , "🇮🇸" ] , [ "意大利" , "🇮🇹" ] , [ "日本" , "🇯🇵" ] , [ "韩国" , "🇰🇷" ] , [ "卢森堡" , "🇱🇺" ] , [ "澳门" , "🇲🇴" ] , [ "墨西哥" , "🇲🇽" ] , [ "马来西亚" , "🇲🇾" ] , [ "荷兰" , "🇳🇱" ] , [ "菲律宾" , "🇵🇭" ] , [ "罗马尼亚" , "🇷🇴" ] , [ "塞尔维亚" , "🇷🇸" ] , [ "俄罗斯" , "🇷🇺" ] , [ "卢旺达" , "🇷🇼" ] , [ "沙特阿拉伯" , "🇸🇦" ] , [ "所罗门群岛" , "🇸🇧" ] , [ "塞舌尔" , "🇸🇨" ] , [ "苏丹" , "🇸🇩" ] , [ "瑞典" , "🇸🇪" ] , [ "新加坡" , "🇸🇬" ] , [ "泰国" , "🇹🇭" ] , [ "突尼西亚" , "🇹🇳" ] , [ "汤加" , "🇹🇴" ] , [ "土耳其" , "🇹🇷" ] , [ "图瓦卢" , "🇹🇻" ] , [ "台湾" , "🇨🇳" ] , [ "英国" , "🇬🇧" ] , [ "美属离岛" , "🇺🇲" ] , [ "美国" , "🇺🇸" ] , [ "乌拉圭" , "🇺🇾" ] , [ "乌兹别克" , "🇺🇿" ] , [ "梵蒂冈" , "🇻🇦" ] , [ "委内瑞拉" , "🇻🇪" ] , [ "英属维京群岛" , "🇻🇬" ] , [ "美属维京群岛" , "🇻🇮" ] , [ "越南" , "🇻🇳" ] , [ "南非" , "🇿🇦"], ["马恩岛", "🇮🇲"],["波斯尼亚和黑塞哥维那","🇧🇦"],["阿联酋","🇦🇪"]])
var body = $response.body;
var obj = JSON.parse(body);
var emoji = flags.get(obj['country'])? flags.get(obj['country']):"🏴‍☠️"
emoji=City_ValidCheck(obj['city']) == "香港"? "🇭🇰️":emoji 
emoji=City_ValidCheck(obj['city']) == "澳门"? "️🇲🇴️":emoji
emoji=City_ValidCheck(obj['city']) == "台湾"? "️️🇨🇳":emoji

var title = emoji + "" + '「'+ City_ValidCheck(obj['city'])+"」";//+Area_check(obj['country']);
var subtitle = " ™"+ " ➠ "+obj['country'];
var ip = obj['query'];
var description = "国家" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' + "IP地址" + ":" + obj['query'];
$done({title, subtitle, ip, description});
