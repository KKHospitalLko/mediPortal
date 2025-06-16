import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function NurseForm() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // State to manage form data
    const [formData, setFormData] = useState({
        patientDetails: {
            name: '',
            bed: '',
            uhid: '',
            ipd: '',
        },
        medicineDetails: {}, // Placeholder for future expansion
    });

    // Handle input changes for patient details
    const handleChangePatientForm = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            patientDetails: {
                ...prevData.patientDetails,
                [name]: value,
            },
        }));
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Alert all form details
        alert(
            `Form Details:\n` +
            `Name: ${formData.patientDetails.name}\n` +
            `Bed: ${formData.patientDetails.bed}\n` +
            `UHID: ${formData.patientDetails.uhid}\n` +
            `IPD: ${formData.patientDetails.ipd}`
        );
        // Log for debugging (useful for PDF integration)
        console.log('Submitted formData:', JSON.stringify(formData, null, 2));
    };

    // Debug formData changes
    useEffect(() => {
        console.log('formData:', formData);
    }, [formData]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nurse form tabs">
                    <Tab label="Patient Details" {...a11yProps(0)} />
                    <Tab label="Medicine Details" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ p: 2 }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6}>
                            <TextField
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                value={formData.patientDetails.name}
                                onChange={handleChangePatientForm}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                id="bed"
                                name="bed"
                                label="Bed"
                                variant="outlined"
                                value={formData.patientDetails.bed}
                                onChange={handleChangePatientForm}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                id="uhid"
                                name="uhid"
                                label="UHID"
                                variant="outlined"
                                value={formData.patientDetails.uhid}
                                onChange={handleChangePatientForm}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                id="ipd"
                                name="ipd"
                                label="IPD"
                                variant="outlined"
                                value={formData.patientDetails.ipd}
                                onChange={handleChangePatientForm}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box sx={{ p: 2 }}>
                    <p>Medicine Details (To be implemented)</p>
                    {/* Placeholder for future medicine details form */}
                </Box>
            </CustomTabPanel>
        </Box>
    );
}