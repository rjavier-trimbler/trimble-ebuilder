import {  server } from '@trimble-ebuilder/shared/data-access';

beforeAll(()=> server.listen())

afterEach(()=> server.resetHandlers());

afterAll(()=> server.close());
