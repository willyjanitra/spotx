var topOverlayImpressions=1;
var zbsg_megalb=1;
var outbrain_enable=1;

var prestitial_enabled = 1;
var postitial_enabled = 1;
var catfish_enabled = 1;

var prestitial_domains = [ "www.straitstimes.com" , "www.asiaone.com", "www.beritaharian.sg", "tnp.straitstimes.com", "www.zaobao.com.sg", "stomp.straitstimes.com", "www.businesstimes.com.sg", "www.sgsme.sg" ];
var postitial_domains = [ "www.straitstimes.com" , "www.asiaone.com", "www.beritaharian.sg", "tnp.straitstimes.com", "www.zaobao.com.sg", "stomp.straitstimes.com", "www.businesstimes.com.sg", "www.sgsme.sg" ];
var catfish_domains = [ "www.straitstimes.com" , "www.asiaone.com", "www.beritaharian.sg", "tnp.straitstimes.com", "www.zaobao.com.sg", "stomp.straitstimes.com", "www.businesstimes.com.sg", "www.sgsme.sg" ];


var is_sphm_site=0;
var sphm_domainames = ["www.femalemag.com.sg","www.homeanddecor.com.sg","www.herworld.com","www.womensweekly.com.sg","www.iconsingapore.com","www.luxury-insider.com","www.nuyou.com.sg","www.thepeakmagazine.com.sg","www.harpersbazaar.com.sg","www.gameaxis.com","www.hardwarezone.com.sg" , "forums.hardwarezone.com.sg" ];


var parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

var URLParams = parseQueryString();

if(  typeof URLParams['anchor_preview'] === "undefined" )
{} else if ( URLParams['anchor_preview'] == "enabled" )
{
	if ( document.cookie.indexOf("catfishDisplayed=") == -1 )
	{
		expiry = new Date();expiry.setTime(expiry.getTime() + (4*60*60*1000));
		document.cookie = "catfishDisplayed=yes;path=/; expires=" + expiry.toGMTString();		
	}
}

/*
var anchor_preview_flag = false;
if(  typeof URLParams['anchor_preview'] === "undefined" )
{} else if ( URLParams['anchor_preview'] == "enabled" )
{
	anchor_preview_flag = true;
	fv_setcookie( 'anchor_preview' , 1, 1 );
}

if ( fv_getcookie( 'anchor_preview' ) == 1 )
{
	anchor_preview_flag = true;
}
*/

function straitsTimesOutstreamNotifcation(type, name, id) {

			
                if(name == "adComplete")
					{
					if(id == "dfp-ad-midarticlespecial")
						{window.top.postMessage(1, '*');}
					else if(id == "dfp-ad-midarticlespecial2")
						{window.top.postMessage(2, '*');}
					}

}

if( isInArray( window.location.hostname, sphm_domainames ))
{
	var is_sphm_site=1;
}


function parse_query_string(key) {
       var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
       var r=[], m;
       while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
       return r;
    }

var val_test_adid='';
var val_test_plid='';
var val_prebiddebug=false;

if(window.location.search.indexOf("test_adid") !== -1)
{
	val_test_adid=parse_query_string('test_adid');
}

if(window.location.search.indexOf("test_plid") !== -1)
{
	val_test_plid=parse_query_string('test_plid');
}

if(window.location.search.indexOf("smxdebug") !== -1)
{
	var val_prebiddebug=true;
}


function isIE() {
  ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  
  return is_ie; 
}

function isInArray(value, array)
{
	return array.indexOf(value) > -1;
}

var currenthost_temp = window.location.hostname;
if ( !isInArray( currenthost_temp , prestitial_domains ) ) { prestitial_enabled = 0; }
if ( !isInArray( currenthost_temp , postitial_domains ) ) { postitial_enabled = 0; }
if ( !isInArray( currenthost_temp , catfish_domains ) ) { catfish_enabled = 0; }
currenthost_temp = null;

///// Universal functions for site
var PREBID_TIMEOUT = 900;
var overlay_validity = 4;
var catfish_validity = 4;
var postitial_validity = 4;
if ( window.location.hostname == "www.straitstimes.com" ) { var postitial_validity = 1; }

var megalb_active=1;
window.addEventListener('message', receiveMessage, false);

var randImpression = String ( Math.floor(Math.random() * 20) + 1 ) ;

if(window.location.search.indexOf("rand_imp") !== -1)
{
	var randImpression=parse_query_string('rand_imp');	
}

var imu1_lazyload_sites = [ "www.straitstimes.com" , "www.beritaharian.sg", "tnp.straitstimes.com", "www.zaobao.com.sg"]; 

var lazyload_extended = false;

//randImpression<7  &&

if( isInArray( window.location.hostname, imu1_lazyload_sites )  )
	{
		var lazyload_adunits = [ 'imu1', 'imu2', 'imu3', 'imu4', 'imu5', 'lb2', 'lb3', 'lb4', 'lb5', 'bi1', 'bi2', 'bi3', 'bi4', 'bi5', 'bi6', 'sponsored1', 'sponsored2', 'sponsored3', 'sponsored4' ];

		lazyload_extended = true;
	}
else
	{
		var lazyload_adunits = [ 'imu2', 'bi1', 'bi2', 'bi3', 'bi4', 'bi5', 'bi6', 'sponsored1', 'sponsored2', 'sponsored3', 'sponsored4' ];
	}
	

function receiveMessage(evt)
{
	if (evt.data === 1)
	{
		if (window.location.hostname == "tnp.straitstimes.com")
			var content = document.getElementById("dfp-ad-imu1");
		else if (window.location.hostname == "www.straitstimes.com")
			var content = document.getElementById("dfp-ad-midarticlespecial-wrapper");
		else
			var content = document.getElementById("dfp-ad-midarticlespecial");
		content.style.overflow = 'hidden';
		var i = content.clientHeight;
		var totalHeight = content.clientHeight;
		var loop = setInterval(function()
		{
			if (content.clientHeight < 6)
			{
				clearInterval(loop);
				content.style.display = 'none';
				content.innerHTML = "";
			}
			content.style.height = i + 'px';
			i -= 5;
		}, 1);
	}
	else if ( evt.data === 2 )
	{
		var content = document.getElementById("dfp-ad-midarticlespecial2-wrapper");

		content.style.overflow = 'hidden';
		var i = content.clientHeight;
		var totalHeight = content.clientHeight;
		var loop = setInterval(function()
		{
			if (content.clientHeight < 6)
			{
				clearInterval(loop);
				content.style.display = 'none';
				content.innerHTML = "";
			}
			content.style.height = i + 'px';
			i -= 5;
		}, 1);
	}
}
///// Universal functions for site End
/// Generate Prebid Adunits


function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function converysizearray(val)
{
	
	var res = val.split(",");
	var adsize = [];
	for (var i = 0; i < res.length; i++)
	{
		var temp_size = res[i].trim();
		
		if (temp_size != 'fluid' && temp_size != '10x10' && temp_size != '1x1')
		{			
			
			var temp_size1 = temp_size.split("x");
			var v1 = parseInt(temp_size1[0].trim());
			var v2 = parseInt(temp_size1[1].trim());			
			

			/*if((window.location.hostname=='www.straitstimes.com' || window.location.hostname=='www.businesstimes.com.sg') && (v1==970 && v2==250))
			{}
			else if ((window.location.hostname=='www.zaobao.com.sg') && (v1==970))
			{}
			else
			{
				adsize.push([v1, v2]);
			}*/

			adsize.push([v1, v2]);

		}
	}	

	return adsize;
}

//// Skinning Targeting Key Value


//// Bonzai Logic
var currdomain=window.location.hostname;
var Screen_width=screen.width;
var skin_safe_area=340;
var sphl_domains = ["www.straitstimes.com","www.businesstimes.com.sg","www.zaobao.com.sg","www.asiaone.com","stomp.straitstimes.com","tnp.straitstimes.com","www.beritaharian.sg","www.businessinsider.sg", "www.businessinsider.my","www.tamilmurasu.com.sg"];
var skinver="2";
var sphl_site_width = [1440,1200,1260,1280,1200,1200,1156,1250,1250,1300];



var domainIndex = sphl_domains.indexOf(currdomain);

var skin_space=(Screen_width-sphl_site_width[domainIndex]);
if(skin_space>=skin_safe_area)
	skinver="1";


String.prototype.trimRight = function(charlist) {
  if (charlist === undefined)
    charlist = "\s";

  return this.replace(new RegExp("[" + charlist + "]+$"), "");
};

//// Bonzai Logic End


var adUnits = [];

window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];
var googletag = googletag ||{};
	googletag.cmd.push(function()
	{	
		

		/*if ( window.location.hostname=='www.straitstimes.com' || window.location.hostname=='www.zaobao.com.sg' || window.location.hostname=='www.businesstimes.com.sg' )
		{			
			var audid_n	 = window.localStorage.getItem('audid_n');  if ( audid_n  == null ){} else { googletag.pubads().setTargeting( "audid_n" , audid_n); }
		}*/
		
		if ( is_sphm_site == 0 )
		{
			if ( window.location.hostname == "www.zaobao.com.sg" && typeof grapeshot_tag !== 'undefined' )
			{
				gs_channels = grapeshot_tag;
			}
		
			var BrandSafe = "Y";
			
			if ( typeof gs_channels === 'undefined' )
			{ BrandSafe = "NA"; }
			else if ( typeof gs_channels === 'object' && gs_channels.length > 0 )
			{
				gs_channels.forEach( function( item ) {  
					
					if ( item.substring ( 0 , 3 ) == "gv_"  ||  item.substring ( 0 , 3 ) == "no_"  )
					{
						BrandSafe = "N";
					}
					
				});	
			}
			else if ( typeof gs_channels === 'object' && gs_channels.length == 0 )
			{ BrandSafe = "B"; }
			else if ( typeof gs_channels !== 'object' )
			{ BrandSafe = "NA"; }
			
			googletag.pubads().setTargeting("bs", BrandSafe );

		}


		//var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
		var userAgent = window.navigator.userAgent.toLowerCase();
		var safariBrowser = /safari/.test( userAgent );
		var isiOSDevice = /iphone|ipod|ipad/.test( userAgent ) || (userAgent.includes("mac") && "ontouchend" in document);

		if(safariBrowser){
			googletag.pubads().setTargeting("webview", ['N']);
			}else if(isiOSDevice){
			googletag.pubads().setTargeting("webview", ['Y']);
			}


		

		if(is_sphm_site!=1)
		{
			googletag.pubads().setTargeting("impression_split", randImpression );
			
			if(val_test_adid!="")
				googletag.pubads().setTargeting("test_adid", val_test_adid);

			if(val_test_plid!="")
				googletag.pubads().setTargeting("test_plid", val_test_plid);

			if(skinver!="")
				googletag.pubads().setTargeting("skinver", skinver);
		}
		
		/*
		if (window.location.hostname=='www.straitstimes.com' || window.location.hostname=='www.businesstimes.com.sg')
		{
			var UID2_PPID = fv_getcookie ('uid2');

			if ( UID2_PPID != "" )
			{
				googletag.pubads().setPublisherProvidedId(UID2_PPID);
				googletag.pubads().setTargeting("PPID", UID2_PPID );
			}
		}
		*/

		if (  window.location.hostname=='www.straitstimes.com'  ||  window.location.hostname=='www.businesstimes.com.sg'  ||  window.location.hostname=='www.zaobao.com.sg' || window.location.hostname=='www.beritaharian.sg' ||  window.location.hostname=='tnp.straitstimes.com'  ||  window.location.hostname=='stomp.straitstimes.com' )
		{
			var SPH_CDP_SEG = fv_getcookie ('sph_seg');

			if ( SPH_CDP_SEG != "" )
			{
				googletag.pubads().setTargeting("sph_cdp", SPH_CDP_SEG );
			}
		}

		var SPH_SUID = fv_getcookie ('suid');
		if ( SPH_SUID != "" )
		{
			googletag.pubads().setTargeting("suid", SPH_SUID );
		}
			 

		 var ScreenWid=screen.width;
		if(is_sphm_site!=1)
		{
			if (ScreenWid >= 1460 && (window.location.hostname=='www.straitstimes.com' || window.location.hostname=='www.businesstimes.com.sg'))
			{
				googletag.pubads().setTargeting("inskin_yes", "true");
			}
			else if (ScreenWid >= 1510 && (window.location.hostname=='www.businessinsider.my' || window.location.hostname=='www.businessinsider.sg'))
			{
				googletag.pubads().setTargeting("inskin_yes", "true");
			}
			else if (ScreenWid >= 1593 && window.location.hostname=='www.zaobao.com.sg')
			{
				googletag.pubads().setTargeting("inskin_yes", "true");
			}
			else if (ScreenWid >= 1540 && window.location.hostname=='www.asiaone.com')
			{
				googletag.pubads().setTargeting("inskin_yes", "true");
			}
			else
			{
				googletag.pubads().setTargeting("inskin_yes", "false");
			}
		}
		
	});

//// GET all ad units loaded on the page

var dfpadunits = JSON.parse(loaded_dfp_tags);
var ad_unit_loaded_across_page = 'lb1';
if(!dfpadunits[ad_unit_loaded_across_page]) { ad_unit_loaded_across_page = 'lb2'; }

///// First Visit Cookie Start

var FVCOOKIE = "UserFirstVisit";

var FVCOOKIEVAL = fv_getcookie ( FVCOOKIE );

if ( FVCOOKIEVAL == "" )
{
	(function() {

		var useddomain = window.location.hostname;
		
		googletag.cmd = googletag.cmd || [];
		
		googletag.cmd.push(function()
		{			
			googletag.pubads().setTargeting("firstvisit", "true");

			googletag.pubads().addEventListener('slotRenderEnded', function(event) {				
				
				temp1 = event.slot;
					
				if ( useddomain == "stomp.straitstimes.com" )
				{					
					temp2 = googletag.slots[0];

					if ( temp1 == temp2 ) /* lb1 */
					{		
						fv_setcookie ( FVCOOKIE, 1 , 1 );
						//console.log("FIRSTSITEVISIT");//REPLACE		
					}
					
				} else {
					
					temp2 = googletag.slots[ad_unit_loaded_across_page];

					if ( temp1 == temp2  )
					{		
						fv_setcookie ( FVCOOKIE, 1 , 1 );
						//console.log("NON STOMP FIRSTSITEVISIT");//REPLACE
					}	

				}
						
						
			});
		});

		
	
	})();

	
}

function fv_setcookie(cname, cvalue, days) {
	var now = new Date();
	var expire = new Date();
	expire.setFullYear(now.getFullYear());
	expire.setMonth(now.getMonth());
	expire.setDate(now.getDate()+ parseInt(days) );
	expire.setHours(0);
	expire.setMinutes(0);
	expire.setSeconds(0);
	var expires = "expires="+expire.toString();
	//document.writeln(expires + "=> now =" + now);
	document.cookie = cname + "=" + cvalue + "; " + expires +"; SameSite=Lax; Secure; path=/";
}

function fv_getcookie(cname) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(cname + "=");
        if (c_start != -1) {
            c_start = c_start + cname.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

///// First Visit Cookie End

function getMetatag_fromsite(name) { 
   var metas = document.getElementsByTagName('meta'); 

   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("name") == name ) { 
         return metas[i].getAttribute("content"); 
      } 
   } 
    return "";
}

var articleid_active = getMetatag_fromsite( "article_id" );


if (typeof article_page_is === 'undefined')
{
	var article_page_is=0;
}

//Check if the Page is article page
if(window.location.hostname=='www.beritaharian.sg' || window.location.hostname=='www.zaobao.com.sg' || window.location.hostname=='stomp.straitstimes.com')
{ 
	if(document.querySelector('meta[property~="article:published_time"]') && document.querySelector('meta[property~="article:published_time"]').getAttribute("content")!='null')
	{
		googletag.cmd.push(function() {	googletag.pubads().setTargeting("page", "article");} );
		article_page_is=1;
		
	}
		

}
else if(window.location.hostname=='www.businesstimes.com.sg')
{	
	if (articleid_active)
	{   
		googletag.cmd.push(function() {	googletag.pubads().setTargeting("page", "article");} );
		article_page_is=1;
	}
}
else if(is_sphm_site!=1)
{	
	if (typeof _data != 'undefined' && typeof _data.articleid != 'undefined' && _data.articleid != "")
	{
		googletag.cmd.push(function() {	googletag.pubads().setTargeting("page", "article");} );
		article_page_is=1;
	}

	
}

//Check if the Page is article page End
var transadloaded=0;

////  Check it Tras ad is loaded or not 


var catfish_req_on=0;
if(document.cookie.indexOf("catfishDisplayed=") == -1)
{
	catfish_req_on=1;
}

var TOLStatus = false;

var TOLSites = [ 'www.straitstimes.com' , 'stomp.straitstimes.com' , 'www.zaobao.com.sg' , 'www.zaobao.com' , 'www.businesstimes.com.sg' , 'www.beritaharian.sg' , 'www.businessinsider.my' , 'www.businessinsider.sg' , 'www.sgsme.sg', 'tnp.straitstimes.com', 'www.asiaone.com' ];

if( isInArray( window.location.hostname, TOLSites ) )
{
	if ( screen.width <= 740  &&  ( document.cookie.indexOf("catfishDisplayed=") == -1  ||  document.cookie.indexOf("postitialDisplayed=") == -1  )  )
	{
		TOLStatus = true;
	} 
	else if ( screen.width <= 740  )
	{}
	else if ( screen.width > 740  &&  document.cookie.indexOf("topoverlayDisplayed=") == -1  )
	{
		TOLStatus = true;
	}
} 
else if (document.cookie.indexOf("topoverlayDisplayed=") == -1)
{
	TOLStatus = true;
}	


	if ( TOLStatus == true )
		{
			transadloaded=1;
			googletag.cmd.push(function() {
			googletag.pubads().setTargeting("topoverlay_request", "1");  //console.log('Topoverlay loaded');
			} );
		}
	else
		{
			transadloaded=0;
			googletag.cmd.push(function() {
			googletag.pubads().setTargeting("topoverlay_request", "0"); //console.log('Topoverlay not loaded');	
			} );
		}

////  Check it Tras ad is loaded or not end


//// Custom script for microsites ST
if(window.location.href.indexOf("https://www.straitstimes.com/world-cup-2018") == 0) {
googletag.pubads().setTargeting("sttags", ["world-cup-2018"])
}


if(window.location.href.indexOf("https://www.zaobao.com.sg/video-series/live-your-dream-2") == 0) {
googletag.pubads().setTargeting("zbtags", ["live-your-dream-2"])
}


if(window.location.href.indexOf("https://www.businesstimes.com.sg/videos/the-cutting-edge-with-howard-yu") == 0) {
googletag.pubads().setTargeting("bttags", ["the-cutting-edge-with-howard-yu"])
}

if(window.location.href.indexOf("https://www.businesstimes.com.sg/hub/better-for-business") == 0) {
googletag.pubads().setTargeting("bttags", ["better-for-business"])
}

if(window.location.href.indexOf("https://www.beritaharian.sg/setempat/khidmat-warga-tua-jagaan-masyarakat-dipertingkat") == 0) {
googletag.pubads().setTargeting("bhtags", ["article_97326"])
}

if(window.location.href.indexOf("https://www.straitstimes.com/ST-BT-Budget-Roundtable-2020") == 0) {
googletag.pubads().setTargeting("sttags", ["budget-roundtable-2020"])
}


if( window.location.href.indexOf("https://www.straitstimes.com/container/custom-landing-page/") == 0 )
{
	var sttags = window.location.pathname.split("/");
	
	if ( typeof sttags != 'undefined' &&  typeof sttags[3] != 'undefined'  &&  sttags[3] != "" )
	{
		googletag.pubads().setTargeting("sttags", [sttags[3]]);
	}

	sttags = null;
}

//// Custom script for microsites ST End

//// Block Spam IP
if (typeof prebid_sips != 'undefined' && prebid_sips==1)
			{
				googletag.cmd.push(function() {
			googletag.pubads().setTargeting("pass_view", "1"); 
			} );		
				
			}


//// Block Spam IP End

/*
	var valid_anchor_sites = [ "www.straitstimes.com","www.businesstimes.com.sg","www.zaobao.com.sg","www.asiaone.com","stomp.straitstimes.com","tnp.straitstimes.com","www.beritaharian.sg","www.businessinsider.sg", "www.businessinsider.my","www.femalemag.com.sg","www.homeanddecor.com.sg","www.herworld.com","www.womensweekly.com.sg","www.iconsingapore.com","www.luxury-insider.com","www.nuyou.com.sg","www.thepeakmagazine.com.sg","www.harpersbazaar.com.sg","www.gameaxis.com","www.hardwarezone.com.sg"];
*/
	
var valid_anchor_sites = [ "tnp.straitstimes.com" , "stomp.straitstimes.com" , "www.hardwarezone.com.sg", "forums.hardwarezone.com.sg" , "www.womensweekly.com.sg", "www.iconsingapore.com", "www.nuyou.com.sg", "www.thepeakmagazine.com.sg" ];


// ST Anchor Ad unit

if ( window.location.hostname == "www.straitstimes.com"  &&  window.getCookieByName("mySPHUserType") != undefined && ( window.getCookieByName("mySPHUserType") == "sub"  ||  window.getCookieByName("mySPHUserType") == "y-sub"  )  )
{
		
}
else if ( window.location.hostname == "www.straitstimes.com" )
{
	valid_anchor_sites.push("www.straitstimes.com");
}

if ( window.location.hostname == "www.zaobao.com.sg"  &&  window.getCookieByName("mySPHUserType") != undefined &&  window.getCookieByName("mySPHUserType") =="y-sub" )
{
		
}
else if ( window.location.hostname == "www.zaobao.com.sg" )
{
	valid_anchor_sites.push("www.zaobao.com.sg");
}


// ST Anchor Ad unit


if (typeof loaded_dfp_tags !== 'undefined')
{
	var pbjs = pbjs ||
	{};
	pbjs.que = pbjs.que || [];

	
	if( window.location.hostname != "tnp.straitstimes.com"  &&  ( location.protocol + '//' + location.host + location.pathname != 'https://www.straitstimes.com/rewards' )   &&  isInArray(window.location.hostname, valid_anchor_sites) && screen.width<=740 )
	{
		googletag.cmd.push(function()
		{
			if( catfish_req_on == 0 )
			{

				dfp_tags_obj = JSON.parse ( loaded_dfp_tags );		

				if ( typeof dfp_tags_obj[ad_unit_loaded_across_page]['adunit'] !== "undefined" )
				{
					adunit_obj = dfp_tags_obj[ad_unit_loaded_across_page]['adunit'].replace ( "/"+ad_unit_loaded_across_page+"/" , "/anchor/" );
					dfp_tags_obj.anchor = { "adunit":adunit_obj, "slotname":"dfp-ad-anchor", "size":"320x50" };
					adunit_obj=null;

					loaded_dfp_tags = JSON.stringify(dfp_tags_obj);					
				}

				dfp_tags_obj = null;		

			}
		});
	}
	
	
	googletag.cmd.push(function()
	{
		googletag.pubads().disableInitialLoad();
	});
	
	var valid_hb_units = ["lb1", "lb2", "lb3", "lb4", "lb5", "imu1", "imu2", "imu3", "imu4", "midarticlespecial" , "midarticlespecial2" , "anchor" ];

	var valid_lazyload_sites = [ "www.asiaone.com", "www.beritaharian.sg", "tnp.straitstimes.com", "www.zaobao.com.sg", "www.businessinsider.sg", "www.businessinsider.my", "www.straitstimes.com", "www.businesstimes.com.sg"]; 

	//Add Catfish to A1
	if( window.location.hostname=='www.asiaone.com')
		{
			valid_hb_units.push("catfish");
		}
	
	
	//### Teads 
	var domainames = ["www.straitstimes.com","www.businesstimes.com.sg","www.zaobao.com.sg","www.asiaone.com","stomp.straitstimes.com","tnp.straitstimes.com","www.beritaharian.sg","www.businessinsider.sg", "www.businessinsider.my","www.femalemag.com.sg","www.homeanddecor.com.sg","www.herworld.com","www.womensweekly.com.sg","www.iconsingapore.com","www.luxury-insider.com","www.nuyou.com.sg","www.thepeakmagazine.com.sg","www.harpersbazaar.com.sg","www.gameaxis.com","www.hardwarezone.com.sg","forums.hardwarezone.com.sg"];
	var teads_placementids = ["124280","124281","124282","124283","124284","124285","124286","126319","126320","130751","130752","130754","130755","130756","130757","130760","130761","130763","130764","132965","132965"];
	var teads_pageids = ["114423","114424","114425","114426","114427","114428","114429","116421","116422","120553","120554","120556","120557","120558","120559","120562","120563","120565","120566","122400","122400"];


	var teads_placementids_banner = ["130753","133438","133439","133440","133441","133442","133443","133443","133443","132966","132967","132968","132969","132970","132971","132972","132973","132974","132975","132964","132964"];

	var teads_pageids_banner = ["120555","122852","122853","122854","122855","122856","122857","122857","122857","122401","122402","122403","122404","122405","122406","122407","122408","122409","122410","122399","122399"];

	var teads_placementids_display = ["130230","133894","133891","133888","133886","133884","133883","133883","133883","133882","133885","133880","133887","133889","133890","133892","133893","133895","133896","133897","133897"];

	var teads_pageids_display = ["120099","123224","123221","123218","123216","123214","123213","123213","123213","123212","123215","123210","123217","123219","123220","123222","123223","123225","123226","123227","123227"];

	var intIndex = domainames.indexOf(currdomain);
	var teads_pageid = teads_pageids[intIndex ];
	var teads_placementid = teads_placementids[intIndex ];	

	var teads_pageid_banner = teads_pageids_banner[intIndex ];
	var teads_placementid_banner = teads_placementids_banner[intIndex ];

	var teads_pageid_display = teads_pageids_display[intIndex ];
	var teads_placementid_display = teads_placementids_display[intIndex ];

	//### SpotX




	var spotx_sph_ids = ["305904","305907","305909","305911","305913","305914","305915","305904","305904","305912","305910","305908","305906","305905","305901","305903","305902","305901","305899","305900","305900"];

	//spotx function
    function myAdDoneFunction(spotx_ad_found){
        if(spotx_ad_found)  {
            var dvC = document.getElementById("dv-spotx-identifier").parentNode.parentNode;
            dvC.style="opacity: 0; transition: opacity 0.5s ease-out;";
            setTimeout(function(){ dvC.style.display="none"; }, 500);
			console.log("ads finished");
        }
		else
        {
        console.log("ads fail to start / not found");
        }
    }




	var spotx_sph_id = '79391';//spotx_sph_ids[intIndex];


	if(window.location.href.indexOf("https://www.straitstimes.com/life") == 0) 
	{
		teads_pageid=115801;
		teads_placementid=125682;

		teads_pageid_banner = 122859;
		teads_placementid_banner = 133445;

		teads_pageid_display = 123209;
		teads_placementid_display = 133879;
	}


	//### Playground XYZ

	var playgroundxyz_placementids = ["20351377","20564911","20564922","20564925","20564923","20564918","20564924","20564924", "20564924","www.femalemag.com.sg","www.homeanddecor.com.sg","www.herworld.com","www.womensweekly.com.sg","www.iconsingapore.com","www.luxury-insider.com","www.nuyou.com.sg","www.thepeakmagazine.com.sg","www.harpersbazaar.com.sg","www.gameaxis.com","www.hardwarezone.com.sg"];

	var pxyz_placementid = playgroundxyz_placementids[intIndex ];

	//### unruly
	var unruly_siteid_arr = ["1159388","1159381","1159394","1159377","1159387","1159389","1159379","1159380","1159380","214260","214261","214259","214258","215443","215445","215444","214257","214256","214255","214255","214255"];
	var unruly_uuid_arr = ["07d9abf2-f3c2-48c7-b778-d9a57b9b06bd","074b51a6-b57c-4b1e-bba4-472562d6eb2b","40bcfb88-24d0-4b5d-a79e-c06f30dbc9c9","1b3fa18b-7568-45d8-a8ed-66243f9a5c89","5401394c-dfbc-4919-9278-5c412e9a8cef","2aadadef-28b0-48a9-8e2e-1262bc3e87ac","097ef849-eea3-4be6-8d86-36eddd4b66c4","52be263b-6c2e-498e-b151-b7073306b402","52be263b-6c2e-498e-b151-b7073306b402","214260","214261","214259","214258","215443","215445","215444","214257","214256","214255","214255","214255"];

	var unruly_siteid = unruly_siteid_arr[intIndex ];
	var unruly_uuid = unruly_uuid_arr[intIndex ];	



	
	//var dfpadunits = JSON.parse(loaded_dfp_tags);
	
	var DYNAMIC_AD_DISABLED = true;
	
	if ( DYNAMIC_AD_DISABLED == false &&  !isIE()  &&  window.location.hostname=='www.straitstimes.com'  &&  screen.width >= 1250  && typeof _data != 'undefined'  &&  typeof _data.articleid != 'undefined' && _data.articleid != "" &&  typeof dfpadunits[ad_unit_loaded_across_page]['adunit'] !== "undefined" &&  dfpadunits[ad_unit_loaded_across_page]['adunit'] )
	{
		//valid_hb_units.push.apply( valid_hb_units , [ "imu11", "imu12", "imu13" ] );

		max_dynamic_adslot = 13;
		
		dynamicAdUnit = dfpadunits[ad_unit_loaded_across_page]['adunit'];

		for ( p = 11 ; p <= max_dynamic_adslot ; p++ )
		{
			temp_adunit_key = "imu" + p;
			temp_slotname = "dfp-ad-dynamic" + p;
			temp_adunitname = dynamicAdUnit.replace ( ad_unit_loaded_across_page , temp_adunit_key );
			dfpadunits[ temp_adunit_key ] = ( { "adunit" : temp_adunitname , "slotname" : temp_slotname , "size" : "300x250,300x600"} );	
			
			temp_adunit_key = null;
			temp_slotname = null;
			temp_adunitname = null;
		}

		dynamicAdUnit = null;
	}

	
	for (var key1 in dfpadunits)
	{
		
		
			if (isInArray(key1, valid_hb_units) && dfpadunits[key1]['adunit'])
			{
				

				var appnexusid = replaceAll(dfpadunits[key1]['adunit'], "/", ".").toLowerCase();

				var tripleliftid = dfpadunits[key1]['adunit'].split('/', 4).join('_');



								
				if ( ( window.location.hostname!='tnp.straitstimes.com'  &&  ((key1 == "midarticlespecial") || (key1 == "midarticlespecial2"))  )  ||   ( window.location.hostname=='tnp.straitstimes.com' && key1=="imu1"))
				{
					
					// TNP IMU1 only
					if( window.location.hostname=='tnp.straitstimes.com' && key1=="imu1")
					{
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [300, 250]
									}
								},
								bids: [
								{
									bidder: "appnexus",
									labelAny: ["desktop", "tablet", "phone"],
									params:
									{
										member:'9261',
										invCode: appnexusid
									}
								},
									{ 
									bidder: 'triplelift',
										labelAny: ["desktop", "tablet", "phone"],
									params: {inventoryCode: tripleliftid }
									},
									{
									bidder: "pxyz",
									labelAny: ["phone"],
									params:{placementId: pxyz_placementid}
									}
								]
							};

								adUnits.push(temp_adunits);
					}

						// TNP IMU1 only end



					// SPHL midarticlespecial only for PlaygroundXYZ Display
					if( is_sphm_site!=1 && key1=="midarticlespecial" && article_page_is==1)
					{
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [300, 250]
									}
								},
								bids: [
								{
									bidder: "pxyz",
									labelAny: ["phone"],
									params:
									{
										placementId: pxyz_placementid,
									}
								}
								]
							};

								adUnits.push(temp_adunits);
					}

					
					if(screen.width >= 640)
						var outstreamsize=[[640,480],[640,360]];
					else if (screen.width >= 480)
						var outstreamsize=[[480,360],[480,270]];
					else
						var outstreamsize=[[300,225],[300,169]];
					
					var temp_adsize = converysizearray(dfpadunits[key1]['size']);


			//For SPHL+SPHM Unruly only midarticlespecial

			if( key1=="midarticlespecial" && article_page_is==1)
					{


							var temp_adunits = {
						   code: dfpadunits[key1]['slotname'],
							mediaTypes: {
								video:
										{
											context: 'outstream',
											playerSize: [640, 480]
										}
							},
								renderer: {		
								options: {cbNotification: straitsTimesOutstreamNotifcation},
								url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
								backupOnly: true, // prefer demand renderer
								render: function (bid) {
									adResponse = {
										ad: {
											video: {
												content: bid.vastXml,
												player_height: bid.playerHeight,
												player_width: bid.playerWidth
											}
										}
									}
									// push to render queue because ANOutstreamVideo may not be loaded yet.
									bid.renderer.push(() => {
										ANOutstreamVideo.renderAd({
											targetId: bid.adUnitCode, // target div id to render video.
											adResponse: adResponse
										});
									});
								}
							},
						   bids: [
							   {  
										   bidder: 'unruly',
											   labelAny: ["desktop", "tablet", "phone"],
										   params: {
											   targetingUUID: unruly_uuid,
											   siteId: unruly_siteid,
												video:
												{
													skippable: true,
													playback_method: ['auto_play_sound_off']
												}
										   }
									}
						   ]
					   };
						   adUnits.push(temp_adunits);


					}



			//For SPHL+SPHM Appnexus only midarticlespecial and midarticlespecial2
					var temp_adunits = {
               code: dfpadunits[key1]['slotname'],
                mediaTypes: {
                    video:
							{
								context: 'outstream',
								playerSize: [640, 480]
							}
                },
					renderer: {		
					options: {cbNotification: straitsTimesOutstreamNotifcation},
					url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
					backupOnly: true, // prefer demand renderer
					render: function (bid) {
						adResponse = {
							ad: {
								video: {
									content: bid.vastXml,
									player_height: bid.playerHeight,
									player_width: bid.playerWidth
								}
							}
						}
						// push to render queue because ANOutstreamVideo may not be loaded yet.
						bid.renderer.push(() => {
							ANOutstreamVideo.renderAd({
								targetId: bid.adUnitCode, // target div id to render video.
								adResponse: adResponse
							});
						});
					}
				},
               bids: [
                   {
							bidder: 'appnexus',
								labelAny: ["desktop", "tablet", "phone"],
							params:
							{
								member:'9261',
								invCode: appnexusid,
								video:
								{
									skippable: true,
									playback_method: ['auto_play_sound_off']
								}
							}
						}
               ]
           };
			   adUnits.push(temp_adunits);





			//For SPHL+SPHM Appnexus ScrollX only midarticlespecial

			if( key1=="midarticlespecial" && article_page_is==1)
					{
					   var temp_adunits = {
										code: dfpadunits[key1]['slotname'],
										mediaTypes:
										{
											banner:
											{
												sizes: [1, 1]
											}
										},
										bids: [
										{
											bidder: "appnexus",
											labelAny: ["phone"],
											params:
											{
												member:'9261',
												invCode: appnexusid
											}
										}	
										]
									};

									adUnits.push(temp_adunits);
					}



			   //For SPHL+SPHM Teads only midarticlespecial and midarticlespecial2
			   
			  var temp_adunits = {
						code: dfpadunits[key1]['slotname'],
						//sizes: outstreamsize,
						mediaTypes:
						{
							banner: 
							{
								sizes: [1, 1]
							}
						},						
						bids: [						
						{
							   bidder: 'teads',
								labelAny: ["desktop", "tablet", "phone"],
							   params: {
								   placementId: teads_placementid,
								   pageId: teads_pageid,
									video:
									{
										skippable: true,
										playback_method: ['auto_play_sound_off']
									}
							   }
						}]
					};

						adUnits.push(temp_adunits);

				// SPHL+SPHM SpotX Midarticlespecial and midarticlespecial2

				if( key1=="midarticlespecial" && article_page_is==1)
					{

							var temp_adunits = {
									code: dfpadunits[key1]['slotname'],
									//sizes: outstreamsize,
									mediaTypes:
									{
										banner: 
										{
											sizes: [[300,250], [1, 1]]
										},
										video: {
										playerSize: [640,360],
										context: 'outstream',
									  }
									},

									bids: [						
									{
										   bidder: "spotx",
											labelAny: ["desktop", "tablet", "phone"],
											 params: {
											   channel_id: spotx_sph_id,
											   ad_unit: "outstream",
											   max_duration:240,
											   outstream_function: function spotxOutstreamFunc(bid) {
												  let screenWidth = screen.width;
												  if (screenWidth<=576) {
													var playerWidth = 300;
													var playerHeight = 169;
												  } else {
													var playerWidth = 640;
													var playerHeight = 360;
												  }
												 
												 const videoDiv = bid.adUnitCode;
												  var vid_contain = window.document.getElementById(videoDiv);

											//additional
											var dvSpotx = document.createElement("div");
											dvSpotx.id= videoDiv + "-dv-spotx";
											document.getElementById(videoDiv).getElementsByTagName("div")[0].style.display="none";
											document.getElementById(videoDiv).appendChild(dvSpotx);

											var dvIdt = document.createElement("div");
											dvIdt.id = "dv-spotx-identifier";
											dvIdt.style="display:none";
											document.getElementById(videoDiv).appendChild(dvIdt);


												 window.console.log(
												   "[SPOTX][renderer] Handle SpotX custom outstream renderer"
												 );
												 let script = window.document.createElement("script");
												 script.type = "text/javascript";
												 script.src = '//js.spotx.tv/easi/v1/' + bid.channel_id + '.js';
												 script.setAttribute(
												   "data-spotx_channel_id",
												   "" + bid.channel_id
												 );
												 script.setAttribute("data-spotx_vast_url", "" + bid.vastUrl);
												 script.setAttribute("data-spotx_content_width", playerWidth);
												 script.setAttribute("data-spotx_content_height", playerHeight);
												 script.setAttribute("data-spotx_content_page_url",bid.renderer.config.content_page_url);
												 script.setAttribute("data-spotx_ad_unit", "incontent");
												 script.setAttribute("data-spotx_autoplay", "1");
												 script.setAttribute("data-spotx_ad_skippable", "1");
												 script.setAttribute("data-spotx_ad_skip_delay", "5");
												 script.setAttribute("data-spotx_media_transcoding", "low");
												 script.setAttribute("data-spotx_ad_done_function", "myAdDoneFunction");

												 if(window.location.hostname=='www.straitstimes.com' || window.location.hostname=='www.asiaone.com'){script.setAttribute("data-spotx_ad_max_duration", "240");}
												 
											   if (window.location.hostname.includes("straitstimes")) {
													 script.setAttribute(
													   "data-spotx_content_container_id",
													   dvSpotx.id
													 );
											   } else {
													 script.setAttribute(
													   "data-spotx_content_container_id",
													   videoDiv
													 );
												}

											   //vid_contain.style.cssText = "display: none; margin-bottom: 20px";
											   vid_contain.appendChild(script);
											   },
											 }

									}]
								};
							adUnits.push(temp_adunits);
					}


				// SPHL+SPHM SpotX Midarticlespecial END
				

				}
				else
				{
					
					//Catfish Testing A1
				if( window.location.hostname=='www.asiaone.com' && key1=="catfish" && screen.width <= 740)
					{ 
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [1, 1]
									}
								},
								bids: [
								{
									bidder: "appnexus",
									labelAny: ["phone"],
									params:
									{
										member:'9261',
										invCode: appnexusid
									}
								}									
								]
							};

								adUnits.push(temp_adunits);
								
					}
			else
					{
					// SPHL SpotX IMU1
			if( window.location.hostname=='www.asiaone.com' && key1=="catfish")
						{}
			else
						{			
					
			if( is_sphm_site!=1 && key1=="imu1" && article_page_is==1 && window.location.hostname!='www.straitstimes.com')
					{
						var temp_adunits = {
						code: dfpadunits[key1]['slotname'],
						//sizes: outstreamsize,
						mediaTypes:
						{
							banner: 
							{
								sizes: [[300,250], [1, 1]]
							},
							video: {
							playerSize: [640,360],
							context: 'outstream',
						  }
						},
						

						bids: [						
						{
							   bidder: "spotx",
								labelAny: ["desktop", "tablet", "phone"],
								  params: {
								   channel_id: spotx_sph_id,
								   ad_unit: "outstream",
								   max_duration:240,
								   outstream_function: function spotxOutstreamFunc(bid) {
									  let screenWidth = screen.width;
									  if (screenWidth<=576) {
										var playerWidth = 300;
										var playerHeight = 169;
									  } else {
										var playerWidth = 640;
										var playerHeight = 360;
									  }
									 
									 const videoDiv = bid.adUnitCode;

									 var vid_contain = window.document.getElementById(videoDiv);

                                //additional
                                var dvSpotx = document.createElement("div");
                                dvSpotx.id= videoDiv + "-dv-spotx";
                                document.getElementById(videoDiv).getElementsByTagName("div")[0].style.display="none";
                                document.getElementById(videoDiv).appendChild(dvSpotx);

								var dvIdt = document.createElement("div");
                                dvIdt.id = "dv-spotx-identifier";
                                dvIdt.style="display:none";
                                document.getElementById(videoDiv).appendChild(dvIdt);


									 window.console.log(
									   "[SPOTX][renderer] Handle SpotX custom outstream renderer"
									 );
									 let script = window.document.createElement("script");
									 script.type = "text/javascript";
									 script.src = '//js.spotx.tv/easi/v1/' + bid.channel_id + '.js';
									 script.setAttribute(
									   "data-spotx_channel_id",
									   "" + bid.channel_id
									 );
									script.setAttribute("data-spotx_vast_url", "" + bid.vastUrl);
									script.setAttribute("data-spotx_content_width", playerWidth);
									script.setAttribute("data-spotx_content_height", playerHeight);
									script.setAttribute("data-spotx_content_page_url",bid.renderer.config.content_page_url);
									script.setAttribute("data-spotx_ad_unit", "incontent");
									script.setAttribute("data-spotx_autoplay", "1");
									script.setAttribute("data-spotx_ad_skippable", "1");
									script.setAttribute("data-spotx_ad_skip_delay", "5");
									script.setAttribute("data-spotx_media_transcoding", "low");
									script.setAttribute("data-spotx_ad_done_function", "myAdDoneFunction");

									if(window.location.hostname=='www.straitstimes.com' || window.location.hostname=='www.asiaone.com'){script.setAttribute("data-spotx_ad_max_duration", "240");}
									 
								   if (window.location.hostname.includes("straitstimes")) {
										 script.setAttribute(
										   "data-spotx_content_container_id",
										   dvSpotx.id
										 );
								   } else {
										 script.setAttribute(
										   "data-spotx_content_container_id",
										   videoDiv
										 );
									}

								   //vid_contain.style.cssText = "display: none; margin-bottom: 20px";
								   vid_contain.appendChild(script);
								   },
								 }

						}]
					};
				adUnits.push(temp_adunits);
				}


				// SPHL SpotX IMU1 END
					
					// SPHL IMU1 only for PlaygroundXYZ Display
					/*if( is_sphm_site!=1 && key1=="imu1" && article_page_is==1)
					{
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [[300, 250]]
									}
								},
								bids: [
								{
									bidder: "pxyz",
									labelAny: ["phone"],
									params:
									{
										placementId: pxyz_placementid,
									}
								}
								]
							};

								adUnits.push(temp_adunits);
					}*/

					// SPHL lb1 only for PlaygroundXYZ Display
					if( is_sphm_site!=1 && key1=="lb1" && article_page_is==1)
					{
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [320, 50]
									}
								},
								bids: [
								{
									bidder: "pxyz",
									labelAny: ["phone"],
									params:
									{
										placementId: pxyz_placementid,
									}
								}
								]
							};

								adUnits.push(temp_adunits);
					}

					
					// SPHL IMU1 only for Teads Display
					if( is_sphm_site!=1 && key1=="imu1")
					{
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [300, 250]
									}
								},
								bids: [
								{
									bidder: "teads",
									labelAny: ["desktop", "tablet", "phone"],
									params:
									{
										placementId: teads_placementid_display,
										pageId: teads_pageid_display,
									}
								}
								]
							};

								adUnits.push(temp_adunits);
					}

						// SPHL IMU1 only for Teads Display End



					// SPHL & SPHM IMU2, IMU3, IMU4, IMU5 only for Teads Banner
					if( (is_sphm_site==1 && key1=="imu1") || key1=="imu2" || key1=="imu3" || key1=="imu4" || key1=="imu5")
					{
							var temp_adunits = {
								code: dfpadunits[key1]['slotname'],
								mediaTypes:
								{
									banner:
									{
										sizes: [300, 250]
									}
								},
								bids: [
								{
									bidder: "teads",
									labelAny: ["desktop", "tablet", "phone"],
									params:
									{
										placementId: teads_placementid_banner,
										pageId: teads_pageid_banner,
									}
								}
								]
							};

								adUnits.push(temp_adunits);
					}

						// SPHL & SPHM IMU2, IMU3, IMU4, IMU5 only for Teads Banner End
					
					
					
					var split_adunit = dfpadunits[key1]['adunit'].toLowerCase().split("/");
					
					var temp_adsize = converysizearray(dfpadunits[key1]['size']);
					
					var temp_adunits = {
						code: dfpadunits[key1]['slotname'],
						mediaTypes:
						{
							banner:
							{
								sizes: temp_adsize
							}
						},
						bids: [
						{
							bidder: "appnexus",
							labelAny: ["desktop", "tablet", "phone"],
							params:
							{
								member:'9261',
								invCode: appnexusid
							}
						},{ 
							bidder: 'triplelift',
								labelAny: ["desktop", "tablet", "phone"],
							params: {inventoryCode: tripleliftid }
							}
						]
					};

						adUnits.push(temp_adunits);
						
					var temp_adunits ={
						code: dfpadunits[key1]['slotname'],
						mediaTypes:
						{
							native: {
								body: {
									sendId: true,
									required: true
								},
								clickUrl: {
									sendId: true
								},
								title: {
									sendId: true,
									required: true
								},
								image: {
									sendId: true,
									required: true
								},
								sponsoredBy: {
									sendId: true,
									required: true
								}
							}
						},
						bids: [
						{
							bidder: "appnexus",
							labelAny: ["desktop", "tablet", "phone"],
							params:
							{
								member:'9261',
								invCode: appnexusid
							}
						}
						]
					};
						adUnits.push(temp_adunits);
				
				
						}
					}
				}
				
				temp_adunits='';
			}
		
	}



if (adUnits.length<1)
	{
		
		var temp_adunits={
						code: 'dfp-ad-lb1',
						mediaTypes:
						{
							banner:
							{
								sizes: [[728, 90],[320, 50]]
							},
						},
						bids: [
						{
							bidder: "appnexus",
							labelAny: ["desktop", "tablet", "phone"],
							params:
							{
								member:'9261',
								invCode: '.5908.dp.default'
							}
						}]
					};
		
		adUnits.push(temp_adunits);
		temp_adunits='';
	}
	


	function removeStickyDiv( divid )
	{
		var elem_rem = document.getElementById(divid);
		if ( typeof elem_rem == "undefined" ){} else {
			elem_rem.parentNode.removeChild(elem_rem);
		}
	}

	

	/// Generate Prebid Adunits End
	function sendAdserverRequest()
	{	//console.log("WWWWWW Function Called - inside function");
		if (pbjs.adserverRequestSent) return;
		pbjs.adserverRequestSent = true;

		
		if (adUnits.length<1) 
			{
				googletag.cmd.push(function()
				{
					pbjs.que.push(function()
					{
						googletag.pubads().refresh();						
					});
				});
				
			}
		else
			{ 
				googletag.cmd.push(function()
				{
					if( ( location.protocol + '//' + location.host + location.pathname != 'https://www.straitstimes.com/rewards' )   &&   isInArray(window.location.hostname, valid_anchor_sites) && screen.width<=740  && catfish_req_on == 0 )
					{	
						
						if ( window.location.hostname == "tnp.straitstimes.com" )
						{
							var anchor_adunit = dfpadunits[ad_unit_loaded_across_page]['adunit'];
							anchor_adunit = anchor_adunit.replace ( "/"+ad_unit_loaded_across_page+"/" , "/anchor/" );
																						
							googletag.slots["anchor"] = googletag.defineOutOfPageSlot( anchor_adunit , googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR).addService(googletag.pubads()).setTargeting("pos", "A00");							

						}
						else
						{
						
							console.log("Preview True");
							
								
							var div_dyn_main = 'sticky_footer_adx_main';
							var tempAd_dyn = "dfp-ad-anchor";
							var div_dyn_close = 'sticky_footer_adx_close';
								
								

							var div_dyn = document.createElement('div');
							
							div_dyn.id = div_dyn_main;
							
							div_dyn.style.cssText = 'style:none; position: fixed; z-index: 999; width: 100% ;height: 0px; bottom:0px ; text-align: center;margin: auto;padding: 0;  -webkit-transition: opacity 1s linear; -o-transition: opacity 1s linear; transition: opacity 1s linear;';

							div_dyn.innerHTML = '<div id="'+ div_dyn_close +'" style="display:none;height:28px;width:65px;color:#adb5bd;background-color: #FAFAFA;border-top-left-radius: 8px 8px;border-top-right-radius: 8px 8px;box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;" ><span style="font:  400 25px/30px Arial !important; color:#adb5bd;background-color: #FAFAFA;"  onclick="javascript:removeStickyDiv(\''+ div_dyn_main +'\');"> &#9660; </span></div><div id="'+ tempAd_dyn +'" style="background-color:#FAFAFA;padding-top:7px;padding-bottom:5px;box-shadow: rgba(0, 0, 0, 0.2) 65px -1px 5px -1px !important;text-align:center;"></div>';
								
							document.body.appendChild(div_dyn);


							if ( typeof tempAd_dyn == "undefined" )
							{} else {
								var dynamicStickyEleExists = document.getElementById( tempAd_dyn );
							}


							if ( dynamicStickyEleExists )
							{
								dynamic_sticky_adunit = dfpadunits [ad_unit_loaded_across_page]['adunit'];

								if ( typeof dynamic_sticky_adunit !== "undefined" )
								{
									
									dynamic_sticky_adunit = dynamic_sticky_adunit.replace ( "/"+ad_unit_loaded_across_page+"/" , "/anchor/" );

									//googletag.cmd.push(function() {
												
										googletag.slots["anchor"] = googletag.defineSlot( dynamic_sticky_adunit ,  [320, 50] , tempAd_dyn ).addService(googletag.pubads()).setTargeting("pos", "A00");
										 

										//googletag.display( tempAd_dyn );
										
										var adRefreshInitialized = false;

										googletag.pubads().addEventListener('slotRenderEnded', function(event) {
											
											renderedSlotId = event.slot.getSlotElementId();
											
											if ( renderedSlotId == tempAd_dyn  &&  event.isEmpty )
											{
												document.getElementById( div_dyn_main ).innerHTML = "";

												//console.log ( ">>>>>>>>>>>>>>> NO AD TO DISPLAY <<<<<<<<<<<<<<<" );											
												
											}
											else if ( renderedSlotId == tempAd_dyn  &&  !event.isEmpty )
											{
												document.getElementById( div_dyn_main ).style.height = "90px";
												document.getElementById( div_dyn_main ).style.display='block';
												document.getElementById( div_dyn_close ).style.display='block';

												//console.log ( ">>>>>>>>>>>>>>> AD RENDERED <<<<<<<<<<<<<<<" );
												
												
												if ( !adRefreshInitialized )
												{
													adRefreshInitialized = true;
													adRefresh(  'anchor' , tempAd_dyn );
												}
												
												
											}

										});
																
									//});
								}

							}							

						}					
						
					}
					
					/*
					function checkTimeRefresh(i) {
					  if (i < 10) {
						i = "0" + i;
					  }
					  return i;
					}

					function startTimeRefresh() {
					  var today = new Date();
					  var h = today.getHours();
					  var m = today.getMinutes();
					  var s = today.getSeconds();
					  // add a zero in front of numbers<10
					  m = checkTimeRefresh(m);
					  s = checkTimeRefresh(s);
					  return h + ":" + m + ":" + s;
					  
					}
					*/

					
					function adRefresh( refreshadunitname , refreshadunitholder )
					{
						
						var intervalId1 = 0;
		
						intervalId1 = window.setInterval(function(){
							//console.log ( ">>>>>>>>>>>>>>>>>>>>>>>>>> AD REFRESHED" );
							
							if ( document.getElementById( refreshadunitholder ) )
							{
								googletag.slots[ refreshadunitname ].setTargeting("pos", "A01");
								googletag.pubads().refresh([googletag.slots[ refreshadunitname ]], {changeCorrelator: false});
							} else if ( intervalId1 )  {
								clearInterval(intervalId1);
							}
							
						}, 30000 );


						var intervalId2 = 0;
						document.addEventListener('visibilitychange', function() {

							
			
							if ( document.getElementById( refreshadunitholder ) ) {

								if(document.hidden) {

									//console.log ( ">>>>>>>>>>>>>>>>>>>>>>>>>> AD REFRESHED STOPPED @ " + startTimeRefresh() );
									
									if ( intervalId1 ) { clearInterval(intervalId1); }
									
									if ( intervalId2 ) { clearInterval(intervalId2); }
							
								} else {

									//console.log ( ">>>>>>>>>>>>>>>>>>>>>>>>>> AD REFRESH RESTARTED @ " + startTimeRefresh() + " <<<<<<<<<<<<<<<<<<<<" );
									
									intervalId2 = window.setInterval(function(){

										//console.log ( ">>>>>>>>>>>>>>>>>>>>>>>>>> AD REFRESH @ " + startTimeRefresh() );

										if ( document.getElementById( refreshadunitholder ) )
										{
											googletag.slots[ refreshadunitname ].setTargeting("pos", "A01");
											googletag.pubads().refresh([googletag.slots[ refreshadunitname ]], {changeCorrelator: false});
										
										} else if ( intervalId2 ) {

											clearInterval(intervalId2);

										}
									}, 30000 );
								}
							}
						});

					}

					
					pbjs.que.push(function()
					{
						pbjs.setTargetingForGPTAsync();
						
						if( isInArray(window.location.hostname, valid_lazyload_sites) && screen.width<=740 )
							{								
								var alladunits=Object.keys(googletag.slots);
								for(var p=0; p<alladunits.length; p++)
								{

									if ( lazyload_adunits.indexOf( alladunits[p] ) == -1 )
									{
										googletag.pubads().refresh([googletag.slots[alladunits[p]]], {changeCorrelator: false});
									}
									else
									{
										lazyloadadunit(dfpadunits[alladunits[p]]['slotname'],alladunits[p]);
									}
									
								}
							}
							else if(is_sphm_site==1  &&  typeof lazy_loaded_dfp_tags !== 'undefined'  &&  typeof loaded_dfp_tags !== 'undefined' )
							{
								var Obj_Temp = JSON.parse(loaded_dfp_tags);

								if ( typeof Obj_Temp == "object" ) {

									var sphmalladunits=Object.keys( Obj_Temp );									

									for ( var p = 0 ; p < sphmalladunits.length ; p++ )
									{
										if ( lazy_loaded_dfp_tags.indexOf( sphmalladunits[p] ) == -1 )
										{
											if ( typeof googletag.slots[sphmalladunits[p]] !== 'undefined' )
											{
												googletag.pubads().refresh([googletag.slots[sphmalladunits[p]]], {changeCorrelator: false});												
											}											
										}										
									}

									sphmalladunits = null;
								}

								Obj_Temp = null;
							}
							else
							{
								googletag.pubads().refresh();
							}						
					});
				});
			}
	}

if(window.location.hostname=="www.businesstimes.com.sg")
	{
		var desktop_prebid_size = [[970, 90], [728, 90], [300, 250], [300, 600], [640, 480], [850, 480], [1, 1]];
	}
	else
	{
		var desktop_prebid_size = [[970, 250], [970, 90], [728, 90], [300, 250], [300, 600], [640, 480], [850, 480], [1, 1]];
	}
	pbjs.que.push(function()
	{
		pbjs.setConfig(
		{
			realTimeData: {
				auctionDelay: 50,
				dataProviders: [{
				  name: 'permutive',
				  waitForIt: true,
				  params: {
					acBidders: ['appnexus'],
					maxSegs: 450,
					overwrites: {
					  appnexus: function (bid, data, acEnabled, utils, defaultFn) {
						if (defaultFn){
						  bid = defaultFn(bid, data, acEnabled)
						}
						if (data.gam && data.gam.length) {
						  utils.deepSetValue(bid, 'params.keywords.permutive', data.gam)
						}
					  }
					}
				  }
				}]
			  },
			userSync:
			{
				iframeEnabled: true,
				enabledBidders: ['appnexus', 'teads', 'unruly', 'triplelift', 'pxyz', 'spotx'],
				syncDelay: 6000
			},
			sizeConfig: [
			{
				'mediaQuery': '(min-width: 1024px)',
				'sizesSupported': desktop_prebid_size,
				'labels': ['desktop']
			},
			{
				'mediaQuery': '(min-width: 740px) and (max-width: 1023px)',
				'sizesSupported': [
					[728, 90],
					[300, 250],
					[300, 600],
					[640, 480],
					[850, 480],
					[1, 1]
				],
				'labels': ['tablet']
			},
			{
				'mediaQuery': '(min-width: 0px) and (max-width: 739px)',
				'sizesSupported': [
					[300, 250],					
					[320, 250],
					[320, 100],
					[320, 50],
					[640, 480],
					[850, 480],
					[1, 1]
				],
				'labels': ['phone']
			}],
			debug: val_prebiddebug,
			priceGranularity: "dense",
			enableSendAllBids: true,
			bidderSequence: "random",
			bidderTimeout: 900,
			publisherDomain: location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''),
		});
		 
		pbjs.addAdUnits(adUnits);

	/*	pbjs.bidderSettings = {
        rubicon: {
            bidCpmAdjustment: function(bidCpm) {
                return bidCpm * 0.825;
            }
        }
    };*/


		pbjs.requestBids(
		{
			bidsBackHandler: function(bidResponses)
			{
				//console.log("WWWWWW Function called - Got Response");
				if(window.googletag && googletag.pubadsReady) {
					sendAdserverRequest();
				}
			}
		});
	});
	setTimeout(function()
	{	//console.log("WWWWWW Function called - Time out");
		sendAdserverRequest();
	}, PREBID_TIMEOUT);
}





//#####################
var unitstoload = [] ;
var unitsloaded = [] ;
var adunitslotmap = [] ;
var dynamic_ad_list = [] ;

function lazyloadadunit ( adunit, adslot ) 
{
unitstoload.push( adunit );	
adunitslotmap [ adunit ] = adslot;
}



var adspacing_height = 0;

function onScrollEventHandler_lazy(ev)
{ 
	
	if ( adspacing_height == 0 )
	{
		dheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		adspacing_height = dheight - 86; /* document.getElementsByClassName("navbar-collapse collapse has-category-term")[0].clientHeight */
	}
	
	

	/*
	console.log ( "#############################" );
	console.log ( dynamic_ad_list );

	console.log ( "Total ads to load => " + unitstoload.length );
	*/
	
	
	dynamicEleExists = false;
	if ( dynamic_ad_list.length > 0 )
	{
		dynamic_adslot_status = false;
		tempAd = "dfp-ad-dynamic" + dynamic_ad_list[0];
		
		dynamicAdId = parseInt( dynamic_ad_list[0] );

		removeArrElement ( dynamic_ad_list , dynamic_ad_list[0] );
	}
	
	/*
	console.log ( "############ POST #################" );
	console.log ( dynamic_ad_list );
	
	console.log ( "NEW DIV ID => " + tempAd );
	*/
	
	
	/* Loading IMU 11-15 dynamic ad  */
	//CHANGE
	
	if ( typeof tempAd == "undefined" )
	{} else {
		var dynamicEleExists = document.getElementById( tempAd );
	}


	if ( dynamicEleExists && dynamic_adslot_status == false )
	{
		/*
		console.log ( "Inside Dynamic AdUnit Condition => " + tempAd );
		
		console.log ( elementInViewport( tempAd ) );
		*/
		

		if ( elementInViewport( tempAd ) == true )
		{

			//console.log ( "Dynamic AdUnit Viewable" );

			dynamic_adunit = dfpadunits [ad_unit_loaded_across_page]['adunit'];

			if ( typeof dynamic_adunit !== "undefined" )
			{
				
				
				adunitName = "/imu" +  dynamic_adslot_cnt  + "/";

				//console.log ( "Ad Unit loading .........................." + adunitName );

				dynamic_adunit = dynamic_adunit.replace ( "/"+ad_unit_loaded_across_page+"/" , adunitName );

				//dynamic_adunit = "/5908/Project/Moat_test2";//REMOVE

				

				googletag.cmd.push(function() {
					dynamic_adslot_list.push ( tempAd );

                    var slot = googletag.defineSlot( dynamic_adunit , [ [300, 250] , [300, 600], [1, 1] ], tempAd ).addService(googletag.pubads());
                    
					if ( typeof slot !== "undefined"  &&  typeof dynamicAdId !== "undefined"  &&  dynamicAdId > 0 )
					{
						slot.setTargeting("pos", dynamicAdId );

						dynamicAdId = 0;//Reset to 0
					}

					if ( typeof slot !== "undefined"  &&  typeof _data !== "undefined" )
					{
						if ( typeof _data["keyword"] !== "undefined" )
						{
							var articleKWList = _data["keyword"].split(",");
							
							articleKWList = articleKWList.join('|').replace(/\s+/g, '-').toLowerCase().split('|');		
							
							slot.setTargeting( "sttags", articleKWList );
							
							articleKWList = null;
						}


						if ( typeof _data["articleid"] !== "undefined" )
						{
							slot.setTargeting("starticleid", _data["articleid"] );
						}
					}

					googletag.display( tempAd );

					/*var lazybids_imu=pbjs.getBidResponses();
					
					if(typeof lazybids_imu !== "undefined" )
					{
						if(typeof lazybids_imu[tempAd] !== "undefined" )
						{							
							for (var key in lazybids_imu[tempAd]['bids'][0]['adserverTargeting']) 
							{
								slot.setTargeting(key, lazybids_imu[tempAd]['bids'][0]['adserverTargeting'][key] );
								slot.setTargeting(key+'_appnexus', lazybids_imu[tempAd]['bids'][0]['adserverTargeting'][key]);
							}							
						}
					}*/

					googletag.pubads().refresh([slot], {changeCorrelator: false});
									
                });

			}


			lhs_rhs_checkNLoad();
			//dynamic_adslot_status = true;
			
			

			
			
		}
		
		//dynamic_ad_list.length <= 0  ||
		if ( dynamic_adslot_cnt > max_dynamic_adslot_cnt ) //Range of ad units 11-15 
		{
			dynamic_adslot_status = true;
		}
	}
	//CHANGE END




	if ( ( unitsloaded.length > 0  &&  unitstoload.length == 0 )  ||  dynamic_adslot_status == true )
	{
		/* Applicable for one ad unit condition only */
		var el_lazy=window;
		if(el_lazy.addEventListener)
		{
			el_lazy.removeEventListener('scroll', onScrollEventHandler_lazy );
		}
		else if (el_lazy.attachEvent)
		{
			el_lazy.detachEvent('onscroll', onScrollEventHandler_lazy);
		}
		
	}


	if ( unitstoload.length == 0 )
	{
		return;
	}

	for ( var q = 0  ; q < unitstoload.length ; q++ )
	{
		if ( elementInViewport( unitstoload[ q ] ) == true )
		{
			googletag.pubads().refresh([googletag.slots[ adunitslotmap [ unitstoload[ q ] ]  ]], {changeCorrelator: false});

			unitsloaded.push( unitstoload[ q ] );
		}
	}


	for ( var q = 0  ; q < unitsloaded.length ; q++ )
	{
		removeArrElement ( unitstoload , unitsloaded[ q ] );	
	}

	
	if ( unitsloaded.length == 0 )
	{
		return;
	}

}




function removeArrElement(array, element) {
   var index = array.indexOf(element);
   
   if (index !== -1) {
       array.splice(index, 1);
   }	
}

function getlazyval(ad_elem)
{
	if(ad_elem=="dfp-ad-imu1")
	{
		var npixel = 300;
	}
	else if(ad_elem=="dfp-ad-imu2")
	{
		//var val_pixel = [450, 500, 550, 400, 250, 300, 350, 400];
		//var ddd = new Date();
		//var npixel = val_pixel[ddd.getDay()];	
		var npixel = 400;
	}
	else
	{
		if( typeof lazyload_extended != 'undefined'  &&  lazyload_extended == true  )
		{
			var npixel = parseInt(randImpression) * 100;			
		}
		else
		{
			var npixel = 700;
		}
	}	
	return npixel;
}


function elementInViewport(elem) {
	
 el = document.getElementById(elem);
 var top = el.offsetTop;
 var left = el.offsetLeft;
 var width = el.offsetWidth;
 var height = el.offsetHeight;



 while(el.offsetParent) {
   el = el.offsetParent;
   top += el.offsetTop;
   left += el.offsetLeft;
 }

 return (
   (top-getlazyval(elem)) < (window.pageYOffset + window.innerHeight) &&
   left < (window.pageXOffset + window.innerWidth) &&
   (top + height) > window.pageYOffset &&
   (left + width) > window.pageXOffset
 );
}

document.addEventListener('DOMContentLoaded', function() {
	if( isInArray(window.location.hostname, valid_lazyload_sites) && screen.width<=740 )
	{
		EnableListener_rhsdyna();
	}
});


function EnableListener_rhsdyna()
{
	var el_lazy=window;
	if(el_lazy.addEventListener)
	el_lazy.addEventListener('scroll', onScrollEventHandler_lazy, false);   
	else if (el_lazy.attachEvent)
	el_lazy.attachEvent('onscroll', onScrollEventHandler_lazy);
}

/* get parameters */
/*
var parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

var URLParams = parseQueryString();

var rhs_preview_flag = false;
if(  typeof URLParams['rhs_preview'] === "undefined" )
{} else if ( URLParams['rhs_preview'] == "enabled" )
{
	rhs_preview_flag = true;
	fv_setcookie( 'rhs_preview' , 1, 1 );
}

if ( fv_getcookie( 'rhs_preview' ) == 1 )
{
	rhs_preview_flag = true;
}

if ( window.location.href.search("www.straitstimes.com/asia") >= 0 )
{
	rhs_preview_flag = true;
}
*/

rhs_preview_flag = true;

/* Added for dynamic ad creation */

var dynamic_adslot_status = false;
var shift_adslot_status = false;
var rhs_space = 0;
var dynamic_adslot_list = new Array();
var DYNAMIC_AD_DISABLED = true;
if ( DYNAMIC_AD_DISABLED == false && window.location.hostname=='www.straitstimes.com'  &&  window.location.href.search("www.straitstimes.com/lifestyle")==-1  &&  screen.width >= 1250  && typeof _data != 'undefined' && typeof _data.articleid != 'undefined' && _data.articleid != ""  &&  rhs_preview_flag == true && !isIE() ) 
{
	//console.log ( "Dynamic ad ........." );
	
	var dynamic_adslot_cnt = 10;//start ie; 11 = 10 + 1
	var LHS_ID = "col-md-8";
	var RHS_ID = "col-md-4";
	var max_dynamic_adslot_cnt = 13;
	var stickyEle = false;
	var stickyEleFlag = false;
	var imageTemplateEle = false;
	var imageTemplateEleFlag = false;

	googletag.cmd = googletag.cmd || [];
		
	googletag.cmd.push(function()
	{	
		googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				
				if ( !stickyEleFlag ) /* check only once */
				{
					stickyEle = document.getElementById("sticky-anchor");
					stickyEleFlag = true;
				}
				

				if ( !imageTemplateEleFlag ) /* check only once */ /* Check for news image template  */
				{
					if ( document.querySelector('.view-mode-feature_article') !== null )
					{
						imageTemplateEle = true;
					}

					imageTemplateEleFlag = true;
				}


				if ( !stickyEle && !imageTemplateEle )
				{
					//console.log ( "Sticky Ad not found ........." );

					renderedSlotId = event.slot.getSlotElementId();
					
					var RemDynamicFlag = false;
					if ( event.isEmpty && dynamic_adslot_list.length > 0  && dynamic_adslot_list.indexOf( renderedSlotId ) != -1 )
					{
						RemDynamicFlag = true;
					}
					else if ( !event.isEmpty  &&  dynamic_adslot_list.length > 0  &&  dynamic_adslot_list.indexOf( renderedSlotId ) != -1  &&  event.size[0] != 300 )
					{
						RemDynamicFlag = true;
					}
					
					if ( RemDynamicFlag )
					{
						renderedSlotId = renderedSlotId.replace ( "dfp-ad-dynamic" , "dynamic_ad_holder" ); 
							
						//Deleting parent div if not ad not rendered
						//var element = document.getElementById( renderedSlotId );
						//element.parentNode.removeChild(element);
						document.getElementById( renderedSlotId ).className="";

						removeArrElement ( dynamic_adslot_list , renderedSlotId );
					}


					//console.log('Creative with id: ' + event.creativeId + ' is rendered to slot of size: ' + event.size[0] + 'x' + event.size[1]);
			
					temp1 = event.slot;
					temp2 = googletag.slots[ad_unit_loaded_across_page];

					if ( temp1 == temp2  )
					{
						lhs_rhs_checkNLoad ();
					}
					
						
				}

		});
		
	
	});
}




function lhs_rhs_checkNLoad ()
{
			/*
			console.log ( "CHECKING DATA ..........To Load => " + unitsloaded.length + " Loaded ========> " + unitstoload.length );
			console.log ( "LHS HEIGHT => " + document.getElementsByClassName( LHS_ID )[0].offsetHeight  );
			console.log ( "RHS HEIGHT => " + document.getElementsByClassName( RHS_ID )[0].offsetHeight  );
			*/

			rhs_space = parseInt ( document.getElementsByClassName( LHS_ID )[0].offsetHeight ) - parseInt ( document.getElementsByClassName( RHS_ID )[0].offsetHeight );
			
			//console.log ( "RHS => " + rhs_space );
			
			/* Subtracted 2 outbrain element height of  355 x 2 from rhs */
			if ( dynamic_adslot_cnt == 10 )
			{
				rhs_space = rhs_space - 710;
			}
			
			if ( rhs_space >= 250 && dynamic_adslot_cnt == 10 )
			{
				dynamic_adslot_cnt++;
				dynamic_ad_list.push( dynamic_adslot_cnt );

				
				addNewSlotRHS();

			}
			else if ( rhs_space >= ( 600 + adspacing_height ) && dynamic_adslot_cnt <= max_dynamic_adslot_cnt )
			{
				dynamic_adslot_cnt++;
				dynamic_ad_list.push( dynamic_adslot_cnt );

				
				addNewSlotRHS();				
			}
			else
			{
				dynamic_adslot_status = true;
			}


			
			
}


function addNewSlotRHS()
{
	if ( dynamic_adslot_cnt > max_dynamic_adslot_cnt ) //if cnt > max
	{
		return;
	}	

	//console.log ( "AD SLOT CREATING ................................." + dynamic_adslot_cnt );
	

	var objTo = document.getElementsByClassName('col-md-4')[0];
	var objTo2 = objTo;


	if ( typeof adspacing_height === undefined   )
	{} else if ( adspacing_height > 0 ) {
		var divholder = document.createElement("div");
		divholder.id = 'dynamic_ad_holder_spacing' + dynamic_adslot_cnt ;
		divholder.style.height = adspacing_height + "px";
		objTo.appendChild(divholder);
		
	} 


	var divholder = document.createElement("div");
	divholder.id = 'dynamic_ad_holder' + dynamic_adslot_cnt ;
	divholder.className = "ads sidebar-ads";
	objTo.appendChild(divholder);
	
	
	var objTo = document.getElementById( divholder.id );
	
	var divholder = document.createElement("div");
	divholder.id = 'dfp-ad-dynamic-wrapper' + dynamic_adslot_cnt ;
	divholder.className = "dfp-tag-wrapper";
    objTo.appendChild(divholder);
	
	

	var objTo = document.getElementById( divholder.id );
	var divholder = document.createElement("div");
	divholder.id = 'dfp-ad-dynamic' + dynamic_adslot_cnt ;
	divholder.className = "dfp-tag-wrapper";
	objTo.appendChild(divholder);
	
	//console.log ( "AD SLOT CREATED" );
	EnableListener_rhsdyna();
}


window.addEventListener('message', disableadunit, false);

var disableadunitPrefix = [ "lb1" , "imu" ];

function disableadunit(evt)
{
	if ( typeof evt.data !== 'undefined'  &&  typeof evt.data == 'string' )
	{	
		if ( ( isInArray ( evt.data.substr( 0 , 3 ) , disableadunitPrefix ) )  &&  typeof dfpadunits !== 'undefined'  &&  typeof dfpadunits [ evt.data ]  !== 'undefined'  &&  typeof dfpadunits [ evt.data ] [ 'slotname' ] !== 'undefined'  )
		{
			adholder = dfpadunits [ evt.data ] [ 'slotname' ];

			var pDoc = document.getElementById( adholder );
			if ( typeof pDoc.parentNode.id !== 'undefined' )
			{
				parentDivID = pDoc.parentNode.id;
				
				if( parentDivID )
				{
					var pHolder = document.getElementById( parentDivID );
					
					if ( typeof pHolder.id !== 'undefined' )
					{
						if ( typeof pHolder.parentNode !== 'undefined' )
						{						
							pHolder.parentNode.style.display="none";					
						}					
					}
					pHolder = null;
				}
				parentDivID = null;			
			}
			pDoc = null;
			adholder = null;
		}
	}
}


	
//if ( window.location.hostname == "www.straitstimes.com"  ||  window.location.hostname == "www.businesstimes.com.sg" ) { var topOverlayImpressions = 3; }


window.top.unruly = window.top.unruly || {};
window.top.unruly.native = unruly.native || {};
window.unruly.native.onAdDismissed = function () { 
    window.top.postMessage(1, '*');
}

if ( window.location.hostname == "www.businesstimes.com.sg" ||  window.location.hostname == "www.straitstimes.com"  ) { var topOverlayImpressions = 2; }