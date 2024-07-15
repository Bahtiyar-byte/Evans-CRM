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

import { update, fetch } from '../../stores/amendments/amendmentsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditAmendments = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    related_job: '',

    type: '',

    amount: '',

    description: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { amendments } = useAppSelector((state) => state.amendments);

  const { amendmentsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: amendmentsId }));
  }, [amendmentsId]);

  useEffect(() => {
    if (typeof amendments === 'object') {
      setInitialValues(amendments);
    }
  }, [amendments]);

  useEffect(() => {
    if (typeof amendments === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = amendments[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [amendments]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: amendmentsId, data }));
    await router.push('/amendments/amendments-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit amendments')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit amendments'}
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

              <FormField label='Type' labelFor='type'>
                <Field name='type' id='type' component='select'>
                  <option value='Change Order'>Change Order</option>

                  <option value='Discount'>Discount</option>

                  <option value='Insurance Claim'>Insurance Claim</option>

                  <option value='Supplement'>Supplement</option>

                  <option value='Upgrade'>Upgrade</option>
                </Field>
              </FormField>

              <FormField label='Amount'>
                <Field type='number' name='amount' placeholder='Amount' />
              </FormField>

              <FormField label='Description' hasTextareaHeight>
                <Field
                  name='description'
                  id='description'
                  component={RichTextField}
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
                  onClick={() => router.push('/amendments/amendments-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditAmendments.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_AMENDMENTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditAmendments;
