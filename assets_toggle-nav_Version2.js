/* toggle-nav.js
   Include pe fiecare pagină (parent sau child). Dacă pagina este într-un iframe,
   trimite o cerere parentului (postMessage). Dacă meniu e în documentul curent,
   îl va toggla direct.
   Implicit tasta de toggle: "[" (event.code === 'BracketLeft').
*/

(function () {
  const CONFIG = {
    // use event.code (recommended) or fallback to event.key
    useCode: true,
    toggleCode: 'BracketLeft', // tasta [
    toggleKey: '[',            // fallback dacă event.code nu e suportat
    ignoreInInputs: true
  };

  function isEditable(el) {
    if (!el) return false;
    const tag = el.tagName ? el.tagName.toLowerCase() : '';
    return tag === 'input' || tag === 'textarea' || tag === 'select' || el.isContentEditable;
  }

  // Try to find a navigation element in THIS document and toggle it.
  // Checks multiple common selectors (iframe navFrame, nav element, #siteNav, .nav-panel ...)
  function toggleNavInDocument() {
    const iframeSel = ['#navFrame', 'iframe#navFrame', 'iframe[name="meniu"]'];
    const navSel = ['#siteNav', 'nav', '.nav-panel', '.site-nav', '#nav'];

    // 1) iframe selector: toggle class 'open'
    for (const s of iframeSel) {
      const el = document.querySelector(s);
      if (el) {
        // if iframe element, toggle 'open' class and aria-hidden
        const isOpen = el.classList.toggle('open');
        el.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        // if iframe has contentWindow, notify child to sync focus
        try { el.contentWindow && el.contentWindow.postMessage({ type: 'parent-nav-state', open: isOpen }, '*'); } catch(e){}
        return isOpen;
      }
    }

    // 2) nav element selectors: toggle 'visible' or 'open' classes
    for (const s of navSel) {
      const el = document.querySelector(s);
      if (el) {
        // choose class 'visible' or 'open' depending on what's present
        const prefer = el.classList.contains('open') || el.classList.contains('visible') ? (el.classList.contains('open') ? 'open' : 'visible') : 'open';
        const isOpen = el.classList.toggle(prefer);
        el.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        // dispatch custom event for any listeners in page
        el.dispatchEvent(new CustomEvent('nav-toggled', { detail: { open: isOpen } }));
        return isOpen;
      }
    }

    // nothing toggled
    return null;
  }

  // If document is inside an iframe, ask parent to toggle (postMessage)
  function requestParentToggle() {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'toggle-nav-request', from: location.href }, '*');
        return true;
      }
    } catch (e) {
      // cross-origin maybe blocked
      console.warn('toggle-nav: cannot postMessage to parent', e);
    }
    return false;
  }

  // Public API exposed on window.ToggleNav
  const API = {
    toggleLocal: toggleNavInDocument,
    requestParentToggle,
    toggle: function () {
      // try local first; if nothing toggled, send to parent
      const result = toggleNavInDocument();
      if (result === null) {
        return requestParentToggle();
      }
      return result;
    },
    enable: function () { enabled = true; },
    disable: function () { enabled = false; }
  };

  // Listen for keydown in current document
  let enabled = true;
  window.addEventListener('keydown', function (e) {
    if (!enabled) return;
    if (CONFIG.ignoreInInputs && isEditable(document.activeElement)) return;

    const matched = CONFIG.useCode ? (e.code === CONFIG.toggleCode) : (e.key === CONFIG.toggleKey);
    if (matched) {
      e.preventDefault();
      e.stopPropagation();
      API.toggle();
    }
  }, true); // capture to catch early

  // Also listen for messages instructing this document to toggle (e.g., parent telling nav child to focus)
  window.addEventListener('message', function (ev) {
    const data = ev.data || {};
    if (data && data.type === 'toggle-nav') {
      API.toggle();
    }
    // optional: parent informs us nav open state
    if (data && data.type === 'parent-nav-state') {
      // child can react if needed
      const ev2 = new CustomEvent('parent-nav-state', { detail: data });
      window.dispatchEvent(ev2);
    }
  }, false);

  // expose API
  window.ToggleNav = API;
})();