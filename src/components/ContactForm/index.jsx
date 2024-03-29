import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { SubmitBtn } from '../SubmitBtn';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../hooks/yupSchema';
import { FormSentOverlay } from '../FormSentOverlay';
/**
 * component that returns the jsx for the contact form, the form includeds 4 inputs and a submit button component
 */
export function ContactForm() {
  const [formSentVisible, setFormSentVisible] = useState(false);
  function onClickX() {
    setFormSentVisible(!formSentVisible);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  function formOnSubmit(data) {
    console.log(data);
    setFormSentVisible(() => {
      const formSentVisible = true;
      setTimeout(() => {
        setFormSentVisible(false);
      }, 10000);
      return formSentVisible;
    });
    reset();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(formOnSubmit)}>
      <FormSentOverlay
        state={formSentVisible}
        click={onClickX}
      ></FormSentOverlay>
      <h2>Contact form</h2>
      <div className={styles.formItem}>
        <label htmlFor="fullName">Full name</label>
        <p className={styles.errorMessage}>{errors.fullName?.message}</p>
        <input
          className={styles.formItemInputs}
          {...register('fullName')}
          name="fullName"
        ></input>
      </div>
      <div className={styles.formItem}>
        <label htmlFor="email">Email</label>
        <p className={styles.errorMessage}>{errors.email?.message}</p>
        <input
          name="email"
          className={styles.formItemInputs}
          {...register('email')}
        ></input>
      </div>
      <div className={styles.formItem}>
        <label htmlFor="subject">Subject</label>
        <p className={styles.errorMessage}>{errors.subject?.message}</p>
        <input
          name="subject"
          className={styles.formItemInputs}
          {...register('subject')}
        ></input>
      </div>
      <div className={styles.formItem}>
        <label htmlFor="textArea">Message</label>
        <p className={styles.errorMessage}>{errors.textArea?.message}</p>
        <textarea
          name="textArea"
          rows={10}
          className={styles.formTextArea}
          {...register('textArea')}
        ></textarea>
      </div>
      <SubmitBtn></SubmitBtn>
    </form>
  );
}
