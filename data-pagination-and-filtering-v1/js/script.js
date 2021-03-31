/********************************************************
[*] Treehouse Techdegree:
[*] FSJS Project 2 - Data Pagination and Filtering
[*] by Diego Alvarez. @doc on slack.
[*] March 2021.
*********************************************************
*/
/*
 * Selecting the elements of the DOM that we plan working with.
 * The header for the search feature.
 * The ul for the list of students.
 * The div to insert our custom p tag to track students found.
 */
const ul = document.querySelector(".student-list");
const studentsFound = document.createElement("p");
const header = document.querySelector(".header");
const div = document.querySelector(".page");
div.insertBefore(studentsFound, ul);
// create the template literal for the HTML new search feature.
let html_search = `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon">
      </button>
  </label>`;
// adding the new search feature to the header.
header.insertAdjacentHTML("beforeend", html_search);

/**
 * Function: showPage()
 * Principal function to update the page with the matched students.
 * @param {array of objects} list - The array of students to work with.
 * @param {Number} page - The integer number of the page to show.
 **/
function showPage(list, page) {
	let startIndex = (page * 9) - 9;
	let endIndex = page * 9;
	ul.innerHTML = ""; //refresh the ul tag.
	studentsFound.innerHTML = "";
	for (let i = 0; i < list.length; i++) {
		if (i >= startIndex && i < endIndex) {
			ul.insertAdjacentHTML("beforeend", //template literal for the <li> to add.
				`
        <li class="student-item cf">
            <div class="student-details">
                <img class="avatar" src=" ${list[i].picture.thumbnail} ">
                <h3> ${list[i].name.first} ${list[i].name.last} </h3>
                <span class="email"> ${list[i].email} </span>
            </div>
            <div class="joined-details">
              <span class="date"> Joined ${list[i].registered.date} </span>
            </div>
        </li>
        `);
		}
	}
  // - testing the search result, to choose the message to print.
  if (list.length !== 0) {
		studentsFound.innerHTML = `${list.length} students found.`;
	} else {
		studentsFound.innerHTML = "No results found";
	}
	studentsFound.style.margin = "6px";
}
/**
* Function: addPagination()
* Secondary function that adds the functionality for the paging buttons.
* @param {array of objects} list - The array of students to work with.
**/
function addPagination(list) {
  //first we calculate the Nº of pages that we need.
	const paginationButtons = Math.ceil((list.length / 9));
	const ul = document.querySelector(".link-list");
	ul.innerHTML = "";
	for (let i = 1; i <= paginationButtons; i++) {     //adding the buttons
		ul.insertAdjacentHTML("beforeend", `
      <li>
        <button type="button">${i}</button>
      </li>
    `);
	}
  if (ul.firstElementChild) {
		ul.firstElementChild.className = "active";
	}
	ul.addEventListener("click", function(e) {         //adding paging handler
		if (e.target.tagName === "BUTTON") {
			const active_button = ul.querySelector(".active");
			active_button.className = "";
			e.target.className = "active";
			showPage(list, e.target.textContent);
		}
	});
}
const inputElem = document.getElementById("search"); //search feature handler
inputElem.addEventListener("input", (e) => {
	let new_page = [];
	for (let i = 0; i < data.length; i++) {
		firstName = data[i].name.first.toUpperCase();
		lastName = data[i].name.last.toUpperCase();
		inputValue = inputElem.value.toUpperCase();
		if (firstName.includes(inputValue) || lastName.includes(inputValue)) {
			new_page.push(data[i]);
		}
	}
	ul.innerHTML = "";
	showPage(new_page, 1);
	addPagination(new_page);
});
// Call functions to display the initial page of all students on the list.
showPage(data, 1);
addPagination(data);
// theEnd.
// have a nice coding day! ;) @doc
// ----------------------------------------------------------------------------
