const radar = document.querySelector('#radar')
const clipBL = document.querySelector('#clipBL')
const clipTR = document.querySelector('#clipTR')
const sonarLanding = document.querySelector('#sonarLanding')
const navbar = document.querySelector('#navbar')
window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 6
    clipTR.style.clipPath = `polygon(${75 - ((scrollPercentage * 100) * 0.75)}% 0%, 100% 0%, 100% ${25 + ((scrollPercentage * 100) * 0.75)}%)`
    clipBL.style.clipPath = `polygon(0% ${75 - ((scrollPercentage * 100) * 0.75)}%, 0% 100%, ${25 + ((scrollPercentage * 100) * 0.75)}% 100%)`
    navbar.style.opacity = scrollPercentage


    if(15 - (scrollPercentage * 100) / 15 <= 0) {
        sonarLanding.style.top = '0.375rem'
    } else {
        sonarLanding.style.top = 15 - (scrollPercentage * 100) / 15 + 'rem'
    }

    if(52 - (scrollPercentage * 100) / 7.5 <= 0) {
        sonarLanding.style.left = '1rem'
    } else {
        sonarLanding.style.left = 52 - (scrollPercentage * 150) / 11.75 + 'rem'
    }
})