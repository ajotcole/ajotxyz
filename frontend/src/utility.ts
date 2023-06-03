export const padLeft = (nr: number, n: number, str?: string): string => {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  };
  
  export const formatDate = (d: Date) => {
    return padLeft(d.getDate(), 2) + '.' + padLeft(d.getMonth() + 1, 2) + '.' + d.getFullYear();
  };
  
  export const formatDateTime = (d: Date) => {
    return `${formatDate(d)} ${padLeft(d.getHours(), 2)}:${padLeft(d.getMinutes(), 2)}:${padLeft(d.getSeconds(), 2)}`;
  };