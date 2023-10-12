//utility function for constructing className strings conditionally.
//counterpart clsx library

type Cx = (...a: Array<undefined | null | string | boolean>) => string;

export const cx: Cx = (...args): string => {
  return args
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ');
};
