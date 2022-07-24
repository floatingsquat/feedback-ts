import React, { createContext, useReducer, useContext } from 'react';
import {FeedbackState, FeedbackDispatch, Action} from '../types'


const FeedbackStateContext = createContext<FeedbackState | undefined>(undefined);
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
    case 'VOTE_FEEDBACK':
      //const feedbackId = state.find((x) => x.id === action.id)
      return state.map((x)=> x.id === action.id ? {...x, vote:x.vote +1} : x)
    default: 
      console.error(`Unhandled action type`);
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

export function useFeedbackState() {
  const state = useContext(FeedbackStateContext);
  if (!state) throw new Error('Feedback Provider not found');
  return state;
}

export function useFeedbackDispatch() {
  const dispatch = useContext(FeedbackDispatchContext);
  if (!dispatch) throw new Error('Feedback Provider not found');
  return dispatch;
}
