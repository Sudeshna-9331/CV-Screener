//Array of objects



const date = [
    {
        Name: "Rohan Das",
        Age: 18,
        City: "Kolkata",
        Language: "JavaScript",
        Framework: "React",
        Image: "https://randomuser.me/api/portraits/men/70.jpg"

    },

    {
        Name: "Shuvam Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/men/71.jpg"

    },

    {
        Name: "Arnab Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/men/72.jpg"

    },

    {
        Name: "Bishwa Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/men/73.jpg"

    },

    {
        Name: "Tamal Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/men/74.jpg"

    },

    {
        Name: "Priya Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/men/75.jpg"

    },

    {
        Name: "Manik Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/men/79.jpg"

    },

    {
        Name: "Sunny Das",
        Age: 18,
        City: "Kolkata",
        Language: "Python",
        Framework: "Django",
        Image: "https://randomuser.me/api/portraits/women/76.jpg"

    }
]

//CV Iterator
function cviterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < (profiles.length) ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    };
}


//Next Button listener
let next = document.getElementById("next");
next.addEventListener("click", nextCV);

let i = 0;

function nextCV() {
    
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (i < date.length) {
        image.innerHTML = `<img src='${date[i].Image}'>`

        profile.innerHTML = `<ul class="list-group">
                                <li class="bg-success list-group-item active">${date[i].Name}</li>
                                <li class="list-group-item"><b>${date[i].Age}</b> years old</li>
                                <li class="list-group-item">lives in <b>${date[i].City}</b></li>
                                <li class="list-group-item">primarily works on <b>${date[i].Language}</b></li>
                                <li class="list-group-item">with<b> ${date[i].Framework}</b></li>
                        </ul>`
        i = i + 1;
    }
    else {
        alert("End of candidate applications");
        window.location.reload();
    }
}

//Previous Button listener
let previous = document.getElementById("previous");
previous.addEventListener("click", prevCV);


function prevCV() {

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (i >= 0) {
        --i;
        image.innerHTML = `<img src='${date[i].Image}'>`

        profile.innerHTML = `<ul class="list-group">
                                <li class="bg-success list-group-item active">${date[i].Name}</li>
                                <li class="list-group-item"><b>${date[i].Age}</b> years old</li>
                                <li class="list-group-item">lives in <b>${date[i].City}</b></li>
                                <li class="list-group-item">primarily works on <b>${date[i].Language}</b></li>
                                <li class="list-group-item">with<b> ${date[i].Framework}</b></li>
                        </ul>`

    }
    else {
        alert("There are nothing before...");

    }
}
nextCV();
prevCV();