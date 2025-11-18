// Scroll Animation Utility - AOS-style implementation
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        // Optional: Unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-aos attribute
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach((el) => observer.observe(el));
};

// Add CSS classes for animations
export const addScrollAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    [data-aos] {
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    [data-aos].aos-animate {
      opacity: 1;
    }

    [data-aos="fade-up"] {
      transform: translateY(30px);
    }

    [data-aos="fade-up"].aos-animate {
      transform: translateY(0);
    }

    [data-aos="fade-down"] {
      transform: translateY(-30px);
    }

    [data-aos="fade-down"].aos-animate {
      transform: translateY(0);
    }

    [data-aos="fade-left"] {
      transform: translateX(-30px);
    }

    [data-aos="fade-left"].aos-animate {
      transform: translateX(0);
    }

    [data-aos="fade-right"] {
      transform: translateX(30px);
    }

    [data-aos="fade-right"].aos-animate {
      transform: translateX(0);
    }

    [data-aos="zoom-in"] {
      transform: scale(0.9);
    }

    [data-aos="zoom-in"].aos-animate {
      transform: scale(1);
    }

    [data-aos="fade"] {
      opacity: 0;
    }

    [data-aos="fade"].aos-animate {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
};


