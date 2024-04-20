import SquadMember from "./SquadMember"

const squadMemberList = [
    {   color: "#4285F4",
        name: "Abdelrahman Sayedahmed",
        img: "https://media.licdn.com/dms/image/D4E35AQHQ8m8wTN0XsA/profile-framedphoto-shrink_400_400/0/1705967786875?e=1714197600&v=beta&t=-GhnflC5HqvZbuOnnT5IfyGNvjWvFHOIZJ3GsifhYSQ",
        fan: ["C.O.D", "Fast-Cars", "Python"],
        github: "https://github.com/AbdelSayedahmed",
        linkedin:"https://www.linkedin.com/in/abdelsayedahmed/",
        codeTrack:"https://pursuit.codetrack.dev/fellow/1197",
        notion:"https://www.notion.so/joinpursuit/10-6-Abdel-s-Fellow-Homepage-832ce11e25a94a55b63a601f7f8b73a9",
        rick:"https://www.youtube.com/watch?v=mx86-rTclzA",
        bio: "Bio: Abdel is a dynamic individual whose interests span across various realms. Growing up in a bustling city, Abdel developed a deep fascination for fast cars and the thrill of speed, which continues to drive his passion for racing and automotive engineering. Beyond the racetrack, Abdel is an avid coder with a particular affinity for Python programming. He finds joy in crafting elegant solutions to complex problems and constantly pushes himself to expand his coding prowess. \n In addition to his love for coding and fast cars, Abdel is also a dedicated gamer. Call of Duty holds a special place in his heart, offering both relaxation and a competitive outlet. Whether he's behind the wheel, writing code, or immersed in virtual battles, Abdel approaches every challenge with enthusiasm and a thirst for learning, embodying a versatile and passionate lifestyle"
    },
    {   color: "#EA4335",
        name: "Nahida Niki Khanam",
        img: "",
        fan: ["Animals", "Swimming", "Canvas"],
        github: "https://www.youtube.com/watch?v=mx86-rTclzA",
        linkedin:"https://www.youtube.com/watch?v=mx86-rTclzA",
        codeTrack:"https://www.youtube.com/watch?v=mx86-rTclzA",
        notion:"https://www.youtube.com/watch?v=mx86-rTclzA",
        rick:"https://www.youtube.com/watch?v=mx86-rTclzA",
        bio: "Bio: Niki is a driven workaholic who thrives in fast-paced environments. With a strong dedication to her career, she consistently strives for excellence and is known for her commitment to delivering results. Despite her demanding schedule, Niki finds joy and relaxation in the company of her two beloved cats. Their playful antics and affectionate nature provide a delightful escape from the rigors of work. Beyond her professional life, Niki has a deep passion for painting. Art has always been a source of inspiration and creative expression for her, allowing her to explore different themes and emotions on canvas. Whether she's capturing the beauty of landscapes or delving into abstract concepts, Niki's love for painting shines through in her vibrant and expressive artworks.Balancing her career ambitions, her cherished time with her cats, and her artistic pursuits, Niki embodies a well-rounded individual who finds fulfillment in both her professional success and her creative endeavors."
    },
    {   color: "#FBBC05",
        name: "Abraham Zambrano Tablante",
        img: "https://avatars.githubusercontent.com/u/146018040?v=4",
        fan: ["Soccer", "Sunshine", "Music"],
        github: "https://github.com/AbrahamZambranoTablante",
        linkedin:"https://www.linkedin.com/in/abrahamzambranotablante/",
        codeTrack:"https://pursuit.codetrack.dev/fellow/1214",
        notion:"https://www.notion.so/joinpursuit/Abraham-s-homepage-5f742c4b91594d7fbc08db8d1f669a7c",
        rick:"https://www.youtube.com/watch?v=mx86-rTclzA",
        bio:"Bio: Abraham is a passionate individual with a zest for life and a diverse range of interests. Growing up with a love for soccer, Abraham's enthusiasm for the sport has only grown stronger over the years. Whether playing with friends or cheering for his favorite team, soccer is a significant part of his life, bringing him joy and a sense of camaraderie. Abraham also has a deep appreciation for sunshine and the outdoors. He thrives in sunny weather, enjoying activities like hiking, picnics, and simply basking in the warmth of the sun's rays. The beauty of nature and the energy of the outdoors inspire him and provide moments of relaxation and rejuvenation. Additionally, Abraham is a music enthusiast. He has a diverse taste, enjoying everything from classic rock to contemporary pop. Music serves as a soundtrack to his life, enhancing his experiences and creating memorable moments. Balancing his love for soccer, the outdoors, and music, Abraham embraces life with enthusiasm and a positive outlook, finding happiness in the simple pleasures and the things that bring him passion and fulfillment."
    },
    {   color: "#4285F4",
        name: "Ayyoub Belibel",
        img: "https://media.licdn.com/dms/image/C5103AQESGY9-4GQQbA/profile-displayphoto-shrink_400_400/0/1555687550748?e=1718236800&v=beta&t=BDhQix0Fm-IS7vjg2KNNzeBWIudjEJKvVfOM6b5Itjg",
        fan: ["Chess", "Family Guy", "NBA"],
        github: "https://github.com/ayoublos",
        linkedin:"https://www.linkedin.com/in/ayyoub-belibel/",
        codeTrack:"https://pursuit.codetrack.dev/fellow/1196",
        notion:"https://www.notion.so/joinpursuit/10-6-Ayyoub-Belibel-Personal-Fellow-Homepage-1-69ef2320f3874c128a0c924eb9bddc43",
        rick:"https://www.youtube.com/watch?v=mx86-rTclzA",
        bio: "Bio: Ayyoub is a person of intellect and passion, with a deep appreciation for strategic thinking and family values. Chess has been a significant part of Ayyoub's life since childhood, shaping his analytical mind and love for tactical challenges. Whether playing casual games with friends or studying grandmaster strategies, chess is a constant source of fascination and mental stimulation for him. Family holds a special place in Ayyoub's heart. Ayyoub's strong family bonds provide him with a sense of belonging and fulfillment in both good times and challenging moments. In addition to his love for chess and family, Ayyoub is a devoted fan of the NBA (National Basketball Association). He follows the league closely, cheering for his favorite teams and players with enthusiasm. The excitement of basketball games and the skill displayed by athletes on the court inspire Ayyoub and add an extra layer of enjoyment to his leisure time. Balancing his passion for chess, his deep connection with family, and his love for NBA basketball, Ayyoub embodies a harmonious blend of strategic thinking, relational warmth, and sports fandom, making him a well-rounded and engaging individual."
    },
    {   color: "#34A853",
        name: "Israel Melo",
        img: "https://media.licdn.com/dms/image/D4D03AQFuIxcEgDFRcg/profile-displayphoto-shrink_400_400/0/1711446698697?e=1718236800&v=beta&t=VgOupDJmbvu5eUeCct50R6VtvMqcqVaG6menJiOvJgU",
        fan: ["Tucker", "Yarvin", "Thiel"],
        github: "https://github.com/isramelo",
        linkedin:"https://www.linkedin.com/in/imelo/",
        codeTrack:"https://pursuit.codetrack.dev/fellow/1213",
        notion:"https://www.youtube.com/watch?v=mx86-rTclzA",
        rick:"https://www.youtube.com/watch?v=mx86-rTclzA",
        bio:"Bio: Israel is an ardent enthusiast of political science, spending countless hours immersed in the pages of books that dissect governance, political ideologies, and societal frameworks. His passion for understanding the intricate mechanisms of politics extends to his admiration for thinkers such as Tucker Carlson, Curtis Yarvin, and Peter Thiel, whose analyses and perspectives on contemporary issues fuel his intellectual curiosity. Israel finds great pleasure in engaging with the works of these influential figures, drawing inspiration and insights that shape his own views on governance and technology's role in shaping societies. Outside of his academic pursuits, Israel is deeply engaged in current affairs and enjoys lively discussions that explore diverse viewpoints on the ever-changing political landscape. His love for reading and his admiration for insightful thinkers have not only enriched his understanding of political science but also fueled his desire to contribute meaningfully to discussions and debates surrounding societal progress and governance."
    },
    {   color: "#EA4335",
        name: "Run Quan (Ray) Zhou",
        img: "https://i.pinimg.com/140x140_RS/30/d2/51/30d2517a98f60fb4136cc801d92d7af3.jpg",
        fan: ["Hikaru", "Ippo", "Onizuka"],
        github: "https://github.com/runquan-ray-zhou",
        linkedin:"https://www.linkedin.com/in/runquanrayzhou/",
        codeTrack:"https://pursuit.codetrack.dev/fellow/1204",
        notion:"https://www.notion.so/joinpursuit/10-6-Runquan-Ray-Zhou-PursuitFe-9a8d533e0c65468c920ced4fb17585d3",
        rick:"https://www.youtube.com/watch?v=mx86-rTclzA",
        bio:"Bio: Ray is a passionate aficionado of East Asian culture, particularly drawn to the captivating world of mangas and East Asian films. His love for mangas transcends mere entertainment, delving deep into the intricate storytelling and artistic styles of Japanese comics. From classics like 'Hikaru No Go' and 'Hajime No Ippo' to more recent gems like 'One Punch Man' and 'The Fable' Ray's collection spans across genres, showcasing his diverse taste and appreciation for the medium's creativity. In addition to mangas, Ray has a profound admiration for East Asian cinema. He revels in the cinematic masterpieces that have emerged from countries like Japan, South Korea, and China, exploring themes ranging from historical epics to modern-day dramas. Films like Akira Kurosawa's 'Seven Samurai,' Park Chan-wook's 'Oldboy,' and Zhang Yimou's 'Hero' hold a special place in his heart, showcasing the rich storytelling and visual splendor of East Asian filmmaking. Ray's passion for mangas and East Asian films goes beyond mere enjoyment; it's a window into a vibrant cultural tapestry that he enthusiastically shares with others."
    }
]

export default function SquadMemberList() {

    return (

        <div className="squadMemberList">
            <ul>
                {squadMemberList.map((member) => <SquadMember member={member}/>)}
            </ul>
        </div>

    )

}