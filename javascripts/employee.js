console.log("hello");
var profiles = document.getElementById("employee-profiles");
var employees = [
    {image: "../img/master-shake.jpg",
    name: "Jackie",
    about: "Hail-shot no prey, no pay lass Privateer spirits aft ho lee bring a spring upon her cable gunwalls. Doubloon hardtack jolly boat piracy red ensign wench log American Main fore hearties. Marooned heave to hulk flogging reef gibbet aft lugger port wench."
    },
    {image: "../img/SpaceGhost.jpg",
    name: "Willie",
    about: "Rope's end brig quarterdeck booty scuttle Cat o'nine tails spirits gangway dance the hempen jig lass. Jib scuttle weigh anchor crimp fore shrouds driver furl ye squiffy. Overhaul ho code of conduct spyglass main sheet ye pillage clap of thunder long boat brigantine."
    },
    {image: "../img/Meatwad.jpg",
    name: "Tamela",
    about: "Tackle quarterdeck heave down maroon lad rope's end Davy Jones' Locker code of conduct boatswain tack. Mutiny log nipper yard pressgang Shiver me timbers maroon crack Jennys tea cup bilge rat Admiral of the Black. Broadside parrel log keel scourge of the seven seas gun nipperkin avast brigantine black spot."
    }
]

for (awesome in employees) {
    var peeps = `<article class="employee-js">
                    <img alt="employee photo" class="employee-photo"    src="${employees[awesome].image}">
                    <p class="employee-name">${employees[awesome].name}</p>
                    <p class="employee-profile">${employees[awesome].about}</p>
                </article>`;
    profiles.innerHTML += peeps;
}

//for (prop in productArray) {
//    var cards = `<article class="articles">
//                    <img class="image-size" src="${productArray[prop].image}">
//                    <div class = "overlay">
//                        <h2>${productArray[prop].name} </h2>
//                        <p class="description">${productArray[prop].description}</p>
//                        <p class="price">${productArray[prop].price}</p>
//                    </div>
//                </article>`;
//    divElement.innerHTML += cards;
