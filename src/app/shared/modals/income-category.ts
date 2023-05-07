export class AddIncomeCategory {
    categoryName: string;
    categoryType: number = 0;
    userId: number = 4;
}

export class getIncomeCategory {
    search: any = null;
    limit: number = null;
    startDate: number = null;
    endDate: number = null;
    offset: number = null;
    type: number = 0;
    userId: number = null;
}
