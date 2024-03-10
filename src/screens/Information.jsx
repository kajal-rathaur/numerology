import { React, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Grid from '@mui/material/Unstable_Grid2';
import CardDetail from "../components/CardDetail";

const Information = () => {

    const [number, setNumber] = useState(0);
    const cardData = [
        {
            title: '1',
            number: 'Number 1',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'THE PRIMAL FORCE',
            description2: 'The lone pioneer, symbolizing beginnings and the foundation for all existence.',
        },
        {
            title: '2',
            number: 'Number 2',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'THE ALL-KNOWING',
            description2: 'Opposing forces clash, seeking balance for growth and progress.',
        },
        {
            title: '3',
            number: 'Number 3',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'THE CREATIVE CHILD',
            description2: 'Stages of development unfold, the magic number for stories and narratives.',
        },
        {
            title: '4',
            number: 'Number 4',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'THE SALT OF THE EARTH',
            description2: 'Stability takes root, offering structure, order, and a sense of predictability.',
        },
        {
            title: '5',
            number: 'Number 5',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'A DYNAMIC FORCE',
            description2: 'Center stage beckons, arousing curiosity and the potential for transformation.',
        },
        {
            title: '6',
            number: 'Number 6',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'THE CARETAKER',
            description2: 'Harmony is pursued, representing wholeness, balance, and a sense of completion.',
        },
        {
            title: '7',
            number: 'Number 7',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'THE PHILOSOPHER',
            description2: 'Luck and mystery intertwine, hinting at the spiritual and the power of the unknown.',
        },
        {
            title: '8',
            number: 'Number 8',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'BALANCE & POWER',
            description2: 'Infinity unfolds, symbolizing abundance, cycles of change, and potential power.',
        },
        {
            title: '9',
            number: 'Number 9',
            image: 'https://t4.ftcdn.net/jpg/00/74/02/87/240_F_74028718_cE2IF0LRtiB3jiqlHJo8RKcB3uIrW70y.jpg',
            description1: 'GLOBAL AWARENESS',
            description2: 'Transformation awaits, marking the end of a chapter and the beginning of a new one.',
        },
    ];
    return (
        <>
            {number > 0 ? <><h2 onClick={() => setNumber(0)}>Back</h2><CardDetail number={number} /></> :
                <Grid container rowSpacing={3} columnSpacing={3}>
                    {cardData.map((card) => (
                        <Grid item xs={3} onClick={() => setNumber(card.title)}>
                            <Card title={card.title} image={card.image} description1={card.description1} description2={card.description2} number={card.number}/>
                        </Grid>
                    ))}
                </Grid>}
        </>
    )
}

export default Information;