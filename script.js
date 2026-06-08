const primaryButton = document.querySelector(".primary-button");

if (primaryButton) {
    primaryButton.addEventListener("click", function () {
        alert("Free trial");
    });
}

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.2
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});


new Chart(document.getElementById("dashChart"), {
    type: "line",
    data: {
        labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг"],
        datasets: [{
            data: [2, 4, 5, 8, 11, 15, 19, 24],
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.12)",
            borderWidth: 3,
            tension: 0.45,
            fill: true,
            pointBackgroundColor: "#2563eb",
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.05)" }, border: { display: false } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(255,255,255,0.05)" }, border: { display: false } }
        }
    }
});