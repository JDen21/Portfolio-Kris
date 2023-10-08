console.log('lalal')

// ! this should be viewport size
const screenSize = window.innerWidth
const a = document.createElement('a')

if(screenSize >= 1200){
    a.href = '/Portfolio-Kris/lg.html'
}
else if(screenSize >= 992){
    a.href = '/Portfolio-Kris/md.html'
}
else if(screenSize >= 450){
    a.href = '/Portfolio-Kris/sm.html'
}

setTimeout(() => {
    a.click()
}, [2000])