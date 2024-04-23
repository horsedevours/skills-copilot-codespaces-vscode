function skillsMember() {
  var skills = document.getElementsByClassName("skills");

  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];
    skill.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}