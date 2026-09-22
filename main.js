(function () {
  "use strict";
  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var body = document.body;

  function syncNav() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  syncNav();
  window.addEventListener("scroll", syncNav, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
      body.classList.toggle("nav-open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
        body.classList.remove("nav-open");
      });
    });
  }

  document.querySelectorAll(".faq-list details").forEach(function (item, _, all) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      all.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  var priceValue = document.getElementById("price-value");
  var pricePeriod = document.getElementById("price-period");
  var priceNote = document.getElementById("price-note");
  var toggleButtons = document.querySelectorAll(".billing-toggle button");
  if (toggleButtons.length && priceValue && pricePeriod && priceNote) {
    toggleButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        toggleButtons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var yearly = btn.getAttribute("data-price") === "yearly";
        priceValue.textContent = yearly ? "$75" : "$6.99";
        pricePeriod.textContent = yearly ? "/ year" : "/ month";
        priceNote.textContent = yearly
          ? "About $8.88 saved versus monthly"
          : "Flexible monthly billing";
      });
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  var story = document.querySelector(".chain-story");
  var frame = document.querySelector(".chain-frame");
  var steps = Array.prototype.slice.call(document.querySelectorAll(".chain-step"));
  var blocks = Array.prototype.slice.call(document.querySelectorAll(".chain-blocks span"));
  var label = document.getElementById("chain-label");
  var title = document.getElementById("chain-title");
  var subtitle = document.getElementById("chain-subtitle");
  var states = [
    { label: "INPUT", title: "Your song", subtitle: "Name the sound you want to chase.", active: 0 },
    { label: "RESEARCH", title: "Mapped chain", subtitle: "Amps, cabs, and effects land on factory models.", active: 2 },
    { label: "SNAPSHOTS", title: "Song sections", subtitle: "Intro, chorus, and solo move under your feet.", active: 4 },
    { label: "EXPORT", title: "Ready to load", subtitle: "Download .hlx or .pgp and import it.", active: 5 }
  ];

  function applyStory(index, progress) {
    if (frame) {
      frame.style.setProperty("--story-progress", String(progress));
      frame.style.setProperty("--story-scale", (0.94 + progress * 0.06).toFixed(3));
    }
    steps.forEach(function (step, i) {
      step.classList.toggle("is-active", i === index);
    });
    var state = states[index] || states[0];
    if (label) label.textContent = state.label;
    if (title) title.textContent = state.title;
    if (subtitle) subtitle.textContent = state.subtitle;
    blocks.forEach(function (block, i) {
      block.classList.toggle("active", i <= state.active);
    });
  }

  function updateStory() {
    if (!story || !frame) return;
    var rect = story.getBoundingClientRect();
    var range = Math.max(1, story.offsetHeight - window.innerHeight);
    var progress = Math.min(1, Math.max(0, -rect.top / range));
    var index = Math.min(states.length - 1, Math.floor(progress * states.length));
    applyStory(index, progress);
  }

  if (!story || reduce) {
    applyStory(states.length - 1, 1);
  } else {
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateStory();
        ticking = false;
      });
    }
    updateStory();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateStory);
  }

  var orbOne = document.querySelector(".orb-one");
  var orbTwo = document.querySelector(".orb-two");
  if (!reduce && orbOne && orbTwo) {
    var heroTicking = false;
    window.addEventListener("scroll", function () {
      if (heroTicking) return;
      heroTicking = true;
      window.requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 600);
        orbOne.style.transform = "translate3d(0," + (y * 0.12) + "px,0)";
        orbTwo.style.transform = "translate3d(0," + (y * -0.08) + "px,0)";
        heroTicking = false;
      });
    }, { passive: true });
  }
})();
