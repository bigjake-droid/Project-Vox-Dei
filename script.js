const screens = document.querySelectorAll(".screen");

function openScreen(id) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* =========================
   EVIDENCE STORAGE
========================= */

let evidence = JSON.parse(localStorage.getItem("voxdei_evidence")) || [];

function addEvidence() {
  const title = document.getElementById("evidenceTitle").value.trim();
  const tag = document.getElementById("evidenceTag").value.trim();
  const notes = document.getElementById("evidenceNotes").value.trim();

  if (!title || !notes) {
    alert("Fill out the evidence fields.");
    return;
  }

  evidence.unshift({
    title,
    tag,
    notes
  });

  localStorage.setItem("voxdei_evidence", JSON.stringify(evidence));

  document.getElementById("evidenceTitle").value = "";
  document.getElementById("evidenceTag").value = "";
  document.getElementById("evidenceNotes").value = "";

  renderEvidence();
}

function renderEvidence() {
  const list = document.getElementById("evidenceList");

  if (!list) return;

  list.innerHTML = "";

  evidence.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <h2>${item.title}</h2>
      <p class="meta">${item.tag || "No tag assigned"}</p>
      <p>${item.notes}</p>
      <button class="delete-btn" onclick="deleteEvidence(${index})">
        Delete
      </button>
    `;

    list.appendChild(div);
  });
}

function deleteEvidence(index) {
  evidence.splice(index, 1);

  localStorage.setItem("voxdei_evidence", JSON.stringify(evidence));

  renderEvidence();
}

/* =========================
   TIMELINE STORAGE
========================= */

let timeline = JSON.parse(localStorage.getItem("voxdei_timeline")) || [];

function addTimelineEvent() {
  const date = document.getElementById("eventDate").value.trim();
  const title = document.getElementById("eventTitle").value.trim();
  const notes = document.getElementById("eventNotes").value.trim();

  if (!date || !title || !notes) {
    alert("Fill out all timeline fields.");
    return;
  }

  timeline.unshift({
    date,
    title,
    notes
  });

  localStorage.setItem("voxdei_timeline", JSON.stringify(timeline));

  document.getElementById("eventDate").value = "";
  document.getElementById("eventTitle").value = "";
  document.getElementById("eventNotes").value = "";

  renderTimeline();
}

function renderTimeline() {
  const list = document.getElementById("timelineList");

  if (!list) return;

  list.innerHTML = "";

  timeline.forEach((event, index) => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <p class="meta">${event.date}</p>
      <h2>${event.title}</h2>
      <p>${event.notes}</p>

      <button class="delete-btn" onclick="deleteTimelineEvent(${index})">
        Delete
      </button>
    `;

    list.appendChild(div);
  });
}

function deleteTimelineEvent(index) {
  timeline.splice(index, 1);

  localStorage.setItem("voxdei_timeline", JSON.stringify(timeline));

  renderTimeline();
}

/* =========================
   DOSSIER EXPORT
========================= */

function generateDossier() {
  const output = document.getElementById("dossierOutput");

  let text = "";

  text += "PROJECT VINDEX // VOX DEI\n";
  text += "====================================\n\n";

  text += "EVIDENCE INDEX\n";
  text += "------------------------------------\n\n";

  evidence.forEach((item, index) => {
    text += `EXHIBIT ${index + 1}\n`;
    text += `TITLE: ${item.title}\n`;
    text += `TAG: ${item.tag}\n`;
    text += `NOTES: ${item.notes}\n\n`;
  });

  text += "\nTIMELINE\n";
  text += "------------------------------------\n\n";

  timeline.forEach((event, index) => {
    text += `EVENT ${index + 1}\n`;
    text += `DATE: ${event.date}\n`;
    text += `TITLE: ${event.title}\n`;
    text += `DETAILS: ${event.notes}\n\n`;
  });

  output.value = text;
}

/* =========================
   INITIALIZE
========================= */

renderEvidence();
renderTimeline();