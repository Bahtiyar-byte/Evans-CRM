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

import { update, fetch } from '../../stores/documents/documentsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditDocuments = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    related_job: '',

    related_contact: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { documents } = useAppSelector((state) => state.documents);

  const { documentsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: documentsId }));
  }, [documentsId]);

  useEffect(() => {
    if (typeof documents === 'object') {
      setInitialValues(documents);
    }
  }, [documents]);

  useEffect(() => {
    if (typeof documents === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = documents[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [documents]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: documentsId, data }));
    await router.push('/documents/documents-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit documents')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit documents'}
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

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/documents/documents-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditDocuments.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_DOCUMENTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditDocuments;
