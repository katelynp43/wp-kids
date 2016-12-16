function parseUri(e) {
    for (var t = parseUri.options, e = t.parser[t.strictMode ? "strict" : "loose"].exec(e), n = {}, r = 14; r--;) n[t.key[r]] = e[r] || "";
    return n[t.q.name] = {}, n[t.key[12]].replace(t.q.parser, function(e, r, i) {
        r && (n[t.q.name][r] = i)
    }), n
}

function getSubDomain() {
    var e = window.location.host,
        t = e.split(".");
    return t[0]
}

function getURLChannel() {
    var e = window.location.href,
        t = e.split("/");
    return t[3]
}

function s_postPlugins(e) {
    getURLChannel() == "blog" && (e.channel = "blogs", e.eVar2 = e.channel, e.prop1 = "inside digital", e.eVar3 = e.prop1, tmp = document.title.toLowerCase(), e.prop11 = tmp, e.eVar7 = e.prop11, e.pageName = e.channel + " : " + e.prop1 + " : " + tmp, e.eVar18 = e.eVar2), e.channel == "lpHotels" && (e.eVar3 = e.prop1, e.prop7 || (e.prop7 = e.prop1), e.eVar12 || (e.eVar12 = e.prop1)), e.channel && e.channel.toLowerCase() == "thorntree" && (e.prop7 || (e.prop7 = e.prop1), e.eVar12 || (e.eVar12 = e.prop1));
    if (e.prop26 == "Flash Carousel" || e.prop26 == "Flash Destination Map") e.referrer = "http://www.lonelyplanet.com/";
    if (e.prop26 == "Flash Carousel") {
        var t = e.prop27;
        e.prop27 = t.replace(/\s+$/, ""), e.prop27 = e.prop26 + " : " + e.prop27, e.eVar32 = e.prop27
    }
    e.pageName == "search : results : guided results" ? (e.eVar10 = "", e.prop5 = "", e.eVar11 = "", e.prop6 = "", e.eVar19 = "", e.prop14 = "") : e.pageName == "groups : groups created" && (e.events == null || e.events == "" ? e.events = "event35" : e.events = e.events + ",event35"), e.pageName == "groups : groups message created" && (e.events == null || e.events == "" ? e.events = "event36" : e.events = e.events + ",event36"), e.pageName == "groups : groups photo created" && (e.events == null || e.events == "" ? e.events = "event37" : e.events = e.events + ",event37"), e.eVar18 = e.eVar2, varPrevSection = e.getPreviousValue(e.eVar2, "gpv_v2"), typeof varPrevSection != "undefined" && e.eVar2 != varPrevSection && (varPrevSection == "" ? e.eVar34 = "Entered Site : " + e.eVar2 : e.eVar34 = varPrevSection + " : " + e.eVar2), varPathName = document.location.pathname, e.prop41 = varPathName.toLowerCase();
    if (e.channel == "dest" || e.channel == "thorntree" || e.channel == "lphotels") e.prop8 != "video" && e.prop8 != "photo" && s_objectID == undefined && (e.prop7 != null && (e.prop8 == null ? e.pageName = e.pageName + " : " + e.prop7 : e.prop9 == null ? e.pageName = e.pageName + " : " + e.prop8 : e.prop9.length > 0 && (e.pageName = e.pageName + " : " + e.prop9)), e.prop7 == "homepage" && (e.prop1 != null && (e.prop2 == null ? e.prop7 = "continent " + e.prop7 : e.prop3 == null ? e.prop7 = "country " + e.prop7 : e.prop3.length > 0 && (e.prop7 = "region " + e.prop7)), e.eVar12 = e.prop7), e.pageName == "dest : homepage" && (e.prop7 = "dest homepage", e.eVar12 = e.prop7), e.prop8 == "Tips and Articles Detail" && (e.pageName = e.channel + " : " + e.prop8 + " : " + e.prop11)), e.events == null || e.events == "" || e.events == "event4" ? e.events = "event4" : e.events = e.events + ",event4"
}

function s_doPlugins(e) {
    e.prop70 = e.eVar70 = e.getlinkstack(), e.eVar4 && (e.eVar4 = e.eVar4.replace("hh", "")), e.getQueryParam("lpaffil") != "undefined" && (e.eVar1 = e.getQueryParam("lpaffil")), e.getQueryParam("et_cid") != "undefined" && (e.eVar57 = e.getQueryParam("et_cid")), e.campaign = e.getQueryParam("affil"), e.eVar10 = e.getQueryParam("intaffil"), e.eVar20 = e.getQueryParam("et_rid"), window.s_postPlugins && s_postPlugins(e), e.SEMvar = e.getQueryParam("s_kwcid"), e.SEMvar = e.getValOnce(e.SEMvar, "SEM_var", 0), e.clickThruQuality("s_kwcid", "event59", "event60"), e.pageURL = e.manageQueryParam("s_kwcid", 1, 1);
    try {
        if (typeof _vis_opt_settings_loaded == "boolean") {
            var t = _vis_opt_readCookie("_vis_opt_exp_" + _vis_opt_experiment_id + "_combi");
            typeof _vis_opt_comb_name[t] != "undefined" && (e.eVar11 = _vis_opt_experiment_id + ":" + _vis_opt_comb_name[t] + ":" + e.eVar4 + ":" + e.eVar5)
        }
    } catch (n) {}
    adv.doCampaignManagement(ck_exp)
}

function s_gi(e, t, n) {
    var r = "s.version='H.26';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
        i = window,
        s = i.s_c_il,
        o = navigator,
        u = o.userAgent,
        a = o.appVersion,
        f = a.indexOf("MSIE "),
        l = u.indexOf("Netscape6/"),
        c, h, p, d, v;
    if (e) {
        e = e.toLowerCase();
        if (s)
            for (p = 0; p < 2; p++)
                for (h = 0; h < s.length; h++) {
                    v = s[h], d = v._c;
                    if ((!d || d == "s_c" || p > 0 && d == "s_l") && (v.oun == e || v.fs && v.sa && v.fs(v.oun, e))) {
                        v.sa && v.sa(e);
                        if (d == "s_c") return v
                    } else v = 0
                }
    }
    i.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a"), i.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x"), i.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)"), i.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x"), i.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")"), i.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a"), i.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;"), r = s_d(r), f > 0 ? (c = parseInt(h = a.substring(f + 5)), c > 3 && (c = parseFloat(h))) : l > 0 ? c = parseFloat(u.substring(l + 10)) : c = parseFloat(a);
    if (c < 5 || a.indexOf("Opera") >= 0 || u.indexOf("Opera") >= 0) r = s_ft(r);
    return v || (v = new Object, i.s_c_in || (i.s_c_il = new Array, i.s_c_in = 0), v._il = i.s_c_il, v._in = i.s_c_in, v._il[v._in] = v, i.s_c_in++), v._c = "s_c", (new Function("s", "un", "pg", "ss", r))(v, e, t, n), v
}

function s_giqf() {
    var e = window,
        t = e.s_giq,
        n, r, i;
    if (t)
        for (n = 0; n < t.length; n++) r = t[n], i = s_gi(r.oun), i.sa(r.un), i.setTagContainer(r.tagContainerName);
    e.s_giq = 0
}

function Empty() {}(function(e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})(typeof window != "undefined" ? window : this, function(e, t) {
    function y(e) {
        var t = e.length,
            n = p.type(e);
        return n === "function" || p.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }

    function x(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (S.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }

    function O(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function D(e) {
        var t = _[e] = {};
        return p.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
    }

    function B() {
        if (N.addEventListener || event.type === "load" || N.readyState === "complete") H(), p.ready()
    }

    function R(e, t, n) {
        if (n === undefined && e.nodeType === 1) {
            var r = "data-" + t.replace(q, "-$1").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                } catch (i) {}
                p.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function U(e) {
        var t;
        for (t in e) {
            if (t === "data" && p.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function z(e, t, r, i) {
        if (!p.acceptData(e)) return;
        var s, o, u = p.expando,
            a = e.nodeType,
            f = a ? p.cache : e,
            l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
        l || (a ? l = e[u] = n.pop() || p.guid++ : l = u), f[l] || (f[l] = a ? {} : {
            toJSON: p.noop
        });
        if (typeof t == "object" || typeof t == "function") i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== undefined && (o[p.camelCase(t)] = r), typeof t == "string" ? (s = o[t], s == null && (s = o[p.camelCase(t)])) : s = o, s
    }

    function W(e, t, n) {
        if (!p.acceptData(e)) return;
        var r, i, s = e.nodeType,
            o = s ? p.cache : e,
            u = s ? e[p.expando] : p.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !U(r) : !p.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!U(o[u])) return
        }
        s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function tt() {
        return !0
    }

    function nt() {
        return !1
    }

    function rt() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function it(e) {
        var t = st.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Et(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : undefined;
        if (!s)
            for (s = [], n = e.childNodes || e;
                (r = n[i]) != null; i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
        return t === undefined || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }

    function St(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }

    function xt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Tt(e) {
        return e.type = (p.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Nt(e) {
        var t = mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ct(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }

    function kt(e, t) {
        if (t.nodeType !== 1 || !p.hasData(e)) return;
        var n, r, i, s = p._data(e),
            o = p._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) p.event.add(t, n, u[n][r])
        }
        o.data && (o.data = p.extend({}, o.data))
    }

    function Lt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!c.noCloneEvent && t[p.expando]) {
            i = p._data(t);
            for (r in i.events) p.removeEvent(t, r, i.handle);
            t.removeAttribute(p.expando)
        }
        if (n === "script" && t.text !== e.text) Tt(t).text = e.text, Nt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && K.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function Mt(t, n) {
        var r = p(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
        return r.detach(), i
    }

    function _t(e) {
        var t = N,
            n = Ot[e];
        if (!n) {
            n = Mt(e, t);
            if (n === "none" || !n) At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach();
            Ot[e] = n
        }
        return n
    }

    function Ft(e, t) {
        return {
            get: function() {
                var n = e();
                if (n == null) return;
                if (n) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function $t(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Vt.length;
        while (i--) {
            t = Vt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Jt(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && n !== "none" || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function Kt(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Qt(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += p.css(e, n + V[s], !0, i)), r ? (n === "content" && (o -= p.css(e, "padding" + V[s], !0, i)), n !== "margin" && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e, "padding" + V[s], !0, i), n !== "padding" && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
        return o
    }

    function Gt(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = Ht(e),
            o = c.boxSizing() && p.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Bt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Pt.test(i)) return i;
            r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }

    function un() {
        return setTimeout(function() {
            Zt = undefined
        }), Zt = p.now()
    }

    function an(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = V[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function fn(e, t, n) {
        var r, i = (on[t] || []).concat(on["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function ln(e, t, n) {
        var r, i, s, o, u, a, f, l, h = this,
            d = {},
            v = e.style,
            m = e.nodeType && $(e),
            g = p._data(e, "fxshow");
        n.queue || (u = p._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = _t(e.nodeName), f === "none" && (f = l), f === "inline" && p.css(e, "float") === "none" && (!c.inlineBlockNeedsLayout || l === "inline" ? v.display = "inline-block" : v.zoom = 1)), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
            v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if (tn.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (m ? "hide" : "show")) {
                    if (i !== "show" || !g || g[r] === undefined) continue;
                    m = !0
                }
                d[r] = g && g[r] || p.style(e, r)
            }
        }
        if (!p.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(function() {
                p(e).hide()
            }), h.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in d) p.style(e, t, d[t])
            });
            for (r in d) o = fn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function cn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function hn(e, t, n) {
        var r, i, s = 0,
            o = sn.length,
            u = p.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                var t = Zt || un(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || un(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        cn(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = sn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function In(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(M) || [];
            if (p.isFunction(n))
                while (r = s[i++]) r.charAt(0) === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, p.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Rn(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e
    }

    function Un(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while (a[0] === "*") a.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        if (s) return s !== a[0] && a.unshift(s), n[s]
    }

    function zn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*") s = a;
                else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)
                    for (i in f) {
                        u = i.split(" ");
                        if (u[1] === s) {
                            o = f[a + " " + u[0]] || f["* " + u[0]];
                            if (o) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                        }
                    }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Kn(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t, function(t, i) {
            n || Xn.test(e) ? r(e, i) : Kn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && p.type(t) === "object")
            for (i in t) Kn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function er() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function sr(e) {
        return p.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {},
        a = u.toString,
        f = u.hasOwnProperty,
        l = "".trim,
        c = {},
        h = "1.11.0",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !p.isFunction(o) && (o = {}), u === a && (o = this, u--);
        for (; u < a; u++)
            if ((i = arguments[u]) != null)
                for (r in i) {
                    e = o[r], n = i[r];
                    if (o === n) continue;
                    f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : n !== undefined && (o[r] = n)
                }
            return o
    }, p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return p.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return p.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || p.type(e) !== "object" || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (c.ownLast)
                for (t in e) return f.call(e, t);
            for (t in e);
            return t === undefined || f.call(e, t)
        },
        type: function(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = y(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: l && !l.call("﻿ ") ? function(e) {
            return e == null ? "" : l.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return e != null && (y(Object(e)) ? p.merge(n, typeof e == "string" ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o) return o.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (r < n) e[i++] = t[r++];
            if (n !== n)
                while (t[r] !== undefined) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length,
                u = !n;
            for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, s = 0,
                o = e.length,
                u = y(e),
                a = [];
            if (u)
                for (; s < o; s++) r = t(e[s], s, n), r != null && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), r != null && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            return typeof t == "string" && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : undefined
        },
        now: function() {
            return +(new Date)
        },
        support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function rt(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            (t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [];
            if (!e || typeof e != "string") return r;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode) return r;
                            if (o.id === u) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r
                    } else {
                        if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    m = v = y, w = t, E = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length;
                        while (f--) h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t, E = h.join(",")
                    }
                    if (E) try {
                        return _.apply(r, w.querySelectorAll(E)), r
                    } catch (S) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }

        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function st(e) {
            return e[y] = !0, e
        }

        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ut(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function at(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }

        function pt() {}

        function dt(e, t) {
            var n, i, s, o, u, a, f, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                if (!n || (i = U.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
                n = !1;
                if (i = z.exec(u)) n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length);
                for (o in r.filter)(i = $[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }

        function vt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function mt(e, t, n) {
            var r = t.dir,
                i = n && r === "parentNode",
                s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (t.nodeType === 1 || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [w, s];
                if (o) {
                    while (t = t[r])
                        if (t.nodeType === 1 || i)
                            if (e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || i) {
                            a = t[y] || (t[y] = {});
                            if ((u = a[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
                            a[r] = f;
                            if (f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function yt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? yt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = yt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function wt(e) {
            var t, n, i, s = e.length,
                o = r.relative[e[0].type],
                a = o || r.relative[" "],
                f = o ? 1 : 0,
                l = mt(function(e) {
                    return e === t
                }, a, !0),
                c = mt(function(e) {
                    return P.call(t, e) > -1
                }, a, !0),
                h = [function(e, n, r) {
                    return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }];
            for (; f < s; f++)
                if (n = r.relative[e[f].type]) h = [mt(gt(h), n)];
                else {
                    n = r.filter[e[f].type].apply(null, e[f].matches);
                    if (n[y]) {
                        i = ++f;
                        for (; i < s; i++)
                            if (r.relative[e[i].type]) break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: e[f - 2].type === " " ? "*" : ""
                        })).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt(e = e.slice(i)), i < s && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }

        function Et(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, a, f, l) {
                    var h, p, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = u,
                        E = s || i && r.find.TAG("*", l),
                        S = w += b == null ? 1 : Math.random() || .1,
                        x = E.length;
                    l && (u = o !== c && o);
                    for (; m !== x && (h = E[m]) != null; m++) {
                        if (i && h) {
                            p = 0;
                            while (d = e[p++])
                                if (d(h, o, a)) {
                                    f.push(h);
                                    break
                                }
                            l && (w = S)
                        }
                        n && ((h = !d && h) && v--, s && g.push(h))
                    }
                    v += m;
                    if (n && m !== v) {
                        p = 0;
                        while (d = t[p++]) d(g, y, o, a);
                        if (s) {
                            if (v > 0)
                                while (m--) !g[m] && !y[m] && (y[m] = O.call(f));
                            y = yt(y)
                        }
                        _.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                    }
                    return l && (w = S, u = b), g
                };
            return n ? st(s) : s
        }

        function St(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) rt(e, t[r], n);
            return n
        }

        function xt(e, t, i, s) {
            var u, a, f, l, c, h = dt(e);
            if (!s && h.length === 1) {
                a = h[0] = h[0].slice(0);
                if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
                    t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0];
                    if (!t) return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    f = a[u];
                    if (r.relative[l = f.type]) break;
                    if (c = r.find[l])
                        if (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t)) {
                            a.splice(u, 1), e = s.length && vt(a);
                            if (!e) return _.apply(i, s), i;
                            break
                        }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = it(),
            x = it(),
            T = it(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            },
            C = typeof undefined,
            k = 1 << 31,
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = A.indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = j.replace("w", "w#"),
            I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
            q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes), A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {}, s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, l = rt.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : b,
                o = i.defaultView;
            if (i === c || i.nodeType !== 9 || !i.documentElement) return c;
            c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })), n.attributes = ot(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), n.getById = ot(function(e) {
                return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== C) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== C && p) return t.getElementsByClassName(e)
            }, v = [], d = [];
            if (n.qsa = Q.test(i.querySelectorAll)) ot(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            });
            return (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : r & 4 ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    l = [t];
                if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o) return at(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) l.unshift(n);
                while (u[r] === l[r]) r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }, i
        }, rt.matches = function(e, t) {
            return rt(e, null, null, t)
        }, rt.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']");
            if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
            } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        }, rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
            return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, rt.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N);
            if (f) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return a = null, e
        }, i = rt.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (!s)
                while (t = e[r++]) n += i(t);
            else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (s === 3 || s === 4) return e.nodeValue;
            return n
        }, r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && rt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return e === "*" ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && b) {
                                l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        b && ((c[y] || (c[y] = {}))[e] = [w, h]);
                                        if (c === t) break
                                    } return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = P.call(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [],
                        n = [],
                        r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ct(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ft(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)), n = t.length;
                while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !!f, l(), n.sortDetached = ot(function(e) {
            return e.compareDocumentPosition(c.createElement("div")) & 1
        }), ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || ut("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!n.attributes || !ot(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && ut("value", function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ot(function(e) {
            return e.getAttribute("disabled") == null
        }) || ut(H, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), rt
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = p.expr.match.needsContext,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^.[^:#\[\.,]*$/;
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return e.nodeType === 1
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if (typeof e != "string") return this.pushStack(p(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (p.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, typeof e == "string" && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, N = e.document,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = p.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? n = [null, e, null] : n = C.exec(e);
                if (n && (n[1] || !t)) {
                    if (n[1]) {
                        t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0));
                        if (E.test(n[1]) && p.isPlainObject(t))
                            for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    r = N.getElementById(n[2]);
                    if (r && r.parentNode) {
                        if (r.id !== n[2]) return T.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = N, this.selector = e, this
                }
                return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? typeof T.ready != "undefined" ? T.ready(e) : e(p) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        };
    k.prototype = p.fn, T = p(N);
    var L = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !p(i).is(n))) i.nodeType === 1 && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    }), p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (p.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = w.test(e) || typeof e != "string" ? p(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = p.filter(r, i)), this.length > 1 && (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M = /\S+/g,
        _ = {};
    p.Callbacks = function(e) {
        e = typeof e == "string" ? _[e] || D(e) : p.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            f = function(c) {
                n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0;
                for (; u && s < i; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        (function s(t) {
                            p.each(t, function(t, n) {
                                var r = p.type(n);
                                r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && s(n)
                            })
                        })(arguments), t ? i = u.length : n && (o = r, f(n))
                    }
                    return this
                },
                remove: function() {
                    return u && p.each(arguments, function(e, n) {
                        var r;
                        while ((r = p.inArray(n, u, r)) > -1) u.splice(r, 1), t && (r <= i && i--, r <= s && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, u) > -1 : !!u && !!u.length
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = a = n = undefined, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = undefined, n || l.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    return u && (!r || a) && (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var o = p.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? p.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, p.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = i !== 1 || e && p.isFunction(e.promise) ? i : 0,
                o = s === 1 ? e : p.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                },
                a, f, l;
            if (i > 1) {
                a = new Array(i), f = new Array(i), l = new Array(i);
                for (; t < i; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s
            }
            return s || o.resolveWith(l, n), o.promise()
        }
    });
    var P;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --p.readyWait : p.isReady) return;
            if (!N.body) return setTimeout(p.ready);
            p.isReady = !0;
            if (e !== !0 && --p.readyWait > 0) return;
            P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready")
        }
    }), p.ready.promise = function(t) {
        if (!P) {
            P = p.Deferred();
            if (N.readyState === "complete") setTimeout(p.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", B, !1), e.addEventListener("load", B, !1);
            else {
                N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
                var n = !1;
                try {
                    n = e.frameElement == null && N.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!p.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        H(), p.ready()
                    }
                }()
            }
        }
        return P.promise(t)
    };
    var j = typeof undefined,
        F;
    for (F in p(c)) break;
    c.ownLast = F !== "0", c.inlineBlockNeedsLayout = !1, p(function() {
            var e, t, n = N.getElementsByTagName("body")[0];
            if (!n) return;
            e = N.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(e).appendChild(t);
            if (typeof t.style.zoom !== j) {
                t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1";
                if (c.inlineBlockNeedsLayout = t.offsetWidth === 3) n.style.zoom = 1
            }
            n.removeChild(e), e = t = null
        }),
        function() {
            var e = N.createElement("div");
            if (c.deleteExpando == null) {
                c.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    c.deleteExpando = !1
                }
            }
            e = null
        }(), p.acceptData = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = p.data(s);
                    if (s.nodeType === 1 && !p._data(s, "parsedAttrs")) {
                        n = o.length;
                        while (n--) r = o[n].name, r.indexOf("data-") === 0 && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
                        p._data(s, "parsedAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? R(s, e, p.data(s, e)) : undefined
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = p._queueHooks(e, t),
                o = function() {
                    p.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"), p._removeData(e, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = p.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            typeof e != "string" && (t = e, e = undefined), e = e || "fx";
            while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = ["Top", "Right", "Bottom", "Left"],
        $ = function(e, t) {
            return e = t || e, p.css(e, "display") === "none" || !p.contains(e.ownerDocument, e)
        },
        J = p.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = n == null;
            if (p.type(n) === "object") {
                i = !0;
                for (u in n) p.access(e, t, u, n[u], !0, s, o)
            } else if (r !== undefined) {
                i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                    return f.call(p(e), n)
                }));
                if (t)
                    for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
            }
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        K = /^(?:checkbox|radio)$/i;
    (function() {
        var e = N.createDocumentFragment(),
            t = N.createElement("div"),
            n = N.createElement("input");
        t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace = t.firstChild.nodeType === 3, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = N.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", n.type = "checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
            c.noCloneEvent = !1
        }), t.cloneNode(!0).click());
        if (c.deleteExpando == null) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                c.deleteExpando = !1
            }
        }
        e = t = n = null
    })(),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        Y = /^(?:mouse|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
            if (!g) return;
            n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                return typeof p === j || !!e && p.event.triggered === e.type ? undefined : p.event.dispatch.apply(l.elem, arguments)
            }, l.elem = e), t = (t || "").match(M) || [""], u = t.length;
            while (u--) {
                s = et.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort();
                if (!d) continue;
                f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                }, a);
                if (!(h = o[d])) {
                    h = o[d] = [], h.delegateCount = 0;
                    if (!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l)
                }
                f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0
            }
            e = null
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
            if (!g || !(l = g.events)) return;
            t = (t || "").match(M) || [""], f = t.length;
            while (f--) {
                u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort();
                if (!d) {
                    for (d in l) p.event.remove(e, d + t[f], n, r, !0);
                    continue
                }
                c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, v, g.handle) === !1) && p.removeEvent(e, d, g.handle), delete l[d])
            }
            p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, h, d = [r || N],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            u = c = r = r || N;
            if (r.nodeType === 3 || r.nodeType === 8) return;
            if (Z.test(v + p.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ? t : new p.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = n == null ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {};
            if (!i && l.trigger && l.trigger.apply(r, n) === !1) return;
            if (!i && !l.noBubble && !p.isWindow(r)) {
                a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode);
                for (; u; u = u.parentNode) d.push(u), c = u;
                c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
            }
            h = 0;
            while ((u = d[h++]) && !t.isPropagationStopped()) t.type = h > 1 ? a : l.bindType || v, s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && p.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
            t.type = v;
            if (!i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o && r[v] && !p.isWindow(r)) {
                c = r[o], c && (r[o] = null), p.event.triggered = v;
                try {
                    r[v]()
                } catch (g) {}
                p.event.triggered = undefined, c && (r[o] = c)
            }
            return t.result
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, s, o, u = [],
                a = r.call(arguments),
                f = (p._data(this, "events") || {})[e.type] || [],
                l = p.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = p.event.handlers.call(this, e, f), t = 0;
            while ((s = u[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), n !== undefined && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || e.type !== "click"))
                for (; a != this; a = a.parentNode || this)
                    if (a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
                        i = [];
                        for (s = 0; s < u; s++) r = t[s], n = r.selector + " ", i[n] === undefined && (i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new p.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || N), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                return e.pageX == null && t.clientX != null && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== rt() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === rt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (p.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    }, p.Event = function(e, t) {
        if (!(this instanceof p.Event)) return new p.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), this[p.expando] = !0
    }, p.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = tt;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = tt;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !p.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            if (p.nodeName(this, "form")) return !1;
            p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : undefined;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (p.nodeName(this, "form")) return !1;
            p.event.remove(this, "._submit")
        }
    }), c.changeBubbles || (p.event.special.change = {
        setup: function() {
            if (Q.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), p.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
                });
                return !1
            }
            p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t);
                i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if (typeof e == "object") {
                typeof t != "string" && (n = n || t, t = undefined);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
            if (r === !1) r = nt;
            else if (!r) return this;
            return i === 1 && (o = r, r = function(e) {
                return p().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if (typeof e == "object") {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            if (t === !1 || typeof t == "function") n = t, t = undefined;
            return n === !1 && (n = nt), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return p.event.trigger(e, t, n, !0)
        }
    });
    var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ot = / jQuery\d+="(?:null|\d+)"/g,
        ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
        at = /^\s+/,
        ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lt = /<([\w:]+)/,
        ct = /<tbody/i,
        ht = /<|&#?\w+;/,
        pt = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vt = /^$|\/(?:java|ecma)script/i,
        mt = /^true\/(.*)/,
        gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        bt = it(N),
        wt = bt.appendChild(N.createElement("div"));
    yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, p.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
            c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML, wt.removeChild(s = wt.firstChild));
            if ((!c.noCloneEvent || !c.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !p.isXMLDoc(e)) {
                r = Et(s), u = Et(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Lt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || Et(e), r = r || Et(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) kt(i, r[o])
                } else kt(e, s);
            return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, h = e.length,
                d = it(t),
                v = [],
                m = 0;
            for (; m < h; m++) {
                s = e[m];
                if (s || s === 0)
                    if (p.type(s) === "object") p.merge(v, s.nodeType ? [s] : s);
                    else if (!ht.test(s)) v.push(t.createTextNode(s));
                else {
                    u = u || d.appendChild(t.createElement("div")), a = (lt.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0]));
                    if (!c.tbody) {
                        s = a === "table" && !ct.test(s) ? u.firstChild : l[1] === "<table>" && !ct.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    p.merge(v, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = d.lastChild
                }
            }
            u && d.removeChild(u), c.appendChecked || p.grep(Et(v, "input"), St), m = 0;
            while (s = v[m++]) {
                if (r && p.inArray(s, r) !== -1) continue;
                o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) vt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, d
        },
        cleanData: function(e, t) {
            var r, i, s, o, u = 0,
                a = p.expando,
                f = p.cache,
                l = c.deleteExpando,
                h = p.event.special;
            for (;
                (r = e[u]) != null; u++)
                if (t || p.acceptData(r)) {
                    s = r[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                        f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null, n.push(s))
                    }
                }
        }
    }), p.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return e === undefined ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = xt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = xt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? p.filter(e, this) : this,
                i = 0;
            for (;
                (n = r[i]) != null; i++) !t && n.nodeType === 1 && p.cleanData(Et(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && p.cleanData(Et(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(ot, "") : undefined;
                if (typeof e == "string" && !pt.test(e) && (c.htmlSerialize || !ut.test(e)) && (c.leadingWhitespace || !at.test(e)) && !yt[(lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ft, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (p.cleanData(Et(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(Et(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0,
                l = this.length,
                h = this,
                d = l - 1,
                v = e[0],
                m = p.isFunction(v);
            if (m || l > 1 && typeof v == "string" && !c.checkClone && dt.test(v)) return this.each(function(n) {
                var r = h.eq(n);
                m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l) {
                a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, a.childNodes.length === 1 && (a = n);
                if (n) {
                    o = p.map(Et(a, "script"), Tt), s = o.length;
                    for (; f < l; f++) r = a, f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))), t.call(this[f], r, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, p.map(o, Nt);
                        for (f = 0; f < s; f++) r = o[f], vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, "")))
                    }
                    a = n = null
                }
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = p(e),
                u = o.length - 1;
            for (; r <= u; r++) n = r === u ? this : this.clone(!0), p(o[r])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var At, Ot = {};
    (function() {
        var e, t, n = N.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(e.style.opacity), c.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = n.style.backgroundClip === "content-box", e = n = null, c.shrinkWrapBlocks = function() {
            var e, n, i, s;
            if (t == null) {
                e = N.getElementsByTagName("body")[0];
                if (!e) return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = N.createElement("div"), i = N.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== j && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = i.offsetWidth !== 3), e.removeChild(n), e = n = i = null
            }
            return t
        }
    })();
    var Dt = /^margin/,
        Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ht, Bt, jt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ht = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, Bt = function(e, t, n) {
            var r, i, s, o, u = e.style;
            return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, n && (o === "" && !p.contains(e.ownerDocument, e) && (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o === undefined ? o : o + ""
        }) : N.documentElement.currentStyle && (Ht = function(e) {
            return e.currentStyle
        }, Bt = function(e, t, n) {
            var r, i, s, o, u = e.style;
            return n = n || Ht(e), o = n ? n[t] : undefined, o == null && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = t === "fontSize" ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), o === undefined ? o : o + "" || "auto"
        }),
        function() {
            function l() {
                var t, n, u = N.getElementsByTagName("body")[0];
                if (!u) return;
                t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", p.swap(u, u.style.zoom != null ? {
                    zoom: 1
                } : {}, function() {
                    r = n.offsetWidth === 4
                }), i = !0, s = !1, o = !0, e.getComputedStyle && (s = (e.getComputedStyle(n, null) || {}).top !== "1%", i = (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width === "4px"), u.removeChild(t), n = u = null
            }
            var t, n, r, i, s, o, u = N.createElement("div"),
                a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = u.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(t.style.opacity), c.cssFloat = !!t.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = u.style.backgroundClip === "content-box", t = u = null, p.extend(c, {
                reliableHiddenOffsets: function() {
                    if (n != null) return n;
                    var e, t, r, i = N.createElement("div"),
                        s = N.getElementsByTagName("body")[0];
                    if (!s) return;
                    return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText = a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = t[0].offsetHeight === 0, t[0].style.display = "", t[1].style.display = "none", n = r && t[0].offsetHeight === 0, s.removeChild(e), i = s = null, n
                },
                boxSizing: function() {
                    return r == null && l(), r
                },
                boxSizingReliable: function() {
                    return i == null && l(), i
                },
                pixelPosition: function() {
                    return s == null && l(), s
                },
                reliableMarginRight: function() {
                    var t, n, r, i;
                    if (o == null && e.getComputedStyle) {
                        t = N.getElementsByTagName("body")[0];
                        if (!t) return;
                        n = N.createElement("div"), r = N.createElement("div"), n.style.cssText = a, t.appendChild(n).appendChild(r), i = r.appendChild(N.createElement("div")), i.style.cssText = r.style.cssText = f, i.style.marginRight = i.style.width = "0", r.style.width = "1px", o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                    }
                    return o
                }
            })
        }(), p.swap = function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        };
    var It = /alpha\([^)]*\)/i,
        qt = /opacity\s*=\s*([^)]*)/,
        Rt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + X + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + X + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Vt = ["Webkit", "O", "Moz", "ms"];
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var i, s, o, u = p.camelCase(t),
                a = e.style;
            t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u];
            if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
            s = typeof n, s === "string" && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s = "number");
            if (n == null || n !== n) return;
            s === "number" && !p.cssNumber[u] && (n += "px"), !c.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
            if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
                a[t] = "", a[t] = n
            } catch (f) {}
        },
        css: function(e, t, n, r) {
            var i, s, o, u = p.camelCase(t);
            return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), s === undefined && (s = Bt(e, t, r)), s === "normal" && t in Xt && (s = Xt[t]), n === "" || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && Ht(e);
                return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && p.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = p.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && p.trim(s.replace(It, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = It.test(s) ? s.replace(It, i) : s + " " + i
        }
    }), p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
        if (t) return p.swap(e, {
            display: "inline-block"
        }, Bt, [e, "marginRight"])
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Dt.test(e) || (p.cssHooks[e + t].set = Kt)
    }), p.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (p.isArray(t)) {
                    r = Ht(e), i = t.length;
                    for (; o < i; o++) s[t[o]] = p.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = p.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (e.elem.style[p.cssProps[e.prop]] != null || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = Yt.prototype.init, p.fx.step = {};
    var Zt, en, tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        sn = [ln],
        on = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nn.exec(t),
                    s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                    o = (p.cssNumber[e] || s !== "px" && +r) && nn.exec(p.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, p.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    p.Animation = p.extend(hn, {
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? sn.unshift(e) : sn.push(e)
            }
        }), p.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            r.duration = p.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
            }, r
        }, p.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter($).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = p.isEmptyObject(e),
                    s = p.speed(t, n, r),
                    o = function() {
                        var t = hn(this, p.extend({}, e), s);
                        (i || p._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = e != null && e + "queueHooks",
                        s = p.timers,
                        o = p._data(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                    (t || !n) && p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = p._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = p.timers,
                        o = r ? r.length : 0;
                    n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                    for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, r, i) {
                return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
            }
        }), p.each({
            slideDown: an("show"),
            slideUp: an("hide"),
            slideToggle: an("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            p.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), p.timers = [], p.fx.tick = function() {
            var e, t = p.timers,
                n = 0;
            Zt = p.now();
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || p.fx.stop(), Zt = undefined
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            en || (en = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            clearInterval(en), en = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(e, t) {
            return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i = N.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = N.createElement("select"), r = n.appendChild(N.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", c.getSetAttribute = i.className !== "t", c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = e.getAttribute("href") === "/a", c.checkOn = !!t.value, c.optSelected = r.selected, c.enctype = !!N.createElement("form").enctype, n.disabled = !0, c.optDisabled = !r.disabled, t = N.createElement("input"), t.setAttribute("value", ""), c.input = t.getAttribute("value") === "", t.value = "t", t.setAttribute("type", "radio"), c.radioValue = t.value === "t", e = t = n = r = i = null
        }();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(pn, "") : n == null ? "" : n);
                return
            }
            return r = p.isFunction(e), this.each(function(n) {
                var i;
                if (this.nodeType !== 1) return;
                r ? i = e.call(this, n, p(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                    return e == null ? "" : e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return t != null ? t : p.text(e)
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (c.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                            t = p(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = p.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (p.inArray(p.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1
                    }
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                if (p.isArray(t)) return e.checked = p.inArray(p(e).val(), t) >= 0
            }
        }, c.checkOn || (p.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var dn, vn, mn = p.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        yn = c.getSetAttribute,
        bn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2) return;
            if (typeof e.getAttribute === j) return p.prop(e, t, n);
            if (s !== 1 || !p.isXMLDoc(e)) t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn);
            if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : (i = p.find.attr(e, t), i == null ? undefined : i);
            if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
            p.removeAttr(e, t)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(M);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(yn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && t === "radio" && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), vn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mn[t] || p.find.attr;
        mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
            var i, s;
            return r || (s = mn[t], mn[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, mn[t] = s), i
        } : function(e, t, n) {
            if (!n) return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    if (!bn || !yn) p.attrHooks.value = {
        set: function(e, t, n) {
            if (!p.nodeName(e, "input")) return dn && dn.set(e, t, n);
            e.defaultValue = t
        }
    };
    yn || (dn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "";
            if (n === "value" || t === e.getAttribute(n)) return t
        }
    }, mn.id = mn.name = mn.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: dn.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            dn.set(e, t === "" ? !1 : t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        }
    })), c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = undefined, delete this[e]
                } catch (t) {}
            })
        }
    }), p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) return;
            return s = o !== 1 || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Sn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = typeof e == "string" && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (f) {
                t = (e || "").match(M) || [];
                for (; u < a; u++) {
                    n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = p.trim(r), n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = arguments.length === 0 || typeof e == "string" && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (f) {
                t = (e || "").match(M) || [];
                for (; u < a; u++) {
                    n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        o = e ? p.trim(r) : "", n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0,
                        i = p(this),
                        s = e.match(M) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === j || n === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : p._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xn = p.now(),
        Tn = /\?/,
        Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var n, r;
        if (!t || typeof t != "string") return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = undefined
        }
        return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + t), n
    };
    var Cn, kn, Ln = /#.*$/,
        An = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Dn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hn = {},
        Bn = {},
        jn = "*/".concat("*");
    try {
        kn = location.href
    } catch (Fn) {
        kn = N.createElement("a"), kn.href = "", kn = kn.href
    }
    Cn = Pn.exec(kn.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kn,
            type: "GET",
            isLocal: Mn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                if (b === 2) return;
                b = 2, o && clearTimeout(o), a = undefined, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, n && (w = Un(l, E, n)), w = zn(l, w, E, f);
                if (f) l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (p.etag[i] = S)), e === 204 || l.type === "HEAD" ? x = "nocontent" : e === 304 ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y);
                else {
                    y = x;
                    if (e || !x) x = "error", e < 0 && (e = 0)
                }
                E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = undefined, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (t = e, e = undefined), t = t || {};
            var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
                c = l.context || l,
                h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
                d = p.Deferred(),
                v = p.Callbacks("once memory"),
                m = l.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (b === 2) {
                            if (!f) {
                                f = {};
                                while (t = On.exec(s)) f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return b === 2 ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (l.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return a && a.abort(t), x(0, t), this
                    }
                };
            d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""], l.crossDomain == null && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Cn[3] || (Cn[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), qn(Hn, l, t, E);
            if (b === 2) return E;
            u = l.global, u && p.active++ === 0 && p.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !_n.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)), l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && b !== 2) {
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) E[r](l[r]);
                a = qn(Bn, l, t, E);
                if (!a) x(-1, "No Transport");
                else {
                    E.readyState = 1, u && h.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1, a.send(g, x)
                    } catch (S) {
                        if (!(b < 2)) throw S;
                        x(-1, S)
                    }
                }
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, undefined, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = undefined), p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return p.isFunction(e) ? this.each(function(t) {
                p(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && (e.style && e.style.display || p.css(e, "display")) === "none"
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Wn = /%20/g,
        Xn = /\[\]$/,
        Vn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    p.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        t === undefined && (t = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Kn(n, e[n], t, i);
        return r.join("&").replace(Wn, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return n == null ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
    } : Zn;
    var Qn = 0,
        Gn = {},
        Yn = p.ajaxSettings.xhr();
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in Gn) Gn[e](undefined, !0)
    }), c.cors = !!Yn && "withCredentials" in Yn, Yn = c.ajax = !!Yn, Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Qn;
                    s.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) n[i] !== undefined && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, i) {
                        var u, a, f;
                        if (t && (i || s.readyState === 4)) {
                            delete Gn[o], t = undefined, s.onreadystatechange = p.noop;
                            if (i) s.readyState !== 4 && s.abort();
                            else {
                                f = {}, u = s.status, typeof s.responseText == "string" && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }!u && e.isLocal && !e.crossDomain ? u = f.text ? 200 : 404 : u === 1223 && (u = 204)
                            }
                        }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    }, e.async ? s.readyState === 4 ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
                },
                abort: function() {
                    t && t(undefined, !0)
                }
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        if (n || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || p.expando + "_" + xn++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        if (u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || p.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && p.isFunction(s) && s(o[0]), o = s = undefined
        }), "script"
    }), p.parseHTML = function(e, t, n) {
        if (!e || typeof e != "string") return null;
        typeof t == "boolean" && (n = t, t = !1), t = t || N;
        var r = E.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var rr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if (typeof e != "string" && rr) return rr.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (s = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    p.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = p.css(e, "position"),
                c = p(e),
                h = {};
            l === "static" && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f = (l === "absolute" || l === "fixed") && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            if (!s) return;
            return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()), n = sr(s), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return p.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - p.css(r, "marginTop", !0),
                left: t.left - n.left - p.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ir;
                while (e && !p.nodeName(e, "html") && p.css(e, "position") === "static") e = e.offsetParent;
                return e || ir
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this, function(e, r, i) {
                var s = sr(e);
                if (i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
                s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
            if (n) return n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            p.fn[r] = function(r, i) {
                var s = arguments.length && (n || typeof r != "boolean"),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return J(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? p.css(t, n, o) : p.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
        return p
    });
    var or = e.jQuery,
        ur = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
}), define("jquery", function() {});
var ck_duration = 30,
    ck_exp = new Date;
ck_exp.setDate(ck_exp.getDate() + ck_duration);
var adv = adv || {};
parseUri.options = {
    strictMode: !1,
    key: "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
}, window.landinguri = parseUri(document.URL), document.referrer !== "" ? window.refuri = parseUri(document.referrer) : window.refuri = !1;
var s_account = "lonelyplanet-global";
switch (getSubDomain()) {
    case "shop":
        s_account = "lonelyplanet-global,lonelyplanet-shop";
        break;
    case "secure":
        s_account = "lonelyplanet-global,lonelyplanet-shop";
        break;
    case "hotels":
        s_account = "lonelyplanet-global,lonelyplanet-lphotels"
}
getURLChannel() == "bookings" ? s_account = "lonelyplanet-bookingservices,lonelyplanet-global" : getURLChannel() == "campaigns" || getURLChannel() == "competitions" || getURLChannel() == "advertorial" ? s_account = "lonelyplanetmicrosites,lonelyplanet-global" : getURLChannel() == "groups" ? s_account = "lonelyplanet-groups,lonelyplanet-global" : getURLChannel() == "blog" ? s_account = "lonelyplanet-blogs,lonelyplanet-global" : getURLChannel() == "hotels" && (s_account = "lonelyplanet-global,lonelyplanet-lphotels"), getSubDomain() == "secure" && (getURLChannel() == "sign-in" || getURLChannel() == "members") && (s_account = "lonelyplanet-global,lonelyplanet-profile", s_account = "lonelyplanet-global,lonelyplanet-profile");
var s = s_gi(s_account);
s.charSet = "UTF-8", s.currencyCode = "AUD", s.trackDownloadLinks = !0, s.trackExternalLinks = !0, s.trackInlineStats = !0, s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", s.linkInternalFilters = "javascript:,.lonelyplanet.com,//lonelyplanet.com,www.lonelyplanet.tv,load.lpo", s.linkLeaveQueryString = !1, s.linkTrackVars = "None", s.linkTrackEvents = "None", s.server = window.location.host, typeof setupOmnitureUserInfo == "function" && setupOmnitureUserInfo(s), s.visitorNamespace = "lonelyplanet", s.trackingServer = "om.lonelyplanet.com", s.trackingServerSecure = "oms.lonelyplanet.com", s.usePlugins = !0, s.doPlugins = s_doPlugins, s.manageQueryParam = new Function("p", "w", "e", "u", "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.location);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf('?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.length);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1,x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.substring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp){y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0;while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break;}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.rep(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}if(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if(qp)qs='?'+qp;return u+qs;"), s.clickPast = new Function("scp", "ct_ev", "cp_ev", "cpc", "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc){cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev;s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc,0,0);}}}"), s.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), s.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.events+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tcth_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct,0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev+cp_ev;}}}"), s.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), s.getValOnce = new Function("v", "c", "e", "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), s.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), s.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"), s.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v"), s.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''"), s.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), s.trackas = function(e) {
    var t = [],
        n = [];
    n.push("events", "products"), e.linktracktype = e.linktracktype || "o", e.product_name = e.product_name || e.type, incrementor = "";
    if (e.type === "hotel") {
        switch (e.sub_type) {
            case "list":
                t.push("event31");
                break;
            case "details":
                t.push("event32");
                break;
            case "landing-page":
                t.push("event30")
        }
        s.eVar39 = e.booking_duration, s.eVar61 = e.booking_start, s.eVar62 = e.booking_people, n.push("eVar39", "eVar61", "eVar62")
    }
    return s.eVar3 = e.location_region, s.eVar4 = e.location_country, s.eVar5 = e.location_city, s.eVar38 = e.booking_currency, n.push("eVar3", "eVar4", "eVar5", "eVar38"), linkname = "lp:availability-search:" + e.type + ":" + e.sub_type, s.linkTrackVars = n.join(), s.linkTrackEvents = s.events = t.join(), s.tl(this, e.linktracktype, linkname), !0
}, s.linkstacker = function(e) {
    var t = 5,
        n = 30,
        r = s.c_r("s_lnkstkr").split("|") || [],
        i = r.pop(),
        o = 0;
    s.expiry = new Date;
    var u = s.expiry.getTime();
    s.expiry.setTime(u + n * 24 * 60 * 60 * 1e3), i !== e && r.push(i), r.push(e), r.length - t > 0 && (o = r.length - t), r = r.slice(o, r.length), r[1] ? lnkstk = r.join("|") : lnkstk = r[0], s.c_w("s_lnkstkr", lnkstk, s.expiry), s.c_w("s_trklnkstk", "true", s.expiry)
}, s.clearlinkstack = function() {
    return s.c_w("s_lnkstkr", ""), s.c_w("s_trklnkstk", ""), !0
}, s.getlinkstack = function() {
    return s.c_r("s_trklnkstk") === "true" ? (s.c_w("s_trklnkstk", ""), s.c_r("s_lnkstkr")) : ""
}, adv.getCampaignChannel = function(e, t, n) {
    var r = {
        seo: "seo",
        ppc: "sem",
        sem: "sem",
        soc: "social",
        soc_other: "social",
        eml: "email",
        pns: "partnership",
        aff: "affiliate",
        qr: "qr-code",
        pdf: "pdf-code",
        pub: "publishing-code",
        cs: "cs-microsite-code",
        us: "us-paid-other",
        uk: "uk-paid-other",
        au: "au-paid-other",
        other_ref: "other-referring-domain",
        other: "unknown-paid",
        dem: "dem",
        direct: "direct"
    };
    if (t) {
        var i = [],
            s = 0,
            o = ["|", "-", "_", ":"];
        while (i.length < 2 && s < o.length) i = t.toLowerCase().split(o[s]), s++;
        return r[i[0]] ? r[i[0]] : e.queryKey.s_kwcid || e.queryKey.mckv ? e.queryKey.mckv && e.queryKey.mckv.match(/^dem/i) ? r.dem : r.sem : r.other
    }
    return n && n.host != "" && !n.host.match(/lonelyplanet./i) ? n.host.match(/google\.|bing\.|yahoo\.|ask\.|aol\./i) ? r.seo : n.host.match(/facebook\.|linkedin\.|twitter\.|myspace\.|youtube\.|ning\.|^t\.co|xanga\./i) ? r.soc : n.host.match(/orkut\.|friendster\.|vimeo\.com|bebo\.com|hi5\.com|yuku\.com|cafemom\.com|xanga\.com|livejournal\.com|blogspot\.com|wordpress\.com|myspace\.com|digg\.com|reddit\.com|stumbleupon\.com|twine\.com|yelp\.com|mixx\.com|chime\.in|delicious\.com|tumblr\.com|disqus\.com|intensedebate\.com|plurk\.com|slideshare\.net|backtype\.com|netvibes\.com|mister-wong\.com|diigo\.com|flixster\.com|12seconds\.tv|zooomr\.com|identi\.ca|jaiku\.com|flickr\.com|imeem\.com|dailymotion\.com|photobucket\.com|fotolog\.com|smugmug\.com|classmates\.com|myyearbook\.com|mylife\.com|tagged\.com|brightkite\.com|hi5\.com|yuku\.com|cafemom\.com|plus\.google\.com|instagram\.com|prezi\.com|newsvine\.com|pinterest\.com|wiebo\.com|nevkontakte\.com|qzone\.qq\.com|cloob\.com/i) ? r.soc_other : r.other_ref : r.direct
}, adv.stackCampaignChannel = function(e) {
    var t = s.c_r("chan_stk") || "",
        n;
    t !== "" ? n = t.replace(/%3E/gi, ">").split(">") : n = [], n[n.length - 1] != e && (e !== "direct" || n.length < 1) && n.push(e);
    var r = 0;
    return n.length - 5 > 0 && (r = n.length - 5), n.slice(r, n.length).join(">")
}, adv.saveCampaignData = function(e, t, n, r) {
    var i = s.c_r("cam") || "";
    i === "direct" || i === "" ? s.c_w("cam", e, r) : e !== "direct" && s.c_w("cam", e, r), s.campaign = decodeURIComponent(s.c_r("cam"));
    var o = s.c_r("cam_chan") || "";
    o === "direct" || o === "" ? s.c_w("cam_chan", n, r) : n !== "direct" && s.c_w("cam_chan", n, r), s.eVar58 = s.c_r("cam_chan"), s.c_w("chan_stk", t, r)
}, adv.getCampaignCode = function(e, t) {
    return t == "direct" ? s.c_r("cam") || "direct" : t + "_" + e.host.replace("www.", "")
}, adv.doCampaignManagement = function(e) {
    landinguri.queryKey.mckv || landinguri.queryKey.affil ? (s.campaign = landinguri.queryKey.affil || landinguri.queryKey.mckv, !landinguri.queryKey.affil && landinguri.queryKey.mckv ? landinguri.queryKey.mckv.match(/^dem/i) ? s.eVar58 = "dem" : s.eVar58 = "sem" : s.eVar58 = adv.getCampaignChannel(landinguri, s.campaign, refuri)) : refuri ? (s.eVar58 = adv.getCampaignChannel(landinguri, !1, refuri), s.campaign = adv.getCampaignCode(refuri, s.eVar58)) : s.campaign = s.eVar58 = "direct", s.eVar59 = adv.stackCampaignChannel(s.eVar58), adv.saveCampaignData(s.campaign, s.eVar59, s.eVar58, e)
};
var s_code = "",
    s_objectID;
s_giqf(), define("sCode", function() {}), define("lib/analytics/analytics", ["jquery", "sCode"], function(e) {
        function t(t, n) {
            this.LISTENER = n || "#js-card-holder", this.config = e.extend({}, t || window.lp.tracking)
        }
        return t.prototype.listen = function() {
            var t = e(this.LISTENER);
            t.on(":cards/received", function(e, t, n, r) {
                var i = [n];
                r && r.stack && i.push(r.stack), this["_" + r.callback].apply(this, i)
            }.bind(this)), t.on(":cards/append/received", function(e, t, n, r) {
                r && this["_" + r.callback](n)
            }.bind(this)), t.on(":page/received", function(e, t, n, r) {
                r && this["_" + r.callback](r.url, r.stack)
            }.bind(this)), t.on(":layer/received", function(t, n) {
                var r = e(n.content).find("#js-article-title").text();
                this.track({
                    eVar7: r,
                    prop11: r,
                    prop41: window.location.pathname
                }, !0)
            }.bind(this))
        }, t.prototype.trackLink = function(e) {
            e = e || {}, this._save(), this._add(e), this._copy(), typeof window.s.tl == "function" && window.s.tl && window.s.tl(), this._restore()
        }, t.prototype.track = function(e, t) {
            e = e || {}, t = t || !1, t && this._save(), this._add(e), this._copy(), typeof window.s.t == "function" && window.s.t && window.s.t(), t && this._restore()
        }, t.prototype.linkTrackVars = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            window.s.linkTrackVars = t
        }, t.prototype.linkTrackEvents = function(e) {
            window.s.linkTrackEvents = e
        }, t.prototype.trackView = function() {
            this.track()
        }, t.prototype._save = function() {
            this.prevConfig = {};
            for (var e in this.config) this.prevConfig[e] = this.config[e]
        }, t.prototype._add = function(e) {
            e = e || {};
            for (var t in e) this.config[t] = e[t]
        }, t.prototype._copy = function() {
            for (var e in this.config) window.s[e] = this.config[e]
        }, t.prototype._restore = function() {
            var e;
            for (e in this.config) window.s[e] = undefined;
            this.config = {};
            for (e in this.prevConfig) this.config[e] = this.prevConfig[e];
            return this._copy(), this.prevConfig = null, !0
        }, t
    }), define("lib/page/swipe", ["jquery"], function(e) {
        var t = {
                listener: "#js-row--content",
                selector: ".js-onswipe",
                threshold: 10
            },
            n = function(n) {
                this.config = e.extend({}, t, n), this.$listener = e(this.config.listener), this.selector = this.config.selector, this.$window = e(window), this.init()
            };
        return n.prototype.init = function() {
            var e = this.$listener.find(this.selector).data("swipe-threshold");
            e && (this.config.threshold = e), this.listen()
        }, n.prototype.listen = function() {
            this.$listener.on("touchstart pointerdown MSPointerDown", this.selector, this._gestureBegins.bind(this)), this.$listener.on("touchmove pointermove MSPointerMove", this.selector, this._gestureMoves.bind(this)), this.$listener.on("touchend touchleave pointerout MSPointerOut", this.selector, this._gestureEnds.bind(this))
        }, n.prototype._prevent = function(e) {
            return e.preventDefault(), !1
        }, n.prototype._isPointerTouchEvent = function(e) {
            return e.pointerType && e.pointerType == "touch" || e.pointerType == "pen"
        }, n.prototype._isW3CTouchEvent = function(e) {
            return !!e.targetTouches || !!e.changedTouches
        }, n.prototype._getTarget = function(e) {
            return e = this.$listener.find(e), e.is(this.selector) ? e : e.closest(this.selector)
        }, n.prototype._eventToPoint = function(e) {
            var t;
            if (this._isPointerTouchEvent(e) && e.buttons > 0) t = e;
            else {
                if (!this._isW3CTouchEvent(e)) return !1;
                e.changedTouches && e.changedTouches.length && (t = e.changedTouches[0]), e.targetTouches && e.targetTouches.length && (t = e.targetTouches[0])
            }
            return {
                x: t.clientX,
                y: t.clientY
            }
        }, n.prototype._getScrollTop = function() {
            return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
        }, n.prototype._gestureBegins = function(e) {
            var t = this._getTarget(e.target);
            if (!t.length) return;
            e = e.originalEvent, this.startPoint = this._eventToPoint(e), this._isPointerTouchEvent(e) && (this.scrollTop = this._getScrollTop())
        }, n.prototype._gestureMoves = function(e) {
            if (!this.startPoint) return;
            var t;
            e = e.originalEvent, t = this._eventToPoint(e), this.difference = {
                x: t.x - this.startPoint.x,
                y: t.y - this.startPoint.y
            }, Math.abs(this.difference.x) > Math.abs(this.difference.y) ? this.$window.data("scrollfreeze") || this.$window.on("touchmove", this._prevent).data("scrollfreeze", !0) : this._isPointerTouchEvent(e) && window.scrollTo(0, -1 * this.difference.y + this.scrollTop)
        }, n.prototype._gestureEnds = function(e) {
            var t = this._getTarget(e.target);
            if (!t.length) return;
            this.difference && (this.difference.x < 0 && this.difference.x < -1 * this.config.threshold ? t.trigger(":swipe/left") : this.difference.x > 0 && this.difference.x > this.config.threshold && t.trigger(":swipe/right")), this._isPointerTouchEvent(e.originalEvent) && (this.scrollTop = this._getScrollTop()), this.$window.off("touchmove", this._prevent).removeData("scrollfreeze"), this.difference = null, this.startPoint = null
        }, n
    }), define("lib/utils/template", [], function() {
        var e = function() {};
        return e.render = function(e, t) {
            for (var n in t) e = e.replace(new RegExp("{{" + n + "}}", "gm"), t[n]);
            return e
        }, e
    }), define("lib/components/tabs", ["jquery"], function(e) {
        function n(n) {
            this.config = e.extend({}, t, n), this.$tabs = e(this.config.selector), this.$labels = this.$tabs.find(this.config.tabTrigger), this.$container = this.$tabs.find(this.config.tabContent), this._init()
        }
        var t = {
            activeClassName: "is-active",
            selector: ".tabs",
            tabContent: ".js-tabs-content",
            tabTrigger: ".js-tab-trigger"
        };
        return n.prototype._init = function() {
            var t = this;
            this.$tabs.on("click", this.config.tabTrigger, function(n) {
                n.preventDefault();
                var r = e(n.currentTarget),
                    i = r.attr("href");
                t._openTab(r, i)
            }), this._openTab(this.$labels.eq(0), this.$labels.eq(0).attr("href")), this.$container.removeClass("is-loading")
        }, n.prototype._openTab = function(e, t) {
            if (e.hasClass(this.config.activeClassName)) return;
            this.$labels.removeClass(this.config.activeClassName), this.$container.find("." + this.config.activeClassName).removeClass(this.config.activeClassName), e.addClass(this.config.activeClassName), this.$container.find(t).addClass(this.config.activeClassName)
        }, n
    }), define("lib/utils/debounce", [], function() {
        return function(e, t, n) {
            var r, i, s;
            return function() {
                clearTimeout(r), i = n || this, s = arguments, r = setTimeout(function() {
                    e.apply(i, s), i = s = null
                }, t)
            }
        }
    }),
    function(e) {
        typeof define == "function" && define.amd ? define("jtimeago", ["jquery"], e) : e(jQuery)
    }(function(e) {
        function r() {
            var n = i(this),
                r = t.settings;
            return isNaN(n.datetime) || (r.cutoff == 0 || Math.abs(o(n.datetime)) < r.cutoff) && e(this).text(s(n.datetime)), this
        }

        function i(n) {
            n = e(n);
            if (!n.data("timeago")) {
                n.data("timeago", {
                    datetime: t.datetime(n)
                });
                var r = e.trim(n.text());
                t.settings.localeTitle ? n.attr("title", n.data("timeago").datetime.toLocaleString()) : r.length > 0 && (!t.isTime(n) || !n.attr("title")) && n.attr("title", r)
            }
            return n.data("timeago")
        }

        function s(e) {
            return t.inWords(o(e))
        }

        function o(e) {
            return (new Date).getTime() - e.getTime()
        }
        e.timeago = function(t) {
            return t instanceof Date ? s(t) : typeof t == "string" ? s(e.timeago.parse(t)) : typeof t == "number" ? s(new Date(t)) : s(e.timeago.datetime(t))
        };
        var t = e.timeago;
        e.extend(e.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowPast: !0,
                allowFuture: !1,
                localeTitle: !1,
                cutoff: 0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function(t) {
                function l(r, i) {
                    var s = e.isFunction(r) ? r(i, t) : r,
                        o = n.numbers && n.numbers[i] || i;
                    return s.replace(/%d/i, o)
                }
                if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                var n = this.settings.strings,
                    r = n.prefixAgo,
                    i = n.suffixAgo;
                this.settings.allowFuture && t < 0 && (r = n.prefixFromNow, i = n.suffixFromNow);
                if (!this.settings.allowPast && t >= 0) return this.settings.strings.inPast;
                var s = Math.abs(t) / 1e3,
                    o = s / 60,
                    u = o / 60,
                    a = u / 24,
                    f = a / 365,
                    c = s < 45 && l(n.seconds, Math.round(s)) || s < 90 && l(n.minute, 1) || o < 45 && l(n.minutes, Math.round(o)) || o < 90 && l(n.hour, 1) || u < 24 && l(n.hours, Math.round(u)) || u < 42 && l(n.day, 1) || a < 30 && l(n.days, Math.round(a)) || a < 45 && l(n.month, 1) || a < 365 && l(n.months, Math.round(a / 30)) || f < 1.5 && l(n.year, 1) || l(n.years, Math.round(f)),
                    h = n.wordSeparator || "";
                return n.wordSeparator === undefined && (h = " "), e.trim([r, c, i].join(h))
            },
            parse: function(t) {
                var n = e.trim(t);
                return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), n = n.replace(/([\+\-]\d\d)$/, " $100"), new Date(n)
            },
            datetime: function(n) {
                var r = t.isTime(n) ? e(n).attr("datetime") : e(n).attr("title");
                return t.parse(r)
            },
            isTime: function(t) {
                return e(t).get(0).tagName.toLowerCase() === "time"
            }
        });
        var n = {
            init: function() {
                var n = e.proxy(r, this);
                n();
                var i = t.settings;
                i.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, i.refreshMillis))
            },
            update: function(n) {
                var i = t.parse(n);
                e(this).data("timeago", {
                    datetime: i
                }), t.settings.localeTitle && e(this).attr("title", i.toLocaleString()), r.apply(this)
            },
            updateFromDOM: function() {
                e(this).data("timeago", {
                    datetime: t.parse(t.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
                }), r.apply(this)
            },
            dispose: function() {
                this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
            }
        };
        e.fn.timeago = function(e, t) {
            var r = e ? n[e] : n.init;
            if (!r) throw new Error("Unknown function name '" + e + "' for timeago");
            return this.each(function() {
                r.call(this, t)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    }), define("lib/core/timeago", ["jquery", "lib/utils/debounce", "jtimeago"], function(e, t) {
        function i(t) {
            this.config = e.extend({}, n, t), this.strings = {
                full: {
                    suffixAgo: null,
                    seconds: "just now",
                    minute: "a minute ago",
                    minutes: "%d minutes ago",
                    hour: "an hour ago",
                    hours: "%d hours ago",
                    day: "a day ago",
                    days: "%d days ago",
                    month: "a month ago",
                    months: "%d months ago",
                    year: "a year ago",
                    years: "%d years ago"
                },
                "short": {
                    suffixAgo: null,
                    seconds: "%ds",
                    minute: "%dm",
                    minutes: "%dm",
                    hour: "%dh",
                    hours: "%dh",
                    day: "%dd",
                    days: "%dd",
                    month: this._getMonthName,
                    months: this._getMonthName,
                    year: this._getFullYear,
                    years: this._getFullYear
                }
            }, this.$fullTimeagos = e(this.config.fullTimeagoSelector, this.config.context), this.$responsiveTimeagos = e(this.config.responsiveTimeagoSelector, this.config.context), (this.$fullTimeagos.length || this.$responsiveTimeagos.length) && this._init()
        }
        var n = {
                context: null,
                breakpoint: 600,
                refreshMillis: 6e4,
                fullTimeagoSelector: ".js-timeago-full",
                responsiveTimeagoSelector: ".js-timeago"
            },
            r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return i.prototype._init = function() {
            this.updateStrings(), this._refreshOnInterval(), this._refreshOnResize()
        }, i.prototype._getMonthName = function(e, t) {
            return r[(new Date(Date.now() - t)).getMonth()]
        }.bind(this), i.prototype._getFullYear = function(e, t) {
            return (new Date(Date.now() - t)).getFullYear().toString()
        }, i.prototype._isAboveBreakpoint = function() {
            return document.documentElement.clientWidth >= this.config.breakpoint
        }, i.prototype.updateStrings = function() {
            e.extend(e.timeago.settings.strings, this._isAboveBreakpoint() ? this.strings.full : this.strings.short), e(this.config.responsiveTimeagoSelector, this.config.context).timeago(), e.extend(e.timeago.settings.strings, this.strings.full), e(this.config.fullTimeagoSelector, this.config.context).timeago()
        }, i.prototype._refreshOnInterval = function() {
            var t = this;
            e.timeago.settings.refreshMillis = 0, setInterval(function() {
                t.updateStrings()
            }, this.config.refreshMillis)
        }, i.prototype._refreshOnResize = function() {
            e(window).resize(t(this.updateStrings.bind(this), 300))
        }, i
    }), define("lib/core/user_feed", ["jquery", "lib/utils/template", "lib/components/tabs", "lib/core/timeago"], function(e, t, n, r) {
        function s(t) {
            this.config = e.extend({}, i, t), this.$activities = e(this.config.activitiesSelector), this.$messages = e(this.config.messagesSelector), this.$messagesResponsive = e(this.config.messagesResponsiveSelector), this.$footer = e(this.config.footerSelector), this.$unreadActivitiesIndicator = e(this.config.unreadActivitiesNumberSelector), this.$unreadMessagesIndicator = e(this.config.unreadMessagesNumberSelector), this.$unreadFeedIndicator = e(this.config.unreadFeedNumberSelector), this.currentActivities, this.highlightedActivitiesNumber = this.config.initialHighlightedActivitiesNumber, this.init()
        }
        var i = {
            feedUrl: "https://www.lonelyplanet.com/thorntree/users/feed",
            feedSelector: ".js-user-feed",
            feedItemSelector: ".js-user-feed-item",
            targetLinkSelector: ".js-user-feed-item-target-link",
            activitiesSelector: "#js-user-feed-activities",
            messagesSelector: "#js-user-feed-messages",
            messagesResponsiveSelector: ".js-responsive-messages",
            footerSelector: ".js-user-feed-footer",
            unreadFeedNumberSelector: ".js-unread-feed-number",
            unreadActivitiesNumberSelector: ".js-unread-activities-number",
            unreadMessagesNumberSelector: ".js-unread-messages-number",
            unreadMessagesResponsiveNumberSelector: ".js-responsive-unread-messages",
            newFeedHighlightClass: "is-highlighted",
            initialHighlightedActivitiesNumber: 0,
            maxFeedActivities: 5,
            fetchInterval: 15e3
        };
        return s.prototype.init = function() {
            this._tabsInstance = new n({
                selector: this.config.feedSelector
            }), this._timeagoInstance = new r({
                context: this.config.feedSelector
            }), this._fetchFeed()
        }, s.prototype._bindLinks = function() {
            var t = this;
            e(this.config.feedSelector + " " + this.config.feedItemSelector).off("click").on("click", function() {
                t._goToUrl(e(this).find(t.config.targetLinkSelector).attr("href"))
            })
        }, s.prototype._goToUrl = function(e) {
            window.location.href = e
        }, s.prototype._updateUnreadMessagesResponsiveIndicator = function(t) {
            t > 0 && !e(this.config.unreadMessagesResponsiveNumberSelector).length && this.$messagesResponsive.children().last().append("<span class=" + this.config.unreadMessagesResponsiveNumberSelector.replace(".", "") + "> (" + t + ")</span>")
        }, s.prototype._updateUnreadFeedIndicator = function(e) {
            e > 0 ? this.$unreadFeedIndicator.text(e).removeClass("is-hidden") : this.$unreadFeedIndicator.addClass("is-hidden")
        }, s.prototype._createUserActivities = function(e) {
            var t = this,
                n = "",
                r = 0;
            while (r < e.length && r < this.config.maxFeedActivities) n += e[r].text, r++;
            this.$activities.html(n), this._bindLinks(), this.$activities.children().slice(0, t.highlightedActivitiesNumber).addClass(t.config.newFeedHighlightClass), this.$unreadActivitiesIndicator.text(t.highlightedActivitiesNumber)
        }, s.prototype._createUserMessages = function(t, n) {
            var r = "",
                i = 0;
            while (i < t.length && i < this.config.maxFeedActivities) t[i]["read?"] ? r += t[i].text : r += e(t[i].text).addClass(this.config.newFeedHighlightClass)[0].outerHTML, i++;
            this.$messages.html(r).append(this.$footer), this._bindLinks(), this.$unreadMessagesIndicator.text(n)
        }, s.prototype._getActivityNumber = function(e) {
            if (!e.activities) return;
            var t = 0,
                n = 0;
            for (n; n < e.activities.length; n++) this._isNewActivity(e.activities[n].timestamp) && t++;
            return t
        }, s.prototype._isNewActivity = function(e) {
            for (var t = 0; t < this.currentActivities.length; t++)
                if (e == this.currentActivities[t].timestamp) return !1;
            return !0
        }, s.prototype._updateActivities = function(e) {
            if (this.currentActivities) {
                var t = this._getActivityNumber(e);
                this.highlightedActivitiesNumber < t && (this.highlightedActivitiesNumber = t), t && this._createUserActivities(e.activities)
            } else e.activities && e.activities.length && this._createUserActivities(e.activities, e.activities.length), this.currentActivities = e.activities
        }, s.prototype._updateMessages = function(e) {
            var t = e.unreadMessagesCount;
            e.messages && e.messages.length && this._createUserMessages(e.messages, t), this._updateUnreadFeedIndicator(this.highlightedActivitiesNumber + t)
        }, s.prototype._updateFeed = function(e, t) {
            if (!t) return;
            e >= 980 && (this._updateActivities(t), this._updateMessages(t), this._timeagoInstance.updateStrings(), setTimeout(this._fetchFeed.bind(this), this.config.fetchInterval)), this._updateUnreadMessagesResponsiveIndicator(t.unreadMessagesCount)
        }, s.prototype._fetchFeed = function() {
            e.ajax({
                url: this.config.feedUrl,
                cache: !1,
                jsonpCallback: "lpUserFeedCallback",
                dataType: "jsonp",
                success: this._updateFeed.bind(this, document.documentElement.clientWidth),
                error: this._updateFeed.bind(this, document.documentElement.clientWidth)
            })
        }, s
    }), define("lib/core/authenticator", ["jquery", "lib/utils/template", "lib/core/user_feed"], function(e, t, n) {
        var r = function() {
                this.statusUrl = "https://auth.lonelyplanet.com/users/status.json", this.init()
            },
            i;
        return r.prototype.init = function() {
            i = this, this.$template || (this.templateContainer = e("#js-user-nav-template"), this.$template = e(this.templateContainer.html())), e.ajax({
                url: this.statusUrl,
                dataType: "jsonp",
                jsonpCallback: "lpUserStatusCallback",
                success: i._updateStatus,
                error: i._updateStatus
            })
        }, r.prototype._createUserLinks = function() {
            var t = i.$template.filter(".js-user-signed-out-template").html();
            e(".js-user-signed-in, .js-user-signed-out").remove(), i.templateContainer.after(t)
        }, r.prototype._createUserMenu = function() {
            var r = i.$template.filter(".js-user-signed-in-template").html(),
                s = e(t.render(r, window.lp.user)),
                o;
            e(".js-user-signed-in, .js-user-signed-out").remove(), i.templateContainer.after(s), new n, o = e(".js-user-avatar"), o.attr("src", o.data("src"))
        }, r.prototype._updateStatus = function(e) {
            e && e.username ? (window.lp.user = e, i._createUserMenu()) : i._createUserLinks()
        }, new r, r
    }), define("lib/core/shopping_cart", ["jquery"], function(e) {
        return function() {
            var n = window.lp.getCookie && window.lp.getCookie("shopCartCookie");
            if (!n) return;
            n = e.parseJSON(n), n.A && n.A.length && e(".js-user-basket").append("<span class='notification-badge notification-badge--basket-items wv--inline-block js-basket-items'>" + n.A.length + "</span>")
        }
    }), define("lib/components/toggle_active", ["jquery", "lib/utils/debounce"], function(e, t) {
        function r(t) {
            var r = {
                listener: null,
                context: null,
                selector: ".js-toggle-active"
            };
            this.config = e.extend({}, r, t), n = this.config.listener || n, this.$toggles = e(this.config.selector, this.config.context), this.$toggles.length && this._init()
        }
        var n = "#js-row--content";
        return r.prototype._init = function() {
            var t, n, r, i;
            this.$toggles.css("cursor", "pointer"), this.config.context ? e(this.config.context).on("click", this.config.selector, e.proxy(this._handleClick, this)) : this.$toggles.on("click", e.proxy(this._handleClick, this));
            for (t = 0, n = this.$toggles.length; t < n; t++) r = this.$toggles.eq(t), i = this._getTargetEls(r), r.data("toggleMe") && !r.hasClass("is-active") && r.addClass("is-not-active"), i.addClass("is-not-active");
            this._listen()
        }, r.prototype._listen = function() {
            var t = this;
            e(this.config.context || n).on(":toggleActive/update", function(n, r) {
                t._updateClasses(e(r))
            })
        }, r.prototype._broadcast = function(e) {
            var t = this._getTargetEls(e);
            e.trigger(":toggleActive/click", {
                isActive: t.hasClass("is-active"),
                targets: t
            })
        }, r.prototype._handleClick = function(n) {
            var r = e(n.currentTarget);
            n.stopPropagation(), n.target.nodeName.toUpperCase() === "A" && !r.data("allowLinks") && n.preventDefault(), this.debounce || (this.debounce = t(e.proxy(this._toggle, this, r), 100)), this.debounce()
        }, r.prototype._toggle = function(e) {
            this._updateClasses(e), this._broadcast(e), this.debounce && (this.debounce = null)
        }, r.prototype._updateClasses = function(e) {
            var t = ["is-active", "is-not-active"];
            e.data("toggleClass") && t.push(e.data("toggleClass")), t = t.join(" "), e.data("toggleMe") && e.toggleClass(t), this._getTargetEls(e).toggleClass(t)
        }, r.prototype._getTargetEls = function(t) {
            return e(t.data("toggleTarget"))
        }, r
    }), define("lib/core/ad_sizes", [], function() {
        return {
            billboard: [{
                browser: [980, 0],
                ad_sizes: [
                    [970, 250],
                    [728, 90]
                ]
            }, {
                browser: [728, 0],
                ad_sizes: [728, 90]
            }, {
                browser: [0, 0],
                ad_sizes: [320, 50]
            }],
            leaderboard: [{
                browser: [980, 0],
                ad_sizes: [
                    [970, 66],
                    [728, 90]
                ]
            }, {
                browser: [728, 0],
                ad_sizes: [728, 90]
            }, {
                browser: [0, 0],
                ad_sizes: [320, 50]
            }],
            "leaderboard-content": [{
                browser: [728, 0],
                ad_sizes: [728, 90]
            }, {
                browser: [0, 0],
                ad_sizes: [320, 50]
            }],
            mpu: [{
                browser: [0, 0],
                ad_sizes: [300, 250]
            }],
            "mpu-double": [{
                browser: [728, 0],
                ad_sizes: [
                    [300, 600],
                    [300, 250]
                ]
            }, {
                browser: [0, 0],
                ad_sizes: [300, 250]
            }],
            "sponsor-tile": [{
                browser: [0, 0],
                ad_sizes: [276, 32]
            }],
            "sponsor-logo": [{
                browser: [0, 0],
                ad_sizes: [150, 120]
            }],
            "traffic-driver": [{
                browser: [0, 0],
                ad_sizes: [192, 380]
            }],
            background: [{
                browser: [980, 0],
                ad_sizes: [1, 1]
            }]
        }
    }), define("lib/core/ad_unit", [], function() {
        function e(e) {
            this.$target = e, this.$iframe = e.find("iframe"), this._init()
        }
        return e.prototype._init = function() {
            if (this.isEmpty()) {
                this.$target.trigger(":ads/hidden");
                return
            }
            this.$target.closest(".is-closed").removeClass("is-closed"), this.$target.trigger(":ads/visible");
            var e = this.$target.data("extension");
            e && this.extensions[e] && this.extensions[e].call(this)
        }, e.prototype.isEmpty = function() {
            return this.$target.css("display") === "none" ? !0 : this.$iframe.contents().find("img").width() === 1
        }, e.prototype.getType = function() {
            var e = /(leaderboard|mpu|trafficDriver|adSense|sponsorTile)/,
                t = this.$target.attr("class").match(e);
            return t ? t[1] : null
        }, e.prototype.refresh = function() {
            var e = this.$target.data("googleAdUnit");
            window.googletag.pubads().refresh([e])
        }, e.prototype.extensions = {
            stackMPU: function() {
                var e = this.$target.closest(".js-card-sponsored");
                this.$iframe.height() > e.height() && e.addClass("card--sponsored--double-mpu")
            }
        }, e
    }),
    function(e, t, n) {
        var r = this,
            i = "",
            s = 0,
            o = 0,
            u = ".adunit",
            a = {},
            f = !1,
            l, c = "googleAdUnit",
            h = function(t, n, r) {
                i = t, l = e(n), w(), p(r), e(function() {
                    d(), v()
                })
            },
            p = function(r) {
                a = {
                    setTargeting: {},
                    setCategoryExclusion: "",
                    setLocation: "",
                    enableSingleRequest: !0,
                    collapseEmptyDivs: "original",
                    refreshExisting: !0,
                    disablePublisherConsole: !1,
                    disableInitialLoad: !1,
                    noFetch: !1,
                    namespace: n,
                    sizeMapping: {}
                };
                if (typeof r.setUrlTargeting == "undefined" || r.setUrlTargeting) {
                    var i = m();
                    e.extend(!0, a.setTargeting, {
                        inURL: i.inURL,
                        URLIs: i.URLIs,
                        Query: i.Query,
                        Domain: t.location.host
                    })
                }
                e.extend(!0, a, r), a.googletag && t.googletag.cmd.push(function() {
                    e.extend(!0, t.googletag, a.googletag)
                })
            },
            d = function() {
                l.each(function() {
                    var n = e(this);
                    s++;
                    var r = y(n),
                        u = g(n, r, s),
                        f = b(n),
                        h = n.html();
                    n.html("").addClass("display-none"), t.googletag.cmd.push(function() {
                        var p, d = n.data(c);
                        d ? p = d : n.data("outofpage") ? p = t.googletag.defineOutOfPageSlot("/" + i + "/" + r, u).addService(t.googletag.pubads()) : p = t.googletag.defineSlot("/" + i + "/" + r, f, u).addService(t.googletag.pubads());
                        var v = n.data("targeting");
                        v && e.each(v, function(e, t) {
                            p.setTargeting(e, t)
                        });
                        var m = n.data("exclusions");
                        if (m) {
                            var g = m.split(","),
                                y;
                            e.each(g, function(t, n) {
                                y = e.trim(n), y.length > 0 && p.setCategoryExclusion(y)
                            })
                        }
                        var b = n.data("size-mapping");
                        if (b && a.sizeMapping[b]) {
                            var w = t.googletag.sizeMapping();
                            e.each(a.sizeMapping[b], function(e, t) {
                                w.addSize(t.browser, t.ad_sizes)
                            }), p.defineSizeMapping(w.build())
                        }
                        p.oldRenderEnded = p.oldRenderEnded || p.renderEnded, p.renderEnded = function() {
                            o++;
                            var t = n.css("display");
                            t === "none" && e.trim(h).length > 0 && a.collapseEmptyDivs === "original" && (n.show().html(h), t = "block display-original"), n.removeClass("display-none").addClass("display-" + t), typeof a.afterEachAdLoaded == "function" && a.afterEachAdLoaded.call(this, n), typeof a.afterAllAdsLoaded == "function" && o === s && a.afterAllAdsLoaded.call(this, l), p.oldRenderEnded()
                        }, n.data(c, p), typeof a.beforeEachAdLoaded == "function" && a.beforeEachAdLoaded.call(this, n)
                    })
                }), t.googletag.cmd.push(function() {
                    a.enableSingleRequest && t.googletag.pubads().enableSingleRequest(), e.each(a.setTargeting, function(e, n) {
                        t.googletag.pubads().setTargeting(e, n)
                    }), typeof a.setLocation == "object" && (typeof a.setLocation.latitude == "number" && typeof a.setLocation.longitude == "number" && typeof a.setLocation.precision == "number" ? t.googletag.pubads().setLocation(a.setLocation.latitude, a.setLocation.longitude, a.setLocation.precision) : typeof a.setLocation.latitude == "number" && typeof a.setLocation.longitude == "number" && t.googletag.pubads().setLocation(a.setLocation.latitude, a.setLocation.longitude));
                    if (a.setCategoryExclusion.length > 0) {
                        var n = a.setCategoryExclusion.split(","),
                            r;
                        e.each(n, function(n, i) {
                            r = e.trim(i), r.length > 0 && t.googletag.pubads().setCategoryExclusion(r)
                        })
                    }
                    a.collapseEmptyDivs && t.googletag.pubads().collapseEmptyDivs(), a.disablePublisherConsole && t.googletag.pubads().disablePublisherConsole(), a.disableInitialLoad && t.googletag.pubads().disableInitialLoad(), a.noFetch && t.googletag.pubads().noFetch(), t.googletag.enableServices()
                })
            },
            v = function() {
                l.each(function() {
                    var n = e(this),
                        r = n.data(c);
                    a.refreshExisting && r && n.hasClass("display-block") ? t.googletag.cmd.push(function() {
                        t.googletag.pubads().refresh([r])
                    }) : t.googletag.cmd.push(function() {
                        t.googletag.display(n.attr("id"))
                    })
                })
            },
            m = function() {
                var e = t.location.pathname.replace(/\/$/, ""),
                    n = new RegExp("/([^/]*)", "ig"),
                    r = e.match(n),
                    i = ["/"],
                    s = "";
                if (r && e !== "/") {
                    var o = "",
                        u = r.length;
                    if (u > 0)
                        for (var a = 0; a < u; a++) {
                            o = r[a], i.push(o);
                            for (var f = a + 1; f < u; f++) o += r[f], i.push(o);
                            a === 0 && (i.splice(-1, 1), s = o)
                        }
                    i.push(s)
                }
                i = i.reverse();
                var l = t.location.toString().replace(/\=/ig, ":").match(/\?(.+)$/),
                    c = RegExp.$1.split("&");
                return {
                    inURL: i,
                    URLIs: i[0],
                    Query: c
                }
            },
            g = function(e, t, n) {
                return e.attr("id") || e.attr("id", t + "-auto-gen-id-" + n).attr("id")
            },
            y = function(e) {
                var t = e.data("adunit") || a.namespace || e.attr("id");
                return typeof a.alterAdUnitName == "function" && (t = a.alterAdUnitName.call(this, t, e)), t
            },
            b = function(t) {
                var n = [],
                    r = t.data("dimensions");
                if (r) {
                    var i = r.split(",");
                    e.each(i, function(e, t) {
                        var r = t.split("x");
                        n.push([parseInt(r[0], 10), parseInt(r[1], 10)])
                    })
                } else n.push([t.width(), t.height()]);
                return n
            },
            w = function() {
                f = f || e('script[src*="googletagservices.com/tag/js/gpt.js"]').length;
                if (f) return;
                t.googletag = t.googletag || {}, t.googletag.cmd = t.googletag.cmd || [];
                var n = document.createElement("script");
                n.async = !0, n.type = "text/javascript", n.onerror = function() {
                    E()
                };
                var r = "https:" === document.location.protocol;
                n.src = (r ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(n, i), n.style.display === "none" && E()
            },
            E = function() {
                var n = t.googletag.cmd;
                setTimeout(function() {
                    var i = function(e, n, r, i) {
                        return t.googletag.ads.push(r), t.googletag.ads[r] = {
                            renderEnded: function() {},
                            addService: function() {
                                return this
                            }
                        }, t.googletag.ads[r]
                    };
                    t.googletag = {
                        cmd: {
                            push: function(e) {
                                e.call(r)
                            }
                        },
                        ads: [],
                        pubads: function() {
                            return this
                        },
                        noFetch: function() {
                            return this
                        },
                        disableInitialLoad: function() {
                            return this
                        },
                        disablePublisherConsole: function() {
                            return this
                        },
                        enableSingleRequest: function() {
                            return this
                        },
                        setTargeting: function() {
                            return this
                        },
                        collapseEmptyDivs: function() {
                            return this
                        },
                        enableServices: function() {
                            return this
                        },
                        defineSlot: function(e, t, n) {
                            return i(e, t, n, !1)
                        },
                        defineOutOfPageSlot: function(e, t) {
                            return i(e, [], t, !0)
                        },
                        display: function(e) {
                            return t.googletag.ads[e].renderEnded.call(r), this
                        }
                    }, e.each(n, function(e, n) {
                        t.googletag.cmd.push(n)
                    })
                }, 50)
            };
        e.dfp = e.fn.dfp = function(e, t) {
            t = t || {}, e === n && (e = i), typeof e == "object" && (t = e, e = t.dfpID || i);
            var r = this;
            return typeof this == "function" && (r = u), h(e, r, t), this
        }
    }(window.jQuery || window.Zepto || window.tire, window), define("dfp", function() {}), define("lib/core/ad_manager", ["jquery", "lib/core/ad_sizes", "lib/core/ad_unit"], function(e, t, n) {
        function i(t) {
            this.config = e.extend({}, r, t), this.$listener = e(this.config.listener), this._init()
        }
        var r = {
            adunits: ".adunit",
            listener: "#js-row--content",
            sizeMapping: t,
            layers: ["2009.lonelyplanet"],
            theme: "",
            template: "",
            topic: "",
            adThm: "",
            adTnm: "",
            continent: "",
            country: "",
            destination: ""
        };
        return i.prototype._init = function() {
            var e = this;
            this.pluginConfig = {
                dfpID: this.getNetworkID(),
                setTargeting: this.formatKeywords(this.config),
                namespace: this.config.layers.join("/"),
                sizeMapping: this.config.sizeMapping,
                collapseEmptyDivs: !0,
                enableSingleRequest: !1,
                afterEachAdLoaded: function(t) {
                    e._adCallback.call(e, t)
                }
            }, require(["dfp"], function() {
                e.load(), e.$listener.on(":ads/refresh :page/updated", function(t, n) {
                    e.refresh(n)
                }), e.$listener.on(":ads/reload :page/changed :lightbox/contentReady", function() {
                    e.pluginConfig.setTargeting = e.formatKeywords(window.lp.ads), e.load()
                })
            })
        }, i.prototype._adCallback = function(t) {
            var r = t.data("adUnit"),
                i;
            r || (i = new n(t), e.data(t, "adUnit", i)), i.isEmpty() || window.lp.analytics.api.trackEvent({
                category: "advertising",
                action: "page-load-impression",
                label: t.data().sizeMapping
            })
        }, i.prototype.formatKeywords = function(t) {
            var n = {
                theme: t.theme,
                template: t.template,
                topic: t.topic,
                thm: t.adThm,
                ctt: t.continent,
                cnty: t.country,
                dest: t.destination
            };
            window.Krux && (n.ksg = window.Krux.segments || "", n.kuid = window.Krux.user || ""), t.adTnm && (n.tnm = t.adTnm.replace(/\s/, "").split(","));
            if (t.keyValues && !e.isEmptyObject(t.keyValues))
                for (var r in t.keyValues) t.keyValues.hasOwnProperty(r) && (n[r] = t.keyValues[r]);
            return n
        }, i.prototype.getNetworkID = function() {
            var e = 9885583,
                t = this._networkCookie(),
                n = this._networkParam();
            return n ? e = n : t && (e = t), e
        }, i.prototype._networkCookie = function() {
            return window.lp.getCookie("lpNetworkCode")
        }, i.prototype._networkParam = function() {
            var e = window.location.search.match(/lpNetworkCode=([0-9]{4,8})/);
            return e ? e.pop() : null
        }, i.prototype.load = function() {
            var t = this;
            this.$adunits = e(this.config.adunits), this.$adunits.filter(function(e) {
                return t.$adunits.eq(e).data("googleAdUnit") === undefined
            }).dfp(this.pluginConfig)
        }, i.prototype.refresh = function(e) {
            var t, n, r;
            if (e)
                for (t = 0, n = this.$adunits.length; t < n; t++) r = this.$adunits.eq(t).data("adUnit"), r.getType() === e && r.refresh();
            else window.googletag.pubads().refresh()
        }, i
    }), define("lib/core/cookie_compliance", ["jquery"], function(e) {
        function t() {
            this.cookieName = "cookie-compliance", this.$element = e(".js-cookie-compliance"), this.init()
        }
        return t.prototype.init = function() {
            var e = this.$element;
            if (!this.mustShow()) return;
            e.addClass("is-open").removeClass("is-closed"), e.on("click", ".js-close", function() {
                e.removeClass("is-open").addClass("is-closed")
            }), this.set()
        }, t.prototype.mustShow = function() {
            this.inEurope() && !this.seen()
        }, t.prototype.inEurope = function() {
            var e = window.lp.getCookie("lpCurrency");
            return e == "GBP" || e == "EUR"
        }, t.prototype.seen = function() {
            return window.lp.supports.localStorage ? localStorage.getItem(this.cookieName) : window.lp.getCookie(this.cookieName)
        }, t.prototype.set = function() {
            window.lp.supports.localStorage ? localStorage.setItem(this.cookieName, !0) : (document.cookie += document.cookie.length ? ";" : "", document.cookie += this.cookieName + "=true")
        }, t
    }),
    function() {
        define("lib/components/select_group_manager", ["jquery"], function(e) {
            var t;
            return t = function() {
                function n(n) {
                    this.selectContainers = e(n || t), this.addHandlers()
                }
                var t;
                return t = ".js-wrapper", n.prototype.addHandlers = function() {
                    return this.selectContainers.on("focus", ".js-select", function(e) {
                        return function(t) {
                            return e.getOverlay(t.target).addClass("is-selected")
                        }
                    }(this)), this.selectContainers.on("blur", ".js-select", function(e) {
                        return function(t) {
                            return e.getOverlay(t.target).removeClass("is-selected")
                        }
                    }(this)), this.selectContainers.on("keyup", ".js-select", function(t) {
                        return function(t) {
                            return e(t.target).trigger("change")
                        }
                    }(this)), this.selectContainers.on("change", ".js-select", function(t) {
                        return function(n) {
                            n.preventDefault(), t.updateOverlay(n.target);
                            if (e(n.target).data("form-submit")) return t.submit(n.target)
                        }
                    }(this))
                }, n.prototype.getOverlay = function(t) {
                    return e(t).closest(".js-select-group-manager").find(".js-select-overlay")
                }, n.prototype.updateOverlay = function(t) {
                    var n;
                    return n = e(t).find("option:selected"), this.getOverlay(t).text(n.text())
                }, n.prototype.submit = function(t) {
                    if (e(t).val() !== "") return e(t).closest("form").submit()
                }, n
            }()
        })
    }.call(this), define("autocomplete", ["jquery"], function(e) {
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        });
        var t, n, r;
        t = function(t) {
            this.config = {
                el: "",
                threshold: 0,
                limit: 0,
                fetch: this.defaultFetch,
                debounceTime: 300,
                template: {
                    elementWrapper: "<div class='js-autocomplete'></div>",
                    resultsWrapper: "<div class='autocomplete'></div>",
                    resultsContainer: "<ul class='autocomplete__results'></ul>",
                    resultsItemHighlightClass: "autocomplete__results__item--highlight",
                    resultsItem: "<li class='autocomplete__results__item' data-company='{{Company}}'><strong>{{Company}}</strong><br/><small>{{City}}, {{Country}}</small></li>",
                    searchTermHighlightClass: "autocomplete__search-term--highlight",
                    hiddenClass: "is-hidden"
                },
                onItem: this.defaultOnItem
            };
            var n = {
                results: [],
                searchTerm: "",
                displayed: !1,
                resultIndex: -1,
                specialkeys: {
                    9: "tab",
                    27: "esc",
                    13: "enter",
                    38: "up",
                    40: "down"
                }
            };
            e.extend(this, n), e.extend(!0, this.config, t), this.$el = e(this.config.el), this.$resultsItemList = e(), this.init()
        }, n = {
            init: function() {
                this.$el.attr("autocomplete", "off"), this.wrapEl(), this.setupListeners()
            },
            wrapEl: function() {
                this.$el.wrap(this.config.template.elementWrapper).after(e(this.config.template.resultsWrapper).addClass(this.config.template.hiddenClass)), this.$wrapper = this.$el.parent(), this.$resultsPanel = this.$el.next()
            },
            showResultsPanel: function() {
                this.$resultsItemList.highlight(this.searchTerm.trim().split(" "), {
                    element: "span",
                    className: this.config.template.searchTermHighlightClass
                }), this.$resultsPanel.removeClass(this.config.template.hiddenClass), this.displayed = !0
            },
            hideResultsPanel: function() {
                this.$resultsPanel.addClass(this.config.template.hiddenClass), this.displayed = !1
            },
            clearResults: function() {
                this.results = [], this.$resultsPanel.html(""), this.hideResultsPanel()
            },
            renderList: function() {
                var t = e(this.config.template.resultsContainer);
                return this.$resultsItemList = e(this.processTemplate(this.results)), t.html(this.$resultsItemList)
            },
            populateResultPanel: function() {
                var e = this.renderList();
                this.$resultsPanel.html(e), this.showResultsPanel()
            },
            changeIndex: function(e) {
                var t = !1;
                return e === "up" ? this.resultIndex > 0 && this.results.length > 1 && (this.resultIndex--, t = !0) : e === "down" && this.resultIndex < this.results.length - 1 && this.results.length > 1 && (this.resultIndex++, t = !0), t
            },
            setupListeners: function() {
                var t = this;
                this.$wrapper.on("keypress", function(e) {
                    e.which === 13 && t.displayed && t.resultIndex > -1 && e.preventDefault()
                }), this.$wrapper.on("keyup", function(e) {
                    t.processTyping(e)
                }), this.$wrapper.on("keydown", function() {
                    clearTimeout(r)
                });
                var n = e(t.config.template.resultsItem)[0].tagName;
                this.$resultsPanel.on("mousedown", n, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.config.onItem(this, e), t.clearResults()
                }), this.$resultsPanel.on("mouseenter", n, function() {
                    t.resultIndex = e(this).index(), t.highlightResult()
                }), this.$el.on("blur", function() {
                    t.visible || t.clearResults()
                })
            },
            callFetch: function(e, t) {
                var n = this;
                this.config.fetch(e, function(e) {
                    e.length > 0 ? (n.config.limit > 0 ? n.results = e.length > n.config.limit ? e.slice(0, n.config.limit) : e : n.results = e, t()) : n.clearResults()
                })
            },
            processTyping: function(e) {
                var t = this;
                if (e.target.value) {
                    var n = this.specialkeys[e.keyCode];
                    n && this.displayed ? this.processSpecialKey(n, e) : n || t.debounceTyping(function() {
                        t.searchTerm = e.target.value.trim(), t.processSearch(t.searchTerm)
                    })
                } else this.clearResults()
            },
            debounceTyping: function(e) {
                var t = this;
                clearTimeout(r), r = setTimeout(function() {
                    e()
                }, t.config.debounceTime)
            },
            processSearch: function(e) {
                var t = this;
                this.resultIndex = -1, e && e.length >= this.config.threshold && this.callFetch(e, function() {
                    t.populateResultPanel()
                })
            },
            processSpecialKey: function(e, t) {
                var n = !1;
                switch (e) {
                    case "up":
                        n = this.changeIndex("up");
                        break;
                    case "down":
                        n = this.changeIndex("down");
                        break;
                    case "enter":
                        this.selectResult();
                        break;
                    case "esc":
                        this.clearResults();
                        break;
                    default:
                }
                n && this.highlightResult()
            },
            highlightResult: function() {
                this.$resultsItemList.removeClass(this.config.template.resultsItemHighlightClass).eq(this.resultIndex).addClass(this.config.template.resultsItemHighlightClass)
            },
            selectResult: function() {
                var e = this.$resultsItemList[this.resultIndex];
                e && (this.config.onItem(e), this.clearResults())
            },
            processTemplate: function(e) {
                var t = e.length,
                    n = "",
                    r = "";
                for (var i = 0; i < t; i++) n = this.renderTemplate(this.config.template.resultsItem, e[i]), r += n;
                return r
            },
            renderTemplate: function(e, t) {
                for (var n in t) e = e.replace(new RegExp("{{" + n + "}}", "gm"), t[n]);
                return e
            },
            defaultOnItem: function(t) {
                var n = e(t).text();
                e(this.el).val(n)
            },
            defaultFetch: function(e, t) {
                t(["a", "b", "c"])
            }
        };
        for (var i in n) t.prototype[i] = n[i];
        return e.extend({
            highlight: function(t, n, r, i) {
                if (t.nodeType === 3) {
                    var s = t.data.match(n);
                    if (s) {
                        var o = document.createElement(r || "span");
                        o.className = i || "highlight";
                        var u = t.splitText(s.index);
                        u.splitText(s[0].length);
                        var a = u.cloneNode(!0);
                        return o.appendChild(a), u.parentNode.replaceChild(o, u), 1
                    }
                } else if (t.nodeType === 1 && t.childNodes && !/(script|style)/i.test(t.tagName) && (t.tagName !== r.toUpperCase() || t.className !== i))
                    for (var f = 0; f < t.childNodes.length; f++) f += e.highlight(t.childNodes[f], n, r, i);
                return 0
            }
        }), e.fn.highlight = function(t, n) {
            var r = {
                className: "highlight",
                element: "span",
                caseSensitive: !1,
                wordsOnly: !1
            };
            e.extend(r, n), t.constructor === String && (t = [t]), t = e.grep(t, function(e, t) {
                return e != ""
            }), t = e.map(t, function(e, t) {
                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            });
            if (t.length == 0) return this;
            var i = r.caseSensitive ? "" : "i",
                s = "(" + t.join("|") + ")";
            r.wordsOnly && (s = "\\b" + s + "\\b");
            var o = new RegExp(s, i);
            return this.each(function() {
                e.highlight(this, o, r.element, r.className)
            })
        }, t
    }), define("lib/core/nav_search", ["jquery", "autocomplete"], function(e, t) {
        function n() {
            var n = ".js-primary-search",
                r = e(n);
            r.on("focus", function() {
                e(".js-search-icon").addClass("active-search")
            }).on("blur", function() {
                e(".js-search-icon").removeClass("active-search")
            }), new t({
                el: n,
                threshold: 0,
                limit: 10,
                template: {
                    elementWrapper: "<div class='js-autocomplete primary-search-autocomplete'></div>",
                    resultsWrapper: "<div class='autocomplete'></div>",
                    resultsContainer: "<div class='autocomplete__results icon--tapered-arrow-up--after icon--white--after'></div>",
                    resultsItemHighlightClass: "autocomplete__results__item--highlight",
                    resultsItem: "<a class='autocomplete__results__item icon--{{type}}--before' href='{{url}}'>{{name}}</a>",
                    searchTermHighlightClass: "autocomplete__search-term--highlight",
                    hiddenClass: "is-hidden"
                },
                fetch: function(t, n) {
                    e.ajax({
                        url: "//www.lonelyplanet.com/search.json?q=" + t,
                        dataType: "json",
                        success: function(e) {
                            var i = "://",
                                s = e.length,
                                o, u;
                            if (e && s)
                                while (s) o = e[--s], u = o.slug.indexOf(i), o.url = u > -1 && u < 5 ? o.slug : "http://www.lonelyplanet.com/" + o.slug;
                            n(e), r.closest(".js-autocomplete").find(".autocomplete__results").append("<a class='btn btn--small backup-button' href='http://www.lonelyplanet.com/search?q=" + t + "'>See all results</a>")
                        }
                    })
                },
                onItem: this.onItem
            })
        }
        return n.prototype.onItem = function(t) {
            window.location = e(t).attr("href")
        }, n
    }), define("lib/core/feature_detect", ["jquery"], function(e) {
        var t = {};
        t.cssmasks = function() {
            return document.body.style["-webkit-mask-repeat"] != null
        }, t.cssfilters = function() {
            return document.body.style.webkitFilter != null && document.body.style.filter != null
        }, t.placeholder = function() {
            return "placeholder" in document.createElement("input")
        }, t["pointer-events"] = function() {
            var e = document.createElement("smile");
            return e.style.cssText = "pointer-events: auto", e.style.pointerEvents == "auto"
        }, t["3d"] = function() {
            var e = document.createElement("p"),
                n = t.transform(),
                r;
            return document.body.insertBefore(e, document.body.firstChild), n && (e.style[n.css] = "translate3d(1px,1px,1px)", r = window.getComputedStyle(e).getPropertyValue(n.css)), document.body.removeChild(e), r != null && r.length > 0 && r != "none"
        }, t.touch = function() {
            return "ontouchstart" in window && "maybe"
        }, t.transitionend = function() {
            var e = {
                    webkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    transition: "transitionend"
                },
                t;
            for (t in e)
                if (t in document.documentElement.style) return e[t];
            return !1
        }, t.requestAnimationFrame = function() {
            var e = "equestAnimationFrame";
            return window["r" + e] || window["webkitR" + e] || window["mozR" + e] || window["msR" + e] || !1
        }, t.cancelAnimationFrame = function() {
            var e = "ancelAnimationFrame";
            return window["c" + e] || window["webkitC" + e] || window["mozC" + e] || window["msC" + e] || !1
        }, t.transform = function() {
            var e = {
                    webkitTransform: "-webkit-transform",
                    MozTransform: "-moz-transform",
                    msTransform: "-ms-transform",
                    transform: "transform"
                },
                t;
            for (t in e)
                if (t in document.documentElement.style) return {
                    js: t,
                    css: e[t]
                }
        };
        var n, r;
        for (r in t) n = e.camelCase && e.camelCase(r) || r, window.lp.supports[n] = t[r](), window.lp.supports[n] ? document.documentElement.className += " supports-" + r : document.documentElement.className += " no-" + r + "-support";
        return window.lp.supportsAvailable || (window.lp.supportsAvailable = !0, e(document).trigger(":featureDetect/available")), t
    }), define("lib/core/base", ["jquery", "lib/page/swipe", "lib/core/authenticator", "lib/core/shopping_cart", "lib/components/toggle_active", "lib/core/ad_manager", "lib/core/cookie_compliance", "lib/components/select_group_manager", "lib/core/nav_search", "lib/core/feature_detect"], function(e, t, n, r, i, s, o, u, a) {
        function f() {
            new o, new u, new t, new a, new r, new i, window.lp && window.lp.ads && new s(window.lp.ads), this.listen()
        }
        return f.prototype.listen = function() {
            e("#js-primary-nav").on("click", ".js-nav-item", function() {
                window.s.linkstacker(e(this).text())
            }), e("#js-primary-nav").on("click", ".js-nav-cart", function() {
                window.s.linkstacker("shopping-cart")
            }), e("#js-secondary-nav").on("click", ".js-nav-item", function() {
                window.s.linkstacker(e(this).text() + "-sub")
            }), e("#js-breadcrumbs").on("click", ".js-nav-item", function() {
                window.s.linkstacker("breadcrumbs")
            }), e("#js-footer-nav").on("click", ".js-nav-item", function() {
                window.s.linkstacker("footer")
            })
        }, f
    }), define("lib/page/scroll_perf", ["jquery", "lib/utils/debounce"], function(e, t) {
        var n = function() {
            this.cover = document.getElementById("js-pointer-cover");
            if (!this.cover) return;
            return this.scollCallback = t(this._scrollEnd.bind(this), 100), this.scrolling = !1, this.clicked = !1, this.position = [0, 0], window.lp.supportsAvailable ? this._init() : e(document).on(":featureDetect/available", this._init.bind(this)), this
        };
        return n.prototype._init = function() {
            window.lp.supports.pointerEvents && (this.cover.style.display = "block", this._bindEvents())
        }, n.prototype._onScroll = function() {
            this.scrolling || this._scrollStart(), this.scollCallback()
        }, n.prototype._scrollStart = function() {
            this.cover.style.pointerEvents = "auto", this.scrolling = !0
        }, n.prototype._scrollEnd = function() {
            this.scrolling = !1, this.cover.style.pointerEvents = "none", this.clicked && (this._proxyClick(this.position), this.clicked = !1)
        }, n.prototype._onClick = function(t) {
            t.target === this.cover && !t.homemade && (this.position = [t.clientX, t.clientY], this.clicked = !0)
        }, n.prototype._elementFromPoint = function(t) {
            return document.elementFromPoint.apply(document, t)
        }, n.prototype._proxyClick = function(t) {
            var n = document.createEvent("MouseEvent"),
                r = this._elementFromPoint(t);
            return n.initMouseEvent("click", !0, !0, window, null, this.position[0], this.position[1], 0, 0, !1, !1, !1, !1, 0, null), n.homemade = !0, r.dispatchEvent(n), r
        }, n.prototype._bindEvents = function() {
            window.addEventListener("scroll", this._onScroll.bind(this)), document.addEventListener("click", this._onClick.bind(this))
        }, n
    }),
    function(e, t) {
        e._FS = function() {
            function t(e) {
                e = e || {}, this.remoteUrl = e.remoteUrl || "//f.staticlp.com", this.log_max_size = e.log_max_size || 10, this.log_min_size = e.log_min_size || 3, this.log_max_interval = e.log_max_interval || 1500, this.debug = e.debug || !1, this.u = e.u || Math.random() * 1e17, this.isCapable() && this._init(e.events)
            }
            return t.prototype.isCapable = function() {
                return !!Function.prototype.bind && !!document.addEventListener
            }, t.prototype.isRumCapable = function() {
                return !!(e.performance || e.msPerformance || e.webkitPerformance || e.mozPerformance)
            }, t.prototype.isNowCapable = function() {
                return this.isRumCapable() && !!e.performance.now
            }, t.prototype.emptyBuffer = function() {
                this.buffer = []
            }, t.prototype.log = function(e) {
                this.isCapable() && (this.debug && console.log("log:", e), this.buffer.push(e), this._flushIfFull())
            }, t.prototype.time = function(t) {
                this.isNowCapable() && (t.t = e.performance.now(), this.log(t))
            }, t.prototype.flush = function() {
                this.flushing || (this.debug && console.log("flushing:", this.buffer), this.flushing = !0, this.resetTimer(this), this.buffer.push({
                    u: this.u
                }), this._sendData(this.buffer), this.emptyBuffer(), this._tidyUp(), this.flushing = !1)
            }, t.prototype.resetTimer = function() {
                e.clearInterval(this.interval), e.clearTimeout(this.timeout), this.timeout = e.setTimeout(this._startPoll.bind(this), this.log_max_interval)
            }, t.prototype._flushIfFull = function() {
                this.buffer.length >= this.log_max_size && this.flush()
            }, t.prototype._flushIfEnough = function() {
                this.buffer.length >= this.log_min_size && this.flush()
            }, t.prototype._sendData = function(e) {
                e.length > 0 && this._appendImage.call(this, e)
            }, t.prototype._appendImage = function(e) {
                return this.image = document.createElement("img"), this.image.style.visibility = "hidden", this.image.src = this.remoteUrl + "?" + this._serialize(e), document.body.appendChild(this.image)
            }, t.prototype._tidyUp = function() {
                this.image.parentNode && this.image.parentNode.removeChild(this.image)
            }, t.prototype._serialize = function(e) {
                var t = [],
                    n, r, i, s = e.length;
                for (n in e) {
                    i = e[n];
                    for (r in i)
                        if (i.hasOwnProperty(r))
                            if (typeof i[r] == "object")
                                for (var o in i[r]) t[t.length] = encodeURIComponent(o) + "=" + encodeURIComponent(i[r][o]);
                            else t[t.length] = encodeURIComponent(r) + "=" + encodeURIComponent(i[r])
                }
                return t.join("&").replace(/%20/g, "+")
            }, t.prototype._startPoll = function() {
                this.interval = e.setInterval(this._flushIfEnough.bind(this), this.log_max_interval)
            }, t.prototype._processRum = function() {
                var t = e.performance.timing,
                    n = t.navigationStart,
                    r, i = {};
                for (r in t) i[r] = t[r] >= n ? t[r] - n : t[r];
                return i
            }, t.prototype._logRumAndFlush = function() {
                this.log(this._processRum(), !0), this.flush()
            }, t.prototype._init = function(t) {
                this.emptyBuffer(), this.resetTimer(), t && t.length > 0 && t.map(function(e) {
                    this.log(e)
                }, this), this.isRumCapable() && e.addEventListener("unload", this._logRumAndFlush.bind(this)), this.flush()
            }, t
        }(), typeof define == "function" && define("flamsteed", [], function() {
            return e._FS
        })
    }(this),
    function(e) {
        "use awesome";
        try {
            var t = function(e) {
                    function t(e) {
                        e = e || navigator.userAgent;
                        var t = e.match(/Trident\/([\d.]+)/);
                        return t && "7.0" === t[1] ? 11 : (e = e.match(/MSIE ([\d.]+)/)) ? parseInt(e[1], 10) : !1
                    }
                    return {
                        slice: Array.prototype.slice,
                        uuid: function() {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" == e ? t : t & 3 | 8).toString(16)
                            })
                        },
                        reduce: function(e) {
                            try {
                                return "object" == typeof e || "function" == typeof e ? e.toString() : e
                            } catch (t) {
                                return "unknown"
                            }
                        },
                        defer: function(e, t) {
                            setTimeout(function() {
                                e.apply(t)
                            })
                        },
                        isoNow: function() {
                            function e(e) {
                                return e = String(e), 1 === e.length && (e = "0" + e), e
                            }
                            var t = new Date;
                            return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds()) + "." + String((t.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                        },
                        isBrowserIE: t,
                        isBrowserSupported: function(e) {
                            return e = e || navigator.userAgent, e = t(e), !e || 8 < e
                        },
                        contains: function(e, t) {
                            var n;
                            for (n = 0; n < e.length; n++)
                                if (e[n] === t) return !0;
                            return !1
                        }
                    }
                }(this),
                n = function(n) {
                    var r = {
                        endpoint: "https://my.trackjs.com/capture",
                        cdnHost: "dl1d2m8ri9v3j.cloudfront.net",
                        version: "1.2.5.0",
                        trackGlobal: !0,
                        trackAjaxFail: !0,
                        trackConsoleError: !0,
                        inspectors: !0,
                        consoleDisplay: !0,
                        globalAlias: !0,
                        userId: void 0,
                        sessionId: void 0,
                        ignore: [],
                        mergeCustomerConfig: function(e) {
                            if (e) {
                                var t = "userId sessionId trackGlobal trackAjaxFail trackAjaxFail trackConsoleError inspectors consoleDisplay globalAlias ignore".split(" "),
                                    n, i;
                                for (n = 0; n < t.length; n++) i = t[n], void 0 !== e[i] && (r[i] = e[i])
                            }
                        },
                        initialize: function() {
                            e._trackJs && r.mergeCustomerConfig(e._trackJs), t.isBrowserIE() && (r.endpoint = "//" + r.endpoint.split("://")[1])
                        }
                    };
                    return r
                }(this),
                r = function(e) {
                    function r(e, n) {
                        h[e] || (h[e] = []);
                        var r = t.uuid();
                        return h[e].push({
                            key: r,
                            value: n
                        }), 10 < h[e].length && (h[e] = h[e].slice(Math.max(h[e].length - 10, 0))), r
                    }

                    function i(t, n, r) {
                        function i(t, n) {
                            var r = new e.XMLHttpRequest;
                            return "withCredentials" in r ? (r.open(t, n), r.setRequestHeader("Content-Type", "text/plain")) : "undefined" != typeof e.XDomainRequest ? (r = new e.XDomainRequest, r.open(t, n)) : r = null, r
                        }
                        try {
                            if (!p) {
                                var s = i(t, n);
                                s.onreadystatechange = function(e) {
                                    4 === s.readyState && 200 !== s.status && (p = !0)
                                }, s.tjs = void 0, s.send(JSON.stringify(r))
                            }
                        } catch (o) {
                            p = !0
                        }
                    }

                    function s() {
                        var e = (new Date).getTime();
                        d++;
                        if (m + 1e3 >= e) {
                            if (m = e, 10 < d) return v++, !0
                        } else d = 0, m = e;
                        return !1
                    }

                    function o() {
                        var e = v;
                        return v = 0, e
                    }

                    function u(r, u, a, f, l, h) {
                        r = {
                            column: l,
                            entry: r,
                            file: a,
                            line: f,
                            url: e.location.toString(),
                            message: t.reduce(u),
                            stack: h,
                            timestamp: t.isoNow()
                        };
                        for (var p in c) c.hasOwnProperty(p) && (u = c[p], "function" == typeof u.onTransmit && (r[p] = u.onTransmit()));
                        if (!s()) {
                            r.throttled = o();
                            e: {
                                for (p = 0; p < n.ignore.length; p++)
                                    if (n.ignore[p] && n.ignore[p].test && n.ignore[p].test(r.message)) {
                                        p = !0;
                                        break e
                                    }
                                p = !1
                            }
                            p || i("POST", n.endpoint, r)
                        }
                    }

                    function a(e) {
                        var n = t.slice.call(arguments, 1),
                            r;
                        for (r in e) "function" == typeof e[r] && (t.contains(n, r) || function() {
                            var n = e[r];
                            e[r] = function() {
                                try {
                                    var e = t.slice.call(arguments, 0);
                                    return n.apply(this, e)
                                } catch (r) {
                                    throw l("catch", r), r
                                }
                            }
                        }())
                    }

                    function f(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) {
                                var n = e[t];
                                "function" == typeof n.onInitialize && n.onInitialize()
                            }
                    }

                    function l(e, t) {
                        u(e, t.message, t.fileName, t.lineNumber, void 0, t.stack)
                    }
                    var c = {},
                        h = {},
                        p = !1,
                        d = 0,
                        v = 0,
                        m = (new Date).getTime();
                    return {
                        registerModule: function(e, t) {
                            return e ? (c[e] = {
                                onInitialize: t.onInitialize,
                                onTransmit: t.onTransmit,
                                forTest: t.forTest
                            }, !0) : !1
                        },
                        getModule: function(e) {
                            return c.hasOwnProperty(e) ? c[e] : !1
                        },
                        addLogEntry: r,
                        getLogEntry: function(e, t) {
                            h[e] || (h[e] = []);
                            for (var n = 0; n < h[e].length; n++)
                                if (h[e][n].key === t) return h[e][n].value;
                            return !1
                        },
                        flushLog: function(e) {
                            h[e] || (h[e] = []);
                            for (var t = [], n = 0; n < h[e].length; n++) t.push(h[e][n].value);
                            return h[e].length = 0, t
                        },
                        updateLogEntry: function(e, t, n) {
                            h[e] || (h[e] = []);
                            for (var r = 0; r < h[e].length; r++)
                                if (h[e][r].key === t) return h[e][r].value = n, !0;
                            return !1
                        },
                        transmit: u,
                        transmitErrorObject: l,
                        initialize: function() {
                            n.initialize(), f(c), n.trackGlobal && n.inspectors && (e.onerror = function(e, t, n, r, i) {
                                i = i || {}, u("global", e, t, n, r, i.stack)
                            }), e.trackJs = {
                                track: function(e) {
                                    "[object Error]" === Object.prototype.toString.call(e) ? l("direct", e) : u("direct", e)
                                },
                                attempt: function(e, n) {
                                    try {
                                        var r = t.slice.call(arguments, 2);
                                        return e.apply(n || this, r)
                                    } catch (i) {
                                        throw l("catch", i), i
                                    }
                                },
                                watch: function(e, n) {
                                    return function() {
                                        try {
                                            var r = t.slice.call(arguments, 0);
                                            return e.apply(n || this, r)
                                        } catch (i) {
                                            throw l("catch", i), i
                                        }
                                    }
                                },
                                watchAll: a,
                                trackAll: a,
                                configure: n.mergeCustomerConfig,
                                version: n.version
                            };
                            var i, s = ["log", "debug", "info", "warn", "error"];
                            for (i = 0; i < s.length; i++)(function(i) {
                                e.trackJs[i] = function() {
                                    var e = t.slice.call(arguments);
                                    r("c", {
                                        timestamp: t.isoNow(),
                                        severity: i,
                                        message: t.reduce(e)
                                    }), "error" === i && n.trackConsoleError && ("[object Error]" === Object.prototype.toString.call(e[0]) ? l("console", e[0]) : u("console", t.reduce(e)))
                                }
                            })(s[i]);
                            n.globalAlias && (e.track = e.trackJs.track)
                        },
                        forTest: {
                            initializeModules: f,
                            throttle: s,
                            getThrottledCount: o,
                            wrap: a
                        }
                    }
                }(this);
            (function(e) {
                function a(e, t) {
                    return this.tjs = {
                        method: e[0],
                        url: e[1]
                    }, t.apply(this, e)
                }

                function f(i, s) {
                    function o(e) {
                        if (e.tjs) {
                            var n = r.getLogEntry("n", e.tjs.logId);
                            n && (n.completedOn = t.isoNow(), n.statusCode = 1223 == e.status ? 204 : e.status, n.statusText = 1223 == e.status ? "No Content" : e.statusText, r.updateLogEntry("n", e.tjs.logId, n), e.tjs = void 0)
                        }
                    }

                    function u(e) {
                        n.trackAjaxFail && 400 <= e.status && 1223 != e.status && r.transmit("ajax", e.status + " " + e.statusText)
                    }
                    if (!this.tjs) return s.apply(this, i);
                    this.tjs.logId = r.addLogEntry("n", {
                        startedOn: t.isoNow(),
                        method: this.tjs.method,
                        url: this.tjs.url
                    }), e.ProgressEvent && this.addEventListener && this.addEventListener("readystatechange", function(e) {
                        4 === this.readyState && o(this)
                    }, !0);
                    if (this.addEventListener) this.addEventListener("load", function(e) {
                        o(this), u(this)
                    }, !0);
                    else if ("[object XDomainRequest]" === this.toString()) {
                        var a = this.onload;
                        this.onload = function(e) {
                            o(this), "function" == typeof a && a.apply(this, arguments)
                        };
                        var f = this.onerror;
                        this.onerror = function(e) {
                            o(this), "function" == typeof f && f.apply(this, arguments)
                        }
                    } else {
                        var l = this.onreadystatechange,
                            c = function(e) {
                                4 === this.readyState && (o(this), u(this)), "function" == typeof l && l.apply(this, arguments)
                            };
                        this.onreadystatechange = c, t.defer(function() {
                            this.onreadystatechange !== c && (l = this.onreadystatechange, this.onreadystatechange = c)
                        }, this)
                    }
                    return s.apply(this, i)
                }
                var i, s, o, u;
                r.registerModule("network", {
                    onInitialize: function() {
                        t.isBrowserSupported() && n.inspectors && (o = e.XMLHttpRequest.prototype.open, u = e.XMLHttpRequest.prototype.send, e.XMLHttpRequest.prototype.open = function() {
                            var e = t.slice.call(arguments, 0);
                            return a.call(this, e, o)
                        }, e.XMLHttpRequest.prototype.send = function() {
                            var e = t.slice.call(arguments, 0);
                            return f.call(this, e, u)
                        }, e.XDomainRequest && (i = e.XDomainRequest.prototype.open, s = e.XDomainRequest.prototype.send, e.XDomainRequest.prototype.open = function() {
                            var e = t.slice.call(arguments, 0);
                            return a.call(this, e, i)
                        }, e.XDomainRequest.prototype.send = function() {
                            var e = t.slice.call(arguments, 0);
                            return f.call(this, e, s)
                        }))
                    },
                    onTransmit: function() {
                        return r.flushLog("n")
                    }
                })
            })(this),
            function(e) {
                function i(e, t, n) {
                    for (var r = {}, i = e.attributes, s = 0; s < i.length; s++) "value" !== i[s].name.toLowerCase() && (r[i[s].name] = i[s].value);
                    return i = e.getBoundingClientRect(), {
                        tag: e.tagName.toLowerCase(),
                        attributes: r,
                        position: {
                            left: i.left,
                            top: i.top,
                            width: i.width,
                            height: i.height
                        },
                        value: t ? {
                            length: t.length,
                            pattern: "" === t || void 0 === t ? "empty" : /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(t) ? "email" : /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(t) || /^(\d{4}[\/\-](0?[1-9]|1[012])[\/\-]0?[1-9]|[12][0-9]|3[01])$/.test(t) ? "date" : /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(t) ? "usphone" : /^\s*$/.test(t) ? "whitespace" : /^\d*$/.test(t) ? "numeric" : /^[a-zA-Z]*$/.test(t) ? "alpha" : /^[a-zA-Z0-9]*$/.test(t) ? "alphanumeric" : "characters",
                            checked: n
                        } : void 0
                    }
                }

                function s(e, t, n) {
                    if (e.tagName.toLowerCase() !== t.toLowerCase()) return !1;
                    if (!n) return !0;
                    e = (e.getAttribute("type") || "").toLowerCase();
                    for (t = 0; t < n.length; t++)
                        if (n[t] === e) return !0;
                    return !1
                }

                function o(e, n, s, o) {
                    r.addLogEntry("v", {
                        timestamp: t.isoNow(),
                        action: n,
                        element: i(e, s, o)
                    })
                }

                function u(e) {
                    (e = e.target || document.elementFromPoint(e.clientX, e.clientY)) && e.tagName && (s(e, "input", ["checkbox"]) && o(e, "input", e.value, e.checked), s(e, "input", ["radio"]) && o(e, "input", e.value, e.checked), (s(e, "a") || s(e, "button") || s(e, "input", ["button", "submit"])) && o(e, "click"))
                }

                function a(e) {
                    if ((e = e.target || document.elementFromPoint(e.clientX, e.clientY)) && e.tagName && (s(e, "textarea") && o(e, "input", e.value), s(e, "select") && e.options && 0 < e.options.length && null != e.options[e.selectedIndex] && o(e, "input", e.options[e.selectedIndex].value), s(e, "input") && !s(e, "input", ["button", "submit", "hidden", "checkbox", "radio"]))) {
                        var t = (e.getAttribute("type") || "").toLowerCase();
                        o(e, "input", "password" === t ? void 0 : e.value)
                    }
                }
                r.registerModule("visitor", {
                    onInitialize: function() {
                        n.inspectors && (document.addEventListener ? (document.addEventListener("click", u, !0), document.addEventListener("blur", a, !0)) : document.attachEvent && (document.attachEvent("onclick", u), document.attachEvent("onfocusout", a)))
                    },
                    onTransmit: function() {
                        return r.flushLog("v")
                    },
                    forTest: {
                        onDocumentClicked: u,
                        onInputChanged: a
                    }
                })
            }(this),
            function(e) {
                function i() {
                    if (e._trackJs && e._trackJs.customer) return e._trackJs.customer;
                    var t = document.getElementsByTagName("script");
                    return t[t.length - 1].getAttribute("data-customer")
                }

                function s(e) {
                    if (e.token) {
                        var r = new Image;
                        setTimeout(function() {
                            r.src = "//" + n.cdnHost + "/usage.gif?customer=" + e.token + "&correlationId=" + e.correlationId + "&x=" + t.uuid()
                        }, 0)
                    }
                }
                var o = {};
                r.registerModule("customer", {
                    onInitialize: function() {
                        o.token = i();
                        var e = document.cookie.replace(/(?:(?:^|.*;\s*)TJS\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                        e || (e = t.uuid(), document.cookie = "TJS=" + e + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"), o.correlationId = e, s(o)
                    },
                    onTransmit: function() {
                        return o.userId = n.userId, o.sessionId = n.sessionId, o
                    },
                    forTest: {
                        getCustomerToken: i
                    }
                })
            }(this),
            function(e) {
                function i(e, n) {
                    var i = e || {},
                        s = i.log || function() {},
                        o = ["log", "debug", "info", "warn", "error"],
                        u;
                    for (u = 0; u < o.length; u++)(function(e) {
                        var o = i[e] || s;
                        i[e] = function() {
                            var i = t.slice.call(arguments);
                            r.addLogEntry("c", {
                                timestamp: t.isoNow(),
                                severity: e,
                                message: t.reduce(i)
                            }), "error" === e && n.trackConsoleError && ("[object Error]" === Object.prototype.toString.call(i[0]) ? r.transmitErrorObject("console", i[0]) : r.transmit("console", t.reduce(i))), n.consoleDisplay && (o.apply ? o.apply(this, i) : o(i))
                        }
                    })(o[u]);
                    return i
                }
                r.registerModule("console", {
                    onInitialize: function() {
                        n.inspectors && (e.console = i(e.console, n))
                    },
                    onTransmit: function() {
                        return r.flushLog("c")
                    },
                    forTest: {
                        listenToConsole: i
                    }
                })
            }(this),
            function(e, t) {
                function n(e) {
                    var t, n = {};
                    e.jQuery && e.jQuery.fn && e.jQuery.fn.jquery && (n.jQuery = e.jQuery.fn.jquery), e.jQuery && e.jQuery.ui && e.jQuery.ui.version && (n.jQueryUI = e.jQuery.ui.version), e.angular && e.angular.version && e.angular.version.full && (n.angular = e.angular.version.full);
                    for (t in e)
                        if ("webkitStorageInfo" !== t) try {
                            if (e[t]) {
                                var r = e[t].version || e[t].Version || e[t].VERSION;
                                "string" == typeof r && (n[t] = r)
                            }
                        } catch (i) {}
                        return n
                }
                var i = (new Date).getTime();
                r.registerModule("environment", {
                    onTransmit: function() {
                        return {
                            userAgent: t.navigator.userAgent,
                            age: (new Date).getTime() - i,
                            viewportHeight: document.documentElement.clientHeight,
                            viewportWidth: document.documentElement.clientWidth,
                            dependencies: n(t)
                        }
                    },
                    forTest: {
                        discoverDependencies: n
                    }
                })
            }(this, e), r.initialize()
        } catch (i) {
            r.transmit("tracker", i.message, i.fileName, i.lineNumber, void 0, i.stack)
        }
    }(window), define("trackjs", function() {}), Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this,
            r, i, s, o, u;
        if (typeof n != "function") throw new TypeError("Function.prototype.bind called on incompatible " + n);
        r = Array.prototype.slice.call(arguments, 1), i = function() {
            if (this instanceof u) {
                var e = n.apply(this, r.concat(Array.prototype.slice.call(arguments)));
                return Object(e) === e ? e : this
            }
            return n.apply(t, r.concat(Array.prototype.slice.call(arguments)))
        }, s = Math.max(0, n.length - r.length), o = [];
        for (var a = 0; a < s; a++) o.push("$" + a);
        return u = Function("binder", "return function(" + o.join(",") + "){return binder.apply(this,arguments)}")(i), n.prototype && (Empty.prototype = n.prototype, u.prototype = new Empty, Empty.prototype = null), u
    }), define("polyfills/function_bind", function() {}),
    function(e) {
        window.XDomainRequest && e.ajaxTransport(function(t) {
            if (t.crossDomain && t.async) {
                t.timeout && (t.xdrTimeout = t.timeout, delete t.timeout);
                var n;
                return {
                    send: function(r, i) {
                        function o(t, r, s, o) {
                            n.onload = n.onerror = n.ontimeout = n.onprogress = e.noop, n = undefined, i(t, r, s, o)
                        }
                        n = new XDomainRequest, n.open(t.type, t.url), n.onload = function() {
                            o(200, "OK", {
                                text: n.responseText
                            }, "Content-Type: " + n.contentType)
                        }, n.onerror = function() {
                            o(404, "Not Found")
                        }, n.onprogress = function() {}, t.xdrTimeout && (n.ontimeout = function() {
                            o(0, "timeout")
                        }, n.timeout = t.xdrTimeout), n.send(t.hasContent && t.data || null)
                    },
                    abort: function() {
                        n && (n.onerror = e.noop(), n.abort())
                    }
                }
            }
        })
    }(jQuery), define("polyfills/xdr", function() {}),
    function() {
        var e, t = Array.prototype.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
        window.Sailthru = window.sailthru = e = function() {
            function n() {
                this.options = {
                    spider: !0,
                    concierge: !1,
                    akamai: !1,
                    track_url: !0,
                    cookieDomain: window.location.host
                }, this.hidden = !1, this.protocol = window.location.protocol
            }
            var e;
            return e = null, n.setup = function(e) {
                var t, r, i, s, o, u, a;
                if (typeof e.domain == "undefined") return;
                i = n, i.tracked = {};
                if (!(i.__instance instanceof n)) {
                    i.__instance = new this;
                    for (t in e) r = e[t], i.__instance.options[t] = e[t];
                    typeof i.__instance.options.tags == "undefined" && (i.__instance.options.tags = i.__instance.getContentTags()), i.__instance.options.jQuery ? n.jq = i.__instance.options.jQuery : window.jQuery ? n.jq = window.jQuery : window.$ && (n.jq = window.$), o = i.__instance.cookieIsEnabled(), a = document.location.search.indexOf("concierge_stage") !== -1, u = i.__instance.getCookie("sailthru_recommendation_hidden") === "true";
                    if ((i.__instance.options.concierge || a) && o && !u) {
                        i.__instance.options.concierge = i.__instance._conciergeDefaultOptions();
                        if (e.concierge !== !0) {
                            s = e.concierge;
                            for (t in s) r = s[t], i.__instance.options.concierge[t] = e.concierge[t]
                        }
                        a && (i.__instance.options.concierge.stage = 1), (!e.concierge.stage_only || a) && i.__instance._recommendationBox()
                    } else(typeof i.__instance.options.tags != "undefined" || i.__instance.options.spider === !0) && i.__instance._horizonTrack()
                }
                return i.__instance
            }, n.logFB = function(e) {
                var t, n, r, i;
                return e == null && (e = !1), e === !1 && (e = window.location.href), n = {}, i = function(e, t) {
                    var n;
                    typeof window.FB != "undefined" ? window.FB.api("/", {
                        id: e
                    }, function(e) {
                        if (e.shares !== "undefined") return t(e.shares)
                    }) : (n = {
                        url: "https://graph.facebook.com/?id=" + encodeURIComponent(e),
                        async: !1,
                        success: function(e) {
                            if (e.shares !== "undefined") return t(e.shares)
                        }
                    }, $.ajax(n))
                }, window.FB && (r = window.FB, t = function() {
                    var e;
                    return e = !1, r.getLoginStatus(function(t) {
                        t.authResponse ? t.authResponse.userID && (e = {
                            logged_in: !0,
                            uid: t.authResponse.userID != null
                        }) : t.session ? t.session.uid && (e = {
                            uid: t.session.uid,
                            logged_in: !0
                        }) : e = !1
                    }), e
                }(), t !== !1 && (n = t)), i(e, function(e) {
                    e !== "undefined" && (n.shares = e)
                }), n
            }, n.track = function(e) {
                if (typeof e.domain == "undefined") return;
                var t, r, i = n;
                i.__trackInstance = new this;
                for (t in e) r = e[t], i.__trackInstance.options[t] = e[t];
                typeof i.__trackInstance.options.tags == "undefined" && (i.__trackInstance.options.tags = i.__trackInstance.getContentTags()), i.__trackInstance._horizonTrack()
            }, n.prototype.getContentTags = function() {
                var e, t, n, r, i, s;
                e = document.getElementsByTagName("meta");
                if (e.length > 0) {
                    for (n = 0, i = e.length; n < i; n++) {
                        t = e[n];
                        if (typeof t.name != "undefined" && t.name.toLowerCase() === "sailthru.tags" && typeof t.content != "undefined") return t.content
                    }
                    for (r = 0, s = e.length; r < s; r++) {
                        t = e[r];
                        if (typeof t.name != "undefined" && t.name.toLowerCase() === "keywords" && typeof t.content != "undefined") return t.content
                    }
                }
                return null
            }, n.prototype.getCookie = function(e) {
                var t, n, r, i, s;
                if (this.cookieIsEnabled() !== !0) return null;
                r = e + "=", n = document.cookie.split(";");
                for (i = 0, s = n.length; i < s; i++) {
                    t = n[i];
                    while (t.charAt(0) === " ") t = t.substring(1, t.length);
                    if (t.indexOf(r) === 0) return t.substring(r.length, t.length)
                }
                return null
            }, n.prototype.setCookie = function(e, t, n) {
                var r, i;
                return this.cookieIsEnabled() !== !0 ? !1 : (i = new Date, i.setDate(i.getDate() + n), r = e + "=" + escape(t), n !== null && (i = new Date, i.setDate(i.getDate() + n), r += ";expires=" + i.toUTCString()), r += ";path=/;domain=" + this.options.cookieDomain, document.cookie = r, !0)
            }, n.prototype.cookieIsEnabled = function() {
                return navigator.cookieEnabled || t.call(document, "cookie") >= 0 && (document.cookie.length > 0 || (document.cookie = "test").indexOf.call(document.cookie, "test") > -1)
            }, n.prototype.tagsToString = function(e) {
                var t;
                return t = e instanceof Array ? e.join(",") : e, t
            }, n.recommendationTrack = function(e, t, r, i) {
                var s, o, u, a, f, l, h;
                typeof n.tracked == "undefined" && (n.tracked = {});
                if (n.tracked[r]) return;
                n.tracked[r] = !0, window.location.protocol === "https:" ? (l = "https://horizon.sailthru.com/horizon/recommendtrack?id=" + t, l += "&d=" + e, sailthru_hid = this.getCookie("sailthru_hid"), sailthru_hid !== null && (l += "&hid=" + sailthru_hid)) : l = window.location.protocol + "//" + e + "/horizon/recommendtrack?id=" + t, r && (l += "&event=" + r);
                if (i)
                    for (a in i) h = i[a], l += "&" + a + "=" + encodeURIComponent(h);
                r === "click" && (u = n.__instance, s = parseInt(u.getCookie("hcl")), s = isNaN(s) ? 1 : s + 1, u.setCookie("hcl", s, 5)), f = parseInt(Math.random() * 1e4, 10), l += "&cb=" + f, o = new Image(1, 1), o.src = l, o.onerror = "";
                return
            }, n.recommendationBoxCallback = function(e) {
                return n.jq(document).trigger("SailthruDataLoaded", [e])
            }, n.emailSignup = function() {
                var e = n.__instance.options,
                    t, r;
                return r = n.jq(this).serialize(), document.getElementById("sailthru_email_address") && (t = window.location.protocol + "//" + e.domain + "/horizon/conciergesignup?format=jsonp&callback=?&" + r, e.concierge.stage && (t += "&concierge_stage=1"), n.jq.getJSON(t)), !1
            }, n.signupCallback = function(e) {
                var t, r;
                t = n.jq(".recommendationSignup"), t.html(e.content.html), r = t.find("form"), r.submit(n.emailSignup), e.ok && setTimeout(function() {
                    n.prototype._hide(), n.__instance.hidden = !0
                }, 1500)
            }, n.prototype.test = function() {
                typeof console != "undefined" && console.log("this is test call");
                return
            }, n.prototype._conciergeDefaultOptions = function() {
                var e, t;
                return e = "ak.sail-horizon.com", t = {
                    from: "top",
                    threshold: 400,
                    delay: null,
                    offsetBottom: 0,
                    cssPath: this.protocol + "//" + e + "/assets/css/horizon/recommendation" + (this.protocol === "https:" ? "_https" : "") + ".css"
                }
            }, n.prototype._recommendationBox = function() {
                var e, t, r, i, s, o, u, a, f;
                return e = n.jq.extend({}, this.options.concierge), s = null, t = !1, this.protocol === "https:" ? (e.url = "https://horizon.sailthru.com/recommend?format=jsonp&callback=?", sailthru_hid = this.getCookie("sailthru_hid"), e.url += "&d=" + this.options.domain, sailthru_hid !== null && (e.url += "&hid=" + sailthru_hid)) : e.url = this.protocol + "//" + this.options.domain + "/recommend?format=jsonp&callback=?", this.options.concierge.filter && this.options.concierge.filter.tags && (e.url += "&filter[tags]=" + this.tagsToString(this.options.concierge.filter.tags)), this.options.spider !== !0 && (e.url += "&nospider=1"), this.options.noPageview && (e.url += "&nopageview=1"), this.options.tags && (e.url += "&tags=" + encodeURIComponent(this.tagsToString(this.options.tags))), this.getCookie("hcl") && (e.url += "&num_clicks=" + this.getCookie("hcl")), this.options.concierge.stage && (e.url += "&concierge_stage=1"), e.domain = this.options.domain, this.data = {}, i = this, r = typeof this.options.delay != "undefined" ? this.options.delay : !1, u = function() {
                    var t = this;
                    a(e.cssPath), n.jq(document).bind("SailthruDataLoaded", function(e, n) {
                        return t.data = n, t.dataLoaded = !0, o.call(t)
                    }), n.jq.getJSON(e.url), n.jq(window).scroll(function(r) {
                        var i, s, o, u, a;
                        if (t.dataLoaded === !0) return i = n.jq(this), o = i.scrollTop(), s = n.jq(document).height() - n.jq(window).height(), e.threshold instanceof jQuery ? (a = 0 - (e.threshold.eq(0).offset().top - n.jq(window).height()), u = 0) : (a = e.from === "bottom" ? e.threshold : -e.threshold, u = e.from === "bottom" ? s : 0), o >= u - a && !t.hidden ? f.call(t) : n.__instance._hide()
                    });
                    if (r) return s = setTimeout(function() {
                        return clearTimeout(s), f.call(t)
                    }, r)
                }, a = function(e) {
                    var t;
                    t = document.createElement("link"), t.href = e, t.rel = "stylesheet", t.type = "text/css", t.async = !0, document.getElementsByTagName("head")[0].appendChild(t)
                }, o = function() {
                    var t, r, s, o, u, a = this;
                    o = this.data.content, t = n.jq('<div class="recommendation sailthruRecommendation" />'), typeof o.html != "undefined" && (t.html(o.html), r = t.find("a.closeRecommendation"), s = t.find("a.openRecommendation"), u = t.find("form"), t.appendTo("body")), r.click(function(e) {
                        return e.preventDefault(), i.setCookie("sailthru_recommendation_hidden", "true", 30), a.hidden = !0, n.__instance._hide(), !1
                    }), s.click(function(e) {
                        return e.preventDefault(), i.setCookie("sailthru_recommendation_hidden", "false", 30), a.hidden = !1, f.call(a), !1
                    }), u.submit(n.emailSignup), setTimeout(function() {
                        var r, i, s;
                        return r = n.jq('<iframe id="sailthru_iframe" src="" FRAMEBORDER="0" />'), i = {
                            bottom: e.offsetBottom,
                            zIndex: "10000"
                        }, t.css(i), s = {
                            position: "fixed",
                            width: t.outerWidth(),
                            height: t.outerHeight(),
                            zIndex: "9999",
                            right: 0,
                            bottom: e.offsetBottom,
                            display: "none"
                        }, r.css(s), r.appendTo("body"), a.$elem = t, a.$iframe = r
                    }, 100)
                }, f = function() {
                    return navigator.cookieEnabled ? i.getCookie(!1) ? !1 : n.__instance.hidden ? !1 : (this.$elem && !this.$elem.is(":animated") && (this.$elem.find(".openWrapper").hide(), this.$iframe.show(), this.$elem.show().animate({
                        right: 0
                    }, "normal")), this.data.content.id ? n.recommendationTrack(e.domain, this.data.content.id, "show", this.data.track) : !1) : !1
                }, u.call(this)
            }, n.prototype._hide = function() {
                var e, t, r, i, s, o, u = this;
                t = n.jq(".sailthruRecommendation"), r = n.jq("#sailthru_iframe");
                if (t && !t.is(":animated")) return i = t.find(".openWrapper"), e = i.children("a"), s = t.outerHeight() / 2 - 11, i.show(), o = t.outerWidth() - i.outerWidth(), t.animate({
                    right: -o
                }, "normal", function() {
                    return r.hide()
                })
            }, n.prototype._horizonTrack = function() {
                var e, t, n, r, i, s, o, u, a, f;
                n = parseInt(Math.random() * 1e4, 10), e = this.protocol === "https:" ? "horizon.sailthru.com" : this.options.domain, i = this.protocol + "//" + e + "/horizon/track", f = this.protocol + "//ak.sail-horizon.com", i = this.options.akamai === !0 ? f + "/aktrack.gif" : i, i += "?r=" + n, this.options.track_url === !0 && (i += "&url=" + (this.options.url != undefined ? encodeURIComponent(this.options.url) : encodeURIComponent(document.location)));
                if (this.protocol === "https:" || this.options.akamai === !0) i += "&d=" + this.options.domain;
                r = this.getCookie("sailthru_hid"), r !== null && (this.options.akamai === !0 || this.protocol === "https:") && (i += "&hid=" + r), typeof this.options.tag != "undefined" && (this.options.tags = this.options.tag);
                if (this.options.tags)
                    if (this.options.tags instanceof Array) i += "&tags=" + encodeURIComponent(this.options.tags.join(","));
                    else if (this.options.tags instanceof Object) {
                    u = this.options.tags;
                    for (s in u) a = u[s], i += "&tags[" + encodeURIComponent(s) + "]=" + encodeURIComponent(a)
                } else i += "&tags=" + encodeURIComponent(this.options.tags);
                return this.options.spider && (i += "&spider=1"), t = new Image(1, 1), t.src = i, t.onerror = "", t
            }, n
        }()
    }.call(this), define("sailthru", function() {}), require(["jquery"], function(e) {
        require(["lib/core/base", "lib/page/scroll_perf", "flamsteed", "trackjs", "polyfills/function_bind", "polyfills/xdr"], function(t, n, r) {
            e(function() {
                var e = window.location.protocol === "https:";
                new t, new n, e || (window.lp.getCookie && (window.lp.fs = new r({
                    events: window.lp.fs.buffer,
                    u: window.lp.getCookie("lpUid")
                })), require(["sailthru"], function() {
                    window.Sailthru.setup({
                        domain: "horizon.lonelyplanet.com"
                    })
                }))
            })
        })
    }), define("app_core", function() {}), define("lib/mixins/events", ["jquery"], function(e) {
        var t = function() {
            this._JQInit = function() {
                this._JQ = e(this)
            }, this.trigger = function(e, t) {
                this.$el.trigger(e, t)
            }, this.triggerNative = function(e, t, n) {
                if (!document.createEvent("Event")) return !1;
                var r = document.createEvent("Event");
                r.data = n, r.initEvent(t, !0, !0), e.dispatchEvent(r)
            }, this.on = function(e, t) {
                this._JQ || this._JQInit(), this._JQ.on(e, t)
            }, this.off = function(e, t) {
                this._JQ || this._JQInit(), this._JQ.off(e, t)
            }
        };
        return t
    }), define("lib/mixins/page_state", [], function() {
        var e = function() {
            this.checkFilters = /filters/, this.checkSearch = /search/, this.legacyBrowsers = /(browser)?ie(7|8)/i, this.getUrl = function() {
                return window.location.href
            }, this.getSlug = function() {
                return window.location.pathname
            }, this.getParams = function() {
                return window.location.search.replace(/^\?/, "")
            }, this.getHash = function() {
                return window.location.hash
            }, this.getViewPort = function() {
                return document.documentElement.clientWidth
            }, this.getLegacyRoot = function() {
                if (this.legacyBrowsers.test(document.documentElement.className)) return document.documentElement;
                if (this.legacyBrowsers.test(document.body.className)) return document.body
            }, this.getDocumentRoot = function() {
                var e = this.getSlug();
                return this.createDocumentRoot(e)
            }, this.isLegacy = function() {
                return !!this.getLegacyRoot()
            }, this.setUrl = function(e) {
                return window.location.replace(e)
            }, this.setHash = function(e) {
                return window.location.hash = e
            }, this.createDocumentRoot = function(e) {
                var t = e.split("/");
                return this.withinFilterUrl() ? t.pop() && t.join("/") : e
            }, this.withinFilterUrl = function() {
                var e = document.getElementById("js-card-holder");
                return e && e.getAttribute("data-filter-subcategory") == "true"
            }, this.hasFiltered = function() {
                return this.withinFilterUrl() || this.checkFilters.test(this.getParams())
            }, this.hasSearched = function() {
                var e = this.getParams();
                return this.checkSearch.test(e)
            }
        };
        return e
    }), define("lib/page/pushstate", ["jquery", "lib/mixins/page_state", "polyfills/function_bind"], function(e, t) {
        var n = function(n) {
            n || (n = {}), e.extend(this.config, n), this.popStateFired = !1, this.currentUrl = this.getUrl(), this._initHistory()
        };
        return t.call(n.prototype), n.prototype.navigate = function(e, t, n) {
            var r = this._createUrl(e, t);
            this._supportsHistory() || this._supportsHash() ? this._setState(r, n) : this.setUrl(r)
        }, n.prototype._initHistory = function() {
            this._supportsHistory() ? e(window).bind("popstate", function() {
                this._handlePopState()
            }.bind(this)) : this._supportsHash() && (this.allowHistoryNav = !0, e(window).on("hashchange", this._onHashChange), this.getHash() && this._onHashChange())
        }, n.prototype._handlePopState = function() {
            if (!this.popStateFired) {
                this.popStateFired = !0;
                if (this.getUrl() === this.currentUrl) return
            }
            this.setUrl(this.getUrl())
        }, n.prototype._supportsHistory = function() {
            return this.isHistoryEnabled === undefined ? this.isHistoryEnabled = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/) : this.isHistoryEnabled
        }, n.prototype._supportsHash = function() {
            return this.isHashEnabled === undefined ? this.isHashEnabled = "onhashchange" in window : this.isHashEnabled
        }, n.prototype._createUrl = function(e, t) {
            var n = e ? "?" + e : "";
            return this._supportsHistory() ? t + n : "#!" + t + n
        }, n.prototype._replaceUrl = function(e) {
            this._supportsHistory() || this._supportsHash() ? this._setState(e, !0) : this.setUrl(e)
        }, n.prototype._setState = function(e, t) {
            this._supportsHistory() ? t ? window.history.replaceState({}, null, e) : (window.history.pushState({}, null, e), this.currentUrl = this.getUrl()) : (this.allowHistoryNav = !1, this.setHash(e))
        }, n.prototype._onHashChange = function() {
            var e, t;
            this.allowHistoryNav && (e = this.getHash(), e ? t = e.substring(2) : t = this.getUrl(), this.setUrl(t)), this.allowHistoryNav = !0
        }, n
    }),
    function() {
        define("lib/utils/deparam", ["jquery"], function(e) {
            var t, n;
            return t = decodeURIComponent, $.deparam = n = function(e, n) {
                var r, i;
                return i = {}, r = {
                    "true": !0,
                    "false": !1,
                    "null": null
                }, $.each(e.replace(/\+/g, " ").split("&"), function(e, s) {
                    var o, u, a, f, l, c, h, p;
                    c = s.split("="), a = t(c[0]), h = void 0, o = i, u = 0, f = a.split("]["), l = f.length - 1, /\[/.test(f[0]) && /\]$/.test(f[l]) ? (f[l] = f[l].replace(/\]$/, ""), f = f.shift().split("[").concat(f), l = f.length - 1) : l = 0;
                    if (c.length === 2) {
                        h = t(c[1]), n && (h = h && !isNaN(h) ? +h : h === "undefined" ? undefined : r[h] !== undefined ? r[h] : h);
                        if (l) {
                            p = [];
                            while (u <= l) a = f[u] === "" ? o.length : f[u], o = o[a] = u < l ? o[a] || (f[u + 1] && isNaN(f[u + 1]) ? {} : []) : h, p.push(u++);
                            return p
                        }
                        return $.isArray(i[a]) ? i[a].push(h) : i[a] !== undefined ? i[a] = [i[a], h] : i[a] = h
                    }
                    if (a) return i[a] = n ? undefined : ""
                }), i
            }
        })
    }.call(this), define("lib/page/controller", ["jquery", "lib/mixins/events", "lib/page/pushstate", "lib/mixins/page_state", "lib/utils/deparam"], function(e, t, n, r) {
        function s(t) {
            this.config = e.extend({}, i, t), this.$el = e(this.config.el), this.init(), this.listen()
        }
        var i = {
            el: "#js-card-holder"
        };
        return s.prototype.states = null, t.call(s.prototype), r.call(s.prototype), s.prototype.init = function() {
            this.pushState = new n, this._generateState(this.getSlug())
        }, s.prototype.listen = function() {
            this.$el.on(":cards/request", function(e, t, n) {
                this._updateState(t), this.pushState.navigate(this._serializeState(), this._currentRoot()), this._callServer(this._createRequestUrl(), this.replace, n)
            }.bind(this)).on(":cards/append", function(e, t, n) {
                this._updateState(t), this._callServer(this._createRequestUrl(this.getUrl()), this.append, n)
            }.bind(this)).on(":page/request", function(e, t, n) {
                this._generateState(t.url.split("?")[0]), this.pushState.navigate(this._serializeState(), this._currentRoot()), this._callServer(this._createJSONUrl(t.url), this.newPage, n)
            }.bind(this)).on(":layer/request", function(e, t) {
                this._generateState(t.url.split("?")[0]), this.pushState.navigate(this._serializeState(), this._currentRoot(), !0), this._callServer(this._createJSONUrl(t.url), this.newLayer)
            }.bind(this)).on(":controller/back", function() {
                this._removeState(), this._generateState(), this.pushState.navigate(this._serializeState(), this._currentRoot())
            }.bind(this)).on(":controller/reset", function() {
                this.states = [this.states[0]], this.currentState = 0, this.pushState.navigate(this._serializeState(), this._currentRoot())
            }.bind(this))
        }, s.prototype.replace = function(e, t) {
            this._updateGoogleAnalytics(e), this._updateAdConfig(e), e.pagination && e.pagination.page_offsets && this._updateOffset(e.pagination), this.trigger(":cards/received", [e, this._currentState(), t])
        }, s.prototype.append = function(e, t) {
            this._updateGoogleAnalytics(e), this._updateAdConfig(e), e.pagination && e.pagination.page_offsets && this._updateOffset(e.pagination), this._removePageParam(), this.trigger(":cards/append/received", [e, this._currentState(), t])
        }, s.prototype.newPage = function(e, t) {
            this._updateGoogleAnalytics(e), this._updateAdConfig(e), e.pagination && e.pagination.page_offsets && this._updateOffset(e.pagination), this.trigger(":page/received", [e, this._currentState(), t])
        }, s.prototype.newLayer = function(e) {
            this._updateGoogleAnalytics(e), this._updateAdConfig(e), this.trigger(":layer/received", [e, this._currentState()])
        }, s.prototype._callServer = function(t, n, r, i) {
            return n = n.bind(this), e.ajax({
                url: t,
                dataType: i || "json",
                success: function(e) {
                    n(e, r)
                }
            })
        }, s.prototype._generateState = function(t) {
            return this.states || (this.states = []), this.currentState == null ? this.currentState = 0 : this.currentState += 1, this.states.push({
                state: e.deparam(this.getParams()),
                documentRoot: t || this.getDocumentRoot()
            }), this._removePageParam()
        }, s.prototype._removeState = function() {
            this.states.splice(this.states.length - 1, 1), this.currentState = this.currentState - 1
        }, s.prototype._updateState = function(e) {
            var t = this._currentState(),
                n;
            for (n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        }, s.prototype._updateOffset = function(e) {
            var t = this._currentState();
            t.search && (t.search.page_offsets = e.page_offsets)
        }, s.prototype._removePageParam = function() {
            delete this.states[this.currentState].state.page, delete this.states[this.currentState].state.nearby_offset
        }, s.prototype._serializeState = function() {
            return e.param(this.states[this.currentState].state)
        }, s.prototype._createRequestUrl = function(e) {
            var t = e || this.getDocumentRoot();
            return t = t.replace(/\/$/, "").replace(/\.json$/, ""), this._createJSONUrl(t + "?" + this._serializeState())
        }, s.prototype._createJSONUrl = function(e) {
            var t = e.split("?"),
                n = "";
            return e.indexOf(".json") > -1 ? e : (t.length > 1 && (n = "?" + t[1]), t[0] + ".json" + n)
        }, s.prototype._updateGoogleAnalytics = function(e) {
            e.datalayer && window.lp.analytics.api && (window.lp.analytics.dataLayer = e.datalayer, window.lp.analytics.api.trackPageView(window.lp.analytics.dataLayer))
        }, s.prototype._updateAdConfig = function(e) {
            e.ads && (window.lp.ads = e.ads)
        }, s.prototype._currentRoot = function() {
            return this.states[this.currentState].documentRoot
        }, s.prototype._currentState = function() {
            return this.states[this.currentState].state
        }, s
    }), define("lib/mixins/flyout", ["jquery"], function(e) {
        var t = function(t) {
            var n = this;
            return t || (t = {}), this.$listener = e(t.$listener || "#js-row--content"), this.listenToFlyout = function(t, r) {
                var i = t.target,
                    s = e(document);
                r.listener && (n.$listener = r.listener), s.on("click.flyout", function(t) {
                    e(t.target).closest(r.target).length || n._closeFlyout(n.$listener, i)
                }), s.on("keyup.flyout", function(e) {
                    e.keyCode === 27 && n._closeFlyout(i)
                })
            }, this._closeFlyout = function(t) {
                this.$listener.trigger(":flyout/close", t), e(document).off("click.flyout keyup.flyout")
            }, this
        };
        return t
    }), define("lib/page/viewport_helper", ["jquery"], function(e) {
        var t = function() {
            return this.viewport = function() {
                var e = this._getWindow();
                return {
                    width: e.width(),
                    height: e.height(),
                    top: e.scrollTop(),
                    left: e.scrollLeft(),
                    right: e.scrollLeft() + e.width(),
                    bottom: e.scrollTop() + e.height()
                }
            }, this.withinViewport = function(e) {
                var t = e.offset(),
                    n = this.viewport();
                return t.right = t.left + e.outerWidth(), t.bottom = t.top + e.outerHeight(), !(n.right < t.left || n.left > t.right || n.bottom < t.top || n.top > t.bottom)
            }, this.positionInViewport = function(e) {
                var t = e.offset(),
                    n = this.viewport();
                return {
                    left: t.left - n.left,
                    top: t.top - n.top,
                    contentTop: t.top - n.top - n.contentTop
                }
            }, this._getWindow = function() {
                return e(window)
            }, this
        };
        return t
    }), define("lib/components/lightbox", ["jquery", "lib/mixins/flyout", "lib/mixins/events", "lib/utils/template", "lib/page/viewport_helper", "polyfills/function_bind"], function(e, t, n, r, i) {
        var s = function(t) {
            t = t || {}, this.$el = e(t.$el || "#js-row--content"), this.$controllerEl = e(t.$controllerEl || "#js-card-holder"), t.$opener ? this.opener = t.$opener instanceof e ? t.$opener.selector : t.$opener : this.opener = ".js-lightbox-toggle", this.customClass = t.customClass || "", this.showPreloader = t.showPreloader || !1, this.customRenderer = t.customRenderer || !1, this.$lightbox = e("#js-lightbox"), this.$lightboxWrapper = this.$lightbox.find(".js-lightbox-wrapper"), this.$lightboxContent = this.$lightbox.find(".js-lightbox-content"), this.$lightboxControls = this.$lightbox.find(".js-lightbox-controls"), this.$previous = this.$lightbox.find(".js-lightbox-previous"), this.$next = this.$lightbox.find(".js-lightbox-next"), this.requestMade = !1, this.init()
        };
        return t.call(s.prototype), n.call(s.prototype), i.call(s.prototype), s.prototype.init = function() {
            this.customClass && this.$lightbox.addClass(this.customClass), this.showPreloader && (this.preloaderTmpl = r.render(e("#tmpl-preloader").text(), {}), this.$lightboxContent.parent().append(this.preloaderTmpl)), this.listen()
        }, s.prototype.listen = function() {
            this.$lightbox.on("click", ".js-lightbox-close", function(e) {
                e.preventDefault(), this._closeFlyout(this.$el)
            }.bind(this)), this.$el.on("click", this.opener, function(e) {
                e.preventDefault(), this.trigger(":lightbox/open", {
                    listener: this.$el,
                    opener: e.currentTarget,
                    target: this.$lightboxContent
                })
            }.bind(this)), this.$previous.add(this.$next).on("click", function(e) {
                var t = this.$lightbox.find(e.target);
                return t.hasClass("js-lightbox-arrow") || (t = t.closest(".js-lightbox-arrow")), this.$lightbox.removeClass("content-ready"), this.$el.trigger(":lightbox/fetchContent", t.attr("href")), this.$lightboxControls.find(".js-lightbox-arrow").addClass("is-hidden"), this.$lightboxContent.empty(), !1
            }.bind(this)), this.$el.on(":lightbox/open", function(t, n) {
                e("html").addClass("lightbox--open"), this.$lightbox.addClass("is-active is-visible"), setTimeout(function() {
                    this.listenToFlyout(t, n)
                }.bind(this), 20)
            }.bind(this)), this.$el.on(":lightbox/fetchContent", function(e, t) {
                this.requestMade = !0, this._fetchContent(t)
            }.bind(this)), this.$el.on(":flyout/close", function() {
                this.$lightbox.hasClass("is-active") && (e("html").removeClass("lightbox--open"), this.requestMade && (this.requestMade = !1, this.$controllerEl.trigger(":controller/reset")), this.$lightbox.removeClass("is-active"), setTimeout(function() {
                    this.$lightbox.removeClass("is-visible"), this.$lightboxContent.empty(), this.trigger(":lightbox/is-closed")
                }.bind(this), 300), this.$lightbox.removeClass("content-ready"))
            }.bind(this)), this.$el.on(":lightbox/renderContent", function(e, t) {
                this._renderContent(t)
            }.bind(this)), this.$controllerEl.on(":layer/received", function(e, t) {
                this._renderPagination(t), this._renderContent(t.content || t)
            }.bind(this))
        }, s.prototype._fetchContent = function(e) {
            this.$lightbox.addClass("is-loading"), this.$controllerEl.trigger(":layer/request", {
                url: e
            })
        }, s.prototype._renderContent = function(e) {
            setTimeout(function() {
                this.$lightboxContent.html(this.customRenderer ? this.customRenderer(e) : e), this.$lightbox.addClass("content-ready"), this.trigger(":lightbox/contentReady")
            }.bind(this), 300), this.$lightbox.removeClass("is-loading")
        }, s.prototype._renderPagination = function(e) {
            var t = function(e, t) {
                t && t.url && t.title ? (e.removeClass("is-hidden"), e.attr("href", t.url), e.find(".js-lightbox-arrow__text").html(t.title)) : e.addClass("is-hidden")
            };
            e.pagination && (t(this.$next, e.pagination.next), t(this.$previous, e.pagination.prev))
        }, e(".js-lightbox-toggle").length && e(document).ready(function() {
            var t = e(".js-lightbox-toggle");
            new s({
                customClass: t.data("lightbox-class"),
                showPreloader: t.data("lightbox-showpreloader")
            })
        }), s
    }),
    function(e) {
        function g(e, t, n) {
            if (!n[0] || typeof n[0] == "object") return t.init.apply(e, n);
            if (t[n[0]]) return t[n[0]].apply(e, Array.prototype.slice.call(n, 1));
            throw M(n[0] + " is not a method or property")
        }

        function y(e, t, n, r) {
            return {
                css: {
                    position: "absolute",
                    top: e,
                    left: t,
                    overflow: r || "hidden",
                    zIndex: n || "auto"
                }
            }
        }

        function b(e, t, n, r, i) {
            var s = 1 - i,
                o = s * s * s,
                u = i * i * i;
            return S(Math.round(o * e.x + 3 * i * s * s * t.x + 3 * i * i * s * n.x + u * r.x), Math.round(o * e.y + 3 * i * s * s * t.y + 3 * i * i * s * n.y + u * r.y))
        }

        function w(e) {
            return e / 180 * s
        }

        function E(e) {
            return e / s * 180
        }

        function S(e, t) {
            return {
                x: e,
                y: t
            }
        }

        function x() {
            var e;
            if (e = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent)) {
                var t = parseFloat(e[1]);
                return t > 534.3
            }
            return !0
        }

        function T(e, n, r) {
            return t && r ? " translate3d(" + e + "px," + n + "px, 0px) " : " translate(" + e + "px, " + n + "px) "
        }

        function N(e) {
            return " rotate(" + e + "deg) "
        }

        function C(e, t) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function k() {
            var e = ["Moz", "Webkit", "Khtml", "O", "ms"],
                t = e.length,
                n = "";
            while (t--) e[t] + "Transform" in document.body.style && (n = "-" + e[t].toLowerCase() + "-");
            return n
        }

        function L() {
            var e, t = document.createElement("fakeelement"),
                n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MSTransition: "transitionend",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (e in n)
                if (t.style[e] !== undefined) return n[e]
        }

        function A(e, t, n, i, s) {
            var o, u = [];
            if (r == "-webkit-") {
                for (o = 0; o < s; o++) u.push("color-stop(" + i[o][0] + ", " + i[o][1] + ")");
                e.css({
                    "background-image": "-webkit-gradient(linear, " + t.x + "% " + t.y + "%," + n.x + "% " + n.y + "%, " + u.join(",") + " )"
                })
            } else {
                t = {
                    x: t.x / 100 * e.width(),
                    y: t.y / 100 * e.height()
                }, n = {
                    x: n.x / 100 * e.width(),
                    y: n.y / 100 * e.height()
                };
                var a = n.x - t.x,
                    f = n.y - t.y,
                    l = Math.atan2(f, a),
                    c = l - Math.PI / 2,
                    h = Math.abs(e.width() * Math.sin(c)) + Math.abs(e.height() * Math.cos(c)),
                    p = Math.sqrt(f * f + a * a),
                    d = S(n.x < t.x ? e.width() : 0, n.y < t.y ? e.height() : 0),
                    v = Math.tan(l),
                    m = -1 / v,
                    g = (m * d.x - d.y - v * t.x + t.y) / (m - v),
                    y = {
                        x: g,
                        y: m * g - m * d.x + d.y
                    },
                    b = Math.sqrt(Math.pow(y.x - t.x, 2) + Math.pow(y.y - t.y, 2));
                for (o = 0; o < s; o++) u.push(" " + i[o][1] + " " + (b + p * i[o][0]) * 100 / h + "%");
                e.css({
                    "background-image": r + "linear-gradient(" + -l + "rad," + u.join(",") + ")"
                })
            }
        }

        function O(t, n, r) {
            var i = e.Event(t);
            return n.trigger(i, r), i.isDefaultPrevented() ? "prevented" : i.isPropagationStopped() ? "stopped" : ""
        }

        function M(e) {
            function t(e) {
                this.name = "TurnJsError", this.message = e
            }
            return t.prototype = new Error, t.prototype.constructor = t, new t(e)
        }

        function _(e) {
            var t = {
                top: 0,
                left: 0
            };
            do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent);
            return t
        }

        function D() {
            return navigator.userAgent.indexOf("MSIE 9.0") == -1
        }
        var t, n, r = "",
            i = "4.1.0",
            s = Math.PI,
            o = s / 2,
            u = "ontouchstart" in window,
            a = u ? {
                down: "touchstart",
                move: "touchmove",
                up: "touchend",
                over: "touchstart",
                out: "touchend"
            } : {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup",
                over: "mouseover",
                out: "mouseout"
            },
            f = {
                backward: ["bl", "tl"],
                forward: ["br", "tr"],
                all: ["tl", "bl", "tr", "br", "l", "r"]
            },
            l = ["single", "double"],
            c = ["ltr", "rtl"],
            h = {
                acceleration: !0,
                display: "double",
                duration: 600,
                page: 1,
                gradients: !0,
                turnCorners: "bl,br",
                when: null
            },
            p = {
                cornerSize: 100
            },
            d = 6,
            v = {
                init: function(i) {
                    t = "WebKitCSSMatrix" in window || "MozPerspective" in document.body.style, n = x(), r = k();
                    var s, o = this,
                        f = 0,
                        l = this.data(),
                        c = this.children();
                    i = e.extend({
                        width: this.width(),
                        height: this.height(),
                        direction: this.attr("dir") || this.css("direction") || "ltr"
                    }, h, i), l.opts = i, l.pageObjs = {}, l.pages = {}, l.pageWrap = {}, l.pageZoom = {}, l.pagePlace = {}, l.pageMv = [], l.zoom = 1, l.totalPages = i.pages || 0, l.eventHandlers = {
                        touchStart: e.proxy(v._touchStart, this),
                        touchMove: e.proxy(v._touchMove, this),
                        touchEnd: e.proxy(v._touchEnd, this),
                        start: e.proxy(v._eventStart, this)
                    };
                    if (i.when)
                        for (s in i.when) C(s, i.when) && this.bind(s, i.when[s]);
                    this.css({
                        position: "relative",
                        width: i.width,
                        height: i.height
                    }), this.turn("display", i.display), i.direction !== "" && this.turn("direction", i.direction), t && !u && i.acceleration && this.transform(T(0, 0, !0));
                    for (s = 0; s < c.length; s++) e(c[s]).attr("ignore") != "1" && this.turn("addPage", c[s], ++f);
                    return e(this).bind(a.down, l.eventHandlers.touchStart).bind("end", v._eventEnd).bind("pressed", v._eventPressed).bind("released", v._eventReleased).bind("flip", v._flip), e(this).parent().bind("start", l.eventHandlers.start), e(document).bind(a.move, l.eventHandlers.touchMove).bind(a.up, l.eventHandlers.touchEnd), this.turn("page", i.page), l.done = !0, this
                },
                addPage: function(t, n) {
                    var r, i, s = !1,
                        o = this.data(),
                        u = o.totalPages + 1;
                    if (o.destroying) return !1;
                    if (r = /\bp([0-9]+)\b/.exec(e(t).attr("class"))) n = parseInt(r[1], 10);
                    if (n) {
                        if (n == u) s = !0;
                        else if (n > u) throw M('Page "' + n + '" cannot be inserted')
                    } else n = u, s = !0;
                    return n >= 1 && n <= u && (o.display == "double" ? i = n % 2 ? " odd" : " even" : i = "", o.done && this.turn("stop"), n in o.pageObjs && v._movePages.call(this, n, 1), s && (o.totalPages = u), o.pageObjs[n] = e(t).css({
                        "float": "left"
                    }).addClass("page p" + n + i), !D() && o.pageObjs[n].hasClass("hard") && o.pageObjs[n].removeClass("hard"), v._addPage.call(this, n), v._removeFromDOM.call(this)), this
                },
                _addPage: function(t) {
                    var n = this.data(),
                        r = n.pageObjs[t];
                    if (r)
                        if (v._necessPage.call(this, t)) {
                            if (!n.pageWrap[t]) {
                                n.pageWrap[t] = e("<div/>", {
                                    "class": "page-wrapper",
                                    page: t,
                                    css: {
                                        position: "absolute",
                                        overflow: "hidden"
                                    }
                                }), this.append(n.pageWrap[t]), n.pagePlace[t] || (n.pagePlace[t] = t, n.pageObjs[t].appendTo(n.pageWrap[t]));
                                var i = v._pageSize.call(this, t, !0);
                                r.css({
                                    width: i.width,
                                    height: i.height
                                }), n.pageWrap[t].css(i)
                            }
                            n.pagePlace[t] == t && v._makeFlip.call(this, t)
                        } else n.pagePlace[t] = 0, n.pageObjs[t] && n.pageObjs[t].remove()
                },
                hasPage: function(e) {
                    return C(e, this.data().pageObjs)
                },
                center: function(t) {
                    var n = this.data(),
                        r = e(this).turn("size"),
                        i = 0;
                    if (!n.noCenter) {
                        if (n.display == "double") {
                            var s = this.turn("view", t || n.tpage || n.page);
                            n.direction == "ltr" ? s[0] ? s[1] || (i += r.width / 4) : i -= r.width / 4 : s[0] ? s[1] || (i -= r.width / 4) : i += r.width / 4
                        }
                        e(this).css({
                            marginLeft: i
                        })
                    }
                    return this
                },
                destroy: function() {
                    var t, n = this,
                        r = this.data(),
                        i = ["end", "first", "flip", "last", "pressed", "released", "start", "turning", "turned", "zooming", "missing"];
                    if (O("destroying", this) == "prevented") return;
                    r.destroying = !0, e.each(i, function(e, t) {
                        n.unbind(t)
                    }), this.parent().unbind("start", r.eventHandlers.start), e(document).unbind(a.move, r.eventHandlers.touchMove).unbind(a.up, r.eventHandlers.touchEnd);
                    while (r.totalPages !== 0) this.turn("removePage", r.totalPages);
                    return r.fparent && r.fparent.remove(), r.shadow && r.shadow.remove(), this.removeData(), r = null, this
                },
                is: function() {
                    return typeof this.data().pages == "object"
                },
                zoom: function(t) {
                    var n = this.data();
                    if (typeof t == "number") {
                        if (t < .001 || t > 100) throw M(t + " is not a value for zoom");
                        if (O("zooming", this, [t, n.zoom]) == "prevented") return this;
                        var r = this.turn("size"),
                            i = this.turn("view"),
                            s = 1 / n.zoom,
                            o = Math.round(r.width * s * t),
                            u = Math.round(r.height * s * t);
                        n.zoom = t, e(this).turn("stop").turn("size", o, u), n.opts.autoCenter && this.turn("center"), v._updateShadow.call(this);
                        for (var a = 0; a < i.length; a++) i[a] && n.pageZoom[i[a]] != n.zoom && (this.trigger("zoomed", [i[a], i, n.pageZoom[i[a]], n.zoom]), n.pageZoom[i[a]] = n.zoom);
                        return this
                    }
                    return n.zoom
                },
                _pageSize: function(e, t) {
                    var n = this.data(),
                        r = {};
                    if (n.display == "single") r.width = this.width(), r.height = this.height(), t && (r.top = 0, r.left = 0, r.right = "auto");
                    else {
                        var i = this.width() / 2,
                            s = this.height();
                        n.pageObjs[e].hasClass("own-size") ? (r.width = n.pageObjs[e].width(), r.height = n.pageObjs[e].height()) : (r.width = i, r.height = s);
                        if (t) {
                            var o = e % 2;
                            r.top = (s - r.height) / 2, n.direction == "ltr" ? (r[o ? "right" : "left"] = i - r.width, r[o ? "left" : "right"] = "auto") : (r[o ? "left" : "right"] = i - r.width, r[o ? "right" : "left"] = "auto")
                        }
                    }
                    return r
                },
                _makeFlip: function(e) {
                    var t = this.data();
                    if (!t.pages[e] && t.pagePlace[e] == e) {
                        var n = t.display == "single",
                            r = e % 2;
                        t.pages[e] = t.pageObjs[e].css(v._pageSize.call(this, e)).flip({
                            page: e,
                            next: r || n ? e + 1 : e - 1,
                            turn: this
                        }).flip("disable", t.disabled), v._setPageLoc.call(this, e), t.pageZoom[e] = t.zoom
                    }
                    return t.pages[e]
                },
                _makeRange: function() {
                    var e, t, n = this.data();
                    if (n.totalPages < 1) return;
                    t = this.turn("range");
                    for (e = t[0]; e <= t[1]; e++) v._addPage.call(this, e)
                },
                range: function(e) {
                    var t, n, r, i, s = this.data();
                    e = e || s.tpage || s.page || 1, i = v._view.call(this, e);
                    if (e < 1 || e > s.totalPages) throw M('"' + e + '" is not a valid page');
                    return i[1] = i[1] || i[0], i[0] >= 1 && i[1] <= s.totalPages ? (t = Math.floor((d - 2) / 2), s.totalPages - i[1] > i[0] ? (n = Math.min(i[0] - 1, t), r = 2 * t - n) : (r = Math.min(s.totalPages - i[1], t), n = 2 * t - r)) : (n = d - 1, r = d - 1), [Math.max(1, i[0] - n), Math.min(s.totalPages, i[1] + r)]
                },
                _necessPage: function(e) {
                    if (e === 0) return !0;
                    var t = this.turn("range");
                    return this.data().pageObjs[e].hasClass("fixed") || e >= t[0] && e <= t[1]
                },
                _removeFromDOM: function() {
                    var e, t = this.data();
                    for (e in t.pageWrap) C(e, t.pageWrap) && !v._necessPage.call(this, e) && v._removePageFromDOM.call(this, e)
                },
                _removePageFromDOM: function(e) {
                    var t = this.data();
                    if (t.pages[e]) {
                        var n = t.pages[e].data();
                        m._moveFoldingPage.call(t.pages[e], !1), n.f && n.f.fwrapper && n.f.fwrapper.remove(), t.pages[e].removeData(), t.pages[e].remove(), delete t.pages[e]
                    }
                    t.pageObjs[e] && t.pageObjs[e].remove(), t.pageWrap[e] && (t.pageWrap[e].remove(), delete t.pageWrap[e]), v._removeMv.call(this, e), delete t.pagePlace[e], delete t.pageZoom[e]
                },
                removePage: function(e) {
                    var t = this.data();
                    if (e == "*")
                        while (t.totalPages !== 0) this.turn("removePage", t.totalPages);
                    else {
                        if (e < 1 || e > t.totalPages) throw M("The page " + e + " doesn't exist");
                        t.pageObjs[e] && (this.turn("stop"), v._removePageFromDOM.call(this, e), delete t.pageObjs[e]), v._movePages.call(this, e, -1), t.totalPages = t.totalPages - 1, t.page > t.totalPages ? (t.page = null, v._fitPage.call(this, t.totalPages)) : (v._makeRange.call(this), this.turn("update"))
                    }
                    return this
                },
                _movePages: function(e, t) {
                    var n, r = this,
                        i = this.data(),
                        s = i.display == "single",
                        o = function(e) {
                            var n = e + t,
                                o = n % 2,
                                u = o ? " odd " : " even ";
                            i.pageObjs[e] && (i.pageObjs[n] = i.pageObjs[e].removeClass("p" + e + " odd even").addClass("p" + n + u)), i.pagePlace[e] && i.pageWrap[e] && (i.pagePlace[n] = n, i.pageObjs[n].hasClass("fixed") ? i.pageWrap[n] = i.pageWrap[e].attr("page", n) : i.pageWrap[n] = i.pageWrap[e].css(v._pageSize.call(r, n, !0)).attr("page", n), i.pages[e] && (i.pages[n] = i.pages[e].flip("options", {
                                page: n,
                                next: s || o ? n + 1 : n - 1
                            })), t && (delete i.pages[e], delete i.pagePlace[e], delete i.pageZoom[e], delete i.pageObjs[e], delete i.pageWrap[e]))
                        };
                    if (t > 0)
                        for (n = i.totalPages; n >= e; n--) o(n);
                    else
                        for (n = e; n <= i.totalPages; n++) o(n)
                },
                display: function(t) {
                    var n = this.data(),
                        r = n.display;
                    if (t === undefined) return r;
                    if (e.inArray(t, l) == -1) throw M('"' + t + '" is not a value for display');
                    switch (t) {
                        case "single":
                            n.pageObjs[0] || (this.turn("stop").css({
                                overflow: "hidden"
                            }), n.pageObjs[0] = e("<div />", {
                                "class": "page p-temporal"
                            }).css({
                                width: this.width(),
                                height: this.height()
                            }).appendTo(this)), this.addClass("shadow");
                            break;
                        case "double":
                            n.pageObjs[0] && (this.turn("stop").css({
                                overflow: ""
                            }), n.pageObjs[0].remove(), delete n.pageObjs[0]), this.removeClass("shadow")
                    }
                    n.display = t;
                    if (r) {
                        var i = this.turn("size");
                        v._movePages.call(this, 1, 0), this.turn("size", i.width, i.height).turn("update")
                    }
                    return this
                },
                direction: function(t) {
                    var n = this.data();
                    if (t === undefined) return n.direction;
                    t = t.toLowerCase();
                    if (e.inArray(t, c) == -1) throw M('"' + t + '" is not a value for direction');
                    return t == "rtl" && e(this).attr("dir", "ltr").css({
                        direction: "ltr"
                    }), n.direction = t, n.done && this.turn("size", e(this).width(), e(this).height()), this
                },
                animating: function() {
                    return this.data().pageMv.length > 0
                },
                corner: function() {
                    var e, t, n = this.data();
                    for (t in n.pages)
                        if (C(t, n.pages))
                            if (e = n.pages[t].flip("corner")) return e;
                    return !1
                },
                data: function() {
                    return this.data()
                },
                disable: function(t) {
                    var n, r = this.data(),
                        i = this.turn("view");
                    r.disabled = t === undefined || t === !0;
                    for (n in r.pages) C(n, r.pages) && r.pages[n].flip("disable", r.disabled ? !0 : e.inArray(parseInt(n, 10), i) == -1);
                    return this
                },
                disabled: function(e) {
                    return e === undefined ? this.data().disabled === !0 : this.turn("disable", e)
                },
                size: function(e, t) {
                    if (e === undefined || t === undefined) return {
                        width: this.width(),
                        height: this.height()
                    };
                    this.turn("stop");
                    var n, r, i = this.data(),
                        s = i.display == "double" ? e / 2 : e;
                    this.css({
                        width: e,
                        height: t
                    }), i.pageObjs[0] && i.pageObjs[0].css({
                        width: s,
                        height: t
                    });
                    for (n in i.pageWrap) {
                        if (!C(n, i.pageWrap)) continue;
                        r = v._pageSize.call(this, n, !0), i.pageObjs[n].css({
                            width: r.width,
                            height: r.height
                        }), i.pageWrap[n].css(r), i.pages[n] && i.pages[n].css({
                            width: r.width,
                            height: r.height
                        })
                    }
                    return this.turn("resize"), this
                },
                resize: function() {
                    var e, t = this.data();
                    t.pages[0] && (t.pageWrap[0].css({
                        left: -this.width()
                    }), t.pages[0].flip("resize", !0));
                    for (e = 1; e <= t.totalPages; e++) t.pages[e] && t.pages[e].flip("resize", !0);
                    v._updateShadow.call(this), t.opts.autoCenter && this.turn("center")
                },
                _removeMv: function(e) {
                    var t, n = this.data();
                    for (t = 0; t < n.pageMv.length; t++)
                        if (n.pageMv[t] == e) return n.pageMv.splice(t, 1), !0;
                    return !1
                },
                _addMv: function(e) {
                    var t = this.data();
                    v._removeMv.call(this, e), t.pageMv.push(e)
                },
                _view: function(e) {
                    var t = this.data();
                    return e = e || t.page, t.display == "double" ? e % 2 ? [e - 1, e] : [e, e + 1] : [e]
                },
                view: function(e) {
                    var t = this.data(),
                        n = v._view.call(this, e);
                    return t.display == "double" ? [n[0] > 0 ? n[0] : 0, n[1] <= t.totalPages ? n[1] : 0] : [n[0] > 0 && n[0] <= t.totalPages ? n[0] : 0]
                },
                stop: function(e, t) {
                    if (this.turn("animating")) {
                        var n, r, i, s = this.data();
                        s.tpage && (s.page = s.tpage, delete s.tpage);
                        for (n = 0; n < s.pageMv.length; n++) {
                            if (!s.pageMv[n] || s.pageMv[n] === e) continue;
                            i = s.pages[s.pageMv[n]], r = i.data().f.opts, i.flip("hideFoldedPage", t), t || m._moveFoldingPage.call(i, !1), r.force && (r.next = r.page % 2 === 0 ? r.page - 1 : r.page + 1, delete r.force)
                        }
                    }
                    return this.turn("update"), this
                },
                pages: function(e) {
                    var t = this.data();
                    if (e) {
                        if (e < t.totalPages)
                            for (var n = t.totalPages; n > e; n--) this.turn("removePage", n);
                        return t.totalPages = e, v._fitPage.call(this, t.page), this
                    }
                    return t.totalPages
                },
                _missing: function(e) {
                    var t = this.data();
                    if (t.totalPages < 1) return;
                    var n, r = this.turn("range", e),
                        i = [];
                    for (n = r[0]; n <= r[1]; n++) t.pageObjs[n] || i.push(n);
                    i.length > 0 && this.trigger("missing", [i])
                },
                _fitPage: function(e) {
                    var t = this.data(),
                        n = this.turn("view", e);
                    v._missing.call(this, e);
                    if (!t.pageObjs[e]) return;
                    t.page = e, this.turn("stop");
                    for (var r = 0; r < n.length; r++) n[r] && t.pageZoom[n[r]] != t.zoom && (this.trigger("zoomed", [n[r], n, t.pageZoom[n[r]], t.zoom]), t.pageZoom[n[r]] = t.zoom);
                    v._removeFromDOM.call(this), v._makeRange.call(this), v._updateShadow.call(this), this.trigger("turned", [e, n]), this.turn("update"), t.opts.autoCenter && this.turn("center")
                },
                _turnPage: function(t) {
                    var n, r, i = this.data(),
                        s = i.pagePlace[t],
                        o = this.turn("view"),
                        u = this.turn("view", t);
                    if (i.page != t) {
                        var a = i.page;
                        if (O("turning", this, [t, u]) == "prevented") {
                            a == i.page && e.inArray(s, i.pageMv) != -1 && i.pages[s].flip("hideFoldedPage", !0);
                            return
                        }
                        e.inArray(1, u) != -1 && this.trigger("first"), e.inArray(i.totalPages, u) != -1 && this.trigger("last")
                    }
                    i.display == "single" ? (n = o[0], r = u[0]) : o[1] && t > o[1] ? (n = o[1], r = u[0]) : o[0] && t < o[0] && (n = o[0], r = u[1]);
                    var f = i.opts.turnCorners.split(","),
                        l = i.pages[n].data().f,
                        c = l.opts,
                        h = l.point;
                    v._missing.call(this, t);
                    if (!i.pageObjs[t]) return;
                    this.turn("stop"), i.page = t, v._makeRange.call(this), i.tpage = r, c.next != r && (c.next = r, c.force = !0), this.turn("update"), l.point = h, l.effect == "hard" ? i.direction == "ltr" ? i.pages[n].flip("turnPage", t > n ? "r" : "l") : i.pages[n].flip("turnPage", t > n ? "l" : "r") : i.direction == "ltr" ? i.pages[n].flip("turnPage", f[t > n ? 1 : 0]) : i.pages[n].flip("turnPage", f[t > n ? 0 : 1])
                },
                page: function(t) {
                    var n = this.data();
                    if (t === undefined) return n.page;
                    if (!n.disabled && !n.destroying) {
                        t = parseInt(t, 10);
                        if (t > 0 && t <= n.totalPages) return t != n.page && (!n.done || e.inArray(t, this.turn("view")) != -1 ? v._fitPage.call(this, t) : v._turnPage.call(this, t)), this;
                        throw M("The page " + t + " does not exist")
                    }
                },
                next: function() {
                    return this.turn("page", Math.min(this.data().totalPages, v._view.call(this, this.data().page).pop() + 1))
                },
                previous: function() {
                    return this.turn("page", Math.max(1, v._view.call(this, this.data().page).shift() - 1))
                },
                peel: function(e, t) {
                    var n = this.data(),
                        r = this.turn("view");
                    t = t === undefined ? !0 : t === !0;
                    if (e === !1) this.turn("stop", null, t);
                    else if (n.display == "single") n.pages[n.page].flip("peel", e, t);
                    else {
                        var i;
                        n.direction == "ltr" ? i = e.indexOf("l") != -1 ? r[0] : r[1] : i = e.indexOf("l") != -1 ? r[1] : r[0], n.pages[i] && n.pages[i].flip("peel", e, t)
                    }
                    return this
                },
                _addMotionPage: function() {
                    var t = e(this).data().f.opts,
                        n = t.turn,
                        r = n.data();
                    v._addMv.call(n, t.page)
                },
                _eventStart: function(e, t, n) {
                    var r = t.turn.data(),
                        i = r.pageZoom[t.page];
                    if (e.isDefaultPrevented()) {
                        v._updateShadow.call(t.turn);
                        return
                    }
                    i && i != r.zoom && (t.turn.trigger("zoomed", [t.page, t.turn.turn("view", t.page), i, r.zoom]), r.pageZoom[t.page] = r.zoom), r.display == "single" && n && (n.charAt(1) == "l" && r.direction == "ltr" || n.charAt(1) == "r" && r.direction == "rtl" ? (t.next = t.next < t.page ? t.next : t.page - 1, t.force = !0) : t.next = t.next > t.page ? t.next : t.page + 1), v._addMotionPage.call(e.target), v._updateShadow.call(t.turn)
                },
                _eventEnd: function(t, n, r) {
                    var i = e(t.target),
                        s = i.data().f,
                        o = n.turn,
                        u = o.data();
                    if (r) {
                        var a = u.tpage || u.page;
                        if (a == n.next || a == n.page) delete u.tpage, v._fitPage.call(o, a || n.next, !0)
                    } else v._removeMv.call(o, n.page), v._updateShadow.call(o), o.turn("update")
                },
                _eventPressed: function(t) {
                    var n, r = e(t.target).data().f,
                        i = r.opts.turn,
                        s = i.data(),
                        o = s.pages;
                    return s.mouseAction = !0, i.turn("update"), r.time = (new Date).getTime()
                },
                _eventReleased: function(t, n) {
                    var r, i = e(t.target),
                        s = i.data().f,
                        o = s.opts.turn,
                        u = o.data();
                    u.display == "single" ? r = n.corner == "br" || n.corner == "tr" ? n.x < i.width() / 2 : n.x > i.width() / 2 : r = n.x < 0 || n.x > i.width();
                    if ((new Date).getTime() - s.time < 200 || r) t.preventDefault(), v._turnPage.call(o, s.opts.next);
                    u.mouseAction = !1
                },
                _flip: function(t) {
                    t.stopPropagation();
                    var n = e(t.target).data().f.opts;
                    n.turn.trigger("turn", [n.next]), n.turn.data().opts.autoCenter && n.turn.turn("center", n.next)
                },
                _touchStart: function() {
                    var e = this.data();
                    for (var t in e.pages)
                        if (C(t, e.pages) && m._eventStart.apply(e.pages[t], arguments) === !1) return !1
                },
                _touchMove: function() {
                    var e = this.data();
                    for (var t in e.pages) C(t, e.pages) && m._eventMove.apply(e.pages[t], arguments)
                },
                _touchEnd: function() {
                    var e = this.data();
                    for (var t in e.pages) C(t, e.pages) && m._eventEnd.apply(e.pages[t], arguments)
                },
                calculateZ: function(e) {
                    var t, n, r, i, s, o = this,
                        u = this.data(),
                        a = this.turn("view"),
                        f = a[0] || a[1],
                        l = e.length - 1,
                        c = {
                            pageZ: {},
                            partZ: {},
                            pageV: {}
                        },
                        h = function(e) {
                            var t = o.turn("view", e);
                            t[0] && (c.pageV[t[0]] = !0), t[1] && (c.pageV[t[1]] = !0)
                        };
                    for (t = 0; t <= l; t++) n = e[t], r = u.pages[n].data().f.opts.next, i = u.pagePlace[n], h(n), h(r), s = u.pagePlace[r] == r ? r : n, c.pageZ[s] = u.totalPages - Math.abs(f - s), c.partZ[i] = u.totalPages * 2 - l + t;
                    return c
                },
                update: function() {
                    var t, n = this.data();
                    if (this.turn("animating") && n.pageMv[0] !== 0) {
                        var r, i, s, o = this.turn("calculateZ", n.pageMv),
                            u = this.turn("corner"),
                            a = this.turn("view"),
                            f = this.turn("view", n.tpage);
                        for (t in n.pageWrap) {
                            if (!C(t, n.pageWrap)) continue;
                            s = n.pageObjs[t].hasClass("fixed"), n.pageWrap[t].css({
                                display: o.pageV[t] || s ? "" : "none",
                                zIndex: (n.pageObjs[t].hasClass("hard") ? o.partZ[t] : o.pageZ[t]) || (s ? -1 : 0)
                            });
                            if (r = n.pages[t]) r.flip("z", o.partZ[t] || null), o.pageV[t] && r.flip("resize"), n.tpage ? r.flip("hover", !1).flip("disable", e.inArray(parseInt(t, 10), n.pageMv) == -1 && t != f[0] && t != f[1]) : r.flip("hover", u === !1).flip("disable", t != a[0] && t != a[1])
                        }
                    } else
                        for (t in n.pageWrap) {
                            if (!C(t, n.pageWrap)) continue;
                            var l = v._setPageLoc.call(this, t);
                            n.pages[t] && n.pages[t].flip("disable", n.disabled || l != 1).flip("hover", !0).flip("z", null)
                        }
                    return this
                },
                _updateShadow: function() {
                    var t, n, r, i = this.data(),
                        s = this.width(),
                        o = this.height(),
                        u = i.display == "single" ? s : s / 2;
                    t = this.turn("view"), i.shadow || (i.shadow = e("<div />", {
                        "class": "shadow",
                        css: y(0, 0, 0).css
                    }).appendTo(this));
                    for (var a = 0; a < i.pageMv.length; a++) {
                        if (!t[0] || !t[1]) break;
                        t = this.turn("view", i.pages[i.pageMv[a]].data().f.opts.next), n = this.turn("view", i.pageMv[a]), t[0] = t[0] && n[0], t[1] = t[1] && n[1]
                    }
                    t[0] ? t[1] ? r = 3 : r = i.direction == "ltr" ? 2 : 1 : r = i.direction == "ltr" ? 1 : 2;
                    switch (r) {
                        case 1:
                            i.shadow.css({
                                width: u,
                                height: o,
                                top: 0,
                                left: u
                            });
                            break;
                        case 2:
                            i.shadow.css({
                                width: u,
                                height: o,
                                top: 0,
                                left: 0
                            });
                            break;
                        case 3:
                            i.shadow.css({
                                width: s,
                                height: o,
                                top: 0,
                                left: 0
                            })
                    }
                },
                _setPageLoc: function(e) {
                    var t = this.data(),
                        n = this.turn("view"),
                        r = 0;
                    if (e == n[0] || e == n[1]) r = 1;
                    else if (t.display == "single" && e == n[0] + 1 || t.display == "double" && e == n[0] - 2 || e == n[1] + 2) r = 2;
                    if (!this.turn("animating")) switch (r) {
                        case 1:
                            t.pageWrap[e].css({
                                zIndex: t.totalPages,
                                display: ""
                            });
                            break;
                        case 2:
                            t.pageWrap[e].css({
                                zIndex: t.totalPages - 1,
                                display: ""
                            });
                            break;
                        case 0:
                            t.pageWrap[e].css({
                                zIndex: 0,
                                display: t.pageObjs[e].hasClass("fixed") ? "" : "none"
                            })
                    }
                    return r
                },
                options: function(t) {
                    if (t === undefined) return this.data().opts;
                    var n = this.data();
                    e.extend(n.opts, t), t.pages && this.turn("pages", t.pages), t.page && this.turn("page", t.page), t.display && this.turn("display", t.display), t.direction && this.turn("direction", t.direction), t.width && t.height && this.turn("size", t.width, t.height);
                    if (t.when)
                        for (var r in t.when) C(r, t.when) && this.unbind(r).bind(r, t.when[r]);
                    return this
                },
                version: function() {
                    return i
                }
            },
            m = {
                init: function(e) {
                    return this.data({
                        f: {
                            disabled: !1,
                            hover: !1,
                            effect: this.hasClass("hard") ? "hard" : "sheet"
                        }
                    }), this.flip("options", e), m._addPageWrapper.call(this), this
                },
                setData: function(t) {
                    var n = this.data();
                    return n.f = e.extend(n.f, t), this
                },
                options: function(t) {
                    var n = this.data().f;
                    return t ? (m.setData.call(this, {
                        opts: e.extend({}, n.opts || p, t)
                    }), this) : n.opts
                },
                z: function(e) {
                    var t = this.data().f;
                    return t.opts["z-index"] = e, t.fwrapper && t.fwrapper.css({
                        zIndex: e || parseInt(t.parent.css("z-index"), 10) || 0
                    }), this
                },
                _cAllowed: function() {
                    var e = this.data().f,
                        t = e.opts.page,
                        n = e.opts.turn.data(),
                        r = t % 2;
                    return e.effect == "hard" ? n.direction == "ltr" ? [r ? "r" : "l"] : [r ? "l" : "r"] : n.display == "single" ? t == 1 ? n.direction == "ltr" ? f.forward : f.backward : t == n.totalPages ? n.direction == "ltr" ? f.backward : f.forward : f.all : n.direction == "ltr" ? f[r ? "forward" : "backward"] : f[r ? "backward" : "forward"]
                },
                _cornerActivated: function(t) {
                    var n = this.data().f,
                        r = this.width(),
                        i = this.height(),
                        s = {
                            x: t.x,
                            y: t.y,
                            corner: ""
                        },
                        o = n.opts.cornerSize;
                    if (s.x <= 0 || s.y <= 0 || s.x >= r || s.y >= i) return !1;
                    var u = m._cAllowed.call(this);
                    switch (n.effect) {
                        case "hard":
                            if (s.x > r - o) s.corner = "r";
                            else {
                                if (!(s.x < o)) return !1;
                                s.corner = "l"
                            }
                            break;
                        case "sheet":
                            if (s.y < o) s.corner += "t";
                            else {
                                if (!(s.y >= i - o)) return !1;
                                s.corner += "b"
                            }
                            if (s.x <= o) s.corner += "l";
                            else {
                                if (!(s.x >= r - o)) return !1;
                                s.corner += "r"
                            }
                    }
                    return !s.corner || e.inArray(s.corner, u) == -1 ? !1 : s
                },
                _isIArea: function(e) {
                    var t = this.data().f.parent.offset();
                    return e = u && e.originalEvent ? e.originalEvent.touches[0] : e, m._cornerActivated.call(this, {
                        x: e.pageX - t.left,
                        y: e.pageY - t.top
                    })
                },
                _c: function(e, t) {
                    t = t || 0;
                    switch (e) {
                        case "tl":
                            return S(t, t);
                        case "tr":
                            return S(this.width() - t, t);
                        case "bl":
                            return S(t, this.height() - t);
                        case "br":
                            return S(this.width() - t, this.height() - t);
                        case "l":
                            return S(t, 0);
                        case "r":
                            return S(this.width() - t, 0)
                    }
                },
                _c2: function(e) {
                    switch (e) {
                        case "tl":
                            return S(this.width() * 2, 0);
                        case "tr":
                            return S(-this.width(), 0);
                        case "bl":
                            return S(this.width() * 2, this.height());
                        case "br":
                            return S(-this.width(), this.height());
                        case "l":
                            return S(this.width() * 2, 0);
                        case "r":
                            return S(-this.width(), 0)
                    }
                },
                _foldingPage: function() {
                    var e = this.data().f;
                    if (!e) return;
                    var t = e.opts;
                    if (t.turn) return e = t.turn.data(), e.display == "single" ? t.next > 1 || t.page > 1 ? e.pageObjs[0] : null : e.pageObjs[t.next]
                },
                _backGradient: function() {
                    var t = this.data().f,
                        n = t.opts.turn.data(),
                        r = n.opts.gradients && (n.display == "single" || t.opts.page != 2 && t.opts.page != n.totalPages - 1);
                    return r && !t.bshadow && (t.bshadow = e("<div/>", y(0, 0, 1)).css({
                        position: "",
                        width: this.width(),
                        height: this.height()
                    }).appendTo(t.parent)), r
                },
                type: function() {
                    return this.data().f.effect
                },
                resize: function(e) {
                    var t = this.data().f,
                        n = t.opts.turn.data(),
                        r = this.width(),
                        i = this.height();
                    switch (t.effect) {
                        case "hard":
                            e && (t.wrapper.css({
                                width: r,
                                height: i
                            }), t.fpage.css({
                                width: r,
                                height: i
                            }), n.opts.gradients && (t.ashadow.css({
                                width: r,
                                height: i
                            }), t.bshadow.css({
                                width: r,
                                height: i
                            })));
                            break;
                        case "sheet":
                            if (e) {
                                var s = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)));
                                t.wrapper.css({
                                    width: s,
                                    height: s
                                }), t.fwrapper.css({
                                    width: s,
                                    height: s
                                }).children(":first-child").css({
                                    width: r,
                                    height: i
                                }), t.fpage.css({
                                    width: r,
                                    height: i
                                }), n.opts.gradients && t.ashadow.css({
                                    width: r,
                                    height: i
                                }), m._backGradient.call(this) && t.bshadow.css({
                                    width: r,
                                    height: i
                                })
                            }
                            if (t.parent.is(":visible")) {
                                var o = _(t.parent[0]);
                                t.fwrapper.css({
                                    top: o.top,
                                    left: o.left
                                }), o = _(t.opts.turn[0]), t.fparent.css({
                                    top: -o.top,
                                    left: -o.left
                                })
                            }
                            this.flip("z", t.opts["z-index"])
                    }
                },
                _addPageWrapper: function() {
                    var t, n = this.data().f,
                        i = n.opts.turn.data(),
                        s = this.parent();
                    n.parent = s;
                    if (!n.wrapper) switch (n.effect) {
                        case "hard":
                            var o = {};
                            o[r + "transform-style"] = "preserve-3d", o[r + "backface-visibility"] = "hidden", n.wrapper = e("<div/>", y(0, 0, 2)).css(o).appendTo(s).prepend(this), n.fpage = e("<div/>", y(0, 0, 1)).css(o).appendTo(s), i.opts.gradients && (n.ashadow = e("<div/>", y(0, 0, 0)).hide().appendTo(s), n.bshadow = e("<div/>", y(0, 0, 0)));
                            break;
                        case "sheet":
                            var u = this.width(),
                                a = this.height(),
                                f = Math.round(Math.sqrt(Math.pow(u, 2) + Math.pow(a, 2)));
                            n.fparent = n.opts.turn.data().fparent;
                            if (!n.fparent) {
                                var l = e("<div/>", {
                                    css: {
                                        "pointer-events": "none"
                                    }
                                }).hide();
                                l.data().flips = 0, l.css(y(0, 0, "auto", "visible").css).appendTo(n.opts.turn), n.opts.turn.data().fparent = l, n.fparent = l
                            }
                            this.css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: "auto",
                                right: "auto"
                            }), n.wrapper = e("<div/>", y(0, 0, this.css("z-index"))).appendTo(s).prepend(this), n.fwrapper = e("<div/>", y(s.offset().top, s.offset().left)).hide().appendTo(n.fparent), n.fpage = e("<div/>", y(0, 0, 0, "visible")).css({
                                cursor: "default"
                            }).appendTo(n.fwrapper), i.opts.gradients && (n.ashadow = e("<div/>", y(0, 0, 1)).appendTo(n.fpage)), m.setData.call(this, n)
                    }
                    m.resize.call(this, !0)
                },
                _fold: function(e) {
                    var t = this.data().f,
                        i = t.opts.turn.data(),
                        u = m._c.call(this, e.corner),
                        a = this.width(),
                        f = this.height();
                    switch (t.effect) {
                        case "hard":
                            e.corner == "l" ? e.x = Math.min(Math.max(e.x, 0), a * 2) : e.x = Math.max(Math.min(e.x, a), -a);
                            var l, c, h, p, d, v = i.totalPages,
                                g = t.opts["z-index"] || v,
                                y = {
                                    overflow: "visible"
                                },
                                b = u.x ? (u.x - e.x) / a : e.x / a,
                                w = b * 90,
                                x = w < 90;
                            switch (e.corner) {
                                case "l":
                                    p = "0% 50%", d = "100% 50%", x ? (l = 0, c = t.opts.next - 1 > 0, h = 1) : (l = "100%", c = t.opts.page + 1 < v, h = 0);
                                    break;
                                case "r":
                                    p = "100% 50%", d = "0% 50%", w = -w, a = -a, x ? (l = 0, c = t.opts.next + 1 < v, h = 0) : (l = "-100%", c = t.opts.page != 1, h = 1)
                            }
                            y[r + "perspective-origin"] = d, t.wrapper.transform("rotateY(" + w + "deg)" + "translate3d(0px, 0px, " + (this.attr("depth") || 0) + "px)", d), t.fpage.transform("translateX(" + a + "px) rotateY(" + (180 + w) + "deg)", p), t.parent.css(y), x ? (b = -b + 1, t.wrapper.css({
                                zIndex: g + 1
                            }), t.fpage.css({
                                zIndex: g
                            })) : (b -= 1, t.wrapper.css({
                                zIndex: g
                            }), t.fpage.css({
                                zIndex: g + 1
                            })), i.opts.gradients && (c ? t.ashadow.css({
                                display: "",
                                left: l,
                                backgroundColor: "rgba(0,0,0," + .5 * b + ")"
                            }).transform("rotateY(0deg)") : t.ashadow.hide(), t.bshadow.css({
                                opacity: -b + 1
                            }), x ? t.bshadow.parent()[0] != t.wrapper[0] && t.bshadow.appendTo(t.wrapper) : t.bshadow.parent()[0] != t.fpage[0] && t.bshadow.appendTo(t.fpage), A(t.bshadow, S(h * 100, 0), S((-h + 1) * 100, 0), [
                                [0, "rgba(0,0,0,0.3)"],
                                [1, "rgba(0,0,0,0)"]
                            ], 2));
                            break;
                        case "sheet":
                            var C = this,
                                k = 0,
                                L = 0,
                                O, M, _, D, P, H, B, j, F = S(0, 0),
                                I = S(0, 0),
                                q = S(0, 0),
                                R = m._foldingPage.call(this),
                                U = Math.tan(L),
                                z = i.opts.acceleration,
                                W = t.wrapper.height(),
                                X = e.corner.substr(0, 1) == "t",
                                V = e.corner.substr(1, 1) == "l",
                                $ = function() {
                                    var t = S(0, 0),
                                        r = S(0, 0);
                                    t.x = u.x ? u.x - e.x : e.x, n ? t.y = u.y ? u.y - e.y : e.y : t.y = 0, r.x = V ? a - t.x / 2 : e.x + t.x / 2, r.y = t.y / 2;
                                    var l = o - Math.atan2(t.y, t.x),
                                        c = l - Math.atan2(r.y, r.x),
                                        h = Math.max(0, Math.sin(c) * Math.sqrt(Math.pow(r.x, 2) + Math.pow(r.y, 2)));
                                    k = E(l), q = S(h * Math.sin(l), h * Math.cos(l));
                                    if (l > o) {
                                        q.x = q.x + Math.abs(q.y * t.y / t.x), q.y = 0;
                                        if (Math.round(q.x * Math.tan(s - l)) < f) return e.y = Math.sqrt(Math.pow(f, 2) + 2 * r.x * t.x), X && (e.y = f - e.y), $()
                                    }
                                    if (l > o) {
                                        var p = s - l,
                                            d = W - f / Math.sin(p);
                                        F = S(Math.round(d * Math.cos(p)), Math.round(d * Math.sin(p))), V && (F.x = -F.x), X && (F.y = -F.y)
                                    }
                                    M = Math.round(q.y / Math.tan(l) + q.x);
                                    var v = a - M,
                                        g = v * Math.cos(l * 2),
                                        y = v * Math.sin(l * 2);
                                    I = S(Math.round(V ? v - g : M + g), Math.round(X ? y : f - y));
                                    if (i.opts.gradients) {
                                        H = v * Math.sin(l);
                                        var b = m._c2.call(C, e.corner),
                                            w = Math.sqrt(Math.pow(b.x - e.x, 2) + Math.pow(b.y - e.y, 2)) / a;
                                        j = Math.sin(o * (w > 1 ? 2 - w : w)), B = Math.min(w, 1), P = H > 100 ? (H - 100) / H : 0, _ = S(H * Math.sin(l) / a * 100, H * Math.cos(l) / f * 100), m._backGradient.call(C) && (D = S(H * 1.2 * Math.sin(l) / a * 100, H * 1.2 * Math.cos(l) / f * 100), V || (D.x = 100 - D.x), X || (D.y = 100 - D.y))
                                    }
                                    return q.x = Math.round(q.x), q.y = Math.round(q.y), !0
                                },
                                J = function(e, n, r, s) {
                                    var o = ["0", "auto"],
                                        u = (a - W) * r[0] / 100,
                                        l = (f - W) * r[1] / 100,
                                        c = {
                                            left: o[n[0]],
                                            top: o[n[1]],
                                            right: o[n[2]],
                                            bottom: o[n[3]]
                                        },
                                        h = {},
                                        p = s != 90 && s != -90 ? V ? -1 : 1 : 0,
                                        d = r[0] + "% " + r[1] + "%";
                                    C.css(c).transform(N(s) + T(e.x + p, e.y, z), d), t.fpage.css(c).transform(N(s) + T(e.x + I.x - F.x - a * r[0] / 100, e.y + I.y - F.y - f * r[1] / 100, z) + N((180 / s - 2) * s), d), t.wrapper.transform(T(-e.x + u - p, -e.y + l, z) + N(-s), d), t.fwrapper.transform(T(-e.x + F.x + u, -e.y + F.y + l, z) + N(-s), d), i.opts.gradients && (r[0] && (_.x = 100 - _.x), r[1] && (_.y = 100 - _.y), h["box-shadow"] = "0 0 20px rgba(0,0,0," + .5 * j + ")", R.css(h), A(t.ashadow, S(V ? 100 : 0, X ? 0 : 100), S(_.x, _.y), [
                                        [P, "rgba(0,0,0,0)"],
                                        [(1 - P) * .8 + P, "rgba(0,0,0," + .2 * B + ")"],
                                        [1, "rgba(255,255,255," + .2 * B + ")"]
                                    ], 3, L), m._backGradient.call(C) && A(t.bshadow, S(V ? 0 : 100, X ? 0 : 100), S(D.x, D.y), [
                                        [.6, "rgba(0,0,0,0)"],
                                        [.8, "rgba(0,0,0," + .3 * B + ")"],
                                        [1, "rgba(0,0,0,0)"]
                                    ], 3))
                                };
                            switch (e.corner) {
                                case "l":
                                    break;
                                case "r":
                                    break;
                                case "tl":
                                    e.x = Math.max(e.x, 1), $(), J(q, [1, 0, 0, 1], [100, 0], k);
                                    break;
                                case "tr":
                                    e.x = Math.min(e.x, a - 1), $(), J(S(-q.x, q.y), [0, 0, 0, 1], [0, 0], -k);
                                    break;
                                case "bl":
                                    e.x = Math.max(e.x, 1), $(), J(S(q.x, -q.y), [1, 1, 0, 0], [100, 100], -k);
                                    break;
                                case "br":
                                    e.x = Math.min(e.x, a - 1), $(), J(S(-q.x, -q.y), [0, 1, 1, 0], [0, 100], k)
                            }
                    }
                    t.point = e
                },
                _moveFoldingPage: function(e) {
                    var t = this.data().f;
                    if (!t) return;
                    var n = t.opts.turn,
                        r = n.data(),
                        i = r.pagePlace;
                    if (e) {
                        var s = t.opts.next;
                        if (i[s] != t.opts.page) {
                            t.folding && m._moveFoldingPage.call(this, !1);
                            var o = m._foldingPage.call(this);
                            o.appendTo(t.fpage), i[s] = t.opts.page, t.folding = s
                        }
                        n.turn("update")
                    } else if (t.folding) {
                        if (r.pages[t.folding]) {
                            var u = r.pages[t.folding].data().f;
                            r.pageObjs[t.folding].appendTo(u.wrapper)
                        } else r.pageWrap[t.folding] && r.pageObjs[t.folding].appendTo(r.pageWrap[t.folding]);
                        t.folding in i && (i[t.folding] = t.folding), delete t.folding
                    }
                },
                _showFoldedPage: function(e, t) {
                    var n = m._foldingPage.call(this),
                        r = this.data(),
                        i = r.f,
                        s = i.visible;
                    if (n) {
                        if (!s || !i.point || i.point.corner != e.corner) {
                            var o = i.status == "hover" || i.status == "peel" || i.opts.turn.data().mouseAction ? e.corner : null;
                            s = !1;
                            if (O("start", this, [i.opts, o]) == "prevented") return !1
                        }
                        if (t) {
                            var u = this,
                                a = i.point && i.point.corner == e.corner ? i.point : m._c.call(this, e.corner, 1);
                            this.animatef({
                                from: [a.x, a.y],
                                to: [e.x, e.y],
                                duration: 500,
                                frame: function(t) {
                                    e.x = Math.round(t[0]), e.y = Math.round(t[1]), m._fold.call(u, e)
                                }
                            })
                        } else m._fold.call(this, e), r.effect && !r.effect.turning && this.animatef(!1);
                        if (!s) switch (i.effect) {
                            case "hard":
                                i.visible = !0, m._moveFoldingPage.call(this, !0), i.fpage.show(), i.opts.shadows && i.bshadow.show();
                                break;
                            case "sheet":
                                i.visible = !0, i.fparent.show().data().flips++, m._moveFoldingPage.call(this, !0), i.fwrapper.show(), i.bshadow && i.bshadow.show()
                        }
                        return !0
                    }
                    return !1
                },
                hide: function() {
                    var e = this.data().f,
                        t = e.opts.turn.data(),
                        n = m._foldingPage.call(this);
                    switch (e.effect) {
                        case "hard":
                            t.opts.gradients && (e.bshadowLoc = 0, e.bshadow.remove(), e.ashadow.hide()), e.wrapper.transform(""), e.fpage.hide();
                            break;
                        case "sheet":
                            --e.fparent.data().flips === 0 && e.fparent.hide(), this.css({
                                left: 0,
                                top: 0,
                                right: "auto",
                                bottom: "auto"
                            }).transform(""), e.wrapper.transform(""), e.fwrapper.hide(), e.bshadow && e.bshadow.hide(), n.transform("")
                    }
                    return e.visible = !1, this
                },
                hideFoldedPage: function(e) {
                    var t = this.data().f;
                    if (!t.point) return;
                    var n = this,
                        r = t.point,
                        i = function() {
                            t.point = null, t.status = "", n.flip("hide"), n.trigger("end", [t.opts, !1])
                        };
                    if (e) {
                        var s = m._c.call(this, r.corner),
                            o = r.corner.substr(0, 1) == "t",
                            u = o ? Math.min(0, r.y - s.y) / 2 : Math.max(0, r.y - s.y) / 2,
                            a = S(r.x, r.y + u),
                            f = S(s.x, s.y - u);
                        this.animatef({
                            from: 0,
                            to: 1,
                            frame: function(e) {
                                var t = b(r, a, f, s, e);
                                r.x = t.x, r.y = t.y, m._fold.call(n, r)
                            },
                            complete: i,
                            duration: 800,
                            hiding: !0
                        })
                    } else this.animatef(!1), i()
                },
                turnPage: function(e) {
                    var t = this,
                        n = this.data().f,
                        r = n.opts.turn.data();
                    e = {
                        corner: n.corner ? n.corner.corner : e || m._cAllowed.call(this)[0]
                    };
                    var i = n.point || m._c.call(this, e.corner, n.opts.turn ? r.opts.elevation : 0),
                        s = m._c2.call(this, e.corner);
                    this.trigger("flip").animatef({
                        from: 0,
                        to: 1,
                        frame: function(n) {
                            var r = b(i, i, s, s, n);
                            e.x = r.x, e.y = r.y, m._showFoldedPage.call(t, e)
                        },
                        complete: function() {
                            t.trigger("end", [n.opts, !0])
                        },
                        duration: r.opts.duration,
                        turning: !0
                    }), n.corner = null
                },
                moving: function() {
                    return "effect" in this.data()
                },
                isTurning: function() {
                    return this.flip("moving") && this.data().effect.turning
                },
                corner: function() {
                    return this.data().f.corner
                },
                _eventStart: function(e) {
                    var t = this.data().f,
                        n = t.opts.turn;
                    if (!t.corner && !t.disabled && !this.flip("isTurning") && t.opts.page == n.data().pagePlace[t.opts.page]) {
                        t.corner = m._isIArea.call(this, e);
                        if (t.corner && m._foldingPage.call(this)) return this.trigger("pressed", [t.point]), m._showFoldedPage.call(this, t.corner), !1;
                        t.corner = null
                    }
                },
                _eventMove: function(e) {
                    var t = this.data().f;
                    if (!t.disabled) {
                        e = u ? e.originalEvent.touches : [e];
                        if (t.corner) {
                            var n = t.parent.offset();
                            t.corner.x = e[0].pageX - n.left, t.corner.y = e[0].pageY - n.top, m._showFoldedPage.call(this, t.corner)
                        } else if (t.hover && !this.data().effect && this.is(":visible")) {
                            var r = m._isIArea.call(this, e[0]);
                            if (r) {
                                if (t.effect == "sheet" && r.corner.length == 2 || t.effect == "hard") {
                                    t.status = "hover";
                                    var i = m._c.call(this, r.corner, t.opts.cornerSize / 2);
                                    r.x = i.x, r.y = i.y, m._showFoldedPage.call(this, r, !0)
                                }
                            } else t.status == "hover" && (t.status = "", m.hideFoldedPage.call(this, !0))
                        }
                    }
                },
                _eventEnd: function() {
                    var e = this.data().f,
                        t = e.corner;
                    !e.disabled && t && O("released", this, [e.point || t]) != "prevented" && m.hideFoldedPage.call(this, !0), e.corner = null
                },
                disable: function(e) {
                    return m.setData.call(this, {
                        disabled: e
                    }), this
                },
                hover: function(e) {
                    return m.setData.call(this, {
                        hover: e
                    }), this
                },
                peel: function(t, n) {
                    var r = this.data().f;
                    if (t) {
                        if (e.inArray(t, f.all) == -1) throw M("Corner " + t + " is not permitted");
                        if (e.inArray(t, m._cAllowed.call(this)) != -1) {
                            var i = m._c.call(this, t, r.opts.cornerSize / 2);
                            r.status = "peel", m._showFoldedPage.call(this, {
                                corner: t,
                                x: i.x,
                                y: i.y
                            }, n)
                        }
                    } else r.status = "", m.hideFoldedPage.call(this, n);
                    return this
                }
            };
        window.requestAnim = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }(), e.extend(e.fn, {
            flip: function() {
                return g(e(this[0]), m, arguments)
            },
            turn: function() {
                return g(e(this[0]), v, arguments)
            },
            transform: function(e, t) {
                var n = {};
                return t && (n[r + "transform-origin"] = t), n[r + "transform"] = e, this.css(n)
            },
            animatef: function(t) {
                var n = this.data();
                n.effect && n.effect.stop();
                if (t) {
                    t.to.length || (t.to = [t.to]), t.from.length || (t.from = [t.from]);
                    var r = [],
                        i = t.to.length,
                        s = !0,
                        o = this,
                        u = (new Date).getTime(),
                        a = function() {
                            if (!n.effect || !s) return;
                            var e = [],
                                f = Math.min(t.duration, (new Date).getTime() - u);
                            for (var l = 0; l < i; l++) e.push(n.effect.easing(1, f, t.from[l], r[l], t.duration));
                            t.frame(i == 1 ? e[0] : e), f == t.duration ? (delete n.effect, o.data(n), t.complete && t.complete()) : window.requestAnim(a)
                        };
                    for (var f = 0; f < i; f++) r.push(t.to[f] - t.from[f]);
                    n.effect = e.extend({
                        stop: function() {
                            s = !1
                        },
                        easing: function(e, t, n, r, i) {
                            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
                        }
                    }, t), this.data(n), a()
                } else delete n.effect
            }
        }), e.isTouch = u, e.mouseEvents = a, e.cssPrefix = k, e.cssTransitionEnd = L, e.findPos = _
    }(jQuery), define("turn", function() {}), define("book_preview", ["jquery"], function(e) {
        require(["turn"], function() {
            var t = {
                ratio: 1.38,
                init: function(t) {
                    var n = this;
                    document.addEventListener && (this.el = document.getElementById(t), this.resize(), this.plugins(), window.addEventListener("resize", function(t) {
                        var r = n.resize();
                        e(n.el).turn("size", r.width, r.height)
                    }))
                },
                resize: function() {
                    this.el.style.width = "", this.el.style.height = "";
                    var e = this.el.clientWidth,
                        t = Math.round(e / this.ratio),
                        n = Math.round(document.body.clientHeight * .9);
                    return t > n && (t = n, e = Math.round(t * this.ratio)), this.el.style.width = e + "px", this.el.style.height = t + "px", {
                        width: e,
                        height: t
                    }
                },
                plugins: function() {
                    e(this.el).turn({
                        gradients: !1,
                        acceleration: !0,
                        page: 2
                    })
                }
            };
            e("#flipbook").length && t.init("flipbook")
        })
    }), define("_welcome_header", ["jquery"], function(e) {
        function u(e) {
            return "http://assets.staticlp.com/kids/header/" + e
        }

        function a(e) {
            var t = [],
                e = typeof e != "object" ? [e] : e;
            for (var n = 0; n < e.length; n++) t[n] = new Image, t[n].src = e[n]
        }

        function f(e) {
            var t = [],
                e = typeof e != "object" ? [e] : e;
            for (var n = 0; n < e.length; n++) t[n] = document.createElement("audio"), "src" in t[n] ? t[n].autoPlay = !1 : (t[n] = document.createElement("bgsound"), t[n].volume = -1e4), t[n].src = e[n], document.body.appendChild(t[n])
        }

        function l(e, t, n, i) {
            n = typeof n != "undefined" ? n : !1, i = typeof i != "undefined" ? i : !1, e.mp3 ? (e.mp3.muted = r, e.mp3.pause(), e.mp3.currentTime = 0, n ? e.mp3.paused ? e.mp3.play() : e.mp3.pause() : e.mp3.play()) : (e.mp3 = new Audio(t), e.mp3.muted = r, e.mp3.play())
        }

        function c() {
            l(i, u("dance.mp3", !1));
            var t = e("#spaceship"),
                n = new TimelineMax({
                    repeat: 12,
                    yoyo: !0,
                    onComplete: p
                });
            n.add(TweenLite.to(t, .3, {
                top: "-=20px",
                left: "+=10px",
                rotation: -5,
                ease: Back.easeIn
            })), n.add(TweenLite.to(t, .3, {
                top: "+=20px",
                left: "+=10px",
                rotation: 5,
                ease: Back.easeOut
            }))
        }

        function h() {
            console.log("Starting spaceship colours");
            var t = e("#spaceship");
            t.addClass("animate")
        }

        function p() {
            console.log("Stopping spaceship colours");
            var t = e("#spaceship");
            t.removeClass("animate")
        }

        function d() {
            var e = {};
            l(e, u("burp.mp3"))
        }

        function v() {
            var t = {};
            l(t, u("rock-short.mp3"));
            var n = e("#statue");
            n.addClass("rock")
        }

        function m() {
            var t = {};
            setTimeout(function() {
                l(t, u("slurp.mp3"))
            }, 1);
            var n = e("#bird"),
                r = e("#icecream"),
                i = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeIn
                });
            r.addClass("tongue"), n.addClass("shocked"), i.add(TweenLite.to(r, 1.2, {
                rotation: -30
            })), setTimeout(function() {
                r.removeClass("tongue")
            }, 1e3)
        }

        function g() {
            var t = {};
            l(t, u("cow.mp3"));
            var n = $("#cow"),
                r = $("#temple"),
                i = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeIn
                }),
                s = new TimelineMax({
                    repeat: 2.8,
                    yoyo: !0,
                    delay: 3
                });
            i.add(TweenLite.to(n, 2.7, {
                top: "+=1px",
                rotation: -5
            })), i.add(TweenLite.to(n, .12, {
                top: "-=10px",
                left: "+=190px",
                width: "30px"
            })), i.add(TweenLite.to(n, .02, {
                opacity: "0"
            })), s.add(TweenLite.to(r, .05, {
                left: "-=10px",
                top: "-=10px",
                rotation: 5
            }))
        }

        function y() {
            var t = {};
            l(t, u("launch.mp3"));
            var n = e("#tower"),
                r = e("#tower-smoke .background-img"),
                i = new TimelineMax({
                    repeat: -1,
                    yoyo: !0
                });
            tlLaunch = new TimelineMax({
                repeat: 0,
                ease: Expo.easeIn
            }), tlSmoke = new TimelineMax({
                repeat: 0,
                ease: Expo.easeIn
            }), i.add(TweenLite.to(n, .01, {
                left: "-=2px"
            })), tlLaunch.add(TweenLite.to(n, 4.6, {
                top: "-=50px"
            })), tlLaunch.add(TweenLite.to(n, .3, {
                top: "-400px"
            })), tlSmoke.add(TweenLite.to(r, 2.6, {
                opacity: .7,
                width: "75%",
                marginTop: "-=50px"
            })), tlSmoke.add(TweenLite.to(r, 2, {
                opacity: 1
            })), tlSmoke.add(TweenLite.to(r, 1, {
                opacity: 0,
                width: "100%"
            }))
        }

        function b() {
            var t = e("#tiger"),
                n = {};
            l(n, u("meow.mp3")), setTimeout(function() {
                t.addClass("drinking")
            }, 100), setTimeout(function() {
                t.removeClass("drinking")
            }, 2e3)
        }

        function w() {
            var t = e("#worm"),
                n = {};
            l(n, u("whistle.mp3")), setTimeout(function() {
                t.addClass("animate")
            }, 100), setTimeout(function() {
                t.removeClass("animate")
            }, 2e3)
        }

        function E() {
            l(planeMusic = {}, u("swoosh.mp3"));
            var t = e("#plane"),
                n = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeIn
                });
            n.add(TweenLite.to(t, .2, {
                left: "2000px",
                top: "-100px"
            }))
        }

        function S() {
            l(fishMusic = {}, u("bubbles.mp3"));
            var t = e("#fish"),
                n = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeIn
                });
            n.add(TweenLite.to(t, 1, {
                left: "-=5px"
            })), n.add(TweenLite.to(t, .2, {
                left: "300px"
            }))
        }

        function x() {
            setTimeout(function() {
                l(monkeyMusic = {}, u("boing.mp3"))
            }, 100);
            var t = e("#monkey"),
                n = e("#boat"),
                r = new TimelineMax({
                    repeat: 1,
                    ease: Strong.easeOut,
                    delay: 0,
                    yoyo: !0
                }),
                i = new TimelineMax({
                    repeat: 0,
                    ease: Strong.easeOut,
                    delay: .15,
                    yoyo: !1
                }),
                s = new TimelineMax({
                    repeat: 1,
                    ease: Expo.easeIn,
                    delay: 0,
                    yoyo: !0
                });
            r.add(TweenLite.to(t, .1, {
                top: "+=5px",
                left: "-=2px",
                rotation: "+=2"
            })), r.add(TweenLite.to(t, .5, {
                top: "-=120px",
                left: "+=45px",
                rotation: "-=5"
            })), i.add(TweenLite.to(t, 1, {
                rotation: "-=360"
            })), s.add(TweenLite.to(n, .1, {
                rotation: "-=2"
            })), s.add(TweenLite.to(n, .5, {
                rotation: "+=30"
            }))
        }

        function T() {
            l(shuttleMusic = {}, u("whee.mp3"));
            var t = e("#shuttle"),
                n = e("#parachuter"),
                r = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeInOut,
                    delay: .2
                });
            setTimeout(function() {
                t.addClass("open")
            }, 100), setTimeout(function() {
                t.removeClass("open")
            }, 1e3), r.add(TweenLite.to(n, .01, {
                opacity: "0"
            })), r.add(TweenLite.to(n, .1, {
                top: "69px",
                rotation: 0
            })), r.add(TweenLite.to(n, .01, {
                opacity: "1"
            })), r.add(TweenLite.to(n, 2.25, {
                top: "+=180px",
                rotation: 720
            }))
        }

        function N() {
            var r = e("#globe"),
                i = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeIn
                });
            tlGlobeOut = new TimelineMax({
                repeat: 0,
                ease: Expo.easeIn
            }), n < 6 ? (l(globeMusic = {}, u("grinding.mp3")), i.add(TweenLite.to(r, 3.74, {
                rotation: "+=" + t
            }))) : (i.add(TweenLite.to(r, 1, {
                left: "+=2000"
            })), l(this, u("swoosh.mp3"))), t += t, n++
        }

        function C() {
            var t = e("#bus");
            l(busMusic = {}, u("horn.mp3")), setTimeout(function() {
                t.addClass("animate")
            }, 100), setTimeout(function() {
                t.removeClass("animate")
            }, 300), setTimeout(function() {
                t.addClass("animate")
            }, 500), setTimeout(function() {
                t.removeClass("animate")
            }, 700)
        }

        function k() {
            l(this, u("boost.mp3"));
            var t = e("#balloon"),
                n = new TimelineMax({
                    repeat: 0,
                    ease: Expo.easeOut
                });
            setTimeout(function() {
                t.addClass("fire")
            }, 500), setTimeout(function() {
                t.removeClass("fire")
            }, 1e3), n.add(TweenLite.to(t, .5, {
                top: "-=1px"
            })), n.add(TweenLite.to(t, .5, {
                top: "-=20px"
            })), n.add(TweenLite.to(t, 5, {
                top: "+=21px"
            }))
        }

        function L() {
            function t() {
                e("#flash").hide()
            }
            l(flashMusic = {}, u("flash.mp3"));
            var n = e("#flash"),
                r = e("#header-container");
            tlFlash = new TimelineMax({
                repeat: 0,
                ease: Expo.easeOut,
                onComplete: t
            }), n.show(), r.addClass("blur"), setTimeout(function() {
                e("#header-container").removeClass("blur")
            }, 2e3), tlFlash.add(TweenLite.to(n, .02, {
                opacity: 1
            })), tlFlash.add(TweenLite.to(n, 3, {
                opacity: 0
            }))
        }

        function A() {
            console.log("Starting dancer spin"), l(dancerMusic = {}, u("bells.mp3"));
            var t = e("#dancer");
            t.toggleClass("animate")
        }

        function O(e) {
            r === !0 ? (r = !1, e.removeClass("muted")) : (r = !0, e.addClass("muted"))
        }
        window.console || (window.console = {}, window.console.log = function() {});
        var t = 75,
            n = 0,
            r = !1,
            i = {},
            s = [u("bells.mp3"), u("boing.mp3"), u("boost.mp3"), u("bubbles.mp3"), u("burp.mp3"), u("cow.mp3"), u("dance.mp3"), u("flash.mp3"), u("grinding.mp3"), u("horn.mp3"), u("launch.mp3"), u("meow.mp3"), u("slurp.mp3"), u("swoosh.mp3"), u("rock-short.mp3"), u("swoosh.mp3"), u("whee.mp3"), u("whistle.mp3")],
            o = [u("astro.png"), u("balloon-fire.png"), u("bird-shocked.png"), u("bus-lights.png"), u("burger-open.png"), u("icecream-tongue.png"), u("shuttle-open.png"), u("smoke.png"), u("statue-rock.png"), u("tiger-high.png"), u("worm.png")];
        e(document).ready(function() {
            a(o), f(s), e("#spaceship").click(function() {
                c(), h()
            }), e("#tower").click(function() {
                y(), e("#tower").unbind("click")
            }), e("#burger").mouseenter(function() {
                d()
            }), e("#fish").click(function() {
                S()
            }), e("#balloon").click(function() {
                k()
            }), e("#statue").click(function() {
                v()
            }), e("#camera").click(function() {
                L()
            }), e("#tiger").click(function() {
                b()
            }), e("#dancer").click(function() {
                A()
            }), e("#plane").click(function() {
                E()
            }), e("#shuttle").click(function() {
                T()
            }), e("#bus").click(function() {
                C()
            }), e("#cow").click(function() {
                g(), e("#cow").unbind("click")
            }), e("#temple").click(function() {
                g(), e("#temple").unbind("click")
            }), e("#monkey, #boat").click(function() {
                x()
            }), e("#orange").click(function() {
                w()
            }), e("#globe").click(function() {
                N()
            }), e("#bird").click(function() {
                m()
            }), e("#volume").click(function() {
                O(e(this))
            })
        })
    }),
    function(e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, r = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote], button[data-confirm]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var t = e("meta[name=csrf-token]").attr("content"),
                    n = e("meta[name=csrf-param]").attr("content");
                e('form input[name="' + n + '"]').val(t)
            },
            fire: function(t, n, r) {
                var i = e.Event(n);
                return t.trigger(i, r), i.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e.attr("href")
            },
            handleRemote: function(r) {
                var i, s, o, u, a, f, l, c;
                if (n.fire(r, "ajax:before")) {
                    u = r.data("cross-domain"), a = u === t ? null : u, f = r.data("with-credentials") || null, l = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                    if (r.is("form")) {
                        i = r.attr("method"), s = r.attr("action"), o = r.serializeArray();
                        var h = r.data("ujs:submit-button");
                        h && (o.push(h), r.data("ujs:submit-button", null))
                    } else r.is(n.inputChangeSelector) ? (i = r.data("method"), s = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", s = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : (i = r.data("method"), s = n.href(r), o = r.data("params") || null);
                    return c = {
                        type: i || "GET",
                        data: o,
                        dataType: l,
                        beforeSend: function(e, i) {
                            i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script);
                            if (!n.fire(r, "ajax:beforeSend", [e, i])) return !1;
                            r.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            r.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            r.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            r.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: a
                    }, f && (c.xhrFields = {
                        withCredentials: f
                    }), s && (c.url = s), n.ajax(c)
                }
                return !1
            },
            handleMethod: function(r) {
                var i = n.href(r),
                    s = r.data("method"),
                    o = r.attr("target"),
                    u = e("meta[name=csrf-token]").attr("content"),
                    a = e("meta[name=csrf-param]").attr("content"),
                    f = e('<form method="post" action="' + i + '"></form>'),
                    l = '<input name="_method" value="' + s + '" type="hidden" />';
                a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, r;
                n = e.is("button") ? "html" : "val", r = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), r !== t && e[n](r), e.prop("disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            },
            allowAction: function(e) {
                var t = e.data("confirm"),
                    r = !1,
                    i;
                return t ? (n.fire(e, "confirm") && (r = n.confirm(t), i = n.fire(e, "confirm:complete", [r])), r && i) : !0
            },
            blankInputs: function(t, n, r) {
                var i = e(),
                    s, o, u = n || "input,textarea",
                    a = t.find(u);
                return a.each(function() {
                    s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
                    if (!o == !r) {
                        if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                        i = i.add(s)
                    }
                }), i.length ? i : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var r = e.data("disable-with");
                e.data("ujs:enable-with", e.html()), r !== t && e.html(r), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
            e.crossDomain || n.CSRFProtection(r)
        }), r.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), r.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), r.delegate(n.linkClickSelector, "click.rails", function(r) {
            var i = e(this),
                s = i.data("method"),
                o = i.data("params"),
                u = r.metaKey || r.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(r);
            !u && i.is(n.linkDisableSelector) && n.disableElement(i);
            if (i.data("remote") !== t) {
                if (u && (!s || s === "GET") && !o) return !0;
                var a = n.handleRemote(i);
                return a === !1 ? n.enableElement(i) : a.error(function() {
                    n.enableElement(i)
                }), !1
            }
            if (i.data("method")) return n.handleMethod(i), !1
        }), r.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            r.is(n.buttonDisableSelector) && n.disableFormElement(r);
            var i = n.handleRemote(r);
            return i === !1 ? n.enableFormElement(r) : i.error(function() {
                n.enableFormElement(r)
            }), !1
        }), r.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var r = e(this);
            return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
        }), r.delegate(n.formSubmitSelector, "submit.rails", function(r) {
            var i = e(this),
                s = i.data("remote") !== t,
                o, u;
            if (!n.allowAction(i)) return n.stopEverything(r);
            if (i.attr("novalidate") == t) {
                o = n.blankInputs(i, n.requiredInputSelector);
                if (o && n.fire(i, "ajax:aborted:required", [o])) return n.stopEverything(r)
            }
            if (s) {
                u = n.nonBlankInputs(i, n.fileInputSelector);
                if (u) {
                    setTimeout(function() {
                        n.disableFormElements(i)
                    }, 13);
                    var a = n.fire(i, "ajax:aborted:file", [u]);
                    return a || setTimeout(function() {
                        n.enableFormElements(i)
                    }, 13), a
                }
                return n.handleRemote(i), !1
            }
            setTimeout(function() {
                n.disableFormElements(i)
            }, 13)
        }), r.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            var i = r.attr("name"),
                s = i ? {
                    name: i,
                    value: r.val()
                } : null;
            r.closest("form").data("ujs:submit-button", s)
        }), r.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this == t.target && n.disableFormElements(e(this))
        }), r.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this == t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery), define("jquery_ujs", function() {}), typeof Object.create != "function" && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, n) {
        var r = {
            init: function(t, n) {
                var r = this;
                r.$elem = e(n), r.options = e.extend({}, e.fn.owlCarousel.options, r.$elem.data(), t), r.userOptions = t, r.loadContent()
            },
            loadContent: function() {
                function r(e) {
                    var n, r = "";
                    if (typeof t.options.jsonSuccess == "function") t.options.jsonSuccess.apply(this, [e]);
                    else {
                        for (n in e.owl) e.owl.hasOwnProperty(n) && (r += e.owl[n].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    n;
                typeof t.options.beforeInit == "function" && t.options.beforeInit.apply(this, [t.$elem]), typeof t.options.jsonPath == "string" ? (n = t.options.jsonPath, e.getJSON(n, r)) : t.logIn()
            },
            logIn: function() {
                var e = this;
                e.$elem.data("owl-originalStyles", e.$elem.attr("style")), e.$elem.data("owl-originalClasses", e.$elem.attr("class")), e.$elem.css({
                    opacity: 0
                }), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible = null, e.setVars()
            },
            setVars: function() {
                var e = this;
                if (e.$elem.children().length === 0) return !1;
                e.baseClass(), e.eventTypes(), e.$userItems = e.$elem.children(), e.itemsAmount = e.$userItems.length, e.wrapItems(), e.$owlItems = e.$elem.find(".owl-item"), e.$owlWrapper = e.$elem.find(".owl-wrapper"), e.playDirection = "next", e.prevItem = 0, e.prevArr = [0], e.currentItem = 0, e.customEvents(), e.onStartup()
            },
            onStartup: function() {
                var e = this;
                e.updateItems(), e.calculateAll(), e.buildControls(), e.updateControls(), e.response(), e.moveEvents(), e.stopOnHover(), e.owlStatus(), e.options.transitionStyle !== !1 && e.transitionTypes(e.options.transitionStyle), e.options.autoPlay === !0 && (e.options.autoPlay = 1e4), e.play(), e.$elem.find(".owl-wrapper").css("display", "block"), e.$elem.is(":visible") ? e.$elem.css("opacity", 1) : e.watchVisibility(), e.onstartup = !1, e.eachMoveUpdate(), typeof e.options.afterInit == "function" && e.options.afterInit.apply(this, [e.$elem])
            },
            eachMoveUpdate: function() {
                var e = this;
                e.options.lazyLoad === !0 && e.lazyLoad(), e.options.autoHeight === !0 && e.autoHeight(), e.onVisibleItems(), typeof e.options.afterAction == "function" && e.options.afterAction.apply(this, [e.$elem])
            },
            updateVars: function() {
                var e = this;
                typeof e.options.beforeUpdate == "function" && e.options.beforeUpdate.apply(this, [e.$elem]), e.watchVisibility(), e.updateItems(), e.calculateAll(), e.updatePosition(), e.updateControls(), e.eachMoveUpdate(), typeof e.options.afterUpdate == "function" && e.options.afterUpdate.apply(this, [e.$elem])
            },
            reload: function() {
                var e = this;
                t.setTimeout(function() {
                    e.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var e = this;
                if (e.$elem.is(":visible") !== !1) return !1;
                e.$elem.css({
                    opacity: 0
                }), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), e.checkVisible = t.setInterval(function() {
                    e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(e.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var e = this;
                e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), e.wrapperOuter = e.$elem.find(".owl-wrapper-outer"), e.$elem.css("display", "block")
            },
            baseClass: function() {
                var e = this,
                    t = e.$elem.hasClass(e.options.baseClass),
                    n = e.$elem.hasClass(e.options.theme);
                t || e.$elem.addClass(e.options.baseClass), n || e.$elem.addClass(e.options.theme)
            },
            updateItems: function() {
                var t = this,
                    n, r;
                if (t.options.responsive === !1) return !1;
                if (t.options.singleItem === !0) return t.options.items = t.orignalItems = 1, t.options.itemsCustom = !1, t.options.itemsDesktop = !1, t.options.itemsDesktopSmall = !1, t.options.itemsTablet = !1, t.options.itemsTabletSmall = !1, t.options.itemsMobile = !1, !1;
                n = e(t.options.responsiveBaseWidth).width(), n > (t.options.itemsDesktop[0] || t.orignalItems) && (t.options.items = t.orignalItems);
                if (t.options.itemsCustom !== !1) {
                    t.options.itemsCustom.sort(function(e, t) {
                        return e[0] - t[0]
                    });
                    for (r = 0; r < t.options.itemsCustom.length; r += 1) t.options.itemsCustom[r][0] <= n && (t.options.items = t.options.itemsCustom[r][1])
                } else n <= t.options.itemsDesktop[0] && t.options.itemsDesktop !== !1 && (t.options.items = t.options.itemsDesktop[1]), n <= t.options.itemsDesktopSmall[0] && t.options.itemsDesktopSmall !== !1 && (t.options.items = t.options.itemsDesktopSmall[1]), n <= t.options.itemsTablet[0] && t.options.itemsTablet !== !1 && (t.options.items = t.options.itemsTablet[1]), n <= t.options.itemsTabletSmall[0] && t.options.itemsTabletSmall !== !1 && (t.options.items = t.options.itemsTabletSmall[1]), n <= t.options.itemsMobile[0] && t.options.itemsMobile !== !1 && (t.options.items = t.options.itemsMobile[1]);
                t.options.items > t.itemsAmount && t.options.itemsScaleUp === !0 && (t.options.items = t.itemsAmount)
            },
            response: function() {
                var n = this,
                    r, i;
                if (n.options.responsive !== !0) return !1;
                i = e(t).width(), n.resizer = function() {
                    e(t).width() !== i && (n.options.autoPlay !== !1 && t.clearInterval(n.autoPlayInterval), t.clearTimeout(r), r = t.setTimeout(function() {
                        i = e(t).width(), n.updateVars()
                    }, n.options.responsiveRefreshRate))
                }, e(t).resize(n.resizer)
            },
            updatePosition: function() {
                var e = this;
                e.jumpTo(e.currentItem), e.options.autoPlay !== !1 && e.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    n = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(i) {
                    var s = e(this);
                    s.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(i));
                    if (i % t.options.items === 0 || i === r) i > r || (n += 1);
                    s.data("owl-roundPages", n)
                })
            },
            appendWrapperSizes: function() {
                var e = this,
                    t = e.$owlItems.length * e.itemWidth;
                e.$owlWrapper.css({
                    width: t * 2,
                    left: 0
                }), e.appendItemsSizes()
            },
            calculateAll: function() {
                var e = this;
                e.calculateWidth(), e.appendWrapperSizes(), e.loops(), e.max()
            },
            calculateWidth: function() {
                var e = this;
                e.itemWidth = Math.round(e.$elem.width() / e.options.items)
            },
            max: function() {
                var e = this,
                    t = (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth) * -1;
                return e.options.items > e.itemsAmount ? (e.maximumItem = 0, t = 0, e.maximumPixels = 0) : (e.maximumItem = e.itemsAmount - e.options.items, e.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t = this,
                    n = 0,
                    r = 0,
                    i, s, o;
                t.positionsInArray = [0], t.pagesInArray = [];
                for (i = 0; i < t.itemsAmount; i += 1) r += t.itemWidth, t.positionsInArray.push(-r), t.options.scrollPerPage === !0 && (s = e(t.$owlItems[i]), o = s.data("owl-roundPages"), o !== n && (t.pagesInArray[n] = t.positionsInArray[i], n = o))
            },
            buildControls: function() {
                var t = this;
                if (t.options.navigation === !0 || t.options.pagination === !0) t.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem);
                t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    n = e('<div class="owl-buttons"/>');
                t.owlControls.append(n), t.buttonPrev = e("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                }), t.buttonNext = e("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                }), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(e) {
                    e.preventDefault()
                }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                    n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var t = this,
                    n, r, i, s, o, u;
                if (t.options.pagination === !1) return !1;
                t.paginationWrapper.html(""), n = 0, r = t.itemsAmount - t.itemsAmount % t.options.items;
                for (s = 0; s < t.itemsAmount; s += 1) s % t.options.items === 0 && (n += 1, r === s && (i = t.itemsAmount - t.options.items), o = e("<div/>", {
                    "class": "owl-page"
                }), u = e("<span></span>", {
                    text: t.options.paginationNumbers === !0 ? n : "",
                    "class": t.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), o.append(u), o.data("owl-page", r === s ? i : s), o.data("owl-roundPages", n), t.paginationWrapper.append(o));
                t.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                if (t.options.pagination === !1) return !1;
                t.paginationWrapper.find(".owl-page").each(function() {
                    e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var e = this;
                if (e.options.navigation === !1) return !1;
                e.options.rewindNav === !1 && (e.currentItem === 0 && e.maximumItem === 0 ? (e.buttonPrev.addClass("disabled"), e.buttonNext.addClass("disabled")) : e.currentItem === 0 && e.maximumItem !== 0 ? (e.buttonPrev.addClass("disabled"), e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"), e.buttonNext.addClass("disabled")) : e.currentItem !== 0 && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"), e.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var e = this;
                e.updatePagination(), e.checkNavigation(), e.owlControls && (e.options.items >= e.itemsAmount ? e.owlControls.hide() : e.owlControls.show())
            },
            destroyControls: function() {
                var e = this;
                e.owlControls && e.owlControls.remove()
            },
            next: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1;
                if (t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0)) {
                    if (t.options.rewindNav !== !0) return t.currentItem = t.maximumItem, !1;
                    t.currentItem = 0, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            prev: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1;
                if (t.currentItem < 0) {
                    if (t.options.rewindNav !== !0) return t.currentItem = 0, !1;
                    t.currentItem = t.maximumItem, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            goTo: function(e, n, r) {
                var i = this,
                    s;
                if (i.isTransition) return !1;
                typeof i.options.beforeMove == "function" && i.options.beforeMove.apply(this, [i.$elem]), e >= i.maximumItem ? e = i.maximumItem : e <= 0 && (e = 0), i.currentItem = i.owl.currentItem = e;
                if (i.options.transitionStyle !== !1 && r !== "drag" && i.options.items === 1 && i.browser.support3d === !0) return i.swapSpeed(0), i.browser.support3d === !0 ? i.transition3d(i.positionsInArray[e]) : i.css2slide(i.positionsInArray[e], 1), i.afterGo(), i.singleItemTransition(), !1;
                s = i.positionsInArray[e], i.browser.support3d === !0 ? (i.isCss3Finish = !1, n === !0 ? (i.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    i.isCss3Finish = !0
                }, i.options.paginationSpeed)) : n === "rewind" ? (i.swapSpeed(i.options.rewindSpeed), t.setTimeout(function() {
                    i.isCss3Finish = !0
                }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    i.isCss3Finish = !0
                }, i.options.slideSpeed)), i.transition3d(s)) : n === !0 ? i.css2slide(s, i.options.paginationSpeed) : n === "rewind" ? i.css2slide(s, i.options.rewindSpeed) : i.css2slide(s, i.options.slideSpeed), i.afterGo()
            },
            jumpTo: function(e) {
                var t = this;
                typeof t.options.beforeMove == "function" && t.options.beforeMove.apply(this, [t.$elem]), e >= t.maximumItem || e === -1 ? e = t.maximumItem : e <= 0 && (e = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1), t.currentItem = t.owl.currentItem = e, t.afterGo()
            },
            afterGo: function() {
                var e = this;
                e.prevArr.push(e.currentItem), e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2], e.prevArr.shift(0), e.prevItem !== e.currentItem && (e.checkPagination(), e.checkNavigation(), e.eachMoveUpdate(), e.options.autoPlay !== !1 && e.checkAp()), typeof e.options.afterMove == "function" && e.prevItem !== e.currentItem && e.options.afterMove.apply(this, [e.$elem])
            },
            stop: function() {
                var e = this;
                e.apStatus = "stop", t.clearInterval(e.autoPlayInterval)
            },
            checkAp: function() {
                var e = this;
                e.apStatus !== "stop" && e.play()
            },
            play: function() {
                var e = this;
                e.apStatus = "play";
                if (e.options.autoPlay === !1) return !1;
                t.clearInterval(e.autoPlayInterval), e.autoPlayInterval = t.setInterval(function() {
                    e.next(!0)
                }, e.options.autoPlay)
            },
            swapSpeed: function(e) {
                var t = this;
                e === "slideSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : e === "paginationSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : typeof e != "string" && t.$owlWrapper.css(t.addCssSpeed(e))
            },
            addCssSpeed: function(e) {
                return {
                    "-webkit-transition": "all " + e + "ms ease",
                    "-moz-transition": "all " + e + "ms ease",
                    "-o-transition": "all " + e + "ms ease",
                    transition: "all " + e + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(e) {
                return {
                    "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                    transform: "translate3d(" + e + "px, 0px,0px)"
                }
            },
            transition3d: function(e) {
                var t = this;
                t.$owlWrapper.css(t.doTranslate(e))
            },
            css2move: function(e) {
                var t = this;
                t.$owlWrapper.css({
                    left: e
                })
            },
            css2slide: function(e, t) {
                var n = this;
                n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
                    left: e
                }, {
                    duration: t || n.options.slideSpeed,
                    complete: function() {
                        n.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var e = this,
                    r = "translate3d(0px, 0px, 0px)",
                    i = n.createElement("div"),
                    s, o, u, a;
                i.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r, s = /translate3d\(0px, 0px, 0px\)/g, o = i.style.cssText.match(s), u = o !== null && o.length === 1, a = "ontouchstart" in t || t.navigator.msMaxTouchPoints, e.browser = {
                    support3d: u,
                    isTouch: a
                }
            },
            moveEvents: function() {
                var e = this;
                if (e.options.mouseDrag !== !1 || e.options.touchDrag !== !1) e.gestures(), e.disabledEvents()
            },
            eventTypes: function() {
                var e = this,
                    t = ["s", "e", "x"];
                e.ev_types = {}, e.options.mouseDrag === !0 && e.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : e.options.mouseDrag === !1 && e.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : e.options.mouseDrag === !0 && e.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), e.ev_types.start = t[0], e.ev_types.move = t[1], e.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.owl", function(e) {
                    e.preventDefault()
                }), t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return e(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function s(e) {
                    if (e.touches !== undefined) return {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    };
                    if (e.touches === undefined) {
                        if (e.pageX !== undefined) return {
                            x: e.pageX,
                            y: e.pageY
                        };
                        if (e.pageX === undefined) return {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }
                }

                function o(t) {
                    t === "on" ? (e(n).on(r.ev_types.move, a), e(n).on(r.ev_types.end, f)) : t === "off" && (e(n).off(r.ev_types.move), e(n).off(r.ev_types.end))
                }

                function u(n) {
                    var u = n.originalEvent || n || t.event,
                        a;
                    if (u.which === 3) return !1;
                    if (r.itemsAmount <= r.options.items) return;
                    if (r.isCssFinish === !1 && !r.options.dragBeforeAnimFinish) return !1;
                    if (r.isCss3Finish === !1 && !r.options.dragBeforeAnimFinish) return !1;
                    r.options.autoPlay !== !1 && t.clearInterval(r.autoPlayInterval), r.browser.isTouch !== !0 && !r.$owlWrapper.hasClass("grabbing") && r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, e(this).css(r.removeTransition()), a = e(this).position(), i.relativePos = a.left, i.offsetX = s(u).x - a.left, i.offsetY = s(u).y - a.top, o("on"), i.sliding = !1, i.targetElement = u.target || u.srcElement
                }

                function a(o) {
                    var u = o.originalEvent || o || t.event,
                        a, f;
                    r.newPosX = s(u).x - i.offsetX, r.newPosY = s(u).y - i.offsetY, r.newRelativeX = r.newPosX - i.relativePos, typeof r.options.startDragging == "function" && i.dragging !== !0 && r.newRelativeX !== 0 && (i.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (r.newRelativeX > 8 || r.newRelativeX < -8) && r.browser.isTouch === !0 && (u.preventDefault !== undefined ? u.preventDefault() : u.returnValue = !1, i.sliding = !0), (r.newPosY > 10 || r.newPosY < -10) && i.sliding === !1 && e(n).off("touchmove.owl"), a = function() {
                        return r.newRelativeX / 5
                    }, f = function() {
                        return r.maximumPixels + r.newRelativeX / 5
                    }, r.newPosX = Math.max(Math.min(r.newPosX, a()), f()), r.browser.support3d === !0 ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function f(n) {
                    var s = n.originalEvent || n || t.event,
                        u, a, f;
                    s.target = s.target || s.srcElement, i.dragging = !1, r.browser.isTouch !== !0 && r.$owlWrapper.removeClass("grabbing"), r.newRelativeX < 0 ? r.dragDirection = r.owl.dragDirection = "left" : r.dragDirection = r.owl.dragDirection = "right", r.newRelativeX !== 0 && (u = r.getNewPosition(), r.goTo(u, !1, "drag"), i.targetElement === s.target && r.browser.isTouch !== !0 && (e(s.target).on("click.disable", function(t) {
                        t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                    }), a = e._data(s.target, "events").click, f = a.pop(), a.splice(0, 0, f))), o("off")
                }
                var r = this,
                    i = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0, r.$elem.on(r.ev_types.start, ".owl-wrapper", u)
            },
            getNewPosition: function() {
                var e = this,
                    t = e.closestItem();
                return t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    n = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    r = t.newPosX,
                    i = null;
                return e.each(n, function(s, o) {
                    r - t.itemWidth / 20 > n[s + 1] && r - t.itemWidth / 20 < o && t.moveDirection() === "left" ? (i = o, t.options.scrollPerPage === !0 ? t.currentItem = e.inArray(i, t.positionsInArray) : t.currentItem = s) : r + t.itemWidth / 20 < o && r + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) && t.moveDirection() === "right" && (t.options.scrollPerPage === !0 ? (i = n[s + 1] || n[n.length - 1], t.currentItem = e.inArray(i, t.positionsInArray)) : (i = n[s + 1], t.currentItem = s + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var e = this,
                    t;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var e = this;
                e.$elem.on("owl.next", function() {
                    e.next()
                }), e.$elem.on("owl.prev", function() {
                    e.prev()
                }), e.$elem.on("owl.play", function(t, n) {
                    e.options.autoPlay = n, e.play(), e.hoverStatus = "play"
                }), e.$elem.on("owl.stop", function() {
                    e.stop(), e.hoverStatus = "stop"
                }), e.$elem.on("owl.goTo", function(t, n) {
                    e.goTo(n)
                }), e.$elem.on("owl.jumpTo", function(t, n) {
                    e.jumpTo(n)
                })
            },
            stopOnHover: function() {
                var e = this;
                e.options.stopOnHover === !0 && e.browser.isTouch !== !0 && e.options.autoPlay !== !1 && (e.$elem.on("mouseover", function() {
                    e.stop()
                }), e.$elem.on("mouseout", function() {
                    e.hoverStatus !== "stop" && e.play()
                }))
            },
            lazyLoad: function() {
                var t = this,
                    n, r, i, s, o;
                if (t.options.lazyLoad === !1) return !1;
                for (n = 0; n < t.itemsAmount; n += 1) {
                    r = e(t.$owlItems[n]);
                    if (r.data("owl-loaded") === "loaded") continue;
                    i = r.data("owl-item"), s = r.find(".lazyOwl");
                    if (typeof s.data("src") != "string") {
                        r.data("owl-loaded", "loaded");
                        continue
                    }
                    r.data("owl-loaded") === undefined && (s.hide(), r.addClass("loading").data("owl-loaded", "checked")), t.options.lazyFollow === !0 ? o = i >= t.currentItem : o = !0, o && i < t.currentItem + t.options.items && s.length && t.lazyPreload(r, s)
                }
            },
            lazyPreload: function(e, n) {
                function o() {
                    e.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), r.options.lazyEffect === "fade" ? n.fadeIn(400) : n.show(), typeof r.options.afterLazyLoad == "function" && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function u() {
                    i += 1, r.completeImg(n.get(0)) || s === !0 ? o() : i <= 100 ? t.setTimeout(u, 100) : o()
                }
                var r = this,
                    i = 0,
                    s;
                n.prop("tagName") === "DIV" ? (n.css("background-image", "url(" + n.data("src") + ")"), s = !0) : n[0].src = n.data("src"), u()
            },
            autoHeight: function() {
                function s() {
                    var r = e(n.$owlItems[n.currentItem]).height();
                    n.wrapperOuter.css("height", r + "px"), n.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        n.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function o() {
                    i += 1, n.completeImg(r.get(0)) ? s() : i <= 100 ? t.setTimeout(o, 100) : n.wrapperOuter.css("height", "")
                }
                var n = this,
                    r = e(n.$owlItems[n.currentItem]).find("img"),
                    i;
                r.get(0) !== undefined ? (i = 0, o()) : s()
            },
            completeImg: function(e) {
                var t;
                return e.complete ? (t = typeof e.naturalWidth, t !== "undefined" && e.naturalWidth === 0 ? !1 : !0) : !1
            },
            onVisibleItems: function() {
                var t = this,
                    n;
                t.options.addClassActive === !0 && t.$owlItems.removeClass("active"), t.visibleItems = [];
                for (n = t.currentItem; n < t.currentItem + t.options.items; n += 1) t.visibleItems.push(n), t.options.addClassActive === !0 && e(t.$owlItems[n]).addClass("active");
                t.owl.visibleItems = t.visibleItems
            },
            transitionTypes: function(e) {
                var t = this;
                t.outClass = "owl-" + e + "-out", t.inClass = "owl-" + e + "-in"
            },
            singleItemTransition: function() {
                function a(e) {
                    return {
                        position: "relative",
                        left: e + "px"
                    }
                }
                var e = this,
                    t = e.outClass,
                    n = e.inClass,
                    r = e.$owlItems.eq(e.currentItem),
                    i = e.$owlItems.eq(e.prevItem),
                    s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    o = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    u = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": o + "px",
                    "-moz-perspective-origin": o + "px",
                    "perspective-origin": o + "px"
                }), i.css(a(s, 10)).addClass(t).on(u, function() {
                    e.endPrev = !0, i.off(u), e.clearTransStyle(i, t)
                }), r.addClass(n).on(u, function() {
                    e.endCurrent = !0, r.off(u), e.clearTransStyle(r, n)
                })
            },
            clearTransStyle: function(e, t) {
                var n = this;
                e.css({
                    position: "",
                    left: ""
                }).removeClass(t), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
            },
            owlStatus: function() {
                var e = this;
                e.owl = {
                    userOptions: e.userOptions,
                    baseElement: e.$elem,
                    userItems: e.$userItems,
                    owlItems: e.$owlItems,
                    currentItem: e.currentItem,
                    prevItem: e.prevItem,
                    visibleItems: e.visibleItems,
                    isTouch: e.browser.isTouch,
                    browser: e.browser,
                    dragDirection: e.dragDirection
                }
            },
            clearEvents: function() {
                var r = this;
                r.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", r.resizer)
            },
            unWrap: function() {
                var e = this;
                e.$elem.children().length !== 0 && (e.$owlWrapper.unwrap(), e.$userItems.unwrap().unwrap(), e.owlControls && e.owlControls.remove()), e.clearEvents(), e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var e = this;
                e.stop(), t.clearInterval(e.checkVisible), e.unWrap(), e.$elem.removeData()
            },
            reinit: function(t) {
                var n = this,
                    r = e.extend({}, n.userOptions, t);
                n.unWrap(), n.init(r, n.$elem)
            },
            addItem: function(e, t) {
                var n = this,
                    r;
                if (!e) return !1;
                if (n.$elem.children().length === 0) return n.$elem.append(e), n.setVars(), !1;
                n.unWrap(), t === undefined || t === -1 ? r = -1 : r = t, r >= n.$userItems.length || r === -1 ? n.$userItems.eq(-1).after(e) : n.$userItems.eq(r).before(e), n.setVars()
            },
            removeItem: function(e) {
                var t = this,
                    n;
                if (t.$elem.children().length === 0) return !1;
                e === undefined || e === -1 ? n = -1 : n = e, t.unWrap(), t.$userItems.eq(n).remove(), t.setVars()
            }
        };
        e.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (e(this).data("owl-init") === !0) return !1;
                e(this).data("owl-init", !0);
                var n = Object.create(r);
                n.init(t, this), e.data(this, "owlCarousel", n)
            })
        }, e.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document), define("owl.carousel", function() {}), require(["jquery", "lib/analytics/analytics", "app_core", "lib/page/controller", "lib/components/lightbox", "tweenmax", "book_preview", "_welcome_header", "jquery_ujs"], function(e, t, n, r, i) {
        window.lp.ads = {
            layers: ["2009.lonelyplanet", "kids"]
        };
        var s = e(".contact-area.form"),
            o = e(".contact-area.thanks");
        new r;
        var u = new t;
        u.trackView(), new i({
            $el: ".js-authors",
            $opener: ".author",
            showPreloader: !0
        }), new i({
            $el: "#videos",
            $opener: ".js-video-lightbox"
        }), e(".js-authors").on(":lightbox/open", function(t, n) {
            e(".lightbox").removeClass("video-lightbox").addClass("author-lightbox"), e(".js-authors").trigger(":lightbox/fetchContent", e(n.opener).attr("href"))
        }), e("#videos").on(":lightbox/open", function(t, n) {
            e(".lightbox").removeClass("author-lightbox").addClass("video-lightbox");
            var r = e(n.opener).attr("data-videoid"),
                i = e(n.opener).attr("data-bookid"),
                s = e(n.opener).attr("data-booktitle"),
                o = "<iframe src='https://www.youtube.com/embed/" + r + "' width='600' height='338' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><br/><p class='copy--body'>" + s + "</p><a href='" + i + "' class='btn'>View book</a>";
            e("#videos").trigger(":lightbox/renderContent", o)
        }), e("a.tab-contact").on("click", function(t) {
            t.preventDefault();
            var n = e(this),
                r = n.attr("data-region");
            s.show().attr("data-region", r), o.hide(), e(".tab-contact").removeClass("active"), n.addClass("active"), e(".region-form").html(n.text()), e(".hidden-region").val(r)
        }), e(".filter-link").on("click", function() {
            e(this).addClass("active").siblings("a").removeClass("active"), e(".crumbs").text(e(this).text())
        }), e(".contact-sales").on("submit", function() {
            s.hide(), o.show()
        }), require(["owl.carousel"], function() {
            function i() {
                e(".js-ebook-newsletter").hide(), e(".copy-body, img.ebook").addClass("is-hidden"), e(".js-ebook-newsletter-success").removeClass("is-hidden"), e(".success__hero").removeClass("is-hidden")
            }

            function s(t) {
                e(".js-app-desc").removeClass("active").eq(t).addClass("active")
            }
            var t = {
                items: 1,
                itemsDesktop: [1199, 1],
                itemsDesktopSmall: [980, 1],
                itemsTablet: [768, 1],
                itemsTabletSmall: !1,
                itemsMobile: [479, 1],
                slideSpeed: 200,
                paginationSpeed: 800,
                rewindSpeed: 1e3,
                autoPlay: !0,
                stopOnHover: !0,
                navigation: !1,
                navigationText: ["prev", "next"],
                rewindNav: !0,
                scrollPerPage: !1,
                pagination: !0,
                paginationNumbers: !1,
                responsive: !0,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: window
            };
            e(".main-owl-carousel").owlCarousel(t), e(".ipad-owl-carousel").owlCarousel(e.extend(t, {
                afterAction: function() {
                    s(this.currentItem)
                }
            }));
            var n = e(".main-owl-carousel").data("owlCarousel"),
                r = e(".ipad-owl-carousel").data("owlCarousel");
            e(".slider-prev").on("click", function() {
                n.prev()
            }), e(".slider-next").on("click", function() {
                n.next()
            }), e(".js-app-desc").on("click", function() {
                var t = e(this).index();
                r.jumpTo(t)
            }), e(".js-ebook-newsletter").on("submit", function(t) {
                t.preventDefault(), e.post(e(this).attr("action"), e(this).serialize()).always(function() {
                    i()
                })
            })
        })
    }), define("kids", function() {});