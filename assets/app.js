document.querySelector(".js-header-date").innerHTML = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date);


