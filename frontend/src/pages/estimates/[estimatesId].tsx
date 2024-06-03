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

import { update, fetch } from '../../stores/estimates/estimatesSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditEstimates = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    description: '',

    trade: '',

    template_used: '',

    material_cost: '',

    labor_cost: '',

    markup: '',

    profit_margin: '',

    total_price: '',

    related_contact: '',

    related_job: '',

    related_template: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { estimates } = useAppSelector((state) => state.estimates);

  const { estimatesId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: estimatesId }));
  }, [estimatesId]);

  useEffect(() => {
    if (typeof estimates === 'object') {
      setInitialValues(estimates);
    }
  }, [estimates]);

  useEffect(() => {
    if (typeof estimates === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = estimates[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [estimates]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: estimatesId, data }));
    await router.push('/estimates/estimates-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit estimates')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit estimates'}
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

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  id='description'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Trade'>
                <Field name='trade' placeholder='Trade' />
              </FormField>

              <FormField label='Template Used'>
                <Field name='template_used' placeholder='Template Used' />
              </FormField>

              <FormField label='Material Cost'>
                <Field
                  type='number'
                  name='material_cost'
                  placeholder='Material Cost'
                />
              </FormField>

              <FormField label='Labor Cost'>
                <Field
                  type='number'
                  name='labor_cost'
                  placeholder='Labor Cost'
                />
              </FormField>

              <FormField label='Markup'>
                <Field type='number' name='markup' placeholder='Markup' />
              </FormField>

              <FormField label='Profit Margin'>
                <Field
                  type='number'
                  name='profit_margin'
                  placeholder='Profit Margin'
                />
              </FormField>

              <FormField label='Total Price'>
                <Field
                  type='number'
                  name='total_price'
                  placeholder='Total Price'
                />
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

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/estimates/estimates-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditEstimates.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_ESTIMATES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditEstimates;
