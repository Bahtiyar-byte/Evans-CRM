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

import { create } from '../../stores/tasks/tasksSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  subject: '',

  assigned_to: '',

  status: '',

  priority: '',

  due_date: '',

  related_job: '',
};

const TasksNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/tasks/tasks-list');
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
              <FormField label='Subject'>
                <Field name='subject' placeholder='Subject' />
              </FormField>

              <FormField label='Assigned To' labelFor='assigned_to'>
                <Field
                  name='assigned_to'
                  id='assigned_to'
                  component={SelectField}
                  options={[]}
                  itemRef={'users'}
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
                <Field
                  type='datetime-local'
                  name='due_date'
                  placeholder='Due Date'
                />
              </FormField>

              <FormField label='Related Job' labelFor='related_job'>
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

TasksNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_TASKS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default TasksNew;
