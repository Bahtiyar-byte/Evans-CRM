import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/invoices/invoicesSlice';
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

const InvoicesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { invoices } = useAppSelector((state) => state.invoices);

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
        <title>{getPageTitle('View invoices')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View invoices')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Invoice Number</p>
            <p>{invoices?.invoice_number}</p>
          </div>

          <FormField label='Invoice Date'>
            {invoices.invoice_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  invoices.invoice_date
                    ? new Date(
                        dayjs(invoices.invoice_date).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No Invoice Date</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Terms</p>
            <p>{invoices?.terms ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Approved Job Value</p>
            <p>{invoices?.approved_job_value || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Balance Amount</p>
            <p>{invoices?.balance_amount || 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Job</p>

            <p>{invoices?.related_job?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>History Related Invoice</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.history_related_invoice &&
                      Array.isArray(invoices.history_related_invoice) &&
                      invoices.history_related_invoice.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/history/history-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='action_description'>
                            {item.action_description}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!invoices?.history_related_invoice?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/invoices/invoices-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

InvoicesView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_INVOICES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default InvoicesView;
