import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Text,
  } from '@react-email/components';
import * as React from "react";

  type ContactFormEnquiryType = {
    name: string;
    email: string;
    message: string;
  };

  export default function ContactFormEnquiry({ name, email, message }: ContactFormEnquiryType) {

    const previewText = `${name} has sent you an enquiry.`;

    return (
      <Html>

        <Head />
        <Preview>{previewText}</Preview>
          <Body>
            <Container>

              <Heading>
                <strong>You have recieved a new contact form enquiry</strong>
              </Heading>

              <Hr />

              <Text>
                Email: <strong>{<strong>{name}</strong>}</strong>
              </Text>

              <Hr />

              <Text>
                Name: <strong>{name}</strong>
              </Text>

              <Hr />

              <Text>
                Message:<br/> <strong>{message}</strong>
              </Text>

              {/* <Button
            href="https://example.com"
            style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
        >
        Click me
      </Button> */}



            </Container>
          </Body>
      </Html>
    );
  };
