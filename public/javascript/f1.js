document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => window.location.href = link.getAttribute("href")));

