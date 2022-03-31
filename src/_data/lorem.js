const { faker } = require("@faker-js/faker");
const _random = require("lodash.random");

const PAGE_COUNT = 20_000;

module.exports = () => {
  return Array.from({ length: PAGE_COUNT })
    .fill(() => {
      const pCount = _random(5, 12);
      return {
        title: faker.name.findName(),
        phrase: faker.hacker.phrase(),
        content: faker.lorem.paragraphs(pCount),
      };
    });
};
