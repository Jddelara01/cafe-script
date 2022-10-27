// if a user is logged in in the system

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for authentication');
    authenticated();
});

function authenticated() {
    let displayName = document.getElementById("orderHistory");
    let displayLogoutBtn = document.getElementById("logOut");
    let hideLink = document.getElementById("loginPage");
    let displayUserName = document.getElementById("displayUser")
    console.log(currentUser);
    if(currentUser) {
        displayUserName.innerHTML = currentUser;
        displayName.style.display = "block";
        displayLogoutBtn.style.display = "block";
        hideLink.style.display = "none";
    } else {
        displayName.style.display = "none";
        displayLogoutBtn.style.display = "none";
        hideLink.style.display = "block";
    }
}