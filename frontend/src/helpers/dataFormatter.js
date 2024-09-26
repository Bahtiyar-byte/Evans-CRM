import dayjs from 'dayjs';
import _ from 'lodash';

export default {
  filesFormatter(arr) {
    if (!arr || !arr.length) return [];
    return arr.map((item) => item);
  },
  imageFormatter(arr) {
    if (!arr || !arr.length) return [];
    return arr.map((item) => ({
      publicUrl: item.publicUrl || '',
    }));
  },
  oneImageFormatter(arr) {
    if (!arr || !arr.length) return '';
    return arr[0].publicUrl || '';
  },
  dateFormatter(date) {
    if (!date) return '';
    return dayjs(date).format('YYYY-MM-DD');
  },
  dateTimeFormatter(date) {
    if (!date) return '';
    return dayjs(date).format('YYYY-MM-DD HH:mm');
  },
  booleanFormatter(val) {
    return val ? 'Yes' : 'No';
  },
  dataGridEditFormatter(obj) {
    return _.transform(obj, (result, value, key) => {
      if (_.isArray(value)) {
        result[key] = _.map(value, 'id');
      } else if (_.isObject(value)) {
        result[key] = value.id;
      } else {
        result[key] = value;
      }
    });
  },

  usersManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  usersOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  usersManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  usersOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  contactsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  contactsOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  contactsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  contactsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  estimatesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  estimatesOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  estimatesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  estimatesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  jobsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  jobsOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  jobsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  jobsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  rolesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  rolesOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  rolesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  rolesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  permissionsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  permissionsOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  permissionsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  permissionsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  templatesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  templatesOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  templatesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  templatesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  tradesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  tradesOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  tradesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  tradesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  invoicesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.invoice_number);
  },
  invoicesOneListFormatter(val) {
    if (!val) return '';
    return val.invoice_number;
  },
  invoicesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.invoice_number };
    });
  },
  invoicesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.invoice_number, id: val.id };
  },

  ordersManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.order_number);
  },
  ordersOneListFormatter(val) {
    if (!val) return '';
    return val.order_number;
  },
  ordersManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.order_number };
    });
  },
  ordersOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.order_number, id: val.id };
  },

  imagesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.Name);
  },
  imagesOneListFormatter(val) {
    if (!val) return '';
    return val.Name;
  },
  imagesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.Name };
    });
  },
  imagesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.Name, id: val.id };
  },

  documentsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  documentsOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  documentsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  documentsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  emailsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.id);
  },
  emailsOneListFormatter(val) {
    if (!val) return '';
    return val.id;
  },
  emailsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.id };
    });
  },
  emailsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.id, id: val.id };
  },

  appointmentsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.subject);
  },
  appointmentsOneListFormatter(val) {
    if (!val) return '';
    return val.subject;
  },
  appointmentsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.subject };
    });
  },
  appointmentsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.subject, id: val.id };
  },

  contact_phonesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.phone_number);
  },
  contact_phonesOneListFormatter(val) {
    if (!val) return '';
    return val.phone_number;
  },
  contact_phonesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.phone_number };
    });
  },
  contact_phonesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.phone_number, id: val.id };
  },

  contact_emailsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.email);
  },
  contact_emailsOneListFormatter(val) {
    if (!val) return '';
    return val.email;
  },
  contact_emailsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.email };
    });
  },
  contact_emailsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.email, id: val.id };
  },

  labor_ticketManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.id);
  },
  labor_ticketOneListFormatter(val) {
    if (!val) return '';
    return val.id;
  },
  labor_ticketManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.id };
    });
  },
  labor_ticketOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.id, id: val.id };
  },

  crewManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.id);
  },
  crewOneListFormatter(val) {
    if (!val) return '';
    return val.id;
  },
  crewManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.id };
    });
  },
  crewOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.id, id: val.id };
  },
};
