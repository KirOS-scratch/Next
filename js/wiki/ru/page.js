let { body, head } = document
const url = new URL(window.location)
const sP = url.searchParams
const page = sP.get("p")
if (page === "main") {
  head.innerHTML = `
    <title>Главная страница - Next Вики</title>
  `
  body.innerHTML = `
    <h1>Вики про KirOS Next</h1>
    <h2>Ссылки</h2>
    <p><a href="?p=Download"><button>Скачать</button></a></p>
    <p><a href="?p=OpenInBrowser"><button>Открыть в браузере</button></a></p>
    <p><a href="?p=docs"><button>Документация</button></a></p>
  `
} else if (page === "Download") {
  head.innerHTML = `
    <title>Загрузки - Next</title>
  `
  body.innerHTML = `
    <p>placeholder</p>`
} else if (page === "OpenInBrowser") {
  head.innerHTML = `
    <title> Открыть в браузере - Next </title>
  `
} else if (page === "docs") {
  head.innerHTML = `
    <title>Загрузки - Next</title>
  `
  body.innerHTML = `
    <p>placeholder</p>`
}
