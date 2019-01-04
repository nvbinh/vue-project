const defaultSize = '50%'

// Initialize the progress bar size directive.
export const ProgressBarSizeRandom = {
  bind (el, binding, vnode) {
    // Allow users to customise the color by passing an expression.
    const width = binding.value || defaultSize

    if (el) {
      // Set the element's default width.
      el.style.width = width
      const min = el.getAttribute('aria-valuemin') ? Number(el.getAttribute('aria-valuemin')) : 0
      const max = el.getAttribute('aria-valuemax') ? Number(el.getAttribute('aria-valuemax')) : 100

      setInterval(() => {
        const ranNumber = Math.floor(Math.random() * (max - min + 1)) + min
        const ranNumberPercent = (ranNumber + '%')
        el.style.width = ranNumberPercent
      }, 2000)
    }
  }
}
// You can also make it available globally.
// Vue.directive('progress-bar-size-random', ProgressBarSizeRandom)
