AOS.init();

const map = document.getElementById("map");
const hero = document.getElementById("hero");

map.addEventListener("click", () => {
    const loc = "https://www.google.com/maps/place/Sai+Towers/@14.1663283,77.8088962,17z/data=!3m1!4b1!4m9!3m8!1s0x3bb164c99f4c3c99:0xec80564bcc3b08e6!5m2!4m1!1i2!8m2!3d14.1663283!4d77.8114711!16s%2Fg%2F1tdjplly?entry=ttu";
    let newTab = window.open(loc, '_blank');
    newTab.focus();
})

const img = [
    {
        src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlYXJsfGVufDB8fDB8fHww"
    },
    {
        src: "https://images.unsplash.com/photo-1625792508272-bc6ad2788b14?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlYXJsfGVufDB8fDB8fHww"
    },
    {
        src: "https://images.unsplash.com/photo-1613843351058-1dd06fda7c02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymx1ZSUyMHNhcHBoaXJlfGVufDB8fDB8fHww"
    },
    {
        src: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=800&auto.format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        src: "https://images.unsplash.com/photo-1502652023201-a16bde8138d2?w=800&auto.format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpYW1vbmQlMjByaW5nfGVufDB8fDB8fHww"
    },
    {
        src: "https://images.unsplash.com/photo-1607703829864-440a2090ec8e?w=800&auto.format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRpYW1vbmQlMjByaW5nfGVufDB8fDB8fHww"
    }
];

shuffleArray(img);

let currentIndex = 0;

function changeImg() {
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.backgroundImage = `url('${img[currentIndex].src}')`;
        hero.style.opacity = 1;
        currentIndex = (currentIndex + 1) % img.length;
    }, 1000); 
}

changeImg(); 
setInterval(changeImg, 8000); 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}