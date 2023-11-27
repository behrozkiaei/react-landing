"use client";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme, { ThemeOptions } from "@mui/material/styles/createTheme";
import { useState } from "react";
import "./footer.scss";



export default function Footer() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission here
  };
  const lightTheme: ThemeOptions = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#ffffff",
      },
    },
   
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              '&:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          },
        },
      }
      
  });
  return (
    <>
    <div className="footer-image-box">
        <img   className="footer-img" src="/footer-image.jpg" alt="" />
    </div>
    <div className="footer-wrapper">
      <div className="row-footer">
        <div className="left">
          <div className="content">
            <p>Feel free to reach out for any inquiries.</p>
            <p>
              At Apex Pioneer Group, we`&apos;re always ready to assist you. You can
              call or text us at (469) 207-1824. We`&apos;re open to exploring various
              opportunities and promise a prompt response, often providing
              answers on the same day.
            </p>
            <p>
              Looking forward to the possibility of closing a deal together
              soon!
            </p>
          </div>
        </div>
        <div className="right">
          <ThemeProvider theme={lightTheme}>
            <form onSubmit={handleSubmit} className="form">
                <div className="text-input">

              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                name="name"
                // inputProps={{ style: { marginBottom: "5px" } }}
                style={{ width: '80%' }} // Adjust as needed
                InputLabelProps={{style : {color : 'white'} }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="text-input">
              <TextField
                name="companyName"
                label="Company Name"
                style={{ width: '80%' }} // Adjust as needed
                // inputProps={{ style: { marginBottom: "10px" } }}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                InputLabelProps={{style : {color : 'white'} }}
                variant="outlined"
              />
              </div>
              <div className="text-input">
              <TextField
                name="inquiry"
                label="Inquiry"
                style={{ width: '100%' }} // Adjust as needed
                value={inquiry}
                InputLabelProps={{style : {color : 'white'} }}
                // inputProps={{ style: { marginBottom: "10px" } }}
                onChange={(e) => setInquiry(e.target.value)}
                multiline
                variant="outlined"
              />
              </div>
              <div className="button-box">

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{  width :"40%" , height:"50px"}}
                >
                    Submit
                </Button>
              
              </div>
            </form>
          </ThemeProvider>
        </div>
      </div>
     
    </div>
    <div className="footer-copyright">
        <p>© 2023 Apex Pioneer Group. All rights reserved.</p>
      </div>
    </>
  );
}
