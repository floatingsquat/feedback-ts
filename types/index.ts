export type FeedbackItem = {
    id: number;
    title: string;
    desc: boolean;
    tags: [];
    vote: number;
  }
  
  export type FeedbackState = {
    data: FeedbackItem[];
  }
  
  export type ContextModel ={
    state: FeedbackState;
    dispatch: React.Dispatch<FeedbackAction>;
  }
  
  export type FeedbackAction =
    | { type: 'ADD_FEEDBACK'; payload: FeedbackItem }
    | { type: 'DELETE_FEEDBACK'; payload: number } 
    | { type: 'VOTE_FEEDBACK'; };