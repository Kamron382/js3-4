let select = document.querySelector("select");
let btn = document.querySelector("button");
select.addEventListener("change", function() {
    
  });
  btn.addEventListener("click", function() {
    let text = document.getElementById("text").value;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = select.value;
    speechSynthesis.speak(utterance);
    document.getElementById("text").value = "";
  });
select.addEventListener("change", function() {
    let selectedOption = select.options[select.selectedIndex];
    let lang = selectedOption.value;
    let voices = speechSynthesis.getVoices();
    let voice = voices.find(v => v.lang === lang);

    if (voice) {
        console.log(`Voice found for language: ${lang}`);
    } else {
        console.warn(`No voice found for language: ${lang}`);
    }
});