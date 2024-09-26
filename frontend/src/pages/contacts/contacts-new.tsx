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

import { create } from '../../stores/contacts/contactsSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  name: '',

  email: '',

  phone: '',

  address: '',

  status: 'Lead',

  firstName: '',

  lastName: '',

  source: 'Google Ads',

  related_phones: [],

  related_emails: [],

  assigned_to: '',

  category: 'Commercial',

  work_type: 'New',

  referral: '',

  company: '',
};

const ContactsNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/contacts/contacts-list');
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

              <FormField label='Email'>
                <Field name='email' placeholder='Email' />
              </FormField>

              <FormField label='Phone'>
                <Field name='phone' placeholder='Phone' />
              </FormField>

              <FormField label='Address'>
                <Field name='address' placeholder='Address' />
              </FormField>

              <FormField label='Status' labelFor='status'>
                <Field name='status' id='status' component='select'>
                  <option value='Lead'>Lead</option>

                  <option value='Prospect'>Prospect</option>

                  <option value='Customer'>Customer</option>
                </Field>
              </FormField>

              <FormField label='First Name'>
                <Field name='firstName' placeholder='First Name' />
              </FormField>

              <FormField label='Last Name'>
                <Field name='lastName' placeholder='Last Name' />
              </FormField>

              <FormField label='Source' labelFor='source'>
                <Field name='source' id='source' component='select'>
                  <option value='Google Ads'>Google Ads</option>

                  <option value='Facebook'>Facebook</option>

                  <option value='Website'>Website</option>

                  <option value='Other'>Other</option>
                </Field>
              </FormField>

              <FormField label='Related Phones' labelFor='related_phones'>
                <Field
                  name='related_phones'
                  id='related_phones'
                  itemRef={'contact_phones'}
                  options={[]}
                  component={SelectFieldMany}
                ></Field>
              </FormField>

              <FormField label='Related Emails' labelFor='related_emails'>
                <Field
                  name='related_emails'
                  id='related_emails'
                  itemRef={'contact_emails'}
                  options={[]}
                  component={SelectFieldMany}
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

              <FormField label='Category' labelFor='category'>
                <Field name='category' id='category' component='select'>
                  <option value='Commercial'>Commercial</option>

                  <option value='Residential'>Residential</option>

                  <option value='Property Management'>
                    Property Management
                  </option>
                </Field>
              </FormField>

              <FormField label='Work Type' labelFor='work_type'>
                <Field name='work_type' id='work_type' component='select'>
                  <option value='New'>New</option>

                  <option value='Repair'>Repair</option>

                  <option value='Service'>Service</option>

                  <option value='Retail'>Retail</option>

                  <option value='Insurance'>Insurance</option>

                  <option value='Warranty '>Warranty </option>

                  <option value='Inspection'>Inspection</option>
                </Field>
              </FormField>

              <FormField label='Referral'>
                <Field name='referral' placeholder='Referral' />
              </FormField>

              <FormField label='Company'>
                <Field name='company' placeholder='Company' />
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
                  onClick={() => router.push('/contacts/contacts-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

ContactsNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_CONTACTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default ContactsNew;
