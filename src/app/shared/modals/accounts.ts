export class GetAccounts {
    search: any = null;
    limit: number = null;
    startDate: number = null;
    endDate: number = null;
    offset: number = 0;
    userId: number = null;
}

export class AddAccount {
    accountName: string;
    accountNo: string;
    bankName: string;
    accountType: number;
    ifscCode: string;
    initialAmount?: number;
    userId: number;
}
