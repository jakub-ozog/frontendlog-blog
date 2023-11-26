

function handleHashChange() {
    const hash = window.location.hash;
    console.log(hash)

    const sections = document.querySelectorAll('.hidden');
    sections.forEach(function (section) {
        section.style.display = 'none'
    })

//Get specified article
    if (hash.startsWith('#articles/article-')) {
        const articleID = hash.slice('#articles/article'.length)
    }

    const targetSection = document.getElementById(hash.slice(1))

    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

window.addEventListener('hashchange', handleHashChange);

handleHashChange();