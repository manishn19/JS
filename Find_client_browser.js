// check browser
var browser = '';
var browserVersion = 0;
if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'opera';
} else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    browser = 'MSIE';
} else if (/Navigator[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'netscape';
} else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'chrome';
} else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'safari';
    /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
    browserVersion = new Number(RegExp.$1);
} else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browser = 'firefox';
}
if(browserVersion === 0){
    browserVersion = parseFloat(new Number(RegExp.$1));
}
var d = document.getElementById("partner_page");
d.className += ' '+browser;
