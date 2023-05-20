let dialog = document.querySelector("#my-modal");

let close_btn = document.querySelector(".close-btn");
let note_dialog = document.querySelector(".note-dialog");
// let addtxt=document.querySelector(".txt-note");
let addTxt = document.getElementById("addnote");
let finaladd = document.getElementById("finaladd");

displaynotes();


for (var i = 0; i < document.querySelectorAll(".add-btn").length; i++) {
   let add_btn = document.querySelectorAll(".add-btn")[i];

   add_btn.addEventListener("click", function () {
      dialog.style.display = "block";
      note_dialog.style.display = "flex";
   });
}
finaladd.addEventListener("click", function (e) {
   // let addTxt = document.getElementById("addnote");

   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   notesObj.push(addTxt.value);
   localStorage.setItem("notes", JSON.stringify(notesObj));



   addTxt.value = "";
   displaynotes();

});


function displaynotes() {
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   let html = "";
   notesObj.forEach(function (element, index) {
      html += ` <div
   class="block mx-4  w-[300px] h-[200px] rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
   <h5
     class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
     Notes ${index + 1}
   </h5>
   <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
   ${element}
   </p>
   <button id="${index}" onclick="delete_note(this.id)" class=" border-2 text-white bg-blue-400 rounded-md p-2 items-end shadow-lg font-semibold hover:bg-blue-700">Delete</button>
   
 </div>`;


   });
   let notesElm = document.getElementById("notes");
   if (notesObj.length != 0) {
      notesElm.innerHTML = html;
     

   }
   else
   notesElm.innerHTML ="Nothing to show......!";
}
displaynotes();
function delete_note(index) {

   console.log("i m deleting at", index);
   let notes = localStorage.getItem("notes");
   if (notes == null) {
      notesObj = [];
   } else {
      notesObj = JSON.parse(notes);
   }

   notesObj.splice(index, 1);
   localStorage.setItem("notes", JSON.stringify(notesObj));
   displaynotes();
}

