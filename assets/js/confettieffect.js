// Confetti effect for birthday (August 10th) and URL parameter
document.addEventListener("DOMContentLoaded", function () {
  // Load canvas-confetti library dynamically
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  script.onload = initializeConfetti;
  document.head.appendChild(script);

  function initializeConfetti() {
    // Configuration
    const config = {
      duration: 5000,
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"],
      particleCount: 3,
      interval: 100,
    };

    // Check for query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const confettiParam = urlParams.get("confetti");
    
    // Check if it's August 10th
    const today = new Date();
    const isAugust10 = today.getMonth() === 7 && today.getDate() === 10; // Month is 0-indexed
    
    // Trigger if query parameter is true OR if it's August 10th
    const shouldTrigger = confettiParam === "true" || isAugust10;

    if (!shouldTrigger) return;

    // Show birthday message if it's August 10th
    if (isAugust10) {
      setTimeout(() => {
        const message = document.createElement('div');
        message.innerHTML = `
          <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            animation: slideIn 0.5s ease-out;
          ">
            🎉 Happy Birthday Michael! 🎂
          </div>
          <style>
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          </style>
        `;
        document.body.appendChild(message);
        
        // Remove message after 5 seconds
        setTimeout(() => {
          message.remove();
        }, 5000);
      }, 1000);
    }

    const animationEnd = Date.now() + config.duration;

    const intervalId = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        return;
      }

      // Create uniform falling effect across full width
      const randomX = Math.random();
      
      window.confetti({
        particleCount: config.particleCount,
        angle: 90, // Straight down
        spread: 45, // Small spread for natural falling
        startVelocity: 25, // Moderate falling speed
        origin: { x: randomX, y: 0 }, // Random x position, top of screen
        colors: config.colors,
        gravity: 1, // Standard gravity for falling effect
        drift: 0, // No horizontal drift
        ticks: 200, // How long particles stay visible
      });
    }, config.interval);

    // Special burst effect on initial load
    setTimeout(() => {
      // Center burst
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: config.colors,
      });
      
      // Side bursts
      setTimeout(() => {
        window.confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: config.colors,
        });
        
        window.confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: config.colors,
        });
      }, 250);
    }, 500);
  }
});