$(function () {
  //For each click, the text that is written will be saved in local storage with the "id" of the parent div as the key in local storage.
  $("button").click(function () {
    let id = this.parentNode.id; //this refers to the "id" of button parent div.
    console.log(id);

    let input = [];

    textarea = $("#" + id)
      .children("textarea") //the tag "textarea" is the child of the div "id"
      .val();
    console.log(textarea);
    input.push([textarea]); //when the user types in the box, it will be added to the "input" variable which will hold all of the previous inputs.

    console.log(input);
    localStorage.setItem(id, JSON.stringify(input));
  });

  //This function will loop through the all tags with name "textarea" and if there is a local storage value for
  //each parent Id, then the value will be added in the text box.
  $("textarea").each(function () {
    let id = this.parentNode.id; //this refers to the "id" of button parent div.
    let value = JSON.parse(localStorage.getItem(id));
    console.log(id);
    if (value) {
      console.log(value);
      $(this).text(value);
    }
  });

  //This function will loop through all the tags with "textarea" and will add classes to each div parent according to what time in the day it is.
  $("textarea").each(function () {
    let id = this.parentNode.id; //this refers to the "id" of button parent div.
    let currentTime = dayjs().format("HH");
    if (currentTime < id) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    if (currentTime > id) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    if (currentTime == id) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
  });

  //code to display the current date in the header of the page.
  let today = dayjs().format("MMMM DD, YYYY");
  $("#currentDay").text(today);
});
