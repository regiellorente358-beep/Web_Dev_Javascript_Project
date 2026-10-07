const bgcolor = document.getElementById('profile');
const studentname = document.getElementById('studentName');
const buttonname = document.getElementById('changeName');
const changebg = document.getElementById('changeBackground');
const show_hide = document.getElementById('toggleDetails');
const show = document.getElementById('details');

let process = false;

buttonname.addEventListener("click", function(){
    studentname.textContent = "Regie";
}
)
show_hide.addEventListener("click", function(){
        if (show.style.display === "none"){
            show.style.display = "block";
        }
        else{
            show.style.display = "none";
        }
    }
)
changebg.addEventListener("click", function(){
        if (process == false){
            bgcolor.style.backgroundColor = "#30bdcde1";
            process = true;
        }
        else{
            bgcolor.style.backgroundColor = "";
            process = false;
        }
    }
)