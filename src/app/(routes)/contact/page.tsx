import Container from "@/components/Container/Container";
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ContactForm from "@/components/ContactForm/ContactForm";
import Heading from "@/components/Heading/Heading";
import ContactOtherMethods from "@/components/ContactOtherMethods/ContactOtherMethods";

export default function Contact() {
    return (
        <>
            {/* <Breadcrumbs /> */}

            <Container narrow>

                <Heading title={`Ready to start your new website project?`} body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis. Mauris tincidunt leo arcu, quis ullamcorper lacus viverra eu.`} isH1 />

                <ContactForm />

                <ContactOtherMethods />
            </Container>
        </>
    )
}
