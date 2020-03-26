module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.durability = 100;
    return { ...item, enhancement: item.enhancement++ };
  } else {
    return { ...item, enhancement: 20 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: (item.durability += 5) };
  }
  if (item.enhancement >= 15) {
    return { ...item, durability: (item.durability -= 10) };
  } else if (item.enhancement > 16) {
    return { ...item, enhancement: item.enhancement-- };
  }

  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
