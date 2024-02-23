interface Options {
  params?: any
  body?: any
  query?: any
  method?: 'get' | 'post' | 'delete' | 'put'
}

function createClient() {
  return function<T>(url: string, options?: Options): Promise<T> {
    const reqHeaders = useRequestHeaders()
    const env = useRuntimeConfig()
    const baseUrl = env.public.VITE_REQUEST_BASE_URL as string
    return $fetch(url, {
      onRequest: ({ request: _request, options }) => {
        options.baseURL = options.baseURL === '/' ? baseUrl : options.baseURL
      },
      onResponse: ({ request: _request, response, options: _options }) => {
        const { status, _data } = response
        if (status !== 200)
        // console.log(_data)

        // showError({ statusCode: status, message: _data.message })
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
}

export const http = createClient()