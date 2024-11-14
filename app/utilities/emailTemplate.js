import {Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text} from "@react-email/components";
import * as React from "react";
export default function EmailTemplate({userName}) {
    return <Html>
        <Head />
      <Preview>
        The one stop solution platform for all your Laundry Needs!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://assets.ucleanlaundry.com/assets/images/logo.png`}
            width="170"
            height="50"
            alt="Koala"
            style={logo}
          />
          <Text style={paragraph}>Hi {userName || 'Tomar'},</Text>
          <Text style={paragraph}>
            Welcome to WashWizards: Your ultimate laundry solution. Expert care, eco-friendly products, and unbeatable convenience. Experience the magic of clean clothes today!
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://laundry-ruby.vercel.app">
              Order More!
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The WashWizards team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
          </Text>
        </Container>
      </Body>
    </Html>
}; 
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center",
  };
  
  const button = {
    backgroundColor: "#7bbb43",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  