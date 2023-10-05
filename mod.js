// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+a(n):a(n)+e,i&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,a,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,c=parseInt(a,10),!isFinite(c)){if(!t(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(a=(-c).toString(r),e.precision&&(a=i(a,e.precision,e.padRight)),a="-"+a):(a=c.toString(r),c||e.precision?e.precision&&(a=i(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function s(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,k=/(\..*[^0])0*e/;function y(e){var r,a,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+a);i=e.arg}switch(e.specifier){case"e":case"E":a=i.toExponential(e.precision);break;case"f":case"F":a=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),a=i.toExponential(r)):a=i.toPrecision(e.precision),e.alternate||(a=u.call(a,k,"$1e"),a=u.call(a,b,"e"),a=u.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=u.call(a,f,"e+0$1"),a=u.call(a,d,"e-0$1"),e.alternate&&(a=u.call(a,h,"$1."),a=u.call(a,w,"$1.e")),i>=0&&e.sign&&(a=e.sign+a),a=e.specifier===g.call(e.specifier)?g.call(a):p.call(a)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var a=r-e.length;return a<0?e:e=t?e+m(a):m(a)+e}var x=String.fromCharCode,E=isNaN,R=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function L(e){var r,t,a,n,o,l,p,g,u;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,g=0;g<e.length;g++)if(s(a=e[g]))l+=a;else{if(r=void 0!==a.precision,!(a=V(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+g+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),t=a.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,E(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,E(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!E(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=E(o)?String(a.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=i(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=_(a.arg,a.width,a.padRight)),l+=a.arg||"",p+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,a,i;for(t=[],i=0,a=P.exec(e);a;)(r=e.slice(i,P.lastIndex-a[0].length)).length&&t.push(r),t.push(S(a)),i=P.lastIndex,a=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){return"string"==typeof e}function C(e){var r,t,a;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=T(e),(t=new Array(arguments.length))[0]=r,a=1;a<t.length;a++)t[a]=arguments[a];return L.apply(null,t)}var B=Object.prototype,F=B.toString,j=B.__defineGetter__,$=B.__defineSetter__,Z=B.__lookupGetter__,A=B.__lookupSetter__;var O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var a,i,n,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||A.call(e,r)?(a=e.__proto__,e.__proto__=B,delete e[r],e[r]=t.value,e.__proto__=a):e[r]=t.value),n="get"in t,o="set"in t,i&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&j&&j.call(e,r,t.get),o&&$&&$.call(e,r,t.set),e};function W(e,r,t){O(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var N={CR:0,LF:1,Control:2,Extend:3,RegionalIndicator:4,SpacingMark:5,L:6,V:7,T:8,LV:9,LVT:10,Other:11,Prepend:12,ZWJ:13,NotBreak:0,BreakStart:1,Break:2,BreakLastRegional:3,BreakPenultimateRegional:4,ExtendedPictographic:101};function G(e,r,t,a){var i;for(t>=e.length&&(t=e.length-1),i=r;i<=t;i++)if(e[i]!==a)return!1;return!0}function J(e,r,t,a){var i;for(r>=e.length-1&&(r=e.length-1),i=r;i>=t;i--)if(e[i]===a)return i;return-1}function M(e,r){var t,a,i,n,o;return i=e[(o=e.length-1)-1],a=e[o],t=r[o],(n=J(e,o,0,N.RegionalIndicator))>0&&i!==N.Prepend&&i!==N.RegionalIndicator&&G(e,1,n-1,N.RegionalIndicator)?function(e,r,t,a){var i,n;for(t>=e.length&&(t=e.length-1),i=0,n=r;n<=t;n++)e[n]===a&&(i+=1);return i}(e,0,o,N.RegionalIndicator)%2==1?N.BreakLastRegional:N.BreakPenultimateRegional:i===N.CR&&a===N.LF?N.NotBreak:i===N.Control||i===N.CR||i===N.LF||a===N.Control||a===N.CR||a===N.LF?N.BreakStart:(i!==N.L||a!==N.L&&a!==N.V&&a!==N.LV&&a!==N.LVT)&&(i!==N.LV&&i!==N.V||a!==N.V&&a!==N.T)&&(i!==N.LVT&&i!==N.T||a!==N.T)?a===N.Extend||a===N.ZWJ||a===N.SpacingMark||i===N.Prepend||(n=J(r,o-1,0,N.ExtendedPictographic))>=0&&i===N.ZWJ&&t===N.ExtendedPictographic&&r[n]===N.ExtendedPictographic&&G(e,n+1,o-2,N.Extend)?N.NotBreak:function(e,r,t,a){var i;for(t>=e.length&&(t=e.length-1),i=r;i<=t;i++)if(e[i]===a)return i;return-1}(e,1,o-1,N.RegionalIndicator)>=0?N.Break:i===N.RegionalIndicator&&a===N.RegionalIndicator?N.NotBreak:N.BreakStart:N.NotBreak}function U(e){return 169===e||174===e||8252===e||8265===e||8482===e||8505===e||8596<=e&&e<=8601||8617<=e&&e<=8618||8986<=e&&e<=8987||9e3===e||9096===e||9167===e||9193<=e&&e<=9196||9197<=e&&e<=9198||9199===e||9200===e||9201<=e&&e<=9202||9203===e||9208<=e&&e<=9210||9410===e||9642<=e&&e<=9643||9654===e||9664===e||9723<=e&&e<=9726||9728<=e&&e<=9729||9730<=e&&e<=9731||9732===e||9733===e||9735<=e&&e<=9741||9742===e||9743<=e&&e<=9744||9745===e||9746===e||9748<=e&&e<=9749||9750<=e&&e<=9751||9752===e||9753<=e&&e<=9756||9757===e||9758<=e&&e<=9759||9760===e||9761===e||9762<=e&&e<=9763||9764<=e&&e<=9765||9766===e||9767<=e&&e<=9769||9770===e||9771<=e&&e<=9773||9774===e||9775===e||9776<=e&&e<=9783||9784<=e&&e<=9785||9786===e||9787<=e&&e<=9791||9792===e||9793===e||9794===e||9795<=e&&e<=9799||9800<=e&&e<=9811||9812<=e&&e<=9822||9823===e||9824===e||9825<=e&&e<=9826||9827===e||9828===e||9829<=e&&e<=9830||9831===e||9832===e||9833<=e&&e<=9850||9851===e||9852<=e&&e<=9853||9854===e||9855===e||9856<=e&&e<=9861||9872<=e&&e<=9873||9874===e||9875===e||9876===e||9877===e||9878<=e&&e<=9879||9880===e||9881===e||9882===e||9883<=e&&e<=9884||9885<=e&&e<=9887||9888<=e&&e<=9889||9890<=e&&e<=9894||9895===e||9896<=e&&e<=9897||9898<=e&&e<=9899||9900<=e&&e<=9903||9904<=e&&e<=9905||9906<=e&&e<=9916||9917<=e&&e<=9918||9919<=e&&e<=9923||9924<=e&&e<=9925||9926<=e&&e<=9927||9928===e||9929<=e&&e<=9933||9934===e||9935===e||9936===e||9937===e||9938===e||9939===e||9940===e||9941<=e&&e<=9960||9961===e||9962===e||9963<=e&&e<=9967||9968<=e&&e<=9969||9970<=e&&e<=9971||9972===e||9973===e||9974===e||9975<=e&&e<=9977||9978===e||9979<=e&&e<=9980||9981===e||9982<=e&&e<=9985||9986===e||9987<=e&&e<=9988||9989===e||9992<=e&&e<=9996||9997===e||9998===e||9999===e||1e4<=e&&e<=10001||10002===e||10004===e||10006===e||10013===e||10017===e||10024===e||10035<=e&&e<=10036||10052===e||10055===e||10060===e||10062===e||10067<=e&&e<=10069||10071===e||10083===e||10084===e||10085<=e&&e<=10087||10133<=e&&e<=10135||10145===e||10160===e||10175===e||10548<=e&&e<=10549||11013<=e&&e<=11015||11035<=e&&e<=11036||11088===e||11093===e||12336===e||12349===e||12951===e||12953===e||126976<=e&&e<=126979||126980===e||126981<=e&&e<=127182||127183===e||127184<=e&&e<=127231||127245<=e&&e<=127247||127279===e||127340<=e&&e<=127343||127344<=e&&e<=127345||127358<=e&&e<=127359||127374===e||127377<=e&&e<=127386||127405<=e&&e<=127461||127489<=e&&e<=127490||127491<=e&&e<=127503||127514===e||127535===e||127538<=e&&e<=127546||127548<=e&&e<=127551||127561<=e&&e<=127567||127568<=e&&e<=127569||127570<=e&&e<=127743||127744<=e&&e<=127756||127757<=e&&e<=127758||127759===e||127760===e||127761===e||127762===e||127763<=e&&e<=127765||127766<=e&&e<=127768||127769===e||127770===e||127771===e||127772===e||127773<=e&&e<=127774||127775<=e&&e<=127776||127777===e||127778<=e&&e<=127779||127780<=e&&e<=127788||127789<=e&&e<=127791||127792<=e&&e<=127793||127794<=e&&e<=127795||127796<=e&&e<=127797||127798===e||127799<=e&&e<=127818||127819===e||127820<=e&&e<=127823||127824===e||127825<=e&&e<=127867||127868===e||127869===e||127870<=e&&e<=127871||127872<=e&&e<=127891||127892<=e&&e<=127893||127894<=e&&e<=127895||127896===e||127897<=e&&e<=127899||127900<=e&&e<=127901||127902<=e&&e<=127903||127904<=e&&e<=127940||127941===e||127942===e||127943===e||127944===e||127945===e||127946===e||127947<=e&&e<=127950||127951<=e&&e<=127955||127956<=e&&e<=127967||127968<=e&&e<=127971||127972===e||127973<=e&&e<=127984||127985<=e&&e<=127986||127987===e||127988===e||127989===e||127990===e||127991===e||127992<=e&&e<=127994||128e3<=e&&e<=128007||128008===e||128009<=e&&e<=128011||128012<=e&&e<=128014||128015<=e&&e<=128016||128017<=e&&e<=128018||128019===e||128020===e||128021===e||128022===e||128023<=e&&e<=128041||128042===e||128043<=e&&e<=128062||128063===e||128064===e||128065===e||128066<=e&&e<=128100||128101===e||128102<=e&&e<=128107||128108<=e&&e<=128109||128110<=e&&e<=128172||128173===e||128174<=e&&e<=128181||128182<=e&&e<=128183||128184<=e&&e<=128235||128236<=e&&e<=128237||128238===e||128239===e||128240<=e&&e<=128244||128245===e||128246<=e&&e<=128247||128248===e||128249<=e&&e<=128252||128253===e||128254===e||128255<=e&&e<=128258||128259===e||128260<=e&&e<=128263||128264===e||128265===e||128266<=e&&e<=128276||128277===e||128278<=e&&e<=128299||128300<=e&&e<=128301||128302<=e&&e<=128317||128326<=e&&e<=128328||128329<=e&&e<=128330||128331<=e&&e<=128334||128335===e||128336<=e&&e<=128347||128348<=e&&e<=128359||128360<=e&&e<=128366||128367<=e&&e<=128368||128369<=e&&e<=128370||128371<=e&&e<=128377||128378===e||128379<=e&&e<=128390||128391===e||128392<=e&&e<=128393||128394<=e&&e<=128397||128398<=e&&e<=128399||128400===e||128401<=e&&e<=128404||128405<=e&&e<=128406||128407<=e&&e<=128419||128420===e||128421===e||128422<=e&&e<=128423||128424===e||128425<=e&&e<=128432||128433<=e&&e<=128434||128435<=e&&e<=128443||128444===e||128445<=e&&e<=128449||128450<=e&&e<=128452||128453<=e&&e<=128464||128465<=e&&e<=128467||128468<=e&&e<=128475||128476<=e&&e<=128478||128479<=e&&e<=128480||128481===e||128482===e||128483===e||128484<=e&&e<=128487||128488===e||128489<=e&&e<=128494||128495===e||128496<=e&&e<=128498||128499===e||128500<=e&&e<=128505||128506===e||128507<=e&&e<=128511||128512===e||128513<=e&&e<=128518||128519<=e&&e<=128520||128521<=e&&e<=128525||128526===e||128527===e||128528===e||128529===e||128530<=e&&e<=128532||128533===e||128534===e||128535===e||128536===e||128537===e||128538===e||128539===e||128540<=e&&e<=128542||128543===e||128544<=e&&e<=128549||128550<=e&&e<=128551||128552<=e&&e<=128555||128556===e||128557===e||128558<=e&&e<=128559||128560<=e&&e<=128563||128564===e||128565===e||128566===e||128567<=e&&e<=128576||128577<=e&&e<=128580||128581<=e&&e<=128591||128640===e||128641<=e&&e<=128642||128643<=e&&e<=128645||128646===e||128647===e||128648===e||128649===e||128650<=e&&e<=128651||128652===e||128653===e||128654===e||128655===e||128656===e||128657<=e&&e<=128659||128660===e||128661===e||128662===e||128663===e||128664===e||128665<=e&&e<=128666||128667<=e&&e<=128673||128674===e||128675===e||128676<=e&&e<=128677||128678===e||128679<=e&&e<=128685||128686<=e&&e<=128689||128690===e||128691<=e&&e<=128693||128694===e||128695<=e&&e<=128696||128697<=e&&e<=128702||128703===e||128704===e||128705<=e&&e<=128709||128710<=e&&e<=128714||128715===e||128716===e||128717<=e&&e<=128719||128720===e||128721<=e&&e<=128722||128723<=e&&e<=128724||128725===e||128726<=e&&e<=128727||128728<=e&&e<=128735||128736<=e&&e<=128741||128742<=e&&e<=128744||128745===e||128746===e||128747<=e&&e<=128748||128749<=e&&e<=128751||128752===e||128753<=e&&e<=128754||128755===e||128756<=e&&e<=128758||128759<=e&&e<=128760||128761===e||128762===e||128763<=e&&e<=128764||128765<=e&&e<=128767||128884<=e&&e<=128895||128981<=e&&e<=128991||128992<=e&&e<=129003||129004<=e&&e<=129023||129036<=e&&e<=129039||129096<=e&&e<=129103||129114<=e&&e<=129119||129160<=e&&e<=129167||129198<=e&&e<=129279||129292===e||129293<=e&&e<=129295||129296<=e&&e<=129304||129305<=e&&e<=129310||129311===e||129312<=e&&e<=129319||129320<=e&&e<=129327||129328===e||129329<=e&&e<=129330||129331<=e&&e<=129338||129340<=e&&e<=129342||129343===e||129344<=e&&e<=129349||129351<=e&&e<=129355||129356===e||129357<=e&&e<=129359||129360<=e&&e<=129374||129375<=e&&e<=129387||129388<=e&&e<=129392||129393===e||129394===e||129395<=e&&e<=129398||129399<=e&&e<=129400||129401===e||129402===e||129403===e||129404<=e&&e<=129407||129408<=e&&e<=129412||129413<=e&&e<=129425||129426<=e&&e<=129431||129432<=e&&e<=129442||129443<=e&&e<=129444||129445<=e&&e<=129450||129451<=e&&e<=129453||129454<=e&&e<=129455||129456<=e&&e<=129465||129466<=e&&e<=129471||129472===e||129473<=e&&e<=129474||129475<=e&&e<=129482||129483===e||129484===e||129485<=e&&e<=129487||129488<=e&&e<=129510||129511<=e&&e<=129535||129536<=e&&e<=129647||129648<=e&&e<=129651||129652===e||129653<=e&&e<=129655||129656<=e&&e<=129658||129659<=e&&e<=129663||129664<=e&&e<=129666||129667<=e&&e<=129670||129671<=e&&e<=129679||129680<=e&&e<=129685||129686<=e&&e<=129704||129705<=e&&e<=129711||129712<=e&&e<=129718||129719<=e&&e<=129727||129728<=e&&e<=129730||129731<=e&&e<=129743||129744<=e&&e<=129750||129751<=e&&e<=129791||130048<=e&&e<=131069?N.ExtendedPictographic:N.Other}function X(e){return 1536<=e&&e<=1541||1757===e||1807===e||2274===e||3406===e||69821===e||69837===e||70082<=e&&e<=70083||71999===e||72001===e||72250===e||72324<=e&&e<=72329||73030===e?N.Prepend:13===e?N.CR:10===e?N.LF:0<=e&&e<=9||11<=e&&e<=12||14<=e&&e<=31||127<=e&&e<=159||173===e||1564===e||6158===e||8203===e||8206<=e&&e<=8207||8232===e||8233===e||8234<=e&&e<=8238||8288<=e&&e<=8292||8293===e||8294<=e&&e<=8303||65279===e||65520<=e&&e<=65528||65529<=e&&e<=65531||78896<=e&&e<=78904||113824<=e&&e<=113827||119155<=e&&e<=119162||917504===e||917505===e||917506<=e&&e<=917535||917632<=e&&e<=917759||918e3<=e&&e<=921599?N.Control:768<=e&&e<=879||1155<=e&&e<=1159||1160<=e&&e<=1161||1425<=e&&e<=1469||1471===e||1473<=e&&e<=1474||1476<=e&&e<=1477||1479===e||1552<=e&&e<=1562||1611<=e&&e<=1631||1648===e||1750<=e&&e<=1756||1759<=e&&e<=1764||1767<=e&&e<=1768||1770<=e&&e<=1773||1809===e||1840<=e&&e<=1866||1958<=e&&e<=1968||2027<=e&&e<=2035||2045===e||2070<=e&&e<=2073||2075<=e&&e<=2083||2085<=e&&e<=2087||2089<=e&&e<=2093||2137<=e&&e<=2139||2259<=e&&e<=2273||2275<=e&&e<=2306||2362===e||2364===e||2369<=e&&e<=2376||2381===e||2385<=e&&e<=2391||2402<=e&&e<=2403||2433===e||2492===e||2494===e||2497<=e&&e<=2500||2509===e||2519===e||2530<=e&&e<=2531||2558===e||2561<=e&&e<=2562||2620===e||2625<=e&&e<=2626||2631<=e&&e<=2632||2635<=e&&e<=2637||2641===e||2672<=e&&e<=2673||2677===e||2689<=e&&e<=2690||2748===e||2753<=e&&e<=2757||2759<=e&&e<=2760||2765===e||2786<=e&&e<=2787||2810<=e&&e<=2815||2817===e||2876===e||2878===e||2879===e||2881<=e&&e<=2884||2893===e||2901<=e&&e<=2902||2903===e||2914<=e&&e<=2915||2946===e||3006===e||3008===e||3021===e||3031===e||3072===e||3076===e||3134<=e&&e<=3136||3142<=e&&e<=3144||3146<=e&&e<=3149||3157<=e&&e<=3158||3170<=e&&e<=3171||3201===e||3260===e||3263===e||3266===e||3270===e||3276<=e&&e<=3277||3285<=e&&e<=3286||3298<=e&&e<=3299||3328<=e&&e<=3329||3387<=e&&e<=3388||3390===e||3393<=e&&e<=3396||3405===e||3415===e||3426<=e&&e<=3427||3457===e||3530===e||3535===e||3538<=e&&e<=3540||3542===e||3551===e||3633===e||3636<=e&&e<=3642||3655<=e&&e<=3662||3761===e||3764<=e&&e<=3772||3784<=e&&e<=3789||3864<=e&&e<=3865||3893===e||3895===e||3897===e||3953<=e&&e<=3966||3968<=e&&e<=3972||3974<=e&&e<=3975||3981<=e&&e<=3991||3993<=e&&e<=4028||4038===e||4141<=e&&e<=4144||4146<=e&&e<=4151||4153<=e&&e<=4154||4157<=e&&e<=4158||4184<=e&&e<=4185||4190<=e&&e<=4192||4209<=e&&e<=4212||4226===e||4229<=e&&e<=4230||4237===e||4253===e||4957<=e&&e<=4959||5906<=e&&e<=5908||5938<=e&&e<=5940||5970<=e&&e<=5971||6002<=e&&e<=6003||6068<=e&&e<=6069||6071<=e&&e<=6077||6086===e||6089<=e&&e<=6099||6109===e||6155<=e&&e<=6157||6277<=e&&e<=6278||6313===e||6432<=e&&e<=6434||6439<=e&&e<=6440||6450===e||6457<=e&&e<=6459||6679<=e&&e<=6680||6683===e||6742===e||6744<=e&&e<=6750||6752===e||6754===e||6757<=e&&e<=6764||6771<=e&&e<=6780||6783===e||6832<=e&&e<=6845||6846===e||6847<=e&&e<=6848||6912<=e&&e<=6915||6964===e||6965===e||6966<=e&&e<=6970||6972===e||6978===e||7019<=e&&e<=7027||7040<=e&&e<=7041||7074<=e&&e<=7077||7080<=e&&e<=7081||7083<=e&&e<=7085||7142===e||7144<=e&&e<=7145||7149===e||7151<=e&&e<=7153||7212<=e&&e<=7219||7222<=e&&e<=7223||7376<=e&&e<=7378||7380<=e&&e<=7392||7394<=e&&e<=7400||7405===e||7412===e||7416<=e&&e<=7417||7616<=e&&e<=7673||7675<=e&&e<=7679||8204===e||8400<=e&&e<=8412||8413<=e&&e<=8416||8417===e||8418<=e&&e<=8420||8421<=e&&e<=8432||11503<=e&&e<=11505||11647===e||11744<=e&&e<=11775||12330<=e&&e<=12333||12334<=e&&e<=12335||12441<=e&&e<=12442||42607===e||42608<=e&&e<=42610||42612<=e&&e<=42621||42654<=e&&e<=42655||42736<=e&&e<=42737||43010===e||43014===e||43019===e||43045<=e&&e<=43046||43052===e||43204<=e&&e<=43205||43232<=e&&e<=43249||43263===e||43302<=e&&e<=43309||43335<=e&&e<=43345||43392<=e&&e<=43394||43443===e||43446<=e&&e<=43449||43452<=e&&e<=43453||43493===e||43561<=e&&e<=43566||43569<=e&&e<=43570||43573<=e&&e<=43574||43587===e||43596===e||43644===e||43696===e||43698<=e&&e<=43700||43703<=e&&e<=43704||43710<=e&&e<=43711||43713===e||43756<=e&&e<=43757||43766===e||44005===e||44008===e||44013===e||64286===e||65024<=e&&e<=65039||65056<=e&&e<=65071||65438<=e&&e<=65439||66045===e||66272===e||66422<=e&&e<=66426||68097<=e&&e<=68099||68101<=e&&e<=68102||68108<=e&&e<=68111||68152<=e&&e<=68154||68159===e||68325<=e&&e<=68326||68900<=e&&e<=68903||69291<=e&&e<=69292||69446<=e&&e<=69456||69633===e||69688<=e&&e<=69702||69759<=e&&e<=69761||69811<=e&&e<=69814||69817<=e&&e<=69818||69888<=e&&e<=69890||69927<=e&&e<=69931||69933<=e&&e<=69940||70003===e||70016<=e&&e<=70017||70070<=e&&e<=70078||70089<=e&&e<=70092||70095===e||70191<=e&&e<=70193||70196===e||70198<=e&&e<=70199||70206===e||70367===e||70371<=e&&e<=70378||70400<=e&&e<=70401||70459<=e&&e<=70460||70462===e||70464===e||70487===e||70502<=e&&e<=70508||70512<=e&&e<=70516||70712<=e&&e<=70719||70722<=e&&e<=70724||70726===e||70750===e||70832===e||70835<=e&&e<=70840||70842===e||70845===e||70847<=e&&e<=70848||70850<=e&&e<=70851||71087===e||71090<=e&&e<=71093||71100<=e&&e<=71101||71103<=e&&e<=71104||71132<=e&&e<=71133||71219<=e&&e<=71226||71229===e||71231<=e&&e<=71232||71339===e||71341===e||71344<=e&&e<=71349||71351===e||71453<=e&&e<=71455||71458<=e&&e<=71461||71463<=e&&e<=71467||71727<=e&&e<=71735||71737<=e&&e<=71738||71984===e||71995<=e&&e<=71996||71998===e||72003===e||72148<=e&&e<=72151||72154<=e&&e<=72155||72160===e||72193<=e&&e<=72202||72243<=e&&e<=72248||72251<=e&&e<=72254||72263===e||72273<=e&&e<=72278||72281<=e&&e<=72283||72330<=e&&e<=72342||72344<=e&&e<=72345||72752<=e&&e<=72758||72760<=e&&e<=72765||72767===e||72850<=e&&e<=72871||72874<=e&&e<=72880||72882<=e&&e<=72883||72885<=e&&e<=72886||73009<=e&&e<=73014||73018===e||73020<=e&&e<=73021||73023<=e&&e<=73029||73031===e||73104<=e&&e<=73105||73109===e||73111===e||73459<=e&&e<=73460||92912<=e&&e<=92916||92976<=e&&e<=92982||94031===e||94095<=e&&e<=94098||94180===e||113821<=e&&e<=113822||119141===e||119143<=e&&e<=119145||119150<=e&&e<=119154||119163<=e&&e<=119170||119173<=e&&e<=119179||119210<=e&&e<=119213||119362<=e&&e<=119364||121344<=e&&e<=121398||121403<=e&&e<=121452||121461===e||121476===e||121499<=e&&e<=121503||121505<=e&&e<=121519||122880<=e&&e<=122886||122888<=e&&e<=122904||122907<=e&&e<=122913||122915<=e&&e<=122916||122918<=e&&e<=122922||123184<=e&&e<=123190||123628<=e&&e<=123631||125136<=e&&e<=125142||125252<=e&&e<=125258||127995<=e&&e<=127999||917536<=e&&e<=917631||917760<=e&&e<=917999?N.Extend:127462<=e&&e<=127487?N.RegionalIndicator:2307===e||2363===e||2366<=e&&e<=2368||2377<=e&&e<=2380||2382<=e&&e<=2383||2434<=e&&e<=2435||2495<=e&&e<=2496||2503<=e&&e<=2504||2507<=e&&e<=2508||2563===e||2622<=e&&e<=2624||2691===e||2750<=e&&e<=2752||2761===e||2763<=e&&e<=2764||2818<=e&&e<=2819||2880===e||2887<=e&&e<=2888||2891<=e&&e<=2892||3007===e||3009<=e&&e<=3010||3014<=e&&e<=3016||3018<=e&&e<=3020||3073<=e&&e<=3075||3137<=e&&e<=3140||3202<=e&&e<=3203||3262===e||3264<=e&&e<=3265||3267<=e&&e<=3268||3271<=e&&e<=3272||3274<=e&&e<=3275||3330<=e&&e<=3331||3391<=e&&e<=3392||3398<=e&&e<=3400||3402<=e&&e<=3404||3458<=e&&e<=3459||3536<=e&&e<=3537||3544<=e&&e<=3550||3570<=e&&e<=3571||3635===e||3763===e||3902<=e&&e<=3903||3967===e||4145===e||4155<=e&&e<=4156||4182<=e&&e<=4183||4228===e||6070===e||6078<=e&&e<=6085||6087<=e&&e<=6088||6435<=e&&e<=6438||6441<=e&&e<=6443||6448<=e&&e<=6449||6451<=e&&e<=6456||6681<=e&&e<=6682||6741===e||6743===e||6765<=e&&e<=6770||6916===e||6971===e||6973<=e&&e<=6977||6979<=e&&e<=6980||7042===e||7073===e||7078<=e&&e<=7079||7082===e||7143===e||7146<=e&&e<=7148||7150===e||7154<=e&&e<=7155||7204<=e&&e<=7211||7220<=e&&e<=7221||7393===e||7415===e||43043<=e&&e<=43044||43047===e||43136<=e&&e<=43137||43188<=e&&e<=43203||43346<=e&&e<=43347||43395===e||43444<=e&&e<=43445||43450<=e&&e<=43451||43454<=e&&e<=43456||43567<=e&&e<=43568||43571<=e&&e<=43572||43597===e||43755===e||43758<=e&&e<=43759||43765===e||44003<=e&&e<=44004||44006<=e&&e<=44007||44009<=e&&e<=44010||44012===e||69632===e||69634===e||69762===e||69808<=e&&e<=69810||69815<=e&&e<=69816||69932===e||69957<=e&&e<=69958||70018===e||70067<=e&&e<=70069||70079<=e&&e<=70080||70094===e||70188<=e&&e<=70190||70194<=e&&e<=70195||70197===e||70368<=e&&e<=70370||70402<=e&&e<=70403||70463===e||70465<=e&&e<=70468||70471<=e&&e<=70472||70475<=e&&e<=70477||70498<=e&&e<=70499||70709<=e&&e<=70711||70720<=e&&e<=70721||70725===e||70833<=e&&e<=70834||70841===e||70843<=e&&e<=70844||70846===e||70849===e||71088<=e&&e<=71089||71096<=e&&e<=71099||71102===e||71216<=e&&e<=71218||71227<=e&&e<=71228||71230===e||71340===e||71342<=e&&e<=71343||71350===e||71456<=e&&e<=71457||71462===e||71724<=e&&e<=71726||71736===e||71985<=e&&e<=71989||71991<=e&&e<=71992||71997===e||72e3===e||72002===e||72145<=e&&e<=72147||72156<=e&&e<=72159||72164===e||72249===e||72279<=e&&e<=72280||72343===e||72751===e||72766===e||72873===e||72881===e||72884===e||73098<=e&&e<=73102||73107<=e&&e<=73108||73110===e||73461<=e&&e<=73462||94033<=e&&e<=94087||94192<=e&&e<=94193||119142===e||119149===e?N.SpacingMark:4352<=e&&e<=4447||43360<=e&&e<=43388?N.L:4448<=e&&e<=4519||55216<=e&&e<=55238?N.V:4520<=e&&e<=4607||55243<=e&&e<=55291?N.T:44032===e||44060===e||44088===e||44116===e||44144===e||44172===e||44200===e||44228===e||44256===e||44284===e||44312===e||44340===e||44368===e||44396===e||44424===e||44452===e||44480===e||44508===e||44536===e||44564===e||44592===e||44620===e||44648===e||44676===e||44704===e||44732===e||44760===e||44788===e||44816===e||44844===e||44872===e||44900===e||44928===e||44956===e||44984===e||45012===e||45040===e||45068===e||45096===e||45124===e||45152===e||45180===e||45208===e||45236===e||45264===e||45292===e||45320===e||45348===e||45376===e||45404===e||45432===e||45460===e||45488===e||45516===e||45544===e||45572===e||45600===e||45628===e||45656===e||45684===e||45712===e||45740===e||45768===e||45796===e||45824===e||45852===e||45880===e||45908===e||45936===e||45964===e||45992===e||46020===e||46048===e||46076===e||46104===e||46132===e||46160===e||46188===e||46216===e||46244===e||46272===e||46300===e||46328===e||46356===e||46384===e||46412===e||46440===e||46468===e||46496===e||46524===e||46552===e||46580===e||46608===e||46636===e||46664===e||46692===e||46720===e||46748===e||46776===e||46804===e||46832===e||46860===e||46888===e||46916===e||46944===e||46972===e||47e3===e||47028===e||47056===e||47084===e||47112===e||47140===e||47168===e||47196===e||47224===e||47252===e||47280===e||47308===e||47336===e||47364===e||47392===e||47420===e||47448===e||47476===e||47504===e||47532===e||47560===e||47588===e||47616===e||47644===e||47672===e||47700===e||47728===e||47756===e||47784===e||47812===e||47840===e||47868===e||47896===e||47924===e||47952===e||47980===e||48008===e||48036===e||48064===e||48092===e||48120===e||48148===e||48176===e||48204===e||48232===e||48260===e||48288===e||48316===e||48344===e||48372===e||48400===e||48428===e||48456===e||48484===e||48512===e||48540===e||48568===e||48596===e||48624===e||48652===e||48680===e||48708===e||48736===e||48764===e||48792===e||48820===e||48848===e||48876===e||48904===e||48932===e||48960===e||48988===e||49016===e||49044===e||49072===e||49100===e||49128===e||49156===e||49184===e||49212===e||49240===e||49268===e||49296===e||49324===e||49352===e||49380===e||49408===e||49436===e||49464===e||49492===e||49520===e||49548===e||49576===e||49604===e||49632===e||49660===e||49688===e||49716===e||49744===e||49772===e||49800===e||49828===e||49856===e||49884===e||49912===e||49940===e||49968===e||49996===e||50024===e||50052===e||50080===e||50108===e||50136===e||50164===e||50192===e||50220===e||50248===e||50276===e||50304===e||50332===e||50360===e||50388===e||50416===e||50444===e||50472===e||50500===e||50528===e||50556===e||50584===e||50612===e||50640===e||50668===e||50696===e||50724===e||50752===e||50780===e||50808===e||50836===e||50864===e||50892===e||50920===e||50948===e||50976===e||51004===e||51032===e||51060===e||51088===e||51116===e||51144===e||51172===e||51200===e||51228===e||51256===e||51284===e||51312===e||51340===e||51368===e||51396===e||51424===e||51452===e||51480===e||51508===e||51536===e||51564===e||51592===e||51620===e||51648===e||51676===e||51704===e||51732===e||51760===e||51788===e||51816===e||51844===e||51872===e||51900===e||51928===e||51956===e||51984===e||52012===e||52040===e||52068===e||52096===e||52124===e||52152===e||52180===e||52208===e||52236===e||52264===e||52292===e||52320===e||52348===e||52376===e||52404===e||52432===e||52460===e||52488===e||52516===e||52544===e||52572===e||52600===e||52628===e||52656===e||52684===e||52712===e||52740===e||52768===e||52796===e||52824===e||52852===e||52880===e||52908===e||52936===e||52964===e||52992===e||53020===e||53048===e||53076===e||53104===e||53132===e||53160===e||53188===e||53216===e||53244===e||53272===e||53300===e||53328===e||53356===e||53384===e||53412===e||53440===e||53468===e||53496===e||53524===e||53552===e||53580===e||53608===e||53636===e||53664===e||53692===e||53720===e||53748===e||53776===e||53804===e||53832===e||53860===e||53888===e||53916===e||53944===e||53972===e||54e3===e||54028===e||54056===e||54084===e||54112===e||54140===e||54168===e||54196===e||54224===e||54252===e||54280===e||54308===e||54336===e||54364===e||54392===e||54420===e||54448===e||54476===e||54504===e||54532===e||54560===e||54588===e||54616===e||54644===e||54672===e||54700===e||54728===e||54756===e||54784===e||54812===e||54840===e||54868===e||54896===e||54924===e||54952===e||54980===e||55008===e||55036===e||55064===e||55092===e||55120===e||55148===e||55176===e?N.LV:44033<=e&&e<=44059||44061<=e&&e<=44087||44089<=e&&e<=44115||44117<=e&&e<=44143||44145<=e&&e<=44171||44173<=e&&e<=44199||44201<=e&&e<=44227||44229<=e&&e<=44255||44257<=e&&e<=44283||44285<=e&&e<=44311||44313<=e&&e<=44339||44341<=e&&e<=44367||44369<=e&&e<=44395||44397<=e&&e<=44423||44425<=e&&e<=44451||44453<=e&&e<=44479||44481<=e&&e<=44507||44509<=e&&e<=44535||44537<=e&&e<=44563||44565<=e&&e<=44591||44593<=e&&e<=44619||44621<=e&&e<=44647||44649<=e&&e<=44675||44677<=e&&e<=44703||44705<=e&&e<=44731||44733<=e&&e<=44759||44761<=e&&e<=44787||44789<=e&&e<=44815||44817<=e&&e<=44843||44845<=e&&e<=44871||44873<=e&&e<=44899||44901<=e&&e<=44927||44929<=e&&e<=44955||44957<=e&&e<=44983||44985<=e&&e<=45011||45013<=e&&e<=45039||45041<=e&&e<=45067||45069<=e&&e<=45095||45097<=e&&e<=45123||45125<=e&&e<=45151||45153<=e&&e<=45179||45181<=e&&e<=45207||45209<=e&&e<=45235||45237<=e&&e<=45263||45265<=e&&e<=45291||45293<=e&&e<=45319||45321<=e&&e<=45347||45349<=e&&e<=45375||45377<=e&&e<=45403||45405<=e&&e<=45431||45433<=e&&e<=45459||45461<=e&&e<=45487||45489<=e&&e<=45515||45517<=e&&e<=45543||45545<=e&&e<=45571||45573<=e&&e<=45599||45601<=e&&e<=45627||45629<=e&&e<=45655||45657<=e&&e<=45683||45685<=e&&e<=45711||45713<=e&&e<=45739||45741<=e&&e<=45767||45769<=e&&e<=45795||45797<=e&&e<=45823||45825<=e&&e<=45851||45853<=e&&e<=45879||45881<=e&&e<=45907||45909<=e&&e<=45935||45937<=e&&e<=45963||45965<=e&&e<=45991||45993<=e&&e<=46019||46021<=e&&e<=46047||46049<=e&&e<=46075||46077<=e&&e<=46103||46105<=e&&e<=46131||46133<=e&&e<=46159||46161<=e&&e<=46187||46189<=e&&e<=46215||46217<=e&&e<=46243||46245<=e&&e<=46271||46273<=e&&e<=46299||46301<=e&&e<=46327||46329<=e&&e<=46355||46357<=e&&e<=46383||46385<=e&&e<=46411||46413<=e&&e<=46439||46441<=e&&e<=46467||46469<=e&&e<=46495||46497<=e&&e<=46523||46525<=e&&e<=46551||46553<=e&&e<=46579||46581<=e&&e<=46607||46609<=e&&e<=46635||46637<=e&&e<=46663||46665<=e&&e<=46691||46693<=e&&e<=46719||46721<=e&&e<=46747||46749<=e&&e<=46775||46777<=e&&e<=46803||46805<=e&&e<=46831||46833<=e&&e<=46859||46861<=e&&e<=46887||46889<=e&&e<=46915||46917<=e&&e<=46943||46945<=e&&e<=46971||46973<=e&&e<=46999||47001<=e&&e<=47027||47029<=e&&e<=47055||47057<=e&&e<=47083||47085<=e&&e<=47111||47113<=e&&e<=47139||47141<=e&&e<=47167||47169<=e&&e<=47195||47197<=e&&e<=47223||47225<=e&&e<=47251||47253<=e&&e<=47279||47281<=e&&e<=47307||47309<=e&&e<=47335||47337<=e&&e<=47363||47365<=e&&e<=47391||47393<=e&&e<=47419||47421<=e&&e<=47447||47449<=e&&e<=47475||47477<=e&&e<=47503||47505<=e&&e<=47531||47533<=e&&e<=47559||47561<=e&&e<=47587||47589<=e&&e<=47615||47617<=e&&e<=47643||47645<=e&&e<=47671||47673<=e&&e<=47699||47701<=e&&e<=47727||47729<=e&&e<=47755||47757<=e&&e<=47783||47785<=e&&e<=47811||47813<=e&&e<=47839||47841<=e&&e<=47867||47869<=e&&e<=47895||47897<=e&&e<=47923||47925<=e&&e<=47951||47953<=e&&e<=47979||47981<=e&&e<=48007||48009<=e&&e<=48035||48037<=e&&e<=48063||48065<=e&&e<=48091||48093<=e&&e<=48119||48121<=e&&e<=48147||48149<=e&&e<=48175||48177<=e&&e<=48203||48205<=e&&e<=48231||48233<=e&&e<=48259||48261<=e&&e<=48287||48289<=e&&e<=48315||48317<=e&&e<=48343||48345<=e&&e<=48371||48373<=e&&e<=48399||48401<=e&&e<=48427||48429<=e&&e<=48455||48457<=e&&e<=48483||48485<=e&&e<=48511||48513<=e&&e<=48539||48541<=e&&e<=48567||48569<=e&&e<=48595||48597<=e&&e<=48623||48625<=e&&e<=48651||48653<=e&&e<=48679||48681<=e&&e<=48707||48709<=e&&e<=48735||48737<=e&&e<=48763||48765<=e&&e<=48791||48793<=e&&e<=48819||48821<=e&&e<=48847||48849<=e&&e<=48875||48877<=e&&e<=48903||48905<=e&&e<=48931||48933<=e&&e<=48959||48961<=e&&e<=48987||48989<=e&&e<=49015||49017<=e&&e<=49043||49045<=e&&e<=49071||49073<=e&&e<=49099||49101<=e&&e<=49127||49129<=e&&e<=49155||49157<=e&&e<=49183||49185<=e&&e<=49211||49213<=e&&e<=49239||49241<=e&&e<=49267||49269<=e&&e<=49295||49297<=e&&e<=49323||49325<=e&&e<=49351||49353<=e&&e<=49379||49381<=e&&e<=49407||49409<=e&&e<=49435||49437<=e&&e<=49463||49465<=e&&e<=49491||49493<=e&&e<=49519||49521<=e&&e<=49547||49549<=e&&e<=49575||49577<=e&&e<=49603||49605<=e&&e<=49631||49633<=e&&e<=49659||49661<=e&&e<=49687||49689<=e&&e<=49715||49717<=e&&e<=49743||49745<=e&&e<=49771||49773<=e&&e<=49799||49801<=e&&e<=49827||49829<=e&&e<=49855||49857<=e&&e<=49883||49885<=e&&e<=49911||49913<=e&&e<=49939||49941<=e&&e<=49967||49969<=e&&e<=49995||49997<=e&&e<=50023||50025<=e&&e<=50051||50053<=e&&e<=50079||50081<=e&&e<=50107||50109<=e&&e<=50135||50137<=e&&e<=50163||50165<=e&&e<=50191||50193<=e&&e<=50219||50221<=e&&e<=50247||50249<=e&&e<=50275||50277<=e&&e<=50303||50305<=e&&e<=50331||50333<=e&&e<=50359||50361<=e&&e<=50387||50389<=e&&e<=50415||50417<=e&&e<=50443||50445<=e&&e<=50471||50473<=e&&e<=50499||50501<=e&&e<=50527||50529<=e&&e<=50555||50557<=e&&e<=50583||50585<=e&&e<=50611||50613<=e&&e<=50639||50641<=e&&e<=50667||50669<=e&&e<=50695||50697<=e&&e<=50723||50725<=e&&e<=50751||50753<=e&&e<=50779||50781<=e&&e<=50807||50809<=e&&e<=50835||50837<=e&&e<=50863||50865<=e&&e<=50891||50893<=e&&e<=50919||50921<=e&&e<=50947||50949<=e&&e<=50975||50977<=e&&e<=51003||51005<=e&&e<=51031||51033<=e&&e<=51059||51061<=e&&e<=51087||51089<=e&&e<=51115||51117<=e&&e<=51143||51145<=e&&e<=51171||51173<=e&&e<=51199||51201<=e&&e<=51227||51229<=e&&e<=51255||51257<=e&&e<=51283||51285<=e&&e<=51311||51313<=e&&e<=51339||51341<=e&&e<=51367||51369<=e&&e<=51395||51397<=e&&e<=51423||51425<=e&&e<=51451||51453<=e&&e<=51479||51481<=e&&e<=51507||51509<=e&&e<=51535||51537<=e&&e<=51563||51565<=e&&e<=51591||51593<=e&&e<=51619||51621<=e&&e<=51647||51649<=e&&e<=51675||51677<=e&&e<=51703||51705<=e&&e<=51731||51733<=e&&e<=51759||51761<=e&&e<=51787||51789<=e&&e<=51815||51817<=e&&e<=51843||51845<=e&&e<=51871||51873<=e&&e<=51899||51901<=e&&e<=51927||51929<=e&&e<=51955||51957<=e&&e<=51983||51985<=e&&e<=52011||52013<=e&&e<=52039||52041<=e&&e<=52067||52069<=e&&e<=52095||52097<=e&&e<=52123||52125<=e&&e<=52151||52153<=e&&e<=52179||52181<=e&&e<=52207||52209<=e&&e<=52235||52237<=e&&e<=52263||52265<=e&&e<=52291||52293<=e&&e<=52319||52321<=e&&e<=52347||52349<=e&&e<=52375||52377<=e&&e<=52403||52405<=e&&e<=52431||52433<=e&&e<=52459||52461<=e&&e<=52487||52489<=e&&e<=52515||52517<=e&&e<=52543||52545<=e&&e<=52571||52573<=e&&e<=52599||52601<=e&&e<=52627||52629<=e&&e<=52655||52657<=e&&e<=52683||52685<=e&&e<=52711||52713<=e&&e<=52739||52741<=e&&e<=52767||52769<=e&&e<=52795||52797<=e&&e<=52823||52825<=e&&e<=52851||52853<=e&&e<=52879||52881<=e&&e<=52907||52909<=e&&e<=52935||52937<=e&&e<=52963||52965<=e&&e<=52991||52993<=e&&e<=53019||53021<=e&&e<=53047||53049<=e&&e<=53075||53077<=e&&e<=53103||53105<=e&&e<=53131||53133<=e&&e<=53159||53161<=e&&e<=53187||53189<=e&&e<=53215||53217<=e&&e<=53243||53245<=e&&e<=53271||53273<=e&&e<=53299||53301<=e&&e<=53327||53329<=e&&e<=53355||53357<=e&&e<=53383||53385<=e&&e<=53411||53413<=e&&e<=53439||53441<=e&&e<=53467||53469<=e&&e<=53495||53497<=e&&e<=53523||53525<=e&&e<=53551||53553<=e&&e<=53579||53581<=e&&e<=53607||53609<=e&&e<=53635||53637<=e&&e<=53663||53665<=e&&e<=53691||53693<=e&&e<=53719||53721<=e&&e<=53747||53749<=e&&e<=53775||53777<=e&&e<=53803||53805<=e&&e<=53831||53833<=e&&e<=53859||53861<=e&&e<=53887||53889<=e&&e<=53915||53917<=e&&e<=53943||53945<=e&&e<=53971||53973<=e&&e<=53999||54001<=e&&e<=54027||54029<=e&&e<=54055||54057<=e&&e<=54083||54085<=e&&e<=54111||54113<=e&&e<=54139||54141<=e&&e<=54167||54169<=e&&e<=54195||54197<=e&&e<=54223||54225<=e&&e<=54251||54253<=e&&e<=54279||54281<=e&&e<=54307||54309<=e&&e<=54335||54337<=e&&e<=54363||54365<=e&&e<=54391||54393<=e&&e<=54419||54421<=e&&e<=54447||54449<=e&&e<=54475||54477<=e&&e<=54503||54505<=e&&e<=54531||54533<=e&&e<=54559||54561<=e&&e<=54587||54589<=e&&e<=54615||54617<=e&&e<=54643||54645<=e&&e<=54671||54673<=e&&e<=54699||54701<=e&&e<=54727||54729<=e&&e<=54755||54757<=e&&e<=54783||54785<=e&&e<=54811||54813<=e&&e<=54839||54841<=e&&e<=54867||54869<=e&&e<=54895||54897<=e&&e<=54923||54925<=e&&e<=54951||54953<=e&&e<=54979||54981<=e&&e<=55007||55009<=e&&e<=55035||55037<=e&&e<=55063||55065<=e&&e<=55091||55093<=e&&e<=55119||55121<=e&&e<=55147||55149<=e&&e<=55175||55177<=e&&e<=55203?N.LVT:8205===e?N.ZWJ:N.Other}var z={};W(z,"constants",N),W(z,"breakType",M),W(z,"emojiProperty",U),W(z,"breakProperty",X);export{X as breakProperty,M as breakType,N as constants,z as default,U as emojiProperty};
//# sourceMappingURL=mod.js.map
