// import React, { createContext, useReducer, useContext } from 'react';
// import {ModalState, ModalDispatch, Action} from '../types'


// const ModalStateContext = createContext<ModalState | undefined>(undefined);
// const ModalDispatchContext = createContext<ModalDispatch | undefined>(
//   undefined
// );

// function modalReducer(state: ModalState, action: Action): ModalState {
//   switch (action.type) {
//     case 'SHOW_MODAL':
//       return state.filter(feedback => feedback.id !== action.id);
//       default: 
//       console.error(`Unhandled action type ${action.type}`);
//       return state;
//   }
// }

// export function FeedbackContextProvider({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const [feedbacks, dispatch] = useReducer(feedbackReducer, []);

//   return (
//     <FeedbackDispatchContext.Provider value={dispatch}>
//       <FeedbackStateContext.Provider value={feedbacks}>
//         {children}
//       </FeedbackStateContext.Provider>
//     </FeedbackDispatchContext.Provider>
//   );
// }

// export function useFeedbackState() {
//   const state = useContext(FeedbackStateContext);
//   if (!state) throw new Error('Feedback Provider not found');
//   return state;
// }

// export function useFeedbackDispatch() {
//   const dispatch = useContext(FeedbackDispatchContext);
//   if (!dispatch) throw new Error('Feedback Provider not found');
//   return dispatch;
// }
