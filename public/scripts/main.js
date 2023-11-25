







window.addEventListener('hashchange', (e) => {
    e.preventDefault()
    const hash = window.location.hash.slice(1);
    console.log(hash)
    document.querySelectorAll('.page').forEach(($e) =>{
        $e.classList.add('is-hidden')
    })

    document.getElementById(hash).classList.remove('is-hidden')

})




