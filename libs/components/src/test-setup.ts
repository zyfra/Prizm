import 'jest-preset-angular/setup-jest';

const observe = jest.fn();
const unobserve = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));
