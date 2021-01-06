# JAGloss

A Japanese sentence glossing tool for Anki

![](images\jagloss\demo.gif)



## Features

* Automatically find words in a Japanese sentence and highlight them
* Click a highlighted word to show its definition and reading
* External links to Wikitionary and goo 
* All [Kanji Hover](/kanjihover.html) features (Kanji hover is contained within this script, no need to include it separately)
* [Anki Persistence](https://github.com/SimonLammer/anki-persistence) for near-instantaneous loads
* Customizable options to fit your card layout
* Can be applied to multiple sections of the card at once



## How To Use

I apologize, but the setup is a bit involved.

If you want to skip the setup, you can just download my [custom note type](notetype.html)



**Step 1**

Add the following script to the **back** of the card. 



**Note:** I'm not entirely sure why, but at some point in development it stopped working when I tried to load the script as an external file, which is why you have to include this chunk on the card itself. If you figure out how to make it work as an external file, let me know.

```
<script>const ignore=["が","の","を","に","へ","と","で","から","より","さ","よ","ね","は","て","し","さん","ます","な","こと","う","。","ば","た","も","０","１","２","３","４","５","６","７","８","９","だ","か","ず","い"],inputField="JAGlossInput",outputField="JAGlossOutput",kanjiHover="kanjiHover",dictionary="_JADict.json";if(void 0===window.Persistence){var _persistenceKey="github.com/SimonLammer/anki-persistence/",_defaultKey="_default";if(window.Persistence_sessionStorage=function(){var t=!1;try{"object"==typeof window.sessionStorage&&(t=!0,this.clear=function(){for(var t=0;t<sessionStorage.length;t++){var e=sessionStorage.key(t);0==e.indexOf(_persistenceKey)&&(sessionStorage.removeItem(e),t--)}},this.setItem=function(t,e){null==e&&(e=t,t=_defaultKey),sessionStorage.setItem(_persistenceKey+t,JSON.stringify(e))},this.getItem=function(t){return null==t&&(t=_defaultKey),JSON.parse(sessionStorage.getItem(_persistenceKey+t))},this.removeItem=function(t){null==t&&(t=_defaultKey),sessionStorage.removeItem(_persistenceKey+t)})}catch(t){}this.isAvailable=function(){return t}},window.Persistence_windowKey=function(t){var e=window[t],i=!1;"object"==typeof e&&(i=!0,this.clear=function(){e[_persistenceKey]={}},this.setItem=function(t,i){null==i&&(i=t,t=_defaultKey),e[_persistenceKey][t]=i},this.getItem=function(t){return null==t&&(t=_defaultKey),e[_persistenceKey][t]||null},this.removeItem=function(t){null==t&&(t=_defaultKey),delete e[_persistenceKey][t]},null==e[_persistenceKey]&&this.clear()),this.isAvailable=function(){return i}},window.Persistence=new Persistence_sessionStorage,Persistence.isAvailable()||(window.Persistence=new Persistence_windowKey("py")),!Persistence.isAvailable()){var titleStartIndex=window.location.toString().indexOf("title"),titleContentIndex=window.location.toString().indexOf("main",titleStartIndex);titleStartIndex>0&&titleContentIndex>0&&titleContentIndex-titleStartIndex<10&&(window.Persistence=new Persistence_windowKey("qt"))}}function TinySegmenter(){var t={"[一二三四五六七八九十百千万億兆]":"M","[一-龠々〆ヵヶ]":"H","[ぁ-ん]":"I","[ァ-ヴーｱ-ﾝﾞｰ]":"K","[a-zA-Zａ-ｚＡ-Ｚ]":"A","[0-9０-９]":"N"};for(var e in this.chartype_=[],t){var i=new RegExp;i.compile(e),this.chartype_.push([i,t[e]])}return this.BIAS__=-332,this.BC1__={HH:6,II:2461,KH:406,OH:-1378},this.BC2__={AA:-3267,AI:2744,AN:-878,HH:-4070,HM:-1711,HN:4012,HO:3761,IA:1327,IH:-1184,II:-1332,IK:1721,IO:5492,KI:3831,KK:-8741,MH:-3132,MK:3334,OO:-2920},this.BC3__={HH:996,HI:626,HK:-721,HN:-1307,HO:-836,IH:-301,KK:2762,MK:1079,MM:4034,OA:-1652,OH:266},this.BP1__={BB:295,OB:304,OO:-125,UB:352},this.BP2__={BO:60,OO:-1762},this.BQ1__={BHH:1150,BHM:1521,BII:-1158,BIM:886,BMH:1208,BNH:449,BOH:-91,BOO:-2597,OHI:451,OIH:-296,OKA:1851,OKH:-1020,OKK:904,OOO:2965},this.BQ2__={BHH:118,BHI:-1159,BHM:466,BIH:-919,BKK:-1720,BKO:864,OHH:-1139,OHM:-181,OIH:153,UHI:-1146},this.BQ3__={BHH:-792,BHI:2664,BII:-299,BKI:419,BMH:937,BMM:8335,BNN:998,BOH:775,OHH:2174,OHM:439,OII:280,OKH:1798,OKI:-793,OKO:-2242,OMH:-2402,OOO:11699},this.BQ4__={BHH:-3895,BIH:3761,BII:-4654,BIK:1348,BKK:-1806,BMI:-3385,BOO:-12396,OAH:926,OHH:266,OHK:-2036,ONN:-973},this.BW1__={",と":660,",同":727,"B1あ":1404,"B1同":542,"、と":660,"、同":727,"」と":1682,"あっ":1505,"いう":1743,"いっ":-2055,"いる":672,"うし":-4817,"うん":665,"から":3472,"がら":600,"こう":-790,"こと":2083,"こん":-1262,"さら":-4143,"さん":4573,"した":2641,"して":1104,"すで":-3399,"そこ":1977,"それ":-871,"たち":1122,"ため":601,"った":3463,"つい":-802,"てい":805,"てき":1249,"でき":1127,"です":3445,"では":844,"とい":-4915,"とみ":1922,"どこ":3887,"ない":5713,"なっ":3015,"など":7379,"なん":-1113,"にし":2468,"には":1498,"にも":1671,"に対":-912,"の一":-501,"の中":741,"ませ":2448,"まで":1711,"まま":2600,"まる":-2155,"やむ":-1947,"よっ":-2565,"れた":2369,"れで":-913,"をし":1860,"を見":731,"亡く":-1886,"京都":2558,"取り":-2784,"大き":-2604,"大阪":1497,"平方":-2314,"引き":-1336,"日本":-195,"本当":-2423,"毎日":-2113,"目指":-724,"Ｂ１あ":1404,"Ｂ１同":542,"｣と":1682},this.BW2__={"..":-11822,11:-669,"――":-5730,"−−":-13175,"いう":-1609,"うか":2490,"かし":-1350,"かも":-602,"から":-7194,"かれ":4612,"がい":853,"がら":-3198,"きた":1941,"くな":-1597,"こと":-8392,"この":-4193,"させ":4533,"され":13168,"さん":-3977,"しい":-1819,"しか":-545,"した":5078,"して":972,"しな":939,"その":-3744,"たい":-1253,"たた":-662,"ただ":-3857,"たち":-786,"たと":1224,"たは":-939,"った":4589,"って":1647,"っと":-2094,"てい":6144,"てき":3640,"てく":2551,"ては":-3110,"ても":-3065,"でい":2666,"でき":-1528,"でし":-3828,"です":-4761,"でも":-4203,"とい":1890,"とこ":-1746,"とと":-2279,"との":720,"とみ":5168,"とも":-3941,"ない":-2488,"なが":-1313,"など":-6509,"なの":2614,"なん":3099,"にお":-1615,"にし":2748,"にな":2454,"によ":-7236,"に対":-14943,"に従":-4688,"に関":-11388,"のか":2093,"ので":-7059,"のに":-6041,"のの":-6125,"はい":1073,"はが":-1033,"はず":-2532,"ばれ":1813,"まし":-1316,"まで":-6621,"まれ":5409,"めて":-3153,"もい":2230,"もの":-10713,"らか":-944,"らし":-1611,"らに":-1897,"りし":651,"りま":1620,"れた":4270,"れて":849,"れば":4114,"ろう":6067,"われ":7901,"を通":-11877,"んだ":728,"んな":-4115,"一人":602,"一方":-1375,"一日":970,"一部":-1051,"上が":-4479,"会社":-1116,"出て":2163,"分の":-7758,"同党":970,"同日":-913,"大阪":-2471,"委員":-1250,"少な":-1050,"年度":-8669,"年間":-1626,"府県":-2363,"手権":-1982,"新聞":-4066,"日新":-722,"日本":-7068,"日米":3372,"曜日":-601,"朝鮮":-2355,"本人":-2697,"東京":-1543,"然と":-1384,"社会":-1276,"立て":-990,"第に":-1612,"米国":-4268,"１１":-669},this.BW3__={"あた":-2194,"あり":719,"ある":3846,"い.":-1185,"い。":-1185,"いい":5308,"いえ":2079,"いく":3029,"いた":2056,"いっ":1883,"いる":5600,"いわ":1527,"うち":1117,"うと":4798,"えと":1454,"か.":2857,"か。":2857,"かけ":-743,"かっ":-4098,"かに":-669,"から":6520,"かり":-2670,"が,":1816,"が、":1816,"がき":-4855,"がけ":-1127,"がっ":-913,"がら":-4977,"がり":-2064,"きた":1645,"けど":1374,"こと":7397,"この":1542,"ころ":-2757,"さい":-714,"さを":976,"し,":1557,"し、":1557,"しい":-3714,"した":3562,"して":1449,"しな":2608,"しま":1200,"す.":-1310,"す。":-1310,"する":6521,"ず,":3426,"ず、":3426,"ずに":841,"そう":428,"た.":8875,"た。":8875,"たい":-594,"たの":812,"たり":-1183,"たる":-853,"だ.":4098,"だ。":4098,"だっ":1004,"った":-4748,"って":300,"てい":6240,"てお":855,"ても":302,"です":1437,"でに":-1482,"では":2295,"とう":-1387,"とし":2266,"との":541,"とも":-3543,"どう":4664,"ない":1796,"なく":-903,"など":2135,"に,":-1021,"に、":-1021,"にし":1771,"にな":1906,"には":2644,"の,":-724,"の、":-724,"の子":-1e3,"は,":1337,"は、":1337,"べき":2181,"まし":1113,"ます":6943,"まっ":-1549,"まで":6154,"まれ":-793,"らし":1479,"られ":6820,"るる":3818,"れ,":854,"れ、":854,"れた":1850,"れて":1375,"れば":-3246,"れる":1091,"われ":-605,"んだ":606,"んで":798,"カ月":990,"会議":860,"入り":1232,"大会":2217,"始め":1681,"市":965,"新聞":-5055,"日,":974,"日、":974,"社会":2024,"ｶ月":990},this.TC1__={AAA:1093,HHH:1029,HHM:580,HII:998,HOH:-390,HOM:-331,IHI:1169,IOH:-142,IOI:-1015,IOM:467,MMH:187,OOI:-1832},this.TC2__={HHO:2088,HII:-1023,HMM:-1154,IHI:-1965,KKH:703,OII:-2649},this.TC3__={AAA:-294,HHH:346,HHI:-341,HII:-1088,HIK:731,HOH:-1486,IHH:128,IHI:-3041,IHO:-1935,IIH:-825,IIM:-1035,IOI:-542,KHH:-1216,KKA:491,KKH:-1217,KOK:-1009,MHH:-2694,MHM:-457,MHO:123,MMH:-471,NNH:-1689,NNO:662,OHO:-3393},this.TC4__={HHH:-203,HHI:1344,HHK:365,HHM:-122,HHN:182,HHO:669,HIH:804,HII:679,HOH:446,IHH:695,IHO:-2324,IIH:321,III:1497,IIO:656,IOO:54,KAK:4845,KKA:3386,KKK:3065,MHH:-405,MHI:201,MMH:-241,MMM:661,MOM:841},this.TQ1__={BHHH:-227,BHHI:316,BHIH:-132,BIHH:60,BIII:1595,BNHH:-744,BOHH:225,BOOO:-908,OAKK:482,OHHH:281,OHIH:249,OIHI:200,OIIH:-68},this.TQ2__={BIHH:-1401,BIII:-1033,BKAK:-543,BOOO:-5591},this.TQ3__={BHHH:478,BHHM:-1073,BHIH:222,BHII:-504,BIIH:-116,BIII:-105,BMHI:-863,BMHM:-464,BOMH:620,OHHH:346,OHHI:1729,OHII:997,OHMH:481,OIHH:623,OIIH:1344,OKAK:2792,OKHH:587,OKKA:679,OOHH:110,OOII:-685},this.TQ4__={BHHH:-721,BHHM:-3604,BHII:-966,BIIH:-607,BIII:-2181,OAAA:-2763,OAKK:180,OHHH:-294,OHHI:2446,OHHO:480,OHIH:-1573,OIHH:1935,OIHI:-493,OIIH:626,OIII:-4007,OKAK:-8156},this.TW1__={"につい":-4681,"東京都":2026},this.TW2__={"ある程":-2049,"いった":-1256,"ころが":-2434,"しょう":3873,"その後":-4430,"だって":-1049,"ていた":1833,"として":-4657,"ともに":-4517,"もので":1882,"一気に":-792,"初めて":-1512,"同時に":-8097,"大きな":-1255,"対して":-2721,"社会党":-3216},this.TW3__={"いただ":-1734,"してい":1314,"として":-4314,"につい":-5483,"にとっ":-5989,"に当た":-6247,"ので,":-727,"ので、":-727,"のもの":-600,"れから":-3752,"十二月":-2287},this.TW4__={"いう.":8576,"いう。":8576,"からな":-2348,"してい":2958,"たが,":1516,"たが、":1516,"ている":1538,"という":1349,"ました":5543,"ません":1097,"ようと":-4258,"よると":5865},this.UC1__={A:484,K:93,M:645,O:-505},this.UC2__={A:819,H:1059,I:409,M:3987,N:5775,O:646},this.UC3__={A:-1370,I:2311},this.UC4__={A:-2643,H:1809,I:-1032,K:-3450,M:3565,N:3876,O:6646},this.UC5__={H:313,I:-1238,K:-799,M:539,O:-831},this.UC6__={H:-506,I:-253,K:87,M:247,O:-387},this.UP1__={O:-214},this.UP2__={B:69,O:935},this.UP3__={B:189},this.UQ1__={BH:21,BI:-12,BK:-99,BN:142,BO:-56,OH:-95,OI:477,OK:410,OO:-2422},this.UQ2__={BH:216,BI:113,OK:1759},this.UQ3__={BA:-479,BH:42,BI:1913,BK:-7198,BM:3160,BN:6427,BO:14761,OI:-827,ON:-3212},this.UW1__={",":156,"、":156,"「":-463,"あ":-941,"う":-127,"が":-553,"き":121,"こ":505,"で":-201,"と":-547,"ど":-123,"に":-789,"の":-185,"は":-847,"も":-466,"や":-470,"よ":182,"ら":-292,"り":208,"れ":169,"を":-446,"ん":-137,"・":-135,"主":-402,"京":-268,"区":-912,"午":871,"国":-460,"大":561,"委":729,"市":-411,"日":-141,"理":361,"生":-408,"県":-386,"都":-718,"｢":-463,"･":-135},this.UW2__={",":-829,"、":-829,"〇":892,"「":-645,"」":3145,"あ":-538,"い":505,"う":134,"お":-502,"か":1454,"が":-856,"く":-412,"こ":1141,"さ":878,"ざ":540,"し":1529,"す":-675,"せ":300,"そ":-1011,"た":188,"だ":1837,"つ":-949,"て":-291,"で":-268,"と":-981,"ど":1273,"な":1063,"に":-1764,"の":130,"は":-409,"ひ":-1273,"べ":1261,"ま":600,"も":-1263,"や":-402,"よ":1639,"り":-579,"る":-694,"れ":571,"を":-2516,"ん":2095,"ア":-587,"カ":306,"キ":568,"ッ":831,"三":-758,"不":-2150,"世":-302,"中":-968,"主":-861,"事":492,"人":-123,"会":978,"保":362,"入":548,"初":-3025,"副":-1566,"北":-3414,"区":-422,"大":-1769,"天":-865,"太":-483,"子":-1519,"学":760,"実":1023,"小":-2009,"市":-813,"年":-1060,"強":1067,"手":-1519,"揺":-1033,"政":1522,"文":-1355,"新":-1682,"日":-1815,"明":-1462,"最":-630,"朝":-1843,"本":-1650,"東":-931,"果":-665,"次":-2378,"民":-180,"気":-1740,"理":752,"発":529,"目":-1584,"相":-242,"県":-1165,"立":-763,"第":810,"米":509,"自":-1353,"行":838,"西":-744,"見":-3874,"調":1010,"議":1198,"込":3041,"開":1758,"間":-1257,"｢":-645,"｣":3145,"ｯ":831,"ｱ":-587,"ｶ":306,"ｷ":568},this.UW3__={",":4889,1:-800,"−":-1723,"、":4889,"々":-2311,"〇":5827,"」":2670,"〓":-3573,"あ":-2696,"い":1006,"う":2342,"え":1983,"お":-4864,"か":-1163,"が":3271,"く":1004,"け":388,"げ":401,"こ":-3552,"ご":-3116,"さ":-1058,"し":-395,"す":584,"せ":3685,"そ":-5228,"た":842,"ち":-521,"っ":-1444,"つ":-1081,"て":6167,"で":2318,"と":1691,"ど":-899,"な":-2788,"に":2745,"の":4056,"は":4555,"ひ":-2171,"ふ":-1798,"へ":1199,"ほ":-5516,"ま":-4384,"み":-120,"め":1205,"も":2323,"や":-788,"よ":-202,"ら":727,"り":649,"る":5905,"れ":2773,"わ":-1207,"を":6620,"ん":-518,"ア":551,"グ":1319,"ス":874,"ッ":-1350,"ト":521,"ム":1109,"ル":1591,"ロ":2201,"ン":278,"・":-3794,"一":-1619,"下":-1759,"世":-2087,"両":3815,"中":653,"主":-758,"予":-1193,"二":974,"人":2742,"今":792,"他":1889,"以":-1368,"低":811,"何":4265,"作":-361,"保":-2439,"元":4858,"党":3593,"全":1574,"公":-3030,"六":755,"共":-1880,"円":5807,"再":3095,"分":457,"初":2475,"別":1129,"前":2286,"副":4437,"力":365,"動":-949,"務":-1872,"化":1327,"北":-1038,"区":4646,"千":-2309,"午":-783,"協":-1006,"口":483,"右":1233,"各":3588,"合":-241,"同":3906,"和":-837,"員":4513,"国":642,"型":1389,"場":1219,"外":-241,"妻":2016,"学":-1356,"安":-423,"実":-1008,"家":1078,"小":-513,"少":-3102,"州":1155,"市":3197,"平":-1804,"年":2416,"広":-1030,"府":1605,"度":1452,"建":-2352,"当":-3885,"得":1905,"思":-1291,"性":1822,"戸":-488,"指":-3973,"政":-2013,"教":-1479,"数":3222,"文":-1489,"新":1764,"日":2099,"旧":5792,"昨":-661,"時":-1248,"曜":-951,"最":-937,"月":4125,"期":360,"李":3094,"村":364,"東":-805,"核":5156,"森":2438,"業":484,"氏":2613,"民":-1694,"決":-1073,"法":1868,"海":-495,"無":979,"物":461,"特":-3850,"生":-273,"用":914,"町":1215,"的":7313,"直":-1835,"省":792,"県":6293,"知":-1528,"私":4231,"税":401,"立":-960,"第":1201,"米":7767,"系":3066,"約":3663,"級":1384,"統":-4229,"総":1163,"線":1255,"者":6457,"能":725,"自":-2869,"英":785,"見":1044,"調":-562,"財":-733,"費":1777,"車":1835,"軍":1375,"込":-1504,"通":-1136,"選":-681,"郎":1026,"郡":4404,"部":1200,"金":2163,"長":421,"開":-1432,"間":1302,"関":-1282,"雨":2009,"電":-1045,"非":2066,"駅":1620,"１":-800,"｣":2670,"･":-3794,"ｯ":-1350,"ｱ":551,"ｸﾞ":1319,"ｽ":874,"ﾄ":521,"ﾑ":1109,"ﾙ":1591,"ﾛ":2201,"ﾝ":278},this.UW4__={",":3930,".":3508,"―":-4841,"、":3930,"。":3508,"〇":4999,"「":1895,"」":3798,"〓":-5156,"あ":4752,"い":-3435,"う":-640,"え":-2514,"お":2405,"か":530,"が":6006,"き":-4482,"ぎ":-3821,"く":-3788,"け":-4376,"げ":-4734,"こ":2255,"ご":1979,"さ":2864,"し":-843,"じ":-2506,"す":-731,"ず":1251,"せ":181,"そ":4091,"た":5034,"だ":5408,"ち":-3654,"っ":-5882,"つ":-1659,"て":3994,"で":7410,"と":4547,"な":5433,"に":6499,"ぬ":1853,"ね":1413,"の":7396,"は":8578,"ば":1940,"ひ":4249,"び":-4134,"ふ":1345,"へ":6665,"べ":-744,"ほ":1464,"ま":1051,"み":-2082,"む":-882,"め":-5046,"も":4169,"ゃ":-2666,"や":2795,"ょ":-1544,"よ":3351,"ら":-2922,"り":-9726,"る":-14896,"れ":-2613,"ろ":-4570,"わ":-1783,"を":13150,"ん":-2352,"カ":2145,"コ":1789,"セ":1287,"ッ":-724,"ト":-403,"メ":-1635,"ラ":-881,"リ":-541,"ル":-856,"ン":-3637,"・":-4371,"ー":-11870,"一":-2069,"中":2210,"予":782,"事":-190,"井":-1768,"人":1036,"以":544,"会":950,"体":-1286,"作":530,"側":4292,"先":601,"党":-2006,"共":-1212,"内":584,"円":788,"初":1347,"前":1623,"副":3879,"力":-302,"動":-740,"務":-2715,"化":776,"区":4517,"協":1013,"参":1555,"合":-1834,"和":-681,"員":-910,"器":-851,"回":1500,"国":-619,"園":-1200,"地":866,"場":-1410,"塁":-2094,"士":-1413,"多":1067,"大":571,"子":-4802,"学":-1397,"定":-1057,"寺":-809,"小":1910,"屋":-1328,"山":-1500,"島":-2056,"川":-2667,"市":2771,"年":374,"庁":-4556,"後":456,"性":553,"感":916,"所":-1566,"支":856,"改":787,"政":2182,"教":704,"文":522,"方":-856,"日":1798,"時":1829,"最":845,"月":-9066,"木":-485,"来":-442,"校":-360,"業":-1043,"氏":5388,"民":-2716,"気":-910,"沢":-939,"済":-543,"物":-735,"率":672,"球":-1267,"生":-1286,"産":-1101,"田":-2900,"町":1826,"的":2586,"目":922,"省":-3485,"県":2997,"空":-867,"立":-2112,"第":788,"米":2937,"系":786,"約":2171,"経":1146,"統":-1169,"総":940,"線":-994,"署":749,"者":2145,"能":-730,"般":-852,"行":-792,"規":792,"警":-1184,"議":-244,"谷":-1e3,"賞":730,"車":-1481,"軍":1158,"輪":-1433,"込":-3370,"近":929,"道":-1291,"選":2596,"郎":-4866,"都":1192,"野":-1100,"銀":-2213,"長":357,"間":-2344,"院":-2297,"際":-2604,"電":-878,"領":-1659,"題":-792,"館":-1984,"首":1749,"高":2120,"｢":1895,"｣":3798,"･":-4371,"ｯ":-724,"ｰ":-11870,"ｶ":2145,"ｺ":1789,"ｾ":1287,"ﾄ":-403,"ﾒ":-1635,"ﾗ":-881,"ﾘ":-541,"ﾙ":-856,"ﾝ":-3637},this.UW5__={",":465,".":-299,1:-514,E2:-32768,"]":-2762,"、":465,"。":-299,"「":363,"あ":1655,"い":331,"う":-503,"え":1199,"お":527,"か":647,"が":-421,"き":1624,"ぎ":1971,"く":312,"げ":-983,"さ":-1537,"し":-1371,"す":-852,"だ":-1186,"ち":1093,"っ":52,"つ":921,"て":-18,"で":-850,"と":-127,"ど":1682,"な":-787,"に":-1224,"の":-635,"は":-578,"べ":1001,"み":502,"め":865,"ゃ":3350,"ょ":854,"り":-208,"る":429,"れ":504,"わ":419,"を":-1264,"ん":327,"イ":241,"ル":451,"ン":-343,"中":-871,"京":722,"会":-1153,"党":-654,"務":3519,"区":-901,"告":848,"員":2104,"大":-1296,"学":-548,"定":1785,"嵐":-1304,"市":-2991,"席":921,"年":1763,"思":872,"所":-814,"挙":1618,"新":-1682,"日":218,"月":-4353,"査":932,"格":1356,"機":-1508,"氏":-1347,"田":240,"町":-3912,"的":-3149,"相":1319,"省":-1052,"県":-4003,"研":-997,"社":-278,"空":-813,"統":1955,"者":-2233,"表":663,"語":-1073,"議":1219,"選":-1018,"郎":-368,"長":786,"間":1191,"題":2368,"館":-689,"１":-514,"Ｅ２":-32768,"｢":363,"ｲ":241,"ﾙ":451,"ﾝ":-343},this.UW6__={",":227,".":808,1:-270,E1:306,"、":227,"。":808,"あ":-307,"う":189,"か":241,"が":-73,"く":-121,"こ":-200,"じ":1782,"す":383,"た":-428,"っ":573,"て":-1014,"で":101,"と":-105,"な":-253,"に":-149,"の":-417,"は":-236,"も":-206,"り":187,"る":-135,"を":195,"ル":-673,"ン":-496,"一":-277,"中":201,"件":-800,"会":624,"前":302,"区":1792,"員":-1212,"委":798,"学":-960,"市":887,"広":-695,"後":535,"業":-697,"相":753,"社":-507,"福":974,"空":-822,"者":1811,"連":463,"郎":1082,"１":-270,"Ｅ１":306,"ﾙ":-673,"ﾝ":-496},this}TinySegmenter.prototype.ctype_=function(t){for(var e in this.chartype_)if(t.match(this.chartype_[e][0]))return this.chartype_[e][1];return"O"},TinySegmenter.prototype.ts_=function(t){return t||0},TinySegmenter.prototype.segment=function(t){if(null==t||null==t||""==t)return[];var e=[],i=["B3","B2","B1"],n=["O","O","O"],s=t.split("");for(H=0;H<s.length;++H)i.push(s[H]),n.push(this.ctype_(s[H]));i.push("E1"),i.push("E2"),i.push("E3"),n.push("O"),n.push("O"),n.push("O");for(var o=i[3],r="U",a="U",_="U",H=4;H<i.length-3;++H){var h=this.BIAS__,l=i[H-3],c=i[H-2],I=i[H-1],d=i[H],u=i[H+1],p=i[H+2],O=n[H-3],B=n[H-2],f=n[H-1],K=n[H],m=n[H+1],y=n[H+2];h+=this.ts_(this.UP1__[r]),h+=this.ts_(this.UP2__[a]),h+=this.ts_(this.UP3__[_]),h+=this.ts_(this.BP1__[r+a]),h+=this.ts_(this.BP2__[a+_]),h+=this.ts_(this.UW1__[l]),h+=this.ts_(this.UW2__[c]),h+=this.ts_(this.UW3__[I]),h+=this.ts_(this.UW4__[d]),h+=this.ts_(this.UW5__[u]),h+=this.ts_(this.UW6__[p]),h+=this.ts_(this.BW1__[c+I]),h+=this.ts_(this.BW2__[I+d]),h+=this.ts_(this.BW3__[d+u]),h+=this.ts_(this.TW1__[l+c+I]),h+=this.ts_(this.TW2__[c+I+d]),h+=this.ts_(this.TW3__[I+d+u]),h+=this.ts_(this.TW4__[d+u+p]),h+=this.ts_(this.UC1__[O]),h+=this.ts_(this.UC2__[B]),h+=this.ts_(this.UC3__[f]),h+=this.ts_(this.UC4__[K]),h+=this.ts_(this.UC5__[m]),h+=this.ts_(this.UC6__[y]),h+=this.ts_(this.BC1__[B+f]),h+=this.ts_(this.BC2__[f+K]),h+=this.ts_(this.BC3__[K+m]),h+=this.ts_(this.TC1__[O+B+f]),h+=this.ts_(this.TC2__[B+f+K]),h+=this.ts_(this.TC3__[f+K+m]),h+=this.ts_(this.TC4__[K+m+y]),h+=this.ts_(this.UQ1__[r+O]),h+=this.ts_(this.UQ2__[a+B]),h+=this.ts_(this.UQ3__[_+f]),h+=this.ts_(this.BQ1__[a+B+f]),h+=this.ts_(this.BQ2__[a+f+K]),h+=this.ts_(this.BQ3__[_+B+f]),h+=this.ts_(this.BQ4__[_+f+K]),h+=this.ts_(this.TQ1__[a+O+B+f]),h+=this.ts_(this.TQ2__[a+B+f+K]),h+=this.ts_(this.TQ3__[_+O+B+f]);var g="O";(h+=this.ts_(this.TQ4__[_+B+f+K]))>0&&(e.push(o),o="",g="B"),r=a,a=_,_=g,o+=i[H]}return e.push(o),e};var definitions={},body=document.getElementById(kanjiHover),kanji=new Set,kanjiDict={},tokens=TokenizeInput();function TokenizeInput(){var t=document.getElementsByClassName(inputField);if(null==t)return[];var e="";for(let i=0;i<t.length;++i)e+=t[i].innerText;e=StripASCII(e);var i=(new TinySegmenter).segment(e);return i=(i=[...new Set(i)]).filter(t=>!ignore.includes(t))}function StripASCII(t){return"string"==typeof t&&t.split("").filter(t=>t.charCodeAt(0)>127).join("")}function GetDefinitions(t){if(Persistence.isAvailable()){let e=Persistence.getItem();e||LoadDictionary(dictionary,function(e){Persistence.setItem(e),UpdateHTML(e,t)}),UpdateHTML(e,t)}else LoadDictionary(dictionary,function(e){UpdateHTML(e,t)})}function UpdateHTML(t,e){if(!t)return null;for(word of e)definitions[word]=t[word];BuildHoverHtml(),InjectWordData(),KanjiHover()}function LoadDictionary(t,e){var i=new XMLHttpRequest;i.overrideMimeType("application/json"),i.open("GET",t,!0),i.onreadystatechange=function(){4==i.readyState&&"200"==i.status&&e(JSON.parse(i.responseText))},i.send(null)}function BuildHoverHtml(){for(key in definitions){if(null==definitions[key])continue;let t='<span class="JAword" onclick="WordClicked(event)">'+key+"</span>";definitions[key].html=t}}function InjectWordData(){var t=document.getElementsByClassName(inputField);if(null!=t)for(let i=0;i<t.length;++i){let n=t[i].innerText;var e=new RegExp(Object.keys(definitions).join("|"),"gi");n=n.replace(e,function(t){return definitions[t]?definitions[t].html:t}),document.getElementsByClassName(inputField)[i].innerHTML=n}}function WordClicked(t){if(0!=t.button)return;let e=t.target;"kanjiTooltip"==e.className&&(e=e.parentElement);let i=e.innerText;definitions[e.innerText].Reading&&(i+=" ( "+definitions[e.innerText].Reading+" )"),i+='<br><a href="https://en.wiktionary.org/wiki/'+e.innerText+'#Japanese">Wikitionary</a>',i+=' | <a href="https://dictionary.goo.ne.jp/srch/all/'+e.innerText+'/m0u/">goo</a>',i+="<br>"+definitions[e.innerText].Definition,document.getElementById(outputField).innerHTML=i}function KanjiHover(){body&&(body=body.innerHTML),IsOnline()&&body&&(AppendPopupDiv(),FindKanji(),GetKanjiData().then(t=>{InjectKanjiHTML()}))}function IsOnline(){return navigator.onLine}function AppendPopupDiv(){var t=document.createElement("div");t.id="kanjiPopup",document.body.appendChild(t)}function FindKanji(){const t=body.matchAll(/[\u4E00-\u9FAF]/g);for(const e of t)kanji.add(...e)}async function GetKanjiData(){kanji=[...kanji];let t=await Promise.all(kanji.map(async t=>{return(await fetch("https://kanjiapi.dev/v1/kanji/"+t)).json()}));for(item of t)kanjiDict[item.kanji]=item}function BuildKanjiHtml(t){let e='<a class="kanjiTooltip" onclick="KanjiClicked(event)" onmouseenter="DisplayKanjiPopup(event)" onmouseleave="HideKanjiPopup()" href="https://en.wiktionary.org/wiki/'+t+'#Japanese">'+t+"</a>",i='<span class="kanjiTooltipText">';i+='<span class="hoverText">Kanji:</span> '+t+"<br>",kanjiDict[t].grade&&(i+='<span class="hoverText">Grade:</span> '+kanjiDict[t].grade+"<br>"),i+='<span class="hoverText">Meaning:</span> ';for(let e of kanjiDict[t].meanings)i+=e+", ";if(i=i.slice(0,-2),i+="<br>",kanjiDict[t].kun_readings.length>0){i+='<span class="hoverText">Kun\'yomi:</span> ';for(let e of kanjiDict[t].kun_readings)i+=e+", ";i=i.slice(0,-2),i+="<br>"}if(kanjiDict[t].on_readings.length>0){i+='<span class="hoverText">On\'yomi:</span> ';for(let e of kanjiDict[t].on_readings)i+=e+", ";i=i.slice(0,-2),i+="<br>"}return i+="</span>",kanjiDict[t].html=i,e}function KanjiClicked(t){0==t.button&&t.preventDefault()}function InjectKanjiHTML(){var t=document.getElementById(kanjiHover).innerHTML,e=new RegExp(Object.keys(kanjiDict).join("|"),"gi");t=t.replace(e,function(t){return kanjiDict[t]?BuildKanjiHtml(t):t}),document.getElementById(kanjiHover).innerHTML=t}function DisplayKanjiPopup(t){let e=document.getElementById("kanjiPopup");e.style.display="inline-block",e.innerHTML=kanjiDict[t.target.innerText].html}function HideKanjiPopup(){document.getElementById("kanjiPopup").style.display="none"}function AppendCSS(){var t=document.createElement("style");t.innerHTML="   .JAword{background-color:#9370db;color:#fff;cursor:pointer;margin:0 5px}#kanjiPopup{display:none;width:30vw;background-color:#1e1a1e;color:#fff;text-align:center;padding:5px 0;border-radius:6px;z-index:1;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px;writing-mode:horizontal-tb}.kanjiTooltip{text-decoration:none;color:inherit}.hoverText{color:#e95464}@media only screen and (max-width:768px){#kanjiPopup{width:90vw}}",document.head.appendChild(t)}AppendCSS(),tokens.length>0&&!document.documentElement.classList.contains("android")?GetDefinitions(tokens):KanjiHover();</script>
```



**Step 2**

On the **back** of your card, wrap your sentence field in a div/span with the following id/class

```
<div id="kanjiHover" class="JAGlossInput">{{sentence}}</div>
```

**Note:** the kanjiHover id is optional if you don't want that functionality. Technically the JAGloss class is *also* optional, in which case the script wouldn't do anything.

**Note 2:** since JAGlossInput is a class (instead of an id), it can be used in multiple places at once. Essentially, you can have any number of divs with that class, and all of them will be parsed by the script.



**Step 3**

On the **back** of your card, add a div/span with the following id

```
<div id="JAGlossOutput"></div>
```

**Note:** this is where the definitions will go when you click on a word. You can edit your card css to change the look of this however you'd like.



**Step 4**

[Download](https://github.com/cademcniven/JAGloss/blob/main/_JADict.json) the `_JADict.json` file from Github. Place this file in your collection.media folder.

**Note:** At this point things should be functional, so it'd be a good idea to test that now. It should look something like this



![](images\jagloss\technicallyWorking.png)



**Step 5 (optional)**

You may notice in the picture above (and in your own Anki client) that certain characters have a blue font color which looks pretty horrendous. This is actually an issue caused by Kanji Hover and can be fixed by adding the following css to your card style

```
a {
  color: inherit !important;
}
```

That line will make all links look the same as regular text. The reason I don't include that automatically is because it seems to me like it would be over-reaching for me to change the appearance of *all* links on your card.

If someone has a better solution to this that I can include in the script, let me know.



**Step 6 (optional)**

On the **front** of your card, you can add the following script

```
<script>if(!document.documentElement.classList.contains("android")){if(void 0===window.Persistence){var _persistenceKey="github.com/SimonLammer/anki-persistence/",_defaultKey="_default";if(window.Persistence_sessionStorage=function(){var e=!1;try{"object"==typeof window.sessionStorage&&(e=!0,this.clear=function(){for(var e=0;e<sessionStorage.length;e++){var t=sessionStorage.key(e);0==t.indexOf(_persistenceKey)&&(sessionStorage.removeItem(t),e--)}},this.setItem=function(e,t){null==t&&(t=e,e=_defaultKey),sessionStorage.setItem(_persistenceKey+e,JSON.stringify(t))},this.getItem=function(e){return null==e&&(e=_defaultKey),JSON.parse(sessionStorage.getItem(_persistenceKey+e))},this.removeItem=function(e){null==e&&(e=_defaultKey),sessionStorage.removeItem(_persistenceKey+e)})}catch(e){}this.isAvailable=function(){return e}},window.Persistence_windowKey=function(e){var t=window[e],n=!1;"object"==typeof t&&(n=!0,this.clear=function(){t[_persistenceKey]={}},this.setItem=function(e,n){null==n&&(n=e,e=_defaultKey),t[_persistenceKey][e]=n},this.getItem=function(e){return null==e&&(e=_defaultKey),t[_persistenceKey][e]||null},this.removeItem=function(e){null==e&&(e=_defaultKey),delete t[_persistenceKey][e]},null==t[_persistenceKey]&&this.clear()),this.isAvailable=function(){return n}},window.Persistence=new Persistence_sessionStorage,Persistence.isAvailable()||(window.Persistence=new Persistence_windowKey("py")),!Persistence.isAvailable()){var titleStartIndex=window.location.toString().indexOf("title"),titleContentIndex=window.location.toString().indexOf("main",titleStartIndex);titleStartIndex>0&&titleContentIndex>0&&titleContentIndex-titleStartIndex<10&&(window.Persistence=new Persistence_windowKey("qt"))}}var dictionary={};function LoadDictionary(e,t){var n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&"200"==n.status&&t(JSON.parse(n.responseText))},n.send(null)}Persistence.isAvailable()&&null==(dictionary=Persistence.getItem())&&LoadDictionary("_JADict.json",function(e){Persistence.setItem(e)});}</script>
```



The purpose of that script is that it will pre-load the dictionary while you're on the front side of the card so that things won't have to load once you flip to the back.

However, it's not *that* useful, for 2 reasons

1. After it loads the dictionary, it persistently stores it. What that means is that it will never need to open it a second time.
2. That load-then-store mechanism is *also* present on the script on the back side of the card.

So, effectively, adding this script to the front will **only** make the very first card you see load faster. All of the cards after that will load fast regardless of whether you include this script or not. 

I use it on my cards, but if you're concerned about card file size, or just think it looks ugly, you can leave it off.



## Customizing Things

The script at the top of the page if minified in order to reduce file size, but you can find the original file on [Github](https://github.com/cademcniven/JAGloss/blob/main/JAGloss.js). I tried to keep things clean enough and include a couple comments in case there are things you feel like changing.

In particular, the top of the file includes a few constants that you can change to fit your own note style

```
const ignore
```

This variable includes "words" to ignore (not make clickable). For the most part, the default is to do this for particles, numbers, and punctuation. However, you can add/remove things from this array depending on your own preference.

```
const inputField
```

In step 2 you added a div/span with the class `JAGlossInput`. If you would rather that class be named something else, you can change that here.

```
const outputField
```

Similarly, if you want the output div/span to be named something other than `JAGlossOutput` you can rename that here.

```
const kanjiHover
```

In step 2 the div/span you added had the id `kanjiHover`. If you would rather that id be something else, you can change that here.

```
const dictionary
```

This is the filename for the dictionary.

If you end up editing things and then want to add the script back to your card, you can use https://javascript-minifier.com/ to minify the code.

Additionally, pretty much everything the script adds to your card can be added by styling the appropriate thing in your card styles.

```
.JAword
```

This is the word that you click on to display the definition. I imagine this is probably the thing you were looking for in this list, because you hate that the highlight color is purple.

```
.kanjiTooltip
```

If you're using the Kanji Hover functionality, every single kanji will be wrapped in an `a` tag with this class.

```
.kanjiTooltipText
```

If you're using the Kanji Hover functionality, this is the class for the stuff in the popup.

```
.hoverText
```

If you're using the Kanji Hover functionality, this is the red words in the popup.

## About The Dictionary

The dictionary used is a modified version of [JMDict](https://www.edrdg.org/edrdg/licence.html). 

The dictionary uses a custom format, but the format is extremely simple, so it wouldn't be difficult for you to create your own compatible dictionary.

The dictionary is a json file where the headword is the Japanese word itself. It has a "Reading" field and a "Definition" field. If the dictionary you're converting doesn't have a reading field, you can just leave that null and things will work fine.



## Compatibility & Issues

**This script will not recognize a lot of words**

Finding all of the words in a Japanese sentence is surprisingly difficult for a machine to do, and it's even more difficult to do in 100 lines of javascript. This script uses [TinySegmenter](http://chasen.org/~taku/software/TinySegmenter/) to find words. It is nowhere close to perfect, but it's good enough to be useful.

**This script will likely break if you use it with scripts/addons that mess with the html of your card**

This *may* include things like `kanjax with koohii`, `Migaku Japanese`, `Migaku Editor`, and `kanjiHover` (yes I understand the irony).

If you're using multiple scripts and something isn't working, try changing the order of the scripts on your card. This often completely changes the behavior. 

**This script won't work on the web client**

But since most things won't, you probably expected that.

**This script won't work on mobile (probably)**

I haven't tested on IOS, but for some reason the dictionary won't load on AnkiDroid. The Kanji Hover functionality will still work though. If anyone has a fix for making it work on mobile, please let me know.

**This script is untested on Mac/Linux**

So good luck.

**This script only includes Kanji Hover on the *back* of the card**

So you'll still need to include it on the front if you want it there.



## Sources

* Huge thanks to CalculusAce for converting the dictionary and fixing any dictionary related errors that appeared
* [JMDict](https://www.edrdg.org/edrdg/licence.html)
* [anki-persistence](https://github.com/SimonLammer/anki-persistence)
* [TinySegmenter](http://chasen.org/~taku/software/TinySegmenter/)
* https://kanjiapi.dev/