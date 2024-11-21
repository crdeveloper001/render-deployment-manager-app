/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useMyProfile from "./hooks/useMyProfile";
import { 
  TextField, 
  Box, 
  Typography, 
  Grid, 
  Button 
} from "@mui/material";
import { ProfileProvider } from "./context/ProfileContext";
import EditProfile from "./EditProfile/EditProfile";

export const MyProfile = () => {
  const { currentSession } = useMyProfile();

  // State to handle edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Handle toggle between edit/view mode
  const toggleEditMode = () => setIsEditMode((prev) => !prev);

  return (
    <ProfileProvider>
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
        <Typography variant="h4" gutterBottom>
          {isEditMode ? "Edit Profile" : "View Profile"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Manage your account details below. Switch to edit mode to update your profile information.
        </Typography>

        <Grid container spacing={3}>
          {/* Alias Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Alias Name"
              name="accountAliasName"
              value={currentSession.accountAliasName}
              InputProps={{
                readOnly: !isEditMode,
              }}
              variant="outlined"
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="accountEmail"
              value={currentSession.accountEmail}
              InputProps={{
                readOnly: !isEditMode,
              }}
              variant="outlined"
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="accountLastname"
              value={currentSession.accountLastname}
              InputProps={{
                readOnly: !isEditMode,
              }}
              variant="outlined"
            />
          </Grid>

          {/* First Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              name="accountName"
              value={currentSession.accountName}
              InputProps={{
                readOnly: !isEditMode,
              }}
              variant="outlined"
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              name="accountPhone"
              value={currentSession.accountPhone}
              InputProps={{
                readOnly: !isEditMode,
              }}
              variant="outlined"
            />
          </Grid>

          {/* Role Type */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Role Type"
              name="accountRoleType"
              value={currentSession.accountRoleType}
              InputProps={{
                readOnly: !isEditMode,
              }}
              variant="outlined"
            />
          </Grid>

          {/* Edit Mode Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleEditMode}
              sx={{ mr: 2 }}
            >
              {isEditMode ? "Cancel Edit" : "Enable Edit Mode"}
            </Button>
          </Grid>
        </Grid>

        {/* Edit Profile Component */}
        {isEditMode && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Edit Detailed Profile
            </Typography>
            <EditProfile />
          </Box>
        )}
      </Box>
    </ProfileProvider>
  );
};
