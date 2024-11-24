document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Python', 'SQL', 'Machine Learning', 'Visualization', 'Big Data'],
        datasets: [{
          label: 'Skill Proficiency (%)',
          data: [90, 85, 80, 75, 70],
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          borderColor: '#3498db',
          borderWidth: 2,
        }]
      }
    });
  });
  