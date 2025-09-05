function changeText() {
  const text = document.getElementById("dynamicText");
  const frases = [
    "🌟 La creatividad no tiene límites.",
    "🚀 Bootstrap + JS = páginas interactivas.",
    "🔥 Tú puedes personalizar todo esto.",
    "✨ Aprende creando proyectos."
  ];
  text.innerText = frases[Math.floor(Math.random() * frases.length)];
}
