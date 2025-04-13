
import getLevel from '../app';
import {fetchData} from '../http';


jest.mock('../http');

beforeEach(() => {
jest.resetAllMocks();
});

test('check getLevel', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  let inf = getLevel(1);
  expect(fetchData).toHaveBeenCalledWith(`https://server/user/1`);
  expect(inf).toBe(`Информация об уровне временно недоступна`);
})