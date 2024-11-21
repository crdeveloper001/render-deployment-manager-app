/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ProfileContext } from "../context/ProfileContext";

const EditProfile = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  // Local state to manage form values
  const [editableProfile, setEditableProfile] = useState(profile);

  // Sync the local state with the profile context when it changes
  useEffect(() => {
    setEditableProfile(profile);
  }, [profile]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to update the context
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(editableProfile); // Update the context with the edited values
    console.log("Updated Profile:", editableProfile);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: "1000px",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Edit Profile
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Update your account details below. Make sure to save your changes.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              name="accountName"
              value={editableProfile.accountName}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="accountLastname"
              value={editableProfile.accountLastname}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="accountEmail"
              value={editableProfile.accountEmail}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Alias Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Alias Name"
              name="accountAliasName"
              value={editableProfile.accountAliasName}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              name="accountPhone"
              value={editableProfile.accountPhone || ""}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Role Type (Select Input) */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                name="accountRoleType"
                value={editableProfile.accountRoleType}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value="">Select a Role</MenuItem>
                <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                <MenuItem value="IT Admin">IT Admin</MenuItem>
                <MenuItem value="Product Manager">Product Manager</MenuItem>
                <MenuItem value="HR Specialist">HR Specialist</MenuItem>
                <MenuItem value="Marketing Specialist">Marketing Specialist</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Password */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="accountPassword"
              value={editableProfile.accountPassword || ""}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Save Changes
            </Button>
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditProfile;
