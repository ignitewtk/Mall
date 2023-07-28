

import { setupServer } from "msw/node"
import { ResponseComposition, RestContext, RestRequest, rest } from 'msw'
import { http } from '../utils/http'

// handle unit testing of Async HTTP request

// Set up mock testing environment
const apiUrl = process.env.REACT_APP_API_URL

const server = setupServer()

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

test('demo method sending async request',async () => {
    const endpoint = 'test-endpoint'
    const mockResult = { mockValue: 'mock'}

    server.use(
        rest.get(`${apiUrl}/${endpoint}`, 
        (req: RestRequest, res: ResponseComposition, ctx: RestContext) => res(ctx.json(mockResult)))
    )

    const result = await http(endpoint, {data: mockResult})
    expect(result).toEqual(mockResult)
})

// test('test http request with token in header',async () => {
//     const endpoint = 'test-endpoint'
//     const mockResult = { mockValue: 'mock'}
//     const token = "Fake_Token"
    
//     let request: any
//     server.use(
//         rest.get(`${apiUrl}/${endpoint}`, 
//         async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
//             request = req
//             return res(ctx.json(mockResult))
//         })
//     )
//     await http(endpoint, {token})
//     expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`)
// })