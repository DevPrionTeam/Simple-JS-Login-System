/////////////////////////////////////////////////////////////////////////////////////////////
//  A very simples JS to work with cookies, and a exemple of a basic cookies login system. //
//  Coded by [DEV] Varloc from prionGames.                                                 //
//  Research about returning a specific cookie was made on W3Schools.                      //
/////////////////////////////////////////////////////////////////////////////////////////////

// Function responsible for handling the login schedule.
function logar(){
    // Catching the data from the form.
    const user = document.forms["loginsys"]["user"].value;
    const pass = document.forms["loginsys"]["pass"].value;

    // If you have any DataBase on your website, handle it here.
    // And once it returns true, do a validation with a IF statement to validate
    // whats below this message.

    // Validation to see if the login and pass has the currect amount of chars before doing the login.
    if((user.length >= 5 && pass.length >= 6) && (user.length <= 16 && pass.length <= 16)){
      // Create cookies with the login/pass given by the user.
      // Here i set the cookies to last just 1 day, but you can put more if you want.
      // You can create a function based on setCookies with no exdays needed if you wanna
      // to delete the cookies right when the browser closes ;)
      setCookie("usuario",user,1);
      setCookie("senha",pass,1);// Not necessary, just for DB search purposes. (can use pass variable instead of making a cookie of it.)

      // Check if cookies has been created [unreal login.]
      if(getCookie("usuario") && getCookie("senha")){
          // Any other things you wanna do related to this cookies, put it down below.

          // Lets go to the main page (gross way)
          window.location.href = "./";
      }else{ 
          alert('Error checking for cookies. Maybe your user / pass is wrong ?');
          location.reload();// reloads the current page.
      }
    }else{
      alert('User / password is too short or too long to login. Maybe you forgot about any of those ?');
      location.reload();// reloads the current page.
    }

    
}

// Function to create/modify cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=./";
}

// Function to return a cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function to delete a cookie [ gross way ]
function delete_cookie(name) {
    document.cookie = name +'=; Path=./; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Function to logout the user
function logout(){
    // Deletes the cookies related to login system.
    delete_cookie("usuario");
    delete_cookie("senha");

    if(!getCookie("usuario") && !getCookie("senha")){
        // Extra logout things / features here.

        // Return to login page.
        location.href = "./login.html";
    }else{ alert('Error on logout, contact the system support.'); location.reload(); }
}