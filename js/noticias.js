document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');
  const newsCards = document.querySelectorAll('.news-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const activeBtn = document.querySelector('.filter-button.active');
      if (activeBtn) {
        activeBtn.classList.remove('active');
      }
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      newsCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
