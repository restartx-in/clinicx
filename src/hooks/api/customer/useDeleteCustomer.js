import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/utils/axios/api'
import { API_ENDPOINTS } from '@/config/api'

export function useDeleteCustomer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id) => {
      const res = await api.delete(API_ENDPOINTS.CUSTOMERS.BY_ID(id))
      return res.data
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['customers'] })
      queryClient.refetchQueries({ queryKey: ['customers_paginated'] })
    },
  })
}
export default useDeleteCustomer
