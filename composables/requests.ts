import { NoteController, createClient } from '@omc-space/api-client'

import { fetchAdaptor } from '@omc-space/api-client/adapters'

export const apiClient = createClient(fetchAdaptor)('http://127.0.0.1:2333', {
  controllers: [NoteController],
})
