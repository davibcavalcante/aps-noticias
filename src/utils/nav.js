const handleClick = (method) => {
  window.alert(`Visualizar ${method}`)
};

export const links = [
  {
    label: 'Relatório',
    func: () => handleClick('relatório')
  },
  {
    label: 'Gráficos',
    func: () => handleClick('gráficos')
  },
  {
    label: 'Notícias',
    func: () => handleClick('notícias')
  },
];