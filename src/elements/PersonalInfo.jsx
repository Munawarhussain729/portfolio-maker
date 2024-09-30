import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Grid } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import Input from './Input';
import TextArea from './TextArea';

export default function PersonalInfoSection() {
    return (
        <div>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<Icon icon='lets-icons:expand-down' />}
                >
                    <p className='font-semibold text-[24px]'> Personal Information</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid item xs={12} md={6}>
                            <Input label={"Full Name"} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Input label={"Email"} />
                        </Grid>
                        <Grid xs={12}>
                            <TextArea label='Summary' className='ml-2' />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
