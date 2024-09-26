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

import { update, fetch } from '../../stores/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

const EditTasksPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    subject: '',

    assigned_to: '',

    status: '',

    priority: '',

    due_date: new Date(),

    related_job: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { tasks } = useAppSelector((state) => state.tasks);

  const { id } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: id }));
  }, [id]);

  useEffect(() => {
    if (typeof tasks === 'object') {
      setInitialValues(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    if (typeof tasks === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = tasks[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [tasks]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: id, data }));
    await router.push('/tasks/tasks-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit tasks')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit tasks'}
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
              <FormField label='Subject'>
                <Field name='subject' placeholder='Subject' />
              </FormField>

              <FormField label='Assigned To' labelFor='assigned_to'>
                <Field
                  name='assigned_to'
                  id='assigned_to'
                  component={SelectField}
                  options={initialValues.assigned_to}
                  itemRef={'users'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='Status'>
                <FormCheckRadioGroup>
                  <FormCheckRadio type='radio' label='Open'>
                    <Field type='radio' name='status' value='Open' />
                  </FormCheckRadio>

                  <FormCheckRadio type='radio' label='Completed'>
                    <Field type='radio' name='status' value='Completed' />
                  </FormCheckRadio>

                  <FormCheckRadio type='radio' label='Accepted'>
                    <Field type='radio' name='status' value='Accepted' />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <FormField label='Priority'>
                <FormCheckRadioGroup>
                  <FormCheckRadio type='radio' label='Low'>
                    <Field type='radio' name='priority' value='Low' />
                  </FormCheckRadio>

                  <FormCheckRadio type='radio' label='Medium'>
                    <Field type='radio' name='priority' value='Medium' />
                  </FormCheckRadio>

                  <FormCheckRadio type='radio' label='High'>
                    <Field type='radio' name='priority' value='High' />
                  </FormCheckRadio>
                </FormCheckRadioGroup>
              </FormField>

              <FormField label='Due Date'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.due_date
                      ? new Date(
                          dayjs(initialValues.due_date).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, due_date: date })
                  }
                />
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
                  onClick={() => router.push('/tasks/tasks-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditTasksPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_TASKS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditTasksPage;
