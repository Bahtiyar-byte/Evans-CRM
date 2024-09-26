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

import { update, fetch } from '../../stores/images/imagesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditImages = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    image: [],

    Name: '',

    related_job: '',

    related_contact: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { images } = useAppSelector((state) => state.images);

  const { imagesId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: imagesId }));
  }, [imagesId]);

  useEffect(() => {
    if (typeof images === 'object') {
      setInitialValues(images);
    }
  }, [images]);

  useEffect(() => {
    if (typeof images === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = images[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [images]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: imagesId, data }));
    await router.push('/images/images-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit images')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit images'}
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
              <FormField>
                <Field
                  label='Image'
                  color='info'
                  icon={mdiUpload}
                  path={'images/image'}
                  name='image'
                  id='image'
                  schema={{
                    size: undefined,
                    formats: undefined,
                  }}
                  component={FormImagePicker}
                ></Field>
              </FormField>

              <FormField label='Name'>
                <Field name='Name' placeholder='Name' />
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
                  onClick={() => router.push('/images/images-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditImages.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_IMAGES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditImages;
