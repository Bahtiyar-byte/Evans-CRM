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

import { update, fetch } from '../../stores/history/historySlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditHistory = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
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
  const [initialValues, setInitialValues] = useState(initVals);

  const { history } = useAppSelector((state) => state.history);

  const { historyId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: historyId }));
  }, [historyId]);

  useEffect(() => {
    if (typeof history === 'object') {
      setInitialValues(history);
    }
  }, [history]);

  useEffect(() => {
    if (typeof history === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = history[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [history]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: historyId, data }));
    await router.push('/history/history-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit history')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit history'}
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
              <FormField label='Related Estimate' labelFor='related_estimate'>
                <Field
                  name='related_estimate'
                  id='related_estimate'
                  component={SelectField}
                  options={initialValues.related_estimate}
                  itemRef={'estimates'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='Related Invoice' labelFor='related_invoice'>
                <Field
                  name='related_invoice'
                  id='related_invoice'
                  component={SelectField}
                  options={initialValues.related_invoice}
                  itemRef={'invoices'}
                  showField={'invoice_number'}
                ></Field>
              </FormField>

              <FormField label='Related Job' labelFor='related_job'>
                <Field
                  name='related_job'
                  id='related_job'
                  component={SelectField}
                  options={initialValues.related_job}
                  itemRef={'jobs'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='Related Email' labelFor='related_email'>
                <Field
                  name='related_email'
                  id='related_email'
                  component={SelectField}
                  options={initialValues.related_email}
                  itemRef={'emails'}
                  showField={'id'}
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
                  options={initialValues.related_labor_ticket}
                  itemRef={'labor_ticket'}
                  showField={'id'}
                ></Field>
              </FormField>

              <FormField label='Related User' labelFor='related_user'>
                <Field
                  name='related_user'
                  id='related_user'
                  component={SelectField}
                  options={initialValues.related_user}
                  itemRef={'users'}
                  showField={'name'}
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
                  options={initialValues.related_contact}
                  itemRef={'contacts'}
                  showField={'name'}
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
                  options={initialValues.related_appointment}
                  itemRef={'appointments'}
                  showField={'subject'}
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

EditHistory.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_HISTORY'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditHistory;
