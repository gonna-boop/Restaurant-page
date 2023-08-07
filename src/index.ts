import { homeTab } from './home';
import { abTab } from './about';
import { menuTab } from './menu';

let tab1 = document.getElementById("home")!.addEventListener("click", () => {
    homeTab();
    // if (!ul) return;
    // ul.innerHTML = "";
    // const list = new ListTemplate(ul);
    // const dayTasks = allTasks.filter(task => task.dayDif <= 31);
    // for (const t of dayTasks) {
    //   list.render(t);
    // }
  }); 

let tab2 = document.getElementById("menu")!.addEventListener("click", () => {
    menuTab();
});

let tab3 = document.getElementById("about")!.addEventListener("click", () => {
    abTab();
});