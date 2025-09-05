function changeHeroText() {
  const text = document.getElementById("heroText");
  const frases = [
    "🌟 La creatividad no tiene límites.",
    "🚀 Bootstrap + JS = experiencias web interactivas.",
    "🔥 Personaliza todo a tu gusto.",
    "✨ Aprende y diviértete creando."
  ];
  text.innerText = frases[Math.floor(Math.random() * frases.length)];
}
