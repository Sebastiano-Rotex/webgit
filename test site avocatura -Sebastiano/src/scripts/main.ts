/**
 * Singurul JavaScript global al site-ului:
 *  - apariția secțiunilor (fade + 8px) și desenarea liniei semnătură la intrarea în ecran;
 *  - header compact la scroll;
 *  - meniul mobil (sertar accesibil: focus trap, Esc, aria-expanded).
 * Rulează la fiecare navigare (View Transitions) prin evenimentul astro:page-load.
 */

const root = document.documentElement;
root.classList.add("js");
document.addEventListener("astro:after-swap", () => root.classList.add("js"));

let io: IntersectionObserver | null = null;
let headerIo: IntersectionObserver | null = null;

function initReveal() {
  io?.disconnect();
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible), [data-draw]:not(.is-drawn)");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible", "is-drawn"));
    return;
  }
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add(el.hasAttribute("data-draw") ? "is-drawn" : "is-visible");
        io?.unobserve(el); // o singură dată
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  targets.forEach((el) => io!.observe(el));
}

function initHeader() {
  headerIo?.disconnect();
  const header = document.querySelector<HTMLElement>("[data-header]");
  const sentinel = document.querySelector(".header-sentinel");
  if (!header || !sentinel) return;
  headerIo = new IntersectionObserver(([e]) => header.classList.toggle("is-compact", !e.isIntersecting));
  headerIo.observe(sentinel);
}

function initMenu() {
  const openBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
  const menu = document.querySelector<HTMLElement>("[data-menu]");
  if (!openBtn || !menu || menu.dataset.ready) return;
  menu.dataset.ready = "1";
  const closeBtn = menu.querySelector<HTMLButtonElement>("[data-menu-close]")!;
  const panel = menu.querySelector<HTMLElement>(".drawer-panel")!;

  const focusables = () =>
    Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== "Tab") return;
    const f = focusables();
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  function open() {
    menu!.hidden = false;
    openBtn!.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtn.focus();
  }
  function close(restoreFocus = true) {
    if (menu!.hidden) return;
    menu!.hidden = true;
    openBtn!.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
    if (restoreFocus) openBtn!.focus();
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", () => close());
  menu.addEventListener("click", (e) => {
    if (e.target === menu) close();
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => close(false)));
  document.addEventListener("astro:before-swap", () => close(false), { once: true });
  window.matchMedia("(min-width: 64rem)").addEventListener("change", (m) => m.matches && close(false));
}

document.addEventListener("astro:page-load", () => {
  initReveal();
  initHeader();
  initMenu();
});
