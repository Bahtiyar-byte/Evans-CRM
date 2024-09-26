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

import { create } from '../../stores/labor_ticket/labor_ticketSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  name: '',

  related_job: '',

  start_date: '',
  dateStart_date: '',

  end_date: '',
  dateEnd_date: '',

  crew_instructions: '',

  actual_start_time: '',

  actual_end_time: '',

  crew_actions: 'Not Checked In',

  labor_progress: 'Working',

  related_images: [],

  related_document: [],

  disclaimer: '',

  assigned_date: '',
  dateAssigned_date: '',

  assigned_crew: [],

  related_order: '',
};

const Labor_ticketNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/labor_ticket/labor_ticket-list');
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
              <FormField label='Name'>
                <Field name='name' placeholder='Name' />
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

              <FormField label='Start Date'>
                <Field type='date' name='start_date' placeholder='Start Date' />
              </FormField>

              <FormField label='End Date'>
                <Field type='date' name='end_date' placeholder='End Date' />
              </FormField>

              <FormField label='Crew Instructions' hasTextareaHeight>
                <Field
                  name='crew_instructions'
                  id='crew_instructions'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Actual Start Time'>
                <Field
                  type='datetime-local'
                  name='actual_start_time'
                  placeholder='Actual Start Time'
                />
              </FormField>

              <FormField label='Actual End Time'>
                <Field
                  type='datetime-local'
                  name='actual_end_time'
                  placeholder='Actual End Time'
                />
              </FormField>

              <FormField label='Crew Actions' labelFor='crew_actions'>
                <Field name='crew_actions' id='crew_actions' component='select'>
                  <option value='Not Checked In'>Not Checked In</option>

                  <option value='Checked In'>Checked In</option>

                  <option value='Postponed'>Postponed</option>
                </Field>
              </FormField>

              <FormField label='Labor Progress' labelFor='labor_progress'>
                <Field
                  name='labor_progress'
                  id='labor_progress'
                  component='select'
                >
                  <option value='Working'>Working</option>

                  <option value='Cancelled '>Cancelled </option>

                  <option value='Delayed'>Delayed</option>

                  <option value='Completed'>Completed</option>

                  <option value='Partially Complete'>Partially Complete</option>
                </Field>
              </FormField>

              <FormField label='Related Images' labelFor='related_images'>
                <Field
                  name='related_images'
                  id='related_images'
                  itemRef={'images'}
                  options={[]}
                  component={SelectFieldMany}
                ></Field>
              </FormField>

              <FormField label='Related Document' labelFor='related_document'>
                <Field
                  name='related_document'
                  id='related_document'
                  itemRef={'documents'}
                  options={[]}
                  component={SelectFieldMany}
                ></Field>
              </FormField>

              <FormField label='Disclaimer' hasTextareaHeight>
                <Field
                  name='disclaimer'
                  id='disclaimer'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Assigned Date'>
                <Field
                  type='date'
                  name='assigned_date'
                  placeholder='Assigned Date'
                />
              </FormField>

              <FormField label='Assigned Crew' labelFor='assigned_crew'>
                <Field
                  name='assigned_crew'
                  id='assigned_crew'
                  itemRef={'crew'}
                  options={[]}
                  component={SelectFieldMany}
                ></Field>
              </FormField>

              <FormField label='Related Order' labelFor='related_order'>
                <Field
                  name='related_order'
                  id='related_order'
                  component={SelectField}
                  options={[]}
                  itemRef={'orders'}
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
                  onClick={() => router.push('/labor_ticket/labor_ticket-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

Labor_ticketNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_LABOR_TICKET'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default Labor_ticketNew;
