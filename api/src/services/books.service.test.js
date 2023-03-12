// books.service.test.js
const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      const books = await service.getBooks({});
      expect(books.length).toEqual(1);
    });
  });
  describe('test for getBooks', () => {
    test('should return a name book', async () => {
      const books = await service.getBooks({});
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
