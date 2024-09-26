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

import { update, fetch } from '../../stores/subcontractor/subcontractorSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditSubcontractorPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    first_name: '',

    last_name: '',

    address: '',

    phone: '',

    mobile_phone: '',

    related_documents: [],

    entity_name: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { subcontractor } = useAppSelector((state) => state.subcontractor);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof subcontractor === 'object') {
      setInitialValues(subcontractor);
    }
  }, [subcontractor]);

  useEffect(() => {
    if (typeof subcontractor === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = subcontractor[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [subcontractor]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/subcontractor/subcontractor-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit subcontractor')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit subcontractor'}
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

              <FormField label='First Name'>
                <Field name='first_name' placeholder='First Name' />
              </FormField>

              <FormField label='Last Name'>
                <Field name='last_name' placeholder='Last Name' />
              </FormField>

              <FormField label='Address'>
                <Field name='address' placeholder='Address' />
              </FormField>

              <FormField label='Phone'>
                <Field name='phone' placeholder='Phone' />
              </FormField>

              <FormField label='Mobile Phone'>
                <Field name='mobile_phone' placeholder='Mobile Phone' />
              </FormField>

              <FormField label='Related Documents' labelFor='related_documents'>
                <Field
                  name='related_documents'
                  id='related_documents'
                  component={SelectFieldMany}
                  options={initialValues.related_documents}
                  itemRef={'documents'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='Entity Name'>
                <Field name='entity_name' placeholder='Entity Name' />
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
                  onClick={() =>
                    router.push('/subcontractor/subcontractor-list')
                  }
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditSubcontractorPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_SUBCONTRACTOR'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditSubcontractorPage;
