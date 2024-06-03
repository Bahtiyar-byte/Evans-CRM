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

import { create } from '../../stores/invoices/invoicesSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  invoice_number: '',

  invoice_date: '',
  dateInvoice_date: '',

  terms: 'By Due Date',

  approved_job_value: '',

  balance_amount: '',

  related_job: '',
};

const InvoicesNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/invoices/invoices-list');
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
              <FormField label='Invoice Number'>
                <Field name='invoice_number' placeholder='Invoice Number' />
              </FormField>

              <FormField label='Invoice Date'>
                <Field
                  type='date'
                  name='invoice_date'
                  placeholder='Invoice Date'
                />
              </FormField>

              <FormField label='Terms' labelFor='terms'>
                <Field name='terms' id='terms' component='select'>
                  <option value='By Due Date'>By Due Date</option>

                  <option value='Upon Receipt'>Upon Receipt</option>

                  <option value='Net 7 Days'>Net 7 Days</option>

                  <option value='Net 10 Days'>Net 10 Days</option>

                  <option value='Net 15 Days'>Net 15 Days</option>

                  <option value='Net 30 Days'>Net 30 Days</option>

                  <option value='Net 45 Days'>Net 45 Days</option>

                  <option value='Net 60 Days'>Net 60 Days</option>
                </Field>
              </FormField>

              <FormField label='Approved Job Value'>
                <Field
                  type='number'
                  name='approved_job_value'
                  placeholder='Approved Job Value'
                />
              </FormField>

              <FormField label='Balance Amount'>
                <Field
                  type='number'
                  name='balance_amount'
                  placeholder='Balance Amount'
                />
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

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/invoices/invoices-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

InvoicesNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_INVOICES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default InvoicesNew;
