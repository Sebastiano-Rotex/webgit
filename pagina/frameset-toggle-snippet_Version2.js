<script>
(function(){
  function sendToggleToNav() {
    try {
      const navFrame = window.frames['meniu'];
      if (!navFrame) return;
      // prefer direct call (same-origin)
      try {
        if (typeof navFrame.navToggle === 'function') { navFrame.navToggle(); return; }
      } catch(e){}
      // fallback postMessage
      try { navFrame.postMessage({type:'toggle-nav'}, '*'); } catch(e){}
    } catch(err){ console.warn(err); }
  }

  window.addEventListener('keydown', function(e){
    if ((e.key && e.key.toLowerCase() === 'm') && e.altKey && !e.ctrlKey && !e.metaKey) {
      const active = document.activeElement;
      const tag = active && active.tagName ? active.tagName.toLowerCase() : '';
      if (active && (tag === 'input' || tag === 'textarea' || tag === 'select' || active.isContentEditable)) return;
      e.preventDefault();
      sendToggleToNav();
    }
    if (e.key === 'Escape') {
      try { const navFrame = window.frames['meniu']; navFrame && navFrame.postMessage({type:'close-nav'}, '*'); } catch(e){}
    }
  }, false);
})();
</script>