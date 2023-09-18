window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID);