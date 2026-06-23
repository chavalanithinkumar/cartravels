/* =========================================
   DriveIndia – script.js
   Full interactive functionality
   ========================================= */

// =========================================
// DATA – All India Cities
// =========================================
const allCities = [
  // Metro Cities
  { name: "Mumbai", state: "Maharashtra", icon: "fa-city" },
  { name: "Delhi", state: "Delhi", icon: "fa-city" },
  { name: "Bangalore", state: "Karnataka", icon: "fa-city" },
  { name: "Hyderabad", state: "Telangana", icon: "fa-city" },
  { name: "Chennai", state: "Tamil Nadu", icon: "fa-city" },
  { name: "Kolkata", state: "West Bengal", icon: "fa-city" },
  { name: "Pune", state: "Maharashtra", icon: "fa-city" },
  { name: "Ahmedabad", state: "Gujarat", icon: "fa-city" },
  // North India
  { name: "Agra", state: "Uttar Pradesh", icon: "fa-monument" },
  { name: "Varanasi", state: "Uttar Pradesh", icon: "fa-place-of-worship" },
  { name: "Lucknow", state: "Uttar Pradesh", icon: "fa-map-marker-alt" },
  { name: "Kanpur", state: "Uttar Pradesh", icon: "fa-map-marker-alt" },
  { name: "Prayagraj", state: "Uttar Pradesh", icon: "fa-place-of-worship" },
  { name: "Mathura", state: "Uttar Pradesh", icon: "fa-place-of-worship" },
  { name: "Vrindavan", state: "Uttar Pradesh", icon: "fa-place-of-worship" },
  { name: "Amritsar", state: "Punjab", icon: "fa-place-of-worship" },
  { name: "Chandigarh", state: "Punjab", icon: "fa-map-marker-alt" },
  { name: "Ludhiana", state: "Punjab", icon: "fa-map-marker-alt" },
  { name: "Shimla", state: "Himachal Pradesh", icon: "fa-mountain" },
  { name: "Manali", state: "Himachal Pradesh", icon: "fa-mountain" },
  { name: "Dharamshala", state: "Himachal Pradesh", icon: "fa-mountain" },
  { name: "Dehradun", state: "Uttarakhand", icon: "fa-mountain" },
  { name: "Haridwar", state: "Uttarakhand", icon: "fa-place-of-worship" },
  { name: "Rishikesh", state: "Uttarakhand", icon: "fa-place-of-worship" },
  { name: "Mussoorie", state: "Uttarakhand", icon: "fa-mountain" },
  // Rajasthan
  { name: "Jaipur", state: "Rajasthan", icon: "fa-fort-awesome" },
  { name: "Jodhpur", state: "Rajasthan", icon: "fa-fort-awesome" },
  { name: "Udaipur", state: "Rajasthan", icon: "fa-water" },
  { name: "Jaisalmer", state: "Rajasthan", icon: "fa-sun" },
  { name: "Ajmer", state: "Rajasthan", icon: "fa-place-of-worship" },
  { name: "Pushkar", state: "Rajasthan", icon: "fa-place-of-worship" },
  // South India
  { name: "Mysore", state: "Karnataka", icon: "fa-fort-awesome" },
  { name: "Coimbatore", state: "Tamil Nadu", icon: "fa-map-marker-alt" },
  { name: "Madurai", state: "Tamil Nadu", icon: "fa-place-of-worship" },
  { name: "Trichy", state: "Tamil Nadu", icon: "fa-place-of-worship" },
  { name: "Ooty", state: "Tamil Nadu", icon: "fa-mountain" },
  { name: "Kodaikanal", state: "Tamil Nadu", icon: "fa-mountain" },
  { name: "Kochi", state: "Kerala", icon: "fa-ship" },
  { name: "Thiruvananthapuram", state: "Kerala", icon: "fa-map-marker-alt" },
  { name: "Munnar", state: "Kerala", icon: "fa-mountain" },
  { name: "Alleppey", state: "Kerala", icon: "fa-water" },
  { name: "Wayanad", state: "Kerala", icon: "fa-tree" },
  { name: "Vijayawada", state: "Andhra Pradesh", icon: "fa-map-marker-alt" },
  { name: "Tirupati", state: "Andhra Pradesh", icon: "fa-place-of-worship" },
  { name: "Vizag", state: "Andhra Pradesh", icon: "fa-map-marker-alt" },
  // West India
  { name: "Goa", state: "Goa", icon: "fa-umbrella-beach" },
  { name: "Nashik", state: "Maharashtra", icon: "fa-place-of-worship" },
  { name: "Aurangabad", state: "Maharashtra", icon: "fa-monument" },
  { name: "Surat", state: "Gujarat", icon: "fa-map-marker-alt" },
  { name: "Vadodara", state: "Gujarat", icon: "fa-map-marker-alt" },
  { name: "Rajkot", state: "Gujarat", icon: "fa-map-marker-alt" },
  { name: "Dwarka", state: "Gujarat", icon: "fa-place-of-worship" },
  // East India
  { name: "Bhubaneswar", state: "Odisha", icon: "fa-map-marker-alt" },
  { name: "Puri", state: "Odisha", icon: "fa-place-of-worship" },
  { name: "Darjeeling", state: "West Bengal", icon: "fa-mountain" },
  { name: "Siliguri", state: "West Bengal", icon: "fa-map-marker-alt" },
  { name: "Patna", state: "Bihar", icon: "fa-map-marker-alt" },
  { name: "Bodh Gaya", state: "Bihar", icon: "fa-place-of-worship" },
  // Central India
  { name: "Bhopal", state: "Madhya Pradesh", icon: "fa-map-marker-alt" },
  { name: "Indore", state: "Madhya Pradesh", icon: "fa-map-marker-alt" },
  { name: "Ujjain", state: "Madhya Pradesh", icon: "fa-place-of-worship" },
  { name: "Khajuraho", state: "Madhya Pradesh", icon: "fa-monument" },
  { name: "Nagpur", state: "Maharashtra", icon: "fa-map-marker-alt" },
  // Northeast
  { name: "Guwahati", state: "Assam", icon: "fa-map-marker-alt" },
  { name: "Shillong", state: "Meghalaya", icon: "fa-mountain" },
  { name: "Gangtok", state: "Sikkim", icon: "fa-mountain" },
  { name: "Imphal", state: "Manipur", icon: "fa-map-marker-alt" },
];

// =========================================
// DATA – Vehicle Pricing & Info
// =========================================
const vehicleData = {
  sedan: {
    name: "Sedan (Swift Dzire / Etios)",
    ratePerKm: 12,
    seats: 4,
    luggage: "2 bags",
    features: "AC · Music System · GPS Tracked · Insured",
    minFare: 800,
  },
  suv: {
    name: "SUV (Innova / Ertiga)",
    ratePerKm: 16,
    seats: 7,
    luggage: "4 bags",
    features: "AC · Spacious · Music · GPS · Insured",
    minFare: 1200,
  },
  xuv: {
    name: "Premium SUV (Innova Crysta / XUV700)",
    ratePerKm: 20,
    seats: 7,
    luggage: "4 bags",
    features: "Premium AC · Leather Seats · GPS · Charging Port",
    minFare: 1500,
  },
  "tempo-9": {
    name: "Tempo Traveller (9 Seater)",
    ratePerKm: 25,
    seats: 9,
    luggage: "Large boot",
    features: "AC · Push-back Seats · LCD TV · GPS",
    minFare: 2000,
  },
  "tempo-12": {
    name: "Tempo Traveller (12 Seater)",
    ratePerKm: 28,
    seats: 12,
    luggage: "Extra Large boot",
    features: "AC · Push-back Seats · LCD TV · GPS",
    minFare: 2400,
  },
  "tempo-15": {
    name: "Tempo Traveller (15 Seater)",
    ratePerKm: 32,
    seats: 15,
    luggage: "Extra Large boot",
    features: "AC · Recliner Seats · LCD TV · Music · GPS",
    minFare: 3000,
  },
  minibus: {
    name: "Mini Bus (20 Seater)",
    ratePerKm: 40,
    seats: 20,
    luggage: "Luggage carrier on roof",
    features: "AC · LCD TV · Music System · GPS · DJ Ready",
    minFare: 4000,
  },
};

// Approximate distance matrix (km) between popular city pairs
const distanceMatrix = {
  "Delhi-Agra": 210, "Delhi-Jaipur": 270, "Delhi-Chandigarh": 250,
  "Delhi-Amritsar": 450, "Delhi-Haridwar": 220, "Delhi-Dehradun": 300,
  "Delhi-Shimla": 360, "Delhi-Manali": 570, "Delhi-Mathura": 165,
  "Delhi-Varanasi": 820, "Delhi-Lucknow": 560,
  "Mumbai-Pune": 150, "Mumbai-Nashik": 170, "Mumbai-Aurangabad": 340,
  "Mumbai-Goa": 600, "Mumbai-Surat": 290, "Mumbai-Nagpur": 870,
  "Bangalore-Mysore": 150, "Bangalore-Ooty": 270, "Bangalore-Coimbatore": 360,
  "Bangalore-Chennai": 350, "Bangalore-Hyderabad": 570, "Bangalore-Goa": 560,
  "Hyderabad-Tirupati": 550, "Hyderabad-Vijayawada": 280, "Hyderabad-Vizag": 620,
  "Hyderabad-Chennai": 630, "Hyderabad-Bangalore": 570,
  "Chennai-Coimbatore": 500, "Chennai-Madurai": 460, "Chennai-Pondicherry": 170,
  "Jaipur-Udaipur": 400, "Jaipur-Jodhpur": 340, "Jaipur-Jaisalmer": 560,
  "Jaipur-Ajmer": 135, "Jaipur-Agra": 240,
  "Kochi-Munnar": 130, "Kochi-Alleppey": 60, "Kochi-Thiruvananthapuram": 220,
};

// =========================================
// INIT – Run on DOMContentLoaded
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  populateCityDropdowns();
  renderCitiesGrid(allCities);
  setMinDate();
  initScrollEffects();
  initNavbarScroll();
  updateVehicleDetails();

  // Pre-select vehicle from query parameter (e.g. ?vehicle=sedan)
  const params = new URLSearchParams(window.location.search);
  const vehicleParam = params.get("vehicle");
  const vehicleSelect = document.getElementById("vehicleType");
  if (vehicleSelect && vehicleParam) {
    vehicleSelect.value = vehicleParam;
    updateVehicleDetails();
  }
});

// =========================================
// NAVBAR – Hamburger & Scroll
// =========================================
function toggleMenu() {
  const links = document.getElementById("navLinks");
  const ham = document.getElementById("hamburger");
  links.classList.toggle("open");
  ham.classList.toggle("open");
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
    });
  });
}

// =========================================
// SCROLL EFFECTS – Scroll-top + Animations
// =========================================
function initScrollEffects() {
  const scrollBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    // Scroll-to-top button visibility
    if (window.scrollY > 400) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }

    // Reveal elements on scroll
    const reveals = document.querySelectorAll(
      ".vehicle-detail-card, .why-card, .testi-card, .step-card, .city-card, .dest-card"
    );
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("revealed");
      }
    });
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================
// CITIES – Populate Dropdowns & Grid
// =========================================
function populateCityDropdowns() {
  const pickupSelect = document.getElementById("pickupCity");
  const dropSelect = document.getElementById("dropCity");

  if (!pickupSelect || !dropSelect) return;

  allCities.forEach((city) => {
    const opt1 = new Option(`${city.name}, ${city.state}`, city.name);
    const opt2 = new Option(`${city.name}, ${city.state}`, city.name);
    pickupSelect.add(opt1);
    dropSelect.add(opt2);
  });
}

function updateDropCity() {
  const pickup = document.getElementById("pickupCity").value;
  const dropSelect = document.getElementById("dropCity");
  const options = dropSelect.querySelectorAll("option");

  options.forEach((opt) => {
    if (opt.value === pickup) {
      opt.disabled = true;
      opt.style.display = "none";
    } else {
      opt.disabled = false;
      opt.style.display = "";
    }
  });

  if (dropSelect.value === pickup) {
    dropSelect.value = "";
  }
  updatePriceEstimate();
}

function renderCitiesGrid(cities) {
  const grid = document.getElementById("citiesGrid");
  grid.innerHTML = "";
  cities.forEach((city) => {
    const card = document.createElement("div");
    card.className = "city-card";
    card.onclick = () => {
      document.getElementById("pickupCity").value = city.name;
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    };
    card.innerHTML = `
      <i class="fas ${city.icon}"></i>
      <div>
        <span>${city.name}</span>
        <small style="display:block;font-size:0.7rem;color:var(--grey-400)">${city.state}</small>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCities() {
  const query = document.getElementById("citySearch").value.toLowerCase().trim();
  const filtered = allCities.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.state.toLowerCase().includes(query)
  );
  renderCitiesGrid(filtered);

  if (filtered.length === 0) {
    document.getElementById("citiesGrid").innerHTML =
      `<p style="grid-column:1/-1;text-align:center;color:var(--grey-400);padding:24px;">
        No cities found for "<strong>${query}</strong>". Try another name.
      </p>`;
  }
}

// =========================================
// BOOKING – Trip Type Tabs
// =========================================
function switchTab(btn, type) {
  document.querySelectorAll(".trip-tab").forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");

  const journeyDateGroup = document.getElementById("journeyDate").closest(".form-group");
  const returnDateField = document.getElementById("returnDate");

  // Show/hide return date for round trip
  if (type === "round-trip") {
    if (!returnDateField) addReturnDateField();
  } else {
    const rt = document.getElementById("returnDateGroup");
    if (rt) rt.remove();
  }
}

function addReturnDateField() {
  const grid = document.querySelector(".form-grid");
  const group = document.createElement("div");
  group.className = "form-group";
  group.id = "returnDateGroup";
  group.innerHTML = `
    <label><i class="fas fa-calendar-check"></i> Return Date</label>
    <input type="date" id="returnDate" />
  `;
  // Insert after journeyDate group
  const journeyGroup = document.getElementById("journeyDate").closest(".form-group");
  journeyGroup.insertAdjacentElement("afterend", group);
  setMinDate();
}

// =========================================
// BOOKING – Set Min Date (Today)
// =========================================
function setMinDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach((inp) => {
    inp.setAttribute("min", todayStr);
  });
}

// =========================================
// VEHICLE – Price Estimator
// =========================================
function updateVehicleDetails() {
  updatePriceEstimate();
}

function updatePriceEstimate() {
  const vehicleType = document.getElementById("vehicleType").value;
  const pickup = document.getElementById("pickupCity").value;
  const drop = document.getElementById("dropCity").value;
  const estimator = document.getElementById("priceEstimator");

  if (!vehicleType) {
    estimator.style.display = "none";
    return;
  }

  const vehicle = vehicleData[vehicleType];
  if (!vehicle) return;

  // Try to get distance from matrix
  let distance = 0;
  let priceStr = "";

  if (pickup && drop) {
    const key1 = `${pickup}-${drop}`;
    const key2 = `${drop}-${pickup}`;
    distance = distanceMatrix[key1] || distanceMatrix[key2] || 0;
  }

  if (distance > 0) {
    const rawPrice = distance * vehicle.ratePerKm;
    const finalPrice = Math.max(rawPrice, vehicle.minFare);
    priceStr = `₹ ${finalPrice.toLocaleString("en-IN")}`;
    document.getElementById("estimatedPrice").textContent = priceStr;
    document.getElementById("vehicleInfo").innerHTML = `
      <strong>${vehicle.name}</strong><br>
      🛣️ Distance: ~${distance} km<br>
      💺 Seats: ${vehicle.seats}<br>
      🧳 Luggage: ${vehicle.luggage}<br>
      ✅ ${vehicle.features}<br>
      📌 Min fare: ₹${vehicle.minFare.toLocaleString("en-IN")} | ₹${vehicle.ratePerKm}/km
    `;
  } else {
    document.getElementById("estimatedPrice").textContent = `₹ ${vehicle.minFare.toLocaleString("en-IN")}+`;
    document.getElementById("vehicleInfo").innerHTML = `
      <strong>${vehicle.name}</strong><br>
      💺 Seats: ${vehicle.seats}<br>
      🧳 Luggage: ${vehicle.luggage}<br>
      ✅ ${vehicle.features}<br>
      📌 Starting from ₹${vehicle.minFare.toLocaleString("en-IN")} | ₹${vehicle.ratePerKm}/km
    `;
  }

  estimator.style.display = "flex";
}

// Also trigger price update when cities change
document.addEventListener("DOMContentLoaded", () => {
  const dropCity = document.getElementById("dropCity");
  const vehicleType = document.getElementById("vehicleType");
  const pickupCity = document.getElementById("pickupCity");
  
  if (dropCity) dropCity.addEventListener("change", updatePriceEstimate);
  if (vehicleType) vehicleType.addEventListener("change", updatePriceEstimate);
  if (pickupCity) pickupCity.addEventListener("change", updatePriceEstimate);
});

// =========================================
// BOOKING – Form Validation & Submit
// =========================================
function validateForm() {
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));
  document.querySelectorAll("input, select, textarea").forEach((el) =>
    el.classList.remove("error")
  );

  // Full Name
  const name = document.getElementById("fullName");
  if (!name.value.trim() || name.value.trim().length < 3) {
    showError("nameError", name, "Please enter your full name (min 3 characters)");
    valid = false;
  }

  // Mobile
  const mobile = document.getElementById("mobile");
  const mobileVal = mobile.value.replace(/\s/g, "").replace("+91", "");
  if (!/^\d{10}$/.test(mobileVal)) {
    showError("mobileError", mobile, "Enter a valid 10-digit Indian mobile number");
    valid = false;
  }

  // Email
  const email = document.getElementById("email");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    showError("emailError", email, "Enter a valid email address");
    valid = false;
  }

  // Passengers
  const passengers = document.getElementById("passengers");
  if (!passengers.value) {
    passengers.classList.add("error");
    valid = false;
  }

  // Pickup City
  const pickupCity = document.getElementById("pickupCity");
  if (!pickupCity.value) {
    pickupCity.classList.add("error");
    valid = false;
  }

  // Drop City
  const dropCity = document.getElementById("dropCity");
  if (!dropCity.value) {
    dropCity.classList.add("error");
    valid = false;
  }

  // Same city check
  if (pickupCity.value && dropCity.value && pickupCity.value === dropCity.value) {
    dropCity.classList.add("error");
    showError("emailError", dropCity, "Pickup and drop city cannot be the same");
    valid = false;
  }

  // Journey Date
  const journeyDate = document.getElementById("journeyDate");
  if (!journeyDate.value) {
    journeyDate.classList.add("error");
    valid = false;
  }

  // Pickup Time
  const pickupTime = document.getElementById("pickupTime");
  if (!pickupTime.value) {
    pickupTime.classList.add("error");
    valid = false;
  }

  // Vehicle Type
  const vehicleType = document.getElementById("vehicleType");
  if (!vehicleType.value) {
    vehicleType.classList.add("error");
    valid = false;
  }

  return valid;
}

function showError(errorId, inputEl, message) {
  const errEl = document.getElementById(errorId);
  if (errEl) errEl.textContent = message;
  if (inputEl) inputEl.classList.add("error");
}

function submitBooking(event) {
  event.preventDefault();

  if (!validateForm()) {
    // Scroll to first error
    const firstError = document.querySelector(".error");
    if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const btn = document.getElementById("bookBtn");
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing...`;

  // Simulate API call / backend submission
  setTimeout(() => {
    const ref = generateBookingRef();
    document.getElementById("bookingRef").textContent = ref;
    document.getElementById("successModal").classList.add("show");

    btn.disabled = false;
    btn.innerHTML = `<i class="fas fa-calendar-check"></i> Confirm Booking`;

    // Log booking details (in real app, send to backend)
    const bookingDetails = {
      ref,
      name: document.getElementById("fullName").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      passengers: document.getElementById("passengers").value,
      pickup: document.getElementById("pickupCity").value,
      drop: document.getElementById("dropCity").value,
      date: document.getElementById("journeyDate").value,
      time: document.getElementById("pickupTime").value,
      vehicle: document.getElementById("vehicleType").value,
      luggage: document.getElementById("luggage").value,
      address: document.getElementById("pickupAddress").value,
      instructions: document.getElementById("specialInstructions").value,
      timestamp: new Date().toISOString(),
    };
    console.log("📋 Booking Submitted:", bookingDetails);
    // In production: send via fetch/axios to your backend API
  }, 1800);
}

function generateBookingRef() {
  const prefix = "DI";
  const date = new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}${dateStr}${random}`;
}

function closeModal() {
  document.getElementById("successModal").classList.remove("show");
  resetForm();
}

function resetForm() {
  document.getElementById("bookingForm").reset();
  document.getElementById("priceEstimator").style.display = "none";
  document.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));
  document.querySelectorAll("input, select, textarea").forEach((el) =>
    el.classList.remove("error")
  );
  // Reset tabs
  document.querySelectorAll(".trip-tab").forEach((t) => t.classList.remove("active"));
  document.querySelector(".trip-tab").classList.add("active");
  const rtGroup = document.getElementById("returnDateGroup");
  if (rtGroup) rtGroup.remove();
}

// Close modal on overlay click
document.addEventListener("DOMContentLoaded", () => {
  const successModal = document.getElementById("successModal");
  if (successModal) {
    successModal.addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });
  }
});

// =========================================
// CONTACT FORM – Submit
// =========================================
function submitContact(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const btn = form.querySelector("button[type='submit']");

  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;

  setTimeout(() => {
    btn.innerHTML = `<i class="fas fa-check"></i> Message Sent!`;
    btn.style.background = "var(--green)";
    form.reset();

    setTimeout(() => {
      btn.disabled = false;
      btn.style.background = "";
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> Send Message`;
    }, 3000);
  }, 1500);
}

// =========================================
// SMOOTH SCROLL – Internal Anchor Links
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 72; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
});

// =========================================
// INTERSECTION OBSERVER – Reveal Animations
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .vehicle-card, .why-card, .testi-card, .step-card, .dest-card {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .vehicle-card.revealed, .why-card.revealed, .testi-card.revealed,
    .step-card.revealed, .dest-card.revealed {
      opacity: 1;
      transform: translateY(0);
    }
    .city-card {
      opacity: 0;
      transform: scale(0.94);
      transition: opacity 0.4s ease, transform 0.4s ease, background 0.25s ease, color 0.25s ease;
    }
    .city-card.revealed {
      opacity: 1;
      transform: scale(1);
    }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("revealed");
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  const targets = document.querySelectorAll(
    ".vehicle-card, .why-card, .testi-card, .step-card, .dest-card, .city-card"
  );
  targets.forEach((el) => observer.observe(el));
});

// =========================================
// MOBILE – Detect touch events for smoother UX
// =========================================
(function detectTouch() {
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add("touch-device");
  }
})();

// =========================================
// PHONE NUMBER – Auto-format Input
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  const mobileInput = document.getElementById("mobile");
  if (mobileInput) {
    mobileInput.addEventListener("input", function () {
      let val = this.value.replace(/[^\d+]/g, "");
      if (val.startsWith("+91")) {
        val = "+91 " + val.slice(3).replace(/(\d{5})(\d{1,5})/, "$1 $2");
      } else if (val.length > 0 && !val.startsWith("+")) {
        val = val.replace(/(\d{5})(\d{1,5})/, "$1 $2");
      }
      this.value = val;
    });
  }
});

// =========================================
// CITY CARDS – Re-observe after filter
// =========================================
const originalRenderCitiesGrid = window.renderCitiesGrid;
function renderCitiesGrid(cities) {
  const grid = document.getElementById("citiesGrid");
  grid.innerHTML = "";
  cities.forEach((city) => {
    const card = document.createElement("div");
    card.className = "city-card";
    card.onclick = () => {
      document.getElementById("pickupCity").value = city.name;
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    };
    card.innerHTML = `
      <i class="fas ${city.icon}"></i>
      <div>
        <span>${city.name}</span>
        <small style="display:block;font-size:0.7rem;color:var(--grey-400)">${city.state}</small>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-observe new cards
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("revealed"), i * 40);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    document.querySelectorAll(".city-card:not(.revealed)").forEach((el) =>
      observer.observe(el)
    );
  }, 50);
}

// =========================================
// ACTIVE NAV LINK – Highlight on scroll
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 90;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  });

  // Add active-link style
  const style = document.createElement("style");
  style.textContent = `.nav-links a.active-link { color: var(--blue); background: var(--sky); font-weight: 600; }`;
  document.head.appendChild(style);
});

// =========================================
// VEHICLE CARD – Click to pre-select
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".vehicle-card .btn-book-sm, .vehicle-detail-card .btn-primary").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".vehicle-card, .vehicle-detail-card");
      if (!card) return;
      const title = card.querySelector("h3").textContent.toLowerCase();
      const vehicleSelect = document.getElementById("vehicleType");

      if (vehicleSelect) {
        if (title.includes("dzire") || title.includes("etios")) vehicleSelect.value = "sedan";
        else if (title.includes("crysta") || title.includes("xuv700")) vehicleSelect.value = "xuv";
        else if (title.includes("innova") || title.includes("ertiga")) vehicleSelect.value = "suv";
        else if (title.includes("15")) vehicleSelect.value = "tempo-15";
        else if (title.includes("12")) vehicleSelect.value = "tempo-12";
        else if (title.includes("9")) vehicleSelect.value = "tempo-9";
        else if (title.includes("mini bus") || title.includes("mini")) vehicleSelect.value = "minibus";

        updateVehicleDetails();
      }
    });
  });
});

// =========================================
// KEYBOARD ACCESSIBILITY – ESC closes modal
// =========================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("successModal");
    if (modal.classList.contains("show")) closeModal();
  }
});

// =========================================
// LAZY-LOAD IMAGES – Native support check
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  if ("loading" in HTMLImageElement.prototype) {
    document.querySelectorAll("img[loading='lazy']").forEach((img) => {
      img.src = img.src; // trigger native lazy load
    });
  }
});

// =========================================
// PAGE LOAD – Fade in hero content
// =========================================
window.addEventListener("load", () => {
  document.querySelector(".hero-content")?.classList.add("hero-loaded");
  const heroStyle = document.createElement("style");
  heroStyle.textContent = `
    .hero-content { 
      opacity: 0; 
      transform: translateY(20px); 
      transition: opacity 0.8s ease, transform 0.8s ease; 
    }
    .hero-content.hero-loaded { 
      opacity: 1; 
      transform: translateY(0); 
    }
  `;
  document.head.appendChild(heroStyle);
  setTimeout(() => document.querySelector(".hero-content")?.classList.add("hero-loaded"), 100);
});

console.log("✅ DriveIndia – All India 24/7 Car Travel Booking | Loaded Successfully");