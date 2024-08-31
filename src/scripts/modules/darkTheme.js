export function darkTheme() {

    let darkBtns = document.querySelectorAll(".btn-theme");

    // Функция для переключения темы и сохранения состояния
    function toggleDarkLight(darkBtn, bodyDark, svg, circle) {
        let dark = localStorage.getItem("theme") === "dark";

        if (!dark) {
            bodyDark.className = "theme-dark";
            svg.style.transform = "translateY(2.2rem)";
            circle.setAttribute("fill", "white");
            darkBtn.style.border = "1px solid white";
            localStorage.setItem("theme", "dark");
        } else {
            bodyDark.className = "theme-light";
            svg.style.transform = "translateY(-100%) translateY(1.75rem)";
            circle.setAttribute("fill", "#1C1917");
            darkBtn.style.border = "1px solid #1C1917";
            localStorage.setItem("theme", "light");
        }
    }

    // Устанавливаем состояние темы при загрузке страницы
    darkBtns.forEach(function(darkBtn) {
        let bodyDark = document.body;
        let circle = darkBtn.querySelector("circle");
        let svg = darkBtn.querySelector("svg");

        // Устанавливаем тему при загрузке страницы
        let savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            bodyDark.className = "theme-dark";
            svg.style.transform = "translateY(2.2rem)";
            circle.setAttribute("fill", "white");
            darkBtn.style.border = "1px solid white";
        } else {
            bodyDark.className = "theme-light";
            svg.style.transform = "translateY(-100%) translateY(1.75rem)";
            circle.setAttribute("fill", "#1C1917");
            darkBtn.style.border = "1px solid #1C1917";
        }

        darkBtn.addEventListener("click", () => toggleDarkLight(darkBtn, bodyDark, svg, circle));
    });
}
