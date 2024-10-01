import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Grid } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

export default function EducationSection({ educations, setEducations }) {
    const [education, setEducation] = React.useState({})

    const handleEducationChange = ({ key, value }) => {
        setEducation((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleAddEducation = () => {
        setEducations((prev) => ([
            ...prev,
            education
        ]))
    }
    return (
        <div>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<Icon icon='lets-icons:expand-down' />}
                >
                    <p className='font-semibold text-[24px]'> Education</p>
                </AccordionSummary>
                <AccordionDetails>

                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid item xs={12} md={6}>
                            <Input label={"Start Date"}
                                type='date'
                                value={education?.startDate}
                                onChange={(e) => { handleEducationChange({ key: 'startDate', value: e.target.value }) }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input
                                label={"End Date"}
                                placeholder='End Date'
                                type='date'
                                value={education?.endDate}
                                onChange={(e) => { handleEducationChange({ key: 'endDate', value: e.target.value }) }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input label={"Course title"}
                                value={education?.courseTitle}
                                onChange={(e) => { handleEducationChange({ key: 'courseTitle', value: e.target.value }) }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input
                                label={"Institution"}
                                placeholder='FAST NUCES Lahore'
                                value={education?.institution}
                                onChange={(e) => { handleEducationChange({ key: 'institution', value: e.target.value }) }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="default"
                                text={"Add Education"}
                                className='w-full'
                                onClick={handleAddEducation}
                            >
                                Add Education
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
