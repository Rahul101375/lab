import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

const first = [
    {
        label: 'Rahul',
        value: 'rahul',
    },
    {
        label: 'Deepak',
        value: 'deepak',
    }
];

function AddNewPopup(props) {
    const { openAddPopup, setOpenAddPoup } = props;
    const [fName, setFName] = useState('');


    const handleChange = (event, fieldName) => {
        setFName(event)
    };

    const handleClose = () => {
        setOpenAddPoup(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let schema = [];
        if (fName) {
            schema.push(fName)
        }
        props.onSubmit(schema);
    }
    return (
        <React.Fragment>
            <Dialog open={openAddPopup} onClick={handleClose}>
                <DialogTitle>Add Saving Segment</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            select
                            variant="standard"
                            fullWidth
                            value={fName}
                            onChange={(e) => handleChange(e.target.value, "fName")}
                        >
                            {first.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default AddNewPopup