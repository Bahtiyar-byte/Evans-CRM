import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import contactsSlice from './contacts/contactsSlice';
import estimatesSlice from './estimates/estimatesSlice';
import jobsSlice from './jobs/jobsSlice';
import rolesSlice from './roles/rolesSlice';
import permissionsSlice from './permissions/permissionsSlice';
import templatesSlice from './templates/templatesSlice';
import tradesSlice from './trades/tradesSlice';
import invoicesSlice from './invoices/invoicesSlice';
import ordersSlice from './orders/ordersSlice';
import imagesSlice from './images/imagesSlice';
import documentsSlice from './documents/documentsSlice';
import emailsSlice from './emails/emailsSlice';
import chatsSlice from './chats/chatsSlice';
import appointmentsSlice from './appointments/appointmentsSlice';
import tasksSlice from './tasks/tasksSlice';
import contractsSlice from './contracts/contractsSlice';
import amendmentsSlice from './amendments/amendmentsSlice';
import estimate_sectionsSlice from './estimate_sections/estimate_sectionsSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    contacts: contactsSlice,
    estimates: estimatesSlice,
    jobs: jobsSlice,
    roles: rolesSlice,
    permissions: permissionsSlice,
    templates: templatesSlice,
    trades: tradesSlice,
    invoices: invoicesSlice,
    orders: ordersSlice,
    images: imagesSlice,
    documents: documentsSlice,
    emails: emailsSlice,
    chats: chatsSlice,
    appointments: appointmentsSlice,
    tasks: tasksSlice,
    contracts: contractsSlice,
    amendments: amendmentsSlice,
    estimate_sections: estimate_sectionsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
