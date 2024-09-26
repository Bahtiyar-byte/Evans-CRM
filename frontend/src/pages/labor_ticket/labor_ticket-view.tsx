import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/labor_ticket/labor_ticketSlice';
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

const Labor_ticketView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { labor_ticket } = useAppSelector((state) => state.labor_ticket);

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
        <title>{getPageTitle('View labor_ticket')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View labor_ticket')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{labor_ticket?.name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Job</p>

            <p>{labor_ticket?.related_job?.name ?? 'No data'}</p>
          </div>

          <FormField label='Start Date'>
            {labor_ticket.start_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  labor_ticket.start_date
                    ? new Date(
                        dayjs(labor_ticket.start_date).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No Start Date</p>
            )}
          </FormField>

          <FormField label='End Date'>
            {labor_ticket.end_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  labor_ticket.end_date
                    ? new Date(
                        dayjs(labor_ticket.end_date).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No End Date</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Crew Instructions</p>
            {labor_ticket.crew_instructions ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: labor_ticket.crew_instructions,
                }}
              />
            ) : (
              <p>No data</p>
            )}
          </div>

          <FormField label='Actual Start Time'>
            {labor_ticket.actual_start_time ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  labor_ticket.actual_start_time
                    ? new Date(
                        dayjs(labor_ticket.actual_start_time).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No Actual Start Time</p>
            )}
          </FormField>

          <FormField label='Actual End Time'>
            {labor_ticket.actual_end_time ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  labor_ticket.actual_end_time
                    ? new Date(
                        dayjs(labor_ticket.actual_end_time).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No Actual End Time</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Crew Actions</p>
            <p>{labor_ticket?.crew_actions ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Labor Progress</p>
            <p>{labor_ticket?.labor_progress ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Related Images</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labor_ticket.related_images &&
                      Array.isArray(labor_ticket.related_images) &&
                      labor_ticket.related_images.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/images/images-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='Name'>{item.Name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!labor_ticket?.related_images?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Related Document</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labor_ticket.related_document &&
                      Array.isArray(labor_ticket.related_document) &&
                      labor_ticket.related_document.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/documents/documents-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!labor_ticket?.related_document?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Disclaimer</p>
            {labor_ticket.disclaimer ? (
              <p
                dangerouslySetInnerHTML={{ __html: labor_ticket.disclaimer }}
              />
            ) : (
              <p>No data</p>
            )}
          </div>

          <FormField label='Assigned Date'>
            {labor_ticket.assigned_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  labor_ticket.assigned_date
                    ? new Date(
                        dayjs(labor_ticket.assigned_date).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No Assigned Date</p>
            )}
          </FormField>

          <>
            <p className={'block font-bold mb-2'}>Assigned Crew</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labor_ticket.assigned_crew &&
                      Array.isArray(labor_ticket.assigned_crew) &&
                      labor_ticket.assigned_crew.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/crew/crew-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!labor_ticket?.assigned_crew?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Order</p>

            <p>{labor_ticket?.related_order?.order_number ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>
              History Related Labor Ticket
            </p>
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
                    {labor_ticket.history_related_labor_ticket &&
                      Array.isArray(
                        labor_ticket.history_related_labor_ticket,
                      ) &&
                      labor_ticket.history_related_labor_ticket.map(
                        (item: any) => (
                          <tr
                            key={item.id}
                            onClick={() =>
                              router.push(
                                `/history/history-view/?id=${item.id}`,
                              )
                            }
                          >
                            <td data-label='action_description'>
                              {item.action_description}
                            </td>
                          </tr>
                        ),
                      )}
                  </tbody>
                </table>
              </div>
              {!labor_ticket?.history_related_labor_ticket?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/labor_ticket/labor_ticket-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

Labor_ticketView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_LABOR_TICKET'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default Labor_ticketView;
