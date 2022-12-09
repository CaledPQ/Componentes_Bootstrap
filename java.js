// var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl)

//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// })

// var someTabTriggerEl = document.querySelector('#someTabTrigger')
// var tab = new bootstrap.Tab(someTabTriggerEl)

// tab.show()

// var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
// tabEl.addEventListener('shown.bs.tab', function (event) {
//   event.target // newly activated tab
//   event.relatedTarget // previous active tab
// })

// var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//     trigger: 'focus'
//   })


var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}