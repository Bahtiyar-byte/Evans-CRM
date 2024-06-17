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

import { update, fetch } from '../../stores/jobs/jobsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditJobs = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    description: '',

    category: '',

    type: '',

    status: '',

    assigned_to: '',

    related_contact: '',

    main_image: [],

    documents: [],

    address: '',

    start_date: new Date(),

    end_date: new Date(),
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { jobs } = useAppSelector((state) => state.jobs);

  const { jobsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: jobsId }));
  }, [jobsId]);

  useEffect(() => {
    if (typeof jobs === 'object') {
      setInitialValues(jobs);
    }
  }, [jobs]);

  useEffect(() => {
    if (typeof jobs === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = jobs[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [jobs]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: jobsId, data }));
    await router.push('/jobs/jobs-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit jobs')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit jobs'}
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

              <FormField label='Category' labelFor='category'>
                <Field name='Category' id='Category' component='select'>
                  <option value='Commercial'>Commercial</option>

                  <option value='PropertyManagement'>PropertyManagement</option>

                  <option value='Residential'>Residential</option>
                </Field>
              </FormField>

              <FormField label='Type' labelFor='type'>
                <Field name='Type' id='Type' component='select'>
                  <option value='New'>New</option>

                  <option value='Repair'>Repair</option>

                  <option value='Service'>Service</option>

                  <option value='Warranty'>Warranty</option>

                  <option value='Inspection'>Inspection</option>

                  <option value='Insurance'>Insurance</option>

                  <option value='Retail'>Retail</option>
                </Field>
              </FormField>

              <FormField label='Status' labelFor='status'>
                <Field name='Status' id='Status' component='select'>
                  <option value='Quoted'>Quoted</option>

                  <option value='Approved'>Approved</option>

                  <option value='Active'>Active</option>

                  <option value='Completed'>Completed</option>

                  <option value='Invoiced'>Invoiced</option>
                </Field>
              </FormField>

              <FormField label='Assigned To' labelFor='assigned_to'>
                <Field
                  name='assigned_to'
                  id='assigned_to'
                  component={SelectField}
                  options={initialValues.assigned_to}
                  itemRef={'users'}
                  showField={'firstName'}
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

              <FormField>
                <Field
                  label='Main Image'
                  color='info'
                  icon={mdiUpload}
                  path={'jobs/main_image'}
                  name='main_image'
                  id='main_image'
                  schema={{
                    size: undefined,
                    formats: undefined,
                  }}
                  component={FormImagePicker}
                ></Field>
              </FormField>

              <FormField>
                <Field
                  label='Documents'
                  color='info'
                  icon={mdiUpload}
                  path={'jobs/documents'}
                  name='documents'
                  id='documents'
                  schema={{
                    size: undefined,
                    formats: undefined,
                  }}
                  component={FormFilePicker}
                ></Field>
              </FormField>

              <FormField label='Address'>
                <Field name='address' placeholder='Address' />
              </FormField>

              <FormField label='Start Date'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.start_date
                      ? new Date(
                          dayjs(initialValues.start_date).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, start_date: date })
                  }
                />
              </FormField>

              <FormField label='End Date'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.end_date
                      ? new Date(
                          dayjs(initialValues.end_date).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, end_date: date })
                  }
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
                  onClick={() => router.push('/jobs/jobs-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditJobs.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_JOBS'}>{page}</LayoutAuthenticated>
  );
};

export default EditJobs;
