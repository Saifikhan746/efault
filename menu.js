(function () {
    /* ── Inject SVG fractal-noise filter ─────────────────────────── */
    var svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgEl.setAttribute('style', 'display:none;position:absolute;');
    svgEl.innerHTML =
        '<defs>' +
          '<filter id="rdr-torn" x="-6%" y="-2%" width="112%" height="104%">' +
            '<feTurbulence type="fractalNoise" baseFrequency="0.04 0.02" ' +
              'numOctaves="5" seed="12" result="noise"/>' +
            '<feDisplacementMap in="SourceGraphic" in2="noise" ' +
              'scale="14" xChannelSelector="R" yChannelSelector="G"/>' +
          '</filter>' +
        '</defs>';
    document.body.appendChild(svgEl);

    /* ── Wrap panel in filter container ─────────────────────────── */
    var panel = document.querySelector('.rdr-menu-panel');
    if (panel) {
        var wrap = document.createElement('div');
        wrap.className = 'rdr-menu-wrap';
        panel.parentNode.insertBefore(wrap, panel);
        wrap.appendChild(panel);

        /* Blood drips along the top of the panel */
        var dripsData = [
            { left:  '5%', h: 90,  w: 2, dur: 7,   delay: 0    },
            { left: '12%', h: 140, w: 3, dur: 9.5, delay: 1.8  },
            { left: '22%', h: 65,  w: 2, dur: 6.5, delay: 3.4  },
            { left: '32%', h: 110, w: 4, dur: 8,   delay: 0.6  },
            { left: '44%', h: 50,  w: 2, dur: 7.5, delay: 4.2  },
            { left: '55%', h: 130, w: 3, dur: 10,  delay: 2.1  },
            { left: '65%', h: 75,  w: 2, dur: 7,   delay: 5.0  },
            { left: '76%', h: 95,  w: 3, dur: 8.5, delay: 1.3  },
            { left: '88%', h: 155, w: 2, dur: 11,  delay: 3.7  },
            { left: '95%', h: 60,  w: 3, dur: 6.5, delay: 0.9  },
        ];
        dripsData.forEach(function (d) {
            var el = document.createElement('div');
            el.className = 'menu-drip';
            el.style.left = d.left;
            el.style.setProperty('--md-w',   d.w   + 'px');
            el.style.setProperty('--md-h',   d.h   + 'px');
            el.style.setProperty('--md-dur',  d.dur  + 's');
            el.style.setProperty('--md-delay', d.delay + 's');
            panel.appendChild(el);
        });

        /* Blood splatter spots scattered on the panel */
        var splatsData = [
            { top: '18%', left: '10%', w: 55,  h: 38 },
            { top: '35%', left: '65%', w: 44,  h: 44 },
            { top: '55%', left: '20%', w: 70,  h: 48 },
            { top: '70%', left: '55%', w: 38,  h: 38 },
            { top: '82%', left: '12%', w: 52,  h: 32 },
            { top: '25%', left: '80%', w: 30,  h: 30 },
            { top: '62%', left: '78%', w: 60,  h: 40 },
        ];
        splatsData.forEach(function (s) {
            var el = document.createElement('div');
            el.className = 'menu-splat-spot';
            el.style.top    = s.top;
            el.style.left   = s.left;
            el.style.width  = s.w + 'px';
            el.style.height = s.h + 'px';
            panel.appendChild(el);
        });
    }

    /* ── Toggle logic ────────────────────────────────────────────── */
    var overlay = document.getElementById('rdrMenuOverlay');
    var trigger = document.getElementById('navTrigger');
    var closeBtn = document.getElementById('rdrMenuClose');
    var dimmer  = document.getElementById('rdrMenuDimmer');

    function openMenu() {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        overlay.classList.add('is-closing');
        setTimeout(function () {
            overlay.classList.remove('is-open', 'is-closing');
            document.body.style.overflow = '';
        }, 460);
    }

    if (trigger)  trigger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (dimmer)   dimmer.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });
})();
