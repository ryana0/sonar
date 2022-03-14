const radar = document.querySelector('#radar')
const clipBL = document.querySelector('#clipBL')
const clipTR = document.querySelector('#clipTR')
const sonarLanding = document.querySelector('#sonarLanding')
const navbar = document.querySelector('#navbar')
const leftNum = (window.innerWidth - 251) / 32
console.log(leftNum)
window.addEventListener('scroll', () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 8
    clipTR.style.clipPath = `polygon(${75 - ((scrollPercentage * 100) * 0.75)}% 0%, 100% 0%, 100% ${25 + ((scrollPercentage * 100) * 0.75)}%)`
    clipBL.style.clipPath = `polygon(0% ${75 - ((scrollPercentage * 100) * 0.75)}%, 0% 100%, ${25 + ((scrollPercentage * 100) * 0.75)}% 100%)`
    navbar.style.opacity = scrollPercentage / 2

    if(4 - Math.round(scrollPercentage * 100) / 100 <= 3) {
        sonarLanding.style.fontSize = '3rem'
    } else {
        sonarLanding.style.fontSize = 4 - Math.round(scrollPercentage * 100) / 100 + 'rem'
    }

    if(15 - (scrollPercentage * 100) / 15 <= 0) {
        sonarLanding.style.top = '0.25rem'
    } else {
        sonarLanding.style.top = 15 - (scrollPercentage * 100) / 15 + 'rem'
    }

    if(leftNum - (scrollPercentage * 100) * ((leftNum) / 850) <= 7) {
        sonarLanding.style.left = '3rem'
        console.log('1rem happened')
    } else {
        if(sonarLanding.style.left != '3rem') {
            console.log(leftNum - (scrollPercentage * 100) * ((leftNum) / 850))
            sonarLanding.style.left = leftNum - (scrollPercentage * 100) * ((leftNum) / 750) + 'rem'
        } else {
            sonarLanding.style.left = sonarLanding.offsetLeft + (scrollPercentage * 100) * ((leftNum) / 750) + 'rem'
        }
    }
})