import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Icon } from '@iconify/react/dist/iconify.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '15px',
    boxShadow: 24,
    outline: 'none'
};

export default function CustomModal({ open, setOpen, className, title, children }) {
    //   const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={`outline-none ${className} `}
            >
                <Box sx={style}>
                    {title && (
                        <div className='py-2 flex justify-between items-center px-2 border-b min-w-[400px] rounded-t-md md:min-w-[600px] bg-gray-300 border-gray-300'>
                            <p>{title}</p>
                            <Icon icon={'mdi:close'} onClick={handleClose} className='w-4 h-4 cursor-pointer' />
                        </div>
                    )}
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
