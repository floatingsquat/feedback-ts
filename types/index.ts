import { Dispatch } from "react";

export type Feedback = {
    id: number;
    title: string;
    desc: string;
    tags: Array<string>;
    vote: number;
};

export type FeedbackState = Feedback[];



export type Action =
  | { type: 'ADD_FEEDBACK'; data: Feedback }
  | { type: 'DELETE_FEEDBACK'; id: number }
  | { type: 'VOTE_FEEDBACK'; id: number };

export type FeedbackDispatch = Dispatch<Action>;