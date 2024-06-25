function setupIframeFocusDetection() {
    console.log('Iframe Focus Detection Setup');
    window.addEventListener('blur', function() {
        console.log('Window blurred');
        setTimeout(function() {
            var activeElement = document.activeElement;
            console.log('Active Element:', activeElement);
            if (activeElement && activeElement.tagName === 'IFRAME') {
                console.log('Iframe detected');
                pushIframeDetailsToDataLayer(activeElement);
            }
        }, 0);
    });
}

function pushIframeDetailsToDataLayer(iframe) {
    var iframeSrc = iframe.getAttribute('src');
    var iframeId = iframe.getAttribute('id');
    var iframeClass = iframe.getAttribute('class');
    
    console.log('Pushing to dataLayer:', {iframeSrc, iframeId, iframeClass});
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'gggg',
        iFrame_src: iframeSrc || '',
        iFrame_id: iframeId || '',
        iFrame_class: iframeClass || '',
        baseURL: window.location.href,
        Keys: '' 
    });
}

setupIframeFocusDetection();
