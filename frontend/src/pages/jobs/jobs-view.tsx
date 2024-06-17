import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/jobs/jobsSlice';
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

const JobsView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { jobs } = useAppSelector((state) => state.jobs);

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
        <title>{getPageTitle('View jobs')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View jobs')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{jobs?.name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Description</p>
            {jobs.description ? (
              <p dangerouslySetInnerHTML={{ __html: jobs.description }} />
            ) : (
              <p>No data</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Category</p>
            <p>{jobs?.category ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Type</p>
            <p>{jobs?.type ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Status</p>
            <p>{jobs?.status ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Assigned To</p>

            <p>{jobs?.assigned_to?.firstName ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Related Contact</p>

            <p>{jobs?.related_contact?.name ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Main Image</p>
            {jobs?.main_image?.length ? (
              <ImageField
                name={'main_image'}
                image={jobs?.main_image}
                className='w-20 h-20'
              />
            ) : (
              <p>No Main Image</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Documents</p>
            {jobs?.documents?.length ? (
              dataFormatter.filesFormatter(jobs.documents).map((link) => (
                <button
                  key={link.publicUrl}
                  onClick={(e) => saveFile(e, link.publicUrl, link.name)}
                >
                  {link.name}
                </button>
              ))
            ) : (
              <p>No Documents</p>
            )}
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Address</p>
            <p>{jobs?.address}</p>
          </div>

          <FormField label='Start Date'>
            {jobs.start_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  jobs.start_date
                    ? new Date(
                        dayjs(jobs.start_date).format('YYYY-MM-DD hh:mm'),
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
            {jobs.end_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd'
                showTimeSelect
                selected={
                  jobs.end_date
                    ? new Date(dayjs(jobs.end_date).format('YYYY-MM-DD hh:mm'))
                    : null
                }
                disabled
              />
            ) : (
              <p>No End Date</p>
            )}
          </FormField>

          <>
            <p className={'block font-bold mb-2'}>Estimates Related Job</p>
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

                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.estimates_related_job &&
                      Array.isArray(jobs.estimates_related_job) &&
                      jobs.estimates_related_job.map((item: any) => (
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

                          <td data-label='status'>{item.status}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.estimates_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Invoices Related Job</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Invoice Number</th>

                      <th>Invoice Date</th>

                      <th>Terms</th>

                      <th>Approved Job Value</th>

                      <th>Balance Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.invoices_related_job &&
                      Array.isArray(jobs.invoices_related_job) &&
                      jobs.invoices_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/invoices/invoices-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='invoice_number'>
                            {item.invoice_number}
                          </td>

                          <td data-label='invoice_date'>
                            {dataFormatter.dateFormatter(item.invoice_date)}
                          </td>

                          <td data-label='terms'>{item.terms}</td>

                          <td data-label='approved_job_value'>
                            {item.approved_job_value}
                          </td>

                          <td data-label='balance_amount'>
                            {item.balance_amount}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.invoices_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Orders Related Job</p>
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
                    {jobs.orders_related_job &&
                      Array.isArray(jobs.orders_related_job) &&
                      jobs.orders_related_job.map((item: any) => (
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
              {!jobs?.orders_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Images Related Job</p>
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
                    {jobs.images_related_job &&
                      Array.isArray(jobs.images_related_job) &&
                      jobs.images_related_job.map((item: any) => (
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
              {!jobs?.images_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Documents Related Job</p>
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
                    {jobs.documents_related_job &&
                      Array.isArray(jobs.documents_related_job) &&
                      jobs.documents_related_job.map((item: any) => (
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
              {!jobs?.documents_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Emails Related Job</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    {jobs.emails_related_job &&
                      Array.isArray(jobs.emails_related_job) &&
                      jobs.emails_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/emails/emails-view/?id=${item.id}`)
                          }
                        ></tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.emails_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Chats Related Job</p>
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
                    {jobs.chats_related_job &&
                      Array.isArray(jobs.chats_related_job) &&
                      jobs.chats_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/chats/chats-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.chats_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Appointments Related Job</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>

                      <th>Start Time</th>

                      <th>End Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.appointments_related_job &&
                      Array.isArray(jobs.appointments_related_job) &&
                      jobs.appointments_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/appointments/appointments-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='subject'>{item.subject}</td>

                          <td data-label='start_time'>
                            {dataFormatter.dateTimeFormatter(item.start_time)}
                          </td>

                          <td data-label='end_time'>
                            {dataFormatter.dateTimeFormatter(item.end_time)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.appointments_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Tasks Related Job</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>

                      <th>Status</th>

                      <th>Priority</th>

                      <th>Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.tasks_related_job &&
                      Array.isArray(jobs.tasks_related_job) &&
                      jobs.tasks_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/tasks/tasks-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='subject'>{item.subject}</td>

                          <td data-label='status'>{item.status}</td>

                          <td data-label='priority'>{item.priority}</td>

                          <td data-label='due_date'>
                            {dataFormatter.dateTimeFormatter(item.due_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.tasks_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Contracts Related Job</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Amount</th>

                      <th>Signed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.contracts_related_job &&
                      Array.isArray(jobs.contracts_related_job) &&
                      jobs.contracts_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/contracts/contracts-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='amount'>{item.amount}</td>

                          <td data-label='signed_date'>
                            {dataFormatter.dateFormatter(item.signed_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.contracts_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Amendments Related Job</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>

                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.amendments_related_job &&
                      Array.isArray(jobs.amendments_related_job) &&
                      jobs.amendments_related_job.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/amendments/amendments-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='type'>{item.type}</td>

                          <td data-label='amount'>{item.amount}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!jobs?.amendments_related_job?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/jobs/jobs-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

JobsView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_JOBS'}>{page}</LayoutAuthenticated>
  );
};

export default JobsView;
