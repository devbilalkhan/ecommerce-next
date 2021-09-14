export interface ApiFetchResults<T> {
    data: T
}

export type ApiFetchArgs = { url: string; query: string }
export interface ApiConfig {
    apiUrl: string
    fetch<T>({ url, query }: ApiFetchArgs): Promise<ApiFetchResults<T>>
}
