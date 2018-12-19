// export const fetchShowplaces = {
//   path: '/api/v001/showplaces',
//   method: 'GET',
// };

export const fetchShowplaces = {
  path: '/api/v001/showplaces/:adventureId',
  method: 'GET',
};

export const createShowplace = {
  path: '/api/v001/showplaces',
  method: 'POST',
};
