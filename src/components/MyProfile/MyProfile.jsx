import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

export const MyProfile = () => {
    // Initial payload
    const [accountData, setAccountData] = useState({
        accountAliasName: "SGAthoms123",
        accountEmail: "gabo123@gmail.com",
        accountLastname: "Arce Blanco",
        accountName: "Gabriel",
        accountPhone: "34343434",
        accountRoleType: "Software Engineer",
    });

    // State to handle edit mode
    const [isEditMode, setIsEditMode] = useState(false);

    // States for dialog visibility
    const [openDialog, setOpenDialog] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({ ...accountData, [name]: value });
    };

    // Handle form submission (update account)
    const handleUpdate = () => {
        console.log("Updated account data:", accountData);
        alert("Account information updated!");
        setIsEditMode(false); // Disable edit mode after update
    };

    // Handle account deletion
    const handleDelete = () => {
        setOpenDialog(false);
        console.log("Account deleted");
        alert("Account deleted successfully!");
    };

    // Render component
    return (
        <Box sx={{ p: 4, maxWidth: "800px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                {isEditMode ? "Edit Profile" : "View Profile"}
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Alias Name"
                        name="accountAliasName"
                        value={accountData.accountAliasName}
                        onChange={handleChange}
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="accountEmail"
                        value={accountData.accountEmail}
                        onChange={handleChange}
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="accountLastname"
                        value={accountData.accountLastname}
                        onChange={handleChange}
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="accountName"
                        value={accountData.accountName}
                        onChange={handleChange}
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone"
                        name="accountPhone"
                        value={accountData.accountPhone}
                        onChange={handleChange}
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Role Type"
                        name="accountRoleType"
                        value={accountData.accountRoleType}
                        onChange={handleChange}
                        InputProps={{
                            readOnly: !isEditMode,
                        }}
                    />
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                {isEditMode ? (
                    <>
                        <Button variant="contained" color="primary" onClick={handleUpdate}>
                            Update
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => setOpenDialog(true)}>
                            Delete Account
                        </Button>
                    </>
                ) : (
                    <Button variant="outlined" color="primary" onClick={() => setIsEditMode(true)}>
                        Edit Profile
                    </Button>
                )}
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirm Account Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete your account? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
