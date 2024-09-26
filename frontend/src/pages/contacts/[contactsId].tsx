import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

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
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/contacts/contactsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditContacts = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    email: '',

    phone: '',

    address: '',

    status: '',

    firstName: '',

    lastName: '',

    source: '',

    related_phones: [],

    related_emails: [],

    assigned_to: '',

    category: '',

    work_type: '',

    referral: '',

    company: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { contacts } = useAppSelector((state) => state.contacts);

  const { contactsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: contactsId }));
  }, [contactsId]);

  useEffect(() => {
    if (typeof contacts === 'object') {
      setInitialValues(contacts);
    }
  }, [contacts]);

  useEffect(() => {
    if (typeof contacts === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = contacts[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [contacts]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: contactsId, data }));
    await router.push('/contacts/contacts-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit contacts')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit contacts'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
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
                  component={SelectFieldMany}
                  options={initialValues.related_phones}
                  itemRef={'contact_phones'}
                  showField={'phone_number'}
                ></Field>
              </FormField>

              <FormField label='Related Emails' labelFor='related_emails'>
                <Field
                  name='related_emails'
                  id='related_emails'
                  component={SelectFieldMany}
                  options={initialValues.related_emails}
                  itemRef={'contact_emails'}
                  showField={'email'}
                ></Field>
              </FormField>

              <FormField label='Assigned To' labelFor='assigned_to'>
                <Field
                  name='assigned_to'
                  id='assigned_to'
                  component={SelectField}
                  options={initialValues.assigned_to}
                  itemRef={'users'}
                  showField={'name'}
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

EditContacts.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_CONTACTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditContacts;
