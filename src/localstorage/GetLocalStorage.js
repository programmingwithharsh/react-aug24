const GetLocalStorage = () => {

    let username = localStorage.getItem("username");
    let x = localStorage.getItem("x");
    let active = localStorage.getItem("active");
    let user = localStorage.getItem("user");
    let users = localStorage.getItem("users");

    let userObj = JSON.parse(user);
    let usersObj = JSON.parse(users);

    console.log("username >>>>>", typeof username);
    console.log("x >>>>>", typeof x);
    console.log("active >>>>>", typeof active);
    console.log("user >>>>>", typeof user);
    console.log("users >>>>>", typeof users);

    console.log("user >>>>>", user);
    console.log("users >>>>>", users);

    console.log("user >>>>>", userObj);
    console.log("users >>>>>", usersObj);

    return (<>
        <h1>Get item from localStorage</h1>
        <div>Localstorage username is <b>{username}</b></div>
        <div>Localstorage x is <b>{x}</b></div>
        <div>Localstorage active is <b>{active}</b></div>
    </>);
}

export default GetLocalStorage;