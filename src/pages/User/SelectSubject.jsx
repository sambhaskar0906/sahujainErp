import React, { useState } from 'react';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Chip,
    OutlinedInput,
    FormHelperText,
    Paper,
    Stack,
    Fade,
    Button,
    Alert
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const majorSubjectsList = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
const minorSubjectsList = ['Physical Education', 'Music', 'Art', 'Economics'];

const SelectSubject = () => {
    const [majorSubjects, setMajorSubjects] = useState([]);
    const [minorSubject, setMinorSubject] = useState('');
    const [errorMajor, setErrorMajor] = useState(false);
    const [errorMinor, setErrorMinor] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleMajorChange = (event) => {
        const {
            target: { value }
        } = event;

        if (value.length <= 2) {
            setMajorSubjects(typeof value === 'string' ? value.split(',') : value);
            setErrorMajor(value.length === 0);
        } else {
            setErrorMajor(true);
        }
    };

    const handleMinorChange = (event) => {
        const value = event.target.value;
        setMinorSubject(value);
        setErrorMinor(value === '');
    };

    const handleSubmit = () => {
        const isMajorValid = majorSubjects.length >= 1 && majorSubjects.length <= 2;
        const isMinorValid = minorSubject !== '';

        setErrorMajor(!isMajorValid);
        setErrorMinor(!isMinorValid);

        if (isMajorValid && isMinorValid) {
            setSubmitted(true);
            // Submit the data to backend or form handler
            console.log('Major Subjects:', majorSubjects);
            console.log('Minor Subject:', minorSubject);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to right, #e3f2fd, #fce4ec)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    p: 5,
                    borderRadius: 5,
                    width: '100%',
                    maxWidth: 600,
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.9)'
                }}
            >
                <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
                    🎯 Subject Selection
                </Typography>

                {/* Major Subject */}
                <FormControl fullWidth error={errorMajor} margin="normal">
                    <InputLabel id="major-subject-label">Major Subjects (Max 2)</InputLabel>
                    <Select
                        labelId="major-subject-label"
                        multiple
                        value={majorSubjects}
                        onChange={handleMajorChange}
                        input={<OutlinedInput label="Major Subjects (Max 2)" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip
                                        key={value}
                                        label={value}
                                        icon={<SchoolIcon />}
                                        sx={{
                                            bgcolor: '#1976d2',
                                            color: 'white',
                                            fontWeight: 500
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                    >
                        {majorSubjectsList.map((subject) => (
                            <MenuItem
                                key={subject}
                                value={subject}
                                disabled={majorSubjects.length >= 2 && !majorSubjects.includes(subject)}
                            >
                                {subject}
                            </MenuItem>
                        ))}
                    </Select>
                    {errorMajor && (
                        <FormHelperText>Select at least 1 and max 2 major subjects</FormHelperText>
                    )}
                </FormControl>

                {/* Minor Subject */}
                <FormControl fullWidth error={errorMinor} margin="normal">
                    <InputLabel id="minor-subject-label">Minor Subject</InputLabel>
                    <Select
                        labelId="minor-subject-label"
                        value={minorSubject}
                        onChange={handleMinorChange}
                        label="Minor Subject"
                    >
                        {minorSubjectsList.map((subject) => (
                            <MenuItem key={subject} value={subject}>
                                {subject}
                            </MenuItem>
                        ))}
                    </Select>
                    {errorMinor && (
                        <FormHelperText>Select exactly 1 minor subject</FormHelperText>
                    )}
                </FormControl>

                {/* Selected Summary */}
                <Fade in={majorSubjects.length > 0 || minorSubject !== ''}>
                    <Box mt={4}>
                        <Typography variant="subtitle1" fontWeight={600} mb={1}>
                            📘 Your Selection:
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {majorSubjects.map((subject) => (
                                <Chip
                                    key={subject}
                                    label={`Major: ${subject}`}
                                    icon={<SchoolIcon />}
                                    sx={{
                                        bgcolor: '#43a047',
                                        color: '#fff',
                                        fontWeight: 500
                                    }}
                                />
                            ))}
                            {minorSubject && (
                                <Chip
                                    label={`Minor: ${minorSubject}`}
                                    icon={<EmojiObjectsIcon />}
                                    sx={{
                                        bgcolor: '#fb8c00',
                                        color: '#fff',
                                        fontWeight: 500
                                    }}
                                />
                            )}
                        </Stack>
                    </Box>
                </Fade>

                {/* Submit Button */}
                <Box mt={5} textAlign="center">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: 3
                        }}
                    >
                         Save & Continue
                    </Button>
                </Box>

                {/* Success Message */}
                {submitted && (
                    <Fade in={submitted}>
                        <Alert
                            icon={<CheckCircleIcon fontSize="inherit" />}
                            severity="success"
                            sx={{ mt: 4 }}
                        >
                            Subjects submitted successfully!
                        </Alert>
                    </Fade>
                )}
            </Paper>
        </Box>
    );
};

export default SelectSubject;
