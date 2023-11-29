window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'home'
    const [page, article] = hash.split('/')

    document.querySelectorAll('.page').forEach(item => {
        item.classList.add('is-hidden')
    })
    document.getElementById(page).classList.remove('is-hidden')
})