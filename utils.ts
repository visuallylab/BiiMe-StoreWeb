export function splitOnFirst(input: string, separator: string) {
  if (separator === '') {
    return [input];
  }

  const separatorIndex = input.indexOf(separator);

  if (separatorIndex === -1) {
    return [input];
  }

  return [
    input.slice(0, separatorIndex),
    input.slice(separatorIndex + separator.length),
  ];
}

export function parseQs(url: string): { [key: string]: string } {
  const input = /([^\?]+)\?(.*)?/g.exec(url);
  if (!input) {
    return {};
  }

  const qs: { [key: string]: string } = {};
  for (const param of input[2].split('&')) {
    const [key, value] = splitOnFirst(param, '=');
    qs[key] = value;
  }

  return qs;
}
