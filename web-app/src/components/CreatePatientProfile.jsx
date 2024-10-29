import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getToken } from "../services/localStorageService";

export default function CreatePatientProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dateOfBirth: '',
    healthCode: '',
    address: '',
    phone: ''
  });
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [snackType, setSnackType] = useState('success');
  const [errors, setErrors] = useState({});

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      tempErrors.name = 'Name should not contain numbers';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone must be exactly 10 digits and contain only numbers';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setSnackBarMessage('Please correct the errors in the form');
      setSnackType('error');
      setSnackBarOpen(true);
      return;
    }

    const dataToSubmit = {
      ...formData,
      gender: formData.gender === 'Male',
    };

    fetch(`http://localhost:8080/identity/patients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(dataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        setSnackType('success');
        setSnackBarMessage(data.message || 'Patient profile created successfully');
        setSnackBarOpen(true);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((error) => {
        setSnackType('error');
        setSnackBarMessage('Failed to create patient profile');
        setSnackBarOpen(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Snackbar open={snackBarOpen} onClose={handleCloseSnackBar} autoHideDuration={6000}>
        <Alert onClose={handleCloseSnackBar} severity={snackType}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#f0f2f5" // Thêm background color cho trang
      >
        <Card
          sx={{
            minWidth: 300,
            maxWidth: 500,
            padding: 4,
            borderRadius: 2, // Bo góc cho card
            boxShadow: 6, // Đổ bóng cho card
          }}
        >
<CardContent>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              align="center"
              sx={{ color: '#3f51b5', fontWeight: 'bold' }} // Tô màu và font-weight cho tiêu đề
            >
              Create Patient Profile
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
                error={!!errors.name}
                helperText={errors.name}
                sx={{ backgroundColor: '#ffffff', borderRadius: 1 }} // Tô màu nền cho input
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                fullWidth
                margin="normal"
                value={formData.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
                sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
              />
              <TextField
                label="Health Code"
                name="healthCode"
                fullWidth
                margin="normal"
                value={formData.healthCode}
                onChange={handleChange}
                sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
              />
              <TextField
                label="Address"
                name="address"
                fullWidth
                margin="normal"
                value={formData.address}
                onChange={handleChange}
                required
                sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
              />
              <TextField
                label="Phone"
                name="phone"
                fullWidth
                margin="normal"
                value={formData.phone}
                onChange={handleChange}
                inputProps={{ maxLength: 10 }}
                required
                error={!!errors.phone}
                helperText={errors.phone}
                sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
              />
              <Button
                type="submit"
variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 3,
                  borderRadius: 2, // Bo góc cho nút
                  fontSize: '16px',
                  fontWeight: 'bold',
                  padding: '12px 0', // Thêm padding
                }}
              >
                Create Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}