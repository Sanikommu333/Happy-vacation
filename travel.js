//Navigation bar
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function openModal() {
  document.getElementById("logoModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("logoModal").style.display = "none";
}
window.onclick = function (event) {
  const modal = document.getElementById("logoModal");
  if (event.target == modal) {
    closeModal();
  }
};

//home page
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Learn More clicked!");
});

// Get elements
const modal = document.getElementById("authModal");
const signupBtn = document.getElementById("signupBtn");
const closeBtn = document.querySelector(".close");
const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");
const switchToSignin = document.getElementById("switchToSignin");
const switchToSignup = document.getElementById("switchToSignup");

// Open modal and show sign-up form
signupBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  signupForm.classList.add("active");
  signinForm.classList.remove("active");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

switchToSignin.addEventListener("click", (e) => {
  e.preventDefault();
  signinForm.classList.add("active");
  signupForm.classList.remove("active");
});

switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.add("active");
  signinForm.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//Booking section
document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("room-type").value;

    if (destination && checkin && checkout && guests && roomType) {
      alert(
        `Booking confirmed for ${guests} guest(s) to ${destination} from ${checkin} to ${checkout} in a ${roomType} room.`
      );
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });

//Services Part
const serviceItems = document.querySelectorAll(".service-item");
serviceItems.forEach((item) => {
  item.addEventListener("click", () => {
    alert("More information about " + item.querySelector("h3").textContent);
  });
});

//Contact us Part
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

// Footer Part
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Gallery Part

// Check online status and update UI
function updateOnlineStatus() {
  const statusElement = document.createElement('div');
  statusElement.style.position = 'fixed';
  statusElement.style.bottom = '0';
  statusElement.style.left = '0';
  statusElement.style.right = '0';
  statusElement.style.padding = '10px';
  statusElement.style.textAlign = 'center';
  statusElement.style.backgroundColor = '#ff6b6b';
  statusElement.style.color = 'white';
  statusElement.style.zIndex = '1000';
  
  if (!navigator.onLine) {
    statusElement.textContent = 'You are currently offline. Some features may not be available.';
    document.body.appendChild(statusElement);
    
    // Hide after 5 seconds
    setTimeout(() => {
      statusElement.style.transition = 'opacity 1s';
      statusElement.style.opacity = '0';
      setTimeout(() => document.body.removeChild(statusElement), 1000);
    }, 5000);
  }
}

// Add event listeners for online/offline status
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Initial check
updateOnlineStatus();