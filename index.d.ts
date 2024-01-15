declare module "*.jpg" {
  const path: string;
  export default path;
}
declare module "*.jpeg" {
  const path: string;
  export default path;
}
declare module "*.svg" {
  const path: string;
  export default path;
}
declare module "*.png" {
  const path: string;
  export default path;
}

declare namespace jest {
  interface Expect {
    <T = any>(
      actual: T,
      message?: string,
      options?: {
        showMatcherMessage?: boolean;
        showPrefix?: boolean;
        showStack?: boolean;
      },
    ): JestMatchers<T>;
  }
}
