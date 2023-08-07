export { homeTab };

const homeTab = () => {
    let clearContainer = document.getElementById('content');
    clearContainer.innerHTML = '';

    let homePage = document.getElementById('content');
    const h1 = document.createElement('h1');
    h1.textContent = "Festies Favorites Food Truck";
    const p = document.createElement('h5');
    p.textContent = "Serving up festival favorites since 1997!";
    const img = document.createElement('img');
    img.src = "./truck.jpg";
    img.classList.add('truck');
    const h5 = document.createElement('h5');
    h5.textContent = "Find us at your favorite festival!";
    homePage.appendChild(h1);
    homePage.appendChild(p);
    homePage.appendChild(img);
    homePage.appendChild(h5);
}



// if (!ul) return;
    // ul.innerHTML = "";
    // const list = new ListTemplate(ul);
    // const dayTasks = allTasks.filter(task => task.dayDif <= 31);
    // for (const t of dayTasks) {
    //   list.render(t);
    // }
;
