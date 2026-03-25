document.querySelector('a[href="projetos.html"]').addEventListener("click", function(e) {
    e.preventDefault()

    document.querySelector("#projetos").scrollIntoView({
        behavior: "smooth"
    })
})