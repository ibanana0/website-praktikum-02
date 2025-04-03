// Deklarasi variabel
const form = document.getElementById('login-form');
const body = document.body;
const comments = document.createElement("section");
const main__comments = document.getElementById('main__comments')

// Membuka dan menutup Formulir Login
function openForm() {
    form.style.display = "block";
}
function closeForm() {
    form.style.display = "none";
}

// Membuat variabel untuk menyimpan elemen form
const username = document.getElementById('login__username');
const password = document.getElementById('login__password');
let currentUser;    // Variabel untuk menyimpan User
// Mengambil input dari form
form.addEventListener("submit", e => {
    let message = [];   // Membuat variabel message untuk menyimpan pesan
    if(username.value === '' || username.value == null){
        message.push("You must fill the username");
    }
    if(password.value === '' || password.value == null) {
        message.push("You must fill the password");
    }
    // Membuat message
    if(message.length > 0) {
        e.preventDefault();   // Mencegah browser untuk submit
        alert(message.join('\n'));
    } else{
        alert("Login successful!");
        form.remove();
        document.getElementById("main__comments-login-to-comment").remove();
        comment_form.style.display = "flex";
        comment_form.style.flexDirection = "column";
        currentUser = username.value;
    }
})

// Membuat comment
const comment_form = document.createElement("form");
const comment_textarea = document.createElement("textarea");  // Membuat elemen comment_input untuk memasukkan komentar
const comment_submit = document.createElement("button");
main__comments.append(comment_form);    // Memasukkan comment_form ke dalam body page website
comment_form.append(comment_textarea);     // Memasukkan comment_input ke dalam comment_form
comment_form.append(comment_submit);    // Memasukkan comemnt_submit ke dalam comment_form

// Mengatur atribut comment_form
comment_form.setAttribute("id", "comment_form");
comment_form.style.display = "none";

// Mengatur atribut comment_input
comment_textarea.setAttribute("id", "comment_input");
comment_textarea.setAttribute("placeholder", "Write your comment here...");
comment_textarea.style.padding = "2vh 1vw";
comment_textarea.style.resize = "none";
comment_textarea.style.fontSize = "1rem";

// Mengatur atribut comment_submit
comment_submit.setAttribute("id", "comment_submit");
comment_submit.setAttribute("type", "submit");
comment_submit.innerHTML = "Submit";
comment_submit.style.fontSize = "1.5rem";
comment_submit.style.padding = "10px";

// Menambahkan comment
comment_form.addEventListener("submit", e => {
    e.preventDefault(); // Mencegah submit
    
    // Memeriksa apakah textarea kosong atau terisi
    if(comment_textarea.value === "") {
        alert("You haven't written anything");
        return;
    }
    
    // Styling comment box
    const comment_box = document.createElement("div");
    comment_box.style.backgroundColor = "#E44D26";
    comment_box.style.borderRadius = "15px";
    comment_box.style.padding = "2vh 1vw";
    comment_box.style.fontSize = "1rem";
    comment_box.style.fontWeight = "200";
    comment_box.style.marginTop = "5vh";
    comment_box.style.color = "white";
    
    // Membuat comment box
    comment_box.innerHTML = `
        <strong>${currentUser}</strong>
        <p>${comment_textarea.value}</p>
        <small>${new Date().toLocaleString()}</small>
    `;

    main__comments.append(comment_box);
    comment_textarea.value = "";

})