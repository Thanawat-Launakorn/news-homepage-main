const nav_mobile = document.querySelector('.open')
const cancel = document.querySelector('.cancel')
const mobile_container = document.querySelector('.mobile-container')
let bool = false
function active() {
    mobile_container.style.transform = 'translateX(35%)'
    mobile_container.style.boxShadow = '0 0 0 10000px rgba(0,0,0,.50)'
}
function non_active() {
    mobile_container.style.transform = 'translateX(100%)'
    mobile_container.style.boxShadow = 'none'
}
nav_mobile.addEventListener('click', () => {
    bool = true
    bool == true ? active() : non_active()

})

cancel.addEventListener('click', () => {
    bool = false
    bool == true ? active() : non_active()
})
