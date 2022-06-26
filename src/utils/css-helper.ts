import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

export const getClassNames = (
  data: Record<string, string>,
  className: string,
): CSSTransitionClassNames => ({
  appear: data[`${className}-appear`],
  appearActive: data[`${className}-appear-active`],
  appearDone: data[`${className}-appear-done`],
  enter: data[`${className}-enter`],
  enterActive: data[`${className}-enter-active`],
  enterDone: data[`${className}-enter-done`],
  exit: data[`${className}-exit`],
  exitActive: data[`${className}-exit-active`],
  exitDone: data[`${className}-exit-done`],
});
