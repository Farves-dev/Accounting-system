/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/dashboard',
    },
    {
        id: 'income',
        title: 'Income',
        type: 'collapsable',
        icon: 'heroicons_outline:currency-dollar',
        children: [
            {
                id: 'income.addIncome',
                title: 'Add Income',
                type: 'basic',
                link: '/income/add-income',
            },
            {
                id: 'income.incomeCategories',
                title: 'Income Categories',
                type: 'basic',
                link: '/income/income-categories',
            },
        ],
    },
    {
        id: 'expense',
        title: 'Expense',
        type: 'collapsable',
        icon: 'mat_outline:account_balance_wallet',
        children: [
            {
                id: 'expense.addExpense',
                title: 'Add Expense',
                type: 'basic',
                link: '/expense/add-expense',
            },
            {
                id: 'expense.expenseCategories',
                title: 'Expense Categories',
                type: 'basic',
                link: '/expense/expense-categories',
            },
        ],
    },
    {
        id: 'accounts',
        title: 'Accounts',
        type: 'collapsable',
        icon: 'mat_outline:account_box',
        children: [
            {
                id: 'accounts.newAccount',
                title: 'New Account',
                type: 'basic',
                link: '/accounts/new-account',
            },
            {
                id: 'accounts.manageAccount',
                title: 'Manage Accounts',
                type: 'basic',
                link: '/accounts/manage-account',
            },
            {
                id: 'accounts.transactions',
                title: 'Transactions',
                type: 'basic',
                link: '/accounts/transactions',
            },
            {
                id: 'accounts.profitAndLoss',
                title: 'Profit and Loss',
                type: 'basic',
                link: '/accounts/profit-and-loss',
            },
        ],
    },
    {
        id: 'tax',
        title: 'Tax',
        type: 'collapsable',
        icon: 'heroicons_outline:receipt-tax',
        children: [
            {
                id: 'tax.addTax',
                title: 'Add Tax',
                type: 'basic',
                link: '/tax/add-tax',
            },
            {
                id: 'tax.manageTax',
                title: 'Manage Tax',
                type: 'basic',
                link: '/tax/manage-tax',
            },
            {
                id: 'tax.taxStatement',
                title: 'Tax Statement',
                type: 'basic',
                link: '/tax/tax-statement',
            },
        ],
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'collapsable',
        icon: 'heroicons_outline:document-text',
        children: [
            {
                id: 'reports.incomeReport',
                title: 'Income Report',
                type: 'basic',
                link: '/reports/income-report',
            },
            {
                id: 'reports.expenseReport',
                title: 'Expense Report',
                type: 'basic',
                link: '/reports/expense-report',
            },
            {
                id: 'reports.taxReport',
                title: 'Tax Report',
                type: 'basic',
                link: '/reports/tax-report',
            },
            {
                id: 'reports.accountsStatement',
                title: 'Accounts Statement',
                type: 'basic',
                link: '/reports/accounts-statement',
            },
        ],
    },
    {
        id: 'roles-and-permissions',
        title: 'Roles and Permissions',
        type: 'collapsable',
        icon: 'feather:user',
        children: [
            {
                id: 'roles-and-permissions.newUser',
                title: 'New User',
                type: 'basic',
                link: '/roles-and-permissions/new-user',
            },
            {
                id: 'roles-and-permissions.manageUser',
                title: 'Manage User',
                type: 'basic',
                link: '/roles-and-permissions/manage-user',
            },
            {
                id: 'roles-and-permissions.manage-roles',
                title: 'Manage Roles',
                type: 'basic',
                link: '/roles-and-permissions/manage-roles',
            },
        ],
    },
    // {
    //     id: 'log',
    //     title: 'System Log',
    //     type: 'basic',
    //     icon: 'heroicons_outline:document-report',
    //     link: '/log',
    // },
    // {
    //     id: 'settings',
    //     title: 'Settings',
    //     type: 'basic',
    //     icon: 'heroicons_outline:cog',
    //     link: '/settings',
    // },
];
// export const compactNavigation: FuseNavigationItem[] = [
//     {
//         id: 'example',
//         title: 'Example',
//         type: 'basic',
//         icon: 'heroicons_outline:chart-pie',
//         link: '/example',
//     },
// ];
// export const futuristicNavigation: FuseNavigationItem[] = [
//     {
//         id: 'example',
//         title: 'Example',
//         type: 'basic',
//         icon: 'heroicons_outline:chart-pie',
//         link: '/example',
//     },
// ];
// export const horizontalNavigation: FuseNavigationItem[] = [
//     {
//         id: 'example',
//         title: 'Example',
//         type: 'basic',
//         icon: 'heroicons_outline:chart-pie',
//         link: '/example',
//     },
// ];
