function mobileAndTabletcheck() {
  var check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1 6]i|770s|802s|a wa|abac|ac(er|oo|s\ )|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\ m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\ (n|u)|c55\/|capi|ccwa|cdm\ |cell|chtm|cldc|cmd\ |co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\ s|devi|dica|dmob|do(c|p)o|ds(12|\ d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4 7]0|os|wa|ze)|fetc|fly(\ |)|g1 u|g560|gene|gf\ 5|g\ mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\ (m|p|t)|hei\ |hi(pt|ta)|hp( i|ip)|hs\ c|ht(c(\ | ||a|g|p|s|t)|tp)|hu(aw|tc)|i\ (20|go|ma)|i230|iac( |\ |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\ |kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\ [a w])|libw|lynx|m1\ w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\ cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\ | |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0 2]|n20[2 3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\ |on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\ ([1 8]|c))|phil|pire|pl(ay|uc)|pn\ 2|po(ck|rt|se)|prox|psio|pt\ g|qa\ a|qc(07|12|21|32|60|\ [2 7]|i\ )|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\ |oo|p\ )|sdk\/|se(c(\ |0|1)|47|mc|nd|ri)|sgh\ |shar|sie(\ |m)|sk\ 0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\ |v\ |v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\ |tdg\ |tel(i|m)|tim\ |t\ mo|to(pl|sh)|ts(70|m\ |m3|m5)|tx\ 9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0 3]|\ v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\ | )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\ |your|zeto|zte\ /i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

(function (w, d, s) {
  try {
    d = w.top.document || d;
    w = w.top.document ? w.top : w;
  } catch (e) {}


  var nm = "'gpt-passback'";
  var ad_slot = "'"+s_passback_tag+"', [320, 100], "+nm+"";
  var key = "'willy_pub', ['display']";

  var script_func = window.top.document.createElement("script");
  script_func.text =
    "function spotxAdDoneFunc(spotx_ad_found) {" +
    "            if (spotx_ad_found) {" +
    '              console.log("SpotX Ad Done");' +
    "var spotx_container = window.top.document.querySelector('#s_vid_contain');" +
    'spotx_container.style.display = "none";' +
    "            } else {" +
    '               console.log("SpotX Passback");' +
        'var spt = document.getElementById("s_vid_contain");' +
        'var sc = document.createElement("script");' +
        'sc.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";'+
        'sc.setAttribute("async","");'+
        'var sc2 = document.createElement("script");'+
        'sc2.innerHTML="window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {var slot = googletag.defineSlot('+ad_slot+').addService(googletag.pubads()).setTargeting('+key+');googletag.enableServices();googletag.display('+nm+');googletag.pubads().refresh([slot])});";'+
        'var dv = document.createElement("div");'+
        'dv.id='+nm+';'+
        'dv.style="text-align:center";'+
        'dv.appendChild(sc2);'+
        'spt.appendChild(sc); spt.appendChild(dv)'+
    "            }" +
    "          }";


  frameElement.parentNode.parentNode.style.cssText = "height:0px !important";
  var bMobile = mobileAndTabletcheck();
  var script = document.querySelector("script[src*=spotx_dfp_full_sticky]");
  if (bMobile) {
    var s_channel_id = script.getAttribute("data-mobile-channel_id");
    var s_width = script.getAttribute("data-mobile-width");
    var s_height = script.getAttribute("data-mobile-height");
  } 
  var s_delay = script.getAttribute("data-close-delay");
  var s_offset_y = script.getAttribute("data-spotx_sticky_y_offset");
  var s_schain = script.getAttribute("data-spotx_schain");
  var offset_y = s_offset_y ? s_offset_y : "0";

  var spotx_slot = d.querySelector("body");
  var s_div = d.createElement("div");
  s_div.setAttribute("id", "s_vid_contain");
  var s_style =
    "width:" +
    s_width +
    "px; !important; height:" +
    s_height +
    "px; !important;z-index:99999999999;position: fixed;bottom:" +
    offset_y +
    "px;left: 0;";
  s_div.style.cssText = s_style;

  s.src = "//cdn.spotxcdn.com/website/integration_test/media/asia/EASI.js";
  s.type = "text/javascript";
  s.setAttribute("data-spotx_ad_unit", "incontent");
  s.setAttribute("data-spotx_channel_id", s_channel_id);
  s.setAttribute("data-spotx_content_width", s_width);
  s.setAttribute("data-spotx_content_height", s_height);
  s.setAttribute("data-spotx_ad_volume", 0);
  s.setAttribute("data-spotx_autoplay", 1);
  s.setAttribute("data-spotx_continue_out_of_view", "1");
  s.setAttribute("data-spotx_media_transcoding", "low");
  s.setAttribute("data-spotx_ad_done_function", "spotxAdDoneFunc");
  if (s_schain) s.setAttribute("data-spotx_schain", s_schain);
  if (s_delay) {
    s.setAttribute("data-spotx_ad_skippable", 1);
    s.setAttribute("data-spotx_ad_skip_delay", s_delay);
  }
  spotx_slot.appendChild(s_div);
  s_div.appendChild(script_func);
  s_div.appendChild(s);
})(window, document, document.createElement("script"));
