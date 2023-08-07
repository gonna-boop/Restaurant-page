var opt4 = document.getElementById("array4").addEventListener("click", function () {
    if (!ul)
        return;
    ul.innerHTML = "";
    var list = new ListTemplate(ul);
    var dayTasks = allTasks.filter(function (task) { return task.dayDif <= 31; });
    for (var _i = 0, dayTasks_1 = dayTasks; _i < dayTasks_1.length; _i++) {
        var t = dayTasks_1[_i];
        list.render(t);
    }
});
