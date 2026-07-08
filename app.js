const STORAGE_KEY = "speakingFriendsProgressV11";
const ACTIVITY_KEYS = ["word-bank", "conversation", "match", "missing", "role-play", "reflection"];
const PET_PAGE_SIZE = 24;

const STARTER_PET = {
  id: "starter-chick",
  emoji: "🐥",
  name: "Chick",
  species: "Chick",
  cost: 0
};

const PET_SPECIES = [
  { id: "cat", emoji: "🐱", name: "Cat", species: "Cat", cost: 2 },
  { id: "dog", emoji: "🐶", name: "Dog", species: "Dog", cost: 2 },
  { id: "rabbit", emoji: "🐰", name: "Rabbit", species: "Rabbit", cost: 2 },
  { id: "hamster", emoji: "🐹", name: "Hamster", species: "Hamster", cost: 2 },
  { id: "mouse", emoji: "🐭", name: "Mouse", species: "Mouse", cost: 2 },
  { id: "fox", emoji: "🦊", name: "Fox", species: "Fox", cost: 3 },
  { id: "panda", emoji: "🐼", name: "Panda", species: "Panda", cost: 3 },
  { id: "koala", emoji: "🐨", name: "Koala", species: "Koala", cost: 3 },
  { id: "frog", emoji: "🐸", name: "Frog", species: "Frog", cost: 3 },
  { id: "penguin", emoji: "🐧", name: "Penguin", species: "Penguin", cost: 3 },
  { id: "owl", emoji: "🦉", name: "Owl", species: "Owl", cost: 4 },
  { id: "turtle", emoji: "🐢", name: "Turtle", species: "Turtle", cost: 4 },
  { id: "duck", emoji: "🦆", name: "Duck", species: "Duck", cost: 4 },
  { id: "seal", emoji: "🦭", name: "Seal", species: "Seal", cost: 4 },
  { id: "otter", emoji: "🦦", name: "Otter", species: "Otter", cost: 4 },
  { id: "hedgehog", emoji: "🦔", name: "Hedgehog", species: "Hedgehog", cost: 4 },
  { id: "bee", emoji: "🐝", name: "Bee", species: "Bee", cost: 4 },
  { id: "ladybug", emoji: "🐞", name: "Ladybug", species: "Ladybug", cost: 4 },
  { id: "snail", emoji: "🐌", name: "Snail", species: "Snail", cost: 4 },
  { id: "lion", emoji: "🦁", name: "Lion", species: "Lion", cost: 5 },
  { id: "tiger", emoji: "🐯", name: "Tiger", species: "Tiger", cost: 5 },
  { id: "monkey", emoji: "🐵", name: "Monkey", species: "Monkey", cost: 5 },
  { id: "elephant", emoji: "🐘", name: "Elephant", species: "Elephant", cost: 5 },
  { id: "giraffe", emoji: "🦒", name: "Giraffe", species: "Giraffe", cost: 5 },
  { id: "zebra", emoji: "🦓", name: "Zebra", species: "Zebra", cost: 5 },
  { id: "raccoon", emoji: "🦝", name: "Raccoon", species: "Raccoon", cost: 5 },
  { id: "sloth", emoji: "🦥", name: "Sloth", species: "Sloth", cost: 5 },
  { id: "bat", emoji: "🦇", name: "Bat", species: "Bat", cost: 5 },
  { id: "parrot", emoji: "🦜", name: "Parrot", species: "Parrot", cost: 5 },
  { id: "butterfly", emoji: "🦋", name: "Butterfly", species: "Butterfly", cost: 5 },
  { id: "crab", emoji: "🦀", name: "Crab", species: "Crab", cost: 5 },
  { id: "kangaroo", emoji: "🦘", name: "Kangaroo", species: "Kangaroo", cost: 5 },
  { id: "llama", emoji: "🦙", name: "Llama", species: "Llama", cost: 5 },
  { id: "deer", emoji: "🦌", name: "Deer", species: "Deer", cost: 5 },
  { id: "horse", emoji: "🐴", name: "Horse", species: "Horse", cost: 5 },
  { id: "cow", emoji: "🐮", name: "Cow", species: "Cow", cost: 5 },
  { id: "pig", emoji: "🐷", name: "Pig", species: "Pig", cost: 5 },
  { id: "sheep", emoji: "🐑", name: "Sheep", species: "Sheep", cost: 5 },
  { id: "goat", emoji: "🐐", name: "Goat", species: "Goat", cost: 5 },
  { id: "chicken", emoji: "🐔", name: "Chicken", species: "Chicken", cost: 5 },
  { id: "eagle", emoji: "🦅", name: "Eagle", species: "Eagle", cost: 6 },
  { id: "swan", emoji: "🦢", name: "Swan", species: "Swan", cost: 6 },
  { id: "flamingo", emoji: "🦩", name: "Flamingo", species: "Flamingo", cost: 6 },
  { id: "peacock", emoji: "🦚", name: "Peacock", species: "Peacock", cost: 6 },
  { id: "whale", emoji: "🐳", name: "Whale", species: "Whale", cost: 6 },
  { id: "dolphin", emoji: "🐬", name: "Dolphin", species: "Dolphin", cost: 6 },
  { id: "octopus", emoji: "🐙", name: "Octopus", species: "Octopus", cost: 6 },
  { id: "jellyfish", emoji: "🪼", name: "Jellyfish", species: "Jellyfish", cost: 6 },
  { id: "squid", emoji: "🦑", name: "Squid", species: "Squid", cost: 6 },
  { id: "fish", emoji: "🐟", name: "Fish", species: "Fish", cost: 6 },
  { id: "tropical-fish", emoji: "🐠", name: "Tropical Fish", species: "Tropical Fish", cost: 6 },
  { id: "blowfish", emoji: "🐡", name: "Blowfish", species: "Blowfish", cost: 6 },
  { id: "shark", emoji: "🦈", name: "Shark", species: "Shark", cost: 6 },
  { id: "lobster", emoji: "🦞", name: "Lobster", species: "Lobster", cost: 6 },
  { id: "shrimp", emoji: "🦐", name: "Shrimp", species: "Shrimp", cost: 6 },
  { id: "oyster", emoji: "🦪", name: "Oyster", species: "Oyster", cost: 6 },
  { id: "crocodile", emoji: "🐊", name: "Crocodile", species: "Crocodile", cost: 7 },
  { id: "snake", emoji: "🐍", name: "Snake", species: "Snake", cost: 7 },
  { id: "lizard", emoji: "🦎", name: "Lizard", species: "Lizard", cost: 7 },
  { id: "gorilla", emoji: "🦍", name: "Gorilla", species: "Gorilla", cost: 7 },
  { id: "orangutan", emoji: "🦧", name: "Orangutan", species: "Orangutan", cost: 7 },
  { id: "leopard", emoji: "🐆", name: "Leopard", species: "Leopard", cost: 7 },
  { id: "rhinoceros", emoji: "🦏", name: "Rhinoceros", species: "Rhinoceros", cost: 7 },
  { id: "hippopotamus", emoji: "🦛", name: "Hippopotamus", species: "Hippopotamus", cost: 7 },
  { id: "bison", emoji: "🦬", name: "Bison", species: "Bison", cost: 7 },
  { id: "camel", emoji: "🐪", name: "Camel", species: "Camel", cost: 7 },
  { id: "wolf", emoji: "🐺", name: "Wolf", species: "Wolf", cost: 7 },
  { id: "bear", emoji: "🐻", name: "Bear", species: "Bear", cost: 7 },
  { id: "polar-bear", emoji: "🐻‍❄️", name: "Polar Bear", species: "Polar Bear", cost: 8 },
  { id: "dragon", emoji: "🐲", name: "Dragon", species: "Dragon", cost: 8 },
  { id: "unicorn", emoji: "🦄", name: "Unicorn", species: "Unicorn", cost: 8 },
  { id: "dinosaur", emoji: "🦖", name: "Dinosaur", species: "Dinosaur", cost: 8 },
  { id: "long-neck-dino", emoji: "🦕", name: "Long-neck Dino", species: "Long-neck Dino", cost: 8 }
];

const PET_STYLES = [
  { id: "tiny", label: "Tiny", cost: 1 },
  { id: "sleepy", label: "Sleepy", cost: 1 },
  { id: "happy", label: "Happy", cost: 1 },
  { id: "fluffy", label: "Fluffy", cost: 2 },
  { id: "sparkly", label: "Sparkly", cost: 2 },
  { id: "rainbow", label: "Rainbow", cost: 3 },
  { id: "cloud", label: "Cloud", cost: 3 },
  { id: "star", label: "Star", cost: 3 },
  { id: "moon", label: "Moon", cost: 3 },
  { id: "candy", label: "Candy", cost: 4 },
  { id: "forest", label: "Forest", cost: 4 },
  { id: "ocean", label: "Ocean", cost: 4 },
  { id: "winter", label: "Winter", cost: 4 },
  { id: "summer", label: "Summer", cost: 4 },
  { id: "royal", label: "Royal", cost: 5 },
  { id: "magic", label: "Magic", cost: 5 },
  { id: "cosmic", label: "Cosmic", cost: 6 },
  { id: "golden", label: "Golden", cost: 6 },
  { id: "crystal", label: "Crystal", cost: 7 },
  { id: "legendary", label: "Legendary", cost: 8 }
];

const PET_CATALOG = [
  STARTER_PET,
  ...PET_SPECIES
];


const SIMON_ACTIONS = [
  { id: "jump", label: "jump", emoji: "🦘", petText: "jumps!" },
  { id: "run", label: "run", emoji: "🏃", petText: "runs!" },
  { id: "walk", label: "walk", emoji: "🚶", petText: "walks!" },
  { id: "hop", label: "hop", emoji: "🐇", petText: "hops!" },
  { id: "dance", label: "dance", emoji: "🎵", petText: "dances!" },
  { id: "sleep", label: "sleep", emoji: "💤", petText: "goes to sleep." },
  { id: "eat", label: "eat", emoji: "🍎", petText: "eats a snack." },
  { id: "drink", label: "drink", emoji: "💧", petText: "drinks water." },
  { id: "clap", label: "clap", emoji: "👏", petText: "claps!" },
  { id: "wave", label: "wave", emoji: "👋", petText: "waves!" },
  { id: "sit-down", label: "sit down", emoji: "🪑", petText: "sits down." },
  { id: "stand-up", label: "stand up", emoji: "🙋", petText: "stands up." },
  { id: "turn-around", label: "turn around", emoji: "🔄", petText: "turns around." },
  { id: "swim", label: "swim", emoji: "🏊", petText: "swims!" },
  { id: "fly", label: "fly", emoji: "🪽", petText: "flies!" },
  { id: "sing", label: "sing", emoji: "🎤", petText: "sings!" },
  { id: "read", label: "read", emoji: "📖", petText: "reads a book." },
  { id: "write", label: "write", emoji: "✏️", petText: "writes!" },
  { id: "draw", label: "draw", emoji: "🎨", petText: "draws!" },
  { id: "smile", label: "smile", emoji: "😊", petText: "smiles!" },
  { id: "laugh", label: "laugh", emoji: "😂", petText: "laughs!" },
  { id: "cry", label: "cry", emoji: "💧", petText: "cries softly." },
  { id: "look", label: "look", emoji: "👀", petText: "looks carefully." },
  { id: "listen", label: "listen", emoji: "👂", petText: "listens." },
  { id: "stop", label: "stop", emoji: "✋", petText: "stops." },
  { id: "open", label: "open", emoji: "📂", petText: "opens it." },
  { id: "close", label: "close", emoji: "📕", petText: "closes it." },
  { id: "wash", label: "wash", emoji: "🧼", petText: "washes." },
  { id: "brush", label: "brush", emoji: "🪥", petText: "brushes." },
  { id: "cook", label: "cook", emoji: "🍳", petText: "cooks!" },
  { id: "kick", label: "kick", emoji: "⚽", petText: "kicks!" },
  { id: "catch", label: "catch", emoji: "🧤", petText: "catches it!" },
  { id: "throw", label: "throw", emoji: "🎾", petText: "throws it!" },
  { id: "stretch", label: "stretch", emoji: "🧘", petText: "stretches!" }
];

const SIMON_TARGET_SCORE = 5;

const app = document.querySelector("#app");

let progress = loadProgress();
let matchGame = null;
let missingGame = null;
let wordBankGame = null;
let conversationState = {};
let rolePlayState = {};
let speechToken = 0;
let petShopPage = 0;
let simonGame = null;

let recordingState = {
  mediaRecorder: null,
  chunks: [],
  stream: null,
  maxTimer: null,
  countdownTimer: null
};

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return normalizeProgress({ completedActivities: {} });
  }

  try {
    return normalizeProgress(JSON.parse(saved));
  } catch {
    return normalizeProgress({ completedActivities: {} });
  }
}

function normalizeProgress(data) {
  if (!data.completedActivities) {
    data.completedActivities = {};
  }

  if (!data.reflections) {
    data.reflections = {};
  }

  if (!data.finalReflection) {
    data.finalReflection = {};
  }

  if (!data.shop) {
    data.shop = {};
  }

  if (typeof data.bonusStars !== "number") {
    data.bonusStars = 0;
  }

  if (!Array.isArray(data.shop.ownedPets)) {
    data.shop.ownedPets = [
      {
        catalogId: STARTER_PET.id,
        customName: "Buddy"
      }
    ];
  }

  if (!data.shop.activePetId) {
    data.shop.activePetId = data.shop.ownedPets[0]?.catalogId || STARTER_PET.id;
  }

  if (typeof data.shop.spentStars !== "number") {
    data.shop.spentStars = 0;
  }

  if (!data.shop.simonRewards) {
    data.shop.simonRewards = {};
  }

  return data;
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function completedActivities(id) {
  return progress.completedActivities[id] || [];
}

function isActivityCompleted(id, activity) {
  return completedActivities(id).includes(activity);
}

function completeActivity(id, activity) {
  if (!progress.completedActivities[id]) {
    progress.completedActivities[id] = [];
  }

  if (!progress.completedActivities[id].includes(activity)) {
    progress.completedActivities[id].push(activity);
    saveProgress();
    updateStarPill();
    return true;
  }

  return false;
}

function earnedStars() {
  const activityStars = Object.values(progress.completedActivities)
    .reduce((total, activities) => total + activities.length, 0);

  return activityStars + (progress.bonusStars || 0);
}

function spentStars() {
  return progress.shop?.spentStars || 0;
}

function availableStars() {
  return Math.max(0, earnedStars() - spentStars());
}

function totalStars() {
  return availableStars();
}

function situationProgress(id) {
  const count = ACTIVITY_KEYS.filter(key => isActivityCompleted(id, key)).length;
  return { count, total: ACTIVITY_KEYS.length };
}

function updateStarPill() {
  const pill = document.querySelector("#starPill");
  if (pill) pill.textContent = `⭐ ${availableStars()}`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stopSpeech() {
  speechToken += 1;

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function roleVoice(situation, role) {
  const defaults = {
    doctor: { pitch: 0.82, rate: 0.82 },
    patient: { pitch: 1.18, rate: 0.88 }
  };

  return situation.voiceProfiles?.[role] || defaults[role] || { pitch: 1, rate: 0.86 };
}

function speakText(text, rate = 0.86, pitch = 1) {
  if (!("speechSynthesis" in window)) return;

  stopSpeech();
  const token = speechToken;

  setTimeout(() => {
    if (token !== speechToken) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = rate;
    utterance.pitch = pitch;

    window.speechSynthesis.speak(utterance);
  }, 80);
}

function speakConversationLines(situation, studentRole = null, lines = situation.conversation, callbacks = {}) {
  if (!("speechSynthesis" in window)) return;

  stopSpeech();

  const token = speechToken;

  function next(index) {
    if (token !== speechToken || index >= lines.length) {
      callbacks.onEnd?.();
      return;
    }

    const line = lines[index];
    const isStudentLine = studentRole && line.role === studentRole;

    callbacks.onLine?.(index, line, isStudentLine);

    if (isStudentLine) {
      const pause = Math.min(5200, Math.max(2600, line.text.length * 120));
      setTimeout(() => next(index + 1), pause);
      return;
    }

    const voice = roleVoice(situation, line.role);
    const utterance = new SpeechSynthesisUtterance(line.text);

    utterance.lang = "en-GB";
    utterance.rate = voice.rate;
    utterance.pitch = voice.pitch;
    utterance.onend = () => setTimeout(() => next(index + 1), 280);

    window.speechSynthesis.speak(utterance);
  }

  next(0);
}

function stopActiveRecording() {
  clearTimeout(recordingState.maxTimer);
  clearInterval(recordingState.countdownTimer);

  if (recordingState.mediaRecorder && recordingState.mediaRecorder.state === "recording") {
    recordingState.mediaRecorder.stop();
  }

  if (recordingState.stream) {
    recordingState.stream.getTracks().forEach(track => track.stop());
    recordingState.stream = null;
  }
}

function goTo(route) {
  stopSpeech();
  window.location.hash = route;
}

function getRoute() {
  return window.location.hash.replace("#", "") || "/";
}

function getCurrentSituation() {
  const route = getRoute();
  const situationId = route.split("/").filter(Boolean)[0];
  return situations.find(item => item.id === situationId);
}

function lineSideClass(situation, line) {
  const roles = [];

  situation.conversation.forEach(item => {
    if (!roles.includes(item.role)) roles.push(item.role);
  });

  return line.role === roles[0] ? "left-side" : "right-side";
}

function activityRoute(activity, situationId) {
  return `/${situationId}/${activity === "word-bank" ? "word-bank" : activity}`;
}

function openSituation(situationId) {
  const status = situationProgress(situationId);

  if (status.count === status.total) {
    goTo(`/${situationId}/menu`);
    return;
  }

  const next = ACTIVITY_KEYS.find(activity => !isActivityCompleted(situationId, activity));
  goTo(activityRoute(next || "word-bank", situationId));
}

function catalogPet(id) {
  return PET_CATALOG.find(pet => pet.id === id) || STARTER_PET;
}

function ownedPet(id) {
  return progress.shop.ownedPets.find(pet => pet.catalogId === id);
}

function activePetInfo() {
  const owned = ownedPet(progress.shop.activePetId) || progress.shop.ownedPets[0];
  const pet = catalogPet(owned.catalogId);

  return {
    ...pet,
    customName: owned.customName || pet.species || pet.name
  };
}

function petReactionText(earned) {
  const pet = activePetInfo();
  return earned ? `${pet.customName} is super happy!` : `${pet.customName} loves practising with you!`;
}

function petStyleKey(pet) {
  if (pet.id === STARTER_PET.id) return "starter";

  let hash = 0;

  for (let i = 0; i < pet.id.length; i++) {
    hash = pet.id.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % PET_STYLES.length;
  return PET_STYLES[index].id;
}

function petPalette(styleKey) {
  const palettes = {
    starter:   { body: "#FFD96B", inner: "#FFEAA6", accent: "#FFB84C", cheek: "#FFB3C7" },
    tiny:      { body: "#FFD7E8", inner: "#FFF1F7", accent: "#FF96B7", cheek: "#FFB8CC" },
    sleepy:    { body: "#D8D9FF", inner: "#F1F2FF", accent: "#9EA7FF", cheek: "#C5C9FF" },
    happy:     { body: "#FFE08A", inner: "#FFF1BE", accent: "#FFB84C", cheek: "#FFB3C7" },
    fluffy:    { body: "#F4E6FF", inner: "#FCF7FF", accent: "#C48DFF", cheek: "#E7C9FF" },
    sparkly:   { body: "#D9FFF5", inner: "#F3FFFB", accent: "#5ED6BE", cheek: "#AFEEDC" },
    rainbow:   { body: "#FFDDE1", inner: "#FFF5F6", accent: "#7C8CF8", cheek: "#FFC2D3" },
    cloud:     { body: "#E8F1FF", inner: "#FFFFFF", accent: "#8BC5FF", cheek: "#C6E2FF" },
    star:      { body: "#FFF0A8", inner: "#FFF7D1", accent: "#F7BE2C", cheek: "#FFD89A" },
    moon:      { body: "#DDE2FF", inner: "#F4F6FF", accent: "#8894F7", cheek: "#C8D0FF" },
    candy:     { body: "#FFD6F2", inner: "#FFF0FA", accent: "#FF7BC3", cheek: "#FFC2E8" },
    forest:    { body: "#D7F1D8", inner: "#F3FFF3", accent: "#70C173", cheek: "#B7E6B9" },
    ocean:     { body: "#D6F2FF", inner: "#F2FCFF", accent: "#58BFD5", cheek: "#BFE9F7" },
    winter:    { body: "#EAF6FF", inner: "#FFFFFF", accent: "#8EC5FF", cheek: "#D5EEFF" },
    summer:    { body: "#FFE7B8", inner: "#FFF5DA", accent: "#FFB84C", cheek: "#FFD8A0" },
    royal:     { body: "#E3D7FF", inner: "#F6F0FF", accent: "#9A6BFF", cheek: "#D0B8FF" },
    magic:     { body: "#EAD8FF", inner: "#FBF4FF", accent: "#B07CFF", cheek: "#E3CCFF" },
    cosmic:    { body: "#1F2446", inner: "#30376B", accent: "#7C8CF8", cheek: "#6575D6" },
    golden:    { body: "#FFD66E", inner: "#FFF0B8", accent: "#E6A900", cheek: "#F6C85D" },
    crystal:   { body: "#D8FBFF", inner: "#F6FEFF", accent: "#74D7E8", cheek: "#BDF4FC" },
    legendary: { body: "#FFE2A8", inner: "#FFF4D6", accent: "#FF8A5B", cheek: "#FFD1AB" }
  };

  return palettes[styleKey] || palettes.happy;
}

function renderPetArt(pet, size = "card") {
  const styleKey = petStyleKey(pet);
  const palette = petPalette(styleKey);

  return `
    <div class="pet-art pet-art-${size}">
      <div class="pet-sticker" style="
        --pet-bg: ${palette.body};
        --pet-inner: ${palette.inner};
        --pet-accent: ${palette.accent};
        --pet-cheek: ${palette.cheek};
      ">
        <div class="pet-sticker-glow"></div>
        <div class="pet-sticker-emoji">${pet.emoji}</div>
      </div>
    </div>
  `;
}

function showPetNameModal(petId, mode = "buy") {
  const pet = catalogPet(petId);
  const existing = ownedPet(petId);

  document.querySelectorAll(".pet-modal-overlay").forEach(item => item.remove());

  const overlay = document.createElement("div");
  overlay.className = "pet-modal-overlay";

  overlay.innerHTML = `
    <div class="pet-modal-card">
      <button class="pet-modal-close" aria-label="Close">×</button>

      <div class="pet-modal-art">
        ${renderPetArt(pet, "modal")}
      </div>

      <h3>${mode === "buy" ? "Name your new pet" : "Rename your pet"}</h3>
      <p>${escapeHtml(pet.name)}</p>

      <input
        id="petNameInput"
        class="pet-modal-input"
        type="text"
        value="${escapeHtml(existing?.customName || pet.species || pet.name)}"
        placeholder="Type a name"
        maxlength="24"
      />

      <div class="pet-modal-actions">
        <button class="secondary-btn" data-action="cancel">Cancel</button>
        <button class="primary-btn" data-action="save">${mode === "buy" ? "Unlock pet" : "Save name"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector("#petNameInput");
  const closeModal = () => overlay.remove();

  overlay.querySelector(".pet-modal-close").addEventListener("click", closeModal);
  overlay.querySelector('[data-action="cancel"]').addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  overlay.querySelector('[data-action="save"]').addEventListener("click", () => {
    const customName = input.value.trim() || pet.species || pet.name;

    if (mode === "buy") {
      if (!ownedPet(petId)) {
        if (availableStars() < pet.cost) {
          alert(`You need ${pet.cost} stars to unlock this pet.`);
          return;
        }

        progress.shop.ownedPets.push({
          catalogId: pet.id,
          customName
        });

        progress.shop.activePetId = pet.id;
        progress.shop.spentStars += pet.cost;
      } else {
        const owned = ownedPet(petId);
        owned.customName = customName;
        progress.shop.activePetId = pet.id;
      }
    } else {
      const owned = ownedPet(petId);
      if (owned) owned.customName = customName;
    }

    saveProgress();
    closeModal();
    renderPetShop();
  });

  setTimeout(() => {
    input.focus();
    input.select();
  }, 50);
}

function buyPet(petId) {
  const pet = catalogPet(petId);

  if (ownedPet(petId)) {
    setActivePet(petId);
    return;
  }

  if (availableStars() < pet.cost) {
    alert(`You need ${pet.cost} stars to unlock this pet.`);
    return;
  }

  showPetNameModal(petId, "buy");
}

function setActivePet(petId) {
  if (!ownedPet(petId)) return;
  progress.shop.activePetId = petId;
  saveProgress();
  renderPetShop();
}

function renamePet(petId) {
  if (!ownedPet(petId)) return;
  showPetNameModal(petId, "rename");
}

function nextPetPage() {
  const maxPage = Math.ceil(PET_CATALOG.length / PET_PAGE_SIZE) - 1;
  petShopPage = Math.min(maxPage, petShopPage + 1);
  renderPetShop();
}

function previousPetPage() {
  petShopPage = Math.max(0, petShopPage - 1);
  renderPetShop();
}

function finishActivity(situationId, activity, nextRoute, replayRoute) {
  stopSpeech();

  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  const earned = completeActivity(situationId, activity);

  showStarPopup({
    situation,
    activity,
    earned,
    nextRoute,
    replayRoute
  });
}

function showStarPopup({ situation, activity, earned, nextRoute, replayRoute }) {
  document.querySelectorAll(".star-overlay").forEach(item => item.remove());

  const pet = activePetInfo();
  const overlay = document.createElement("div");
  overlay.className = "star-overlay";

  overlay.innerHTML = `
    <div class="star-pop">
      <div class="big-star">⭐</div>

      <h2>${earned ? "Congratulations!" : "Great practice!"}</h2>

      <p class="star-popup-main">
        ${earned ? "You have earned a star!" : "You already have this star."}
      </p>

      <div class="star-pet-reaction">
        ${renderPetArt(pet, "popup")}
        <strong>${escapeHtml(petReactionText(earned))}</strong>
      </div>

      <p class="star-popup-sub">
        ${earned ? "Amazing work. Keep going!" : "You can practise again or continue."}
      </p>

      <div class="star-popup-actions">
        <button class="secondary-btn" data-action="again">Play again</button>
        <button class="primary-btn" data-action="continue">
          ${nextRoute === "/" ? "Back home" : "Continue"}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('[data-action="again"]').addEventListener("click", () => {
    overlay.remove();
    replayActivity(situation.id, activity, replayRoute);
  });

  overlay.querySelector('[data-action="continue"]').addEventListener("click", () => {
    overlay.remove();
    goTo(nextRoute);
  });
}

function replayActivity(situationId, activity, route) {
  stopSpeech();

  if (activity === "word-bank") {
    wordBankGame = { situationId, viewed: [] };
  }

  if (activity === "conversation") {
    conversationState[situationId] = false;
  }

  if (activity === "match") {
    matchGame = null;
  }

  if (activity === "missing") {
    missingGame = null;
  }

  if (activity === "role-play") {
    rolePlayState[situationId] = {
      selectedRole: null,
      audioBlob: null,
      audioUrl: null,
      recording: false,
      message: "",
      studentName: "",
      studentClass: "",
      timeLeft: 60,
      activeLineIndex: null,
      playingPartner: false
    };
  }

  if (getRoute() === route) {
    render();
    return;
  }

  window.location.hash = route;
}

function renderShell(content) {
  app.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <button class="brand brand-button" onclick="goTo('/')" aria-label="Go to situations">
          <div class="logo">🎙️</div>
          <div>
            <h1 class="brand-title">Speaking Friends</h1>
            <p class="brand-subtitle">Listen, speak, and grow in English</p>
          </div>
        </button>

        <button class="star-pet-pill" onclick="goTo('/pets')" aria-label="Open Pet Shop">
          <span id="starPill" class="star-pet-stars">⭐ ${availableStars()}</span>
          <span class="star-pet-divider"></span>
          <span class="star-pet-pets">🐾 Pets</span>
        </button>
      </header>

      ${content}
    </main>
  `;
}

function renderHome() {
  const cards = situations.map(situation => {
    const status = situationProgress(situation.id);
    const done = status.count === status.total;

    return `
      <button class="situation-card" onclick="openSituation('${situation.id}')">
        <div class="card-top">
          <div class="card-icon">${situation.emoji}</div>
          <div class="card-progress">${done ? "⭐ Done" : `⭐ ${status.count}/${status.total}`}</div>
        </div>

        <h3>${escapeHtml(situation.title)}</h3>
        <p>${escapeHtml(situation.description)}</p>

        <div class="card-action">
          ${done ? "Choose activity" : "Start practice"}
          <span>→</span>
        </div>
      </button>
    `;
  }).join("");

  const finalUnlocked = isFinalReflectionUnlocked();
  const finalSent = Boolean(progress.finalReflection?.sentAt);

  const finalCard = `
    <button class="situation-card final-reflection-card ${finalUnlocked ? "" : "locked-card"}" onclick="${finalUnlocked ? "goTo('/final-reflection')" : "showFinalLockedNotice()"}">
      <div class="card-top">
        <div class="card-icon">📝</div>
        <div class="card-progress">${finalUnlocked ? (finalSent ? "✅ Sent" : "Unlocked") : "🔒 Locked"}</div>
      </div>

      <h3>Final Reflection</h3>
      <p>Think about your favourite situations, your progress and what you can say now.</p>

      <div class="card-action">
        ${finalUnlocked ? "Open reflection" : "Complete all missions"}
        <span>→</span>
      </div>
    </button>
  `;

  renderShell(`
    <section class="screen">
      <div class="hero">
        <h2>Choose a speaking mission.</h2>
        <p>Practise conversations with listening and speaking activities.</p>
      </div>

      <h2 class="section-title">Situations</h2>

      <div class="situation-grid">
        ${cards}
        ${finalCard}
      </div>
    </section>
  `);
}

function openPetActionModal(petId) {
  const owned = ownedPet(petId);
  const pet = catalogPet(petId);

  if (!owned) return;

  document.querySelectorAll(".pet-modal-overlay").forEach(item => item.remove());

  const overlay = document.createElement("div");
  overlay.className = "pet-modal-overlay";

  overlay.innerHTML = `
    <div class="pet-modal-card pet-action-modal">
      <button class="pet-modal-close" aria-label="Close">×</button>

      <div class="pet-modal-art">
        ${renderPetArt(pet, "modal")}
      </div>

      <h3>${escapeHtml(owned.customName || pet.species)}</h3>
      <p>${escapeHtml(pet.name)}</p>

      <div class="pet-modal-actions pet-action-buttons">
        <button class="primary-btn" data-action="play">Play Simon Says</button>
        <button class="secondary-btn" data-action="active">${progress.shop.activePetId === petId ? "Using now" : "Set active"}</button>
        <button class="secondary-btn" data-action="rename">Rename</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeModal = () => overlay.remove();

  overlay.querySelector(".pet-modal-close").addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  overlay.querySelector('[data-action="play"]').addEventListener("click", () => {
    closeModal();
    startSimonGame(petId);
    goTo(`/simon/${petId}`);
  });

  overlay.querySelector('[data-action="active"]').addEventListener("click", () => {
    if (progress.shop.activePetId !== petId) {
      progress.shop.activePetId = petId;
      saveProgress();
    }

    closeModal();
    renderPetShop();
  });

  overlay.querySelector('[data-action="rename"]').addEventListener("click", () => {
    closeModal();
    renamePet(petId);
  });
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function simonRewardAvailable() {
  return !progress.shop.simonRewards?.[todayKey()];
}

function normaliseSpeech(text) {
  return String(text)
    .toLowerCase()
    .replace(/[.,!?;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function startSimonGame(petId) {
  const pet = catalogPet(petId);
  const owned = ownedPet(petId);

  simonGame = {
    petId,
    pet,
    customName: owned?.customName || pet.species || pet.name,
    score: 0,
    attempts: 0,
    transcript: "",
    typedText: "",
    feedback: "Choose an action. Say or type: Simon says jump.",
    petMood: "idle",
    lastAction: "",
    listening: false,
    micSupported: Boolean(window.SpeechRecognition || window.webkitSpeechRecognition),
    rewardEarned: false,
    lastEffect: ""
  };
}

function ensureSimonGame(petId) {
  if (!simonGame || simonGame.petId !== petId) {
    startSimonGame(petId);
  }

  return simonGame;
}

function resetSimonRound() {
  if (!simonGame) return;

  simonGame.transcript = "";
  simonGame.typedText = "";
  simonGame.feedback = "Choose any action and say it with Simon says.";
  simonGame.petMood = "idle";
  simonGame.lastAction = "";
  simonGame.lastEffect = "";

  renderSimonSays(simonGame.petId);
}

function updateSimonTyped(value) {
  if (!simonGame) return;
  simonGame.typedText = value;
}

function findSimonAction(answer) {
  const actionsByLength = [...SIMON_ACTIONS].sort((a, b) => b.label.length - a.label.length);
  return actionsByLength.find(action => answer.includes(action.label));
}

function evaluateSimonAnswer(rawAnswer) {
  if (!simonGame) return;

  const answer = normaliseSpeech(rawAnswer);
  const heardSimon = answer.startsWith("simon says") || answer.includes("simon says");
  const action = findSimonAction(answer);

  simonGame.transcript = rawAnswer;
  simonGame.attempts += 1;

  if (!answer) {
    simonGame.petMood = "idle";
    simonGame.lastEffect = "";
    simonGame.feedback = "Try again. Say it or type it.";
    renderSimonSays(simonGame.petId);
    return;
  }

  if (!action) {
    simonGame.petMood = "still";
    simonGame.lastEffect = "❓";
    simonGame.lastAction = `${simonGame.customName} does not understand the action.`;
    simonGame.feedback = `I heard "${rawAnswer}", but I could not find an action.`;
    renderSimonSays(simonGame.petId);
    return;
  }

  if (heardSimon) {
    simonGame.petMood = action.id;
    simonGame.lastEffect = action.emoji;
    simonGame.lastAction = `${simonGame.customName} ${action.petText}`;
    simonGame.score += 1;
    simonGame.feedback = `Great! ${simonGame.lastAction}`;
  } else {
    simonGame.petMood = "still";
    simonGame.lastEffect = "✋";
    simonGame.lastAction = `${simonGame.customName} stays still.`;
    simonGame.feedback = `Good action, but you did not say "Simon says". ${simonGame.customName} stays still.`;
  }

  if (simonGame.score >= SIMON_TARGET_SCORE && !simonGame.rewardEarned) {
    awardSimonStar();
  }

  renderSimonSays(simonGame.petId);
}

function checkTypedSimonAnswer() {
  if (!simonGame) return;
  evaluateSimonAnswer(simonGame.typedText);
}

function awardSimonStar() {
  if (!simonGame) return;

  if (simonRewardAvailable()) {
    progress.bonusStars = (progress.bonusStars || 0) + 1;
    progress.shop.simonRewards[todayKey()] = true;
    saveProgress();

    simonGame.rewardEarned = true;
    simonGame.feedback = `${simonGame.customName} is proud of you! You earned 1 bonus star.`;
    return;
  }

  simonGame.rewardEarned = true;
  simonGame.feedback = `Great work! You already earned today's Simon Says star.`;
}

function startSimonListening() {
  if (!simonGame) return;

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!Recognition) {
    simonGame.feedback = "Microphone recognition is not available here. Type your command instead.";
    renderSimonSays(simonGame.petId);
    return;
  }

  const recognition = new Recognition();
  recognition.lang = "en-GB";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  simonGame.listening = true;
  simonGame.transcript = "";
  simonGame.feedback = "Listening...";
  renderSimonSays(simonGame.petId);

  recognition.onresult = (event) => {
    let text = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      text += event.results[i][0].transcript;
    }

    simonGame.transcript = text;

    const transcriptBox = document.querySelector("#simonTranscript");
    if (transcriptBox) transcriptBox.textContent = text || "Listening...";

    if (event.results[event.results.length - 1].isFinal) {
      simonGame.listening = false;
      evaluateSimonAnswer(text);
    }
  };

  recognition.onerror = () => {
    simonGame.listening = false;
    simonGame.feedback = "The microphone did not understand. Try again or type it.";
    renderSimonSays(simonGame.petId);
  };

  recognition.onend = () => {
    if (!simonGame) return;

    if (simonGame.listening) {
      simonGame.listening = false;

      if (simonGame.transcript) {
        evaluateSimonAnswer(simonGame.transcript);
      } else {
        simonGame.feedback = "I did not hear anything. Try again or type it.";
        renderSimonSays(simonGame.petId);
      }
    }
  };

  recognition.start();
}

function renderSimonActionCards() {
  return SIMON_ACTIONS.map(action => `
    <button class="simon-action-card" onclick="chooseSimonAction('${action.id}')">
      <span>${action.emoji}</span>
      <strong>${escapeHtml(action.label)}</strong>
    </button>
  `).join("");
}

function chooseSimonAction(actionId) {
  if (!simonGame) return;

  const action = SIMON_ACTIONS.find(item => item.id === actionId);
  if (!action) return;

  simonGame.typedText = `Simon says ${action.label}`;
  simonGame.feedback = `Now say or check: Simon says ${action.label}`;

  const input = document.querySelector("#simonTypedInput");
  if (input) input.value = simonGame.typedText;

  speakText(action.label, 0.78, 1);
}

function simonPetClass() {
  if (!simonGame) return "";

  if (simonGame.petMood === "jump" || simonGame.petMood === "hop") return "simon-pet-jump";
  if (simonGame.petMood === "run" || simonGame.petMood === "walk") return "simon-pet-run";
  if (simonGame.petMood === "dance" || simonGame.petMood === "sing") return "simon-pet-dance";
  if (simonGame.petMood === "sleep") return "simon-pet-sleep";
  if (simonGame.petMood === "clap" || simonGame.petMood === "wave") return "simon-pet-clap";
  if (simonGame.petMood === "turn-around") return "simon-pet-turn";
  if (["eat", "drink", "smile", "laugh", "cry", "look", "listen", "open", "close", "wash", "brush", "cook", "kick", "catch", "throw", "stretch", "swim", "fly"].includes(simonGame.petMood)) return "simon-pet-bounce";
  if (simonGame.petMood === "sit-down") return "simon-pet-sit";
  if (simonGame.petMood === "stand-up") return "simon-pet-stand";

  return "";
}

function simonEffect() {
  if (!simonGame || !simonGame.lastEffect) return "";

  return `
    <div class="simon-effect ${simonGame.petMood === "still" ? "simon-effect-stop" : ""}">
      ${escapeHtml(simonGame.lastEffect)}
    </div>
  `;
}

function renderSimonSays(petId) {
  const game = ensureSimonGame(petId);
  const pet = catalogPet(petId);
  const rewardText = simonRewardAvailable()
    ? "Get 5 correct Simon commands to earn 1 bonus star today."
    : "You already earned today's bonus star.";

  renderShell(`
    <section class="screen">
      ${renderPageHead("Simon Says", `Play with ${game.customName}`, "/pets")}

      <div class="panel simon-panel">
        <div class="simon-freeplay-card">
          <div class="simon-pet-stage">
            <div class="simon-pet-wrap">
              ${simonEffect()}
              <div class="simon-pet ${simonPetClass()}">
                ${renderPetArt(pet, "hero")}
              </div>
            </div>

            <div class="simon-pet-caption">
              <strong>${escapeHtml(game.customName)}</strong>
              <span>${escapeHtml(game.lastAction || "is waiting for your command.")}</span>
            </div>

            <div class="simon-score-row">
              <span>Score ${game.score}/${SIMON_TARGET_SCORE}</span>
              <span>${escapeHtml(rewardText)}</span>
            </div>
          </div>

          <div class="simon-input-card">
            <h3>Say your own command</h3>
            <p>Choose any action. If you say <strong>Simon says</strong>, your pet will do it. If not, your pet stays still.</p>

            <div id="simonTranscript" class="simon-transcript">
              ${escapeHtml(game.transcript || "The microphone transcript will appear here...")}
            </div>

            <div class="simon-actions-row">
              <button class="primary-btn" onclick="startSimonListening()" ${game.listening ? "disabled" : ""}>
                🎤 ${game.listening ? "Listening..." : "Start microphone"}
              </button>

              <button class="secondary-btn" onclick="resetSimonRound()">
                Clear
              </button>
            </div>

            <div class="simon-type-row">
              <input
                id="simonTypedInput"
                type="text"
                value="${escapeHtml(game.typedText)}"
                placeholder="Type: Simon says jump"
                oninput="updateSimonTyped(this.value)"
              />

              <button class="primary-btn" onclick="checkTypedSimonAnswer()">
                Check
              </button>
            </div>

            <div class="simon-feedback">
              ${escapeHtml(game.feedback)}
            </div>
          </div>
        </div>

        <div class="simon-scaffold-card">
          <h3>Action cards</h3>
          <p>Tap a card to hear the word and choose the action.</p>

          <div class="simon-action-grid">
            ${renderSimonActionCards()}
          </div>
        </div>
      </div>
    </section>
  `);
}



function isSituationFullyCompleted(situationId) {
  return ACTIVITY_KEYS.every(key => isActivityCompleted(situationId, key));
}

function isFinalReflectionUnlocked() {
  return situations.every(situation => isSituationFullyCompleted(situation.id));
}

function showFinalLockedNotice() {
  document.querySelectorAll(".star-overlay").forEach(item => item.remove());

  const overlay = document.createElement("div");
  overlay.className = "star-overlay";

  overlay.innerHTML = `
    <div class="star-pop reflection-locked-pop">
      <div class="big-star">🔒</div>
      <h2>Final Reflection is locked</h2>
      <p class="star-popup-main">Complete all situations and their reflections first.</p>
      <div class="star-popup-actions">
        <button class="primary-btn" data-action="close">Okay</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.querySelector('[data-action="close"]').addEventListener("click", () => overlay.remove());
}

function reflectionData(situationId) {
  if (!progress.reflections) progress.reflections = {};

  if (!progress.reflections[situationId]) {
    progress.reflections[situationId] = {
      understand: "",
      speak: "",
      easiest: "",
      difficult: "",
      word: "",
      sentence: "",
      comment: ""
    };
  }

  return progress.reflections[situationId];
}

function updateReflectionField(situationId, field, value) {
  const data = reflectionData(situationId);
  data[field] = value;
  saveProgress();
}

function reflectionRadio(name, situationId, field, value, label, currentValue) {
  const checked = currentValue === value ? "checked" : "";

  return `
    <label class="reflection-choice">
      <input type="radio" name="${name}" value="${escapeHtml(value)}" ${checked} onchange="updateReflectionField('${situationId}', '${field}', this.value)">
      <span>${escapeHtml(label)}</span>
    </label>
  `;
}

function activityOptions(selectedValue) {
  const options = [
    ["", "Choose one"],
    ["Word Bank", "Word Bank"],
    ["Conversation", "Conversation"],
    ["Match expressions", "Match expressions"],
    ["Missing words", "Missing words"],
    ["Role-play", "Role-play"]
  ];

  return options.map(([value, label]) => `
    <option value="${escapeHtml(value)}" ${selectedValue === value ? "selected" : ""}>
      ${escapeHtml(label)}
    </option>
  `).join("");
}

function renderReflection(situation) {
  const data = reflectionData(situation.id);
  const done = isActivityCompleted(situation.id, "reflection");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Reflection", `/${situation.id}/role-play`)}

      <div class="panel reflection-panel">
        <div class="reflection-hero">
          <div>
            <span class="reflection-kicker">Think about your learning</span>
            <h3>How did this mission go?</h3>
            <p>Answer these questions after practising the situation.</p>
          </div>
          <div class="reflection-emoji">${situation.emoji}</div>
        </div>

        <div class="reflection-form">
          <div class="reflection-question">
            <h4>I can understand the conversation.</h4>
            <div class="reflection-choice-row">
              ${reflectionRadio(`understand-${situation.id}`, situation.id, "understand", "Yes", "🙂 Yes", data.understand)}
              ${reflectionRadio(`understand-${situation.id}`, situation.id, "understand", "A little", "😐 A little", data.understand)}
              ${reflectionRadio(`understand-${situation.id}`, situation.id, "understand", "Not yet", "🙁 Not yet", data.understand)}
            </div>
          </div>

          <div class="reflection-question">
            <h4>I can say useful expressions from this situation.</h4>
            <div class="reflection-choice-row">
              ${reflectionRadio(`speak-${situation.id}`, situation.id, "speak", "Yes", "🙂 Yes", data.speak)}
              ${reflectionRadio(`speak-${situation.id}`, situation.id, "speak", "A little", "😐 A little", data.speak)}
              ${reflectionRadio(`speak-${situation.id}`, situation.id, "speak", "Not yet", "🙁 Not yet", data.speak)}
            </div>
          </div>

          <div class="reflection-grid-2">
            <label class="reflection-field">
              <span>The easiest activity was...</span>
              <select onchange="updateReflectionField('${situation.id}', 'easiest', this.value)">
                ${activityOptions(data.easiest)}
              </select>
            </label>

            <label class="reflection-field">
              <span>The most difficult activity was...</span>
              <select onchange="updateReflectionField('${situation.id}', 'difficult', this.value)">
                ${activityOptions(data.difficult)}
              </select>
            </label>
          </div>

          <label class="reflection-field">
            <span>One word I remember is...</span>
            <input type="text" value="${escapeHtml(data.word)}" placeholder="Example: headache" oninput="updateReflectionField('${situation.id}', 'word', this.value)">
          </label>

          <label class="reflection-field">
            <span>One sentence I can say is...</span>
            <input type="text" value="${escapeHtml(data.sentence)}" placeholder="Example: Can I help you?" oninput="updateReflectionField('${situation.id}', 'sentence', this.value)">
          </label>

          <label class="reflection-field">
            <span>Something I want to practise more...</span>
            <textarea rows="3" placeholder="Write a short comment" oninput="updateReflectionField('${situation.id}', 'comment', this.value)">${escapeHtml(data.comment)}</textarea>
          </label>
        </div>

        <div class="actions">
          <button class="secondary-btn" onclick="goTo('/${situation.id}/menu')">Back to activities</button>
          <button class="primary-btn" onclick="finishReflection('${situation.id}')">
            ${done ? "Save reflection" : "Finish reflection"}
          </button>
        </div>
      </div>
    </section>
  `);
}

function finishReflection(situationId) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  saveProgress();
  finishActivity(situationId, "reflection", "/", `/${situationId}/reflection`);
}

function finalReflectionData() {
  if (!progress.finalReflection) progress.finalReflection = {};

  const defaults = {
    studentName: "",
    studentGroup: "",
    favouriteSituation: "",
    easiestSituation: "",
    mostDifficultSituation: "",
    favouriteActivity: "",
    wordsRemember: "",
    sentenceCanSay: "",
    opinion: "",
    helped: "",
    sentAt: ""
  };

  progress.finalReflection = {
    ...defaults,
    ...progress.finalReflection
  };

  return progress.finalReflection;
}

function updateFinalReflectionField(field, value) {
  const data = finalReflectionData();
  data[field] = value;
  saveProgress();
}

function situationOptions(selectedValue) {
  const options = [
    `<option value="" ${selectedValue ? "" : "selected"}>Choose one</option>`,
    ...situations.map(situation => `
      <option value="${escapeHtml(situation.title)}" ${selectedValue === situation.title ? "selected" : ""}>
        ${escapeHtml(situation.title)}
      </option>
    `)
  ];

  return options.join("");
}

function finalReflectionBody() {
  const data = finalReflectionData();

  const situationBlocks = situations.map(situation => {
    const reflection = reflectionData(situation.id);

    return `
${situation.title}
- I can understand the conversation: ${reflection.understand || "-"}
- I can say useful expressions: ${reflection.speak || "-"}
- Easiest activity: ${reflection.easiest || "-"}
- Most difficult activity: ${reflection.difficult || "-"}
- One word I remember: ${reflection.word || "-"}
- One sentence I can say: ${reflection.sentence || "-"}
- I want to practise: ${reflection.comment || "-"}
    `.trim();
  }).join("\n\n");

  return `
Hello,

Here is my Speaking Friends final reflection.

Student: ${data.studentName || "Student"}
Class / group: ${data.studentGroup || "Class"}

FINAL REFLECTION
Favourite situation: ${data.favouriteSituation || "-"}
Easiest situation: ${data.easiestSituation || "-"}
Most difficult situation: ${data.mostDifficultSituation || "-"}
Favourite activity: ${data.favouriteActivity || "-"}
Words I remember: ${data.wordsRemember || "-"}
One sentence I can say now: ${data.sentenceCanSay || "-"}
My opinion: ${data.opinion || "-"}
How the app helped me: ${data.helped || "-"}

SITUATION REFLECTIONS

${situationBlocks}

Thank you.
  `.trim();
}

function openFinalReflectionGmailDraft() {
  const data = finalReflectionData();

  const subject = `Speaking Friends final reflection - ${data.studentName || "Student"} - ${data.studentGroup || "Class"}`;
  const body = finalReflectionBody();

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  data.sentAt = new Date().toISOString();
  saveProgress();

  window.open(gmailUrl, "_blank");
  renderFinalReflection();
}

function renderFinalReflection() {
  const unlocked = isFinalReflectionUnlocked();
  const data = finalReflectionData();

  if (!unlocked) {
    renderShell(`
      <section class="screen">
        ${renderPageHead("Final Reflection", "Locked", "/")}

        <div class="panel reflection-panel">
          <div class="reflection-hero">
            <div>
              <span class="reflection-kicker">Locked</span>
              <h3>Complete all situations first.</h3>
              <p>The final reflection will unlock when all speaking missions and reflections are complete.</p>
            </div>
            <div class="reflection-emoji">🔒</div>
          </div>

          <div class="actions">
            <button class="primary-btn" onclick="goTo('/')">Back to situations</button>
          </div>
        </div>
      </section>
    `);
    return;
  }

  renderShell(`
    <section class="screen">
      ${renderPageHead("Final Reflection", "Send your learning reflection", "/")}

      <div class="panel reflection-panel final-reflection-panel">
        <div class="reflection-hero">
          <div>
            <span class="reflection-kicker">Final task</span>
            <h3>What did you learn with Speaking Friends?</h3>
            <p>Your answers will be prepared as a Gmail draft. Add your teacher's email before sending.</p>
          </div>
          <div class="reflection-emoji">📝</div>
        </div>

        ${data.sentAt ? `<p class="reflection-sent-note">✅ Gmail draft opened. You can open it again if you need to.</p>` : ""}

        <div class="reflection-form">
          <div class="reflection-grid-2">
            <label class="reflection-field">
              <span>Your name</span>
              <input type="text" value="${escapeHtml(data.studentName)}" placeholder="Student name" oninput="updateFinalReflectionField('studentName', this.value)">
            </label>

            <label class="reflection-field">
              <span>Class / group</span>
              <input type="text" value="${escapeHtml(data.studentGroup)}" placeholder="Class or group" oninput="updateFinalReflectionField('studentGroup', this.value)">
            </label>
          </div>

          <div class="reflection-grid-2">
            <label class="reflection-field">
              <span>My favourite situation was...</span>
              <select onchange="updateFinalReflectionField('favouriteSituation', this.value)">
                ${situationOptions(data.favouriteSituation)}
              </select>
            </label>

            <label class="reflection-field">
              <span>The easiest situation was...</span>
              <select onchange="updateFinalReflectionField('easiestSituation', this.value)">
                ${situationOptions(data.easiestSituation)}
              </select>
            </label>
          </div>

          <label class="reflection-field">
            <span>The most difficult situation was...</span>
            <select onchange="updateFinalReflectionField('mostDifficultSituation', this.value)">
              ${situationOptions(data.mostDifficultSituation)}
            </select>
          </label>

          <label class="reflection-field">
            <span>My favourite activity was...</span>
            <select onchange="updateFinalReflectionField('favouriteActivity', this.value)">
              ${activityOptions(data.favouriteActivity)}
            </select>
          </label>

          <label class="reflection-field">
            <span>Words I remember...</span>
            <textarea rows="3" placeholder="Write some words you remember" oninput="updateFinalReflectionField('wordsRemember', this.value)">${escapeHtml(data.wordsRemember)}</textarea>
          </label>

          <label class="reflection-field">
            <span>One sentence I can say now...</span>
            <input type="text" value="${escapeHtml(data.sentenceCanSay)}" placeholder="Example: Can I have a sandwich, please?" oninput="updateFinalReflectionField('sentenceCanSay', this.value)">
          </label>

          <label class="reflection-field">
            <span>My opinion about the app...</span>
            <textarea rows="3" placeholder="What did you like? What would you change?" oninput="updateFinalReflectionField('opinion', this.value)">${escapeHtml(data.opinion)}</textarea>
          </label>

          <label class="reflection-field">
            <span>How did the app help you practise English?</span>
            <textarea rows="3" placeholder="Write your answer" oninput="updateFinalReflectionField('helped', this.value)">${escapeHtml(data.helped)}</textarea>
          </label>
        </div>

        <div class="actions">
          <button class="secondary-btn" onclick="goTo('/')">Back to situations</button>
          <button class="primary-btn" onclick="openFinalReflectionGmailDraft()">Open Gmail draft</button>
        </div>

        <p class="small-note">
          Gmail will open with the reflection text. The student only needs to add the teacher's email and send it.
        </p>
      </div>
    </section>
  `);
}

function renderPetShop() {
  const sortedCatalog = [...PET_CATALOG].sort((a, b) => {
    const aActive = progress.shop.activePetId === a.id ? 1 : 0;
    const bActive = progress.shop.activePetId === b.id ? 1 : 0;
    if (aActive !== bActive) return bActive - aActive;

    const aOwned = ownedPet(a.id) ? 1 : 0;
    const bOwned = ownedPet(b.id) ? 1 : 0;
    if (aOwned !== bOwned) return bOwned - aOwned;

    return a.cost - b.cost;
  });

  const start = petShopPage * PET_PAGE_SIZE;
  const end = start + PET_PAGE_SIZE;
  const pets = sortedCatalog.slice(start, end);
  const maxPage = Math.ceil(sortedCatalog.length / PET_PAGE_SIZE);
  const activePet = activePetInfo();

  const cards = pets.map(pet => {
    const owned = ownedPet(pet.id);
    const isActive = progress.shop.activePetId === pet.id;
    const canBuy = availableStars() >= pet.cost;
    const cardClick = owned ? `onclick="openPetActionModal('${pet.id}')"` : "";

    return `
      <article class="pet-card ${owned ? "owned-pet-card-item" : ""} ${isActive ? "active-pet-card-item" : ""} ${owned ? "owned-clickable" : ""}" ${cardClick}>
        <div class="pet-card-art">
          ${renderPetArt(pet, "card")}
        </div>

        <div class="pet-card-content">
          <h3>${escapeHtml(owned?.customName || pet.name)}</h3>
          <p class="pet-subtitle">${escapeHtml(pet.name)}</p>

          <div class="pet-chip-row">
            <span class="pet-cost-chip">${pet.cost === 0 ? "Free" : `⭐ ${pet.cost}`}</span>
            ${owned ? `<span class="pet-state-chip">${isActive ? "Active" : "Owned"}</span>` : ``}
          </div>

          ${
            owned
              ? `
                <div class="pet-actions">
                  <button class="secondary-btn" onclick="event.stopPropagation(); renamePet('${pet.id}')">Rename</button>
                  <button class="primary-btn" onclick="event.stopPropagation(); setActivePet('${pet.id}')" ${isActive ? "disabled" : ""}>
                    ${isActive ? "Using now" : "Set active"}
                  </button>
                </div>
              `
              : `
                <div class="pet-actions">
                  <button class="primary-btn" onclick="buyPet('${pet.id}')" ${canBuy ? "" : "disabled"}>
                    Unlock
                  </button>
                </div>
              `
          }
        </div>
      </article>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead("Pet Shop", "Unlock and name your pets", "/")}

      <div class="panel">
        <div class="pet-shop-top">
          <div class="pet-shop-focus-card">
            <div class="pet-shop-focus-art">
              ${renderPetArt(activePet, "hero")}
            </div>

            <div class="pet-shop-focus-text">
              <span>Active pet</span>
              <strong>${escapeHtml(activePet.customName)}</strong>
              <p>${escapeHtml(activePet.name)}</p>
            </div>
          </div>

          <div class="pet-shop-stars-card">
            <span>Available stars</span>
            <strong>⭐ ${availableStars()}</strong>
            <p>Complete activities to earn more stars.</p>
          </div>
        </div>

        <div class="pet-shop-pages">
          <button class="secondary-btn" onclick="previousPetPage()" ${petShopPage === 0 ? "disabled" : ""}>
            ← Previous
          </button>

          <span>Page ${petShopPage + 1} / ${maxPage}</span>

          <button class="secondary-btn" onclick="nextPetPage()" ${petShopPage + 1 >= maxPage ? "disabled" : ""}>
            Next →
          </button>
        </div>

        <div class="pet-grid">
          ${cards}
        </div>
      </div>
    </section>
  `);
}

function renderActivityMenu(situation) {
  const items = [
    { key: "word-bank", title: "Word Bank", icon: "🖼️" },
    { key: "conversation", title: "Conversation", icon: "💬" },
    { key: "match", title: "Match expressions", icon: "🧩" },
    { key: "missing", title: "Missing words", icon: "✏️" },
    { key: "role-play", title: "Role-play", icon: "🎭" },
    { key: "reflection", title: "Reflection", icon: "📝" }
  ];

  const cards = items.map(item => {
    const done = isActivityCompleted(situation.id, item.key);

    return `
      <button class="activity-menu-card" onclick="goTo('${activityRoute(item.key, situation.id)}')">
        <span>${item.icon}</span>
        <strong>${item.title}</strong>
        <small>${done ? "⭐ Completed" : "Practice"}</small>
      </button>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Choose an activity", "/")}

      <div class="panel">
        <div class="activity-menu-grid">
          ${cards}
        </div>
      </div>
    </section>
  `);
}

function renderPageHead(title, subtitle, backRoute) {
  return `
    <div class="page-head">
      <button class="back-btn" onclick="goTo('${backRoute}')" aria-label="Go back">←</button>

      <div class="page-title">
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(subtitle)}</p>
      </div>

      <div></div>
    </div>
  `;
}

function startWordBank(situation) {
  if (!wordBankGame || wordBankGame.situationId !== situation.id) {
    wordBankGame = {
      situationId: situation.id,
      viewed: isActivityCompleted(situation.id, "word-bank")
        ? situation.wordBank.map(item => item.id)
        : []
    };
  }
}

function renderWordBank(situation) {
  startWordBank(situation);

  const cards = situation.wordBank.map(item => {
    const viewed = wordBankGame.viewed.includes(item.id) ? "is-flipped" : "";

    return `
      <button class="flip-card ${viewed}" data-word-id="${item.id}" onclick="flipWordCard('${situation.id}', '${item.id}')">
        <span class="flip-card-inner">
          <span class="flip-card-face flip-card-front">
            <strong>${escapeHtml(item.word)}</strong>
            <small>Tap to listen</small>
          </span>

          <span class="flip-card-face flip-card-back">
            ${renderWordImage(item.imageKey)}
            <strong>${escapeHtml(item.word)}</strong>
          </span>
        </span>
      </button>
    `;
  }).join("");

  const count = wordBankGame.viewed.length;
  const total = situation.wordBank.length;
  const ready = count === total;
  const width = (count / total) * 100;

  const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
    ? `/${situation.id}/menu`
    : `/${situation.id}/conversation`;

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Word Bank", "/")}

      <div class="panel">
        <div class="activity-progress">
          <span id="wordBankStatus">
            ${ready ? "Word Bank ready ⭐" : `Words listened ${count}/${total}`}
          </span>

          <div class="progress-track">
            <div id="wordBankProgress" class="progress-fill" style="width: ${width}%"></div>
          </div>
        </div>

        <div class="word-grid">
          ${cards}
        </div>

        <div class="actions">
          <button
            id="wordBankContinue"
            class="primary-btn"
            onclick="finishActivity('${situation.id}', 'word-bank', '${nextRoute}', '/${situation.id}/word-bank')"
            ${ready ? "" : "disabled"}
          >
            Continue
          </button>
        </div>

        <p class="small-note">Tap every card to hear the words.</p>
      </div>
    </section>
  `);
}

function flipWordCard(situationId, wordId) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  const item = situation.wordBank.find(word => word.id === wordId);
  if (!item) return;

  const card = document.querySelector(`[data-word-id="${wordId}"]`);
  if (card) card.classList.add("is-flipped");

  if (!wordBankGame.viewed.includes(wordId)) {
    wordBankGame.viewed.push(wordId);
  }

  speakText(item.word, 0.78, 1);
  updateWordBankUI(situation);
}

function updateWordBankUI(situation) {
  const count = wordBankGame.viewed.length;
  const total = situation.wordBank.length;
  const ready = count === total;

  const status = document.querySelector("#wordBankStatus");
  const progressFill = document.querySelector("#wordBankProgress");
  const continueButton = document.querySelector("#wordBankContinue");

  if (progressFill) progressFill.style.width = `${(count / total) * 100}%`;

  if (ready) {
    if (status) status.textContent = "Word Bank ready ⭐";
    if (continueButton) continueButton.disabled = false;
  } else {
    if (status) status.textContent = `Words listened ${count}/${total}`;
  }
}

function hasListenedConversation(id) {
  if (Object.prototype.hasOwnProperty.call(conversationState, id)) {
    return conversationState[id];
  }

  return isActivityCompleted(id, "conversation");
}

function renderConversation(situation) {
  const listened = hasListenedConversation(situation.id);
  const listenText = listened ? "▶ Listen again" : "▶ Listen";

  const messages = situation.conversation.map(line => `
    <div class="message-row ${lineSideClass(situation, line)} ${line.role}">
      <div class="bubble-wrap">
        <p class="speaker">${escapeHtml(line.speaker)}</p>
        <div class="bubble">${escapeHtml(line.text)}</div>
      </div>
    </div>
  `).join("");

  const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
    ? `/${situation.id}/menu`
    : `/${situation.id}/match`;

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Conversation", `/${situation.id}/word-bank`)}

      <div class="panel">
        <div class="listen-bar">
          <button id="listenConversationBtn" class="primary-btn" onclick="playConversation('${situation.id}')">
            ${listenText}
          </button>
        </div>

        <div class="chat">
          ${messages}
        </div>

        <div class="actions">
          <button class="secondary-btn" onclick="goTo('/${situation.id}/word-bank')">
            Word Bank
          </button>

          <button
            id="conversationContinue"
            class="primary-btn"
            onclick="finishActivity('${situation.id}', 'conversation', '${nextRoute}', '/${situation.id}/conversation')"
            ${listened ? "" : "disabled"}
          >
            Continue
          </button>
        </div>

        <p id="conversationStatus" class="small-note">
          ${listened ? "Conversation ready ⭐" : "Listen to the conversation first."}
        </p>
      </div>
    </section>
  `);
}

function playConversation(id) {
  const situation = situations.find(item => item.id === id);
  if (!situation) return;

  conversationState[id] = true;

  const continueButton = document.querySelector("#conversationContinue");
  const status = document.querySelector("#conversationStatus");
  const listenButton = document.querySelector("#listenConversationBtn");

  if (continueButton) continueButton.disabled = false;
  if (status) status.textContent = "Conversation ready ⭐";
  if (listenButton) listenButton.textContent = "▶ Listen again";

  speakConversationLines(situation);
}

function createMatchGame(situation) {
  const selected = shuffle(situation.fixedExpressions).slice(0, 5);

  return {
    situationId: situation.id,
    items: selected,
    leftParts: shuffle(selected),
    rightParts: shuffle(selected),
    selectedLeft: null,
    matched: [],
    wrongLeft: null,
    wrongRight: null
  };
}

function renderMatch(situation) {
  if (!matchGame || matchGame.situationId !== situation.id || matchGame.matched.length === matchGame.items.length) {
    matchGame = createMatchGame(situation);
  }

  const progressText = `${matchGame.matched.length}/${matchGame.items.length}`;
  const progressWidth = (matchGame.matched.length / matchGame.items.length) * 100;

  const leftCards = matchGame.leftParts.map(item => {
    const selected = matchGame.selectedLeft === item.id ? "selected-piece" : "";
    const matched = matchGame.matched.includes(item.id) ? "matched-piece" : "";
    const wrong = matchGame.wrongLeft === item.id ? "wrong-piece" : "";
    const disabled = matchGame.matched.includes(item.id) ? "disabled" : "";

    return `
      <button class="piece-card ${selected} ${matched} ${wrong}" onclick="selectLeftPiece('${item.id}')" ${disabled}>
        ${escapeHtml(item.left)}
      </button>
    `;
  }).join("");

  const rightCards = matchGame.rightParts.map(item => {
    const matched = matchGame.matched.includes(item.id) ? "matched-piece" : "";
    const wrong = matchGame.wrongRight === item.id ? "wrong-piece" : "";
    const disabled = matchGame.matched.includes(item.id) ? "disabled" : "";

    return `
      <button class="piece-card ${matched} ${wrong}" onclick="selectRightPiece('${item.id}')" ${disabled}>
        ${escapeHtml(item.right)}
      </button>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Match fixed expressions", `/${situation.id}/conversation`)}

      <div class="panel">
        <div class="activity-progress">
          <span>Matched ${progressText}</span>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressWidth}%"></div>
          </div>
        </div>

        <div class="match-intro-card">
          <strong>Build the expressions</strong>
          <span>Tap a beginning, then tap its ending.</span>
        </div>

        <div class="pieces-layout">
          <div class="pieces-column">
            <h3>Beginning</h3>
            ${leftCards}
          </div>

          <div class="pieces-column">
            <h3>Ending</h3>
            ${rightCards}
          </div>
        </div>
      </div>
    </section>
  `);
}

function selectLeftPiece(id) {
  if (!matchGame || matchGame.matched.includes(id)) return;

  matchGame.selectedLeft = id;
  matchGame.wrongLeft = null;
  matchGame.wrongRight = null;

  renderMatch(getCurrentSituation());
}

function selectRightPiece(id) {
  if (!matchGame || !matchGame.selectedLeft || matchGame.matched.includes(id)) return;

  const situation = getCurrentSituation();

  if (matchGame.selectedLeft === id) {
    matchGame.matched.push(id);
    matchGame.selectedLeft = null;
    matchGame.wrongLeft = null;
    matchGame.wrongRight = null;

    if (matchGame.matched.length === matchGame.items.length) {
      const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
        ? `/${situation.id}/menu`
        : `/${situation.id}/missing`;

      finishActivity(situation.id, "match", nextRoute, `/${situation.id}/match`);
      return;
    }

    renderMatch(situation);
    return;
  }

  matchGame.wrongLeft = matchGame.selectedLeft;
  matchGame.wrongRight = id;
  renderMatch(situation);

  setTimeout(() => {
    if (!matchGame) return;
    matchGame.wrongLeft = null;
    matchGame.wrongRight = null;
    renderMatch(situation);
  }, 500);
}

function createMissingGame(situation) {
  const scenario = shuffle(situation.missingScenarios)[0];
  const selectedGaps = shuffle(scenario.gaps)
    .slice(0, 5)
    .sort((a, b) => a.lineIndex - b.lineIndex);

  const selectedByLine = new Map(
    selectedGaps.map(item => [item.lineIndex, item])
  );

  const lines = scenario.conversation.map((line, index) => {
    const gap = selectedByLine.get(index);

    if (!gap) {
      return {
        id: `line-${index}`,
        lineIndex: index,
        speaker: line.speaker,
        role: line.role,
        text: line.text,
        hasGap: false
      };
    }

    return {
      ...gap,
      speaker: line.speaker,
      role: line.role,
      hasGap: true
    };
  });

  return {
    situationId: situation.id,
    scenario,
    lines,
    gaps: selectedGaps,
    words: shuffle(selectedGaps),
    current: 0,
    answers: {},
    wrongId: null
  };
}

function renderMissing(situation) {
  if (!missingGame || missingGame.situationId !== situation.id || missingGame.current >= missingGame.gaps.length) {
    missingGame = createMissingGame(situation);
  }

  const progressText = `${missingGame.current}/${missingGame.gaps.length}`;
  const progressWidth = (missingGame.current / missingGame.gaps.length) * 100;
  const currentGap = missingGame.gaps[missingGame.current];

  const wordChips = missingGame.words.map(item => {
    const used = Boolean(missingGame.answers[item.id]);
    const wrong = missingGame.wrongId === item.id ? "wrong-chip" : "";

    return `
      <button class="word-chip ${wrong}" onclick="chooseMissingWord('${item.id}')" ${used ? "disabled" : ""}>
        <span class="chip-plus">＋</span>
        <span>${escapeHtml(item.answer)}</span>
      </button>
    `;
  }).join("");

  const lines = missingGame.lines.map(item => {
    const side = lineSideClass(situation, item);

    if (!item.hasGap) {
      return `
        <div class="message-row ${side} ${item.role}">
          <div class="bubble-wrap">
            <p class="speaker">${escapeHtml(item.speaker)}</p>
            <div class="bubble">${escapeHtml(item.text)}</div>
          </div>
        </div>
      `;
    }

    const active = currentGap && item.id === currentGap.id ? "active-gap-line" : "";
    const filled = missingGame.answers[item.id];

    return `
      <div class="message-row ${side} ${item.role}">
        <div class="bubble-wrap">
          <p class="speaker">${escapeHtml(item.speaker)}</p>
          <div class="bubble gap-bubble ${active}">
            ${escapeHtml(item.before)}
            <span class="blank-space">${filled ? escapeHtml(item.answer) : "_____"}</span>
            ${escapeHtml(item.after)}
          </div>
        </div>
      </div>
    `;
  }).join("");

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Missing words", `/${situation.id}/match`)}

      <div class="panel">
        <div class="activity-progress">
          <span>Completed ${progressText}</span>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${progressWidth}%"></div>
          </div>
        </div>

        <div class="listen-bar">
          <button class="secondary-btn" onclick="speakConversationLines(getCurrentSituation(), null, missingGame.scenario.conversation)">
            ▶ Listen again
          </button>
        </div>

        <div class="missing-bank">
          ${wordChips}
        </div>

        <div class="chat missing-chat">
          ${lines}
        </div>

        <p class="small-note">Tap the words in the order you hear them.</p>
      </div>
    </section>
  `);
}

function chooseMissingWord(id) {
  if (!missingGame) return;

  const situation = getCurrentSituation();
  const expected = missingGame.gaps[missingGame.current];

  if (id === expected.id) {
    missingGame.answers[id] = true;
    missingGame.current += 1;
    missingGame.wrongId = null;

    if (missingGame.current >= missingGame.gaps.length) {
      const nextRoute = situationProgress(situation.id).count === ACTIVITY_KEYS.length
        ? `/${situation.id}/menu`
        : `/${situation.id}/role-play`;

      finishActivity(situation.id, "missing", nextRoute, `/${situation.id}/missing`);
      return;
    }

    renderMissing(situation);
    return;
  }

  missingGame.wrongId = id;
  renderMissing(situation);

  setTimeout(() => {
    if (!missingGame) return;
    missingGame.wrongId = null;
    renderMissing(situation);
  }, 450);
}

function ensureRolePlayState(id) {
  if (!rolePlayState[id]) {
    rolePlayState[id] = {
      selectedRole: null,
      audioBlob: null,
      audioUrl: null,
      recording: false,
      message: "",
      studentName: "",
      studentClass: "",
      timeLeft: 60,
      activeLineIndex: null,
      playingPartner: false
    };
  }

  return rolePlayState[id];
}

function getRoles(situation) {
  const roles = [];

  situation.conversation.forEach(line => {
    if (!roles.some(item => item.role === line.role)) {
      roles.push({
        role: line.role,
        speaker: line.speaker
      });
    }
  });

  return roles;
}

function renderRolePlay(situation) {
  const state = ensureRolePlayState(situation.id);
  const roles = getRoles(situation);

  const roleButtons = roles.map(item => {
    const active = state.selectedRole === item.role ? "selected-role" : "";

    return `
      <button class="role-choice ${active}" onclick="chooseRole('${situation.id}', '${item.role}')">
        ${escapeHtml(item.speaker)}
      </button>
    `;
  }).join("");

  const chatLines = situation.conversation.map((line, index) => {
    const isStudentLine = state.selectedRole === line.role;
    const isActive = state.activeLineIndex === index;
    const badge = isStudentLine ? `<span class="your-line-badge">Your line</span>` : "";
    const side = lineSideClass(situation, line);
    const activeClass = isActive ? "active-role-line" : "";
    const karaokeClass = isStudentLine && isActive ? "karaoke-line" : "";

    return `
      <div class="message-row ${side} ${line.role}">
        <div class="bubble-wrap">
          <p class="speaker">${escapeHtml(line.speaker)} ${badge}</p>
          <div class="bubble role-bubble ${activeClass} ${karaokeClass}">
            <span>${escapeHtml(line.text)}</span>
            <button class="line-listen-btn" onclick="listenRoleLine('${situation.id}', ${index})">▶</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const selectedRoleLabel = roles.find(item => item.role === state.selectedRole)?.speaker || "";
  const canRecord = Boolean(state.selectedRole);
  const hasAudio = Boolean(state.audioUrl);

  renderShell(`
    <section class="screen">
      ${renderPageHead(situation.title, "Role-play", `/${situation.id}/missing`)}

      <div class="panel role-play-panel">
        <div class="role-card">
          <h3>Choose your role</h3>

          <div class="role-choice-row">
            ${roleButtons}
          </div>

          <div class="actions">
            <button class="secondary-btn" onclick="playPartnerOnly('${situation.id}')" ${canRecord && !state.playingPartner ? "" : "disabled"}>
              ▶ Partner only
            </button>

            <button class="secondary-btn" onclick="stopPartnerOnly('${situation.id}')" ${state.playingPartner ? "" : "disabled"}>
              Stop partner
            </button>
          </div>
        </div>

        <div class="chat role-chat">
          ${chatLines}
        </div>

        <div class="record-card">
          <h3>${canRecord ? `You are the ${escapeHtml(selectedRoleLabel)}` : "Choose a role to start"}</h3>
          <p>Press start. The app will play your partner's lines and leave space for you to speak.</p>

          <div class="student-fields">
            <input
              id="studentName"
              type="text"
              placeholder="Student name"
              value="${escapeHtml(state.studentName)}"
              oninput="updateStudentField('${situation.id}', 'studentName', this.value)"
            />

            <input
              id="studentClass"
              type="text"
              placeholder="Class / group"
              value="${escapeHtml(state.studentClass)}"
              oninput="updateStudentField('${situation.id}', 'studentClass', this.value)"
            />
          </div>

          <div class="record-timer">
            <span>Recording time left</span>
            <strong id="recordCountdown">${formatTime(state.timeLeft)}</strong>
          </div>

          <div class="record-actions">
            <button class="primary-btn" onclick="startRecording('${situation.id}')" ${canRecord && !state.recording ? "" : "disabled"}>
              ● Start guided recording
            </button>

            <button class="secondary-btn" onclick="stopRecording('${situation.id}')" ${state.recording ? "" : "disabled"}>
              Stop recording
            </button>
          </div>

          ${state.recording ? `<p class="record-status recording-now">Recording...</p>` : ""}

          <div class="upload-row">
            <label class="upload-audio-label">
              Upload audio
              <input type="file" accept="audio/*" onchange="uploadRolePlayAudio('${situation.id}', this)" />
            </label>
          </div>

          ${hasAudio ? `
            <div class="audio-result">
              <audio controls src="${state.audioUrl}"></audio>

              <div class="actions">
                <button class="secondary-btn" onclick="downloadRolePlayAudio('${situation.id}')">
                  Download audio
                </button>

                <button class="secondary-btn" onclick="openGmailDraft('${situation.id}')">
                  Open Gmail draft
                </button>

                <button class="primary-btn" onclick="shareRolePlayAudio('${situation.id}')">
                  Share / Send audio
                </button>
              </div>
            </div>
          ` : ""}

          ${state.message ? `<p class="small-note">${escapeHtml(state.message)}</p>` : ""}

          <div class="actions">
            <button class="primary-btn" onclick="finishActivity('${situation.id}', 'role-play', '/${situation.id}/reflection', '/${situation.id}/role-play')" ${hasAudio ? "" : "disabled"}>
              Finish role-play
            </button>
          </div>
        </div>
      </div>
    </section>
  `);
}

function updateStudentField(situationId, field, value) {
  const state = ensureRolePlayState(situationId);
  state[field] = value;
}

function chooseRole(situationId, role) {
  const state = ensureRolePlayState(situationId);
  state.selectedRole = role;
  renderRolePlay(situations.find(item => item.id === situationId));
}

function listenRoleLine(situationId, index) {
  const situation = situations.find(item => item.id === situationId);
  if (!situation) return;

  const line = situation.conversation[index];
  if (!line) return;

  const voice = roleVoice(situation, line.role);
  speakText(line.text, voice.rate, voice.pitch);
}

function playPartnerOnly(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation || !state.selectedRole) return;

  state.playingPartner = true;
  state.activeLineIndex = null;
  renderRolePlay(situation);

  speakConversationLines(situation, state.selectedRole, situation.conversation, {
    onLine: (index) => {
      state.activeLineIndex = index;
      renderRolePlay(situation);
    },
    onEnd: () => {
      state.playingPartner = false;
      state.activeLineIndex = null;
      renderRolePlay(situation);
    }
  });
}

function stopPartnerOnly(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  stopSpeech();

  state.playingPartner = false;
  state.activeLineIndex = null;

  renderRolePlay(situation);
}

function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const mins = String(Math.floor(safe / 60)).padStart(2, "0");
  const secs = String(safe % 60).padStart(2, "0");

  return `${mins}:${secs}`;
}

async function startRecording(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation || !state.selectedRole) return;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    state.message = "Recording is not available in this browser. You can upload an audio recorded outside the app.";
    renderRolePlay(situation);
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    recordingState.stream = stream;
    recordingState.chunks = [];

    const mediaRecorder = new MediaRecorder(stream);
    recordingState.mediaRecorder = mediaRecorder;

    mediaRecorder.ondataavailable = event => {
      if (event.data.size > 0) {
        recordingState.chunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      clearTimeout(recordingState.maxTimer);
      clearInterval(recordingState.countdownTimer);

      const blob = new Blob(recordingState.chunks, { type: "audio/webm" });

      if (state.audioUrl) {
        URL.revokeObjectURL(state.audioUrl);
      }

      state.audioBlob = blob;
      state.audioUrl = URL.createObjectURL(blob);
      state.recording = false;
      state.playingPartner = false;
      state.activeLineIndex = null;
      state.message = "Recording saved. You can listen, download it, open Gmail, or share it.";

      if (recordingState.stream) {
        recordingState.stream.getTracks().forEach(track => track.stop());
        recordingState.stream = null;
      }

      renderRolePlay(situation);
    };

    state.recording = true;
    state.timeLeft = 60;
    state.message = "";

    mediaRecorder.start();
    renderRolePlay(situation);

    recordingState.countdownTimer = setInterval(() => {
      state.timeLeft -= 1;

      const countdown = document.querySelector("#recordCountdown");
      if (countdown) countdown.textContent = formatTime(state.timeLeft);

      if (state.timeLeft <= 0) {
        stopRecording(situationId);
      }
    }, 1000);

    recordingState.maxTimer = setTimeout(() => {
      stopRecording(situationId);
    }, 60000);

    setTimeout(() => {
      playPartnerOnly(situationId);
    }, 500);
  } catch {
    state.message = "Microphone permission was blocked. You can upload an audio recorded outside the app.";
    renderRolePlay(situation);
  }
}

function stopRecording(situationId) {
  const state = ensureRolePlayState(situationId);

  if (recordingState.mediaRecorder && recordingState.mediaRecorder.state === "recording") {
    recordingState.mediaRecorder.stop();
    state.message = "Saving recording...";
  }

  stopSpeech();

  const situation = situations.find(item => item.id === situationId);
  if (situation) renderRolePlay(situation);
}

function uploadRolePlayAudio(situationId, input) {
  const file = input.files?.[0];
  const state = ensureRolePlayState(situationId);

  if (!file) return;

  if (state.audioUrl) {
    URL.revokeObjectURL(state.audioUrl);
  }

  state.audioBlob = file;
  state.audioUrl = URL.createObjectURL(file);
  state.message = "Audio uploaded. You can listen, download it, open Gmail, or share it.";

  renderRolePlay(situations.find(item => item.id === situationId));
}

function getStudentInfo(situationId) {
  const state = ensureRolePlayState(situationId);

  return {
    name: state.studentName.trim() || "Student",
    group: state.studentClass.trim() || "Class"
  };
}

function safeFileName(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function audioExtension(blob) {
  const type = blob?.type || "";

  if (type.includes("mpeg")) return "mp3";
  if (type.includes("mp4")) return "m4a";
  if (type.includes("wav")) return "wav";
  if (type.includes("ogg")) return "ogg";

  return "webm";
}

function rolePlayFileName(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);
  const student = getStudentInfo(situationId);
  const ext = audioExtension(state.audioBlob);

  return `speaking-friends-${safeFileName(student.name)}-${safeFileName(student.group)}-${safeFileName(situation.title)}.${ext}`;
}

function downloadRolePlayAudio(situationId) {
  const state = ensureRolePlayState(situationId);

  if (!state.audioBlob) return;

  const link = document.createElement("a");
  link.href = URL.createObjectURL(state.audioBlob);
  link.download = rolePlayFileName(situationId);
  link.click();
}

async function shareRolePlayAudio(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation || !state.audioBlob) return;

  const student = getStudentInfo(situationId);
  const roles = getRoles(situation);
  const roleName = roles.find(item => item.role === state.selectedRole)?.speaker || "Not selected";

  const filename = rolePlayFileName(situationId);
  const file = new File([state.audioBlob], filename, { type: state.audioBlob.type || "audio/webm" });

  const text = `
Speaking Friends role-play audio

Student: ${student.name}
Class / group: ${student.group}
Situation: ${situation.title}
Role: ${roleName}
  `.trim();

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: `Speaking Friends - ${student.name}`,
        text,
        files: [file]
      });

      state.message = "Audio shared. Choose Gmail and send it to your teacher.";
      renderRolePlay(situation);
      return;
    } catch {
      state.message = "Sharing was cancelled.";
      renderRolePlay(situation);
      return;
    }
  }

  downloadRolePlayAudio(situationId);
  openGmailDraft(situationId);
}

function openGmailDraft(situationId) {
  const situation = situations.find(item => item.id === situationId);
  const state = ensureRolePlayState(situationId);

  if (!situation) return;

  const student = getStudentInfo(situationId);
  const roles = getRoles(situation);
  const roleName = roles.find(item => item.role === state.selectedRole)?.speaker || "Not selected";

  const subject = `Speaking Friends audio - ${student.name} - ${student.group} - ${situation.title}`;

  const body = `
Hello,

Here is my Speaking Friends role-play audio.

Student: ${student.name}
Class / group: ${student.group}
Situation: ${situation.title}
Role: ${roleName}

I will attach the audio file to this email.

Thank you.
  `.trim();

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  state.message = "Gmail has opened. Attach the downloaded audio file before sending.";
  window.open(gmailUrl, "_blank");

  renderRolePlay(situation);
}

function renderWordImage(key) {
  const images = {
    headache: `
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <circle cx="60" cy="48" r="27" fill="#FFD6B3"/>
        <path d="M38 36c8-17 36-20 48-2" fill="none" stroke="#22304D" stroke-width="7" stroke-linecap="round"/>
        <rect x="32" y="22" width="56" height="15" rx="7" fill="#EEF1FF"/>
        <path d="M44 30h32" stroke="#7C8CF8" stroke-width="4" stroke-linecap="round"/>
        <circle cx="50" cy="48" r="3" fill="#22304D"/>
        <circle cx="70" cy="48" r="3" fill="#22304D"/>
        <path d="M51 64c6-5 12-5 18 0" fill="none" stroke="#22304D" stroke-width="4" stroke-linecap="round"/>
        <path d="M91 25l8-9M96 38l12-1M87 12l2-10" stroke="#FFB84C" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `,
    doctor: `
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect x="28" y="30" width="64" height="42" rx="12" fill="#FFFFFF" stroke="#7C8CF8" stroke-width="5"/>
        <path d="M46 30v-8c0-5 4-9 9-9h10c5 0 9 4 9 9v8" fill="none" stroke="#7C8CF8" stroke-width="5"/>
        <path d="M60 42v18M51 51h18" stroke="#78D6C6" stroke-width="7" stroke-linecap="round"/>
        <circle cx="33" cy="34" r="5" fill="#EEF1FF"/>
        <circle cx="87" cy="34" r="5" fill="#EEF1FF"/>
      </svg>
    `,
    patient: `
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <circle cx="60" cy="34" r="22" fill="#FFD6B3"/>
        <path d="M40 30c6-20 33-22 44-4" fill="none" stroke="#22304D" stroke-width="7" stroke-linecap="round"/>
        <circle cx="52" cy="36" r="3" fill="#22304D"/>
        <circle cx="68" cy="36" r="3" fill="#22304D"/>
        <path d="M52 49c6 5 11 5 17 0" fill="none" stroke="#22304D" stroke-width="4" stroke-linecap="round"/>
        <path d="M29 82c5-18 17-27 31-27s26 9 31 27" fill="#EEF1FF"/>
        <path d="M29 82c5-18 17-27 31-27s26 9 31 27" fill="none" stroke="#7C8CF8" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `,
    water: `
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <path d="M60 10C45 30 34 45 34 60c0 17 12 27 26 27s26-10 26-27C86 45 75 30 60 10z" fill="#BDEFFF" stroke="#58BFD5" stroke-width="5"/>
        <path d="M48 59c0 9 6 15 14 15" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
        <circle cx="78" cy="24" r="7" fill="#EAFBF7"/>
      </svg>
    `,
    rest: `
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect x="20" y="48" width="78" height="24" rx="8" fill="#EEF1FF" stroke="#7C8CF8" stroke-width="5"/>
        <rect x="26" y="38" width="28" height="20" rx="7" fill="#FFFFFF" stroke="#78D6C6" stroke-width="4"/>
        <path d="M20 72v10M98 72v10" stroke="#22304D" stroke-width="5" stroke-linecap="round"/>
        <path d="M81 17c-9 4-13 16-7 24 5 8 17 9 24 3-3 12-17 20-29 13-12-6-16-21-9-32 4-7 12-11 21-8z" fill="#FFDB70"/>
      </svg>
    `,
    help: `
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <path d="M34 55c8-11 18-12 28-1l5 5c4 4 10 4 14 0l10-10" fill="none" stroke="#7C8CF8" stroke-width="8" stroke-linecap="round"/>
        <path d="M28 62l15-15M92 49l-13 13" stroke="#78D6C6" stroke-width="8" stroke-linecap="round"/>
        <path d="M60 24c4-9 17-8 17 4 0 12-17 20-17 20s-17-8-17-20c0-12 13-13 17-4z" fill="#FF8AA0"/>
      </svg>
    `
  };

  const emojiImages = {
    canteen: "🍽️",
    menu: "📋",
    sandwich: "🥪",
    pasta: "🍝",
    salad: "🥗",
    juice: "🧃",
    shop: "🛍️",
    notebook: "📓",
    pencil: "✏️",
    bag: "🎒",
    price: "🏷️",
    money: "💰",
    library: "📚",
    park: "🌳",
    school: "🏫",
    straight: "⬆️",
    left: "⬅️",
    right: "➡️",
    friend: "🤝",
    football: "⚽",
    cinema: "🎬",
    saturday: "📅",
    time: "🕓",
    teacher: "👩‍🏫",
    student: "🧒",
    book: "📖",
    page: "📄",
    repeat: "🔁",
    understand: "💡",
    playground: "🛝",
    slide: "🛝",
    swing: "🌳",
    turn: "🔁",
    play: "▶️",
    lost: "🔎",
    pencilCase: "🖍️",
    jacket: "🧥",
    red: "🔴",
    blue: "🔵",
    classroom: "🏫",
    weather: "🌦️",
    sunny: "☀️",
    rainy: "🌧️",
    coat: "🧥",
    umbrella: "☂️",
    hat: "🧢",
  };

  if (images[key]) {
    return `<span class="word-illustration">${images[key]}</span>`;
  }

  if (emojiImages[key]) {
    return `<span class="word-illustration word-emoji-illustration"><span>${emojiImages[key]}</span></span>`;
  }

  return `<span class="word-illustration">${images.help}</span>`;
}

function render() {
  stopSpeech();
  stopActiveRecording();

  const route = getRoute();

  if (typeof situations === "undefined") {
    renderShell(`
      <section class="screen">
        <div class="panel">
          <h2>Content not found</h2>
          <p class="small-note">Check that data.js is loaded before app.js.</p>
        </div>
      </section>
    `);
    return;
  }

  if (route === "/") {
    renderHome();
    return;
  }

  if (route === "/pets") {
    renderPetShop();
    return;
  }

  if (route === "/final-reflection") {
    renderFinalReflection();
    return;
  }

  if (route.startsWith("/simon/")) {
    const petId = route.split("/").filter(Boolean)[1];

    if (!ownedPet(petId)) {
      goTo("/pets");
      return;
    }

    renderSimonSays(petId);
    return;
  }

  const parts = route.split("/").filter(Boolean);
  const situation = situations.find(item => item.id === parts[0]);
  const page = parts[1];

  if (!situation) {
    goTo("/");
    return;
  }

  if (page === "menu") {
    renderActivityMenu(situation);
    return;
  }

  if (page === "word-bank") {
    renderWordBank(situation);
    return;
  }

  if (page === "conversation") {
    renderConversation(situation);
    return;
  }

  if (page === "match") {
    renderMatch(situation);
    return;
  }

  if (page === "missing") {
    renderMissing(situation);
    return;
  }

  if (page === "role-play") {
    renderRolePlay(situation);
    return;
  }

  if (page === "reflection") {
    renderReflection(situation);
    return;
  }

  goTo("/");
}

window.addEventListener("hashchange", render);
render();
