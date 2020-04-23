function findBy(attr, value) {
  return (obj) => obj[attr] === value;
}

export default findBy;
