import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LoshuGrid from "../components/LoshuGrid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from "@mui/material";

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
    },[name])

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
        // console.log("Name Number is here", singledigit((sum).toString()));
        setNameNum(singledigit((sum).toString()))
    }
    return (
        <div style={{ marginTop: "20px" }}>
            <TextField
                id="name"
                label="Name"
                helperText="Enter the name"
                onChange={(e) => setName(e.target.value)}
            />
            <h1>{name} : ({nameNum})</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(date) => setDateF(dateSetter(new Date(date)))} />
            </LocalizationProvider>
            <LoshuGrid dob={dateF} />

            {/* <Button onClick={() => nameNumber(name)}>Calculate name number</Button> */}
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

        </div>
    )
}

export default Calculation;