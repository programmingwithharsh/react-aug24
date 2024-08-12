const SetLocalStorage = () => {

    let user = {
        name: "Prabhudas",
        email: "Prabhudas@gmail.com"
    };

    let users = [
        {
            id: 1,
            name: "Text User",
            email: "Textuser@gmail.com"
        },
        {
            id: 1,
            name: "Anne Hunter",
            email: "annehunter@gmail.com"
        },
        {
            id: 1,
            name: "Jale Boser",
            email: "jaleboser@gmail.com"
        }
    ];
    /*
        JSON.stringiy - convert object into string
        JSON.parse - conver string into object
    */

    localStorage.setItem("username", "Abdul"); // storing string
    localStorage.setItem("x", 2); // storing number
    localStorage.setItem("active", true); // storing boolean
    localStorage.setItem("user", JSON.stringify(user)); // storing object
    localStorage.setItem("users", JSON.stringify(users)); // storing array of object in local storage

    return (<>
        <h1>Set item in localStorage</h1>
    </>);
}

export default SetLocalStorage;