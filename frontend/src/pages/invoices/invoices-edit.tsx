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

import { update, fetch } from '../../stores/invoices/invoicesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditInvoicesPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    invoice_number: '',

    invoice_date: new Date(),

    terms: '',

    approved_job_value: '',

    balance_amount: '',

    related_job: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { invoices } = useAppSelector((state) => state.invoices);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof invoices === 'object') {
      setInitialValues(invoices);
    }
  }, [invoices]);

  useEffect(() => {
    if (typeof invoices === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = invoices[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [invoices]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/invoices/invoices-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit invoices')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit invoices'}
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
              <FormField label='Invoice Number'>
                <Field name='invoice_number' placeholder='Invoice Number' />
              </FormField>

              <FormField label='Invoice Date'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.invoice_date
                      ? new Date(
                          dayjs(initialValues.invoice_date).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, invoice_date: date })
                  }
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
                  options={initialValues.related_job}
                  itemRef={'jobs'}
                  showField={'name'}
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

EditInvoicesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_INVOICES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditInvoicesPage;
