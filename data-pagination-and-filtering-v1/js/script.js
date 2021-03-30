/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage( list, page ) {
  let startIndex = (page * 8) - 8;
  let endIndex = page * 8;
  const ul = document.querySelector(".student-list");
  ul.innerHTML = "";
  for (let i = startIndex; i <= endIndex; i++ ) {
    ul.insertAdjacentHTML( "beforeend",
    ` <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.thumbnail}">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
      </li>
      `);
  }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination( list ) {
  let paginationButtons = Math.ceil((list.length / 9));
  // console.log(paginationButtons);
  const ul = document.querySelector(".link-list");
  ul.innerHTML = "";
  for(let i = 1; i <= paginationButtons; i++) {
    ul.insertAdjacentHTML("beforeend",
    `
      <li>
        <button type="button">${i}</button>
      </li>
    `);
  }
  ul.firstElementChild.className = "active";
  ul.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const active_button = ul.querySelector(".active");
      active_button.className = "";
      e.target.className = "active";
      showPage(data, e.target.textContent);
    }
  })
}



// Call functions

showPage(data , 1);
addPagination(data);
