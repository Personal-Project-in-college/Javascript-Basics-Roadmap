// DOM Manipulation

// Reveal Events

const revealBTN = document.getElementById('revealBox')

const hiddenContent = document.getElementById('hiddenParagraph')

const revealText = () => {
    if (hiddenContent.style.display == 'none') {
        hiddenContent.setAttribute('style', 'display: block')
    } else {
        hiddenContent.setAttribute('style', 'display: none')
    }
}
revealBTN.addEventListener('click', revealText);