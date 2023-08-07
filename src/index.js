"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = require("./home");
var about_1 = require("./about");
var menu_1 = require("./menu");
// let clearContainer = document.getElementById('content');
// clearContainer.innerHTML = '';
var tab1 = document.getElementById("home").addEventListener("click", function () {
    (0, home_1.homeTab)();
    // if (!ul) return;
    // ul.innerHTML = "";
    // const list = new ListTemplate(ul);
    // const dayTasks = allTasks.filter(task => task.dayDif <= 31);
    // for (const t of dayTasks) {
    //   list.render(t);
    // }
});
var tab2 = document.getElementById("menu").addEventListener("click", function () {
    (0, menu_1.menuTab)();
});
var tab3 = document.getElementById("about").addEventListener("click", function () {
    (0, about_1.abTab)();
});
