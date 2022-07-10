import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export type Feedback = {
    id: number;
    title: string;
    desc: boolean;
    tags: [];
    vote: number;
};

export type FeedbackState = Feedback[];

const FeedbackStateContext = createContext<FeedbackState | undefined>(undefined);

type Action =
  | { type: 'ADD_FEEDBACK'; data: Feedback }
  | { type: 'DELETE_FEEDBACK'; id: number }
  | { type: 'VOTE_FEEDBACK'; id: number };

type FeedbackDispatch = Dispatch<Action>;
const FeedbackDispatchContext = createContext<FeedbackDispatch | undefined>(
  undefined
);

function feedbackReducer(state: FeedbackState, action: Action): FeedbackState {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      const nextId = Math.max(...state.map(feedback => feedback.id)) + 1;
      return state.concat({
        id: nextId,
            title: action.data.title,
            desc: action.data.desc,
            tags: action.data.tags,
            vote: action.data.vote,
      });
    case 'DELETE_FEEDBACK':
      return state.filter(feedback => feedback.id !== action.id);
      default: 
      console.error(`Unhandled action type ${action.type}`);
      return state;
  }
}

export function FeedbackContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [feedbacks, dispatch] = useReducer(feedbackReducer, []);

  return (
    <FeedbackDispatchContext.Provider value={dispatch}>
      <FeedbackStateContext.Provider value={feedbacks}>
        {children}
      </FeedbackStateContext.Provider>
    </FeedbackDispatchContext.Provider>
  );
}

export function useFeedbackstate() {
  const state = useContext(FeedbackStateContext);
  if (!state) throw new Error('Feedback Provider not found');
  return state;
}

export function useFeedbacksDispatch() {
  const dispatch = useContext(FeedbackDispatchContext);
  if (!dispatch) throw new Error('Feedback Provider not found');
  return dispatch;
}
