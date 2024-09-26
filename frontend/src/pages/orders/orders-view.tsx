import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/orders/ordersSlice';
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

const OrdersView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.orders);

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
        <title>{getPageTitle('View orders')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View orders')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Order Number</p>
            <p>{orders?.order_number}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Total Amount</p>
            <p>{orders?.total_amount || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Job</p>

            <p>{orders?.related_job?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Estimate</p>

            <p>{orders?.related_estimate?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Labor_ticket Related Order</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Start Date</th>

                      <th>End Date</th>

                      <th>Actual Start Time</th>

                      <th>Actual End Time</th>

                      <th>Crew Actions</th>

                      <th>Labor Progress</th>

                      <th>Assigned Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.labor_ticket_related_order &&
                      Array.isArray(orders.labor_ticket_related_order) &&
                      orders.labor_ticket_related_order.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/labor_ticket/labor_ticket-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='start_date'>
                            {dataFormatter.dateFormatter(item.start_date)}
                          </td>

                          <td data-label='end_date'>
                            {dataFormatter.dateFormatter(item.end_date)}
                          </td>

                          <td data-label='actual_start_time'>
                            {dataFormatter.dateTimeFormatter(
                              item.actual_start_time,
                            )}
                          </td>

                          <td data-label='actual_end_time'>
                            {dataFormatter.dateTimeFormatter(
                              item.actual_end_time,
                            )}
                          </td>

                          <td data-label='crew_actions'>{item.crew_actions}</td>

                          <td data-label='labor_progress'>
                            {item.labor_progress}
                          </td>

                          <td data-label='assigned_date'>
                            {dataFormatter.dateFormatter(item.assigned_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!orders?.labor_ticket_related_order?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/orders/orders-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

OrdersView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_ORDERS'}>{page}</LayoutAuthenticated>
  );
};

export default OrdersView;
