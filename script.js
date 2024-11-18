// Add an interactive effect to the heading
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('h1');
    
    heading.addEventListener('mouseover', function () {
        heading.style.color = '#ff6347'; // Change color on hover
        heading.style.cursor = 'pointer';
    });

    heading.addEventListener('mouseout', function () {
        heading.style.color = '#0073e6'; // Revert color
    });

    heading.addEventListener('click', function () {
        alert('Welcome to my first website!');
    });
});
