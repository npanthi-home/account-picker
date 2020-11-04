## Question:
A customer can have multiple accounts/email-ds registered with any service (e.g.
gmail). After logging in, they can pick up the account they want to access.
Create  a reusable component which can be configured as per the requirements of the
consumer of the component.

### Configurable features:
1. The accounts can be grouped by categories. (e.g. if same component has to be used by facebook etc.)
2. The accounts/ids can be searchable. (Assuming user has 50+ accounts)
3. The list can be paginated.
4. email-id/account can be sorted by last accessed.
5. Email id/account from the list can be marked as favourite.
6. Data can be passed to the component and if not it fetches the data by default.
7. Error handling.
8. Theme (color, logo etc).
9. Option to create an account/email-id if required.
10. API implementation for getting the account/data list.

### APIs
1. Get all accounts.
2. Get all accounts by page.
3. Mark as favorite.
4. Access account.