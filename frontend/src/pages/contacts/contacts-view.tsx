import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/contacts/contactsSlice';
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

const ContactsView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);

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
        <title>{getPageTitle('View contacts')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View contacts')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{contacts?.name}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Email</p>
            <p>{contacts?.email}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Phone</p>
            <p>{contacts?.phone}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Address</p>
            <p>{contacts?.address}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Status</p>
            <p>{contacts?.status ?? 'No data'}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>First Name</p>
            <p>{contacts?.firstName}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Last Name</p>
            <p>{contacts?.lastName}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Source</p>
            <p>{contacts?.source ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Estimates Related Contact</p>
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
                    {contacts.estimates_related_contact &&
                      Array.isArray(contacts.estimates_related_contact) &&
                      contacts.estimates_related_contact.map((item: any) => (
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
              {!contacts?.estimates_related_contact?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Jobs Related Contact</p>
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
                    {contacts.jobs_related_contact &&
                      Array.isArray(contacts.jobs_related_contact) &&
                      contacts.jobs_related_contact.map((item: any) => (
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
              {!contacts?.jobs_related_contact?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Emails Related Contact</p>
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
                    {contacts.emails_related_contact &&
                      Array.isArray(contacts.emails_related_contact) &&
                      contacts.emails_related_contact.map((item: any) => (
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
              {!contacts?.emails_related_contact?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>
              Appointments Related Contact
            </p>
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
                    {contacts.appointments_related_contact &&
                      Array.isArray(contacts.appointments_related_contact) &&
                      contacts.appointments_related_contact.map((item: any) => (
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
              {!contacts?.appointments_related_contact?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Contracts Related Contact</p>
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
                    {contacts.contracts_related_contact &&
                      Array.isArray(contacts.contracts_related_contact) &&
                      contacts.contracts_related_contact.map((item: any) => (
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
              {!contacts?.contracts_related_contact?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/contacts/contacts-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

ContactsView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_CONTACTS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default ContactsView;
