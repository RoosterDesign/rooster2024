'use client';

import styles from './ContactForm.module.scss';

import { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email(),
    message: z.string().min(1, "Please enter your message"),
});

type FormFields = z.infer<typeof schema>;

export default function ContactForm() {

    const [ isFormSubmitted, setIsFormSubmitted ] = useState<boolean>();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, isValid },
      } = useForm<FormFields>({
        resolver: zodResolver(schema),
      });

    //   useEffect(() => {
        // if(isSubmitSuccessful) {
            // setIsFormSubmitted(true);
            // reset();
        // }
    //   }, [isSubmitSuccessful, reset])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    }),
                }).then(() => {
                    setIsFormSubmitted(true);
                    reset();
                });

        } catch (error) {
            setError("root", {
                message: "There has been a problem submitting the form."
            })
        }
    };

    return (
        <div className={styles.contactForm}>

            { !isFormSubmitted ?
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your name</label>
                        <input id="name" {...register("name")} type="text" placeholder="Enter your name" />
                        {errors.name && (
                            <div>{errors.name.message}</div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your email</label>
                        <input id="email" {...register("email")} type="text" placeholder="Enter your email address" />
                        {errors.email && (
                            <div>{errors.email.message}</div>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Your enquiry</label>
                        <textarea id="message" {...register("message")} placeholder="Enter your enquiry"></textarea>
                        {errors.message && (
                            <div>{errors.message.message}</div>
                        )}
                    </div>

                    <button
                        disabled={!isDirty || !isValid || isSubmitting}
                        type="submit" className={styles.btn}>
                        {isSubmitting ? "Processing..." : "Send enquiry"}
                    </button>
                    {errors.root && <div>{errors.root.message}</div>}

                </form>
            :
                <h1>Success!</h1>
            }

        </div>
    )
}
