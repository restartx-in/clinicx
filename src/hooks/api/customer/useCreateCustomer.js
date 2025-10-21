import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/utils/axios/api'
import { API_ENDPOINTS } from '@/config/api'

const createCustomer = async (data) => {
  const res = await api.post(API_ENDPOINTS.CUSTOMERS.BASE, data)
  return res.data
}

export function useCreateCustomer() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['customers'] })
      queryClient.refetchQueries({ queryKey: ['customers_paginated'] })

    },
  })
}
export default useCreateCustomer
