export interface AuthI {
  email: string;
  userId: number;
  username: string;
  password: string;
}

export interface PoliciesI {
  num: string;
  polId: number;
  amount: number;
  userId: number;
  description: string;
}

export interface PoliciesDetailsI {
  polId: number;
  amount: number;
  detailsId: number;
  clientName: string;
}

export interface RouterLinkI {
  label: string;
  link: string;
}
