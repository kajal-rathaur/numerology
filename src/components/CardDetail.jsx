import { React, useEffect, useState } from "react";

const CardDetail = ({ number }) => {
    const [cardNumber, setCardNumber] = useState({
        title: "",
        description: "",
        favouriteNumber: "",
    });
    const cardDetails = {
        1: {
            title: "Number 1",
            personality: "The Leader (Independent, Ambitious, Original)",
            personalityDesc: "People with a Life Path number of 1 are seen as natural-born leaders. They are independent, ambitious, and driven to succeed. They value originality and enjoy taking charge.",
            strength: "Independent, Ambitious, Original, Confident",
            challenge: "Dominance, Impatience, Stubbornness, Isolation",
            association: "Sun, gold, Sunday, the Emperor (Tarot card)",
            descHeadline: "",
            description: "Shining like the sun, the number 1 embodies beginnings, independence, and a pioneering spirit. Individuals with a dominant 1 radiate confidence and ambition. They are natural leaders, driven to forge their own path and inspire others. Their originality and decisiveness propel them towards success. However, their dominance can sometimes tip into impatience or stubbornness, requiring them to nurture a more collaborative spirit.",
        },
        2: {
            title: "Number 2",
            personality: "The Diplomat (Cooperative, Balanced, Intuitive)",
            personalityDesc: "Those with a Life Path number of 2 are known for their diplomacy and cooperation. They value balance and harmony and strive to create peace in their relationships. They possess strong intuition and empathy.",
            strength: "Cooperative, Empathetic, Mediative, Intuitive",
            challenge: "Indecisiveness, Conflict Avoidance, People-Pleasing, Naivety",
            association: "Moon, silver, Monday, the High Priestess (Tarot card)",
            descHeadline: "The Diplomat (The Moon)",
            description: "Boasting the expansive energy of Jupiter, the number 3 represents creativity, communication, and joy. Individuals with a prominent 3 are expressive and optimistic, bringing a spark of enthusiasm to everything they do. Their gift for storytelling and communication allows them to connect with others on a deeper level. However, their free spirit can manifest as disorganization or procrastination, requiring them to develop a focus on structure and follow-through.",
        },
        3: {
            title: "Number 3",
            personality: "The Creative (Expressive, Optimistic, Sociable)",
            personalityDesc: "Life Path 3 individuals are creative, optimistic, and enjoy expressing themselves. They are social butterflies who thrive on communication and connection. They often have a youthful spirit and a knack for storytelling",
            strength: "Expressive, Optimistic, Sociable, Storyteller",
            challenge: "Procrastination, Disorganization, Sensitivity, Restlessness",
            association: "Jupiter, tin, Thursday, the Empress (Tarot card)",
            descHeadline: "The Creative (Jupiter)",
            description: "Boasting the expansive energy of Jupiter, the number 3 represents creativity, communication, and joy. Individuals with a prominent 3 are expressive and optimistic, bringing a spark of enthusiasm to everything they do. Their gift for storytelling and communication allows them to connect with others on a deeper level. However, their free spirit can manifest as disorganization or procrastination, requiring them to develop a focus on structure and follow-through.",
        },
        4: {
            title: "Number 4",
            personality: "The Organizer (Practical, Stable, Methodical)",
            personalityDesc: "People with a Life Path number of 4 are practical, stable, and methodical. They value organization and structure and excel at planning and problem-solving. They bring a sense of security and reliability to those around them.",
            strength: "Practical, Stable, Meticulous, Problem-Solver",
            challenge: "Rigidity, Control, Perfectionism, Emotional Detachment",
            association: "Uranus, blue, Saturday, the Emperor (Tarot card)",
            descHeadline: "The Organizer (Uranus)",
            description: "Solid and dependable like the earth ruled by Uranus, the number 4 embodies stability, order, and practicality. People with a strong 4 excel at organization and planning, ensuring tasks are completed efficiently. Their meticulous nature and problem-solving skills bring a sense of security and reliability to those around them. However, their rigidity can make them resistant to change, and their focus on detail might overshadow the bigger picture at times.",
        },
        5: {
            title: "Number 5",
            personality: "The Adventurer (Adaptable, Curious, Freedom-Loving)",
            personalityDesc: "Life Path 5 individuals are adaptable, curious, and freedom-loving. They crave adventure and new experiences and are highly adaptable to change. They are known for their quick wit and a thirst for knowledge.",
            strength: "Adaptable, Curious, Freedom-Loving, Quick Learner",
            challenge: "Commitment Issues, Impulsiveness, Scattered Energy, Fear of Missing Out (FOMO)",
            association: "Mercury, yellow, Wednesday, the Hierophant (Tarot card)",
            descHeadline: "The Adventurer (Mercury)",
            description: "Embodying the swiftness and adaptability of Mercury, the number 5 represents change, freedom, and adventure. Individuals with a dominant 5 crave new experiences and embrace challenges with an open mind. Their curiosity and quick learning abilities make them adaptable to any situation. However, their love of freedom can lead to commitment issues or scattered energy, requiring them to find ways to channel their enthusiasm into focused pursuits.",
        },
        6: {
            title: "Number 6",
            personality: "The Nurturer (Responsible, Caring, Compassionate)",
            personalityDesc: "Those with a Life Path number of 6 are responsible, caring, and compassionate. They have a strong nurturing instinct and put the needs of others before their own. They value stability and harmony in their relationships.",
            strength: "Responsible, Caring, Compassionate, Supportive",
            challenge: "Self-Sacrifice, Codependency, Guilt, Overprotectiveness",
            association: "Venus, copper, Friday, the Lovers (Tarot card)",
            descHeadline: "The Nurturer (Venus)",
            description: "Radiating the warmth and love of Venus, the number 6 signifies responsibility, care, and compassion. People with a strong 6 possess a nurturing instinct and a deep desire to connect with and support others. They create a warm and harmonious environment, fostering strong relationships. However, their selflessness can sometimes manifest as codependency or guilt, requiring them to maintain a healthy balance between giving and receiving.",
        },
        7: {
            title: "Number 7",
            personality: "The Seeker (Analytical, Knowledgeable, Introspective)",
            personalityDesc: "Life Path 7 individuals are analytical, knowledgeable, and introspective. They are natural researchers and seekers of truth. They enjoy solitude and quiet contemplation and value wisdom and understanding.",
            strength: "Analytical, Knowledgeable, Introspective, Wise",
            challenge: "Isolation, Overthinking, Perfectionism, Cynicism",
            association: "Neptune, purple, Tuesday, the Chariot (Tarot card)",
            descHeadline: " The Seeker (Neptune)",
            description: "Veiled in the mystery of Neptune, the number 7 represents knowledge, wisdom, and introspection. Individuals with a dominant 7 are analytical and introspective, constantly seeking truth and understanding. Their thirst for knowledge and analytical mind make them natural researchers and problem-solvers. However, their solitary nature can lead to isolation, and their pursuit of perfection can sometimes become paralyzing, requiring them to embrace collaboration and accept that complete understanding may not always be readily available.",
        },
        8: {
            title: "Number 8",
            personality: "The Power Player (Ambitious, Determined, Goal-Oriented)",
            personalityDesc: "People with a Life Path number of 8 are ambitious, determined, and goal-oriented. They are natural leaders with a strong sense of purpose and a desire to achieve great things. They can be decisive and resourceful.",
            strength: "Ambitious, Determined, Goal-Oriented, Resourceful",
            challenge: "Ruthlessness, Workaholism, Arrogance, Micromanagement",
            association: "Saturn, lead, Saturday, Strength (Tarot card)",
            descHeadline: "The Power Player (Saturn)",
            description: "Empowered by the discipline of Saturn, the number 8 signifies abundance, achievement, and power. Individuals with a strong 8 possess unwavering ambition and a drive to achieve great things. Their strong leadership skills and resourcefulness propel them towards success. However, their relentless pursuit of goals can sometimes lead to ruthlessness or micromanaging, requiring them to develop empathy and trust in others' capabilities.",
        },
        9: {
            title: "Number 9",
            personality: "The Humanitarian (Idealistic, Compassionate, Selfless)",
            personalityDesc: "Life Path 9 individuals are idealistic, compassionate, and selfless. They have a strong humanitarian streak and a desire to make the world a better place. They are understanding, forgiving, and possess a broad perspective.",
            strength: "Idealistic, Compassionate, Selfless, Understanding",
            challenge: "Naivete, Self-Sacrifice, Discouragement, Burnout",
            association: "Mars, iron, Tuesday, the Hermit (Tarot card)",
            descHeadline: "The Humanitarian (Mars)",
            description: "Fueled by the passion of Mars, the number 9 represents idealism, compassion, and service to humanity. Individuals with a dominant 9 possess a strong moral compass and a desire to make the world a better place. Their broad perspective and understanding make them natural leaders in humanitarian efforts. However, their idealism can sometimes lead to naivety or discouragement. It's important for them to find a balance between their unwavering compassion and the realities of the world, ensuring they don't burn out from taking on too much.",
        },
    }

    useEffect(() => {
        setCardNumber(cardDetails[number]);
    }, [number]);


    return (
        <div className="infoDiv">
            <h1 className="globalStyle">Number : {number}</h1>
            <h3 className="globalStyle">{cardNumber && cardNumber.personality}</h3>
            <p className="globalStyle">{cardNumber && cardNumber.personalityDesc}</p>
            <h3 className="globalStyle">Strength</h3>
            <p className="globalStyle">{cardNumber && cardNumber.strength}</p>

            <h3 className="globalStyle">Potential Challenges</h3>
            <p className="globalStyle">{cardNumber && cardNumber.challenge}</p>
            <h3 className="globalStyle">Associations</h3>
            <p className="globalStyle">{cardNumber && cardNumber.association}</p>
            <h3 className="globalStyle">{cardNumber && cardNumber.descHeadline}</h3>
            <p className="globalStyle">{cardNumber && cardNumber.description}</p>
        </div>
    )
}

export default CardDetail;