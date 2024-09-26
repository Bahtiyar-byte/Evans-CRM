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

import { update, fetch } from '../../stores/address/addressSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditAddress = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    street: '',

    suite_apt_unit: '',

    city: '',

    state: '',

    zip: '',

    country: '',

    related_contact: '',

    is_mailing_address: false,

    is_location: false,

    is_billing_Address: false,

    related_job: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { address } = useAppSelector((state) => state.address);

  const { addressId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: addressId }));
  }, [addressId]);

  useEffect(() => {
    if (typeof address === 'object') {
      setInitialValues(address);
    }
  }, [address]);

  useEffect(() => {
    if (typeof address === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = address[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [address]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: addressId, data }));
    await router.push('/address/address-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit address')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit address'}
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
              <FormField label='Street'>
                <Field name='street' placeholder='Street' />
              </FormField>

              <FormField label='Suite/Apt/Unit'>
                <Field name='suite_apt_unit' placeholder='Suite/Apt/Unit' />
              </FormField>

              <FormField label='City'>
                <Field name='city' placeholder='City' />
              </FormField>

              <FormField label='State' labelFor='state'>
                <Field name='state' id='state' component='select'>
                  <option value='AL'>AL</option>

                  <option value='AK'>AK</option>

                  <option value='AZ'>AZ</option>

                  <option value='AR'>AR</option>

                  <option value='AS'>AS</option>
                </Field>
              </FormField>

              <FormField label='Zip'>
                <Field name='zip' placeholder='Zip' />
              </FormField>

              <FormField label='Country' labelFor='country'>
                <Field name='country' id='country' component='select'>
                  <option value='USA'>USA</option>
                </Field>
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

              <FormField label='Mailing Address' labelFor='is_mailing_address'>
                <Field
                  name='is_mailing_address'
                  id='is_mailing_address'
                  component={SwitchField}
                ></Field>
              </FormField>

              <FormField label='Location' labelFor='is_location'>
                <Field
                  name='is_location'
                  id='is_location'
                  component={SwitchField}
                ></Field>
              </FormField>

              <FormField label='Billing Address' labelFor='is_billing_Address'>
                <Field
                  name='is_billing_Address'
                  id='is_billing_Address'
                  component={SwitchField}
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

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/address/address-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditAddress.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_ADDRESS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditAddress;
