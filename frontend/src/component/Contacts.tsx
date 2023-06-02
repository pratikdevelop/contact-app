import { Stack, Button, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Badge, BadgeTypeMap } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { contactApi } from "../service/contactApi";
import { deepOrange } from '@mui/material/colors';
import { useState } from "react";
import { styled } from '@mui/material/styles';
const  Contacts = ()=> {
  const response = useQuery({ queryKey: ['contacts'], queryFn: contactApi, refetchOnWindowFocus: false  }
  );
  const [open, setOpen] = useState(false);
  const [contactId, setContactId] = useState(null);
  const Contacts = response.data?.contacts;
  const deleteContact = () => {
    console.log('contac ', contactId);
    
  };

  const handleClose =()=>{
    setOpen(false);
    setContactId(null);
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  const dd = true
  return (
    <div className="flex flex-auto mt-16">

      { response.isFetching ?

        <div className="flex flex-auto  justify-center items-center w-full " style={{height:"100vh" }}> 
        <span className="text-4xl font-bold"> Loading ....</span> 
        </div> :
        Contacts && Contacts.length > 0 ? (
          <div className="grid grid-cols-3 gap-5 p-5">{Contacts.map((contact: any) => {
            return <div className=" border-xl p-8 flex flex-col bg-white shadow-xl h-80 rounded-lg py-3">
              <div className="text-xl flex items-center  justify-center  md:rounded-none rounded-full px-auto h-32 w-52" >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot">
                  <Avatar  sx={{ bgcolor: deepOrange[500] }}>{contact.fisrt_name.slice(0, 1)}</Avatar>

                </StyledBadge>
              </div>
              <div className="text-center flex flex-col space-y-1">
                <h3 className="text-dark  capitalize text-xl leading-8" style={{ fontFamily: "fantasy" }}>{contact.fisrt_name} {contact.last_name}</h3>
                <div className="text-gray-400 text-sm font-semibold">
                  <p>{contact.email}</p>
                </div>
                  <div className="text-gray-900 text-sm  font-medium text-center ">{contact.address}</div>
                  <div className="text-gray-900 text-sm  font-medium text-center ">{contact.mobile}</div>


                <div className="text-center my-3">
                  <Stack direction="column" spacing={2}>
                    <Button variant="outlined" onClick={() => {setOpen(true);
                      setContactId(contact.id)}}>
                      Delete
                    </Button>
                    <Button variant="contained">
                      Edit
                    </Button>
                  </Stack>
                </div>

              </div>
            </div>;

          })}

          </div>
        ) : (
          <div className="flex w-full  justify-center  h-auto  items-center ">
            <div className="bg-white w-full px-16 md:px-0 h-screen flex items-center justify-center">
              <div className=" flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
                  404
                </p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
                  Contact Not Found
                </p>
                <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
                  Sorry, the contact data could not be found. please create new
                  contact{" "}
                </p>
                <NavLink
                  to="/add-contact"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
                  title="Return Home"
                >
                  <span>create contact</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation Dialog"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this contact ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button variant="contained" onClick={deleteContact} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contacts;

