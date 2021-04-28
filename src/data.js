import {v4 as uuidv4} from 'uuid';

//A piece of state of the application that is separated. It returns array of objects. all songs and their info are here
function chillHop() {
    return [
        {
            name: "Reflection",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=6552",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Beaver Greek",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10070",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Cascade ",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            artist: "Knowmadic ",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
            color: ["#FFFFFF", "#F8C34F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Daylight",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=6517",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Nightfall",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=6520",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Keep Going",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=6554",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Roses n Flames",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            artist: "CYGN",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
            color: ["#6D8CBB", "#BD75CB"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Kinsfolk",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg\"",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12996",
            color: ["#6C844A", "#4E6131"],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default chillHop;