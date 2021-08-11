document.getElementById('submit_btn').onclick = function System() {

    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var birthday = document.getElementById('birthday').value;
    var email = document.getElementById('email').value;


    //var
    name_var = true
    surname_var = true
    birthday_var = true
    email_var = true


    //Überprüfung

    if (name === '') {

        alert("Name is empty!!!")

        console.clear()
        console.warn("Name is empty!!!")

        name_var = false
    }
    else {

        name_var = true
    }
    
    if (surname === '') {

        alert("Surname is empty!!!")

        console.clear()
        console.warn("Surname is empty!!!")

        surname_var = false
    }
    else {

        surname_var = true
    }
    
    if (birthday === '') {

        alert("Birtday is empty!!!")

        console.clear()
        console.warn("Birtday is empty!!!")

        birthday_var = false
    }
    else {

        birthday_var = true
    }
    
    if (email === '') {

        alert("Email is empty!!!")

        console.clear()
        console.warn("Email is empty!!!")

        email_var = false
    }
    else {

        email_var = true
    }
    
    
    if(name_var === true && surname_var === true && birthday_var === true && email_var === true) {

        console.clear()
        console.log("Name: ", name)
        console.log("Surname: ", surname)
        console.log("Birthday: ", birthday)
        console.log("Email: ", email)


        document.getElementById('save_name').innerText = "Name: " + name
        document.getElementById('save_surname').innerText = "Surname: " + surname
        document.getElementById('save_birthday').innerText = "Birthday: " + birthday
        document.getElementById('sava_email').innerText = "Email: " + email

    }

}


//


document.getElementById('clear_btn').onclick = function () {

    console.clear()

    document.getElementById('save_name').innerText = "Name: "
    document.getElementById('save_surname').innerText = "Surname: "
    document.getElementById('save_birthday').innerText = "Birthday: "
    document.getElementById('sava_email').innerText = "Email: "


}


//darkmode

document.getElementById('dark_mode_btn').onclick = function () {

    document.getElementById('style').href = 'css/dark.css'
    
    
    console.log("Dark mode is aktive.")

}

document.getElementById('white_mode_btn').onclick = function () {

    document.getElementById('style').href = 'style.css'
    
    
    console.log("White mode is aktive.")

}