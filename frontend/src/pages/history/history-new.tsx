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

import { create } from '../../stores/history/historySlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  related_estimate: '',

  related_invoice: '',

  related_job: '',

  related_email: '',

  related_labor_ticket: '',

  related_user: '',

  action_description: '',

  related_contact: '',

  related_appointment: '',
};

const HistoryNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/history/history-list');
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
              <FormField label='Related Estimate' labelFor='related_estimate'>
                <Field
                  name='related_estimate'
                  id='related_estimate'
                  component={SelectField}
                  options={[]}
                  itemRef={'estimates'}
                ></Field>
              </FormField>

              <FormField label='Related Invoice' labelFor='related_invoice'>
                <Field
                  name='related_invoice'
                  id='related_invoice'
                  component={SelectField}
                  options={[]}
                  itemRef={'invoices'}
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

              <FormField label='Related Email' labelFor='related_email'>
                <Field
                  name='related_email'
                  id='related_email'
                  component={SelectField}
                  options={[]}
                  itemRef={'emails'}
                ></Field>
              </FormField>

              <FormField
                label='Related Labor Ticket'
                labelFor='related_labor_ticket'
              >
                <Field
                  name='related_labor_ticket'
                  id='related_labor_ticket'
                  component={SelectField}
                  options={[]}
                  itemRef={'labor_ticket'}
                ></Field>
              </FormField>

              <FormField label='Related User' labelFor='related_user'>
                <Field
                  name='related_user'
                  id='related_user'
                  component={SelectField}
                  options={[]}
                  itemRef={'users'}
                ></Field>
              </FormField>

              <FormField label='Action'>
                <Field name='action_description' placeholder='Action' />
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

              <FormField
                label='Related Appointment'
                labelFor='related_appointment'
              >
                <Field
                  name='related_appointment'
                  id='related_appointment'
                  component={SelectField}
                  options={[]}
                  itemRef={'appointments'}
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
                  onClick={() => router.push('/history/history-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

HistoryNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_HISTORY'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default HistoryNew;
