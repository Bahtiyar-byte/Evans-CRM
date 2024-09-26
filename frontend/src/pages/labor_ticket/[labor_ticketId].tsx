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

import { update, fetch } from '../../stores/labor_ticket/labor_ticketSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditLabor_ticket = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    name: '',

    related_job: '',

    start_date: new Date(),

    end_date: new Date(),

    crew_instructions: '',

    actual_start_time: new Date(),

    actual_end_time: new Date(),

    crew_actions: '',

    labor_progress: '',

    related_images: [],

    related_document: [],

    disclaimer: '',

    assigned_date: new Date(),

    assigned_crew: [],

    related_order: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { labor_ticket } = useAppSelector((state) => state.labor_ticket);

  const { labor_ticketId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: labor_ticketId }));
  }, [labor_ticketId]);

  useEffect(() => {
    if (typeof labor_ticket === 'object') {
      setInitialValues(labor_ticket);
    }
  }, [labor_ticket]);

  useEffect(() => {
    if (typeof labor_ticket === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = labor_ticket[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [labor_ticket]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: labor_ticketId, data }));
    await router.push('/labor_ticket/labor_ticket-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit labor_ticket')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit labor_ticket'}
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

              <FormField label='Crew Instructions' hasTextareaHeight>
                <Field
                  name='crew_instructions'
                  id='crew_instructions'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Actual Start Time'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.actual_start_time
                      ? new Date(
                          dayjs(initialValues.actual_start_time).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({
                      ...initialValues,
                      actual_start_time: date,
                    })
                  }
                />
              </FormField>

              <FormField label='Actual End Time'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.actual_end_time
                      ? new Date(
                          dayjs(initialValues.actual_end_time).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({
                      ...initialValues,
                      actual_end_time: date,
                    })
                  }
                />
              </FormField>

              <FormField label='Crew Actions' labelFor='crew_actions'>
                <Field name='crew_actions' id='crew_actions' component='select'>
                  <option value='Not Checked In'>Not Checked In</option>

                  <option value='Checked In'>Checked In</option>

                  <option value='Postponed'>Postponed</option>
                </Field>
              </FormField>

              <FormField label='Labor Progress' labelFor='labor_progress'>
                <Field
                  name='labor_progress'
                  id='labor_progress'
                  component='select'
                >
                  <option value='Working'>Working</option>

                  <option value='Cancelled '>Cancelled </option>

                  <option value='Delayed'>Delayed</option>

                  <option value='Completed'>Completed</option>

                  <option value='Partially Complete'>Partially Complete</option>
                </Field>
              </FormField>

              <FormField label='Related Images' labelFor='related_images'>
                <Field
                  name='related_images'
                  id='related_images'
                  component={SelectFieldMany}
                  options={initialValues.related_images}
                  itemRef={'images'}
                  showField={'Name'}
                ></Field>
              </FormField>

              <FormField label='Related Document' labelFor='related_document'>
                <Field
                  name='related_document'
                  id='related_document'
                  component={SelectFieldMany}
                  options={initialValues.related_document}
                  itemRef={'documents'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='Disclaimer' hasTextareaHeight>
                <Field
                  name='disclaimer'
                  id='disclaimer'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='Assigned Date'>
                <DatePicker
                  dateFormat='yyyy-MM-dd'
                  selected={
                    initialValues.assigned_date
                      ? new Date(
                          dayjs(initialValues.assigned_date).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, assigned_date: date })
                  }
                />
              </FormField>

              <FormField label='Assigned Crew' labelFor='assigned_crew'>
                <Field
                  name='assigned_crew'
                  id='assigned_crew'
                  component={SelectFieldMany}
                  options={initialValues.assigned_crew}
                  itemRef={'crew'}
                  showField={'id'}
                ></Field>
              </FormField>

              <FormField label='Related Order' labelFor='related_order'>
                <Field
                  name='related_order'
                  id='related_order'
                  component={SelectField}
                  options={initialValues.related_order}
                  itemRef={'orders'}
                  showField={'order_number'}
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
                  onClick={() => router.push('/labor_ticket/labor_ticket-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditLabor_ticket.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_LABOR_TICKET'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditLabor_ticket;
