document.getElementById("showBtn").addEventListener("click", showHero);

function showHero() {
    const hero = document.getElementById("heroSelect").value;

    const heroName = document.getElementById("heroName");
    const heroPower = document.getElementById("heroPower");
    const heroImage = document.getElementById("heroImage");

    if (hero === "") {
        heroName.textContent = "Choose a Hero";
        heroPower.textContent = "Select a hero to see their abilities.";
        heroImage.src = "hero-default.png";
        return;
    }

    const heroes = {
        flash: {
            name: "The Flash",
            power: "Super speed, time travel, lightning strikes.",
            image: "flash.png"
        },
        thor: {
            name: "Thor",
            power: "God of Thunder, lightning control, Mjölnir hammer.",
            image: "thor.png"
        },
        ironman: {
            name: "Iron Man",
            power: "Genius billionaire, high-tech suits, missiles & lasers.",
            image: "ironman.png"
        },
        wanda: {
            name: "Scarlet Witch",
            power: "Chaos magic, telekinesis, reality manipulation.",
            image: "wanda.png"
        },
        spiderman: {
            name: "Spider-Man",
            power: "Wall-crawling, web-shooting, spider sense.",
            image: "spiderman.png"
        }
    };

    heroName.textContent = heroes[hero].name;
    heroPower.textContent = heroes[hero].power;
    heroImage.src = heroes[hero].image;
}
