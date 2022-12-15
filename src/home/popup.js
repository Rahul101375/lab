import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import AddNewPopup from "./addnewpopup";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
    const [openAddPopup, setOpenAddPopup] = useState(false);
    const [personName, setPersonName] = useState([]);
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
            case 'personName': setPersonName(event); break;
        }
    };

    const handleClose = () => {
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
        if (personName.length>0) {
            for(let i=0;i<personName.length-1;i++){
                schema.push({[personName[i]]:personName[i]})
            }
        }
        if (schema.length > 0) {
            payload = {
                "segment_name": "last_10_days_details",
                "schema": schema
            }
        }
        console.log("p", payload);
        setOpenPoup(false)
    }
    return (
        <React.Fragment>
            <Dialog open={openPopup} >
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
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={(e) => handleChange(e.target.value, "personName")}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                
                                >
                                    {newAddData.map((name) => (
                                        <MenuItem key={name.value} value={name.value}>
                                            <Checkbox checked={personName.indexOf(name.value) > -1} />
                                            <ListItemText primary={name.label} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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