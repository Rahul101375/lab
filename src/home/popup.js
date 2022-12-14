import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import AddNewPopup from "./addnewpopup";

const firstNames = [
    {
        label: 'Rahul',
        value: 'rahul',
    },
    {
        label: 'Deepak',
        value: 'deepak',
    }
];
const lastNames = [
    {
        value: 'gupta',
        label: 'Gupta',
    },
    {
        value: 'yadav',
        label: 'Yadav',
    }
];
const genders = [
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'female',
        label: 'Female',
    }
];
const ages = [
    {
        value: '22',
        label: '22',
    },
    {
        value: '23',
        label: '23',
    }
];
const accounts = [
    {
        value: 'account_one',
        label: 'Account One',
    },
    {
        value: 'account_two',
        label: 'Account One',
    }
];
const cites = [
    {
        value: 'gorakhpur',
        label: 'Gorakhpur',
    },
    {
        value: 'jaipur',
        label: 'Jaipur',
    }
];
const states = [
    {
        value: 'up',
        label: 'Uttar Pradesh',
    },
    {
        value: 'rj',
        label: 'Rajasthan',
    }
];
const newAddData = [];

function DailogBox(props) {
    const { openPopup, setOpenPoup } = props;
    const [user, setUser] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [accountName, setAccountName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [newData, setNewData] = useState('');
    const [openAddPopup, setOpenAddPopup] = useState(false);

    const handleChange = (event, fieldName) => {
        switch (fieldName) {
            case 'user': setUser(event); break;
            case 'fName': setFName(event); break;
            case 'lName': setLName(event); break;
            case 'gender': setGender(event); break;
            case 'age': setAge(event); break;
            case 'accountName': setAccountName(event); break;
            case 'city': setCity(event); break;
            case 'state': setState(event); break;
            case 'newData': setNewData(event); break;
        }
    };

    const handleClose = () => {
        setUser('');
        setOpenPoup(false)
    }
    const getData = (data) => {
        let payload = {
            label: data[0],
            value: data[0],
        }
        newAddData.push(payload)
    }
    const handleSubmit = (e) => {
        let schema = [];
        let payload = {};
        if (fName) {
            schema.push({ "first_name": fName })
        }
        if (lName) {
            schema.push({ "last_name": lName })
        }
        if (gender) {
            schema.push({ "gender": gender })
        }
        if (age) {
            schema.push({ "age": age })
        }
        if (accountName) {
            schema.push({ "account_name": accountName })
        }
        if (city) {
            schema.push({ "city": city })
        }
        if (state) {
            schema.push({ "state": state })
        }
        if (newAddData.length > 0) {
            schema.push(newAddData[0]);
        }
        if (schema.length > 0) {
            payload = {
                "segment_name": "last_10_days_details",
                "schema": schema
            }
        }
        console.log("p", payload)
    }
    return (
        <React.Fragment>
            <Dialog open={openPopup} onClick={handleClose}>
                <DialogTitle>Saving Segment</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Enter Segement"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={user}
                            onChange={(e) => handleChange(e.target.value, "user")}
                        />
                        <TextField
                            label="Select First Name"
                            variant="standard"
                            fullWidth
                            select
                            value={fName}
                            onChange={(e) => handleChange(e.target.value, "fName")}
                        >
                            {firstNames.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Select Last Name"
                            variant="standard"
                            fullWidth
                            select
                            value={lName}
                            onChange={(e) => handleChange(e.target.value, "lName")}
                        >
                            {lastNames.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Select Gender"
                            variant="standard"
                            fullWidth
                            select
                            value={gender}
                            onChange={(e) => handleChange(e.target.value, "gender")}
                        >
                            {genders.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Select age"
                            variant="standard"
                            fullWidth
                            value={age}
                            onChange={(e) => handleChange(e.target.value, "age")}
                        >
                            {ages.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Select account name"
                            variant="standard"
                            fullWidth
                            value={accountName}
                            onChange={(e) => handleChange(e.target.value, "accountName")}
                        >
                            {accounts.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Select  city"
                            variant="standard"
                            fullWidth
                            value={city}
                            onChange={(e) => handleChange(e.target.value, "city")}
                        >
                            {cites.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Select state"
                            variant="standard"
                            fullWidth
                            value={state}
                            onChange={(e) => handleChange(e.target.value, "state")}
                        >
                            {states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        {newAddData.length > 0 ?
                            <TextField
                                select
                                label="Select Add New data"
                                variant="standard"
                                fullWidth
                                value={newData}
                                onChange={(e) => handleChange(e.target.value, "newData")}
                            >
                                {newAddData.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            :
                            ''
                        }
                    </form>

                    <Button onClick={() => setOpenAddPopup(true)}>Add new schema</Button>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(e) => handleSubmit(e)}>Save the segment</Button>
                </DialogActions>
            </Dialog>
            <AddNewPopup openAddPopup={openAddPopup} setOpenAddPoup={setOpenAddPopup} onSubmit={getData}></AddNewPopup>
        </React.Fragment>
    );
}
export default DailogBox