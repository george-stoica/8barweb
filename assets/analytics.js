/* 8bar Systems — GA4 + Consent Mode v2, consent-gated.
   Loaded once per page in <head>. Runs before the GA library so the
   denied-by-default consent state is registered first. No tracking and
   no cookies until the visitor accepts. */
(function () {
  var GA_ID = 'G-S4D0E439Q7';
  var CONSENT_KEY = 'eightbar_ga_consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  // Everything denied -> cookieless until the visitor opts in.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  gtag('js', new Date());
  // We send page_view manually so it stays gated on consent.
  gtag('config', GA_ID, { send_page_view: false });

  var granted = localStorage.getItem(CONSENT_KEY) === 'granted';

  // Returning visitor who already accepted -> upgrade silently, no banner.
  if (granted) {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }

  // Inject the GA library; URL derives from the single ID source.
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  function sendPageView() {
    gtag('event', 'page_view', {
      page_path: location.pathname,
      page_location: location.href,
      page_title: document.title
    });
  }
  window.trackPageView = sendPageView;

  // Count this page load only if consent was already granted.
  if (granted) sendPageView();

  // Cookie consent banner — injected so the page markup stays content-only.
  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem(CONSENT_KEY)) return; // already decided

    var banner = document.createElement('div');
    banner.id = 'eightbar-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.style.cssText =
      'position:fixed;bottom:0;left:0;right:0;z-index:9999;' +
      'background:#0E0E0D;border-top:1px solid #3D3D3B;' +
      'padding:16px clamp(20px,4vw,56px);' +
      'display:flex;flex-wrap:wrap;align-items:center;gap:14px;' +
      "font-family:'Inter',Helvetica,Arial,sans-serif;font-size:14px;color:#9C9A92;";
    banner.innerHTML =
      '<span style="flex:1;min-width:240px;line-height:1.5;">' +
        'We use cookies to understand how visitors use this site and to improve it.' +
      '</span>' +
      '<div style="display:flex;gap:10px;flex-shrink:0;">' +
        '<button id="eightbar-cookie-decline" style="background:transparent;border:1px solid #3D3D3B;color:#9C9A92;padding:9px 20px;border-radius:2px;cursor:pointer;font-size:13px;font-weight:600;font-family:\'JetBrains Mono\',\'Courier New\',ui-monospace,monospace;letter-spacing:.04em;">Decline</button>' +
        '<button id="eightbar-cookie-accept" style="background:transparent;border:1px solid #C8944A;color:#C8944A;padding:9px 20px;border-radius:2px;cursor:pointer;font-size:13px;font-weight:600;font-family:\'JetBrains Mono\',\'Courier New\',ui-monospace,monospace;letter-spacing:.04em;">Accept</button>' +
      '</div>';
    document.body.appendChild(banner);

    document.getElementById('eightbar-cookie-accept').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'granted');
      banner.remove();
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
      sendPageView();
    });

    document.getElementById('eightbar-cookie-decline').addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'denied'); // 'denied' is already the default
      banner.remove();
    });
  });
})();
