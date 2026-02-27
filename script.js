const myWorks = [
            // Example data (Delete or uncomment to test):
            // { title: "Aesthetic Brand Design", desc: "Complete visual identity for a modern cafe.", link: "#" },
            // { title: "Cinematic Video Edit", desc: "Promotional video for an upcoming artist.", link: "#" }
        ];

        function renderWorks() {
            const container = document.getElementById('worksContainer');
            container.innerHTML = ''; 

            if (myWorks.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-tools" style="font-size: 30px; color: #555; margin-bottom: 15px;"></i>
                        <p>Havent done any showable things yet :)<br>Please check back soon to see my latest creations.</p>
                    </div>
                `;
            } else {
                myWorks.forEach(work => {
                    const workEl = document.createElement('div');
                    workEl.className = 'work-item';
                    workEl.innerHTML = `
                        <h3>${work.title}</h3>
                        <p>${work.desc}</p>
                        ${work.link ? `<a href="${work.link}" target="_blank">View Project &rarr;</a>` : ''}
                    `;
                    container.appendChild(workEl);
                });
            }
        }

        function openWorks() {
            renderWorks();
            document.getElementById('worksModal').classList.add('active');
        }

        function closeWorks() {
            document.getElementById('worksModal').classList.remove('active');
        }

        document.getElementById('worksModal').addEventListener('click', function(e) {
            if (e.target === this) closeWorks();

        });
