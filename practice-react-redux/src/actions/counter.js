// 액션 타입
export const SET_DIFF = 'SET_DIFF';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

// 액션 생성함수
export const setDiff = diff => ({ type: SET_DIFF, diff});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });