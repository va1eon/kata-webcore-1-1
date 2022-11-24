document.addEventListener('DOMContentLoaded', () => {
  const radioLabel = document.querySelectorAll('.register__radio-btn-label');

  const addClass = item => {
    radioLabel.forEach(e => {
      e.btn.checked = false;
      e.tooltip.classList.remove('tooltip--active');
    });
    item.btn.checked = true;
    item.tooltip.classList.toggle('tooltip--active');
  };

  const removeClass = item => {
    item.btn.checked = false;
    item.tooltip.classList.remove('tooltip--active');
  };

  radioLabel.forEach((item, i) => {
    item.btn = item.querySelector('.register__radio-btn');
    item.tooltip = item.querySelector('.tooltip');
    item.tooltipClose = item.querySelector('.tooltip__close');

    item.addEventListener('click', e => {
      e.preventDefault();
      const viewportTracking = new ResizeObserver(entries => {
        for (let entry of entries) {
          const userViewport = entry.contentRect;
          if (userViewport.width <= 576) {
            item.tooltip.children[0].style.left = '';
          } else if (i >= 2) {
            item.tooltip.children[0].style.left = '-230px';
          }
        }
      });

      viewportTracking.observe(document.body);
      item.tooltip.classList.contains('.tooltip--active') ? removeClass(item) : addClass(item);
      if (e.target === item.tooltipClose) {
        item.tooltip.classList.remove('tooltip--active');
      }
    });
  });
});