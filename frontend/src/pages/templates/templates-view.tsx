import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/templates/templatesSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

const TemplatesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { templates } = useAppSelector((state) => state.templates);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View templates')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View templates')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{templates?.name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Description</p>
            {templates.description ? (
              <p dangerouslySetInnerHTML={{ __html: templates.description }} />
            ) : (
              <p>No data</p>
            )}
          </div>

          <FormField label='Is Email Template'>
            <SwitchField
              field={{
                name: 'is_email_template',
                value: templates?.is_email_template,
              }}
              form={{ setFieldValue: () => null }}
              disabled
            />
          </FormField>

          <>
            <p className={'block font-bold mb-2'}>
              Estimate_sections Related Template
            </p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Amount</th>

                      <th>Material Price</th>

                      <th>Labor Price</th>

                      <th>Name</th>

                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates.estimate_sections_related_template &&
                      Array.isArray(
                        templates.estimate_sections_related_template,
                      ) &&
                      templates.estimate_sections_related_template.map(
                        (item: any) => (
                          <tr
                            key={item.id}
                            onClick={() =>
                              router.push(
                                `/estimate_sections/estimate_sections-view/?id=${item.id}`,
                              )
                            }
                          >
                            <td data-label='amount'>{item.amount}</td>

                            <td data-label='material_price'>
                              {item.material_price}
                            </td>

                            <td data-label='labor_price'>{item.labor_price}</td>

                            <td data-label='name'>{item.name}</td>

                            <td data-label='description'>{item.description}</td>
                          </tr>
                        ),
                      )}
                  </tbody>
                </table>
              </div>
              {!templates?.estimate_sections_related_template?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/templates/templates-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

TemplatesView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_TEMPLATES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default TemplatesView;
