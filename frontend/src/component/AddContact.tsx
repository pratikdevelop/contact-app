import React from "react";
import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormik } from "formik";
 import {ContactSchema} from '../Schemas/index'
import { addContactApi } from "../service/contactApi";
import { useMutation } from "@tanstack/react-query";
const AddContact = () => {
  const addContact = useMutation({mutationFn: addContactApi})
  const [open, setOpen] = React.useState(false);

    const { values, errors, handleChange,handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        email: "",
        status:true
      },
      validationSchema: ContactSchema,
      onSubmit:  (values) => {
        const response =  addContact.mutate(values);
        console.log('res', response);
        
        // if (response.data) {
        //   setOpen(true);
        // }
        
      },
    });
   
    return (<>
      {/* <Snackbar
      //   open={open}
      //   autoHideDuration={6000}
      //   onClose={handleClose}
      //   message="Note archived"
      //   action={action}
      // /> */}
    <div className="relative flex justify-center mt-16 items-center">
      <div className="bg-white w-1/2 shadow-2xl p-5 ">
        <form method="post" className="flex flex-col flex-auto space-y-4">
          <div className="text-center font-extrabold text-3xl mt-4" style={{fontFamily:"serif" }}>
            Add Contact Form
          </div>
          <Grid container spacing={5} style={{marginTop:"0"}}>
            <Grid item xs={6} sm={6} md={12} lg={6}>
              <input
                className=" w-full p-5 py-4  border-0 outline-0   border-b-2 border-indigo-900 outline-white  shadow-md bg-transparent"
                placeholder="your first name"
                id="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.first_name && touched.first_name ? (
                  <p className="text-red-600 p-2 font-medium">
                    {errors.first_name}
                  </p>
                ) : (
                  ""
                )}
            </Grid>
            <Grid item xs={6} sm={6} md={12} lg={6}>
              <input
                className=" w-full p-5 py-4  border-0 outline-0   border-b-2 border-indigo-900 outline-white  shadow-md bg-transparent"
                placeholder="your last name"
                id="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.last_name && touched.last_name ? (
                  <p className="text-red-600 p-2 font-medium">
                    {errors.last_name}
                  </p>
                ) : (
                  ""
                )}
            </Grid>

            <Grid item xs={6} sm={6} md={12} lg={6}>
              <input
                className=" w-full p-5 py-4  border-0 outline-0   border-b-2 border-indigo-900 outline-white  shadow-md bg-transparent"
                placeholder=" your mobile no"
                id="phone"
                type="number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.phone && touched.phone ? (
                  <p className="text-red-600 p-2 font-medium">
                    {errors.phone}
                  </p>
                ) : (
                  ""
                )}
            </Grid>
            <Grid item xs={6} sm={6} md={12} lg={6}>
              <input
                className=" w-full p-5 py-4  border-0 outline-0   border-b-2 border-indigo-900 outline-white  shadow-md bg-transparent"
                placeholder=" your email"
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.email && touched.email ? (
                  <p className="text-red-600 p-2 font-medium">
                    {errors.email}
                  </p>
                ) : (
                  ""
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <textarea
                className=" w-full p-5 py-4  border-0 outline-0   border-b-2 border-indigo-900 outline-white  shadow-md bg-transparent"
                placeholder=" your  address"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
               {errors.address && touched.address ? (
                  <p className="text-red-600 p-2 font-medium">
                    {errors.address}
                  </p>
                ) : (
                  ""
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingTop:"10px"}}>
              <div className="flex items-center space-x-4 justify-center">
                <FormLabel id="demo-row-radio-buttons-group-label">
                  status:
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  id="status"
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <FormControlLabel
                    value ={true}
                    name="status"
                    
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value={false}
                    name="status"
                    control={<Radio />}
                    label="In Active"
                  />
                </RadioGroup>
              </div>
              {errors.status && touched.status ? (
                  <p className="text-red-600 p-2 font-medium">
                    {errors.status}
                  </p>
                ) : (
                  ""
                )}
            </Grid>
          </Grid>

          <div className="flex flex-col items-center w-full space-y-4 ">
            <button
                type="button"
                className="block px-8 py-4 w-full text-sm  font-semibold font-serif rounded-full shadow-md border-2  border-indigo-900 "
                onClick={handleSubmit}
            >
              Add New Contact
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddContact;
