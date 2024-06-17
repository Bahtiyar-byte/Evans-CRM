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

import { create } from '../../stores/jobs/jobsSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  name: '',

  description: '',

  category: 'Commercial',

  type: 'New',

  status: 'Quoted',

  assigned_to: '',

  related_contact: '',

  main_image: [],

  documents: [],

  address: '',

  start_date: '',
  dateStart_date: '',

  end_date: '',
  dateEnd_date: '',
};

const JobsNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/jobs/jobs-list');
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

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  id='description'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Category' labelFor='category'>
                <Field name='category' id='category' component='select'>
                  <option value='Commercial'>Commercial</option>

                  <option value='PropertyManagement'>PropertyManagement</option>

                  <option value='Residential'>Residential</option>
                </Field>
              </FormField>

              <FormField label='Type' labelFor='type'>
                <Field name='type' id='type' component='select'>
                  <option value='New'>New</option>

                  <option value='Repair'>Repair</option>

                  <option value='Service'>Service</option>

                  <option value='Warranty'>Warranty</option>

                  <option value='Inspection'>Inspection</option>

                  <option value='Insurance'>Insurance</option>

                  <option value='Retail'>Retail</option>
                </Field>
              </FormField>

              <FormField label='Status' labelFor='status'>
                <Field name='status' id='status' component='select'>
                  <option value='Quoted'>Quoted</option>

                  <option value='Approved'>Approved</option>

                  <option value='Active'>Active</option>

                  <option value='Completed'>Completed</option>

                  <option value='Invoiced'>Invoiced</option>
                </Field>
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

              <FormField label='Related Contact' labelFor='related_contact'>
                <Field
                  name='related_contact'
                  id='related_contact'
                  component={SelectField}
                  options={[]}
                  itemRef={'contacts'}
                ></Field>
              </FormField>

              <FormField>
                <Field
                  label='Main Image'
                  color='info'
                  icon={mdiUpload}
                  path={'jobs/main_image'}
                  name='main_image'
                  id='main_image'
                  schema={{
                    size: undefined,
                    formats: undefined,
                  }}
                  component={FormImagePicker}
                ></Field>
              </FormField>

              <FormField>
                <Field
                  label='Documents'
                  color='info'
                  icon={mdiUpload}
                  path={'jobs/documents'}
                  name='documents'
                  id='documents'
                  schema={{
                    size: undefined,
                    formats: undefined,
                  }}
                  component={FormFilePicker}
                ></Field>
              </FormField>

              <FormField label='Address'>
                <Field name='address' placeholder='Address' />
              </FormField>

              <FormField label='Start Date'>
                <Field type='date' name='start_date' placeholder='Start Date' />
              </FormField>

              <FormField label='End Date'>
                <Field type='date' name='end_date' placeholder='End Date' />
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
                  onClick={() => router.push('/jobs/jobs-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

JobsNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_JOBS'}>{page}</LayoutAuthenticated>
  );
};

export default JobsNew;
