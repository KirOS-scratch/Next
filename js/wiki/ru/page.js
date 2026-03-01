let { body, head } = document
const url = new URL(window.location)
const sP = url.searchParams
const page = sp.get("p")
if (page === "main") {
  head.innerHTML = `
    <title>Главная страница KirOS Next Вики</title>
  `
  body.innerHTML = `
    <h1>Вики про KirOS Next</h1>
    <h2>Ссылки</h2>
    <p><a href="?p=Download"><button>Download</button></a></p>
    <p><a href="?p=OpenInBrowser"><button>Open in browser</button></a></p>
    <p><a href="?p=documentation"><button>Documentation</button></a></p>
  `
}
