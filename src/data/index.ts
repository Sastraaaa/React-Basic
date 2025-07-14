export interface ResponseGetData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ResponsePostData {
  title: string;
  body: string;
  userId?: number;
}
