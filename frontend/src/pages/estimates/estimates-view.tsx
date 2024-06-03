import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/estimates/estimatesSlice';
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

const EstimatesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { estimates } = useAppSelector((state) => state.estimates);

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
        <title>{getPageTitle('View estimates')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View estimates')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{estimates?.name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Description</p>
            {estimates.description ? (
              <p dangerouslySetInnerHTML={{ __html: estimates.description }} />
            ) : (
              <p>No data</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Trade</p>
            <p>{estimates?.trade}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Template Used</p>
            <p>{estimates?.template_used}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Material Cost</p>
            <p>{estimates?.material_cost || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Labor Cost</p>
            <p>{estimates?.labor_cost || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Markup</p>
            <p>{estimates?.markup || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Profit Margin</p>
            <p>{estimates?.profit_margin || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Total Price</p>
            <p>{estimates?.total_price || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Contact</p>

            <p>{estimates?.related_contact?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Job</p>

            <p>{estimates?.related_job?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Template</p>

            <p>{estimates?.related_template?.id ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Jobs Related Estimate</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Category</th>

                      <th>Type</th>

                      <th>Status</th>

                      <th>Address</th>

                      <th>Start Date</th>

                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estimates.jobs_related_estimate &&
                      Array.isArray(estimates.jobs_related_estimate) &&
                      estimates.jobs_related_estimate.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/jobs/jobs-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='category'>{item.category}</td>

                          <td data-label='type'>{item.type}</td>

                          <td data-label='status'>{item.status}</td>

                          <td data-label='address'>{item.address}</td>

                          <td data-label='start_date'>
                            {dataFormatter.dateFormatter(item.start_date)}
                          </td>

                          <td data-label='end_date'>
                            {dataFormatter.dateFormatter(item.end_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!estimates?.jobs_related_estimate?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Orders Related Estimate</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Order Number</th>

                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estimates.orders_related_estimate &&
                      Array.isArray(estimates.orders_related_estimate) &&
                      estimates.orders_related_estimate.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/orders/orders-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='order_number'>{item.order_number}</td>

                          <td data-label='total_amount'>{item.total_amount}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!estimates?.orders_related_estimate?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/estimates/estimates-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

EstimatesView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_ESTIMATES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EstimatesView;
