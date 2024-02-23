interface Options {
  params?: any
  body?: any
  query?: any
  method?: 'get' | 'post' | 'delete' | 'put'
}

export function http<T>(url: string, options?: Options): Promise<T> {
  const env = useRuntimeConfig()
  const baseUrl = env.public.VITE_REQUEST_BASE_URL as string
  const reqHeaders = useRequestHeaders()
  return $fetch(url, {
    onRequest: ({ request: _request, options }) => {
      options.baseURL = options.baseURL === '/' ? baseUrl : options.baseURL
    },
    onResponse: ({ request: _request, response, options: _options }) => {
      console.log(response)
      const { code } = response._data
      if (code !== 200) {
        // console.log(url, request, response._data)
      }
      return response._data
    },
    onRequestError: ({ request: _request, options: _options, error }) => {
      // eslint-disable-next-line no-console
      console.log('FetchError=>', error)
      showError({ statusCode: 500, message: '服务器错误' })
      throw createError({ statusCode: 500, statusMessage: error.message })
    },
    ...options,
    headers: {
      'x-forwarded-for': reqHeaders['x-forwarded-for'] ?? '',
      'user-agent': reqHeaders['user-agent'] ?? '',
    },
  })
}
