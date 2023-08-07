let opt4 = document.getElementById("array4")!.addEventListener("click", () => {
    if (!ul) return;
    ul.innerHTML = "";
    const list = new ListTemplate(ul);
    const dayTasks = allTasks.filter(task => task.dayDif <= 31);
    for (const t of dayTasks) {
      list.render(t);
    }
  }); 