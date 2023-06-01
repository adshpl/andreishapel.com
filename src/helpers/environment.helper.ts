import { EnvironmentConstant } from '../constants/environment.constant';

export const isProduction = () => {
  return process.env.NODE_ENV === EnvironmentConstant.PRODUCTION;
};

export const isDevelopment = () => {
  return process.env.NODE_ENV === EnvironmentConstant.DEVELOPMENT;
}

export const isTest = () => {
  return process.env.NODE_ENV === EnvironmentConstant.TEST;
}
