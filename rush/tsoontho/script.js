document.addEventListener('DOMContentLoaded', function () {
    
    const snowflakes = document.querySelector('.snowflakes');
    const createSnowflakes = () => {
        for (let i = 0; i < 50; i++) {
            let snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 10 + 5 + 's';
            snowflake.style.animationDelay = Math.random() * 10 + 's';
            snowflakes.appendChild(snowflake);
        }
    };
    
    createSnowflakes();
});
