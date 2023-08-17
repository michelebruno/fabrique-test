const menu = document.getElementById('nav-menu')

const items = menu.querySelectorAll('li')

const itemsCount = items.length

const HOVER_MULTIPLIER = 2

const SIBILINGS_MULTIPLIER = 1

function onItemHover(activeItem, activeIndex) {

    const isLastOrFirst = activeIndex === 0 || activeIndex === (itemsCount - 1)

    const sibilingsCount = isLastOrFirst ? 1 : 2

    const smallMultiplier = (itemsCount - HOVER_MULTIPLIER - SIBILINGS_MULTIPLIER * sibilingsCount) / (itemsCount - 1 - sibilingsCount)

    items.forEach((item, i) => {

        let scaleFactor = smallMultiplier

        const isSibiling = Math.abs(i - activeIndex) === 1

        if (i === activeIndex) {
            scaleFactor = HOVER_MULTIPLIER
        } else if (isSibiling) {
            scaleFactor = SIBILINGS_MULTIPLIER
        }


        item.firstChild.style.transform = 'scale3d(' + scaleFactor + ', ' + scaleFactor + ', 1)'

        item.style.maxHeight = scaleFactor + "em"
        item.style.minHeight = scaleFactor + "em"


    })
}

items.forEach((item, i) => {

    item.addEventListener('mouseover', () => onItemHover(item, i))
})


menu.addEventListener('mouseleave', function () {
    console.log('mouse left');
    items.forEach(item => {
         item.style.maxHeight = null;
         item.style.minHeight = null;
         item.firstChild.style.transform = null;
    })
})