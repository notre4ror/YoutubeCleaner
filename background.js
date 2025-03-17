// Crear la opción del menú contextual solo para YouTube
browser.contextMenus.create({
  id: "clean-youtube",
  title: "Abrir como embed (y copiar URL)",
  contexts: ["link"],
  documentUrlPatterns: ["*://*.youtube.com/*"]
});

// Evento de clic en el menú
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "clean-youtube") {
    const oldURL = info.linkUrl;
    const newURL = oldURL.replace("watch?v=", "embed/");

    // Copiar al portapapeles
    navigator.clipboard.writeText(newURL).catch(err =>
      console.error("Error copiando: ", err)
    );

    // Abrir en nueva pestaña
    browser.tabs.create({ url: newURL });
  }
});
