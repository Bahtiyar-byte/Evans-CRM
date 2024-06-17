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

import {
  update,
  fetch,
} from '../../stores/estimate_sections/estimate_sectionsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditEstimate_sections = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    related_estimate: '',

    related_template: '',

    amount: '',

    material_price: '',

    labor_price: '',

    name: '',

    description: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { estimate_sections } = useAppSelector(
    (state) => state.estimate_sections,
  );

  const { estimate_sectionsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: estimate_sectionsId }));
  }, [estimate_sectionsId]);

  useEffect(() => {
    if (typeof estimate_sections === 'object') {
      setInitialValues(estimate_sections);
    }
  }, [estimate_sections]);

  useEffect(() => {
    if (typeof estimate_sections === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = estimate_sections[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [estimate_sections]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: estimate_sectionsId, data }));
    await router.push('/estimate_sections/estimate_sections-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit estimate_sections')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit estimate_sections'}
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

              <FormField label='Related Template' labelFor='related_template'>
                <Field
                  name='related_template'
                  id='related_template'
                  component={SelectField}
                  options={initialValues.related_template}
                  itemRef={'templates'}
                  showField={'id'}
                ></Field>
              </FormField>

              <FormField label='Amount'>
                <Field type='number' name='amount' placeholder='Amount' />
              </FormField>

              <FormField label='Material Price'>
                <Field
                  type='number'
                  name='material_price'
                  placeholder='Material Price'
                />
              </FormField>

              <FormField label='Labor Price'>
                <Field
                  type='number'
                  name='labor_price'
                  placeholder='Labor Price'
                />
              </FormField>

              <FormField label='Name'>
                <Field name='name' placeholder='Name' />
              </FormField>

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  as='textarea'
                  placeholder='Description'
                />
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
                    router.push('/estimate_sections/estimate_sections-list')
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

EditEstimate_sections.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_ESTIMATE_SECTIONS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditEstimate_sections;
