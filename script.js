const moodButtons = document.querySelectorAll(".mood");
const saveButton = document.getElementById("saveMood");
const moodHistory = document.getElementById("moodHistory");
let selectedMood = "";

// Load saved moods from localStorage
const loadMoods = () => {
  const moods = JSON.parse(localStorage.getItem("moods")) || [];
  moodHistory.innerHTML = "";
  moods.forEach((entry) => {
    const div = document.createElement("div");
    div.textContent = `${entry.date}: ${entry.mood}`;
    moodHistory.appendChild(div);
  });
};

// Select mood
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMood = button.getAttribute("data-mood");
    moodButtons.forEach((btn) => (btn.style.opacity = "0.5"));
    button.style.opacity = "1";
  });
});

// Save mood to localStorage
saveButton.addEventListener("click", () => {
  if (!selectedMood) {
    alert("Please select a mood!");
    return;
  }
  const moods = JSON.parse(localStorage.getItem("moods")) || [];
  const today = new Date().toLocaleDateString();
  moods.push({ date: today, mood: selectedMood });
  localStorage.setItem("moods", JSON.stringify(moods));
  loadMoods();
});

loadMoods();
