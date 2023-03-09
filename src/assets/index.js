const CHECKBOX_KEY = "숙제 체크";
const saveCheckbox = JSON.parse(localStorage.getItem(CHECKBOX_KEY) || "{}");

export function saveLocal(itemId) {
  saveCheckbox.checked === "true";
  localStorage.setItem(CHECKBOX_KEY, JSON.stringify(saveCheckbox));
}
