// chrome.webRequest.onBeforeRequest.addListener(
//     (details) => {
//         const url = details.url
//         const filters = ['googleadservices', 'googlesyndication', 'g.doubleclick']
//         for (const filter of filters) {
//             if (url.indexOf(filter) != -1) {
//                 return {
//                     cancel: true
//                 }
//             }
//         }
//         return {
//             cancel: false
//         }
//     }, 
//     {urls: ['<all_urls>', "*://*.googleadservices.com/*", '*://*.tpc.googlesyndication.com/*', "*://*.g.doubleclick.net/*"]}
//     ['blocking']
// )
browser.onBeforeRequest.addListener(
    (details) => {
        console.log(details);
    },
    {},
    ['blocking']
)