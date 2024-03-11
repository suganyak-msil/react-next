
export enum EStatusErrorType {
    ClientError = 1,
    ServerError = 2,
    GeneralNetworkError = 3,
    UnknownError = 4,
}

export interface NetworkStatusError {
    errortype: EStatusErrorType,
    code: number,
    message: string
};

