(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('js/sw.js');
    }
    document.addEventListener('DOMContentLoaded', function () {
        //
    });
});