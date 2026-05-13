(function () {
    /* ── Blood Drips ─────────────────────────────────────────────── */
    var dripsData = [
        { left:  '2%', h: 72,  delay: 0,   dur: 9  },
        { left:  '8%', h: 48,  delay: 3.2, dur: 11 },
        { left: '16%', h: 98,  delay: 1.1, dur: 8  },
        { left: '25%', h: 58,  delay: 4.6, dur: 10 },
        { left: '36%', h: 82,  delay: 0.4, dur: 13 },
        { left: '48%', h: 42,  delay: 2.3, dur: 9  },
        { left: '59%', h: 115, delay: 3.8, dur: 10 },
        { left: '70%', h: 63,  delay: 1.7, dur: 12 },
        { left: '80%', h: 88,  delay: 0.8, dur: 8  },
        { left: '90%', h: 52,  delay: 2.8, dur: 11 },
        { left: '97%', h: 76,  delay: 4.1, dur: 9  },
    ];

    var container = document.createElement('div');
    container.className = 'blood-drips-container';
    document.body.appendChild(container);

    dripsData.forEach(function (d) {
        var drip = document.createElement('div');
        drip.className = 'blood-drip';
        var w = (2 + Math.random() * 2.5).toFixed(1);
        drip.style.left            = d.left;
        drip.style.width           = w + 'px';
        drip.style.animationDelay  = d.delay + 's';
        drip.style.animationDuration = d.dur + 's';
        drip.style.setProperty('--drip-h', d.h + 'px');
        container.appendChild(drip);
    });

    /* ── Click Splatter ──────────────────────────────────────────── */
    document.addEventListener('click', function (e) {
        var count = 3 + Math.floor(Math.random() * 4);
        for (var i = 0; i < count; i++) {
            (function (idx) {
                var splat = document.createElement('div');
                splat.className = 'blood-splat';

                var size    = 14 + Math.random() * 34;
                var aspect  = 0.55 + Math.random() * 0.9;
                var ox      = (Math.random() - 0.5) * 36;
                var oy      = (Math.random() - 0.5) * 36;
                var rot     = Math.random() * 360;

                splat.style.left             = (e.clientX + ox) + 'px';
                splat.style.top              = (e.clientY + oy) + 'px';
                splat.style.width            = size + 'px';
                splat.style.height           = (size * aspect) + 'px';
                splat.style.animationDelay   = (idx * 0.05) + 's';
                splat.style.setProperty('--rot', rot + 'deg');

                document.body.appendChild(splat);
                setTimeout(function () { splat.remove(); }, 1100);
            })(i);
        }
    });
})();
