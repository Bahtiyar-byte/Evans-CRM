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

import { create } from '../../stores/estimates/estimatesSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  name: '',

  description: '',

  trade: '',

  template_used: '',

  material_cost: '',

  labor_cost: '',

  markup: '',

  profit_margin: '',

  total_price: '',

  unit_of_measurement: '',

  related_contact: '',

  related_job: '',
};

const EstimatesNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/estimates/estimates-list');
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

              <FormField label='TemplateUsed'>
                <Field name='template_used' placeholder='TemplateUsed' />
              </FormField>

              <FormField label='MaterialCost'>
                <Field
                  type='number'
                  name='material_cost'
                  placeholder='MaterialCost'
                />
              </FormField>

              <FormField label='LaborCost'>
                <Field
                  type='number'
                  name='labor_cost'
                  placeholder='LaborCost'
                />
              </FormField>

              <FormField label='Markup'>
                <Field type='number' name='markup' placeholder='Markup' />
              </FormField>

              <FormField label='ProfitMargin'>
                <Field
                  type='number'
                  name='profit_margin'
                  placeholder='ProfitMargin'
                />
              </FormField>

              <FormField label='TotalPrice'>
                <Field
                  type='number'
                  name='total_price'
                  placeholder='TotalPrice'
                />
              </FormField>

              <FormField label='UnitofMeasurement'>
                <Field
                  name='unit_of_measurement'
                  placeholder='UnitofMeasurement'
                />
              </FormField>

              <FormField label='RelatedContact' labelFor='related_contact'>
                <Field
                  name='related_contact'
                  id='related_contact'
                  component={SelectField}
                  options={[]}
                  itemRef={'contacts'}
                ></Field>
              </FormField>

              <FormField label='RelatedJob' labelFor='related_job'>
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

EstimatesNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_ESTIMATES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EstimatesNew;
