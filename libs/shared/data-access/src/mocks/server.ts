import { setupServer } from 'msw/node';
import {  AuthLogin } from './auth'

const handlers = [
  AuthLogin
]

export const server = setupServer(...handlers);
