import React from 'react';
import { useForm } from 'react-hook-form';

import { FormContainer } from './FormContainer';
import { Form } from './Form';
import { Grid } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import { Input } from './Input';

import { PrimaryButton } from './PrimaryButton.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(90),
  },
}));

export const Step1 = () => {
  const styles = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="Q1"
              type="number"
              label="Введите Q1"
              name="Q1"
            />
            <Input
              ref={register}
              id="T1"
              type="number"
              label="Введите T1"
              name="T1"
            />
            <Input
              ref={register}
              id="V1"
              type="number"
              label="Введите V1"
              name="V1"
            />
            <Input
              ref={register}
              id="M1"
              type="number"
              label="Введите M1"
              name="M1"
            />
            <Input
              ref={register}
              id="WorkDevice"
              type="number"
              label="Время работы прибора"
              name="WorkDevice"
            />
          </Grid>

          <Grid item xs={6}>
            <Input
              ref={register}
              id="Q2"
              type="number"
              label="Введите Q2"
              name="Q2"
            />
            <Input
              ref={register}
              id="T2"
              type="number"
              label="Введите T2"
              name="T2"
            />
            <Input
              ref={register}
              id="V2"
              type="number"
              label="Введите V2"
              name="V2"
            />
            <Input
              ref={register}
              id="M2"
              type="number"
              label="Введите M2"
              name="M2"
            />
            <Input
              ref={register}
              id="WorkDeviceError"
              type="number"
              label="Время работы прибора с ошибкой"
              name="WorkDeviceError"
            />
          </Grid>

          <Grid item xs={12}>
            <TextareaAutosize
              className={styles.root}
              ref={register}
              id="TextArea"
              type="text"
              placeholder="Введите ваш комментарий"
              name="TextArea"
              rowsMin={10}
            />
          </Grid>
        </Grid>

        <PrimaryButton>Отправить</PrimaryButton>
      </Form>
    </FormContainer>
  );
};
