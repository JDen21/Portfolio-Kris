console.log('lalal')

// ! this should be viewport size
const screenSize = window.innerWidth
const a = document.createElement('a')

if(screenSize >= 1200){
    a.href = '/lg.html'
}
else if(screenSize >= 992){
    a.href = '/md.html'
}
else if(screenSize >= 450){
    a.href = '/sm.html'
}

setTimeout(() => {
    a.click()
}, [2000])