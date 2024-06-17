import {
  mdiAccount,
  mdiChartTimelineVariant,
  mdiMail,
  mdiUpload,
} from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SwitchField } from '../../components/SwitchField';

import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { RichTextField } from '../../components/RichTextField';

import { create } from '../../stores/appointments/appointmentsSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  subject: '',

  start_time: '',

  end_time: '',

  notes: '',

  assigned_to: '',

  related_job: '',

  related_contact: '',
};

const AppointmentsNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/appointments/appointments-list');
  };
  return (
    <>
      <Head>
        <title>{getPageTitle('New Item')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title='New Item'
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Subject'>
                <Field name='subject' placeholder='Subject' />
              </FormField>

              <FormField label='Start Time'>
                <Field
                  type='datetime-local'
                  name='start_time'
                  placeholder='Start Time'
                />
              </FormField>

              <FormField label='End Time'>
                <Field
                  type='datetime-local'
                  name='end_time'
                  placeholder='End Time'
                />
              </FormField>

              <FormField label='Notes' hasTextareaHeight>
                <Field
                  name='notes'
                  id='notes'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Assigned To' labelFor='assigned_to'>
                <Field
                  name='assigned_to'
                  id='assigned_to'
                  component={SelectField}
                  options={[]}
                  itemRef={'users'}
                ></Field>
              </FormField>

              <FormField label='Related Job' labelFor='related_job'>
                <Field
                  name='related_job'
                  id='related_job'
                  component={SelectField}
                  options={[]}
                  itemRef={'jobs'}
                ></Field>
              </FormField>

              <FormField label='Related Contact' labelFor='related_contact'>
                <Field
                  name='related_contact'
                  id='related_contact'
                  component={SelectField}
                  options={[]}
                  itemRef={'contacts'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/appointments/appointments-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

AppointmentsNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_APPOINTMENTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default AppointmentsNew;
