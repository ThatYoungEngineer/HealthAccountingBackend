interface PaginatedResult<T> {
    Rows: T[];
    TotalCount: any;
}
declare class SearchFilter {
    page: number;
    rowsPerPage: number;
}
export { PaginatedResult, SearchFilter };
