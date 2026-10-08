(function () {
  "use strict";

  var measurementId = "G-NT0NEBJD2S";
  var storageKey = "rscv_guide_analytics_consent_v1";
  var choice = null;

  try {
    choice = window.localStorage.getItem(storageKey);
  } catch (error) {
    // If storage is unavailable, ask on each page and keep the choice in memory.
  }

  function updateGoogleConsent(granted) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

    if (!window.__rscvGuideGoogleTagLoaded) {
      window.gtag("js", new Date());
      window.gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });

      var tag = document.createElement("script");
      tag.async = true;
      tag.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
      document.head.appendChild(tag);
      window.__rscvGuideGoogleTagLoaded = true;
    }

    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });

    if (granted && !window.__rscvGuideGoogleAnalyticsConfigured) {
      window.gtag("config", measurementId, {
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
      window.__rscvGuideGoogleAnalyticsConfigured = true;
    }
  }

  function saveChoice(granted) {
    choice = granted ? "accepted" : "rejected";
    try {
      window.localStorage.setItem(storageKey, choice);
    } catch (error) {
      // The current page still respects the choice if storage is unavailable.
    }
    if (window.__rscvGuideGoogleTagLoaded) updateGoogleConsent(granted);
    else if (granted) updateGoogleConsent(true);
    banner.hidden = true;
    settings.hidden = false;
  }

  var banner = document.createElement("aside");
  banner.className = "analytics-consent";
  banner.setAttribute("aria-label", "Analytics privacy choice");
  banner.setAttribute("aria-live", "polite");
  banner.hidden = choice === "accepted" || choice === "rejected";
  banner.innerHTML = '<p>We use Google Analytics to understand how people use these resume guides. Analytics runs only if you accept. Read our <a href="https://rockstarcv.com/privacy-policy/">privacy policy</a>.</p><div class="analytics-consent__actions"><button type="button" data-choice="accepted">Accept analytics</button><button type="button" data-choice="rejected">Reject analytics</button></div>';

  var settings = document.createElement("button");
  settings.type = "button";
  settings.className = "analytics-settings";
  settings.textContent = "Privacy settings";
  settings.setAttribute("aria-label", "Change analytics privacy choice");
  settings.hidden = !banner.hidden;

  banner.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-choice]");
    if (button) saveChoice(button.getAttribute("data-choice") === "accepted");
  });
  settings.addEventListener("click", function () {
    banner.hidden = false;
    settings.hidden = true;
    banner.querySelector("button").focus();
  });

  document.body.appendChild(banner);
  document.body.appendChild(settings);

  if (choice === "accepted") updateGoogleConsent(true);
}());
