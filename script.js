    // ── Stars ──
    const starsEl = document.getElementById('stars');
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const size = Math.random() * 2.5 + 0.8;
        s.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random()*100}%;
        left:${Math.random()*100}%;
        --d:${2 + Math.random()*4}s;
        animation-delay:${Math.random()*5}s;
        `;
        starsEl.appendChild(s);
    }

    // ── Rain drops ──
    const rainEl = document.getElementById('rain');
    for (let i = 0; i < 55; i++) {
        const d = document.createElement('div');
        d.className = 'drop';
        const h = 60 + Math.random() * 80;
        d.style.cssText = `
        left:${Math.random()*100}%;
        height:${h}px;
        --d:${0.8 + Math.random()*1.2}s;
        --delay:${Math.random()*2}s;
        `;
        rainEl.appendChild(d);
    }

    // ── Works modal ──
    const myWorks = [];

    function renderWorks() {
        const c = document.getElementById('worksContainer');
        c.innerHTML = '';
        if (!myWorks.length) {
        c.innerHTML = `<div class="empty-state"><i class="fas fa-moon"></i>Nothing to show yet...<br>check back soon ☕</div>`;
        } else {
        myWorks.forEach(w => {
            const el = document.createElement('div');
            el.className = 'work-item';
            el.innerHTML = `<h3>${w.title}</h3><p>${w.desc}</p>${w.link ? `<a href="${w.link}" target="_blank">View →</a>` : ''}`;
            c.appendChild(el);
        });
        }
    }

    function openWorks()  { renderWorks(); document.getElementById('worksModal').classList.add('active'); }
    function closeWorks() { document.getElementById('worksModal').classList.remove('active'); }
    document.getElementById('worksModal').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeWorks();
    });