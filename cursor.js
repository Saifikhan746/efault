(function () {
    var cursor = document.getElementById('custom-cursor');
    var idleTimer = null;
    var IDLE_MS = 1500;

    function showIdle() {
        document.body.style.cursor = 'none';
        cursor.style.display = 'block';
    }

    function showNormal() {
        document.body.style.cursor = '';
        cursor.style.display = 'none';
    }

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top  = e.clientY + 'px';

        showNormal();

        clearTimeout(idleTimer);
        idleTimer = setTimeout(showIdle, IDLE_MS);
    });

}());
