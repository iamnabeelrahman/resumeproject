export function successResponse<T>(data: T, message = 'Success', statusCode = 200) {
  return {
    status: 'success',
    message,
    data,
    statusCode,
  };
}

export function errorResponse(message: string, statusCode = 400, errors?: any) {
  return {
    status: 'error',
    message,
    errors,
    statusCode,
  };
}

export function paginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
  message = 'Success'
) {
  return {
    status: 'success',
    message,
    data,
    pagination: {
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    },
  };
}
