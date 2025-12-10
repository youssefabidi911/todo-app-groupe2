console.log("To-do App Initialisee.");
functionajouterTache() {
    const tacheInput = document.getElementById("taSKInput");
    const texte =InputDeviceInfo.value.trim();
    if (texte !== "") {
        const li = document.createElement("li");
        li.textContent = texte;
        document.getElementById("taskList").appendChild(li);
        tacheInput.value = "";
    }
}
const boutonAjout = document.getElementById("addTaskBtn");
boutonAjout.addEventListener("click", ajouterTache);
function activerSuppressionTache() {
    const liste = document.getElementById("taskList");
    liste.addEventListener("click", function(event) {
        const elementClique = event.target;
        if (elementClique.tagName === "LI") {
            elementClique.remove();
        }
    });
}