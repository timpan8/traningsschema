const guideDialog = document.getElementById('exercise-guide');
let guideOpener;
function stopGuideMedia() {
  guideDialog.querySelectorAll('video').forEach(video => { video.pause(); video.removeAttribute('src'); video.load(); });
}
function openExerciseGuide(day, index, name, dose, opener) {
  guideOpener = opener;
  document.getElementById('guide-title').textContent = name;
  document.getElementById('guide-dose').textContent = dose;
  const choices = exerciseGuides.days[day][index];
  const variantButtons = document.getElementById('guide-variants');
  variantButtons.replaceChildren();
  document.getElementById('variant-hint').hidden = choices.length < 2;
  function showVariant(id) {
    stopGuideMedia();
    const variant = exerciseGuides.variants[id];
    for (const button of variantButtons.children) button.setAttribute('aria-pressed', String(Number(button.dataset.id) === id));
    document.getElementById('variant-title').textContent = variant.label;
    document.getElementById('guide-equipment').textContent = variant.equipment;
    document.getElementById('guide-source').href = variant.source;
    const list = document.getElementById('guide-steps');
    list.replaceChildren(...variant.steps.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
    const holder = document.getElementById('guide-media');
    holder.replaceChildren();
    const media = document.createElement(variant.video ? 'video' : 'img');
    if (variant.video) {
      media.poster = variant.poster;
      media.src = variant.video;
      media.controls = true;
      media.loop = true;
      media.muted = true;
      media.playsInline = true;
      media.preload = 'none';
      media.setAttribute('aria-label', `Demonstration av ${variant.label}. Film utan ljud.`);
    } else {
      media.src = variant.poster;
      media.alt = `${variant.label}: stöd på underarmar och tår med kroppen i en rak linje.`;
    }
    media.addEventListener('error', () => {
      if (!holder.contains(media)) return;
      const error = document.createElement('p');
      error.className = 'media-error';
      error.textContent = 'Demonstrationen kunde inte laddas. Öppna källänken nedan för att se övningen.';
      holder.replaceChildren(error);
    }, { once: true });
    holder.append(media);
    document.getElementById('media-caption').textContent = variant.video ? 'Tryck på ▶ för att se rörelsen. Filmen är utan ljud och kan pausas.' : 'Håll positionen stilla – kroppen bildar en rak linje.';
  }
  if (choices.length > 1) for (const id of choices) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'variant-button'; button.dataset.id = id;
    button.textContent = exerciseGuides.variants[id].label;
    button.addEventListener('click', () => showVariant(id));
    variantButtons.append(button);
  }
  showVariant(choices[0]);
  guideDialog.showModal();
  guideDialog.scrollTop = 0;
  document.body.classList.add('guide-open');
  document.getElementById('guide-close').focus();
}
document.getElementById('guide-close').addEventListener('click', () => guideDialog.close());
guideDialog.addEventListener('close', () => {
  stopGuideMedia();
  document.body.classList.remove('guide-open');
  guideOpener?.focus();
});
guideDialog.addEventListener('click', event => {
  if (event.target !== guideDialog) return;
  const box = guideDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) guideDialog.close();
});
