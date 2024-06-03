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

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Trade</p>

            <p>{templates?.related_trade?.id ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Estimates Related Template</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Trade</th>

                      <th>Template Used</th>

                      <th>Material Cost</th>

                      <th>Labor Cost</th>

                      <th>Markup</th>

                      <th>Profit Margin</th>

                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {templates.estimates_related_template &&
                      Array.isArray(templates.estimates_related_template) &&
                      templates.estimates_related_template.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/estimates/estimates-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='trade'>{item.trade}</td>

                          <td data-label='template_used'>
                            {item.template_used}
                          </td>

                          <td data-label='material_cost'>
                            {item.material_cost}
                          </td>

                          <td data-label='labor_cost'>{item.labor_cost}</td>

                          <td data-label='markup'>{item.markup}</td>

                          <td data-label='profit_margin'>
                            {item.profit_margin}
                          </td>

                          <td data-label='total_price'>{item.total_price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!templates?.estimates_related_template?.length && (
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
