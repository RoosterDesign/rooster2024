import Heading from '@/components/Heading/Heading';

import styles from './ContactOtherMethods.module.scss';

export default function ContactOtherMethods() {
    return (
        <section className="">
            <Heading title={`Other ways to get in touch`} body={`If you'd prefer, you can send me an email directly, or message me on LinkedIn.`} />

            <div className={styles.contactMethods}>

                <a href={`mailto:neil@roosterdesign.co.uk`} title={`Send me an email`} target='_blank'>
                    <span className={styles.icon}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30"><path d="M3.75 0h32.5C38.281 0 40 1.719 40 3.75c0 1.25-.625 2.344-1.563 3.047L21.485 19.53c-.937.703-2.109.703-3.047 0L1.485 6.797C.547 6.094 0 5 0 3.75A3.75 3.75 0 0 1 3.75 0ZM0 8.75l16.953 12.813a5.04 5.04 0 0 0 6.016 0L40 8.75V25c0 2.813-2.266 5-5 5H5c-2.813 0-5-2.188-5-5V8.75Z"/></svg>
                    </span>
                    <span className={styles.label}>
                        <strong>Send me an email</strong>
                        neil@roosterdesign.co.uk
                    </span>
                </a>

                <a href={`https://www.linkedin.com/in/roosterdesign`} title={`Message me on LinkedIn`} target='_blank'>
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg>
                    </span>
                    <span className={styles.label}>
                        <strong>Message me on LinkedIn</strong>
                        @roosterdesign
                    </span>
                </a>

            </div>
        </section>
    )
}
