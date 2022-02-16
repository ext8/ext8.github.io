function theme() {
    theme_icon = document.getElementById("theme").className
    document.getElementById("theme").className = theme_icon === "fas fa-sun" ? ("fa-solid fa-moon") : ("fas fa-sun")
}
