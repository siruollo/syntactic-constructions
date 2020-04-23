import findBy from '..findBy';

test('Тест', () => {
  const received = findBy('name', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(received);

  const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];

  expect(results).toEqual(expected);
});

test('Тест 2 результата', () => {
  const received = findBy('name', 'урон');
  const results = [{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'урон', type: 'help', description: '2 Страница описания элемента интерфейса' },
  ].filter(received);

  const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'урон', type: 'help', description: '2 Страница описания элемента интерфейса' }];

  expect(results).toEqual(expected);
});

test('Тест пустой запрос', () => {
  const received = findBy();
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(received);

  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  expect(results).toEqual(expected);
});
