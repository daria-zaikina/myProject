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

export const deleteShowplace = {
  path: '/api/v001/showplaces/:id',
  method: 'DELETE',
};
