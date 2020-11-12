function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

// var dragSrc = document.getElementById('shuzi')
// // var target = document.getElementById('target')

// dragSrc.ondragstart = handle_start
// dragSrc.ondrag = handle_drag
// dragSrc.ondragend = handle_end

// function handle_start(e) {
//   console.log('dragstart-在元素开始被拖动时候触发')
// }

// function handle_drag() {
//   console.log('drag-在元素被拖动时候反复触发')
// }

// function handle_end() {
//   console.log('dragend-在拖动操作完成时触发')
// }


// target.ondragenter = handle_enter
// target.ondragover = handle_over
// target.ondragleave = handle_leave

// target.ondrop = handle_drop

// function handle_enter(e) {
//   console.log('handle_enter-当元素进入目的地时触发')
//   // 阻止浏览器默认行为
//   e.preventDefault()
// }

// function handle_over(e) {
//   console.log('handle_over-当元素在目的地时触发')
//   // 阻止浏览器默认行为
//   e.preventDefault()
// }

// function handle_leave(e) {
//   console.log('handle_leave-当元素离开目的地时触发')
//   // 阻止浏览器默认行为
//   // e.preventDefault()
// }

// function handle_drop(e) {
//   console.log('handle_drop-当元素在目的地放下时触发')
//   var t = Date.now()
//   target.innerHTML = ''
//   target.append(t + '-拖放触发的事件。')
//   e.preventDefault()
// }