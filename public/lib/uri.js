/*! URI.js v1.7.2 http://medialize.github.com/URI.js/ */
/* build contains: SecondLevelDomains.js, URI.js */
(function(){var g={list:{ac:"com|gov|mil|net|org",ae:"ac|co|gov|mil|name|net|org|pro|sch",af:"com|edu|gov|net|org",al:"com|edu|gov|mil|net|org",ao:"co|ed|gv|it|og|pb",ar:"com|edu|gob|gov|int|mil|net|org|tur",at:"ac|co|gv|or",au:"asn|com|csiro|edu|gov|id|net|org",ba:"co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",bb:"biz|co|com|edu|gov|info|net|org|store|tv",bh:"biz|cc|com|edu|gov|info|net|org",bn:"com|edu|gov|net|org",bo:"com|edu|gob|gov|int|mil|net|org|tv",br:"adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",
bs:"com|edu|gov|net|org",bz:"du|et|om|ov|rg",ca:"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",ck:"biz|co|edu|gen|gov|info|net|org",cn:"ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",co:"com|edu|gov|mil|net|nom|org",cr:"ac|c|co|ed|fi|go|or|sa",cy:"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm","do":"art|com|edu|gob|gov|mil|net|org|sld|web",dz:"art|asso|com|edu|gov|net|org|pol",ec:"com|edu|fin|gov|info|med|mil|net|org|pro",
eg:"com|edu|eun|gov|mil|name|net|org|sci",er:"com|edu|gov|ind|mil|net|org|rochest|w",es:"com|edu|gob|nom|org",et:"biz|com|edu|gov|info|name|net|org",fj:"ac|biz|com|info|mil|name|net|org|pro",fk:"ac|co|gov|net|nom|org",fr:"asso|com|f|gouv|nom|prd|presse|tm",gg:"co|net|org",gh:"com|edu|gov|mil|org",gn:"ac|com|gov|net|org",gr:"com|edu|gov|mil|net|org",gt:"com|edu|gob|ind|mil|net|org",gu:"com|edu|gov|net|org",hk:"com|edu|gov|idv|net|org",id:"ac|co|go|mil|net|or|sch|web",il:"ac|co|gov|idf|k12|muni|net|org",
"in":"ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",iq:"com|edu|gov|i|mil|net|org",ir:"ac|co|dnssec|gov|i|id|net|org|sch",it:"edu|gov",je:"co|net|org",jo:"com|edu|gov|mil|name|net|org|sch",jp:"ac|ad|co|ed|go|gr|lg|ne|or",ke:"ac|co|go|info|me|mobi|ne|or|sc",kh:"com|edu|gov|mil|net|org|per",ki:"biz|com|de|edu|gov|info|mob|net|org|tel",km:"asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",kn:"edu|gov|net|org",kr:"ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",
kw:"com|edu|gov|net|org",ky:"com|edu|gov|net|org",kz:"com|edu|gov|mil|net|org",lb:"com|edu|gov|net|org",lk:"assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",lr:"com|edu|gov|net|org",lv:"asn|com|conf|edu|gov|id|mil|net|org",ly:"com|edu|gov|id|med|net|org|plc|sch",ma:"ac|co|gov|m|net|org|press",mc:"asso|tm",me:"ac|co|edu|gov|its|net|org|priv",mg:"com|edu|gov|mil|nom|org|prd|tm",mk:"com|edu|gov|inf|name|net|org|pro",ml:"com|edu|gov|net|org|presse",mn:"edu|gov|org",mo:"com|edu|gov|net|org",
mt:"com|edu|gov|net|org",mv:"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",mw:"ac|co|com|coop|edu|gov|int|museum|net|org",mx:"com|edu|gob|net|org",my:"com|edu|gov|mil|name|net|org|sch",nf:"arts|com|firm|info|net|other|per|rec|store|web",ng:"biz|com|edu|gov|mil|mobi|name|net|org|sch",ni:"ac|co|com|edu|gob|mil|net|nom|org",np:"com|edu|gov|mil|net|org",nr:"biz|com|edu|gov|info|net|org",om:"ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",pe:"com|edu|gob|mil|net|nom|org|sld",ph:"com|edu|gov|i|mil|net|ngo|org",
pk:"biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",pl:"art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",pr:"ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",ps:"com|edu|gov|net|org|plo|sec",pw:"belau|co|ed|go|ne|or",ro:"arts|com|firm|info|nom|nt|org|rec|store|tm|www",rs:"ac|co|edu|gov|in|org",sb:"com|edu|gov|net|org",sc:"com|edu|gov|net|org",sh:"co|com|edu|gov|net|nom|org",
sl:"com|edu|gov|net|org",st:"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",sv:"com|edu|gob|org|red",sz:"ac|co|org",tr:"av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",tt:"aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",tw:"club|com|ebiz|edu|game|gov|idv|mil|net|org",mu:"ac|co|com|gov|net|or|org",mz:"ac|co|edu|gov|org",na:"co|com",nz:"ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",
pa:"abo|ac|com|edu|gob|ing|med|net|nom|org|sld",pt:"com|edu|gov|int|net|nome|org|publ",py:"com|edu|gov|mil|net|org",qa:"com|edu|gov|mil|net|org",re:"asso|com|nom",ru:"ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
rw:"ac|co|com|edu|gouv|gov|int|mil|net",sa:"com|edu|gov|med|net|org|pub|sch",sd:"com|edu|gov|info|med|net|org|tv",se:"a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",sg:"com|edu|gov|idn|net|org|per",sn:"art|com|edu|gouv|org|perso|univ",sy:"com|edu|gov|mil|net|news|org",th:"ac|co|go|in|mi|net|or",tj:"ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",tn:"agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",tz:"ac|co|go|ne|or",
ua:"biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",ug:"ac|co|go|ne|or|org|sc",uk:"ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
us:"dni|fed|isa|kids|nsn",uy:"com|edu|gub|mil|net|org",ve:"co|com|edu|gob|info|mil|net|org|web",vi:"co|com|k12|net|org",vn:"ac|biz|com|edu|gov|health|info|int|name|net|org|pro",ye:"co|com|gov|ltd|me|net|org|plc",yu:"ac|co|edu|gov|org",za:"ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",zm:"ac|co|com|edu|gov|net|org|sch"},has_expression:null,is_expression:null,has:function(h){return!!h.match(g.has_expression)},
is:function(h){return!!h.match(g.is_expression)},get:function(h){return(h=h.match(g.has_expression))&&h[1]||null},init:function(){var h="",i;for(i in g.list)Object.prototype.hasOwnProperty.call(g.list,i)&&(h+="|("+("("+g.list[i]+")."+i)+")");g.has_expression=RegExp("\\.("+h.substr(1)+")$","i");g.is_expression=RegExp("^("+h.substr(1)+")$","i")}};g.init();"undefined"!==typeof module&&module.exports?module.exports=g:window.SecondLevelDomains=g})();
(function(g){function h(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function i(a){return"[object Array]"===String(Object.prototype.toString.call(a))}function q(a){return encodeURIComponent(a).replace(/[!'()*]/g,escape)}var f="undefined"!==typeof module&&module.exports,p=f?require("./punycode"):window.punycode,r=f?require("./IPv6"):window.IPv6,n=f?require("./SecondLevelDomains"):window.SecondLevelDomains,d=function(a,b){if(!(this instanceof d))return new d(a,b);a===g&&(a="undefined"!==
typeof location?location.href+"":"");this.href(a);return b!==g?this.absoluteTo(b):this},f=d.prototype;d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.defaultPorts={http:"80",https:"443",ftp:"21"};d.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;d.encode=q;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=q;d.decode=decodeURIComponent};
d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};
d.encodeQuery=function(a){return d.encode(a+"").replace(/%20/g,"+")};d.decodeQuery=function(a){return d.decode((a+"").replace(/\+/g,"%20"))};d.recodePath=function(a){for(var a=(a+"").split("/"),b=0,c=a.length;b<c;b++)a[b]=d.encodePathSegment(d.decode(a[b]));return a.join("/")};d.decodePath=function(a){for(var a=(a+"").split("/"),b=0,c=a.length;b<c;b++)a[b]=d.decodePathSegment(a[b]);return a.join("/")};var l={encode:"encode",decode:"decode"},j,m=function(a,b){return function(c){return d[b](c+"").replace(d.characters[a][b].expression,
function(c){return d.characters[a][b].map[c]})}};for(j in l)d[j+"PathSegment"]=m("pathname",l[j]);d.encodeReserved=m("reserved","encode");d.parse=function(a){var b,c={};b=a.indexOf("#");-1<b&&(c.fragment=a.substring(b+1)||null,a=a.substring(0,b));b=a.indexOf("?");-1<b&&(c.query=a.substring(b+1)||null,a=a.substring(0,b));"//"===a.substring(0,2)?(c.protocol="",a=a.substring(2),a=d.parseAuthority(a,c)):(b=a.indexOf(":"),-1<b&&(c.protocol=a.substring(0,b),"//"===a.substring(b+1,b+3)?(a=a.substring(b+
3),a=d.parseAuthority(a,c)):(a=a.substring(b+1),c.urn=!0)));c.path=a;return c};d.parseHost=function(a,b){var c=a.indexOf("/"),e;-1===c&&(c=a.length);"["===a[0]?(e=a.indexOf("]"),b.hostname=a.substring(1,e)||null,b.port=a.substring(e+2,c)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null);b.hostname&&"/"!==a.substring(c)[0]&&(c++,a="/"+a);return a.substring(c)||"/"};d.parseAuthority=function(a,
b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a.indexOf("@"),e=a.indexOf("/");-1<c&&(-1===e||c<e)?(e=a.substring(0,c).split(":"),b.username=e[0]?d.decode(e[0]):null,b.password=e[1]?d.decode(e[1]):null,a=a.substring(c+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var b={},a=a.split("&"),c=a.length,e=0;e<c;e++){var k=a[e].split("="),f=d.decodeQuery(k.shift()),
k=k.length?d.decodeQuery(k.join("=")):null;b[f]?("string"===typeof b[f]&&(b[f]=[b[f]]),b[f].push(k)):b[f]=k}return b};d.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");if(!a.urn&&(b||a.hostname))b+="//";b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path[0]&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)d.ip6_expression.test(a.hostname)?
b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username),a.password&&(b+=":"+d.encode(a.password)),b+="@");return b};d.buildQuery=function(a,b){var c="",e;for(e in a)if(Object.hasOwnProperty.call(a,e)&&e)if(i(a[e]))for(var k={},f=0,h=a[e].length;f<h;f++)a[e][f]!==g&&k[a[e][f]+""]===g&&(c+="&"+d.buildQueryParameter(e,
a[e][f]),!0!==b&&(k[a[e][f]+""]=!0));else a[e]!==g&&(c+="&"+d.buildQueryParameter(e,a[e]));return c.substring(1)};d.buildQueryParameter=function(a,b){return d.encodeQuery(a)+(null!==b?"="+d.encodeQuery(b):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&d.addQuery(a,e,b[e]);else if("string"===typeof b)a[b]===g?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),i(c)||(c=[c]),a[b]=a[b].concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
};d.removeQuery=function(a,b,c){if(i(b))for(var c=0,e=b.length;c<e;c++)a[b[c]]=g;else if("object"===typeof b)for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&d.removeQuery(a,e,b[e]);else if("string"===typeof b)if(c!==g)if(a[b]===c)a[b]=g;else{if(i(a[b])){var e=a[b],k={},f,h;if(i(c)){f=0;for(h=c.length;f<h;f++)k[c[f]]=!0}else k[c]=!0;f=0;for(h=e.length;f<h;f++)k[e[f]]!==g&&(e.splice(f,1),h--,f--);a[b]=e}}else a[b]=g;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a[e]!==b[e]){e--;break}if(1>e)return a[0]===b[0]&&"/"===a[0]?"/":"";"/"!==a[e]&&(e=a.substring(0,e).lastIndexOf("/"));return a.substring(0,e+1)};d.withinString=function(a,b){return a.replace(d.find_uri_expression,b)};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!p)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(p.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};f.build=function(a){if(!0===a)this._deferred_build=!0;else if(a===g||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};f.clone=function(){return new d(this)};f.toString=function(){return this.build(!1)._string};f.valueOf=function(){return this.toString()};l={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};m=function(a){return function(b,c){if(b===g)return this._parts[a]||
"";this._parts[a]=b;this.build(!c);return this}};for(j in l)f[j]=m(l[j]);l={query:"?",fragment:"#"};m=function(a,b){return function(c,e){if(c===g)return this._parts[a]||"";null!==c&&(c+="",c[0]===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}};for(j in l)f[j]=m(j,l[j]);l={search:["?","query"],hash:["#","fragment"]};m=function(a,b){return function(c,e){var d=this[a](c,e);return"string"===typeof d&&d.length?b+d:d}};for(j in l)f[j]=m(l[j][1],l[j][0]);f.pathname=function(a,b){if(a===
g||!0===a){var c=this._parts.path||(this._parts.urn?"":"/");return a?d.decodePath(c):c}this._parts.path=a?d.recodePath(a):"/";this.build(!b);return this};f.path=f.pathname;f.href=function(a,b){if(a===g)return this.toString();this._string="";this._parts={protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null};var c=a instanceof d,e="object"===typeof a&&(a.hostname||a.path),f;if("string"===typeof a)this._parts=d.parse(a);else if(c||e)for(f in c=
c?a._parts:a,c)Object.hasOwnProperty.call(this._parts,f)&&(this._parts[f]=c[f]);else throw new TypeError("invalid input");this.build(!b);return this};f.is=function(a){var b=!1,c=!1,e=!1,f=!1,g=!1,h=!1,j=!1,i=!this._parts.urn;this._parts.hostname&&(i=!1,c=d.ip4_expression.test(this._parts.hostname),e=d.ip6_expression.test(this._parts.hostname),b=c||e,g=(f=!b)&&n&&n.has(this._parts.hostname),h=f&&d.idn_expression.test(this._parts.hostname),j=f&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return i;
case "absolute":return!i;case "domain":case "name":return f;case "sld":return g;case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return e;case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return j}return null};var s=f.protocol,t=f.port,u=f.hostname;f.protocol=function(a,b){if(a!==g&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");
return s.call(this,a,b)};f.scheme=f.protocol;f.port=function(a,b){if(this._parts.urn)return a===g?"":this;if(a!==g&&(0===a&&(a=null),a&&(a+="",":"===a[0]&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return t.call(this,a,b)};f.hostname=function(a,b){if(this._parts.urn)return a===g?"":this;if(a!==g){var c={};d.parseHost(a,c);a=c.hostname}return u.call(this,a,b)};f.host=function(a,b){if(this._parts.urn)return a===g?"":this;if(a===g)return this._parts.hostname?
d.buildHost(this._parts):"";d.parseHost(a,this._parts);this.build(!b);return this};f.authority=function(a,b){if(this._parts.urn)return a===g?"":this;if(a===g)return this._parts.hostname?d.buildAuthority(this._parts):"";d.parseAuthority(a,this._parts);this.build(!b);return this};f.userinfo=function(a,b){if(this._parts.urn)return a===g?"":this;if(a===g){if(!this._parts.username)return"";var c=d.buildUserinfo(this._parts);return c.substring(0,c.length-1)}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,
this._parts);this.build(!b);return this};f.subdomain=function(a,b){if(this._parts.urn)return a===g?"":this;if(a===g){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=RegExp("^"+h(c));a&&"."!==a[a.length-1]&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);
return this};f.domain=function(a,b){if(this._parts.urn)return a===g?"":this;"boolean"===typeof a&&(b=a,a=g);if(a===g){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?
this._parts.hostname=a:(c=RegExp(h(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};f.tld=function(a,b){if(this._parts.urn)return a===g?"":this;"boolean"===typeof a&&(b=a,a=g);if(a===g){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&n&&n.list[c.toLowerCase()]?n.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(n&&n.is(a))c=RegExp(h(this.tld())+
"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=RegExp(h(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};f.directory=function(a,b){if(this._parts.urn)return a===g?"":this;if(a===g||!0===a){if(!this._parts.path&&
!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=RegExp("^"+h(c));this.is("relative")||(a||(a="/"),"/"!==a[0]&&(a="/"+a));a&&"/"!==a[a.length-1]&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};f.filename=
function(a,b){if(this._parts.urn)return a===g?"":this;if(a===g||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?d.decodePathSegment(c):c}c=!1;"/"===a[0]&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var e=RegExp(h(this.filename())+"$"),a=d.recodePath(a);this._parts.path=this._parts.path.replace(e,a);c?this.normalizePath(b):this.build(!b);return this};f.suffix=function(a,b){if(this._parts.urn)return a===
g?"":this;if(a===g||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),e=c.lastIndexOf(".");if(-1===e)return"";c=c.substring(e+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?d.decodePathSegment(c):c}"."===a[0]&&(a=a.substring(1));if(c=this.suffix())e=a?RegExp(h(c)+"$"):RegExp(h("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}e&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(e,a));this.build(!b);return this};f.segment=function(a,b,
c){var e=this._parts.urn?":":"/",d=this.path(),f="/"===d.substring(0,1),d=d.split(e);"number"!==typeof a&&(c=b,b=a,a=g);if(a!==g&&"number"!==typeof a)throw Error("Bad segment '"+a+"', must be 0-based integer");f&&d.shift();0>a&&(a=Math.max(d.length+a,0));if(b===g)return a===g?d:d[a];if(null===a||d[a]===g)if(i(b))d=b;else{if(b||"string"===typeof b&&b.length)""===d[d.length-1]?d[d.length-1]=b:d.push(b)}else b||"string"===typeof b&&b.length?d[a]=b:d.splice(a,1);f&&d.unshift("");return this.path(d.join(e),
c)};var v=f.query;f.query=function(a,b){return!0===a?d.parseQuery(this._parts.query):a!==g&&"string"!==typeof a?(this._parts.query=d.buildQuery(a),this.build(!b),this):v.call(this,a,b)};f.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query);d.addQuery(e,a,b);this._parts.query=d.buildQuery(e);"string"!==typeof a&&(c=b);this.build(!c);return this};f.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query);d.removeQuery(e,a,b);this._parts.query=d.buildQuery(e);"string"!==typeof a&&
(c=b);this.build(!c);return this};f.addSearch=f.addQuery;f.removeSearch=f.removeQuery;f.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};f.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};
f.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&p?this._parts.hostname=p.toASCII(this._parts.hostname):this.is("IPv6")&&r&&(this._parts.hostname=r.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};f.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};f.normalizePath=function(a){if(this._parts.urn||
!this._parts.path||"/"===this._parts.path)return this;var b,c,e=this._parts.path,f,g;"/"!==e[0]&&("."===e[0]&&(c=e.substring(0,e.indexOf("/"))),b=!0,e="/"+e);for(e=e.replace(/(\/(\.\/)+)|\/{2,}/g,"/");;){f=e.indexOf("/../");if(-1===f)break;else if(0===f){e=e.substring(3);break}g=e.substring(0,f).lastIndexOf("/");-1===g&&(g=f);e=e.substring(0,g)+e.substring(f+3)}b&&this.is("relative")&&(e=c?c+e:e.substring(1));e=d.recodePath(e);this._parts.path=e;this.build(!a);return this};f.normalizePathname=f.normalizePath;
f.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query)):this._parts.query=null,this.build(!a));return this};f.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};f.normalizeSearch=f.normalizeQuery;f.normalizeHash=f.normalizeFragment;f.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;this.normalize();d.encode=a;d.decode=b;return this};
f.unicode=function(){var a=d.encode,b=d.decode;d.encode=q;d.decode=unescape;this.normalize();d.encode=a;d.decode=b;return this};f.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&p?(b+=p.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path[0])&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c=
"",e=0,f=a._parts.query.split("&"),h=f.length;e<h;e++){var i=(f[e]||"").split("="),c=c+("&"+d.decodeQuery(i[0]).replace(/&/g,"%26"));i[1]!==g&&(c+="="+d.decodeQuery(i[1]).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=a.hash()};f.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");if(this._parts.hostname)return b;a instanceof d||(a=new d(a));e=0;for(f;f=
c[e];e++)b._parts[f]=a._parts[f];c=["query","path"];e=0;for(f;f=c[e];e++)!b._parts[f]&&a._parts[f]&&(b._parts[f]=a._parts[f]);"/"!==b.path()[0]&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};f.relativeTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");a instanceof d||(a=new d(a));if("/"!==this.path()[0]||"/"!==a.path()[0])throw Error("Cannot calculate common path from non-relative URLs");
e=d.commonPath(b.path(),a.path());for(var a=a.directory(),f=0,g;g=c[f];f++)b._parts[g]=null;if(!e||"/"===e)return b;if(a+"/"===e)b._parts.path="./"+b.filename();else{c="../";e=RegExp("^"+h(e));for(a=a.replace(e,"/").match(/\//g).length-1;a--;)c+="../";b._parts.path=b._parts.path.replace(e,c)}b.build();return b};f.equals=function(a){var b=this.clone(),c=new d(a),e={},f={},a={},g;b.normalize();c.normalize();if(b.toString()===c.toString())return!0;e=b.query();f=c.query();b.query("");c.query("");if(b.toString()!==
c.toString()||e.length!==f.length)return!1;e=d.parseQuery(e);f=d.parseQuery(f);for(g in e)if(Object.prototype.hasOwnProperty.call(e,g)){if(i(e[g])){if(!i(f[g])||e[g].length!==f[g].length)return!1;e[g].sort();f[g].sort();b=0;for(c=e[g].length;b<c;b++)if(e[g][b]!==f[g][b])return!1}else if(e[g]!==f[g])return!1;a[g]=!0}for(g in f)if(Object.prototype.hasOwnProperty.call(f,g)&&!a[g])return!1;return!0};"undefined"!==typeof module&&module.exports?module.exports=d:window.URI=d})();
