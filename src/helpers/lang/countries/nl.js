function formatToLongString(time, type) {
  switch (type) {
    case 'seconde':
    case 'dag':
      return `${time} ${type}${time > 1 ? 'n' : ''} geleden`;
    case 'minuut':
      return `${time} ${time > 1 ? 'minuten' : 'minuut'} geleden`;
    case 'uur':
      return `${time} uur geleden`;
  }

  return `${time} ${type}${time > 1 ? 'n' : ''} geleden`;
}

export default {
  short: {
    now: 'zojuist',
    sec: 's',
    min: 'm',
    hour: 'u',
    day: 'd',
  },
  long: {
    now: 'zojuist',
    sec: (time) => formatToLongString(time, 'seconde'),
    min: (time) => formatToLongString(time, 'minuut'),
    hour: (time) => formatToLongString(time, 'uur'),
    day: (time) => formatToLongString(time, 'dag'),
  },
}
