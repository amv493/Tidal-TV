import opPoster from '../assets/Pictures/OP-Poster.jpg';
import opHeader from '../assets/Pictures/OP-Header.jpg';
import opLogo from '../assets/Pictures/OP-Logo.png';
import opE1 from '../assets/Videos/OP-E1.mp4';
import opE2 from '../assets/Videos/OP-E2.mp4';
import atlaPoster from '../assets/Pictures/ATLA-Poster.jpg';
import atlaHeader from '../assets/Pictures/ATLA-Header.jpg';
import atlaLogo from '../assets/Pictures/ATLA-Logo.png';
import iceburg from '../assets/Videos/ATLA-E1.mp4';
import avatarReturn from '../assets/Videos/ATLA-E2.mp4';
import clHeader from '../assets/Pictures/CL-Header.jpg';
import clLogo from '../assets/Pictures/CL-Logo.png';
import clPoster from '../assets/Pictures/CL-Poster.jpg';
import clEp1 from '../assets/Videos/CL-E1.mp4';
import clEp2 from '../assets/Videos/CL-E2.mp4';
import kpPoster from '../assets/Pictures/KP-Poster.jpeg';
import kpE1 from '../assets/Videos/KP-E1.mp4';
import kpE2 from '../assets/Videos/KP-E2.mp4';
import jcaPoster from '../assets/Pictures/jca-poster.jpeg';
import jcaE1 from '../assets/Videos/JCA-E1.mp4';
import jcaE2 from '../assets/Videos/JCA-E2.mp4';
import pmPoster from '../assets/Pictures/PM-Poster.jpg';
import pmE1 from '../assets/Videos/PM-E1.mp4';
import pmE2 from '../assets/Videos/PM-E2.mp4';
import xsPoster from '../assets/Pictures/XS-Poster.jpg';
import xsE1 from '../assets/Videos/XS-E1.mp4';
import xsE2 from '../assets/Videos/XS-E2.mp4';
import smPoster from '../assets/Pictures/SM-Poster.jpg';
import smE1 from '../assets/Videos/SM-E1.mp4';
import smE2 from '../assets/Videos/SM-E2.mp4';
import dbzHeader from '../assets/Pictures/DBZ-Header.jpg';
import dbLogo from '../assets/Pictures/DBZ-Logo.png';
import dbzPoster from '../assets/Pictures/DBZ-Poster.jpg';
import dbzE1 from '../assets/Videos/DBZ-E1.mp4';
import dbzE2 from '../assets/Videos/DBZ-E2.mp4';
import ygoPoster from '../assets/Pictures/YGO-Poster.jpg';
import ygoE1 from '../assets/Videos/YGO-E1.mp4';
import ygoE2 from '../assets/Videos/YGO-E2.mp4';
import sxPoster from '../assets/Pictures/SX-Poster.jpg';
import sxE1 from '../assets/Videos/SX-E1.mp4';
import sxE2 from '../assets/Videos/SX-E2.mp4';
import tmntPoster from '../assets/Pictures/TMNT-Poster.jpg';
import tmntE1 from '../assets/Videos/TMNT-E1.mp4';
import tmntE2 from '../assets/Videos/TMNT-E2.mp4';

export const shows = [
    {
        id: 1, 
        title: "One Piece", 
        network: [
            "",
        ],
        style: "Anime",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: opPoster, 
        logo: opLogo,
        desc: 'Before he was executed, the legendary Pirate King Gold Roger revealed that he had hidden the treasure One Piece somewhere in the Grand Line. Now, many pirates are off looking for this legendary treasure to claim the title Pirate King. One pirate, Monkey D. Luffy, is a boy who had eaten the Devil’s Fruit and gained rubber powers. Now he and his crew are off to find One Piece, while battling enemies and making new friends along the way.',
        episodes: [
            { season: "1", id: "e1", title: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!", videoUrl: opE1 }, 
            { season: "1", id: "e2", title: "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!", videoUrl: opE2 }
        ]
    }, 
    {
        id: 2, 
        title: "Avatar: The Last Airbender", 
        network: [
            "Nickelodeon",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: atlaPoster,
        desc: 'The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation. Only the Avatar is the master of all four elements. The ruthless Fire Nation wants to conquer the world but the only bender who has enough power, the Avatar, has disappeared ... until now. His tribe soon discovers that Aang is the long-lost Avatar. Now Katara and Sokka must safeguard Aang on his journey to master all four elements and save the world from the Fire Nation.',
        episodes: [
            { season: "1", id: "e1", title: "The Boy in the Iceburg", videoUrl: iceburg }, 
            { season: "1", id: "e2", title: "The Avatar Returns", videoUrl: avatarReturn }
        ]
    }, 
    {
        id: 3, 
        title: "Code Lyoko", 
        network: [
            "Cartoon Network",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: clPoster,
        desc: 'Students Yumi, Jeremy, Odd and Ulrich stumble across a large Supercomputer in an old factory by their school. They soon discover that the computer houses an alternate world, Lyoko, and that by using computer controls they can transport themselves into this virtual universe. Once inside, they meet a virtual humanoid girl named Aelita who relays the story of X.A.N.A., a sentient virus that has infected the Supercomputer and threatens to destroy Lyoko and ultimately control the Earth. They spend four seasons battling the elusive X.A.N.A., developing new methods and technologies for entering in and out this alternate universe and protecting their classmates, teachers and the world as they know it. Audiences, meanwhile, hang on with anticipation as the question looms- can our heroes put an end to the treat of X.A.N.A.? One thing is certain: they are ready to risk everything to win.',
        episodes: [
            { season: "1", id: "e1", title: "Teddygozilla", videoUrl: clEp1 }, 
            { season: "1", id: "e2", title: "Seeing Is Believing", videoUrl: clEp2 }
        ]
    }, 
    {
        id: 4, 
        title: "Kim Possible", 
        network: [
            "Disney Channel",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: kpPoster,
        episodes: [
            { season: "", id: "e1", title: "Crush", videoUrl: kpE1 }, 
            { season: "", id: "e2", title: "Sink or Swim", videoUrl: kpE2 }
        ]
    }, 
    {
        id: 5, 
        title: "Jackie Chan Adventures", 
        network: [
            "WB Kids",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: jcaPoster,
        episodes: [
            { season: "", id: "e1", title: "The Dark Hand", videoUrl: jcaE1 }, 
            { season: "", id: "e2", title: "The Power Within", videoUrl: jcaE2 }
        ]
    }, 
    {
        id: 6, 
        title: "Xiolin Showdown", 
        network: [
            "WB Kids",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: xsPoster,
        desc: ' ',
        episodes: [
            { id: "e1", title: "The Journey of a Thousand Miles", videoUrl: xsE1 }, 
            { id: "e2", title: "Like a Rock!", videoUrl: xsE2 }
        ]
    }, 
    {
        id: 7, 
        title: "Pokemon: Indigo League", 
        network: [
            "Cartoon Network",
            "WB Kids",
        ],
        style: "Anime",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: pmPoster,
        desc: ' ',
        episodes: [
            { season: "1", id: "e1", title: "Pokémon, I Choose You!", videoUrl: pmE1 }, 
            { season: "1", id: "e2", title: "Pokémon Emergency!", videoUrl: pmE2 }
        ]
    }, 
    {
        id: 8, 
        title: "Yu-Gi-Oh! Duel Monsters", 
        network: [
            "WB Kids",
            "Cartoon Network", 
        ],
        style: "Anime",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: ygoPoster,
        desc: '',
        episodes: [
            { season: "1", id: "e1", title: "The Heart of the Cards", videoUrl: ygoE1 }, 
            { season: "1", id: "e2", title: "The Gauntlet Is Thrown", videoUrl: ygoE2 }
        ]
    }, 
    {
        id: 9, 
        title: "Sailor Moon", 
        network: [
            "Toonami",
            "Cartoon Network",
        ],
        style: "Anime",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: smPoster,
        desc: ' ',
        episodes: [
            { season: "1", id: "e1", title: "A Moon Star is Born", videoUrl: smE1 }, 
            { season: "1", id: "e2", title: "Punish Them! The House of Fortune is the Monster Man", videoUrl: smE2 }
        ]
    }, 
    {
        id: 10, 
        title: "Dragon Ball Z", 
        network: [
            "Toonami",
            "Cartoon Network",
        ],
        style: "Anime",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: dbzPoster,
        desc: 'Goku returns with his son Gohan, but peace never lasts. As powerful enemies like Frieza, Cell, and Buu threaten the universe, Goku uncovers his Saiyan origins, reaches new heights of power, and proves himself among the strongest warriors alive all while gaining allies, facing rivals, and balancing battle with family as the ever cheerful Saiyan protector of Earth.',
        episodes: [
            { season: "1", id: "e1", title: "The New Threat", videoUrl: dbzE1 }, 
            { season: "1", id: "e2", title: "Reunions", videoUrl: dbzE2 }
        ]
    }, 
    {
        id: 11, 
        title: "Sonic X", 
        network: [
            "WB Kids",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: sxPoster,
        desc: '',
        episodes: [
            { season: "1", id: "e1", title: "Chaos Control Freaks", videoUrl: sxE1 }, 
            { season: "1", id: "e2", title: "Infiltrate! Area 99", videoUrl: sxE2 }
        ]
    }, 
    {
        id: 12, 
        title: "TMNT", 
        network: [
            "WB Kids",
        ],
        style: "Cartoon",
        genre: [
            "Action", 
            "Adventure",
        ], 
        img: tmntPoster,
        desc: '',
        episodes: [
            { season: "1", id: "e1", title: "Things Change", videoUrl: tmntE1 }, 
            { season: "1", id: "e2", title: "A Better Mousetrap", videoUrl: tmntE2 }
        ]
    }, 
];


export const headers = [
    {
        id: 1, 
        title: "One Piece",  
        logo: opLogo,
        headerImg: opHeader,
        desc: 'Before he was executed, the legendary Pirate King Gold Roger revealed that he had hidden the treasure One Piece somewhere in the Grand Line. Now, many pirates are off looking for this legendary treasure to claim the title Pirate King. One pirate, Monkey D. Luffy, is a boy who had....',
    },
    {
        id: 2, 
        title: "Avatar: The Last Airbender", 
        logo: atlaLogo,
        headerImg: atlaHeader,
        desc: 'The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation....',
    }, 
    {
        id: 3, 
        title: "Code Lyoko", 
        logo: clLogo,
        headerImg: clHeader,
        desc: 'Students Yumi, Jeremy, Odd and Ulrich stumble across a large Supercomputer in an old factory by their school. They soon discover that the computer houses an alternate world, Lyoko, and that by using computer controls they can transport themselves into this virtual universe....',
    },
    {
        id: 4, 
        title: "Dragon Ball Z", 
        logo: dbLogo,
        headerImg: dbzHeader,
        desc: 'Goku returns with his son Gohan, but peace never lasts. As powerful enemies like Frieza, Cell, and Buu threaten the universe, Goku uncovers his Saiyan origins, reaches new heights of power, and proves himself among the strongest warriors alive all while gaining allies, facing rivals, and balancing battle with family as the ever cheerful Saiyan protector of Earth.',
    },
];