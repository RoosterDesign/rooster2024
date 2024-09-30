import Container from "@/components/Container/Container";
import ContactForm from "@/components/ContactForm/ContactForm";
import Heading from "@/components/Heading/Heading";
import ContactOtherMethods from "@/components/ContactOtherMethods/ContactOtherMethods";

export default function Contact() {
    return (
        <>
            <Container narrow>

                <Heading title={`It's easy to get in touch`} body={`Whether you're looking for a contractor, someone to outsource a project to or if you're a small business looking for a website, I'd be delighted to hear from you and explore how we can work together to bring your vision to life.`} isH1 />

                <ContactForm />

                <ContactOtherMethods />
            </Container>
        </>
    )
}
