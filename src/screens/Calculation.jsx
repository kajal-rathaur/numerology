import { React, useEffect, useState } from "react";
import LoshuGrid from "../components/LoshuGrid";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import '../App.css';

const Calculation = () => {
  const [name, setName] = useState("");
  const [nameNum, setNameNum] = useState(0);
  const [dateF, setDateF] = useState("");
  const [dateM, setDateM] = useState("");

  const dateSetter = (e) => {
    let y = e.getFullYear();
    let m = e.getMonth() + 1;
    let d = e.getDate();

    let mulank = singledigit((d).toString());
    let bhagyank = singledigit((y + m + d).toString());
    return (y + '/' + m + '/' + d + '/' + mulank + '/' + bhagyank)
  }

  useEffect(() => {
    nameNumber(name);
  }, [name])

  const singledigit = (r) => {
    let s = 0;
    r.split('').forEach(item => s += parseInt(item));
    if (s > 9) return singledigit(s.toString());
    return s;
  }
  const nameNumber = (val) => {
    let sum = 0;
    val.split('').forEach(e => {
      if (e == "A" || e == "a" || e == "I" || e == "i" || e == "J" || e == "j" || e == "Q" || e == "q" || e == "Y" || e == "y")
        sum += 1;
      else if (e == "B" || e == "b" || e == "K" || e == "k" || e == "R" || e == "r")
        sum += 2;
      else if (e == "C" || e == "c" || e == "G" || e == "g" || e == "L" || e == "l" || e == "S" || e == "s")
        sum += 3;
      else if (e == "D" || e == "d" || e == "M" || e == "m" || e == "T" || e == "t")
        sum += 4;
      else if (e == "E" || e == "e" || e == "H" || e == "h" || e == "N" || e == "n")
        sum += 5;
      else if (e == "U" || e == "u" || e == "V" || e == "v" || e == "W" || e == "w" || e == "X" || e == "x")
        sum += 6;
      else if (e == "O" || e == "o" || e == "Z" || e == "z")
        sum += 7;
      else if (e == "F" || e == "f" || e == "P" || e == "p")
        sum += 8;
      else if (e == " ")
        sum += 0;
    });
    setNameNum(singledigit((sum).toString()))
  }

  return (
    <div style={{ marginTop: "68.5px", paddingTop: '20px', display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ color: '#a18b5c' }}>Unveiling Your Life Path: A Numerology Calculator</h1>
      <p style={{color: '#fdfdfda1'}}>Welcome to the world of numerology, where numbers hold the key to unlocking your inner potential and understanding your life's journey!
        This interactive calculator empowers you to discover your core numerology numbers, offering valuable insights into your personality,
        strengths, challenges, and aspirations.
        Numerology is an ancient belief system that assigns mystical or divine meaning to numbers. It suggests that the numbers associated with you,
        particularly your birth date and name, can influence your life path and reveal hidden aspects of your being.
      </p>
      <Card
        sx={{
          maxWidth: 345,
          width: '50%',
          padding: '30px',
          // backgroundColor: '#ffffffd4',
          // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          backgroundColor: '#ffffff00',
          boxShadow: '0 4px 8px 0 rgb(0 0 0 / 70%), 0 6px 20px 0 rgb(11 11 10 / 89%)',
          display: "grid",
          alignContent: 'space-around',
          height: "22vh",
        }}>
        <TextField
          id="name"
          label="Enter your Name"
          sx={{
            // '& .MuiInputLabel-root': { color: '#96959a' },
            '& .MuiInputLabel-root': { color: '#a18b5c' },
            backgroundColor: 'transparent',
            boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
            transition: '0.5s',
            borderWidth: '0px !important',
            // '&:hover': { backgroundColor: '#c4bcbc',},
            '& .MuiInputBase-root': {  // Target the input element directly
              borderWidth: '0px',
              padding: '0px',
              margin: '0px',
            }
          }}
          onChange={(e) => setName(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(date) => setDateF(dateSetter(new Date(date)))}
            sx={{
              backgroundColor: 'transparent',
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
              '& .MuiInputBase-input': { color: '#a18b5c' },
            }}
          />
        </LocalizationProvider>
      </Card>
      {dateF ?
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <h1 style={{ color: '#6d5e39' }}>Loshu Grid of your Birth Chart</h1>
          <LoshuGrid dob={dateF} />
        </div>
        : <></>
      }

      <ul>
        <li style={{color: "#fdfdfda1"}}><strong style={{ color: '#a18b5c' }}>Destiny Number / Bhagyank</strong> Bhagyank, also known as the Destiny Number, Life Path Number, or Expression Number,
          is a core number in numerology that signifies your potential life path, aspirations,
          and the direction your life might take. It's believed to reveal your inherent talents,
          challenges, and how you can fulfill your life's purpose.<br />
          <strong style={{ color: '#a18b5c' }}>To calculate your Bhagyank, </strong>add the day, month, and year of your date of birth.
          If the result is a two- or three-digit number, reduce it to a single digit by adding the digits together.
        </li>
        <li style={{color: "#fdfdfda1"}}><strong style={{ color: '#a18b5c' }}>Driver Number / Mulank</strong> Mulank, also known as the Birth Number or Moolank, is a core number in Indian numerology systems like Vedic numerology
          or Tamil numerology. It's derived solely from your date of birth and is believed to influence your
          fundamental personality traits, strengths, and potential challenges.<br />
          <strong style={{ color: '#a18b5c' }}>To calculate your Mulank,</strong> add the digits of your day of birth. If the result is a two- or three-digit number, reduce it to a single digit by adding the digits together.
        </li>

      </ul>


      {/* <h1>Male</h1>
            <TextField
                id="name"
                label="Name"
                helperText="Some important text"
                onChange={(e) => setName(e)}
            />
            <h1>{name}</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(date) => setDateM(dateSetter(new Date(date)))} />
            </LocalizationProvider>
        <LoshuGrid dob={dateM} /> */}
    </div >
  )
}

export default Calculation;