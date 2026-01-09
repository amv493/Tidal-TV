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
import dbzPoster from '../assets/Pictures/DBZ-Poster.jpg';
import dbzE1 from '../assets/Videos/DBZ-E1.mp4';
import dbzE2 from '../assets/Videos/DBZ-E2.mp4';
import ygoPoster from '../assets/Pictures/YGO-Poster.jpg';
import ygoE1 from '../assets/Videos/YGO-E1.mp4';
import ygoE2 from '../assets/Videos/YGO-E2.mp4';

export const shows = [
    {
        id: 1, 
        title: "One Piece", 
        img: opPoster, 
        logo: opLogo,
        headerImg: opHeader,
        desc: 'Before he was executed, the legendary Pirate King Gold Roger revealed that he had hidden the treasure One Piece somewhere in the Grand Line. Now, many pirates are off looking for this legendary treasure to claim the title Pirate King. One pirate, Monkey D. Luffy, is a boy who had eaten the Devil’s Fruit and gained rubber powers. Now he and his crew are off to find One Piece, while battling enemies and making new friends along the way.',
        episodes: [
            { id: "e1", title: "I'm Luffy! The Man Who's Gonna Be King of the Pirates!", videoUrl: opE1 }, 
            { id: "e2", title: "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!", videoUrl: opE2 }
        ]
    }, 
    {
        id: 2, 
        title: "Avatar: The Last Airbender", 
        img: atlaPoster,
        headerImg: atlaHeader,
        desc: 'The world is divided into four nations -- the Water Tribe, the Earth Kingdom, the Fire Nation and and the Air Nomads -- each represented by a natural element for which the nation is named. Benders have the ability to control and manipulate the element from their nation. Only the Avatar is the master of all four elements. The ruthless Fire Nation wants to conquer the world but the only bender who has enough power, the Avatar, has disappeared ... until now. His tribe soon discovers that Aang is the long-lost Avatar. Now Katara and Sokka must safeguard Aang on his journey to master all four elements and save the world from the Fire Nation.',
        episodes: [
            { id: "e1", title: "The Boy in the Iceburg", videoUrl: iceburg }, 
            { id: "e2", title: "The Avatar Returns", videoUrl: avatarReturn }
        ]
    }, 
    {
        id: 3, 
        title: "Code Lyoko", 
        img: clPoster,
        headerImg: clHeader,
        desc: 'Students Yumi, Jeremy, Odd and Ulrich stumble across a large Supercomputer in an old factory by their school. They soon discover that the computer houses an alternate world, Lyoko, and that by using computer controls they can transport themselves into this virtual universe. Once inside, they meet a virtual humanoid girl named Aelita who relays the story of X.A.N.A., a sentient virus that has infected the Supercomputer and threatens to destroy Lyoko and ultimately control the Earth. They spend four seasons battling the elusive X.A.N.A., developing new methods and technologies for entering in and out this alternate universe and protecting their classmates, teachers and the world as they know it. Audiences, meanwhile, hang on with anticipation as the question looms- can our heroes put an end to the treat of X.A.N.A.? One thing is certain: they are ready to risk everything to win.',
        episodes: [
            { id: "e1", title: "Teddygozilla", videoUrl: clEp1 }, 
            { id: "e2", title: "Seeing Is Believing", videoUrl: clEp2 }
        ]
    }, 
    {
        id: 4, 
        title: "Kim Possible", 
        img: kpPoster,
        episodes: [
            { id: "e1", title: "Crush", videoUrl: kpE1 }, 
            { id: "e2", title: "Sink or Swim", videoUrl: kpE2 }
        ]
    }, 
    {
        id: 5, 
        title: "Jackie Chan Adventures", 
        img: jcaPoster,
        episodes: [
            { id: "e1", title: "The Dark Hand", videoUrl: jcaE1 }, 
            { id: "e2", title: "The Power Within", videoUrl: jcaE2 }
        ]
    }, 
    {
        id: 6, 
        title: "Xiolin Showdown", 
        img: xsPoster,
        headerImg: atlaHeader,
        desc: ' ',
        episodes: [
            { id: "e1", title: "", videoUrl: xsE1 }, 
            { id: "e2", title: "", videoUrl: xsE2 }
        ]
    }, 
    {
        id: 7, 
        title: "Pokemon", 
        img: pmPoster,
        headerImg: atlaHeader,
        desc: ' ',
        episodes: [
            { id: "e1", title: "", videoUrl: pmE1 }, 
            { id: "e2", title: "", videoUrl: pmE2 }
        ]
    }, 
    {
        id: 8, 
        title: "Yu-Gi-Oh! Duel Monsters", 
        img: ygoPoster,
        headerImg: atlaHeader,
        desc: '',
        episodes: [
            { id: "e1", title: "The Heart of the Cards", videoUrl: ygoE1 }, 
            { id: "e2", title: "The Gauntlet Is Thrown", videoUrl: ygoE2 }
        ]
    }, 
    {
        id: 9, 
        title: "Sailor Moon", 
        img: smPoster,
        headerImg: atlaHeader,
        desc: ' ',
        episodes: [
            { id: "e1", title: "The Boy in the Iceburg", videoUrl: smE1 }, 
            { id: "e2", title: "The Avatar Returns", videoUrl: smE2 }
        ]
    }, 
    {
        id: 10, 
        title: "Dragon Ball Z", 
        img: dbzPoster,
        headerImg: atlaHeader,
        desc: '',
        episodes: [
            { id: "e1", title: "", videoUrl: dbzE1 }, 
            { id: "e2", title: "", videoUrl: dbzE2 }
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
    }
];