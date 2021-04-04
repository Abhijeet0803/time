const parser = new DOMParser();

const parseDoc = parser.parseFromString(`
<html lang=""><head>
<title>TIME | Current &amp; Breaking News | National &amp; World Updates</title>
<meta charset="utf-8">
<link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon">
<link rel="icon" href="/img/favicons/favicon-32.png" sizes="32x32">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="apple-touch-icon" href="/img/favicons/favicon-57.png">
<link rel="apple-touch-icon" href="/img/favicons/favicon-57.png" sizes="57x57">
<link rel="apple-touch-icon" href="/img/favicons/favicon-72.png" sizes="72x72">
<link rel="apple-touch-icon" href="/img/favicons/favicon-76.png" sizes="76x76">
<link rel="apple-touch-icon" href="/img/favicons/favicon-114.png" sizes="114x114">
<link rel="apple-touch-icon" href="/img/favicons/favicon-120.png" sizes="120x120">
<link rel="apple-touch-icon" href="/img/favicons/favicon-144.png" sizes="144x144">
<link rel="apple-touch-icon" href="/img/favicons/favicon-152.png" sizes="152x152">
<link rel="apple-touch-icon" href="/img/favicons/favicon-180.png" sizes="180x180">
<link rel="icon" sizes="192x192" href="/img/favicons/favicon-192.png">
<link rel="manifest" href="/manifest.json">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="news_keywords" content="">
<meta name="description" content="Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.">
<link rel="canonical" href="https://time.com">
  <meta property="og:title" content="TIME Homepage">
<meta property="og:type" content="article">
  <meta property="article:content_tier" content="free">

  <meta property="article:opinion" content="false">
<meta property="og:site_name" content="Time">
  <meta property="og:url" content="https://time.com">
  <meta property="og:description" content="Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news. ">
<meta name="pinterest:url" content="https://time.com">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://time.com">
  <meta name="twitter:title" content="TIME Homepage">
  <meta name="twitter:description" content="Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.">
  <meta name="pinterest:description" content="Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.">
<meta name="twitter:site" content="@TIME">
<meta name="pinterest:media" content="https://api.time.com/wp-content/themes/time2014/img/time-logo-og.png">
<meta name="twitter:image" content="https://api.time.com/wp-content/themes/time2014/img/time-logo-og.png">
<meta property="og:image" content="https://api.time.com/wp-content/themes/time2014/img/time-logo-og.png">
  <meta property="og:image:width" content="300">
  <meta property="og:image:height" content="300">
<meta property="fb:app_id" content="53177223193">
<meta property="fb:pages" content="10606591490">
  <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/bfvuz6tShG5aoZp4K4zPVf5t/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-pMn/at+iAgl0PpX8A+ccr7iPPScp0lIFsRTiC6EkDFtJ3fTeFBeJkP7nZJTcbD5h"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-P59JVDP&amp;l=dataLayer"></script><script src="https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/dnsfeed" async="" type="text/javascript"></script><script type="application/ld+json">
    [{"@context":"http://schema.org","@type":"Organization","name":"Time","url":"https://time.com","logo":{"@type":"ImageObject","url":"https://time.com/img/logo.png","width":210,"height":60},"sameAs":["https://www.facebook.com/time","https://www.instagram.com/time/?hl=en","https://twitter.com/time","https://www.pinterest.com/timemagazine"]},{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://time.com","name":"","image":null}}]}]
  </script>
<meta name="recaptcha-key" content="6LfZrtgZAAAAAJ8n221oa1YgG6cVvoOPgamCm6oT">    <link rel="preconnect" href="https://cdn.cookielaw.org/">
<link rel="preconnect" href="https://www.googletagmanager.com/">
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
<link rel="preconnect" href="https://assets.time.com/">

  <link rel="preconnect" href="https://api.time.com">



<script src="https://cdn.cookielaw.org/consent/cmp.stub.js" type="text/javascript" charset="UTF-8"></script><style type="text/css">
:root .ad
{ display: none !important; }</style>

<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="fa2d093b-4f84-4fba-98c5-78d84c26682a"></script>
<script type="text/javascript">
  function OptanonWrapper() {
    var regCheckPerformance = /,C0002,/;
    var regCheckFunctional = /,C0003,/;
    var regCheckTargeting = /,C0004,/;
    var regCheckSocial = /,C0005,/;
    var checkPerformance = window.OptanonActiveGroups.match(regCheckPerformance);
    var checkTargeting = window.OptanonActiveGroups.match(regCheckTargeting);
    var processAds = function() {
      if(window.time_dfp) {
        window.time_dfp.default.processAds();
      }
    };

    if (typeof window.googletag !== 'undefined' && window.googletag.apiReady) {
      if (checkTargeting) {
        window.googletag.pubads().setRequestNonPersonalizedAds(0);
      } else {
        window.googletag.pubads().setRequestNonPersonalizedAds(1);
      }
    }

    if (typeof window.__tcfapi !== 'undefined') {
      window.__tcfapi( 'addEventListener', 2, function( tcData, listenerSuccess ) {
        var loadAds = false;
        if ( listenerSuccess ) {
          if( tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete' ) {
            var hasDeviceStorageAndAccessConsent = tcData.purpose.consents[1] || false;
            var hasGoogleAdvertisingProductsConsent = tcData.vendor.consents[755] || false;
            var hasConsent = hasDeviceStorageAndAccessConsent && hasGoogleAdvertisingProductsConsent;

            if (!tcData.gdprApplies || (tcData.gdprApplies && hasConsent)) {
              loadAds = true;
            }

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'OneTrustTCFLoaded',
              TCStringLoaded: true ,
              tcData,
            });
          }
        } else {
          loadAds = true;
        }

        if (loadAds) processAds();
      });

    } else {
      processAds();
    }

    if (typeof window.Krux !== 'undefined') {
      var parameters = {
        // Consent flag for whether data collection is allowed
        dc: checkTargeting || checkPerformance,

        // Consent flag for whether analytics is allowed
        al: checkPerformance,

        // Consent flag for whether targeting is allowed
        tg: checkTargeting,

        // Consent flag for whether cross-device linking is allowed
        cd: checkTargeting,

        // Consent flag for whether data sharing is allowed
        sh: checkTargeting || checkPerformance,

        // Consent flag for whether re-identification is allowed
        re: checkTargeting
      };

      window.Krux('ns:timemagazine', 'consent:set', parameters);
    }

  };
</script>

<script src="https://cdn.cookielaw.org/opt-out/otCCPAiab.js" type="text/javascript" charset="UTF-8" ccpa-opt-out-ids="C0002, C0003, C0004, C0005" ccpa-opt-out-geo="us" ccpa-opt-out-lspa="false"></script>
    <script type="text/javascript">
      (function(w,d,s,l,i){
        w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+'&l=dataLayer';f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P59JVDP');
    </script>


  <script async="" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>

  <script async="" src="https://c.amazon-adsystem.com/aax2/apstag.js"></script>
  <script>
    window.apstag = window.apstag || {
      init: function() {
        apstag._Q.push(["i", arguments, (new Date).getTime()])
      },
      fetchBids: function() {
        apstag._Q.push(["f", arguments, (new Date).getTime()])
      },
      setDisplayBids: function() {},
      _Q: []
    };
  </script>

  <script id="tgx-script" async="" src="//assets.time.com/draper/draper.min.js" data-tgxzone="homepage/homepage" data-disablestyle="true" data-tgxoptlazy="false" data-onetrust-enabled="true" data-disable-script-gpt="true" data-disable-script-aps="true" data-tgxtargeting="%7B%22ch%22%3A%22homepage%22%2C%22sch%22%3A%22%22%2C%22ctype%22%3A%22homepage%22%2C%22tags%22%3A%5B%5D%2C%22aid%22%3A5232653%2C%22cid%22%3A5232653%7D">
  </script>

  <script type="text/javascript" async="" src="https://www.google.com/recaptcha/api.js"></script>

<!-- Google Fonts-->
<link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700|Roboto:300,400,700|Roboto+Condensed:300,400,400i,700|Lora:400,400i,700,700i|Zilla+Slab:400,400i,500,600,700,700i|Oswald:200, 300, 400,500,600,700" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="/dist/homepage.css">  <style type="text/css">
:root *[eii0hxv][hidden] { display: none !important; }</style><style type="text/css">
:root .mobile-ad,
:root .ad.desktop-970x250,
:root .ad.element,
:root .ad.inner,
:root .ad.item,
:root .ad.maxiboard,
:root .ad.module,
:root .ad.monsterboard,
:root .ad.rectangle_2,
:root .ad.rectangle_3,
:root .ad.rectangle_home_1,
:root .ad.sidebar-module,
:root .ad.size-300x250,
:root .ad.super,
:root .ad.widget,
:root .ad-container.component,
:root .ad-wrapper,
:root .desktop-ad
{ display: none !important; }</style><script async="" src="https://z.moatads.com/timeincheader121325925977/moatheader.js"></script><script src="https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location" async="" type="text/javascript"></script><script src="https://cdn.cookielaw.org/scripttemplates/6.15.0/otBannerSdk.js" async="" type="text/javascript"></script><script type="text/javascript" async="" src="https://cdn.cookielaw.org/scripttemplates/6.15.0/otTCF.js"></script><style id="onetrust-style">#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-left:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk:focus{outline:2px solid #000;outline-offset:-2px}#onetrust-banner-sdk a:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon,#ot-sync-ntfy .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a,#ot-sync-ntfy .powered-by-logo,#ot-sync-ntfy .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *,#ot-sync-ntfy h3 *,#ot-sync-ntfy h4 *,#ot-sync-ntfy h6 *,#ot-sync-ntfy button *,#ot-sync-ntfy a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide,#ot-sync-ntfy .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-right:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr,.ot-sdk-cookie-policy .screen-reader-only,.ot-sdk-cookie-policy .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in,#onetrust-banner-sdk.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;left:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}#onetrust-banner-sdk .banner-option-input:focus+label{outline:1px solid #000;outline-style:auto}
#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy,#ot-sync-ntfy{font-size:1rem}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before,#ot-sync-ntfy *,#ot-sync-ntfy ::after,#ot-sync-ntfy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox,#ot-sync-ntfy div,#ot-sync-ntfy span,#ot-sync-ntfy h1,#ot-sync-ntfy h2,#ot-sync-ntfy h3,#ot-sync-ntfy h4,#ot-sync-ntfy h5,#ot-sync-ntfy h6,#ot-sync-ntfy p,#ot-sync-ntfy img,#ot-sync-ntfy svg,#ot-sync-ntfy button,#ot-sync-ntfy section,#ot-sync-ntfy a,#ot-sync-ntfy label,#ot-sync-ntfy input,#ot-sync-ntfy ul,#ot-sync-ntfy li,#ot-sync-ntfy nav,#ot-sync-ntfy table,#ot-sync-ntfy thead,#ot-sync-ntfy tr,#ot-sync-ntfy td,#ot-sync-ntfy tbody,#ot-sync-ntfy .ot-main-content,#ot-sync-ntfy .ot-toggle,#ot-sync-ntfy #ot-content,#ot-sync-ntfy #ot-pc-content,#ot-sync-ntfy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;left:auto;right:auto;top:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before,#ot-sync-ntfy label:before,#ot-sync-ntfy label:after,#ot-sync-ntfy .checkbox:after,#ot-sync-ntfy .checkbox:before{content:"";content:none}
#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:left;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-left:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-left:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-left:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-left:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-left:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-left:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-left:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-left:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-left:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-left:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-left:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-left:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-left:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #000;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-left:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-left:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:right}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:left}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block}
#onetrust-banner-sdk.otFloatingRoundedCorner{position:fixed;z-index:2147483645;background-color:#fff;width:26%;max-width:375px;border-radius:2.5px;bottom:1em;left:1em;font-size:1rem;max-height:90%;overflow-x:hidden;overflow-y:auto;box-shadow:0 0 18px rgba(0,0,0,.2)}#onetrust-banner-sdk.otFloatingRoundedCorner::-webkit-scrollbar{width:11px}#onetrust-banner-sdk.otFloatingRoundedCorner::-webkit-scrollbar-thumb{border-radius:10px;background:#c1c1c1}#onetrust-banner-sdk.otFloatingRoundedCorner{scrollbar-arrow-color:#c1c1c1;scrollbar-darkshadow-color:#c1c1c1;scrollbar-face-color:#c1c1c1;scrollbar-shadow-color:#c1c1c1}#onetrust-banner-sdk.otFloatingRoundedCorner .ot-gv-list-handler{float:left;font-size:.82em;padding:0 25px 30px 25px;margin-bottom:0;border:0;line-height:normal;height:auto;width:auto}#onetrust-banner-sdk.otFloatingRoundedCorner.ot-bottom-left[dir=rtl]{right:1em}#onetrust-banner-sdk.otFloatingRoundedCorner.ot-bottom-right{right:1em;left:auto}#onetrust-banner-sdk.otFloatingRoundedCorner.ot-bottom-right[dir=rtl]{left:1em;right:auto}#onetrust-banner-sdk h3,#onetrust-banner-sdk p{color:dimgray}#onetrust-banner-sdk h3{margin-bottom:0}#onetrust-banner-sdk .banner-header{margin-left:20px;margin-bottom:20px;margin-right:10px}#onetrust-banner-sdk .ot-close-icon{width:44px;height:44px;background-size:12px;display:inline-block;padding:0;border:none}#onetrust-banner-sdk #onetrust-policy-text,#onetrust-banner-sdk .ot-b-addl-desc{clear:both;float:left;font-size:.82em;line-height:1.5;padding:0 20px 20px 20px;margin:0}#onetrust-banner-sdk #onetrust-policy-text>*,#onetrust-banner-sdk .ot-b-addl-desc>*{margin-bottom:0px;font-size:inherit}#onetrust-banner-sdk .ot-b-addl-desc{display:block}#onetrust-banner-sdk #onetrust-policy{margin-top:20px}#onetrust-banner-sdk #onetrust-policy h3{font-size:1em;line-height:1.4}#onetrust-banner-sdk #onetrust-button-group-parent{padding:0 25px 30px 25px}#onetrust-banner-sdk #onetrust-button-group{text-align:center;display:inline-block;width:100%}#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler{background-color:#6cc04a;color:#fff;border-color:#6cc04a;margin-right:1em}#onetrust-banner-sdk .banner-actions-container{text-align:center}#onetrust-banner-sdk #onetrust-pc-btn-handler{background-color:#6cc04a;color:#fff;border:1px solid #6cc04a}#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler,#onetrust-banner-sdk #onetrust-pc-btn-handler{width:100%;padding:12px 10px;font-size:.82em;font-weight:600;line-height:1.4;letter-spacing:.05em;height:auto;white-space:normal;word-break:break-word;word-wrap:break-word}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link{background-color:#fff;border:none;color:#6cc04a;text-decoration:underline}#onetrust-banner-sdk #onetrust-policy-title,#onetrust-banner-sdk #onetrust-close-btn-container{display:inline-block}#onetrust-banner-sdk #onetrust-policy-title{font-weight:600;font-size:1em;padding:0 0 10px 25px;float:left;width:80%}#onetrust-banner-sdk #onetrust-close-btn-container{position:absolute;right:3px;top:8px}#onetrust-banner-sdk button{margin-bottom:.6rem}#onetrust-banner-sdk .banner_logo{display:none}#onetrust-banner-sdk #banner-options{float:left;padding:0 25px 20px 25px;width:calc(100% - 2 * $facelift-left-right-margin)}#onetrust-banner-sdk .banner-option-header{cursor:pointer;display:inline-block}#onetrust-banner-sdk .banner-option-header :first-child{color:dimgray;font-weight:bold;float:left}#onetrust-banner-sdk .banner-option-header .ot-arrow-container{display:inline-block;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid dimgray;margin-left:10px;vertical-align:middle;transition:all 300ms ease-in 0s;-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s}#onetrust-banner-sdk .banner-option-details{display:none;font-size:.83em;line-height:1.5;height:0px;padding:10px 10px 5px 10px;transition:all 300ms ease-in 0s;-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s}#onetrust-banner-sdk .banner-option-details *{font-size:inherit;line-height:inherit;color:dimgray}#onetrust-banner-sdk .banner-option-input{cursor:pointer;width:auto;border:none;height:auto;padding:0;padding-right:3px;margin:0 0 6px;font-size:.82em;line-height:1.4}#onetrust-banner-sdk .banner-option-input *{pointer-events:none;line-height:inherit;font-size:inherit}#onetrust-banner-sdk .banner-option-input[aria-expanded=true]~.banner-option-details{height:auto;display:block}#onetrust-banner-sdk .banner-option-input[aria-expanded=true] .ot-arrow-container{transform:rotate(90deg)}#onetrust-banner-sdk .ot-dpd-container{float:left;padding:0 20px 4px 20px;clear:both}#onetrust-banner-sdk .ot-dpd-container .ot-dpd-title{font-weight:bold;padding-bottom:10px}#onetrust-banner-sdk .ot-dpd-container .ot-dpd-desc{font-size:.82em;line-height:1.5}#onetrust-banner-sdk .ot-dpd-container .ot-dpd-desc>.ot-b-addl-desc{margin-top:10px;padding:0}#onetrust-banner-sdk .ot-dpd-container .ot-dpd-desc *{font-size:inherit;line-height:inherit}#onetrust-banner-sdk .ot-dpd-container .ot-dpd-desc .onetrust-vendors-list-handler{display:block;margin-left:0px;margin-top:5px;clear:both;padding:0;margin-bottom:0;border:0;height:auto;width:auto}#onetrust-banner-sdk #onetrust-policy .ot-dpd-title{font-size:.88em}@media only screen and (max-width: 425px){#onetrust-banner-sdk #onetrust-button-group-parent{padding:0 25px 30px 25px}#onetrust-banner-sdk .ot-sdk-container{width:100%;padding:0}#onetrust-banner-sdk.otFloatingRoundedCorner{width:92%;max-width:100%;left:0;bottom:0}}@media only screen and (min-width: 426px)and (max-width: 896px){#onetrust-banner-sdk .ot-sdk-container{width:100%}#onetrust-banner-sdk #onetrust-button-group-parent{padding:0 25px 30px 25px}#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler,#onetrust-banner-sdk #onetrust-pc-btn-handler{width:45%}#onetrust-banner-sdk #onetrust-reject-all-handler{margin-right:0}#onetrust-banner-sdk #onetrust-button-group-parent:not(.has-reject-all-button) #onetrust-accept-btn-handler{margin-right:0}#onetrust-banner-sdk.otFloatingRoundedCorner{width:100%;max-width:94%;left:0;bottom:0}}@media only screen and (max-width: 896px){#onetrust-banner-sdk.ot-bottom-left.otFloatingRoundedCorner[dir=rtl]{right:auto}}@media only screen and (min-width: 768px){#onetrust-banner-sdk #onetrust-accept-btn-handler,#onetrust-banner-sdk #onetrust-reject-all-handler,#onetrust-banner-sdk #onetrust-pc-btn-handler{width:100%}#onetrust-banner-sdk .banner-header{margin-left:40px;margin-bottom:20px;margin-right:15px}#onetrust-banner-sdk #onetrust-button-group-parent{padding:0 25px 30px 25px}#onetrust-banner-sdk #onetrust-policy-text,#onetrust-banner-sdk :not(.ot-dpd-desc)>.ot-b-addl-desc,#onetrust-banner-sdk .ot-dpd-container{padding:0 25px 10px 25px}#onetrust-banner-sdk .ot-dpd-container{padding-bottom:4px}#onetrust-banner-sdk #banner-options{padding:0 25px 20px 25px;width:calc(100% - 50px)}#onetrust-banner-sdk #banner-options .banner-option{margin-bottom:6px}#onetrust-banner-sdk #onetrust-close-btn-container{right:3px}#onetrust-banner-sdk.otFloatingRoundedCorner{width:48%}}
    #onetrust-consent-sdk #onetrust-banner-sdk {background-color: #FFFFFF;}
        #onetrust-consent-sdk #onetrust-policy-title,
                #onetrust-consent-sdk #onetrust-policy-text,
                #onetrust-consent-sdk .ot-b-addl-desc,
                #onetrust-consent-sdk .ot-dpd-desc,
                #onetrust-consent-sdk .ot-dpd-title,
                #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),
                #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),
                #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,
                #onetrust-banner-sdk .ot-cat-header {
                    color: #696969;
                }
        #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {
                background-color: #E00606;}
         #onetrust-consent-sdk #onetrust-banner-sdk a[href],
                #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,
                #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn
                    {
                        color: #E00606;
                    }#onetrust-consent-sdk #onetrust-accept-btn-handler,
                     #onetrust-banner-sdk #onetrust-reject-all-handler {
                        background-color: #E00606;border-color: #E00606;
                        color: #FFFFFF;
                    }
        #onetrust-consent-sdk #onetrust-pc-btn-handler,
        #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
            color: #E00606; border-color: #E00606;
            background-color: 
            #FFFFFF;
        }#onetrust-banner-sdk {
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.32);
}

#onetrust-banner-sdk a {
display: block;
text-align: center;
}@keyframes ot-slide-in-left{from{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes ot-slide-in-right{from{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}to{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes ot-slide-out-left{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}}@keyframes ot-slide-out-right{from{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}to{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}#onetrust-pc-sdk.otPcPanel.ot-slide-out-right{-webkit-animation-name:ot-slide-out-right;animation-name:ot-slide-out-right}#onetrust-pc-sdk.otPcPanel.ot-slide-in-left{-webkit-animation-name:ot-slide-in-left;animation-name:ot-slide-in-left}#onetrust-pc-sdk.otPcPanel.ot-slide-in-right{-webkit-animation-name:ot-slide-in-right;animation-name:ot-slide-in-right}#onetrust-pc-sdk.otPcPanel.ot-slide-out-left{-webkit-animation-name:ot-slide-out-left;animation-name:ot-slide-out-left}@media print,(prefers-reduced-motion){.ot-animated{-webkit-animation:initial !important;animation:initial !important;-webkit-transition:none !important;transition:none !important}#onetrust-pc-sdk.otPcPanel.ot-slide-out-left{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}#onetrust-pc-sdk.otPcPanel.ot-slide-out-right{-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}}#onetrust-pc-sdk{position:fixed;z-index:2147483647;bottom:0;left:0;background-color:#fff;max-width:480px;min-width:480px;height:100%;-webkit-box-shadow:0px 2px 10px -3px #999;-moz-box-shadow:0px 2px 10px -3px #999;box-shadow:0px 2px 10px -3px #999}#onetrust-pc-sdk.otPcPanel.right,#onetrust-pc-sdk.otPcPanel[dir=rtl]{right:0;left:auto}#onetrust-pc-sdk.otPcPanel.right-rtl[dir=rtl]{left:0;right:auto}#onetrust-pc-sdk.otPcPanel.ot-animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}#onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon{background-color:transparent;border:none}#onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-track{margin-right:20px}#onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar{width:11px}#onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-thumb{border-radius:10px;background:#d8d8d8}#onetrust-pc-sdk .ot-pc-scrollbar{scrollbar-arrow-color:#d8d8d8;scrollbar-darkshadow-color:#d8d8d8;scrollbar-face-color:#d8d8d8;scrollbar-shadow-color:#d8d8d8}#onetrust-pc-sdk.ot-ftr-stacked .ot-pc-refuse-all-handler{margin-bottom:0px}#onetrust-pc-sdk.ot-ftr-stacked #ot-pc-content{bottom:160px}#onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button{width:100%;max-width:none}#onetrust-pc-sdk.ot-ftr-stacked #ot-lst-cnt{max-height:84%}#onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr,#onetrust-pc-sdk #ot-addtl-venlst .ot-plus-minus,#onetrust-pc-sdk .ot-hide-tgl{visibility:hidden}#onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr *,#onetrust-pc-sdk #ot-addtl-venlst .ot-plus-minus *,#onetrust-pc-sdk .ot-hide-tgl *{visibility:hidden}#onetrust-pc-sdk .ot-pc-header{height:39px;border-bottom:1px solid #e9e9e9;padding:10px 0 10px 25px}#onetrust-pc-sdk .ot-pc-logo{height:40px;width:120px;display:inline-block}#onetrust-pc-sdk .ot-close-icon{float:right;height:10px;width:10px;margin-top:10px;margin-right:5px}#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk #ot-pc-lst{position:absolute;top:60px;bottom:104px}#onetrust-pc-sdk #ot-pc-content{padding-left:2px;padding-right:10px;margin-left:23px;margin-right:7px;width:calc(100% - 42px);overflow-y:auto}#onetrust-pc-sdk #ot-pc-lst{width:100%}#onetrust-pc-sdk .ot-pc-footer{position:absolute;bottom:0px;width:100%;max-height:160px;border-top:1px solid #d8d8d8}#onetrust-pc-sdk .ot-pc-footer button{margin-top:19px}#onetrust-pc-sdk .ot-btn-container{text-align:left;margin-left:25px;margin-right:25px}#onetrust-pc-sdk .ot-btn-container button{min-width:calc(50% - 5px)}#onetrust-pc-sdk .ot-pc-footer-logo{padding-left:25px;height:30px;background:#f4f4f4;text-align:right}#onetrust-pc-sdk .ot-pc-footer-logo a{display:inline-block;margin-top:5px;margin-right:10px}#onetrust-pc-sdk.otPcPanel[dir=rtl] .ot-pc-footer-logo{direction:rtl}#onetrust-pc-sdk.otPcPanel[dir=rtl] .ot-pc-footer-logo a{margin-right:25px}#onetrust-pc-sdk button{display:inline-block;font-size:.75em;letter-spacing:.08em;max-width:394px;padding:12px 30px;line-height:1;word-break:break-word;word-wrap:break-word;white-space:normal;font-weight:bold;height:auto}#onetrust-pc-sdk button:hover,#onetrust-pc-sdk button:focus{color:#fff;border-color:#68b631}#onetrust-pc-sdk .ot-link-btn{padding:0;margin-bottom:0;border:0;font-weight:normal;line-height:normal;width:auto;height:auto}#onetrust-pc-sdk #accept-recommended-btn-handler{margin-right:10px;margin-bottom:25px}#onetrust-pc-sdk .ot-pc-refuse-all-handler{margin-right:5px}#onetrust-pc-sdk .ot-tgl{float:right;position:relative;z-index:1}#onetrust-pc-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob{background-color:#d5e9ff;border:1px solid #3860be}#onetrust-pc-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before{-webkit-transform:translateX(21px);-ms-transform:translateX(21px);transform:translateX(21px);background-color:#3860be}#onetrust-pc-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob{box-shadow:0 0 1px #2196f3;outline:#000 auto 5px !important}#onetrust-pc-sdk .ot-switch{position:relative;display:inline-block;width:45px;height:25px;margin-bottom:0}#onetrust-pc-sdk .ot-switch-nob{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#f2f1f1;border:1px solid #ddd;transition:all .2s ease-in 0s;-moz-transition:all .2s ease-in 0s;-o-transition:all .2s ease-in 0s;-webkit-transition:all .2s ease-in 0s;border-radius:20px}#onetrust-pc-sdk .ot-switch-nob:before{position:absolute;content:"";height:21px;width:21px;bottom:1px;background-color:#7d7d7d;-webkit-transition:.4s;transition:.4s;border-radius:20px}#onetrust-pc-sdk .ot-chkbox{z-index:1}#onetrust-pc-sdk .ot-chkbox input:checked~label::before{background-color:#3860be}#onetrust-pc-sdk .ot-chkbox input+label::after{content:none;color:#fff}#onetrust-pc-sdk .ot-chkbox input:checked+label::after{content:""}#onetrust-pc-sdk .ot-chkbox input:focus+label::before{outline-style:solid;outline-width:2px;outline-style:auto}#onetrust-pc-sdk .ot-chkbox label{position:relative;display:inline-block;cursor:pointer}#onetrust-pc-sdk .ot-chkbox label::before,#onetrust-pc-sdk .ot-chkbox label::after{position:absolute;content:"";display:inline-block;border-radius:3px}#onetrust-pc-sdk .ot-chkbox label::before{height:18px;width:18px;border:1px solid #3860be;left:0px}#onetrust-pc-sdk .ot-chkbox label::after{height:5px;width:9px;border-left:3px solid;border-bottom:3px solid;transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);left:4px;top:5px}#onetrust-pc-sdk .ot-label-txt{display:none}#onetrust-pc-sdk .ot-chkbox input,#onetrust-pc-sdk .ot-tgl input{position:absolute;opacity:0;width:0;height:0}#onetrust-pc-sdk .ot-arw-cntr{float:right;position:relative;left:5px}#onetrust-pc-sdk .ot-arw{width:16px;height:16px;margin-left:5px;color:dimgray;display:inline-block;vertical-align:middle;-webkit-transition:all 300ms ease-in 0s;-moz-transition:all 300ms ease-in 0s;-o-transition:all 300ms ease-in 0s;transition:all 300ms ease-in 0s}#onetrust-pc-sdk input:checked~.ot-acc-hdr .ot-arw{transform:rotate(90deg);-o-transform:rotate(90deg);-ms-transform:rotate(90deg);-webkit-transform:rotate(90deg)}#onetrust-pc-sdk input[type=checkbox]:focus+.ot-acc-hdr{outline:1px solid #000}#onetrust-pc-sdk .ot-acc-hdr{display:inline-block;width:100%}#onetrust-pc-sdk #ot-fltr-modal .ot-label-txt{display:inline-block;font-size:.85em;color:dimgray}#onetrust-pc-sdk .ot-label-status{padding-left:5px;font-size:.75em;display:none}#onetrust-pc-sdk .ot-plus-minus{width:20px;height:20px;font-size:1.5em;position:relative;display:inline-block;margin-right:5px;top:3px}#onetrust-pc-sdk .ot-plus-minus span{position:absolute;background:#27455c;border-radius:1px}#onetrust-pc-sdk .ot-plus-minus span:first-of-type{top:25%;bottom:25%;width:10%;left:45%}#onetrust-pc-sdk .ot-plus-minus span:last-of-type{left:25%;right:25%;height:10%;top:45%}#onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-plus-minus span:first-of-type,#onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-plus-minus span:last-of-type{transform:rotate(90deg)}#onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-plus-minus span:last-of-type{left:50%;right:50%}#onetrust-pc-sdk .ot-host-item,#onetrust-pc-sdk .ot-ven-item{padding-right:0}#onetrust-pc-sdk .ot-host-item .ot-plus-minus,#onetrust-pc-sdk .ot-ven-item .ot-plus-minus{float:left;margin-right:8px;margin-top:10px}#onetrust-pc-sdk .ot-hide-acc>button{pointer-events:none}#onetrust-pc-sdk .ot-hide-acc .ot-plus-minus>*,#onetrust-pc-sdk .ot-hide-acc .ot-arw-cntr>*{visibility:hidden}#onetrust-pc-sdk .ot-hide-acc .ot-acc-hdr{min-height:30px}#onetrust-pc-sdk #ot-pc-title,#onetrust-pc-sdk #ot-pc-desc,#onetrust-pc-sdk #ot-category-title,#onetrust-pc-sdk .ot-cat-header,#onetrust-pc-sdk .ot-cat-item p:last-of-type{color:dimgray}#onetrust-pc-sdk #ot-pc-title{margin-top:20px;margin-bottom:10px}#onetrust-pc-sdk #ot-pc-desc,#onetrust-pc-sdk .ot-cat-item p{font-size:.79em;line-height:1.4}#onetrust-pc-sdk #ot-pc-desc *,#onetrust-pc-sdk .ot-cat-item p *{font-size:inherit;line-height:inherit}#onetrust-pc-sdk #ot-category-title,#onetrust-pc-sdk #ot-pc-title{font-size:1.125em;line-height:1.2}#onetrust-pc-sdk #ot-pc-desc{clear:both;font-size:.813em;line-height:1.5;margin-bottom:25px}#onetrust-pc-sdk #ot-pc-desc *{font-size:inherit}#onetrust-pc-sdk #ot-pc-desc a{display:block;margin-top:5px}#onetrust-pc-sdk #ot-pc-desc li{padding:10px 0px}#onetrust-pc-sdk #ot-pc-desc,#onetrust-pc-sdk #accept-recommended-btn-handler,#onetrust-pc-sdk #ot-pc-title,#onetrust-pc-sdk #ot-category-title,#onetrust-pc-sdk .ot-cat-header{float:left}#onetrust-pc-sdk #ot-category-title{width:100%;text-align:left}#onetrust-pc-sdk #ot-pc-title,#onetrust-pc-sdk #ot-category-title,#onetrust-pc-sdk .ot-cat-header,#onetrust-pc-sdk #ot-lst-title,#onetrust-pc-sdk .ot-ven-hdr .ot-ven-name,#onetrust-pc-sdk .ot-always-active{font-weight:bold}#onetrust-pc-sdk a{color:#656565;cursor:pointer}#onetrust-pc-sdk a:hover{color:#3860be}#onetrust-pc-sdk .ot-always-active{float:right;color:#3860be;margin-top:-2px}#onetrust-pc-sdk .ot-cat-header,#onetrust-pc-sdk .ot-always-active{font-size:.88em;line-height:1.4;position:relative}#onetrust-pc-sdk .ot-cat-item{margin-top:25px;line-height:1.1}#onetrust-pc-sdk .ot-cat-item p:last-of-type{clear:both;padding-top:15px;margin:0}#onetrust-pc-sdk .ot-acc-txt p ul,#onetrust-pc-sdk .ot-cat-item ul,#onetrust-pc-sdk li.ot-subgrp p ul{margin:0px;list-style:disc;margin-left:15px}#onetrust-pc-sdk .ot-acc-txt p ul li,#onetrust-pc-sdk .ot-cat-item ul li,#onetrust-pc-sdk li.ot-subgrp p ul li{font-size:inherit;margin:5px 0 0 0;padding:0;border:none}#onetrust-pc-sdk .ot-subgrp-cntr{display:inline-block;width:100%}#onetrust-pc-sdk .ot-subgrp-cntr .ot-tgl-cntr{float:right}#onetrust-pc-sdk .ot-subgrp-cntr .ot-tgl-cntr.ot-always-active-subgroup{width:auto}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li p,#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li h5{font-size:.813em;line-height:1.5;color:dimgray}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-hdr{display:inline-block;width:100%;vertical-align:middle}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps .ot-acc-txt{margin:0}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li{margin:10px 0 0 0;padding:0;border:none}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li p{clear:both;float:left;padding-top:10px;margin:0}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li h5{font-weight:bold;margin-bottom:0;float:left;position:relative;top:6px}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li.ot-subgrp{margin-left:20px;overflow:hidden}#onetrust-pc-sdk .ot-subgrp-cntr ul.ot-subgrps li.ot-subgrp>p ul:first-child{padding-bottom:7.5px}#onetrust-pc-sdk ul.ot-subgrps{margin:0}#onetrust-pc-sdk .ot-hlst-cntr,#onetrust-pc-sdk .ot-vlst-cntr{margin-top:3px;overflow:hidden;clear:both;padding-left:2px;padding-bottom:2px}#onetrust-pc-sdk .ot-always-active-subgroup{width:auto;padding-left:0px !important;top:3px;position:relative}#onetrust-pc-sdk .category-vendors-list-handler,#onetrust-pc-sdk .category-vendors-list-handler+a,#onetrust-pc-sdk .category-host-list-handler{color:#3860be;margin-left:0;font-size:.813em;text-decoration:none;float:left;margin-top:5px}#onetrust-pc-sdk .category-vendors-list-handler:hover,#onetrust-pc-sdk .category-vendors-list-handler+a:hover,#onetrust-pc-sdk .category-host-list-handler:hover{color:#1883fd}#onetrust-pc-sdk .category-vendors-list-handler+a{clear:none}#onetrust-pc-sdk .category-vendors-list-handler+a::after{content:"";height:15px;width:15px;background-repeat:no-repeat;margin-left:5px;float:right;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.626 511.627'%3E%3Cg fill='%231276CE'%3E%3Cpath d='M392.857 292.354h-18.274c-2.669 0-4.859.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414H82.224c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.994c2.669 0 4.859-.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567V82.221c0-2.662-.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648 0-42.016 8.042-58.102 24.125C8.042 113.297 0 132.665 0 155.313v237.542c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.543c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z'/%3E%3Cpath d='M506.199 41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.147 186.151c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-.948 6.567-2.852l186.148-186.148 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847V54.818c-.001-4.952-1.814-9.232-5.428-12.847z'/%3E%3C/g%3E%3C/svg%3E")}#onetrust-pc-sdk .back-btn-handler{min-height:20px;font-size:1em;text-decoration:none}#onetrust-pc-sdk .back-btn-handler svg{width:12px;height:12px}#onetrust-pc-sdk .back-btn-handler:hover{opacity:.6}#onetrust-pc-sdk #ot-lst-title span{word-break:break-word;word-wrap:break-word;margin-bottom:0;color:#656565;font-weight:bold;margin-left:15px}#onetrust-pc-sdk #ot-lst-title{margin-top:15px;font-size:1em}#onetrust-pc-sdk #ot-pc-hdr{display:inline-block;padding-left:27px;padding-right:17px;width:calc(100% - 44px)}#onetrust-pc-sdk #ot-pc-hdr input::placeholder{color:#d4d4d4;font-style:italic}#onetrust-pc-sdk #vendor-search-handler{height:31px;width:100%;border-radius:50px;font-size:.8em;padding-right:35px;padding-left:15px;float:left;margin-left:15px}#onetrust-pc-sdk #ot-lst-cnt{transform:translate3d(0, 0, 0);position:relative;padding-left:27px;margin-right:10px;margin-top:10px;width:calc(100% - 37px);top:0;bottom:70px;height:calc(100% - 94px);overflow-y:auto;overflow-x:hidden}#onetrust-pc-sdk #ot-pc-lst .ot-tgl-cntr{right:32px;position:absolute;margin-top:10px;height:20px}#onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr):not(.ot-hosts-ui) .ot-tgl-cntr{right:12px}#onetrust-pc-sdk #ot-sel-blk{position:sticky;position:-webkit-sticky;width:100%;display:inline-block;top:0;overflow:hidden;z-index:3}#onetrust-pc-sdk #ot-sel-blk p{font-size:.75em;color:#6b6b6b;margin:0;display:inline-block}#onetrust-pc-sdk .ot-enbl-chr>:not(.ot-hosts-ui) .ot-sel-all{padding-right:33px}#onetrust-pc-sdk .ot-enbl-chr .ot-hosts-ui .ot-sel-all{padding-right:23px}#onetrust-pc-sdk .ot-enbl-chr .ot-accordion-layout h4~.ot-tgl,#onetrust-pc-sdk .ot-enbl-chr .ot-accordion-layout h4~.ot-always-active{right:30px}#onetrust-pc-sdk .ot-enbl-chr .ot-accordion-layout h4~.ot-tgl+.ot-tgl{right:105px}#onetrust-pc-sdk .ot-enbl-chr .ot-cat-item h5+.ot-tgl-cntr,#onetrust-pc-sdk .ot-enbl-chr .ot-cat-item .ot-cat-header+.ot-tgl{padding-left:31px;padding-right:13px}#onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr .ot-arw-cntr,#onetrust-pc-sdk #ot-pc-lst:not(.ot-enbl-chr) .ot-tgl-cntr .ot-arw-cntr *{visibility:hidden}#onetrust-pc-sdk #ot-pc-content:not(.ot-enbl-chr) .ot-pli-hdr.ot-leg-border-color span:first-child{text-align:center}#onetrust-pc-sdk #ot-pc-content:not(.ot-enbl-chr) .ot-pli-hdr.ot-leg-border-color span:last-child{text-align:right}#onetrust-pc-sdk .ot-hosts-ui:not(.ot-enbl-chr) .ot-tgl-cntr{right:23px}#onetrust-pc-sdk .ot-hosts-ui #ot-sel-blk{width:100%}#onetrust-pc-sdk .ot-lst-subhdr{display:inline-block;width:100%;margin-top:10px}#onetrust-pc-sdk .ot-lst-subhdr svg{width:30px;height:30px;position:absolute;float:left;right:-15px}#onetrust-pc-sdk .ot-search-cntr{float:left;width:82%;position:relative}#onetrust-pc-sdk .ot-fltr-cntr{float:right;right:15px;position:relative}#onetrust-pc-sdk #filter-btn-handler{background-color:#3860be;border-radius:17px;display:inline-block;position:relative;width:32px;height:32px;-moz-transition:.1s ease;-o-transition:.1s ease;-webkit-transition:1s ease;transition:.1s ease;padding:0;margin:0}#onetrust-pc-sdk #filter-btn-handler:hover{opacity:.7}#onetrust-pc-sdk #filter-btn-handler svg{width:12px;margin:6px 10px 0 9px;display:block;height:12px;position:static;right:auto;top:auto}#onetrust-pc-sdk .ot-ven-link{color:#3860be;text-decoration:none;display:inline-block;margin-top:10px;transform:translate(0, 1%);-o-transform:translate(0, 1%);-ms-transform:translate(0, 1%);-webkit-transform:translate(0, 1%);z-index:2;position:relative;font-size:.75em}#onetrust-pc-sdk .ot-ven-link:hover{text-decoration:underline}#onetrust-pc-sdk .ot-ven-link *{font-size:inherit}#onetrust-pc-sdk .ot-ven-name{vertical-align:middle}#onetrust-pc-sdk .ot-ven-hdr,#onetrust-pc-sdk .ot-host-hdr{width:calc(100% - 165px);height:auto;float:left;text-align:left;word-break:break-word;word-wrap:break-word;vertical-align:middle;padding-bottom:2px;padding-left:2px}#onetrust-pc-sdk #ot-host-lst .ot-host-info{font-size:.7em;line-height:1.1}#onetrust-pc-sdk #ot-host-lst .ot-host-name,#onetrust-pc-sdk #ot-host-lst .ot-host-name a{color:dimgray;font-size:.81em;font-weight:bold;line-height:1.4;margin-bottom:5px;position:relative}#onetrust-pc-sdk #ot-host-lst .ot-host-name a,#onetrust-pc-sdk #ot-host-lst .ot-host-info a{font-size:1em}#onetrust-pc-sdk #ot-host-lst .ot-host-desc{width:100%;margin-bottom:5px}#onetrust-pc-sdk #ot-host-lst .ot-host-expand,#onetrust-pc-sdk #ot-host-lst .ot-host-desc{color:dimgray;font-size:.69em;line-height:1.4;float:left;font-weight:normal}#onetrust-pc-sdk #ot-host-lst .ot-host-hdr>a{text-decoration:underline;font-size:.69em;position:relative;z-index:2;float:left;margin-bottom:5px;line-height:1.4}#onetrust-pc-sdk #ot-host-lst .ot-host-expand{color:#3860be}#onetrust-pc-sdk #ot-host-lst .ot-host-expand *{font-size:inherit}#onetrust-pc-sdk .ot-host-opt{margin:0;font-size:inherit;display:inline-block;width:100%}#onetrust-pc-sdk .ot-host-opt .ot-host-info{border:none;font-size:.8em;color:dimgray;display:inline-block;width:calc(100% - 20px);padding:10px;margin-bottom:10px;background-color:#f8f8f8}#onetrust-pc-sdk .ot-host-opt li>div div{font-size:.8em;padding:5px 0}#onetrust-pc-sdk .ot-host-opt li>div div:nth-child(1){width:30%;float:left}#onetrust-pc-sdk .ot-host-opt li>div div:nth-child(2){width:70%;float:left;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk #ot-ven-lst .ot-acc-hdr{overflow:hidden;cursor:pointer}#onetrust-pc-sdk .ot-ven-dets{border-radius:2px;margin-top:10px;background-color:#f8f8f8}#onetrust-pc-sdk .ot-ven-dets div:first-child p:first-child{border-top:none}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:not(:first-child){border-top:1px solid #e9e9e9}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p{display:inline-block}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p:nth-of-type(odd){width:30%}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p:nth-of-type(even){width:50%;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p{padding-top:5px;padding-bottom:5px;display:block}#onetrust-pc-sdk .ot-ven-dets p{font-size:.69em;text-align:left;vertical-align:middle;word-break:break-word;word-wrap:break-word;margin:0;padding-bottom:10px;padding-left:15px;color:#2e3644}#onetrust-pc-sdk .ot-ven-dets p:first-child{padding-top:5px}#onetrust-pc-sdk .ot-ven-dets .ot-ven-pur p:first-child{border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;padding-bottom:5px;margin-bottom:5px;font-weight:bold}#onetrust-pc-sdk #no-results{text-align:center;margin-top:30px;height:calc(100% - 300px);margin-left:27px}#onetrust-pc-sdk #no-results span{font-weight:bold}#onetrust-pc-sdk #no-results p{font-size:1em;color:#2e3644;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk #ot-fltr-modal{right:13px;top:87px;height:90%;max-height:370px;display:none;-moz-transition:.2s ease;-o-transition:.2s ease;-webkit-transition:2s ease;transition:.2s ease;opacity:1;position:absolute}#onetrust-pc-sdk #ot-fltr-cnt{z-index:2147483646;background-color:#fff;position:relative;height:100%;max-width:325px;border-radius:3px;padding-right:10px;padding-bottom:5px;-webkit-box-shadow:0px 0px 12px 2px #c7c5c7;-moz-box-shadow:0px 0px 12px 2px #c7c5c7;box-shadow:0px 0px 12px 2px #c7c5c7}#onetrust-pc-sdk .ot-fltr-scrlcnt{overflow-y:auto;overflow-x:hidden;clear:both;max-height:calc(100% - 60px)}#onetrust-pc-sdk #ot-anchor{border:12px solid transparent;display:none;position:absolute;z-index:2147483647;right:36px;top:75px;transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);background-color:#fff;-webkit-box-shadow:-3px -3px 5px -2px #c7c5c7;-moz-box-shadow:-3px -3px 5px -2px #c7c5c7;box-shadow:-3px -3px 5px -2px #c7c5c7}#onetrust-pc-sdk .ot-fltr-btns{margin-left:15px}#onetrust-pc-sdk #filter-apply-handler{margin-right:15px}#onetrust-pc-sdk .ot-fltr-opt{margin-bottom:20px;margin-left:15px;width:75%}#onetrust-pc-sdk .ot-fltr-opt label{padding-left:30px}#onetrust-pc-sdk .ot-fltr-opt p{display:inline-block;margin:0;font-size:.9em;color:#2e3644}#onetrust-pc-sdk #ot-sel-blk .ot-chkbox{width:20px;height:20px;float:right}#onetrust-pc-sdk .line-through label::after,#onetrust-pc-sdk[dir=rtl] .line-through label::after{height:auto;border-left:0;transform:none;-o-transform:none;-ms-transform:none;-webkit-transform:none;left:5px;top:8px}#onetrust-pc-sdk #ot-selall-vencntr label,#onetrust-pc-sdk #ot-selall-adtlvencntr label,#onetrust-pc-sdk #ot-selall-hostcntr label,#onetrust-pc-sdk #ot-selall-licntr label,#onetrust-pc-sdk #ot-selall-gnvencntr label{position:relative;display:inline-block;width:20px;height:20px;margin:0}#onetrust-pc-sdk #ot-selall-vencntr input,#onetrust-pc-sdk #ot-selall-adtlvencntr input,#onetrust-pc-sdk #ot-selall-hostcntr input,#onetrust-pc-sdk #ot-selall-licntr input,#onetrust-pc-sdk #ot-selall-gnvencntr input{height:auto;width:auto;border-radius:0;font-size:initial;padding:0;float:none}#onetrust-pc-sdk #ot-ven-lst:first-child{border-top:1px solid #e2e2e2}#onetrust-pc-sdk #vdr-lst-dsc{font-size:.812em;line-height:1.5;padding:10px 15px 5px 15px}#onetrust-pc-sdk #close-pc-btn-handler{margin:0;float:right;height:44px;width:44px;background-size:10px}#onetrust-pc-sdk #close-pc-btn-handler svg{display:block}#onetrust-pc-sdk #close-pc-btn-handler:hover{opacity:.7}#onetrust-pc-sdk .ot-close-icon{padding:0;background-color:transparent;border:none}#onetrust-pc-sdk #clear-filters-handler{float:right;max-width:200px;margin-bottom:10px;text-decoration:none;margin-top:20px;font-weight:bold;color:#3860be;font-size:.9em;letter-spacing:normal;border:none;padding:1px}#onetrust-pc-sdk #clear-filters-handler:hover{color:#2285f7}#onetrust-pc-sdk #clear-filters-handler:focus{outline:#000 solid 1px}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item{position:relative;border-radius:1px;margin:0;padding:0;border:1px solid #d8d8d8;border-top:none;float:left;width:calc(100% - 2px)}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type{margin-top:10px;border-top:1px solid #d8d8d8}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item .ot-vlst-cntr:first-child{margin-top:15px}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item .ot-acc-grpdesc{font-size:.813em;line-height:1.5;padding-left:20px;padding-right:20px;width:calc(100% - 40px)}#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item .ot-acc-grpdesc ul{padding-bottom:5px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr{padding-top:11.5px;padding-bottom:11.5px;padding-left:20px;padding-right:15px;width:calc(100% - 35px);display:inline-block;position:relative;min-height:25px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt{width:100%;padding:0px}#onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr,#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc+.ot-leg-btn-container{padding-left:20px;padding-right:16px;width:calc(100% - 36px)}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpdesc+.ot-leg-btn-container{margin-top:5px;margin-bottom:10px}#onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr{z-index:1;position:relative}#onetrust-pc-sdk .ot-accordion-layout input[type=checkbox]:checked~.ot-acc-txt.ot-acc-grpcntr{width:auto;padding-bottom:15px}#onetrust-pc-sdk .ot-accordion-layout .ot-cat-header{float:none;font-size:.88em;color:#2e3644;margin:0;display:inline-block;height:auto;word-wrap:break-word;vertical-align:middle;min-height:inherit}#onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,#onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr{padding-left:20px;width:calc(100% - 20px);display:inline-block;margin-top:0;padding-bottom:2px}#onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl,#onetrust-pc-sdk .ot-accordion-layout h4~.ot-always-active{right:16px}#onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl+.ot-tgl{right:88px}#onetrust-pc-sdk .ot-accordion-layout .ot-cat-header+.ot-arw-cntr{right:10px;margin-top:-2px;left:auto}#onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl,#onetrust-pc-sdk .ot-accordion-layout h4~.ot-always-active,#onetrust-pc-sdk .ot-accordion-layout .ot-cat-header+.ot-arw-cntr{position:absolute;top:50%;transform:translateY(-50%)}#onetrust-pc-sdk #ot-category-title{padding-bottom:10px}#onetrust-pc-sdk .ot-pli-hdr{color:#77808e;overflow:hidden;padding-top:7.5px;padding-bottom:7.5px;width:calc(100% - 2px);border-top-left-radius:3px;border-top-right-radius:3px}#onetrust-pc-sdk .ot-pli-hdr .ot-li-title{float:right;font-size:.813em}#onetrust-pc-sdk .ot-pli-hdr span:first-child{top:50%;transform:translateY(50%);max-width:80px}#onetrust-pc-sdk .ot-pli-hdr span:last-child{text-align:center;max-width:95px}#onetrust-pc-sdk .ot-pli-hdr.ot-leg-border-color{background-color:#f8f8f8;border:1px solid #e9e9e9}#onetrust-pc-sdk .ot-pli-hdr.ot-leg-border-color span:first-child{text-align:left;width:80px}#onetrust-pc-sdk .ot-subgrp>h5,#onetrust-pc-sdk .ot-cat-header{width:calc(100% - 130px);max-width:60%}#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item .ot-subgrp>h5,#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item .ot-cat-header{width:calc(100% - 145px)}#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item h5+.ot-tgl-cntr,#onetrust-pc-sdk .ot-pli-hdr~.ot-cat-item .ot-cat-header+.ot-tgl{padding-left:28px}#onetrust-pc-sdk .ot-acc-grpcntr .ot-acc-grpdesc{margin-bottom:5px}#onetrust-pc-sdk .ot-acc-grpcntr .ot-subgrp-cntr{border-top:1px solid #e9e9e9}#onetrust-pc-sdk .ot-acc-grpcntr .ot-subgrp-cntr ul.ot-subgrps li{margin-top:5px;margin-bottom:5px}#onetrust-pc-sdk .ot-acc-hdr .ot-arw-cntr+.ot-tgl,#onetrust-pc-sdk .ot-cat-item h4+.ot-tgl,#onetrust-pc-sdk .ot-acc-txt h4+.ot-tgl-cntr{padding-left:30px}#onetrust-pc-sdk .ot-sel-all-hdr,#onetrust-pc-sdk .ot-sel-all-chkbox{position:relative;display:inline-block;width:100%}#onetrust-pc-sdk .ot-sel-all-chkbox{z-index:1}#onetrust-pc-sdk .ot-li-hdr,#onetrust-pc-sdk .ot-consent-hdr{float:right;font-size:.813em;line-height:normal;text-align:center;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk .ot-li-hdr{max-width:100px;min-width:100px}#onetrust-pc-sdk .ot-consent-hdr{margin-right:5px;max-width:55px}#onetrust-pc-sdk .ot-ven-litgl+.ot-arw-cntr{margin-left:81px}#onetrust-pc-sdk .ot-sel-all{margin:0;position:relative;padding-right:13px;float:right}#onetrust-pc-sdk #ot-selall-hostcntr,#onetrust-pc-sdk #ot-selall-vencntr{right:20px;position:relative}#onetrust-pc-sdk #ot-selall-licntr{position:relative;right:79px}#onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .ot-sel-all{position:relative;display:inline-block;width:20px;height:25px}#onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .ot-sel-all label{position:absolute;padding:0;width:18px;height:18px}#onetrust-pc-sdk .ot-always-active-group .ot-cat-header{width:55%}#onetrust-pc-sdk .ot-leg-btn-container{display:inline-block;width:100%;margin-top:10px}#onetrust-pc-sdk .ot-leg-btn-container button{height:auto;padding:6.5px 8px;margin-bottom:0;letter-spacing:0;line-height:normal}#onetrust-pc-sdk .ot-leg-btn-container svg{display:none;height:14px;width:14px;padding-right:5px;vertical-align:sub}#onetrust-pc-sdk .ot-active-leg-btn{cursor:default;pointer-events:none}#onetrust-pc-sdk .ot-active-leg-btn svg{display:inline-block}#onetrust-pc-sdk .ot-remove-objection-handler{border:none;text-decoration:underline;padding:0;font-size:.82em;font-weight:600;line-height:1.4;padding-left:10px}#onetrust-pc-sdk .ot-obj-leg-btn-handler span{font-weight:bold;text-align:center;font-size:.91em;line-height:1.5}#onetrust-pc-sdk[dir=rtl] input~.ot-acc-hdr .ot-arw,#onetrust-pc-sdk[dir=rtl] #ot-back-arw{transform:rotate(180deg);-o-transform:rotate(180deg);-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg)}#onetrust-pc-sdk[dir=rtl] input:checked~.ot-acc-hdr .ot-arw{transform:rotate(270deg);-o-transform:rotate(270deg);-ms-transform:rotate(270deg);-webkit-transform:rotate(270deg)}#onetrust-pc-sdk[dir=rtl] .ot-chkbox label::after{transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);border-left:0;border-right:3px solid}#onetrust-pc-sdk[dir=rtl] .ot-lst-subhdr svg{right:0}#onetrust-pc-sdk .ot-ven-ctgl,#onetrust-pc-sdk .ot-ven-litgl,#onetrust-pc-sdk .ot-host-tgl,#onetrust-pc-sdk .ot-ven-gvctgl{position:relative;display:inline-block;width:20px;height:20px;margin-left:60px}#onetrust-pc-sdk .ot-ven-ctgl label,#onetrust-pc-sdk .ot-ven-litgl label,#onetrust-pc-sdk .ot-host-tgl label,#onetrust-pc-sdk .ot-ven-gvctgl label{position:absolute;width:20px;height:20px;margin:0}#onetrust-pc-sdk #ot-host-lst .ot-host-expand{clear:both;float:none;display:block}#onetrust-pc-sdk ul{list-style:none}#onetrust-pc-sdk ul li{position:relative;margin:0;padding:15px 15px 15px 15px;border-bottom:1px solid #e2e2e2}#onetrust-pc-sdk ul li h3{font-size:.75em;color:#656565;margin:0;height:auto;word-break:break-word;word-wrap:break-word}#onetrust-pc-sdk ul li p{margin:0;font-size:.7em}#onetrust-pc-sdk .ot-ven-item>button:focus,#onetrust-pc-sdk .ot-host-item>button:focus,#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item>button:focus,#onetrust-pc-sdk .ot-acc-cntr>button:focus{outline:#000 solid 2px}#onetrust-pc-sdk .ot-ven-item>button,#onetrust-pc-sdk .ot-host-item>button,#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item>button,#onetrust-pc-sdk .ot-acc-cntr>button{position:absolute;cursor:pointer;width:100%;height:100%;margin:0;top:0;left:0;z-index:1;max-width:none;border:none}#onetrust-pc-sdk .ot-ven-item>button[aria-expanded=false]~.ot-acc-txt,#onetrust-pc-sdk .ot-host-item>button[aria-expanded=false]~.ot-acc-txt,#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item>button[aria-expanded=false]~.ot-acc-txt,#onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=false]~.ot-acc-txt{margin-top:0;max-height:0;overflow:hidden;width:100%;transition:.25s ease-out;display:none}#onetrust-pc-sdk .ot-ven-item>button[aria-expanded=true]~.ot-acc-txt,#onetrust-pc-sdk .ot-host-item>button[aria-expanded=true]~.ot-acc-txt,#onetrust-pc-sdk .ot-accordion-layout.ot-cat-item>button[aria-expanded=true]~.ot-acc-txt,#onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=true]~.ot-acc-txt{transition:.1s ease-in;width:auto;overflow:auto;display:block}#onetrust-pc-sdk .ot-host-item>button:focus{outline:0;border:2px solid #000}#onetrust-pc-sdk.ot-addtl-vendors .ot-enbl-chr #ot-selall-vencntr{right:0}#onetrust-pc-sdk.ot-addtl-vendors>:not(.ot-enbl-chr) #ot-selall-licntr{right:135px}#onetrust-pc-sdk.ot-addtl-vendors>:not(.ot-enbl-chr) #ot-selall-adtlvencntr,#onetrust-pc-sdk.ot-addtl-vendors>:not(.ot-enbl-chr) #ot-selall-gnvencntr{right:40px}#onetrust-pc-sdk.ot-addtl-vendors .ot-li-hdr{margin-right:15px}#onetrust-pc-sdk.ot-addtl-vendors #ot-selall-licntr{right:115px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) #ot-sel-blk{background-color:#f9f9fc;border:1px solid #e2e2e2;width:auto;padding-bottom:5px;padding-top:5px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all{padding-right:23px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) ul li{border:1px solid #e2e2e2;margin-bottom:10px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all-chkbox{float:right;width:auto;right:3px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-tgl-cntr{right:12px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-ven-ctgl{margin-left:75px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-ven-litgl+.ot-arw-cntr{margin-left:95px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-acc-cntr>.ot-acc-hdr{padding-top:10px;padding-bottom:10px}#onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) #ot-addtl-venlst .ot-tgl-cntr{right:32px}#onetrust-pc-sdk.ot-addtl-vendors #ot-ven-lst:first-child{border-top:none}#onetrust-pc-sdk.ot-addtl-vendors #ot-selall-vencntr{right:40px;position:absolute}#onetrust-pc-sdk #ot-selall-adtlvencntr,#onetrust-pc-sdk #ot-selall-gnvencntr{position:relative;right:20px}#onetrust-pc-sdk .ot-acc-cntr{position:relative;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr{background-color:#f9f9fc;padding-left:15px;padding-top:5px;padding-bottom:5px;width:calc(100% - 15px)}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr .ot-plus-minus{vertical-align:middle;top:auto}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-hdr .ot-arw-cntr{right:10px;left:auto}#onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=true]~.ot-acc-hdr{border-bottom:1px solid #e2e2e2}#onetrust-pc-sdk .ot-acc-cntr>.ot-acc-txt{padding-left:10px;padding-right:10px;padding-top:10px;position:relative;z-index:1}#onetrust-pc-sdk .ot-acc-cntr .ot-addtl-venbox{display:none}#onetrust-pc-sdk .ot-vensec-title{font-size:.813em;vertical-align:middle;display:inline-block}@media only screen and (max-width: 600px){#onetrust-pc-sdk{max-width:100%;min-width:100%}#onetrust-pc-sdk .ot-ftr-stacked button{width:100%}#onetrust-pc-sdk #ot-lst-cnt,#onetrust-pc-sdk #ot-pc-hdr{margin-top:0;padding:0 5px 0 10px;width:calc(100% - 25px)}}@media only screen and (max-width: 425px){#onetrust-pc-sdk.otPcPanel{left:0;min-width:100%;height:100%;top:0;border-radius:0}#onetrust-pc-sdk #ot-host-lst .ot-chkbox{margin-left:0}#onetrust-pc-sdk #ot-pc-content{margin:0 10px 0 20px}#onetrust-pc-sdk p{font-size:.7em}#onetrust-pc-sdk .ot-tgl-cntr{width:auto}#onetrust-pc-sdk #vendor-search-handler{font-size:1em}#onetrust-pc-sdk #ot-lst-cnt{height:calc(100% - 95px)}#onetrust-pc-sdk .ot-switch+p{max-width:80%}#onetrust-pc-sdk button{letter-spacing:.01em}#onetrust-pc-sdk .save-preference-btn-handler{margin-top:0}#onetrust-pc-sdk .ot-search-cntr{width:75%}}@media only screen and (max-width: 320px){#onetrust-pc-sdk #ot-fltr-cnt{margin-left:15px}}@media only screen and (max-width: 896px)and (max-height: 425px)and (orientation: landscape){#onetrust-pc-sdk{left:0;top:0;min-width:100%;height:100%;border-radius:0}#onetrust-pc-sdk button{letter-spacing:.02em}#onetrust-pc-sdk #ot-anchor{left:initial;right:50px}#onetrust-pc-sdk #ot-lst-title{margin-top:12px}#onetrust-pc-sdk #ot-lst-title *{font-size:inherit}#onetrust-pc-sdk #ot-pc-hdr input{margin-right:0;padding-right:45px}#onetrust-pc-sdk .ot-switch+p{max-width:85%}#onetrust-pc-sdk #ot-lst-cnt{max-height:none;overflow:initial}#onetrust-pc-sdk #ot-lst-cnt.no-results{height:auto}#onetrust-pc-sdk input{font-size:1em !important}#onetrust-pc-sdk p{font-size:.6em}#onetrust-pc-sdk #ot-pc-lst{overflow:auto}#onetrust-pc-sdk .ot-pc-footer-logo{display:none}#onetrust-pc-sdk #ot-fltr-modal{width:100%;height:100%;max-height:none;top:0}#onetrust-pc-sdk #ot-sel-blk{position:static}#onetrust-pc-sdk #ot-fltr-cnt{height:250px;width:100%}#onetrust-pc-sdk.ot-shw-fltr #ot-anchor{display:none !important}#onetrust-pc-sdk.ot-shw-fltr #ot-pc-lst{height:100% !important;overflow:hidden;top:0px}#onetrust-pc-sdk.ot-shw-fltr #ot-fltr-cnt{margin:0;height:100%;padding:10px;top:0;width:calc(100% - 20px);position:absolute;right:0;left:0;max-width:none}#onetrust-pc-sdk.ot-shw-fltr .ot-fltr-scrlcnt{max-height:calc(100% - 65px)}}
        #onetrust-consent-sdk #onetrust-pc-sdk,
            #onetrust-consent-sdk #ot-search-cntr,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,
            #onetrust-consent-sdk #onetrust-pc-sdk ot-grp-hdr1 .checkbox,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title:after
            ,#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,
                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-anchor {
                background-color: #FFFFFF;
            }
           
        #onetrust-consent-sdk #onetrust-pc-sdk h3,
            #onetrust-consent-sdk #onetrust-pc-sdk h4,
            #onetrust-consent-sdk #onetrust-pc-sdk h5,
            #onetrust-consent-sdk #onetrust-pc-sdk h6,
            #onetrust-consent-sdk #onetrust-pc-sdk p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title span,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,
            #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .consent-category,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,
            #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,
            #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler 
            {
                color: #696969;
            }
         #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,
                #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,
                #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,
                #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-link,
                #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-name a,
                #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-acc-hdr .ot-host-expand,
                #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info a
                {
                    color: #e90606;
                }
        #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-grpcntr.ot-acc-txt,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-subgrp-tgl .ot-switch.ot-toggle
         {
            background-color: #F8F8F8;
        }
        
         #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
                #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-ven-dets
                        {
                            background-color: #F8F8F8;
                        }
    #onetrust-consent-sdk #onetrust-pc-sdk 
        button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {
            background-color: #E00606;border-color: #E00606;
            color: #FFFFFF;
        }
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {
            border-color: #E00606;
        }
        
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{
            background-color: transparent;
            border:1px solid transparent;
        }
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {
            background-color: #FFFFFF;
            color: #78808E; border-color: #78808E;
        }
        .ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}
            
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
                    color: #696969;
                }
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
                    color: #696969;
                }
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
                    color: #696969;
                }
                
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
                        color: #696969;
                    }
                
        
                #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {
                        background-color: #F8F8F8;
                    }
                
        #ot-sdk-btn-floating.ot-floating-button{position:fixed;bottom:10px;opacity:0;width:50px;height:50px;line-height:15px;cursor:pointer;background-color:transparent;transform-style:preserve-3d;transition:all 300ms ease;perspective:1000px;z-index:2147483646;animation:otFloatingBtnIntro 800ms ease 0ms 1 forwards}#ot-sdk-btn-floating.ot-floating-button.ot-hide{display:none}#ot-sdk-btn-floating.ot-floating-button::before,#ot-sdk-btn-floating.ot-floating-button::after{text-transform:none;line-height:1;user-select:none;pointer-events:none;position:absolute;transform:scale(0);opacity:0;transition:all 300ms ease;display:block;height:auto}#ot-sdk-btn-floating.ot-floating-button::before{content:"";border:5px solid transparent;z-index:1001;top:50%;border-left-width:0;border-right-color:#333;right:calc(0em - 5px);transform:translate(10px, -50%)}#ot-sdk-btn-floating.ot-floating-button::after{content:attr(title);position:absolute;text-align:center;top:50%;left:calc(100% + 5px);transform:translate(10px, -50%);font-size:.75rem;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px;border-radius:.3ch;box-shadow:0 1em 2em -0.5em rgba(0,0,0,.35);background:#333;color:#fff;z-index:2147483645}#ot-sdk-btn-floating.ot-floating-button:hover::before,#ot-sdk-btn-floating.ot-floating-button:hover::after{opacity:1}#ot-sdk-btn-floating.ot-floating-button:hover::before{transform:translate(0.5em, -50%) scale(1)}#ot-sdk-btn-floating.ot-floating-button:hover::after{transform:translate(0.5em, -50%) scale(1)}#ot-sdk-btn-floating.ot-floating-button.ot-pc-open .ot-floating-button__front{transform:rotateY(-180deg)}#ot-sdk-btn-floating.ot-floating-button.ot-pc-open .ot-floating-button__back{transform:rotateY(0)}#ot-sdk-btn-floating .ot-floating-button__front,#ot-sdk-btn-floating .ot-floating-button__back{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#6aaae4;border-radius:10px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:transform .6s;transform-style:preserve-3d}#ot-sdk-btn-floating .ot-floating-button__front{background-color:#6aaae4;transform:rotateY(0)}#ot-sdk-btn-floating .ot-floating-button__front svg{width:30px;height:37px}#ot-sdk-btn-floating .ot-floating-button__back{background-color:#69c;transform:rotateY(-180deg)}#ot-sdk-btn-floating .ot-floating-button__back svg{width:24px;height:24px}#ot-sdk-btn-floating.ot-floating-button button{background-color:transparent;border:0;width:100%;height:100%;cursor:pointer}@keyframes otFloatingBtnIntro{0%{opacity:0;left:-75px}100%{opacity:1;left:1%}}@keyframes otFloatingBtnImageIntro{0%{opacity:0;transform:scale(0) rotate(-270deg)}100%{opacity:100%;transform:scale(0.95) rotate(0deg)}}</style></head>
<body class="template-homepage  ">

<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P59JVDP" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>

    <header class="navigation homepage-nav" data-section-name="">
    
    
      <nav class="main has-secondary-nav can-animate">
        <div class="container above">
          <div class="container-inner flex-end">
              <a class="newsletter-signup" href="https://cloud.newsletters.time.com/newsletters/?source=TD_CMS_HP_Nav" target="_blank">Sign Up for Newsletters »</a>
          </div>
          <div class="container-inner">
            <div class="logo">
              <a class="full-logo" href="/" data-action="primary-nav-logo">
                <svg itemprop="logo" width="90px" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 98 32"><path fill="#e90606" d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"></path></svg>      </a>
            </div>
          </div>
          <div class="container-inner flex-center">
            <div class="button-group">
              <a class="signin-button hidden" href="#">
                Sign In
              </a>
              <div class="account-dropdown hidden desktop">
                <button>
                  My Account
                  <span class="icon"></span>
                </button>
                <div class="dropdown-content">
                  <a href="/manage-account-header">Manage Account</a>
                  <a class="digital-link hidden" href="https://emagazines.com/Account/VipLogin/1B260DD4-FCAE-4A2D-9AC3-9C5C66572252">Digital Magazines</a>
                  <a href="https://time.com/help">Help Center</a>
                  <a class="signout-button" href="">Sign Out</a>
                </div>
              </div>
              <a class="subscribe-link subscribe-link-container subx_track_952 visible" href="/subscribe-header-time" target="_blank" data-location="homepage-nav" data-event="1" data-key="qobuskf@g">
                Subscribe
              </a>
            </div>
          </div>
        </div>    <div class="container primary">
          <div class="container-inner  left">
            <button id="button-in-unless" class="menu-btn" title="Menu" aria-label="Menu">
              <div class="menu-btn-box">
                <div class="menu-btn-inner"></div>
              </div>
            </button>
            <div class="logo" id="">
              <a href="/" data-action="primary-nav-logo" aria-label="Logo">
                <svg itemprop="logo" width="90px" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 98 32"><path fill="#e90606" d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"></path></svg>          </a>
            </div>
          </div>
          <div class="container-inner right">
            <div class="primary-links hidden" data-tracking-zone="nav">
              <ul class="primary-text-links">
                <li class="heading-list menu-list-item component subscribe-flyout subscribe-link-container visible" data-action="primary-nav-pos-6">
                  <div>
                    <a href="/subscribe-header-time" class="subscribe-link subx_track_952 link-and-photo" data-location="header-nav" data-key="qobuskf@g" data-event="2">
                      Subscribe
                    </a>
                  </div>
                </li>
              </ul>
            </div>
    
            <div class="featured-links desktop-only">
              <ul>
                <li><a href="https://time.com/5951236/college-applications-covid-19/">How COVID-19 Made Applying to College Nearly Impossible</a></li>
                <li><a href="https://time.com/collection/video/">Video</a></li>
                <li class="newsletter"><a href="https://cloud.newsletters.time.com/the-brief?source=recirc-bar" target="_blank"><img src="/img/newsletter-round.svg">Newsletter</a></li>
              </ul>
            </div>
    
    
            <div class="buttons " data-tracking-zone="search">
              <button class="icon search js-activate" data-action="primary-nav-pos-1" title="Search" aria-label="Search"><span class="icon icon-search utility-icon color-ribbon-primary-text ">
    
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" role="img" aria-hidden="true" tabindex="-1"><path fill="#685F55" d="M14.1 14.751a5.53 5.53 0 1 1 .651-.651L19 18.348l-.652.652-4.248-4.249zm-3.557.4a4.608 4.608 0 1 0 0-9.216 4.608 4.608 0 0 0 0 9.215z"></path></svg>
    
    </span></button>
              <button class="icon search mobile-only"><span class="icon icon-search utility-icon color-ribbon-primary-text ">
    
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" role="img" aria-hidden="true" tabindex="-1"><path fill="#685F55" d="M14.1 14.751a5.53 5.53 0 1 1 .651-.651L19 18.348l-.652.652-4.248-4.249zm-3.557.4a4.608 4.608 0 1 0 0-9.216 4.608 4.608 0 0 0 0 9.215z"></path></svg>
    
    </span></button>
              <div class="search-container">
                <form action="/search" name="search" method="GET">
                  <input name="q" type="text" class="search-field" value="" placeholder="Search..." title="Search..." aria-label="Search...">
                </form>
                <button class="icon close close-search" data-action="primary-nav-close-search"><span class="icon icon-close utility-icon color-ribbon-primary-text ">
    
      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><title>Close</title><path fill="#F0F1F3" d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"></path></svg>
    
    </span></button>
              </div>
            </div>
          </div>
        </div>
    
        <div class="container secondary">
          <div class="featured-links">
            <ul>
              <li><a href="https://time.com/5951236/college-applications-covid-19/">How COVID-19 Made Applying to College Nearly Impossible</a></li>
              <li><a href="https://time.com/collection/video/">Video</a></li>
              <li class="newsletter"><a href="https://cloud.newsletters.time.com/the-brief?source=recirc-bar" target="_blank"><img src="/img/newsletter-round.svg">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
    
      </nav>
    
      <div class="nav-placeholder has-secondary-nav">
      </div>
    
      <nav data-tracking-zone="nav" class="menu can-animate">
        <section class="container">
          <div class="account-mobile hidden">
            <div class="account-menu hidden">
              <label class="menu-label">My Account</label>
              <ul>
                <li class="menu-item">
                  <a href="/manage-account">Manage Account</a>
                </li>
                <li class="menu-item digital-link hidden">
                  <a href="https://emagazines.com/Account/VipLogin/1B260DD4-FCAE-4A2D-9AC3-9C5C66572252">Digital
                    Magazines</a>
                </li>
                <li class="menu-item">
                  <a href="https://time.com/help">Help Center</a>
                </li>
                <li class="menu-item">
                  <a class="signout-button" href="">Sign Out</a>
                </li>
              </ul>
            </div>
            <button class="signin-button hidden">
              <a href="/login-hamburger">
                Sign In
              </a>
            </button>
          </div>
          <section class="menu-section">
            <label class="menu-label">Sections</label>
    
            <ul>
              <li class="menu-item">
                <a href="https://time.com">
                  Home
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/us/">
                  U.S.
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/politics/">
                  Politics
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/world/">
                  World
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/health/">
                  Health
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/nextadvisor/?utm_source=time&amp;utm_medium=referral&amp;utm_campaign=time_hb_nav">
                  Personal Finance by NextAdvisor
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/business/">
                  Business
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/tech/">
                  Tech
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/entertainment/">
                  Entertainment
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/ideas/">
                  Ideas
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/science/">
                  Science
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/history/">
                  History
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/newsfeed/">
                  Newsfeed
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/sports/">
                  Sports
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/magazine">
                  Magazine
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/time2030">
                  TIME 2030
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/collection/video/">
                  Video
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/collection/time100-talks/">
                  TIME100 Talks
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/vault/">
                  The TIME Vault
                </a>
              </li>          <li class="menu-item">
                <a href="https://subscription.timeforkids.com/storefront/subscribe-to-time-for-kids/link/1042502.html">
                  TIME for Kids
                </a>
              </li>          <li class="menu-item">
                <a href="https://www.timeedge.com/openhouse">
                  TIME Edge
                </a>
              </li>          <li class="menu-item">
                <a href="http://time.com/partners/branded-content">
                  Branded Content
                </a>
              </li>        </ul>
          </section>
          <section class="menu-section">
            <label class="menu-label">Join Us</label>
    
            <ul>
              <li class="menu-item">
                <a href="https://time.com/newsletters/?source=time_nav">
                  Newsletters
                </a>
              </li>          <li class="menu-item">
                <a class="subx_track_952 subscribe-link" href="https://time.com/subscribe-hamburger-time" data-key="qobuskf@g" data-event="3" data-location="hamburger">
                  Subscribe
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/give-a-gift/">
                  Give a Gift
                </a>
              </li>          <li class="menu-item">
                <a href="https://timecoverstore.com/">
                  Shop the TIME Store
                </a>
              </li>        </ul>
          </section>
          <section class="menu-section">
            <label class="menu-label">Customer Care</label>
    
            <ul>
              <li class="menu-item">
                <a href="https://support.time.com/hc/en-us">
                  US &amp; Canada
                </a>
              </li>          <li class="menu-item">
                <a href="https://www.subscription.co.uk/time/europe/solo/Account/Login">
                  EMEA &amp; Latin America
                </a>
              </li>          <li class="menu-item">
                <a href="https://www.subscription.co.uk/time/asia/solo/Account/Login">
                  Asia Pacific
                </a>
              </li>        </ul>
          </section>
          <section class="menu-section">
            <label class="menu-label">Reach Out</label>
    
            <ul>
              <li class="menu-item">
                <a href="https://time.com/longform/join-time/">
                  Careers
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/section/press-room/">
                  Press Room
                </a>
              </li>          <li class="menu-item">
                <a href="mailto:letters@time.com">
                  Contact the Editors
                </a>
              </li>          <li class="menu-item">
                <a href="https://www.parsintl.com/publication/time">
                  Reprints and Permissions
                </a>
              </li>        </ul>
          </section>
          <section class="menu-section">
            <label class="menu-label">More</label>
    
            <ul>
              <li class="menu-item">
                <a href="https://time.com/privacy/generic_privacy_new.html">
                  Privacy Policy
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/privacy/generic_privacy_new.html#_Toc26698205">
                  Your California Privacy Rights
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/privacy/privacy_terms_service.html">
                  Terms of Use
                </a>
              </li>          <li class="menu-item">
                <a href="https://time.com/html-sitemap/">
                  Site Map
                </a>
              </li>        </ul>
          </section>
    
          <section class="menu-section">
            <label class="menu-label">Connect with Us</label>
            <div class="social-items">
              <link href="https://www.facebook.com/time">
              <span class="icon icon-facebook-circle-stroke social-stroke-icon color-accent margin-4-right ">
                  <a href="https://www.facebook.com/time" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.95 18c0 8.258-6.693 14.95-14.95 14.95S3.05 26.26 3.05 18 9.742 3.05 18 3.05 32.95 9.74 32.95 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M19.718 13.698c.433-.014.866-.004 1.3-.004h.18V11.57c-.232-.023-.473-.054-.716-.065-.445-.02-.89-.04-1.336-.03-.68.013-1.323.17-1.884.55-.644.435-.998 1.05-1.132 1.773-.057.3-.07.607-.08.912-.01.477-.002.953 0 1.43v.18h-2.16v2.373h2.147v5.966h2.622V18.7h2.134l.33-2.385h-.482c-.608.002-2.004 0-2.004 0s.006-1.177.02-1.687c.02-.7.46-.912 1.057-.932" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>          <link href="https://www.instagram.com/time/?hl=en">
              <span class="icon icon-instagram-circle-stroke social-stroke-icon color-accent margin-4-right ">
                  <a href="https://www.instagram.com/time/?hl=en" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.95 18c0 8.257-6.693 14.95-14.95 14.95S3.05 26.258 3.05 18 9.742 3.05 18 3.05 32.95 9.742 32.95 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M22.624 22c0 .344-.28.624-.623.624h-8.47c-.342 0-.62-.28-.62-.623v-5.13h1.218c-.07.29-.104.59-.104.9 0 2.07 1.677 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-.306-.038-.604-.108-.89h1.22V22zm-7.137-5.13c.356-.907 1.24-1.552 2.274-1.552 1.04 0 1.92.645 2.28 1.553.11.28.17.58.17.9 0 1.347-1.1 2.444-2.44 2.444-1.345 0-2.442-1.097-2.442-2.443 0-.314.06-.615.17-.89zm4.916-3.576c0-.19.154-.344.344-.344h1.49c.19 0 .344.154.344.344v1.49c0 .19-.15.344-.34.344h-1.49c-.19 0-.34-.154-.34-.344v-1.49zM22 11.592h-8.478c-1.065 0-1.93.865-1.93 1.93v8.48c0 1.064.865 1.93 1.93 1.93h8.48c1.065 0 1.93-.866 1.93-1.93v-8.48c0-1.065-.865-1.93-1.93-1.93z" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>          <link href="https://twitter.com/time">
              <span class="icon icon-twitter-circle-stroke social-stroke-icon color-accent margin-4-right ">
                  <a href="https://twitter.com/time" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.977 18c0 8.272-6.705 14.976-14.977 14.976S3.023 26.272 3.023 18C3.023 9.728 9.728 3.024 18 3.024S32.977 9.728 32.977 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M15.783 21.476c-1.48-.052-2.404-1.114-2.65-1.976.413.078.82.063 1.222-.037.01-.002.02-.01.04-.018-.8-.187-1.42-.616-1.848-1.307-.286-.46-.422-.962-.418-1.514.4.214.81.333 1.26.345-.607-.44-1.01-1.01-1.177-1.73-.164-.73-.057-1.42.306-2.07 1.54 1.813 3.492 2.81 5.872 2.973-.02-.113-.037-.21-.048-.31-.08-.67.054-1.295.416-1.86.454-.71 1.1-1.15 1.93-1.29.96-.156 1.796.117 2.495.795.046.045.085.06.15.045.586-.125 1.14-.335 1.657-.635l.04-.02h.02c-.225.664-.635 1.174-1.22 1.55.553-.06 1.08-.206 1.586-.426l.01.013c-.11.143-.215.29-.327.427-.302.373-.65.7-1.035.984-.034.025-.05.05-.05.09.016.424 0 .846-.053 1.266-.11.885-.352 1.73-.73 2.534-.39.833-.9 1.585-1.54 2.246-1.083 1.12-2.39 1.844-3.912 2.18-.52.115-1.05.173-1.585.19-1.64.046-3.16-.36-4.554-1.224l-.066-.043c.996.107 1.94-.02 2.85-.393.484-.197.93-.457 1.354-.79" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>          <link href="https://www.pinterest.com/timemagazine">
              <span class="icon icon-pinterest-circle-stroke social-stroke-icon color-accent ">
                  <a href="https://www.pinterest.com/timemagazine" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.976 18c0 8.272-6.705 14.976-14.976 14.976-8.27 0-14.976-6.704-14.976-14.976C3.024 9.728 9.73 3.024 18 3.024S32.976 9.728 32.976 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M17.162 20.54c-.012.038-.022.072-.03.105-.505 1.976-.562 2.415-1.08 3.332-.247.437-.525.85-.834 1.246-.034.044-.067.102-.137.088-.07-.01-.08-.08-.08-.14-.08-.6-.13-1.2-.11-1.81.03-.79.13-1.06 1.15-5.34.02-.06 0-.12-.02-.18-.24-.65-.29-1.32-.08-2 .46-1.46 2.12-1.57 2.41-.36.18.75-.292 1.72-.654 3.16-.3 1.19 1.1 2.04 2.298 1.17 1.106-.8 1.534-2.72 1.45-4.08-.16-2.71-3.13-3.29-5.02-2.42-2.16 1-2.65 3.68-1.675 4.91.126.157.22.25.18.41-.06.244-.117.49-.186.735-.05.184-.2.25-.384.175-.36-.148-.66-.377-.9-.678-.83-1.026-1.07-3.057.03-4.776 1.212-1.906 3.47-2.676 5.534-2.443 2.468.28 4.02 1.964 4.316 3.873.13.87.035 3.012-1.186 4.53-1.404 1.74-3.68 1.854-4.73.785-.08-.08-.146-.18-.225-.272" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>        </div>
          </section>
        </section>
      </nav>
    
      <div class="menu-overlay can-animate"></div>
    
          <div class="component adhesion-ad mobile-ad" eii0hxv="" hidden="">
               <div class="adhesion-ad-container">
                  
                    <div id="ad-320x50_300x50_ATF" data-tgxexclusive="true" class="ad ad-container ad-wrapper type-320-flex mobile-ad tgx-processed" data-dimensions="102x1;300x50;320x50" role="complementary" aria-hidden="true" eii0hxv="" hidden="">
                    </div>
            </div>
          </div>
    
      <div class="ad-wrapper outer tablet-ad desktop-ad full-column" eii0hxv="" hidden="">
        
          <div id="ad-101x1_728x90_ATF" data-tgxposition="1" data-companion="companion" data-tgxcompanion="true" class="ad ad-container ad-wrapper type-banner type-728x90 padding-8-tb tablet-ad tgx-processed" data-dimensions="101x1;728x90" role="complementary" aria-hidden="true" eii0hxv="" hidden="">
          </div>
        
          <div id="ad-101x1_970x90_970x66_970x250_728x90_1920x480_1920x300_ATF" data-tgxposition="1" data-companion="companion" data-tgxcompanion="true" class="ad ad-container ad-wrapper type-banner type-970x90-flex padding-8-tb desktop-ad tgx-processed" data-dimensions="101x1;970x90;970x66;970x250;728x90;1920x480;1920x300" role="complementary" aria-hidden="true" eii0hxv="" hidden="">
          </div>
      </div>
    </header>
<div class="homepage-wrapper">
  <section class="homepage-module lead" data-module_name="Lead Story">
      <div class="primary">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="/5952337/corporations-condemn-georgia-voting-law/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/04/georgia-voting-rights.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/04/georgia-voting-rights.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1, https://api.time.com/wp-content/uploads/2021/04/georgia-voting-rights.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/04/georgia-voting-rights.jpg?quality=85&amp;w=1602&amp;h=902&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2021/04/georgia-voting-rights.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="Georgia Voting Law Under Fire From Corporations">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
                    Nicole Craine—The New York Times/Redux
              </div>
            </div>
            <div class="content">
              <p class="eyebrow decoration-slash"><a href="/5952337/corporations-condemn-georgia-voting-law/">Voting</a></p>
        
              <h2 class="title"><a href="/5952337/corporations-condemn-georgia-voting-law/">Georgia Voting Law Under Fire From Corporations</a></h2>
        
                  <p class="summary">Companies are taking forceful stances against Georgia's new election law following weeks of pressure from advocates to speak out</p>
        
              <a class="read-more" href="/5952337/corporations-condemn-georgia-voting-law/"><svg width="32" height="32" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Read more…" tabindex="-1">
          <path d="M29 1L38.5 10.5L29 20" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
          <path d="M8.30518e-07 10.5L38 10.5" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        </svg></a>
            </div>
        
        </article>          </div>
      <div class="secondary">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="/5951755/how-to-convince-people-to-get-vaccinated/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/03/vaccine-social-distancing-psychology.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/03/vaccine-social-distancing-psychology.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/03/vaccine-social-distancing-psychology.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/03/vaccine-social-distancing-psychology.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2021/03/vaccine-social-distancing-psychology.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="Here's What Will Actually Convince People to Get Vaccinated">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
                    Getty Images
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5951755/how-to-convince-people-to-get-vaccinated/">Here's What Will Actually Convince People to Get Vaccinated</a></h2>
        
                  <p class="summary">A new TIME/Harris Poll survey shows the reasons Americans give for deciding to get vaccinated against COVID-19</p>
        
            </div>
        
        </article>            <article class="slide">
            <div class="media">
              <figure>
                <a href="/5950832/unaccompanied-minors-border/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/04/Unaccompanied-Minors-Donna.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/04/Unaccompanied-Minors-Donna.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/04/Unaccompanied-Minors-Donna.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/04/Unaccompanied-Minors-Donna.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2021/04/Unaccompanied-Minors-Donna.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="What's Happening to Unaccompanied Minors at the Border?">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
                    Photo by Dario Lopez-Mills - Pool/Getty Images
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5950832/unaccompanied-minors-border/">What's Happening to Unaccompanied Minors at the Border?</a></h2>
        
                  <p class="summary">Here's what to know about the unaccompanied migrant children arriving at the U.S.-Mexico border, and how the government has responded</p>
        
            </div>
        
        </article>          </div>

        <div class="trending" data-module_name="You Should Know">
          <div>
            <h1 class="module-title decoration-arrow">You Should Know</h1>
            <ul class="swipe-h">
                <li>
                  <article class="slide">
                      <div class="media">
                        <figure>
                          <a href="/5951769/andy-byford-mta-tfl-interview/">
                              <img src="https://api.time.com/wp-content/uploads/2021/03/andy-byford-mta-interview-1.jpg?quality=85&amp;crop=527px%2C434px%2C1390px%2C1389px&amp;resize=640%2C640&amp;strip" loading="lazy" alt="Why Andy Byford Believes Public Transit Will Survive the Pandemic">
                              <div class="penta"><span class="penta-arrow"></span></div>
                          </a>
                        </figure>
                          <div class="image-credit">
                        </div>
                      </div>
                      <div class="content">
                        <p class="no-eyebrow"></p>
                  
                        <h2 class="title"><a href="/5951769/andy-byford-mta-tfl-interview/">Why Andy Byford Believes Public Transit Will Survive the Pandemic</a></h2>
                  
                  
                      </div>
                  
                  </article>                    </li>
                <li>
                  <article class="slide">
                      <div class="media">
                        <figure>
                          <a href="/5951965/why-americans-could-be-paying-for-bidens-infrastructure-plan-long-after-the-roads-are-built/">
                              <img src="https://api.time.com/wp-content/uploads/2021/04/joe-biden-Infrastructure-Plan.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Why Americans Could Be Paying for Biden’s Infrastructure Plan Long After the Roads Are Built">
                              <div class="penta"><span class="penta-arrow"></span></div>
                          </a>
                        </figure>
                          <div class="image-credit">
                        </div>
                      </div>
                      <div class="content">
                        <p class="no-eyebrow"></p>
                  
                        <h2 class="title"><a href="/5951965/why-americans-could-be-paying-for-bidens-infrastructure-plan-long-after-the-roads-are-built/">Why Americans Could Be Paying for Biden’s Infrastructure Plan Long After the Roads Are Built</a></h2>
                  
                  
                      </div>
                  
                  </article>                    </li>
                <li>
                  <article class="slide">
                      <div class="media">
                        <figure>
                          <a href="/5951834/russia-control-internet/">
                              <img src="https://api.time.com/wp-content/uploads/2021/04/GettyImages-1232018576.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Russia Is Escalating Its Campaign to Control the Internet">
                              <div class="penta"><span class="penta-arrow"></span></div>
                          </a>
                        </figure>
                          <div class="image-credit">
                        </div>
                      </div>
                      <div class="content">
                        <p class="no-eyebrow"></p>
                  
                        <h2 class="title"><a href="/5951834/russia-control-internet/">Russia Is Escalating Its Campaign to Control the Internet</a></h2>
                  
                  
                      </div>
                  
                  </article>                    </li>
                <li>
                  <article class="slide">
                      <div class="media">
                        <figure>
                          <a href="/5952051/masks-after-pandemic-ends/">
                              <img src="https://api.time.com/wp-content/uploads/2021/04/masks-after-pandemic.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Should We Keep Wearing Masks Even After the Pandemic Ends?">
                              <div class="penta"><span class="penta-arrow"></span></div>
                          </a>
                        </figure>
                          <div class="image-credit">
                        </div>
                      </div>
                      <div class="content">
                        <p class="no-eyebrow"></p>
                  
                        <h2 class="title"><a href="/5952051/masks-after-pandemic-ends/">Should We Keep Wearing Masks Even After the Pandemic Ends?</a></h2>
                  
                  
                      </div>
                  
                  </article>                    </li>
                <li>
                  <article class="slide">
                      <div class="media">
                        <figure>
                          <a href="/5947893/what-constitutes-a-mass-shooting/">
                              <img src="https://api.time.com/wp-content/uploads/2021/03/what-constitutes-a-mass-shooting.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Why So Much of America's Gun Violence Gets Overlooked">
                              <div class="penta"><span class="penta-arrow"></span></div>
                          </a>
                        </figure>
                          <div class="image-credit">
                        </div>
                      </div>
                      <div class="content">
                        <p class="no-eyebrow"></p>
                  
                        <h2 class="title"><a href="/5947893/what-constitutes-a-mass-shooting/">Why So Much of America's Gun Violence Gets Overlooked</a></h2>
                  
                  
                      </div>
                  
                  </article>                    </li>
            </ul>
          </div>
        </div>
  </section>











      <section class="homepage-module spotlight" data-module_name="Spotlight Topic">
        <div class="heading"><h3>Coronavirus In-Depth</h3></div>
        <div class="component mobile-carousel" id="coronavirus in-depth" data-items-count="4">
          <span class="story-count">4 stories</span>
          <div class="item-selectors">
            <form>
              <nav>
                  <input id="5927532-carousel-item-0" type="radio" name="item-selector-dots" value="0" checked="">
                  <label for="5927532-carousel-item-0">Go to item 0</label>
                  <input id="5927342-carousel-item-1" type="radio" name="item-selector-dots" value="1">
                  <label for="5927342-carousel-item-1">Go to item 1</label>
                  <input id="5927538-carousel-item-2" type="radio" name="item-selector-dots" value="2">
                  <label for="5927538-carousel-item-2">Go to item 2</label>
                  <input id="5925467-carousel-item-3" type="radio" name="item-selector-dots" value="3">
                  <label for="5925467-carousel-item-3">Go to item 3</label>
              </nav>
            </form>
          </div>
          <ul class="items swipe-h coronavirus in-depth">
              <li id="5927532-item" class="item selected show-credit show is-visible" data-index="0">
              <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/collection/coronavirus-vaccines-updates/">
                          <picture>
                            <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2015/01/health-syringe-needle-6.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                            <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2015/01/health-syringe-needle-6.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1, https://api.time.com/wp-content/uploads/2015/01/health-syringe-needle-6.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2015/01/health-syringe-needle-6.jpg?quality=85&amp;w=1602&amp;h=902&amp;crop=1 2x">
                            <img src="https://api.time.com/wp-content/uploads/2015/01/health-syringe-needle-6.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="COVID-19 Vaccine Tracker">
                          </picture>
                      </a>
                    </figure>
                      <div class="image-credit">
                          Elizabeth Renstrom—TIME
                    </div>
                  </div>
                  <div class="content">
                    <p class="no-eyebrow"></p>
              
                    <h2 class="title"><a href="/collection/coronavirus-vaccines-updates/">COVID-19 Vaccine Tracker</a></h2>
              
                        <p class="summary">A guide to the coronavirus vaccination rollout and what you need to know about the authorized vaccines</p>
              
                  </div>
              
              </article>      </li>
              <li id="5927342-item" class="item show" data-index="1">
              <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/5927342/mrna-covid-vaccine/">
                          <picture>
                            <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/01/ugur-sahin-ozlem-tureci-biontech-vaccine.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                            <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/01/ugur-sahin-ozlem-tureci-biontech-vaccine.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/01/ugur-sahin-ozlem-tureci-biontech-vaccine.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/01/ugur-sahin-ozlem-tureci-biontech-vaccine.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                            <img src="https://api.time.com/wp-content/uploads/2021/01/ugur-sahin-ozlem-tureci-biontech-vaccine.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="How mRNA Tech Gave Us the 1st COVID-19 Vaccines">
                          </picture>
                      </a>
                    </figure>
                      <div class="image-credit">
                          Dina Litovsky—Redux for TIME
                    </div>
                  </div>
                  <div class="content">
                    <p class="no-eyebrow"></p>
              
                    <h2 class="title"><a href="/5927342/mrna-covid-vaccine/">How mRNA Tech Gave Us the 1st COVID-19 Vaccines</a></h2>
              
                        <p class="summary">The molecule has been used to make a new type of vaccine that will change the course of the pandemic</p>
              
                  </div>
              
              </article>      </li>
              <li id="5927538-item" class="item show" data-index="2">
              <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/5927538/covid-19-mutations-vaccines/">
                          <picture>
                            <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/01/GettyImages-1295025297.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                            <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/01/GettyImages-1295025297.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/01/GettyImages-1295025297.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/01/GettyImages-1295025297.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                            <img src="https://api.time.com/wp-content/uploads/2021/01/GettyImages-1295025297.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="What COVID-19 Mutations Mean for Vaccines">
                          </picture>
                      </a>
                    </figure>
                      <div class="image-credit">
                          MediaNews Group via Getty Images—Copyright - 2021 Image MediaNews Group
                    </div>
                  </div>
                  <div class="content">
                    <p class="no-eyebrow"></p>
              
                    <h2 class="title"><a href="/5927538/covid-19-mutations-vaccines/">What COVID-19 Mutations Mean for Vaccines</a></h2>
              
                        <p class="summary">New variants of the COVID-19 virus raise concerns about whether they can escape vaccine protection</p>
              
                  </div>
              
              </article>      </li>
              <li id="5925467-item" class="item show is-visible" data-index="3">
              <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/5925467/covid-19-vaccine-hesitancy/">
                          <picture>
                            <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/01/Ala-Stanford.jpg?quality=85&amp;w=640&amp;h=567&amp;crop=1">
                            <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/01/Ala-Stanford.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/01/Ala-Stanford.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/01/Ala-Stanford.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                            <img src="https://api.time.com/wp-content/uploads/2021/01/Ala-Stanford.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="Why Many Americans Mistrust COVID-19 Vaccines">
                          </picture>
                      </a>
                    </figure>
                      <div class="image-credit">
                          Emma Lee
                    </div>
                  </div>
                  <div class="content">
                    <p class="no-eyebrow"></p>
              
                    <h2 class="title"><a href="/5925467/covid-19-vaccine-hesitancy/">Why Many Americans Mistrust COVID-19 Vaccines</a></h2>
              
                        <p class="summary">Tens of millions of Americans say they will not take COVID-19 vaccines. Rumors, misinformation and racial demographics all play a role</p>
              
                  </div>
              
              </article>      </li>
          </ul>
          <hr>
        </div>          </section>










  <section class="homepage-module issue-mobile" data-module_name="Magazine Section">
      <h1 class="module-title">Inside the Issue</h1>
          <div class="main">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5947723/atlanta-shootings-anti-asian-violence-america/">
                        <img src="https://api.time.com/wp-content/uploads/2021/03/violence-against-asian-americans-1.jpg?quality=85&amp;w=550&amp;h=367&amp;crop=1" loading="lazy" alt="Atlanta Shooting and America's Legacy of Anti-Asian Violence">
                    </a>
                  </figure>
                    <div class="image-credit">
                        Leonard Ortiz—MediaNews Group/Orange County Register/Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="eyebrow decoration-slash"><a href="/5947723/atlanta-shootings-anti-asian-violence-america/">Featured Story</a></p>
            
                  <h2 class="title"><a href="/5947723/atlanta-shootings-anti-asian-violence-america/">Atlanta Shooting and America's Legacy of Anti-Asian Violence</a></h2>
            
                      <p class="summary">To name anti-Asian racism in the U.S. means confronting centuries of discrimination, violence and oppression—and recognizing how it manifests in the present day</p>
            
                </div>
            
            </article>              </div>
      <div class="touts">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5947724/a-love-letter-to-asian-americans/">
                        <img src="https://api.time.com/wp-content/uploads/2021/03/violence-against-asian-americans-2.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="A Love Letter to Asian Americans">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5947724/a-love-letter-to-asian-americans/">A Love Letter to Asian Americans</a></h2>
            
            
                </div>
            
            </article>                <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5947714/angela-merkel-leaves-germany/">
                        <img src="https://api.time.com/wp-content/uploads/2021/03/angela-merkel-leaves-germany.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Why Germany’s Political Future Looks Increasingly Shaky as Angela Merkel Prepares to Leave">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5947714/angela-merkel-leaves-germany/">Why Germany’s Political Future Looks Increasingly Shaky as Angela Merkel Prepares to Leave</a></h2>
            
            
                </div>
            
            </article>          </div>
      <div class="magazine">
        <div class="magazine-image">
            <figure>
              <a href="https://time.com/magazine/">
                <img src="https://api.time.com/wp-content/uploads/2021/03/TIM210329_Not.Silent.CoverFINAL.jpg?quality=85&amp;w=486&amp;h=646&amp;crop=1" loading="lazy" alt="Time Magazine Cover">
              </a>
            </figure>
        </div>
        <div class="magazine-text">
          <span class="get-stories">
            Get Digital Access every day. All year long.
          </span>
          <a target="_blank" href="https://time.com/subscribe-body-time/">
            <button class="button-style white">
              Subscribe Now
            </button>
          </a>
          <a target="_blank" href="https://timecoverstore.com/collections/latest+issue">
            <button class="button-style">
              Buy The Print
            </button>
          </a>
        </div>
      </div>
  </section>

  <section class="homepage-module issue" data-module_name="Magazine Section">
      <div class="heading"><h3>Inside the Issue</h3></div>
      <div class="issue-container">
            <div class="main">
              <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/5947723/atlanta-shootings-anti-asian-violence-america/">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/violence-against-asian-americans-1.jpg?quality=85&amp;crop=0px%2C5px%2C2400px%2C1350px&amp;resize=801%2C451&amp;strip" loading="lazy" alt="Atlanta Shooting and America's Legacy of Anti-Asian Violence">
                      </a>
                    </figure>
                      <div class="image-credit">
                          Leonard Ortiz—MediaNews Group/Orange County Register/Getty Images
                    </div>
                  </div>
                  <div class="content">
                    <p class="eyebrow decoration-slash"><a href="/5947723/atlanta-shootings-anti-asian-violence-america/">Featured Story</a></p>
              
                    <h2 class="title"><a href="/5947723/atlanta-shootings-anti-asian-violence-america/">Atlanta Shooting and America's Legacy of Anti-Asian Violence</a></h2>
              
                        <p class="summary">To name anti-Asian racism in the U.S. means confronting centuries of discrimination, violence and oppression—and recognizing how it manifests in the present day</p>
              
                  </div>
              
              </article>                </div>
        <div class="touts">
              <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/5947724/a-love-letter-to-asian-americans/">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/violence-against-asian-americans-2.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="A Love Letter to Asian Americans">
                      </a>
                    </figure>
                      <div class="image-credit">
                    </div>
                  </div>
                  <div class="content">
                    <p class="no-eyebrow"></p>
              
                    <h2 class="title"><a href="/5947724/a-love-letter-to-asian-americans/">A Love Letter to Asian Americans</a></h2>
              
              
                  </div>
              
              </article>                  <article class="slide">
                  <div class="media">
                    <figure>
                      <a href="/5947714/angela-merkel-leaves-germany/">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/angela-merkel-leaves-germany.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="Why Germany’s Political Future Looks Increasingly Shaky as Angela Merkel Prepares to Leave">
                      </a>
                    </figure>
                      <div class="image-credit">
                    </div>
                  </div>
                  <div class="content">
                    <p class="no-eyebrow"></p>
              
                    <h2 class="title"><a href="/5947714/angela-merkel-leaves-germany/">Why Germany’s Political Future Looks Increasingly Shaky as Angela Merkel Prepares to Leave</a></h2>
              
              
                  </div>
              
              </article>            </div>
        <div class="magazine desktop">
          <div class="magazine-outer">
            <div class="border">
              <div class="aeroplane-wrapper">
                <div class="aeroplane">
                </div>
              </div>
              <div class="magazine-image">
                  <a href="https://time.com/magazine/">
                    <img src="https://api.time.com/wp-content/uploads/2021/03/TIM210329_Not.Silent.CoverFINAL.jpg?quality=85&amp;w=486&amp;h=646&amp;crop=1" loading="lazy" alt="Time Magazine Cover">
                  </a>
              </div>
                <span class="get-stories">
                  Conversations that shape tomorrow
                </span>
                <div class="content-container">
                  <span class="subscription-brief">
                    Get Digital Access every day. All year long.
                  </span>
                  <a class="magazine-outer-get-the-nl subscribe-link" target="_blank" href="https://time.com/subscribe-body-time/" data-location="homepage-unit">
                    <button class="button-style white">
                      Subscribe Now
                    </button>
                  </a>
                  <a class="magazine-outer-subscribe-now" target="_blank" href="https://timecoverstore.com/collections/latest+issue">
                    <button class="button-style">
                      Buy the Print
                    </button>
                  </a>
                </div>
            </div>
            <div class="magazine-inner">
            </div>
          </div>
        </div>
      </div>
  </section>











  <section class="homepage-module latest" data-module_name="Latest Stories">
    <h1 class="module-title decoration-arrow">Latest Stories</h1>
    <ol class="swipe-h">
        <li>
        <article class="slide">
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5952424/england-wales-police/">Thousands Rally Over Police Legislation in England</a></h2>
        
        
            </div>
        
        </article>          </li>
        <li>
        <article class="slide">
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5952415/arthur-kopit-death/">Tony-Nominated Playwright Arthur Kopit Dies at 83</a></h2>
        
        
            </div>
        
        </article>          </li>
        <li>
        <article class="slide">
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5952414/north-carolina-shooting/">N.C. House Party Shooting Leaves 3 Dead </a></h2>
        
        
            </div>
        
        </article>          </li>
        <li>
        <article class="slide">
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5950759/homeless-deaths-rise-covid-19-west-virginia/">Deaths Among America's Homeless Are Soaring in the Pandemic. A Photographer Captures A Community In Crisis</a></h2>
        
        
            </div>
        
        </article>          </li>
        <li>
        <article class="slide">
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="/5952392/army-fort-sill-oklahoma-sexual-assault/">Soldier Says Drill Instructors Sexually Assaulted Her While Enrolled In Training Course</a></h2>
        
        
            </div>
        
        </article>          </li>
    </ol>
  </section>










  <div class="homepage-module voices">
    <div class="heading"><h3>Featured Voices</h3></div>
    <section class=" component featured-voices" data-module_name="Featured Voices">
            <section class="primary">
              <ul>
              <li>
                <article class="slide">
                    <div class="media">
                      <figure>
                        <a href="/5947724/a-love-letter-to-asian-americans/">
                            <img src="https://api.time.com/wp-content/uploads/2017/01/lucy-feldman-headshot.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Lucy Feldman">
                            <div class="penta"><span class="penta-arrow"></span></div>
                        </a>
                      </figure>
                        <div class="image-credit">
                      </div>
                    </div>
                    <div class="content">
                      <p class="no-eyebrow"></p>
                
                      <h2 class="title"><a href="/5947724/a-love-letter-to-asian-americans/">Lucy Feldman</a></h2>
                
                          <p class="summary"><a href="/5947724/a-love-letter-to-asian-americans/">A Love Letter to Asian Americans</a></p>
                
                    </div>
                
                </article>          </li>
              <li>
                <article class="slide">
                    <div class="media">
                      <figure>
                        <a href="/5942112/mental-illness-covid-19-jaquira-diaz/">
                            <img src="https://api.time.com/wp-content/uploads/2020/06/Jaquira-Diaz-voices.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1" loading="lazy" alt="Jaquira Díaz">
                            <div class="penta"><span class="penta-arrow"></span></div>
                        </a>
                      </figure>
                        <div class="image-credit">
                      </div>
                    </div>
                    <div class="content">
                      <p class="no-eyebrow"></p>
                
                      <h2 class="title"><a href="/5942112/mental-illness-covid-19-jaquira-diaz/">Jaquira Díaz</a></h2>
                
                          <p class="summary"><a href="/5942112/mental-illness-covid-19-jaquira-diaz/">Jaquira Díaz on Addressing Mental Illness During COVID-19</a></p>
                
                    </div>
                
                </article>          </li>
              <li>
                <article class="slide">
                    <div class="media">
                      <figure>
                        <a href="/5948226/eric-nam-anti-asian-racism-atlanta/">
                            <img src="https://api.time.com/wp-content/uploads/2021/03/EricNam6-Credit_-CJ-ENM.jpg?quality=85&amp;crop=1972px%2C0px%2C2902px%2C2903px&amp;resize=640%2C640&amp;strip" loading="lazy" alt="Eric Nam">
                            <div class="penta"><span class="penta-arrow"></span></div>
                        </a>
                      </figure>
                        <div class="image-credit">
                      </div>
                    </div>
                    <div class="content">
                      <p class="no-eyebrow"></p>
                
                      <h2 class="title"><a href="/5948226/eric-nam-anti-asian-racism-atlanta/">Eric Nam</a></h2>
                
                          <p class="summary"><a href="/5948226/eric-nam-anti-asian-racism-atlanta/">If You're Surprised by Anti-Asian Violence, You Haven't Been Listening</a></p>
                
                    </div>
                
                </article>          </li>
            </ul>
          </section>
          <section class="secondary">
            <h2 class="module-title decoration-arrow">More Voices</h2>
            <ul class="swipe-h">
              <li>
                <article class="slide">
                    <div class="content">
                      <p class="no-eyebrow"></p>
                
                      <h2 class="title"><a href="/5945307/biden-end-detention-migrant-children/">Satsuki Ina</a></h2>
                
                          <p class="summary"><a href="/5945307/biden-end-detention-migrant-children/">President Biden Must End Detention of Children and Families</a></p>
                
                    </div>
                
                </article>          </li>
              <li>
                <article class="slide">
                    <div class="content">
                      <p class="no-eyebrow"></p>
                
                      <h2 class="title"><a href="/5941242/tanya-selvaratnam-eric-schneiderman/">Eliana Dockterman</a></h2>
                
                          <p class="summary"><a href="/5941242/tanya-selvaratnam-eric-schneiderman/">What It's Like to Come Forward About Abuse</a></p>
                
                    </div>
                
                </article>          </li>
              <li>
                <article class="slide">
                    <div class="content">
                      <p class="no-eyebrow"></p>
                
                      <h2 class="title"><a href="/5938041/india-farmer-protests-democracy/">Simran Jeet Singh</a></h2>
                
                          <p class="summary"><a href="/5938041/india-farmer-protests-democracy/">The Farmers' Protests Are a Turning Point for India's Democracy</a></p>
                
                    </div>
                
                </article>          </li>
            </ul>
          </section>
    </section>      </div>











  <div class="homepage-module newsletter">
    <section class=" component newsletter-signup-promo" data-module_name="Newsletter Signup Promo">
      <div class="newsletter-container">
          <div class="newsletter-outer">
            <div class="border">
              <div class="aeroplane-wrapper"><div class="aeroplane"></div></div>
              <span class="inside-time international-user">
                <span>Sign up for Inside TIME.</span> Be the first to see the new cover of TIME and get our most compelling stories delivered straight to your inbox.
              </span>
              <div class="input international-user">
                  <a target="_blank" href="https://cloud.newsletters.time.com/newsletters/?newsletter_name=INSIDE_TIME&amp;source=TD_CMS_HP_CC">
                    <button class="button-style">
                      SIGN UP NOW
                    </button>
                  </a>
              </div>
            </div>
            <div class="newsletter-bg">
            </div>
          </div>
        </div>
    </section>      </div>

  <section class="homepage-module explore mobile" data-module_name="Explore More">
    <div class="heading"><h3>Explore More</h3></div>
    <div class="component image-carousel" id="" data-items-count="5">
      <div class="item-selectors image-carousel-selectors">
        <form>
          <nav>
              <input id="-carousel-item-0" type="radio" name="item-selector-dots" value="0" checked="">
              <label for="-carousel-item-0">Go to item 0</label>
              <input id="-carousel-item-1" type="radio" name="item-selector-dots" value="1">
              <label for="-carousel-item-1">Go to item 1</label>
              <input id="-carousel-item-2" type="radio" name="item-selector-dots" value="2">
              <label for="-carousel-item-2">Go to item 2</label>
              <input id="-carousel-item-3" type="radio" name="item-selector-dots" value="3">
              <label for="-carousel-item-3">Go to item 3</label>
              <input id="-carousel-item-4" type="radio" name="item-selector-dots" value="4">
              <label for="-carousel-item-4">Go to item 4</label>
          </nav>
        </form>
      </div>
      <ul class="items swipe-h ">
          <li id="-item" class="item selected transition current-slide" data-index="0">
          <div class="explore-item">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://time.com/collection/time100-talks/">
                        <img src="https://api.time.com/wp-content/uploads/2020/11/T100card.png?w=564&amp;h=1028&amp;crop=1" loading="lazy" alt="">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://time.com/collection/time100-talks/"></a></h2>
            
            
                </div>
            
            </article>      </div>
          </li>
          <li id="-item" class="item transition right-1" data-index="1">
          <div class="explore-item">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://time.com/collection/time100-next-2021/">
                        <img src="https://api.time.com/wp-content/uploads/2021/02/1330x2400_var1b.png?w=564&amp;h=1028&amp;crop=1" loading="lazy" alt="">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://time.com/collection/time100-next-2021/"></a></h2>
            
            
                </div>
            
            </article>      </div>
          </li>
          <li id="-item" class="item transition right-2" data-index="2">
          <div class="explore-item">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://timecoverstore.com/">
                        <img src="https://api.time.com/wp-content/uploads/2020/04/HP-Brand-COVERS-NEW.jpg?quality=85&amp;w=564&amp;h=1028&amp;crop=1" loading="lazy" alt="">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://timecoverstore.com/"></a></h2>
            
            
                </div>
            
            </article>      </div>
          </li>
          <li id="-item" class="item transition hidden" data-index="3">
          <div class="explore-item">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://time.com/collection/video/">
                        <img src="https://api.time.com/wp-content/uploads/2021/02/time-vid_HP-Brand.png?w=564&amp;h=1028&amp;crop=1" loading="lazy" alt="">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://time.com/collection/video/"></a></h2>
            
            
                </div>
            
            </article>      </div>
          </li>
          <li id="-item" class="item transition hidden" data-index="4">
          <div class="explore-item">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://www.timeforkids.com/family/">
                        <img src="https://api.time.com/wp-content/uploads/2021/01/TFK_1130x2400_alt-1.png?w=564&amp;h=1028&amp;crop=1" loading="lazy" alt="">
                    </a>
                  </figure>
                    <div class="image-credit">
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://www.timeforkids.com/family/"></a></h2>
            
            
                </div>
            
            </article>      </div>
          </li>
      </ul>
    </div>      </section>

  <section class="homepage-module explore desktop" data-module_name="Explore More">
    <div class="heading"><h3>Explore More</h3></div>
      <div class="explore-item">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="https://time.com/collection/time100-talks/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/11/T100card.png?w=282&amp;h=514&amp;crop=1, https://api.time.com/wp-content/uploads/2020/11/T100card.png?w=423&amp;h=771&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/11/T100card.png?w=564&amp;h=1028&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2020/11/T100card.png?w=282&amp;h=514&amp;crop=1" loading="lazy" alt="">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="https://time.com/collection/time100-talks/"></a></h2>
        
        
            </div>
        
        </article>          </div>
      <div class="explore-item">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="https://time.com/collection/time100-next-2021/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/1330x2400_var1b.png?w=282&amp;h=514&amp;crop=1, https://api.time.com/wp-content/uploads/2021/02/1330x2400_var1b.png?w=423&amp;h=771&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/1330x2400_var1b.png?w=564&amp;h=1028&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2021/02/1330x2400_var1b.png?w=282&amp;h=514&amp;crop=1" loading="lazy" alt="">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="https://time.com/collection/time100-next-2021/"></a></h2>
        
        
            </div>
        
        </article>          </div>
      <div class="explore-item">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="https://timecoverstore.com/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/04/HP-Brand-COVERS-NEW.jpg?quality=85&amp;w=282&amp;h=514&amp;crop=1, https://api.time.com/wp-content/uploads/2020/04/HP-Brand-COVERS-NEW.jpg?quality=85&amp;w=423&amp;h=771&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/04/HP-Brand-COVERS-NEW.jpg?quality=85&amp;w=564&amp;h=1028&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2020/04/HP-Brand-COVERS-NEW.jpg?quality=85&amp;w=282&amp;h=514&amp;crop=1" loading="lazy" alt="">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="https://timecoverstore.com/"></a></h2>
        
        
            </div>
        
        </article>          </div>
      <div class="explore-item">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="https://time.com/collection/video/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/time-vid_HP-Brand.png?w=282&amp;h=514&amp;crop=1, https://api.time.com/wp-content/uploads/2021/02/time-vid_HP-Brand.png?w=423&amp;h=771&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/time-vid_HP-Brand.png?w=564&amp;h=1028&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2021/02/time-vid_HP-Brand.png?w=282&amp;h=514&amp;crop=1" loading="lazy" alt="">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="https://time.com/collection/video/"></a></h2>
        
        
            </div>
        
        </article>          </div>
      <div class="explore-item">
        <article class="slide">
            <div class="media">
              <figure>
                <a href="https://www.timeforkids.com/family/">
                    <picture>
                      <source media="(max-width: 767px)" srcset="">
                      <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/01/TFK_1130x2400_alt-1.png?w=282&amp;h=514&amp;crop=1, https://api.time.com/wp-content/uploads/2021/01/TFK_1130x2400_alt-1.png?w=423&amp;h=771&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/01/TFK_1130x2400_alt-1.png?w=564&amp;h=1028&amp;crop=1 2x">
                      <img src="https://api.time.com/wp-content/uploads/2021/01/TFK_1130x2400_alt-1.png?w=282&amp;h=514&amp;crop=1" loading="lazy" alt="">
                    </picture>
                </a>
              </figure>
                <div class="image-credit">
              </div>
            </div>
            <div class="content">
              <p class="no-eyebrow"></p>
        
              <h2 class="title"><a href="https://www.timeforkids.com/family/"></a></h2>
        
        
            </div>
        
        </article>          </div>
  </section>











    <section class="homepage-module topic" data-module_name="Topic Section | 1 | Biden's First 100 Days">
      <div class="heading"><h3>Biden's First 100 Days</h3></div>
      <div class="component mobile-carousel" id="biden's first 100 days" data-items-count="4">
        <span class="story-count">4 stories</span>
        <div class="item-selectors">
          <form>
            <nav>
                <input id="5945302-carousel-item-0" type="radio" name="item-selector-dots" value="0" checked="">
                <label for="5945302-carousel-item-0">Go to item 0</label>
                <input id="5942561-carousel-item-1" type="radio" name="item-selector-dots" value="1">
                <label for="5942561-carousel-item-1">Go to item 1</label>
                <input id="5937045-carousel-item-2" type="radio" name="item-selector-dots" value="2">
                <label for="5937045-carousel-item-2">Go to item 2</label>
                <input id="5931575-carousel-item-3" type="radio" name="item-selector-dots" value="3">
                <label for="5931575-carousel-item-3">Go to item 3</label>
            </nav>
          </form>
        </div>
        <ul class="items swipe-h biden's first 100 days">
            <li id="5945302-item" class="item selected show-credit show" data-index="0">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5945302/joe-biden-covid-19-relief-bill/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/03/joe-biden-50-days.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/03/joe-biden-50-days.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1, https://api.time.com/wp-content/uploads/2021/03/joe-biden-50-days.jpg?quality=85&amp;crop=0px,50px1024px,576px&amp;resize=1201,676&amp;strip=1 1.5x, https://api.time.com/wp-content/uploads/2021/03/joe-biden-50-days.jpg?quality=85&amp;crop=0px,54px1024px,576px&amp;resize=1602,902&amp;strip=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/joe-biden-50-days.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="What the COVID-19 Relief Bill Means for Joe Biden">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Alex Wong/Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5945302/joe-biden-covid-19-relief-bill/">What the COVID-19 Relief Bill Means for Joe Biden</a></h2>
            
                      <p class="summary">The administration have pushed their first piece of legislation over the finish line and executed a series of impactful moves</p>
            
                </div>
            
            </article>      </li>
            <li id="5942561-item" class="item show" data-index="1">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5942561/texas-winter-storm-joe-biden-climate/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/02/joe-biden-texas-climate.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/joe-biden-texas-climate.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/02/joe-biden-texas-climate.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/joe-biden-texas-climate.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/02/joe-biden-texas-climate.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="How the Texas Storms Will Shape Joe Biden's Climate&nbsp;Agenda">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Mandel Ngan—AFP/Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5942561/texas-winter-storm-joe-biden-climate/">How the Texas Storms Will Shape Joe Biden's Climate&nbsp;Agenda</a></h2>
            
                      <p class="summary">Democrats are already using the disaster to illustrate the need for new legislation while many Republicans have relied on old talking points</p>
            
                </div>
            
            </article>      </li>
            <li id="5937045-item" class="item show" data-index="2">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5937045/joe-biden-oval-office-tone-washington/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/02/GettyImages-1300171945.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/GettyImages-1300171945.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/02/GettyImages-1300171945.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/GettyImages-1300171945.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/02/GettyImages-1300171945.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="How Joe Biden Has Changed the ‘Toxic Tone’ in the Oval Office">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Stefani Reynolds—Pool/Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5937045/joe-biden-oval-office-tone-washington/">How Joe Biden Has Changed the ‘Toxic Tone’ in the Oval Office</a></h2>
            
                      <p class="summary">More than two weeks into his presidency, Biden's careful approach has brought an abrupt shift in tone to Washington</p>
            
                </div>
            
            </article>      </li>
            <li id="5931575-item" class="item show" data-index="3">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5931575/biden-immigration-bill-migration-root-causes/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/01/Caravan-Biden-Bill-Immigration.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/01/Caravan-Biden-Bill-Immigration.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/01/Caravan-Biden-Bill-Immigration.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/01/Caravan-Biden-Bill-Immigration.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/01/Caravan-Biden-Bill-Immigration.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="Biden Proposes $4 Billion to Fix Root Causes of Migration">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Photo by Luis Vargas/Anadolu Agency via Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5931575/biden-immigration-bill-migration-root-causes/">Biden Proposes $4 Billion to Fix Root Causes of Migration</a></h2>
            
                      <p class="summary">Biden's comprehensive immigration reform bill includes an eight-year pathway to citizenship and a plan to fix the root causes of migration.</p>
            
                </div>
            
            </article>      </li>
        </ul>
        <hr>
      </div>        </section>
    <section class="homepage-module topic" data-module_name="Topic Section | 2 | Black Lives Matter and Beyond">
      <div class="heading"><h3>Black Lives Matter and Beyond</h3></div>
      <div class="component mobile-carousel" id="black lives matter and beyond" data-items-count="4">
        <span class="story-count">4 stories</span>
        <div class="item-selectors">
          <form>
            <nav>
                <input id="5936408-carousel-item-0" type="radio" name="item-selector-dots" value="0" checked="">
                <label for="5936408-carousel-item-0">Go to item 0</label>
                <input id="5939760-carousel-item-1" type="radio" name="item-selector-dots" value="1">
                <label for="5939760-carousel-item-1">Go to item 1</label>
                <input id="5938038-carousel-item-2" type="radio" name="item-selector-dots" value="2">
                <label for="5938038-carousel-item-2">Go to item 2</label>
                <input id="5912852-carousel-item-3" type="radio" name="item-selector-dots" value="3">
                <label for="5912852-carousel-item-3">Go to item 3</label>
            </nav>
          </form>
        </div>
        <ul class="items swipe-h black lives matter and beyond">
            <li id="5936408-item" class="item selected show-credit show" data-index="0">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5936408/defund-the-police-definition-movement/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/02/defund-the-police.jpg?quality=85&amp;crop=668px%2C616px%2C855px%2C856px&amp;resize=640%2C640&amp;strip">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/defund-the-police.jpg?quality=85&amp;crop=251px%2C612px%2C1760px%2C989px&amp;resize=801%2C451&amp;strip, https://api.time.com/wp-content/uploads/2021/02/defund-the-police.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/defund-the-police.jpg?quality=85&amp;crop=251px%2C612px%2C1760px%2C989px&amp;resize=1602%2C902&amp;strip 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/02/defund-the-police.jpg?quality=85&amp;crop=251px%2C612px%2C1760px%2C989px&amp;resize=801%2C451&amp;strip" loading="lazy" alt="Why the Term 'Defund the Police' Has Become Divisive">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Ira L. Black—Corbis/Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5936408/defund-the-police-definition-movement/">Why the Term 'Defund the Police' Has Become Divisive</a></h2>
            
                      <p class="summary">There are varying perspectives on what "defunding" actually means for police reform—and in what ways it should be used to foster change</p>
            
                </div>
            
            </article>      </li>
            <li id="5939760-item" class="item show" data-index="1">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5939760/albert-woodfox-angola-three-interview/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/02/GettyImages-1208739896.jpg?quality=85&amp;crop=171px%2C183px%2C500px%2C500px&amp;resize=640%2C640&amp;strip">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/GettyImages-1208739896.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/02/GettyImages-1208739896.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/GettyImages-1208739896.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/02/GettyImages-1208739896.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="Albert Woodfox Speaks on Racial Justice in America">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        The Washington Post via Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5939760/albert-woodfox-angola-three-interview/">Albert Woodfox Speaks on Racial Justice in America</a></h2>
            
                      <p class="summary">Feb. 19 marks the five-year anniversary of Albert Woodfox's release from Louisiana State Penitentiary. (It also marks his birthday.) Woodfox, 74, had spent over 40 years in solitary confinement while incarcerated there, one of the</p>
            
                </div>
            
            </article>      </li>
            <li id="5938038-item" class="item show" data-index="2">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5938038/accountable-now-police-force-database/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/02/police-use-of-force-02-10-21.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/02/police-use-of-force-02-10-21.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/02/police-use-of-force-02-10-21.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/02/police-use-of-force-02-10-21.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/02/police-use-of-force-02-10-21.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="Civil Rights Group Launches Police Use of Force Database">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Graeme Sloan—AP
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5938038/accountable-now-police-force-database/">Civil Rights Group Launches Police Use of Force Database</a></h2>
            
                      <p class="summary">A new kind of police data collection tool hopes to reveal how often police department are using force</p>
            
                </div>
            
            </article>      </li>
            <li id="5912852-item" class="item show" data-index="3">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5912852/high-school-speech-debate-diversity/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2020/12/high-school-competition-race-04.jpg?quality=85&amp;crop=209px%2C0px%2C1600px%2C1601px&amp;resize=640%2C640&amp;strip">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/12/high-school-competition-race-04.jpg?quality=85&amp;crop=0px%2C251px%2C2400px%2C1350px&amp;resize=243%2C136&amp;strip, https://api.time.com/wp-content/uploads/2020/12/high-school-competition-race-04.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/12/high-school-competition-race-04.jpg?quality=85&amp;crop=0px%2C251px%2C2400px%2C1350px&amp;resize=486%2C272&amp;strip 2x">
                          <img src="https://api.time.com/wp-content/uploads/2020/12/high-school-competition-race-04.jpg?quality=85&amp;crop=0px%2C251px%2C2400px%2C1350px&amp;resize=243%2C136&amp;strip" loading="lazy" alt="America’s Reckoning on Race Comes to High School Speech and Debate">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Makeda Sandford for TIME
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5912852/high-school-speech-debate-diversity/">America’s Reckoning on Race Comes to High School Speech and Debate</a></h2>
            
                      <p class="summary">A group of Brooklyn students are on the vanguard of change in the once-staid world of competitive oratory</p>
            
                </div>
            
            </article>      </li>
        </ul>
        <hr>
      </div>        </section>
    <section class="homepage-module topic" data-module_name="Topic Section | 3 | Personal Finance by NextAdvisor">
      <div class="heading"><h3>Personal Finance by NextAdvisor</h3></div>
      <div class="component mobile-carousel" id="personal finance by nextadvisor" data-items-count="4">
        <span class="story-count">4 stories</span>
        <div class="item-selectors">
          <form>
            <nav>
                <input id="5952259-carousel-item-0" type="radio" name="item-selector-dots" value="0" checked="">
                <label for="5952259-carousel-item-0">Go to item 0</label>
                <input id="5951603-carousel-item-1" type="radio" name="item-selector-dots" value="1">
                <label for="5951603-carousel-item-1">Go to item 1</label>
                <input id="5951615-carousel-item-2" type="radio" name="item-selector-dots" value="2">
                <label for="5951615-carousel-item-2">Go to item 2</label>
                <input id="5951617-carousel-item-3" type="radio" name="item-selector-dots" value="3">
                <label for="5951617-carousel-item-3">Go to item 3</label>
            </nav>
          </form>
        </div>
        <ul class="items swipe-h personal finance by nextadvisor">
            <li id="5952259-item" class="item selected show-credit show" data-index="0">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://bit.ly/2PORzvd">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/04/new-unemployment-rate-april-2021.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/04/new-unemployment-rate-april-2021.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1, https://api.time.com/wp-content/uploads/2021/04/new-unemployment-rate-april-2021.jpg?quality=85&amp;crop=0px,50px1024px,576px&amp;resize=1201,676&amp;strip=1 1.5x, https://api.time.com/wp-content/uploads/2021/04/new-unemployment-rate-april-2021.jpg?quality=85&amp;crop=0px,54px1024px,576px&amp;resize=1602,902&amp;strip=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/04/new-unemployment-rate-april-2021.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="The Unemployment Rate Just Dropped to 6.0%, But Millions Remain Out of Work. Here’s What They Should Know">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Michael Ciaglo—Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://bit.ly/2PORzvd">The Unemployment Rate Just Dropped to 6.0%, But Millions Remain Out of Work. Here’s What They Should Know</a></h2>
            
            
                </div>
            
            </article>      </li>
            <li id="5951603-item" class="item show" data-index="1">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://bit.ly/3dl5MrQ">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/03/na-tiffany-aliche-budgetnista-scammed-1.jpeg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/03/na-tiffany-aliche-budgetnista-scammed-1.jpeg?quality=85&amp;crop=0px%2C8px%2C1000px%2C562px&amp;resize=243%2C136&amp;strip, https://api.time.com/wp-content/uploads/2021/03/na-tiffany-aliche-budgetnista-scammed-1.jpeg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/03/na-tiffany-aliche-budgetnista-scammed-1.jpeg?quality=85&amp;crop=0px%2C8px%2C1000px%2C562px&amp;resize=486%2C272&amp;strip 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/na-tiffany-aliche-budgetnista-scammed-1.jpeg?quality=85&amp;crop=0px%2C8px%2C1000px%2C562px&amp;resize=243%2C136&amp;strip" loading="lazy" alt="How the Budgetnista Got Scammed Out of $20,000, Lost Her Job and Rebounded">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        NextAdvisor
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://bit.ly/3dl5MrQ">How the Budgetnista Got Scammed Out of $20,000, Lost Her Job and Rebounded</a></h2>
            
                      <p class="summary">Hundreds of thousands in debt, Tiffany Aliche saw her financial certainties shattered. She came back and founded a successful business, and has advice for you</p>
            
                </div>
            
            </article>      </li>
            <li id="5951615-item" class="item show" data-index="2">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://bit.ly/2Pm3QY1">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/03/na-cdc-extends-national-eviction-moratorium.jpeg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/03/na-cdc-extends-national-eviction-moratorium.jpeg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/03/na-cdc-extends-national-eviction-moratorium.jpeg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/03/na-cdc-extends-national-eviction-moratorium.jpeg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/na-cdc-extends-national-eviction-moratorium.jpeg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="The CDC’s Ban on Evictions Just Got Extended Until June 30. Here’s How to Claim Protection">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Jim Davis—Boston Globe/Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://bit.ly/2Pm3QY1">The CDC’s Ban on Evictions Just Got Extended Until June 30. Here’s How to Claim Protection</a></h2>
            
                      <p class="summary">The eviction ban has been extended until June 30, 2021, but not everyone will qualify. Here’s how to claim protection if you’re eligible</p>
            
                </div>
            
            </article>      </li>
            <li id="5951617-item" class="item show" data-index="3">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="https://bit.ly/3sGmQyX">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2021/03/na-unemployment-claims-fraud.jpeg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2021/03/na-unemployment-claims-fraud.jpeg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2021/03/na-unemployment-claims-fraud.jpeg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2021/03/na-unemployment-claims-fraud.jpeg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2021/03/na-unemployment-claims-fraud.jpeg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="The Pandemic Created a ‘Perfect Storm’ for Unemployment Fraud. Here’s How You Can Stay Protected">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Getty Images/NextAdvisor
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="https://bit.ly/3sGmQyX">The Pandemic Created a ‘Perfect Storm’ for Unemployment Fraud. Here’s How You Can Stay Protected</a></h2>
            
                      <p class="summary">Cases of unemployment fraud have grown through the pandemic and current tax season. These are the measures you can take to protect your information</p>
            
                </div>
            
            </article>      </li>
        </ul>
        <hr>
      </div>        </section>
    <section class="homepage-module topic" data-module_name="Topic Section | 4 | TIME Health">
      <div class="heading"><h3>TIME Health</h3></div>
      <div class="component mobile-carousel" id="time health" data-items-count="4">
        <span class="story-count">4 stories</span>
        <div class="item-selectors">
          <form>
            <nav>
                <input id="5903992-carousel-item-0" type="radio" name="item-selector-dots" value="0" checked="">
                <label for="5903992-carousel-item-0">Go to item 0</label>
                <input id="5918335-carousel-item-1" type="radio" name="item-selector-dots" value="1">
                <label for="5918335-carousel-item-1">Go to item 1</label>
                <input id="5917061-carousel-item-2" type="radio" name="item-selector-dots" value="2">
                <label for="5917061-carousel-item-2">Go to item 2</label>
                <input id="5914062-carousel-item-3" type="radio" name="item-selector-dots" value="3">
                <label for="5914062-carousel-item-3">Go to item 3</label>
            </nav>
          </form>
        </div>
        <ul class="items swipe-h time health">
            <li id="5903992-item" class="item selected show-credit show" data-index="0">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5903992/indoor-socializing-coronavirus/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2020/10/indoor-socializing.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/10/indoor-socializing.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1, https://api.time.com/wp-content/uploads/2020/10/indoor-socializing.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/10/indoor-socializing.jpg?quality=85&amp;w=1602&amp;h=902&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2020/10/indoor-socializing.jpg?quality=85&amp;w=801&amp;h=451&amp;crop=1" loading="lazy" alt="Can You Socialize Safely Indoors This Winter Amid COVID?">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5903992/indoor-socializing-coronavirus/">Can You Socialize Safely Indoors This Winter Amid COVID?</a></h2>
            
                      <p class="summary">COVID-19 spreads especially easily in indoor environments. As the weather gets colder, is there any safe way to socialize inside?</p>
            
                </div>
            
            </article>      </li>
            <li id="5918335-item" class="item show" data-index="1">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5918335/a-post-pandemic-bucket-list-and-what-to-do-in-the-meantime/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2020/12/INJY-12-6-20-Lead-Image.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/12/INJY-12-6-20-Lead-Image.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2020/12/INJY-12-6-20-Lead-Image.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/12/INJY-12-6-20-Lead-Image.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2020/12/INJY-12-6-20-Lead-Image.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="A Post-Pandemic Bucket List (and What To Do In the Meantime)">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Photograph by Susanna Schrobsdorff 
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5918335/a-post-pandemic-bucket-list-and-what-to-do-in-the-meantime/">A Post-Pandemic Bucket List (and What To Do In the Meantime)</a></h2>
            
                      <p class="summary">What we want most when this is all over</p>
            
                </div>
            
            </article>      </li>
            <li id="5917061-item" class="item show" data-index="2">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5917061/covid-19-flu-season/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2020/12/GettyImages-922548094.jpg?quality=85&amp;crop=833px%2C0px%2C2848px%2C2848px&amp;resize=640%2C640&amp;strip">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/12/GettyImages-922548094.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1, https://api.time.com/wp-content/uploads/2020/12/GettyImages-922548094.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/12/GettyImages-922548094.jpg?quality=85&amp;w=486&amp;h=272&amp;crop=1 2x">
                          <img src="https://api.time.com/wp-content/uploads/2020/12/GettyImages-922548094.jpg?quality=85&amp;w=243&amp;h=136&amp;crop=1" loading="lazy" alt="What You Need to Know About COVID-19 and Flu">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Getty Images
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5917061/covid-19-flu-season/">What You Need to Know About COVID-19 and Flu</a></h2>
            
                      <p class="summary">Health experts say we could have a scary winter ahead as two respiratory infections, flu and COVID-19, collide</p>
            
                </div>
            
            </article>      </li>
            <li id="5914062-item" class="item show" data-index="3">
            <article class="slide">
                <div class="media">
                  <figure>
                    <a href="/5914062/medical-schools-coronavirus-pandemic/">
                        <picture>
                          <source media="(max-width: 767px)" srcset="https://api.time.com/wp-content/uploads/2020/11/eva-oleary-geisinger-medical-school.jpg?quality=85&amp;w=640&amp;h=640&amp;crop=1">
                          <source media="(min-width: 768px)" srcset="https://api.time.com/wp-content/uploads/2020/11/eva-oleary-geisinger-medical-school.jpg?quality=85&amp;crop=0px%2C209px%2C2400px%2C1350px&amp;resize=243%2C136&amp;strip, https://api.time.com/wp-content/uploads/2020/11/eva-oleary-geisinger-medical-school.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1 1.5x, https://api.time.com/wp-content/uploads/2020/11/eva-oleary-geisinger-medical-school.jpg?quality=85&amp;crop=0px%2C209px%2C2400px%2C1350px&amp;resize=486%2C272&amp;strip 2x">
                          <img src="https://api.time.com/wp-content/uploads/2020/11/eva-oleary-geisinger-medical-school.jpg?quality=85&amp;crop=0px%2C209px%2C2400px%2C1350px&amp;resize=243%2C136&amp;strip" loading="lazy" alt="How U.S. Medical Schools Are Training Post-Pandemic Doctors">
                        </picture>
                    </a>
                  </figure>
                    <div class="image-credit">
                        Photo-illustration by Eva O'Leary for TIME
                  </div>
                </div>
                <div class="content">
                  <p class="no-eyebrow"></p>
            
                  <h2 class="title"><a href="/5914062/medical-schools-coronavirus-pandemic/">How U.S. Medical Schools Are Training Post-Pandemic Doctors</a></h2>
            
                      <p class="summary">In February 2019, the Kaiser Permanente health system announced a new kind of medical school. The school would be built “from the ground up” to prepare students for the complexities of the U.S. medical system.</p>
            
                </div>
            
            </article>      </li>
        </ul>
        <hr>
      </div>        </section>




















  <section class="homepage-module coronavirus-widget-module" data-module_name="Coronavirus Widget">
    <h3 class="heading">Coronavirus Snapshot</h3>
    <div class="component coronavirus-widget">
      <img class="loading-circle hide" src="/img/loading-circle.gif">
    <div class="coronavirus-widget-data">
<table class="table us">
<tbody><tr class="table-head">
  <th class="bold">U.S. ▸</th>
  <th class="regular">Total</th>
  <th class="regular">14-day Trend</th>
</tr>
    <tr class="table-row">
      <th>Cases</th>
      <th class="numbers">30,671,844</th>
      <th class="numbers arrow_red">+29.6%
        <svg class="deltaArrow" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <marker id="arrow_red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: rgb(209, 35, 42)"></path>
          </marker>
          <marker id="arrow_green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: rgb(126, 173, 156)"></path>
          </marker>
          <marker id="arrow_gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: #808080"></path>
          </marker>
          </defs>
          <path d="M 2,21.5 C 2.5,21.5 21.5,21.5 22,2.5 " style="stroke: rgb(209, 35, 42); fill: none; stroke-width: 1" marker-end="url(#arrow_red)">
          </path>
        </svg>
      </th>
    </tr>
    <tr class="table-row">
      <th>Deaths</th>
      <th class="numbers">554,779</th>
      <th class="numbers arrow_red">+1.3%
        <svg class="deltaArrow" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <marker id="arrow_red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: rgb(209, 35, 42)"></path>
          </marker>
          <marker id="arrow_green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: rgb(126, 173, 156)"></path>
          </marker>
          <marker id="arrow_gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: #808080"></path>
          </marker>
          </defs>
          <path d="M 2,12.65 C 11.35,12.65 12.65,12.65 22,11.35 " style="stroke: rgb(209, 35, 42); fill: none; stroke-width: 1" marker-end="url(#arrow_red)">
          </path>
        </svg>
      </th>
    </tr>
</tbody></table>
<div class="maps">
<div class="map-item">
  <div class="map">
    <a href="https://time.com/5800901/coronavirus-map/">
      <div class="component lazy-image  
          
          
          " data-src="https://assets.time.com/interactives/dashboard_covid/screenshots/dashboard_map_us.png" data-crop="" data-alt="" data-title="" data-shop-image="false">
      
      <noscript>
        <div class="inner-container">
          <img src="https://assets.time.com/interactives/dashboard_covid/screenshots/dashboard_map_us.png" alt="" title="">
        </div>
      </noscript>
      
      <div class="inner-container js-inner-container ">
      </div>
      
      
      </div>
    </a>
  </div>
  <h3>U.S. Hotspots</h3>
  <div class="coronavirus-penta">
    <span class="penta-arrow"></span>
  </div>
</div>
<div class="map-item">
  <div class="map">
    <a href="https://time.com/5800901/coronavirus-map/">
      <div class="component lazy-image  
          
          
          " data-src="https://assets.time.com/interactives/dashboard_covid/screenshots/dashboard_map_world.png" data-crop="" data-alt="" data-title="" data-shop-image="false">
      
      <noscript>
        <div class="inner-container">
          <img src="https://assets.time.com/interactives/dashboard_covid/screenshots/dashboard_map_world.png" alt="" title="">
        </div>
      </noscript>
      
      <div class="inner-container js-inner-container ">
      </div>
      
      
      </div>
    </a>
  </div>
  <h3>Global Hotspots</h3>
  <div class="coronavirus-penta">
    <span class="penta-arrow"></span>
  </div>
</div>
</div>
<table class="table global">
<tbody><tr class="table-head">
  <th class="bold">Global ▸</th>
  <th class="regular">Total</th>
  <th class="regular">14-day Trend</th>
</tr>
    <tr class="table-row">
      <th>Cases</th>
      <th class="numbers">130,676,358</th>
      <th class="numbers arrow_red">+22.9%
        <svg class="deltaArrow" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <marker id="arrow_red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: rgb(209, 35, 42)"></path>
          </marker>
          <marker id="arrow_green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill:rgb(209, 35, 42)"></path>
          </marker>
          <marker id="arrow_gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: #808080"></path>
          </marker>
          </defs>
          <path d="M 2,21.5 C 2.5,21.5 21.5,21.5 22,2.5 " style="stroke:rgb(209, 35, 42); fill: none; stroke-width: 1" marker-end="url(#arrow_red)">
          </path>
        </svg>
      </th>
    </tr>
    <tr class="table-row">
      <th>Deaths</th>
      <th class="numbers">2,845,616</th>
      <th class="numbers arrow_red">+16.8%
        <svg class="deltaArrow" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <marker id="arrow_red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: rgb(209, 35, 42)"></path>
          </marker>
          <marker id="arrow_green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill:rgb(209, 35, 42)"></path>
          </marker>
          <marker id="arrow_gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" style="fill: #808080"></path>
          </marker>
          </defs>
          <path d="M 2,20.4 C 3.5999999999999996,20.4 20.4,20.4 22,3.6000000000000014 " style="stroke:rgb(209, 35, 42); fill: none; stroke-width: 1" marker-end="url(#arrow_red)">
          </path>
        </svg>
      </th>
    </tr>
</tbody></table>
</div>
</div>      </section>








</div>
  <footer class="main padding-24-top ">
          <div class="logo-container margin-0-auto">
            <a class="display-inline-block" href="/" aria-label="Logo"><svg itemprop="logo" width="90px" height="100%" preserveAspectRatio="xMinYMin meet" viewBox="0 0 98 32"><path fill="#e90606" d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"></path></svg></a>
          </div>        <div class="social-container margin-0-auto padding-24-tb display-flex rule-bottom" data-tracking-zone="footer">
              <span class="icon icon-facebook-circle-stroke social-stroke-icon color-accent margin-4-right ">
                  <a href="https://www.facebook.com/time" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.95 18c0 8.258-6.693 14.95-14.95 14.95S3.05 26.26 3.05 18 9.742 3.05 18 3.05 32.95 9.74 32.95 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M19.718 13.698c.433-.014.866-.004 1.3-.004h.18V11.57c-.232-.023-.473-.054-.716-.065-.445-.02-.89-.04-1.336-.03-.68.013-1.323.17-1.884.55-.644.435-.998 1.05-1.132 1.773-.057.3-.07.607-.08.912-.01.477-.002.953 0 1.43v.18h-2.16v2.373h2.147v5.966h2.622V18.7h2.134l.33-2.385h-.482c-.608.002-2.004 0-2.004 0s.006-1.177.02-1.687c.02-.7.46-.912 1.057-.932" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>            <span class="icon icon-instagram-circle-stroke social-stroke-icon color-accent margin-4-right ">
                  <a href="https://www.instagram.com/time/?hl=en" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.95 18c0 8.257-6.693 14.95-14.95 14.95S3.05 26.258 3.05 18 9.742 3.05 18 3.05 32.95 9.742 32.95 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M22.624 22c0 .344-.28.624-.623.624h-8.47c-.342 0-.62-.28-.62-.623v-5.13h1.218c-.07.29-.104.59-.104.9 0 2.07 1.677 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-.306-.038-.604-.108-.89h1.22V22zm-7.137-5.13c.356-.907 1.24-1.552 2.274-1.552 1.04 0 1.92.645 2.28 1.553.11.28.17.58.17.9 0 1.347-1.1 2.444-2.44 2.444-1.345 0-2.442-1.097-2.442-2.443 0-.314.06-.615.17-.89zm4.916-3.576c0-.19.154-.344.344-.344h1.49c.19 0 .344.154.344.344v1.49c0 .19-.15.344-.34.344h-1.49c-.19 0-.34-.154-.34-.344v-1.49zM22 11.592h-8.478c-1.065 0-1.93.865-1.93 1.93v8.48c0 1.064.865 1.93 1.93 1.93h8.48c1.065 0 1.93-.866 1.93-1.93v-8.48c0-1.065-.865-1.93-1.93-1.93z" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>            <span class="icon icon-twitter-circle-stroke social-stroke-icon color-accent margin-4-right ">
                  <a href="https://twitter.com/time" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.977 18c0 8.272-6.705 14.976-14.977 14.976S3.023 26.272 3.023 18C3.023 9.728 9.728 3.024 18 3.024S32.977 9.728 32.977 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M15.783 21.476c-1.48-.052-2.404-1.114-2.65-1.976.413.078.82.063 1.222-.037.01-.002.02-.01.04-.018-.8-.187-1.42-.616-1.848-1.307-.286-.46-.422-.962-.418-1.514.4.214.81.333 1.26.345-.607-.44-1.01-1.01-1.177-1.73-.164-.73-.057-1.42.306-2.07 1.54 1.813 3.492 2.81 5.872 2.973-.02-.113-.037-.21-.048-.31-.08-.67.054-1.295.416-1.86.454-.71 1.1-1.15 1.93-1.29.96-.156 1.796.117 2.495.795.046.045.085.06.15.045.586-.125 1.14-.335 1.657-.635l.04-.02h.02c-.225.664-.635 1.174-1.22 1.55.553-.06 1.08-.206 1.586-.426l.01.013c-.11.143-.215.29-.327.427-.302.373-.65.7-1.035.984-.034.025-.05.05-.05.09.016.424 0 .846-.053 1.266-.11.885-.352 1.73-.73 2.534-.39.833-.9 1.585-1.54 2.246-1.083 1.12-2.39 1.844-3.912 2.18-.52.115-1.05.173-1.585.19-1.64.046-3.16-.36-4.554-1.224l-.066-.043c.996.107 1.94-.02 2.85-.393.484-.197.93-.457 1.354-.79" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>            <span class="icon icon-pinterest-circle-stroke social-stroke-icon color-accent ">
                  <a href="https://www.pinterest.com/timemagazine" class="display-block " target="_blank" aria-label="Share on undefined">
              
                <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" tabindex="-1"><g fill-rule="evenodd" fill="none" stroke="null"><path d="M32.976 18c0 8.272-6.705 14.976-14.976 14.976-8.27 0-14.976-6.704-14.976-14.976C3.024 9.728 9.73 3.024 18 3.024S32.976 9.728 32.976 18" stroke-width="2" stroke="#B7B4B4"></path><path d="M17.162 20.54c-.012.038-.022.072-.03.105-.505 1.976-.562 2.415-1.08 3.332-.247.437-.525.85-.834 1.246-.034.044-.067.102-.137.088-.07-.01-.08-.08-.08-.14-.08-.6-.13-1.2-.11-1.81.03-.79.13-1.06 1.15-5.34.02-.06 0-.12-.02-.18-.24-.65-.29-1.32-.08-2 .46-1.46 2.12-1.57 2.41-.36.18.75-.292 1.72-.654 3.16-.3 1.19 1.1 2.04 2.298 1.17 1.106-.8 1.534-2.72 1.45-4.08-.16-2.71-3.13-3.29-5.02-2.42-2.16 1-2.65 3.68-1.675 4.91.126.157.22.25.18.41-.06.244-.117.49-.186.735-.05.184-.2.25-.384.175-.36-.148-.66-.377-.9-.678-.83-1.026-1.07-3.057.03-4.776 1.212-1.906 3.47-2.676 5.534-2.443 2.468.28 4.02 1.964 4.316 3.873.13.87.035 3.012-1.186 4.53-1.404 1.74-3.68 1.854-4.73.785-.08-.08-.146-.18-.225-.272" fill="#B7B4B4"></path></g></svg>
              
                  </a>
              </span>        </div>
        <nav class="footer-links margin-0-auto padding-16-tb rule-bottom" data-tracking-zone="footer" aria-label="Footer Navigation">
          <section>
            <a href=""></a>
            <ul class="margin-8-top">
                <li>
                  <a href="https://time.com">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/us/">
                    U.S.
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/politics/">
                    Politics
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/world/">
                    World
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/health/">
                    Health
                  </a>
                </li>
                <li>
                  <a href="https://time.com/nextadvisor/?utm_source=time&amp;utm_medium=referral&amp;utm_campaign=time_footer">
                    Personal Finance by NextAdvisor
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/business/">
                    Business
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/tech/">
                    Tech
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/entertainment/">
                    Entertainment
                  </a>
                </li>
            </ul>
          </section>
          <section>
            <a href=""></a>
            <ul class="margin-8-top">
                <li>
                  <a href="https://time.com/section/ideas/">
                    Ideas
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/science/">
                    Science
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/history/">
                    History
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/newsfeed/">
                    Newsfeed
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/sports/">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="https://time.com/magazine">
                    Magazine
                  </a>
                </li>
                <li>
                  <a href="https://time.com/vault/">
                    The TIME Vault
                  </a>
                </li>
                <li>
                  <a href="https://www.timeforkids.com/">
                    TIME For Kids
                  </a>
                </li>
                <li>
                  <a href="https://www.timeedge.com/openhouse">
                    TIME Edge
                  </a>
                </li>
            </ul>
          </section>
          <section>
            <a href=""></a>
            <ul class="margin-8-top">
                <li>
                  <a href="https://time.com/collection/video/">
                    Video
                  </a>
                </li>
                <li>
                  <a href="https://time.com/time-masthead/">
                    Masthead
                  </a>
                </li>
                <li>
                  <a href="https://time.com/newsletters/?source=TD_Footer_Link">
                    Newsletters
                  </a>
                </li>
                <li>
                  <a href="https://time.com/subscribe-footer-time" class="subx_track_952 subscribe-link" data-key="qobuskf@g" data-event="4" data-location="footer">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="https://time.com/give-a-gift/">
                    Give a Gift
                  </a>
                </li>
                <li>
                  <a href="https://timecoverstore.com/">
                    Shop the TIME Store
                  </a>
                </li>
                <li>
                  <a href="https://time.com/longform/join-time/">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://time.com/section/press-room/">
                    Press Room
                  </a>
                </li>
                <li>
                  <a href="mailto:feedback@time.com">
                    Contact the Editors
                  </a>
                </li>
            </ul>
          </section>
          <section>
            <a href=""></a>
            <ul class="margin-8-top">
                <li>
                  <a href="https://support.time.com/hc/en-us">
                    U.S. &amp; Canada Customer Care
                  </a>
                </li>
                <li>
                  <a href="https://www.subscription.co.uk/time/europe/solo/Account/Login">
                    EMEA and Latin America Customer Care
                  </a>
                </li>
                <li>
                  <a href="https://www.subscription.co.uk/time/asia/solo/Account/Login">
                    Asia Pacific Customer Care
                  </a>
                </li>
                <li>
                  <a href="https://www.parsintl.com/publication/time">
                    Reprints and Permissions
                  </a>
                </li>
                <li>
                  <a href="https://time.com/html-sitemap/">
                    Site Map
                  </a>
                </li>
            </ul>
          </section>
        </nav>
    <div class="footer-legal padding-16-tb text-align-center">
      © 2021 TIME USA, LLC. All Rights Reserved. Use of this site constitutes acceptance of our <a href="https://time.com/privacy/privacy_terms_service.html">Terms of Service</a>, <a href="https://time.com/privacy/generic_privacy_new.html">Privacy Policy</a> (<a href="https://time.com/privacy/generic_privacy_new.html#_Toc26698205">Your California Privacy Rights</a>) and <a href="https://privacyportal-cdn.onetrust.com/dsarwebform/ec48745c-0b96-47da-aa41-f959ab79a818/e1de9460-d63a-4d4c-94d8-e876f7bbbb75.html" class="grey-link">Do Not Sell My Personal Information</a>.<br> TIME may receive compensation for some links to products and services on this website. Offers may be subject to change without notice.<br> This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy </a> <a href="https://policies.google.com/terms"> Terms of Service </a> apply. | <a href="https://privacyportal-cdn.onetrust.com/dsarwebform/ec48745c-0b96-47da-aa41-f959ab79a818/a2151ce4-27de-4df6-a417-529f0887a6ab.html" class="util eu-data-subject-requests">EU Data Subject Requests</a>
    </div>
  </footer>

<div id="page-gtm-values">
  <div class="keyvals" data-ad_tags="" data-affiliate_link_count="0" data-content_author_name="" data-content_cms_sub_category="" data-content_cms_id="5232653" data-content_featured_image="" data-content_headline="TIME Homepage" data-content_is_post="index" data-content_modified_date="" data-content_published_date="2018-04-09T13:46:28.000Z" data-content_shown_on_platform="own" data-content_type="homepage" data-path="" data-referrer="" data-search="" data-title="TIME Homepage" data-us_user="false" data-time_tas_userid="false" data-time_userloginstatus="false" data-time_usertype="anonymous" data-content_cms_category="homepage" data-content_cms_tags="" data-content_cms_terms="homepage" data-content_syndicated="false" data-content_syndicated_brand="" data-content_syndicated_url="" data-content_nlp_sentiment_label="" data-content_nlp_sentiment_score="" data-content_nlp_sentiment_magnitude="" data-content_nlp_entities="" data-content_nlp_payload="" data-content_nlp_categories="" data-user_region="eu"></div>
</div>
  <div id="site-components" data-async="feed,dropdown,search-results-form,embed-playbuzz,embed-facebook,embed-instagram,embed-twitter,embed-omnivirt,image-link,collection-navigation,newsletter-signup-form,multi-newsletter-signup-form,newsletter-thank-you-notice,lead-gen,image-link,embed-ap-interactive,expandable-table,mobile-carousel,image-carousel,mobile-anchor-recirc,meter-wall,subscription-cta,subscription-checkout,subscription-offer-card,video-collection-player,video-collection-grid,nativo-campaign-hub,video-collection-posters,video-jw,coronavirus-widget,line-clamp,popup,video-youtube,taas-iframe,countdown-clock" data-sync="navigation,lazy-image,image-new"></div>

<script type="text/javascript" async="" src="/dist/authentication.js"></script>
<script type="text/javascript" async="" src="/dist/homepage.js"></script>


<iframe name="__cmpLocator" style="display: none;"></iframe><iframe style="display:none;height:0;opacity:0;visibility:hidden;border:0;width:0;height:0;" name="__uspapiLocator"></iframe><iframe name="__tcfapiLocator" title="CMP Locator" style="display: none;"></iframe><div id="onetrust-consent-sdk"><div class="onetrust-pc-dark-filter ot-hide ot-fade-in"></div><div id="onetrust-pc-sdk" class="otPcPanel ot-hide ot-fade-in ot-leg-opt-out ot-leg-btn" role="dialog" aria-labelledby="ot-pc-title" aria-modal="true" lang="en"><!-- PC Header --><div class="ot-pc-header"><div class="ot-pc-logo" role="img" aria-label="Company Logo" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/ec48745c-0b96-47da-aa41-f959ab79a818/ed688211-ecad-444b-9f06-f330cf776496/ccbda931-3f8b-48e3-9924-add05206b1ea/ot-logo.png&quot;);
                background-position: left"></div></div><div id="ot-pc-content" class="ot-pc-scrollbar"><h3 id="ot-pc-title">About Your Privacy</h3><div id="ot-pc-desc">We process your data to deliver content or advertisements and measure the delivery of such content or advertisements to extract insights about our website. We share this information with our partners on the basis of consent and legitimate interest. You may exercise your right to consent or object to a legitimate interest, based on a specific purpose below or at a partner level in the link under each purpose. These choices will be signaled to our vendors participating in the Transparency and Consent Framework.
            <br><a href="https://cookiepedia.co.uk/giving-consent-to-cookies" class="privacy-notice-link" rel="noopener" target="_blank" aria-label="More information about your privacy, opens in a new window">More information</a></div><button id="accept-recommended-btn-handler">Allow All</button><section class="ot-sdk-row ot-cat-grp"><h3 id="ot-category-title"> Manage Consent Preferences</h3><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0001">Strictly Necessary Cookies</h4><div class="ot-always-active">Always Active</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. &nbsp; &nbsp;You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0002"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0002" aria-labelledby="ot-header-id-C0002"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0002">Performance Cookies</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-C0002" id="ot-group-id-C0002" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="C0002" checked="" aria-labelledby="ot-header-id-C0002"> <label class="ot-switch" for="ot-group-id-C0002"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Performance Cookies</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0002">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. &nbsp; &nbsp;All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0003"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0003" aria-labelledby="ot-header-id-C0003"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0003">Functional Cookies</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-C0003" id="ot-group-id-C0003" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="C0003" checked="" aria-labelledby="ot-header-id-C0003"> <label class="ot-switch" for="ot-group-id-C0003"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Functional Cookies</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0003">These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. &nbsp; &nbsp;If you do not allow these cookies then some or all of these services may not function properly.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0004"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0004" aria-labelledby="ot-header-id-C0004"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0004">Targeting Cookies</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-C0004" id="ot-group-id-C0004" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="C0004" checked="" aria-labelledby="ot-header-id-C0004"> <label class="ot-switch" for="ot-group-id-C0004"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Targeting Cookies</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0004">Targeting cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertising on other sites. They are based on uniquely identifying your browser and internet device. You can turn off the use of cookies for targeted advertising here. When the button is green, targeted cookies are on. When the button is red, targeting cookies have been turned off.

</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="C0005"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0005" aria-labelledby="ot-header-id-C0005"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-C0005">Social Media Cookies</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-C0005" id="ot-group-id-C0005" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="C0005" checked="" aria-labelledby="ot-header-id-C0005"> <label class="ot-switch" for="ot-group-id-C0005"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Social Media Cookies</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0005">These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks. They are capable of tracking your browser across other sites and building up a profile of your interests. This may impact the content and messages you see on other websites you visit. &nbsp; &nbsp;If you do not allow these cookies you may not be able to use or see these sharing tools.</p></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IABV2_1"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-IABV2_1" aria-labelledby="ot-header-id-IABV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IABV2_1">Store and/or access information on a device</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-IABV2_1" id="ot-group-id-IABV2_1" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="IABV2_1" checked="" aria-labelledby="ot-header-id-IABV2_1"> <label class="ot-switch" for="ot-group-id-IABV2_1"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Store and/or access information on a device</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IABV2_1">Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IABV2_1">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="STACK42"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-STACK42" aria-labelledby="ot-header-id-STACK42"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-STACK42">Personalised ads and content, ad and content measurement, audience insights and product development</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-STACK42" id="ot-group-id-STACK42" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="STACK42" checked="" aria-labelledby="ot-header-id-STACK42"> <label class="ot-switch" for="ot-group-id-STACK42"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Personalised ads and content, ad and content measurement, audience insights and product development</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_2"><h5>Select basic ads</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_2" aria-checked="false" role="switch" data-optanongroupid="IABV2_2" class="cookie-subgroup-handler" aria-label="Select basic ads" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_2"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Ads can be shown to you based on the content you’re viewing, the app you’re using, your approximate location, or your device type.</p><div class="ot-leg-btn-container" data-group-id="IABV2_2" data-el-id="IABV2_2-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_3"><h5>Create a personalised ads profile</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_3" aria-checked="false" role="switch" data-optanongroupid="IABV2_3" class="cookie-subgroup-handler" aria-label="Create a personalised ads profile" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_3"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">A profile can be built about you and your interests to show you personalised ads that are relevant to you.</p><div class="ot-leg-btn-container" data-group-id="IABV2_3" data-el-id="IABV2_3-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_4"><h5>Select personalised ads</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_4" aria-checked="false" role="switch" data-optanongroupid="IABV2_4" class="cookie-subgroup-handler" aria-label="Select personalised ads" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_4"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Personalised ads can be shown to you based on a profile about you.</p><div class="ot-leg-btn-container" data-group-id="IABV2_4" data-el-id="IABV2_4-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_5"><h5>Create a personalised content profile</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_5" aria-checked="false" role="switch" data-optanongroupid="IABV2_5" class="cookie-subgroup-handler" aria-label="Create a personalised content profile" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_5"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">A profile can be built about you and your interests to show you personalised content that is relevant to you.</p><div class="ot-leg-btn-container" data-group-id="IABV2_5" data-el-id="IABV2_5-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_6"><h5>Select personalised content</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_6" aria-checked="false" role="switch" data-optanongroupid="IABV2_6" class="cookie-subgroup-handler" aria-label="Select personalised content" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_6"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Personalised content can be shown to you based on a profile about you.</p><div class="ot-leg-btn-container" data-group-id="IABV2_6" data-el-id="IABV2_6-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_7"><h5>Measure ad performance</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_7" aria-checked="false" role="switch" data-optanongroupid="IABV2_7" class="cookie-subgroup-handler" aria-label="Measure ad performance" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_7"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">The performance and effectiveness of ads that you see or interact with can be measured.</p><div class="ot-leg-btn-container" data-group-id="IABV2_7" data-el-id="IABV2_7-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_8"><h5>Measure content performance</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_8" aria-checked="false" role="switch" data-optanongroupid="IABV2_8" class="cookie-subgroup-handler" aria-label="Measure content performance" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_8"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">The performance and effectiveness of content that you see or interact with can be measured.</p><div class="ot-leg-btn-container" data-group-id="IABV2_8" data-el-id="IABV2_8-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_9"><h5>Apply market research to generate audience insights</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_9" aria-checked="false" role="switch" data-optanongroupid="IABV2_9" class="cookie-subgroup-handler" aria-label="Apply market research to generate audience insights" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_9"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Market research can be used to learn more about the audiences who visit sites/apps and view ads.</p><div class="ot-leg-btn-container" data-group-id="IABV2_9" data-el-id="IABV2_9-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-subgrp-cntr"><ul class="ot-subgrps"><li class="ot-subgrp" data-optanongroupid="IABV2_10"><h5>Develop and improve products</h5><div class="ot-tgl-cntr ot-subgrp-tgl"><div class="ot-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-IABV2_10" aria-checked="false" role="switch" data-optanongroupid="IABV2_10" class="cookie-subgroup-handler" aria-label="Develop and improve products" checked=""> <label class="ot-switch" for="ot-sub-group-id-IABV2_10"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Switch Label</span></label> </div></div><p class="ot-subgrp-desc">Your data can be used to improve existing systems and software, and to develop new products</p><div class="ot-leg-btn-container" data-group-id="IABV2_10" data-el-id="IABV2_10-leg-out" is-vendor="false">
                <button class="ot-obj-leg-btn-handler ot-leg-int-enabled ot-inactive-leg-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <path fill="#FFFFFF" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                   <span>Object to Legitimate Interests
                    </span>
                </button>
                <button class="ot-remove-objection-handler" style="color:#E00606; display:none;">Remove Objection</button>
            </div>
    </li></ul></div><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="STACK42">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISFV2_1"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-ISFV2_1" aria-labelledby="ot-header-id-ISFV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISFV2_1">Use precise geolocation data</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-ISFV2_1" id="ot-group-id-ISFV2_1" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="ISFV2_1" checked="" aria-labelledby="ot-header-id-ISFV2_1"> <label class="ot-switch" for="ot-group-id-ISFV2_1"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Use precise geolocation data</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISFV2_1">Your precise geolocation data can be used in support of one or more purposes. This means your location can be accurate to within several meters.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISFV2_1">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISFV2_2"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-ISFV2_2" aria-labelledby="ot-header-id-ISFV2_2"></button><!-- Accordion header --><div class="ot-acc-hdr"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISFV2_2">Actively scan device characteristics for identification</h4><div class="ot-tgl"><input type="checkbox" name="ot-group-id-ISFV2_2" id="ot-group-id-ISFV2_2" aria-checked="true" role="switch" class="category-switch-handler" data-optanongroupid="ISFV2_2" checked="" aria-labelledby="ot-header-id-ISFV2_2"> <label class="ot-switch" for="ot-group-id-ISFV2_2"><span class="ot-switch-nob"></span> <span class="ot-label-txt">Actively scan device characteristics for identification</span></label> </div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISFV2_2">Your device can be identified based on a scan of your device's unique combination of characteristics.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISFV2_2">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISPV2_1"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-ISPV2_1" aria-labelledby="ot-header-id-ISPV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISPV2_1">Ensure security, prevent fraud, and debug</h4><div class="ot-always-active">Always Active</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISPV2_1">Your data can be used to monitor for and prevent fraudulent activity, and ensure systems and processes work properly and securely.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISPV2_1">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="ISPV2_2"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-ISPV2_2" aria-labelledby="ot-header-id-ISPV2_2"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-ISPV2_2">Technically deliver ads or content</h4><div class="ot-always-active">Always Active</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-ISPV2_2">Your device can receive and send information that allows you to see and interact with ads and content.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="ISPV2_2">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_1"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-IFEV2_1" aria-labelledby="ot-header-id-IFEV2_1"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IFEV2_1">Match and combine offline data sources</h4><div class="ot-always-active">Always Active</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_1">Data from offline data sources can be combined with your online activity in support of one or more purposes</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IFEV2_1">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_2"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-IFEV2_2" aria-labelledby="ot-header-id-IFEV2_2"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IFEV2_2">Link different devices</h4><div class="ot-always-active">Always Active</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_2">Different devices can be determined as belonging to you or your household in support of one or more of purposes.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IFEV2_2">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><div class="ot-accordion-layout ot-cat-item" data-optanongroupid="IFEV2_3"><button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-IFEV2_3" aria-labelledby="ot-header-id-IFEV2_3"></button><!-- Accordion header --><div class="ot-acc-hdr ot-always-active-group"><div class="ot-plus-minus"><span></span><span></span></div><h4 class="ot-cat-header" id="ot-header-id-IFEV2_3">Receive and use automatically-sent device characteristics for identification</h4><div class="ot-always-active">Always Active</div></div><!-- accordion detail --><div class="ot-acc-grpcntr ot-acc-txt"><p class="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-IFEV2_3">Your device might be distinguished from other devices based on information it automatically sends, such as IP address or browser type.</p><div class="ot-vlst-cntr"><button class="ot-link-btn category-vendors-list-handler" data-parent-id="IFEV2_3">List of IAB Vendors&lrm;</button><a href="https://tcf.cookiepedia.co.uk?lang=en" rel="noopener" target="_blank">&nbsp;|&nbsp;View Full Legal Text&nbsp;<span class="ot-scrn-rdr">Opens in a new window</span></a></div></div></div><!-- Non Accordion Group --><!-- Accordion Group section starts --><!-- Accordion Group section ends --></section></div><section id="ot-pc-lst" class="ot-hide ot-pc-scrollbar"><div id="ot-pc-hdr"><h3 id="ot-lst-title"><button class="ot-link-btn back-btn-handler" aria-label="Back"><svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve"><title>Back Button</title><g><path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
      l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
      c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
      s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
      L213.13,222.409z"></path></g></svg></button> <span>Back</span></h3><div class="ot-lst-subhdr"><div class="ot-search-cntr"><p role="status" class="ot-scrn-rdr"></p><label for="vendor-search-handler" class="ot-scrn-rdr">Vendor Search</label> <input id="vendor-search-handler" type="text" placeholder="Search..." name="vendor-search-handler"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110"><title>Search Icon</title><path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
        s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></div><div class="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xml:space="preserve"><title>Filter Icon</title><g><path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
  c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
  c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
  C402.765,25.895,404.093,19.231,400.858,11.427z"></path></g></svg></button></div><div id="ot-anchor"></div><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div class="ot-fltr-scrlcnt ot-pc-scrollbar"><div class="ot-fltr-opts"><div class="ot-fltr-opt"><div class="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" class="category-filter-handler"> <label for="chkbox-id"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div></div></div><div class="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></div></div><section id="ot-lst-cnt" class="ot-pc-scrollbar"><div id="ot-sel-blk"><div class="ot-sel-all"><div class="ot-sel-all-hdr"><span class="ot-consent-hdr">Consent</span> <span class="ot-li-hdr">Leg.Interest</span></div><div class="ot-sel-all-chkbox"><div class="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false"> <label for="select-all-hosts-groups-handler"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div><div class="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false"> <label for="select-all-vendor-groups-handler"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div><div class="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false"> <label for="select-all-vendor-leg-handler"><span class="ot-label-txt">checkbox label</span></label> <span class="ot-label-status">label</span></div></div></div></div><div class="ot-sdk-row"><div class="ot-sdk-column"><ul id="ot-ven-lst"></ul></div></div></section></section><!-- Footer buttons and logo --><div class="ot-pc-footer"><div class="ot-btn-container"> <button class="save-preference-btn-handler onetrust-close-btn-handler">Confirm My Choices</button></div><div class="ot-pc-footer-logo"><a href="https://onetrust.com/poweredbyonetrust" target="_blank" rel="noopener noreferrer" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg&quot;)" aria-label="Powered by OneTrust Opens in a new window"></a></div></div><!-- Cookie subgroup container --><!-- Vendor list link --><!-- Cookie lost link --><!-- Toggle HTML element --><!-- Checkbox HTML --><!-- Arrow SVG element --><!-- plus minus--><!-- Accordion basic element --><span class="ot-scrn-rdr" aria-atomic="true" aria-live="polite"></span><iframe class="ot-text-resize" title="onetrust-text-resize" style="position:absolute;top:-50000px;width:100em;" aria-hidden="true"></iframe></div><div id="ot-sdk-btn-floating" title="Manage Preferences" class="ot-floating-button"><div class="ot-floating-button__front"><button type="button" class="ot-floating-button__open"><svg role="presentation" xmlns="http://www.w3.org/2000/svg"><path class="ot-floating-button__svg-fill" d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z" fill="#FFF" fill-rule="evenodd"></path></svg></button></div><div class="ot-floating-button__back"><button type="button" class="ot-floating-button__close"><!--?xml version="1.0" encoding="UTF-8"?--> <svg role="presentation" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Banner_02" class="ot-floating-button__svg-fill" transform="translate(-318.000000, -725.000000)" fill="#ffffff" fill-rule="nonzero"><g id="Group-2" transform="translate(305.000000, 712.000000)"><g id="icon/16px/white/close"><polygon id="Line" points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon><polygon id="Line" transform="translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) " points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon></g></g></g></g></svg></button></div></div></div></body></html>
`, "text/html");
 
const lists = parseDoc.querySelectorAll(".homepage-module.latest ol li")

const arr = [];

lists.forEach(list => {
    const abc = list.querySelector(".title a");
    const link = `https://time.com${abc.getAttribute("href")}`;

    const obj = {
        title : abc.textContent,
        link: link 
    }

    arr.push(obj);
    
    
})

console.log(arr);

